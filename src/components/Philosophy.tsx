const principles = [
  {
    number: "01",
    title: "Clarity Before Complexity",
    body: "A system is only as good as its conceptual foundation. We spend time understanding the problem at a fundamental level before a single line is written.",
  },
  {
    number: "02",
    title: "Form Follows Meaning",
    body: "Aesthetic decisions are not decorative — they communicate. Every visual and structural choice should reflect and reinforce the underlying idea.",
  },
  {
    number: "03",
    title: "Questions as Method",
    body: "The right question is more valuable than a premature answer. We practice Socratic inquiry as a design tool, interrogating assumptions before committing to a direction.",
  },
  {
    number: "04",
    title: "Endurance Over Fashion",
    body: "We build for durability. Technology that endures is technology that was designed with honest constraints and genuine purpose.",
  },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-900/10 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="md:sticky md:top-28">
            <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-4">
              Our Foundation
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100 leading-tight mb-6">
              Philosophical design
              <span className="text-gradient"> is not abstract</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-5">
              Philosophy, properly applied, is the most practical discipline
              available to a technology company. It is the art of thinking
              clearly about complex things.
            </p>
            <p className="text-slate-400 leading-relaxed">
              At AntaresCorp, philosophical design means interrogating every
              assumption, honouring every constraint, and refusing to mistake
              familiarity for correctness. The result is technology that makes
              sense — at every level.
            </p>

            <blockquote className="mt-10 border-l-2 border-sky-500/40 pl-6">
              <p className="text-slate-300 italic text-lg leading-relaxed">
                &ldquo;The measure of intelligence is the ability to change.&rdquo;
              </p>
              <footer className="mt-2 text-slate-500 text-sm">— Albert Einstein</footer>
            </blockquote>
          </div>

          <div className="flex flex-col gap-6">
            {principles.map((p) => (
              <div
                key={p.number}
                className="card-glow rounded-2xl p-6 bg-slate-900/40 group hover:bg-slate-900/60 transition-colors"
              >
                <div className="flex items-start gap-5">
                  <span className="text-3xl font-bold text-gradient opacity-60 group-hover:opacity-100 transition-opacity shrink-0">
                    {p.number}
                  </span>
                  <div>
                    <h3 className="text-slate-100 font-semibold mb-2">{p.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{p.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
