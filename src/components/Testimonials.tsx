import { TESTIMONIALS } from '../data/content'
import { SectionTitle } from './ui/shared'

const accents = ['border-brand-yellow', 'border-accent', 'border-brand']

export function Testimonials() {
  const [featured, ...rest] = TESTIMONIALS.items

  return (
    <section className="section bg-surface">
      <div className="container-main">
        <SectionTitle label="Testimonios" title={TESTIMONIALS.headline} align="center" emoji="💬" />

        <div className="grid gap-6 lg:grid-cols-5">
          {/* Destacado */}
          <blockquote className="relative overflow-hidden rounded-3xl bg-brand p-8 text-white lg:col-span-3 lg:p-10">
            <div className="pointer-events-none absolute -right-8 -top-8 text-[8rem] leading-none opacity-10">"</div>
            <div className="relative">
              <div className="flex gap-1 text-brand-yellow">
                {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
              </div>
              <p className="mt-5 font-display text-xl font-medium leading-relaxed lg:text-2xl">
                "{featured.quote}"
              </p>
              <footer className="mt-8 flex items-center gap-4 border-t border-white/15 pt-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-yellow font-display font-bold text-brand-dark">
                  {featured.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <p className="font-display font-bold">{featured.name}</p>
                  <p className="text-sm text-white/60">{featured.event}</p>
                </div>
              </footer>
            </div>
          </blockquote>

          {/* Secundarios */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            {rest.map((t, i) => (
              <blockquote
                key={t.name}
                className={`flex flex-1 flex-col rounded-2xl border-l-4 bg-bg p-6 ${accents[i + 1]}`}
              >
                <p className="flex-1 text-sm leading-relaxed text-text">"{t.quote}"</p>
                <footer className="mt-4 flex items-center gap-3 border-t border-border pt-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-yellow/20 font-display text-xs font-bold text-brand">
                    {t.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-text">{t.name}</p>
                    <p className="text-xs text-muted">{t.event}</p>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
