const channels = [
  {
    icon: '📧',
    label: 'Email',
    value: 'alex@alexdev.io',
    href: 'mailto:alex@alexdev.io',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/alexdev',
    href: '#',
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: 'github.com/alexdev',
    href: '#',
  },
  {
    icon: '🐦',
    label: 'Twitter / X',
    value: '@alexdev_io',
    href: '#',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-950 via-violet-950 to-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-violet-400 tracking-widest uppercase">
            Get in Touch
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Let's build something great
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-lg">
            Have a project in mind? I'd love to hear about it. Reach out via any of the channels below and I'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              className="group flex flex-col items-center gap-4 p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-violet-500/50 transition-all duration-200"
            >
              <span className="text-4xl">{c.icon}</span>
              <div className="text-center">
                <p className="text-xs font-semibold text-violet-400 uppercase tracking-wider mb-1">
                  {c.label}
                </p>
                <p className="text-sm text-slate-300 group-hover:text-white transition-colors break-all">
                  {c.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* CTA strip */}
        <div className="text-center rounded-2xl border border-white/10 bg-white/5 p-10">
          <p className="text-2xl font-bold text-white mb-2">
            Ready to start a project?
          </p>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            I'm currently available for freelance engagements — full-time contracts, part-time retainers, or fixed-scope projects.
          </p>
          <a
            href="mailto:alex@alexdev.io"
            className="inline-block px-10 py-4 rounded-full bg-violet-600 text-white font-semibold text-base hover:bg-violet-500 active:scale-95 transition-all shadow-lg shadow-violet-900/50"
          >
            Send me an email
          </a>
        </div>
      </div>
    </section>
  )
}
