import { TESTIMONIALS } from '../data/content'
import { SectionTitle } from './ui/shared'

export function Testimonials() {
  const [featured, ...rest] = TESTIMONIALS.items

  return (
    <section className="section relative overflow-hidden bg-surface">
      <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-brand-yellow/8 blur-3xl" />

      <div className="container-main relative">
        <SectionTitle label="Testimonios" title={TESTIMONIALS.headline} align="center" emoji="💬" />

        <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
          <blockquote className="relative overflow-hidden rounded-[2rem] bg-brand p-8 shadow-glow-purple lg:col-span-7 lg:p-12">
            <div className="pointer-events-none absolute -right-6 -top-6 text-[10rem] font-serif leading-none text-white/5">"</div>
            <div className="relative">
              <div className="flex gap-0.5 text-lg text-brand-yellow">
                {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
              </div>
              <p className="mt-6 font-display text-xl font-medium leading-relaxed text-white lg:text-[1.65rem] lg:leading-snug">
                "{featured.quote}"
              </p>
              <footer className="mt-10 flex items-center gap-4 border-t border-white/15 pt-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl gradient-fun font-display text-lg font-bold text-brand-dark shadow-md">
                  {featured.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <p className="font-display text-lg font-bold text-white">{featured.name}</p>
                  <p className="text-sm text-white/60">{featured.event}</p>
                </div>
              </footer>
            </div>
          </blockquote>

          <div className="flex flex-col gap-5 lg:col-span-5">
            {rest.map((t, i) => (
              <blockquote
                key={t.name}
                className="group flex flex-1 flex-col rounded-2xl border border-border bg-bg p-6 transition-all hover:-translate-y-1 hover:border-brand-yellow/40 hover:shadow-soft"
              >
                <div className="flex gap-0.5 text-xs text-brand-yellow">
                  {'★★★★★'.split('').map((s, j) => <span key={j}>{s}</span>)}
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-text">"{t.quote}"</p>
                <footer className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl font-display text-xs font-bold ${i === 0 ? 'bg-accent/15 text-accent' : 'bg-brand/10 text-brand'}`}>
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
