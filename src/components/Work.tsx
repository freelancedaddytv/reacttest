const projects = [
  {
    title: 'AI Legal Document Analyzer',
    category: 'AI · Legal Tech',
    description:
      'AI-powered system that extracts, summarizes, and generates structured insights from legal documents such as PDFs and scanned files.',
    tech: ['Laravel', 'OpenAI', 'Google Vision OCR', 'React'],
    color: 'bg-violet-600',
    emoji: '⚖️',
  },
  {
    title: 'AI Lead Intake & Automation System',
    category: 'AI · Automation',
    description:
      'Automated client intake system with AI-generated responses, smart routing, and workflow automation for faster lead handling.',
    tech: ['n8n', 'OpenAI', 'Retell AI', 'Webhooks', 'REST APIs'],
    color: 'bg-indigo-600',
    emoji: '🤖',
  },
  {
    title: 'Legal CRM & Document Automation',
    category: 'Legal · CRM',
    description:
      'Integrated legal workflow system for managing clients, automating follow-ups, and handling document generation and e-signatures.',
    tech: ['Clio Manage', 'Lawmatics', 'SignRequest'],
    color: 'bg-emerald-600',
    emoji: '📋',
  },
  {
    title: 'SaaS Automation Platform (MVP)',
    category: 'SaaS · Full-stack',
    description:
      'Custom web-based platform designed to automate business processes, connect tools, and streamline operations from a single dashboard.',
    tech: ['React', 'Laravel', 'REST APIs', 'Webhooks'],
    color: 'bg-fuchsia-600',
    emoji: '🚀',
  },
]

export default function Work() {
  return (
    <section id="work" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-violet-600 tracking-widest uppercase">
            Portfolio
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">
            Selected Work
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto text-lg">
            A few projects I'm proud to have shipped.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group relative rounded-2xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`${p.color} p-8 flex items-center justify-center text-6xl`}>
                {p.emoji}
              </div>
              <div className="p-8 bg-white">
                <span className="text-xs font-semibold text-violet-600 uppercase tracking-wider">
                  {p.category}
                </span>
                <h3 className="mt-2 text-xl font-bold text-slate-900 mb-3">{p.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
