#!/usr/bin/env python3
"""Katz Discord Bot — bridges Discord to the Katz AI backend."""

import discord
import aiohttp
import json
import os
import logging

logging.basicConfig(level=logging.INFO)
log = logging.getLogger("katz-discord")

BACKEND_URL   = os.getenv("KATZ_BACKEND_URL", "http://localhost:5600")
BOT_TOKEN     = os.getenv("DISCORD_BOT_TOKEN", "")
SESSIONS_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "discord_sessions.json")


def _load_sessions() -> dict:
    if os.path.exists(SESSIONS_FILE):
        with open(SESSIONS_FILE) as f:
            return json.load(f)
    return {}


def _save_sessions(sessions: dict) -> None:
    with open(SESSIONS_FILE, "w") as f:
        json.dump(sessions, f, indent=2)


# user_id (str) -> session_id (str)
user_sessions: dict = _load_sessions()


async def _create_session(http: aiohttp.ClientSession, label: str) -> str:
    async with http.post(
        f"{BACKEND_URL}/sessions/new",
        json={"title": f"Discord — {label}"},
    ) as resp:
        data = await resp.json()
        return data["id"]


async def _ensure_session(http: aiohttp.ClientSession, user_id: str, label: str) -> str:
    """Return a valid session id for this user, creating one if needed."""
    sid = user_sessions.get(user_id)
    if sid:
        async with http.get(f"{BACKEND_URL}/sessions/{sid}") as resp:
            if resp.status == 200:
                return sid
    sid = await _create_session(http, label)
    user_sessions[user_id] = sid
    _save_sessions(user_sessions)
    return sid


async def _chat(http: aiohttp.ClientSession, sid: str, message: str) -> str | None:
    """POST a message to the backend. Returns response text, or None if session missing."""
    async with http.post(
        f"{BACKEND_URL}/chat/{sid}",
        json={"message": message},
    ) as resp:
        if resp.status == 404:
            return None
        data = await resp.json()
        return data.get("response", "...")


intents = discord.Intents.default()
intents.message_content = True
client = discord.Client(intents=intents)


@client.event
async def on_ready():
    log.info("Katz is online as %s (ID: %s)", client.user, client.user.id)


@client.event
async def on_message(message: discord.Message):
    if message.author.bot:
        return

    is_dm      = isinstance(message.channel, discord.DMChannel)
    is_mention = client.user in message.mentions

    if not is_dm and not is_mention:
        return

    # Strip bot mention from content
    content = message.content
    for tag in (f"<@{client.user.id}>", f"<@!{client.user.id}>"):
        content = content.replace(tag, "")
    content = content.strip()

    if not content:
        return

    user_id = str(message.author.id)
    label   = message.author.display_name

    async with message.channel.typing():
        async with aiohttp.ClientSession() as http:
            sid      = await _ensure_session(http, user_id, label)
            response = await _chat(http, sid, content)

            if response is None:
                # Session expired on backend — create fresh and retry
                user_sessions.pop(user_id, None)
                sid      = await _ensure_session(http, user_id, label)
                response = await _chat(http, sid, content) or "..."

    # Discord hard cap is 2000 chars
    if len(response) > 1990:
        response = response[:1990] + "…"

    await message.reply(response, mention_author=False)


if __name__ == "__main__":
    if not BOT_TOKEN:
        raise RuntimeError("DISCORD_BOT_TOKEN environment variable is not set")
    client.run(BOT_TOKEN)
