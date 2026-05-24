"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const stars: { x: number; y: number; r: number; opacity: number; speed: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 120; i++) {
      stars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 1.2 + 0.2,
        opacity: Math.random() * 0.6 + 0.1,
        speed: Math.random() * 0.003 + 0.001,
      });
    }

    let t = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.01;
      stars.forEach((s) => {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        const pulse = s.opacity + Math.sin(t * s.speed * 100) * 0.15;
        ctx.fillStyle = `rgba(148,163,184,${Math.max(0, Math.min(1, pulse))})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-60"
      />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-sky-500/5 blur-[120px]" />
        <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] rounded-full bg-indigo-500/5 blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-sky-500/20 bg-sky-500/5 text-sky-400 text-xs font-medium mb-8 tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
          Philosophical Technology
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.08] tracking-tight mb-6">
          <span className="text-slate-100">Where Thought</span>
          <br />
          <span className="text-gradient">Shapes Technology</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg text-slate-400 leading-relaxed mb-10">
          AntaresCorp builds applications, systems, and strategies from first
          principles — uniting rigorous philosophical design with precision
          engineering to create technology that endures.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-sky-500 text-slate-950 hover:bg-sky-400 transition-colors shadow-lg shadow-sky-500/20"
          >
            View Our Work
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium border border-slate-700 text-slate-300 hover:border-sky-500/40 hover:text-sky-400 transition-all"
          >
            Learn More
          </a>
        </div>

        <div className="mt-20 flex flex-wrap items-center justify-center gap-8 text-slate-500 text-sm">
          {["Apps", "Systems", "Consulting", "Design"].map((tag) => (
            <span key={tag} className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-sky-500/50" />
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
