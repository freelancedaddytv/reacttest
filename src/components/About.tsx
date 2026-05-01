const stats = [
  { value: '7+', label: 'Years experience' },
  { value: '80+', label: 'Projects delivered' },
  { value: '50+', label: 'Happy clients' },
  { value: '99%', label: 'On-time delivery' },
]

const reasons = [
  {
    icon: '⚡',
    title: 'Fast & Reliable',
    body: 'I deliver clean, production-ready code on schedule — no bloat, no excuses.',
  },
  {
    icon: '🎯',
    title: 'Results-Focused',
    body: "Every decision is tied to your goals, whether that's conversions, performance, or UX.",
  },
  {
    icon: '🔍',
    title: 'Transparent Process',
    body: 'Regular updates, clear milestones, and zero surprises throughout the project.',
  },
  {
    icon: '🛡️',
    title: 'Quality by Default',
    body: 'TypeScript, tests, and code review best practices come standard — not as an add-on.',
  },
  {
    icon: '🤝',
    title: 'True Partnership',
    body: 'I think like a co-founder: your success is my metric, not just hours billed.',
  },
  {
    icon: '🔄',
    title: 'Ongoing Support',
    body: "Post-launch care, bug fixes, and iterative improvements — I'm here for the long run.",
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-violet-600 tracking-widest uppercase">
            Why Work With Me
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">
            A developer you can trust
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto text-lg">
            I combine technical depth with clear communication to deliver software that actually works for your business.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-100 rounded-2xl overflow-hidden mb-20 shadow-sm">
          {stats.map((s) => (
            <div key={s.label} className="bg-white py-10 px-6 text-center">
              <p className="text-4xl font-extrabold text-violet-700">{s.value}</p>
              <p className="mt-1 text-sm text-slate-500">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Reasons grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="group p-8 rounded-2xl border border-slate-100 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-violet-50 flex items-center justify-center text-2xl mb-5 group-hover:bg-violet-100 transition-colors">
                {r.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{r.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
