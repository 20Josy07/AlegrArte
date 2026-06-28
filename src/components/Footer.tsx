import { FOOTER, PHONE, PHONE_HREF, EMAIL, NAV_LINKS, WHATSAPP } from '../data/content'
import { Logo } from './ui/shared'

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="h-1 bg-gradient-to-r from-brand-yellow via-accent to-brand" />

      <div className="container-main py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">{FOOTER.description}</p>
            <a
              href={WHATSAPP}
              className="mt-6 inline-flex items-center gap-2 rounded-xl gradient-fun px-5 py-2.5 text-sm font-bold text-brand-dark shadow-md shadow-yellow/20 transition-transform hover:-translate-y-0.5"
            >
              Cotizar evento →
            </a>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted">Servicios</h4>
            <ul className="mt-4 space-y-2.5">
              {FOOTER.services.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm text-text transition-colors hover:text-accent">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted">Contacto</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-text">
              <li>{FOOTER.contact.address}</li>
              <li><a href={PHONE_HREF} className="hover:text-accent">{PHONE}</a></li>
              <li><a href={`mailto:${EMAIL}`} className="hover:text-accent">{EMAIL}</a></li>
              <li className="text-muted">{FOOTER.contact.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <nav className="flex flex-wrap gap-5">
            {NAV_LINKS.map((l) => (
              <a key={l.label} href={l.href} className="text-xs text-muted hover:text-brand">{l.label}</a>
            ))}
          </nav>
          <p className="text-xs text-muted">{FOOTER.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
