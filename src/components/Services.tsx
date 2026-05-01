const services = [
  {
    title: 'AI-Powered Automation Systems',
    description:
      'Design and build intelligent workflows that automate tasks like document processing, lead handling, and customer communication.',
    tags: ['OpenAI', 'Claude', 'n8n', 'Webhooks'],
    gradient: 'from-violet-600 to-indigo-600',
  },
  {
    title: 'SaaS & Web App Development',
    description:
      'Develop modern web applications with clean UI and scalable architecture.',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
    gradient: 'from-indigo-600 to-blue-600',
  },
  {
    title: 'Laravel Backend Development',
    description:
      'Build secure APIs, business logic, and backend systems using Laravel.',
    tags: ['Laravel', 'MySQL', 'PostgreSQL', 'REST APIs'],
    gradient: 'from-fuchsia-600 to-violet-600',
  },
  {
    title: 'API Integration & Workflow Automation',
    description:
      'Connect multiple platforms into one seamless automated system.',
    tags: ['REST APIs', 'JSON', 'Webhooks', 'n8n'],
    gradient: 'from-blue-600 to-cyan-600',
  },
  {
    title: 'Document & Data Processing Systems',
    description:
      'Extract, analyze, and summarize data from PDFs, images, and structured files using AI.',
    tags: ['OCR', 'OpenAI', 'Claude', 'Document Parsing'],
    gradient: 'from-emerald-600 to-teal-600',
  },
  {
    title: 'Rapid MVP Development',
    description:
      'Turn ideas into working products quickly using efficient tools and AI-assisted development.',
    tags: ['React', 'Laravel', 'AI Tools', 'Fast Delivery'],
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
            End-to-end engineering from strategy and design to deployment and beyond.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
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
