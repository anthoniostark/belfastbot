const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Application Development",
    description:
      "We design and build web and mobile applications that solve real problems with elegant simplicity. Every interface is a statement of intent.",
    tags: ["Web Apps", "Mobile", "APIs", "SaaS"],
    accent: "sky",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: "Systems Architecture",
    description:
      "Complex infrastructure, designed with clarity. We architect scalable, resilient systems that reflect a coherent vision rather than accumulated compromise.",
    tags: ["Cloud", "Microservices", "Infrastructure", "DevOps"],
    accent: "indigo",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Business Consulting",
    description:
      "Strategic guidance for organisations at inflection points. We help you see clearly, decide wisely, and move with conviction.",
    tags: ["Strategy", "Transformation", "Analysis", "Leadership"],
    accent: "purple",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: "Philosophical Design",
    description:
      "Design that asks what things mean before it asks what they look like. We create experiences with intention — where every detail earns its place.",
    tags: ["UX/UI", "Brand Identity", "Systems Design", "Experience"],
    accent: "pink",
  },
];

const accentClasses: Record<string, { bg: string; border: string; text: string; tag: string }> = {
  sky: {
    bg: "bg-sky-500/10",
    border: "border-sky-500/20",
    text: "text-sky-400",
    tag: "bg-sky-500/10 text-sky-400",
  },
  indigo: {
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
    text: "text-indigo-400",
    tag: "bg-indigo-500/10 text-indigo-400",
  },
  purple: {
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    text: "text-purple-400",
    tag: "bg-purple-500/10 text-purple-400",
  },
  pink: {
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
    text: "text-pink-400",
    tag: "bg-pink-500/10 text-pink-400",
  },
};

export default function Services() {
  return (
    <section id="services" className="py-28 px-6 relative">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-sky-400 text-sm font-medium tracking-widest uppercase mb-4">
            What We Do
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 leading-tight">
            Four disciplines,
            <span className="text-gradient"> one philosophy</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            Each service area is shaped by the same commitment: understand
            deeply, design deliberately, build precisely.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => {
            const a = accentClasses[s.accent];
            return (
              <div
                key={s.title}
                className="card-glow rounded-2xl p-8 bg-slate-900/40 group"
              >
                <div className={`w-12 h-12 rounded-xl ${a.bg} border ${a.border} ${a.text} flex items-center justify-center mb-5 transition-transform group-hover:scale-110`}>
                  {s.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-100 mb-3">
                  {s.title}
                </h3>
                <p className="text-slate-400 leading-relaxed mb-5 text-sm">
                  {s.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className={`text-xs px-2.5 py-1 rounded-full ${a.tag} font-medium`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
