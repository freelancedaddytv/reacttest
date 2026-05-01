const testimonials = [
  {
    body: "Alex delivered a complex multi-tenant SaaS dashboard in 6 weeks — ahead of schedule and with zero bugs in production. Genuinely one of the best developers I've worked with.",
    name: 'Sarah Chen',
    role: 'CTO, FinTrack',
    initials: 'SC',
    color: 'bg-violet-600',
  },
  {
    body: 'Our Shopify replatform was tricky but Alex navigated every challenge with calm expertise. The result: 40% faster load times and a 22% lift in conversion rate.',
    name: 'Marcus Webb',
    role: 'Head of Product, ShopFlow',
    initials: 'MW',
    color: 'bg-indigo-600',
  },
  {
    body: "Clear communicator, sharp engineer, and a pleasure to work with. Alex proactively flagged architectural risks we hadn't seen — that alone saved us months of rework.",
    name: 'Dr. Priya Nair',
    role: 'Founder, MedSync',
    initials: 'PN',
    color: 'bg-emerald-600',
  },
]

function Stars() {
  return (
    <div className="flex gap-0.5 text-amber-400 text-sm mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-violet-600 tracking-widest uppercase">
            Testimonials
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">
            What clients say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <Stars />
              <blockquote className="text-slate-600 text-sm leading-relaxed mb-8">
                "{t.body}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div
                  className={`${t.color} w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
