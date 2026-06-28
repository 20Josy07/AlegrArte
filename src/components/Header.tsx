import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS, WHATSAPP } from '../data/content'
import { Button } from './ui/shared'

function NavLogo({ light }: { light: boolean }) {
  return (
    <a href="#" className="group flex items-center gap-2.5 font-display text-xl font-bold tracking-tight">
      <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-yellow to-accent text-base shadow-md shadow-yellow/25 transition-transform group-hover:scale-110 group-hover:rotate-3">
        🎉
      </span>
      <span className={light ? 'text-white' : 'text-text'}>
        ALEGR<span className={light ? 'text-brand-yellow' : 'text-gradient'}>ARTE</span>
      </span>
    </a>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const light = !scrolled

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-border/80 bg-surface/92 shadow-md shadow-brand/5 backdrop-blur-xl'
          : 'bg-gradient-to-b from-brand-dark/50 to-transparent'
      }`}
    >
      <div className="container-main flex h-[4.25rem] items-center justify-between lg:h-[4.75rem]">
        <NavLogo light={light} />

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`relative rounded-xl px-4 py-2 text-sm font-medium transition-colors ${
                light ? 'text-white/80 hover:bg-white/10 hover:text-brand-yellow' : 'text-muted hover:bg-brand/5 hover:text-brand'
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <Button variant="primary" href={WHATSAPP} className="hidden px-5 py-2.5 text-sm lg:inline-flex">
          Cotizar evento
        </Button>

        <button
          className={`rounded-xl p-2 transition-colors lg:hidden ${light ? 'text-white hover:bg-white/10' : 'text-text hover:bg-bg'}`}
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-surface/98 px-6 py-5 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-medium text-muted hover:bg-bg hover:text-brand"
              >
                {l.label}
              </a>
            ))}
            <Button variant="primary" href={WHATSAPP} className="mt-3 w-full">
              Cotizar evento
            </Button>
          </div>
        </nav>
      )}
    </header>
  )
}
