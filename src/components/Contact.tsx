const channels = [
  {
    label: 'Email',
    value: 'jeff@vodesk.com',
    href: 'mailto:jeff@vodesk.com',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: '/in/jefreylandicho',
    href: 'https://linkedin.com/in/jefreylandicho/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: '/freelancedaddytv',
    href: 'https://github.com/freelancedaddytv',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.92.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    value: '@pctechph',
    href: 'https://facebook.com/pctechph',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-950 via-green-950 to-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-green-400 tracking-widest uppercase">
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
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group flex flex-col items-center gap-4 p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-green-500/50 transition-all duration-200 cursor-pointer"
            >
              <span className="text-green-400 group-hover:text-green-300 transition-colors">
                {c.icon}
              </span>
              <div className="text-center">
                <p className="text-xs font-semibold text-green-400 uppercase tracking-wider mb-1">
                  {c.label}
                </p>
                <p className="text-sm text-slate-300 group-hover:text-white transition-colors break-all">
                  {c.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center rounded-2xl border border-white/10 bg-white/5 p-10">
          <p className="text-2xl font-bold text-white mb-2">
            Ready to start a project?
          </p>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            I'm currently available for freelance engagements. Full-time contracts, part-time retainers, or fixed-scope projects.
          </p>
          <a
            href="mailto:jeff@vodesk.com"
            className="inline-block px-10 py-4 rounded-full bg-green-600 text-white font-semibold text-base hover:bg-green-500 active:scale-95 transition-all shadow-lg shadow-green-900/50 cursor-pointer"
          >
            Send me an email
          </a>
        </div>
      </div>
    </section>
  )
}
