import { useState, useEffect } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  function scrollTo(href: string) {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => scrollTo('#hero')}
          className="text-xl font-bold tracking-tight cursor-pointer"
        >
          <span className={scrolled ? 'text-green-700' : 'text-green-400'}>Jefrey</span>
          <span className="text-white">Landicho</span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className={`text-sm font-medium cursor-pointer transition-colors ${
                scrolled ? 'text-slate-700 hover:text-green-700' : 'text-white hover:text-green-300'
              }`}
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('#contact')}
            className="ml-4 px-5 py-2 rounded-full bg-green-600 text-white text-sm font-semibold hover:bg-green-700 active:scale-95 transition-all cursor-pointer"
          >
            Hire Me
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 transition-transform origin-center ${scrolled ? 'bg-slate-700' : 'bg-white'} ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 transition-opacity ${scrolled ? 'bg-slate-700' : 'bg-white'} ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 transition-transform origin-center ${scrolled ? 'bg-slate-700' : 'bg-white'} ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 shadow-lg">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-left px-4 py-2.5 rounded-lg text-slate-700 hover:bg-green-50 hover:text-green-700 font-medium transition-colors cursor-pointer"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('#contact')}
              className="mt-2 px-5 py-2.5 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors cursor-pointer"
            >
              Hire Me
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
