const stats = [
  { value: '15+', label: 'Years experience' },
  { value: '80+', label: 'Projects delivered' },
  { value: '50+', label: 'Happy clients' },
  { value: '99%', label: 'On-time delivery' },
]

const reasons = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6 text-green-600">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'Fast & Reliable',
    body: 'I deliver clean, production-ready code on schedule with no bloat and no excuses.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6 text-green-600">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
    title: 'Results-Focused',
    body: "Every decision is tied to your goals, whether that's conversions, performance, or UX.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6 text-green-600">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Transparent Process',
    body: 'Regular updates, clear milestones, and zero surprises throughout the project.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6 text-green-600">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'Quality by Default',
    body: 'TypeScript, tests, and code review best practices come standard, not as an add-on.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6 text-green-600">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: 'True Partnership',
    body: "I think like a co-founder: your success is my metric, not just hours billed.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6 text-green-600">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
    title: 'Ongoing Support',
    body: "Post-launch care, bug fixes, and iterative improvements. I'm here for the long run.",
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-green-600 tracking-widest uppercase">
            Why Work With Me
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">
            A developer you can trust
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto text-lg">
            I combine technical depth with clear communication to deliver software that actually works for your business.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-100 rounded-2xl overflow-hidden mb-20 shadow-sm">
          {stats.map((s) => (
            <div key={s.label} className="bg-white py-10 px-6 text-center">
              <p className="text-4xl font-extrabold text-green-700">{s.value}</p>
              <p className="mt-1 text-sm text-slate-500">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="group p-8 rounded-2xl border border-slate-100 hover:border-green-200 hover:shadow-lg hover:shadow-green-50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center mb-5 group-hover:bg-green-100 transition-colors">
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
