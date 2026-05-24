const projects = [
  {
    category: "Application Development",
    title: "Meridian — Fleet Intelligence Platform",
    description:
      "A real-time logistics intelligence system processing 2M+ data points daily. Rebuilt the mental model of fleet management from the ground up.",
    tags: ["Next.js", "Rust", "ClickHouse", "Kafka"],
    accent: "sky",
    gradient: "from-sky-900/30 to-slate-900/0",
  },
  {
    category: "Systems Architecture",
    title: "Axiom — Distributed Data Mesh",
    description:
      "Designed and deployed a zero-downtime data mesh for a multinational financial services group, replacing a monolithic system handling £3B in daily transactions.",
    tags: ["Kubernetes", "gRPC", "Terraform", "PostgreSQL"],
    accent: "indigo",
    gradient: "from-indigo-900/30 to-slate-900/0",
  },
  {
    category: "Philosophical Design",
    title: "Locus — Learning Environment",
    description:
      "An adaptive learning platform designed around epistemological first principles. The interface teaches learners how they learn, not just what they learn.",
    tags: ["React", "TypeScript", "Figma", "AI"],
    accent: "purple",
    gradient: "from-purple-900/30 to-slate-900/0",
  },
  {
    category: "Business Consulting",
    title: "Strategic Pivot — HealthTech Scale-Up",
    description:
      "Guided a Series B HealthTech through a complete strategic repositioning, from product-led growth to enterprise sales. ARR grew 3× in 18 months.",
    tags: ["Strategy", "GTM", "OKRs", "Executive Coaching"],
    accent: "pink",
    gradient: "from-pink-900/30 to-slate-900/0",
  },
];

const accentTextMap: Record<string, string> = {
  sky: "text-sky-400",
  indigo: "text-indigo-400",
  purple: "text-purple-400",
  pink: "text-pink-400",
};

const accentTagMap: Record<string, string> = {
  sky: "bg-sky-500/10 text-sky-400",
  indigo: "bg-indigo-500/10 text-indigo-400",
  purple: "bg-purple-500/10 text-purple-400",
  pink: "bg-pink-500/10 text-pink-400",
};

export default function Portfolio() {
  return (
    <section id="work" className="py-28 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sky-400 text-sm font-medium tracking-widest uppercase mb-4">
            Selected Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 leading-tight">
            Problems solved,
            <span className="text-gradient"> ideas realised</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            A selection of engagements that reflect the breadth and depth of our practice.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className={`card-glow rounded-2xl overflow-hidden bg-gradient-to-br ${p.gradient} bg-slate-900/40 group`}
            >
              <div className="p-8">
                <p className={`text-xs font-medium tracking-widest uppercase mb-3 ${accentTextMap[p.accent]}`}>
                  {p.category}
                </p>
                <h3 className="text-xl font-semibold text-slate-100 mb-3 group-hover:text-white transition-colors">
                  {p.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className={`text-xs px-2.5 py-1 rounded-full ${accentTagMap[p.accent]} font-medium`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium border border-slate-700 text-slate-300 hover:border-sky-500/40 hover:text-sky-400 transition-all"
          >
            Start your project
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
