const services = [
  {
    title: 'Web App Development',
    description:
      'Full-stack React applications with Node.js/Next.js backends — from MVP to scale-ready architecture.',
    tags: ['React', 'TypeScript', 'Node.js', 'Next.js'],
    gradient: 'from-violet-600 to-indigo-600',
  },
  {
    title: 'API & Backend Engineering',
    description:
      'RESTful and GraphQL APIs designed for performance, security, and long-term maintainability.',
    tags: ['REST', 'GraphQL', 'PostgreSQL', 'Redis'],
    gradient: 'from-indigo-600 to-blue-600',
  },
  {
    title: 'UI / UX Implementation',
    description:
      'Pixel-perfect, accessible interfaces built from Figma designs with smooth animations and responsive layouts.',
    tags: ['Tailwind CSS', 'Figma', 'Framer Motion', 'WCAG'],
    gradient: 'from-fuchsia-600 to-violet-600',
  },
  {
    title: 'Cloud & DevOps',
    description:
      'CI/CD pipelines, containerised deployments, and cloud infrastructure that keeps your app running reliably.',
    tags: ['AWS', 'Docker', 'GitHub Actions', 'Terraform'],
    gradient: 'from-blue-600 to-cyan-600',
  },
  {
    title: 'Technical Consulting',
    description:
      'Architecture reviews, tech-stack decisions, and code audits to help your team ship with confidence.',
    tags: ['Architecture', 'Code Review', 'Mentoring'],
    gradient: 'from-emerald-600 to-teal-600',
  },
  {
    title: 'Performance Optimisation',
    description:
      'Diagnose and fix slow load times, memory leaks, and bottlenecks — measurable gains every time.',
    tags: ['Lighthouse', 'Core Web Vitals', 'Profiling'],
    gradient: 'from-amber-500 to-orange-500',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-violet-600 tracking-widest uppercase">
            What I Do
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">
            Services
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto text-lg">
            End-to-end engineering — from strategy and design to deployment and beyond.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Accent bar */}
              <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${s.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />

              <h3 className="text-lg font-semibold text-slate-900 mb-3">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">{s.description}</p>

              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600 group-hover:bg-violet-50 group-hover:text-violet-700 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
