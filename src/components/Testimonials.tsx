const testimonials = [
  {
    body: "Jef has become an essential part of our operations. He handles everything from automation to system integrations and consistently delivers reliable, high-quality work. If you're looking for someone you can trust with your tech, Jef is the right choice.",
    name: 'Amitha',
    role: 'Farm House by Amitha',
    initials: 'A',
    color: 'bg-green-600',
  },
  {
    body: 'Jefrey delivered exactly what we needed and stayed professional throughout the entire process. His work was efficient, well executed, and on schedule. I highly recommend him for CRM and automation projects.',
    name: 'HL Real Estate Group',
    role: 'Real Estate',
    initials: 'HL',
    color: 'bg-emerald-600',
  },
  {
    body: 'Jefrey helped us streamline our client intake and automate key parts of our workflow. The system he built saved our team hours of manual work and improved how we handle new cases. Highly recommended for law firms looking to modernize.',
    name: 'JPL Law Firm',
    role: 'Law Firm',
    initials: 'JPL',
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
          <span className="text-sm font-semibold text-green-600 tracking-widest uppercase">
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
                  className={`${t.color} w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0`}
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
