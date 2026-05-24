import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AntaresCorp — Philosophical Technology",
  description:
    "AntaresCorp builds applications, systems, and strategies grounded in philosophical design. We unite technology with deep thinking.",
  keywords: ["technology", "consulting", "philosophy", "software", "design", "systems"],
  openGraph: {
    title: "AntaresCorp — Philosophical Technology",
    description:
      "Technology shaped by first principles. AntaresCorp delivers apps, systems architecture, and business consulting with philosophical precision.",
    url: "https://antarescorp.uk",
    siteName: "AntaresCorp",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#020617] text-slate-200">
        {children}
      </body>
    </html>
  );
}
