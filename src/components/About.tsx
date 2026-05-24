const stats = [
  { value: "10+", label: "Years in the field" },
  { value: "40+", label: "Projects delivered" },
  { value: "3", label: "Continents served" },
  { value: "∞", label: "Questions asked" },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sky-400 text-sm font-medium tracking-widest uppercase mb-4">
              Who We Are
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100 leading-tight mb-6">
              Technology grounded in
              <span className="text-gradient"> deep thinking</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-5">
              AntaresCorp was built on a conviction that most technology fails
              not from lack of capability, but from lack of clarity. We ask
              why before we ask how — and the difference shows in everything
              we build.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              From bespoke applications to enterprise systems architecture and
              strategic consulting, we bring a philosopher&apos;s discipline and an
              engineer&apos;s precision to every engagement.
            </p>
            <a
              href="#services"
              className="inline-flex items-center gap-2 text-sky-400 text-sm font-medium hover:gap-3 transition-all"
            >
              Explore our services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="card-glow rounded-2xl p-6 bg-slate-900/50"
              >
                <p className="text-4xl font-bold text-gradient mb-2">{s.value}</p>
                <p className="text-slate-400 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
