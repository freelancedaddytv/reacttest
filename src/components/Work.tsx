const projects = [
  {
    title: 'AI Legal Document Analyzer',
    category: 'AI · Legal Tech',
    description:
      'AI-powered system that extracts, summarizes, and generates structured insights from legal documents such as PDFs and scanned files.',
    tech: ['Laravel', 'OpenAI', 'Google Vision OCR', 'React'],
    color: 'bg-green-600',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-14 h-14">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.97zm-12.5 0L8.87 15.696c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L6.25 4.97z" />
      </svg>
    ),
  },
  {
    title: 'AI Lead Intake & Automation System',
    category: 'AI · Automation',
    description:
      'Automated client intake system with AI-generated responses, smart routing, and workflow automation for faster lead handling.',
    tech: ['n8n', 'OpenAI', 'Retell AI', 'Webhooks', 'REST APIs'],
    color: 'bg-emerald-600',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-14 h-14">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    title: 'Legal CRM & Document Automation',
    category: 'Legal · CRM',
    description:
      'Integrated legal workflow system for managing clients, automating follow-ups, and handling document generation and e-signatures.',
    tech: ['Clio Manage', 'Lawmatics', 'SignRequest'],
    color: 'bg-teal-600',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-14 h-14">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
      </svg>
    ),
  },
  {
    title: 'SaaS Automation Platform (MVP)',
    category: 'SaaS · Full-stack',
    description:
      'Custom web-based platform designed to automate business processes, connect tools, and streamline operations from a single dashboard.',
    tech: ['React', 'Laravel', 'REST APIs', 'Webhooks'],
    color: 'bg-green-700',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-14 h-14">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
]

export default function Work() {
  return (
    <section id="work" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-green-600 tracking-widest uppercase">
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
              <div className={`${p.color} p-10 flex items-center justify-center`}>
                {p.icon}
              </div>
              <div className="p-8 bg-white">
                <span className="text-xs font-semibold text-green-600 uppercase tracking-wider">
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
