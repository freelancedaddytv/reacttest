const projects = [
  {
    title: 'FinTrack Dashboard',
    category: 'SaaS · Full-stack',
    description:
      'Real-time financial analytics platform with custom charting, multi-currency support, and role-based access control for 10k+ users.',
    tech: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL'],
    color: 'bg-violet-600',
    emoji: '📊',
  },
  {
    title: 'ShopFlow Commerce',
    category: 'E-commerce · Frontend',
    description:
      'Headless Shopify storefront achieving 98 Lighthouse score with SSR, edge caching, and a fully custom checkout experience.',
    tech: ['Next.js', 'Shopify', 'Tailwind', 'Vercel'],
    color: 'bg-indigo-600',
    emoji: '🛒',
  },
  {
    title: 'MedSync Platform',
    category: 'HealthTech · SaaS',
    description:
      'HIPAA-compliant scheduling and telehealth app connecting 500+ practitioners with patients across 12 countries.',
    tech: ['React', 'Node.js', 'WebRTC', 'AWS'],
    color: 'bg-emerald-600',
    emoji: '🏥',
  },
  {
    title: 'DevCollab API',
    category: 'Open Source · Backend',
    description:
      'GraphQL API gateway for distributed dev teams — real-time notifications, webhook management, and audit logging.',
    tech: ['GraphQL', 'Redis', 'Docker', 'GitHub Actions'],
    color: 'bg-fuchsia-600',
    emoji: '🔗',
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
              {/* Card header */}
              <div className={`${p.color} p-8 flex items-center justify-center text-6xl`}>
                {p.emoji}
              </div>

              {/* Card body */}
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
