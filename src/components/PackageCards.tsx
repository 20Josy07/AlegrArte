import { Check } from 'lucide-react'
import { PACKAGES, WHATSAPP } from '../data/content'
import { Button, SectionTitle } from './ui/shared'

const meta = [
  { emoji: '🌟', stripe: 'from-brand-yellow to-accent' },
  { emoji: '🎉', stripe: 'from-brand to-brand-light' },
  { emoji: '👑', stripe: 'from-accent to-brand-yellow' },
]

export function PackageCards() {
  return (
    <section id="packages" className="section bg-bg">
      <div className="container-main">
        <SectionTitle
          label="Paquetes"
          title={PACKAGES.headline}
          description={PACKAGES.description}
          align="center"
          emoji="🎁"
        />

        <div className="grid items-stretch gap-6 lg:grid-cols-3 lg:gap-5">
          {PACKAGES.items.map((pkg, i) => {
            const m = meta[i]
            const highlighted = pkg.highlighted

            return (
              <article
                key={pkg.name}
                className={`relative flex flex-col overflow-hidden rounded-3xl transition-all duration-300 ${
                  highlighted
                    ? 'z-10 scale-100 bg-brand text-white shadow-elevated ring-2 ring-brand-yellow lg:scale-105'
                    : 'card-base bg-surface ring-1 ring-border'
                }`}
              >
                <div className={`h-1.5 bg-gradient-to-r ${m.stripe}`} />

                <div className="flex flex-1 flex-col p-8">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl">{m.emoji}</span>
                    {highlighted && (
                      <span className="rounded-full bg-brand-yellow px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-brand-dark">
                        Más elegido
                      </span>
                    )}
                  </div>

                  <h3 className={`mt-5 font-display text-2xl font-bold ${highlighted ? 'text-white' : 'text-text'}`}>
                    {pkg.name}
                  </h3>
                  <p className={`mt-1 font-display text-3xl font-bold ${highlighted ? 'text-brand-yellow' : 'text-brand'}`}>
                    {pkg.price}
                  </p>
                  <p className={`mt-3 text-sm leading-relaxed ${highlighted ? 'text-white/65' : 'text-muted'}`}>
                    {pkg.description}
                  </p>

                  <ul className="mt-7 flex-1 space-y-3.5">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm">
                        <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${highlighted ? 'bg-brand-yellow/20' : 'bg-accent/10'}`}>
                          <Check size={12} className={highlighted ? 'text-brand-yellow' : 'text-accent'} strokeWidth={3} />
                        </span>
                        <span className={highlighted ? 'text-white/90' : 'text-text'}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={highlighted ? 'primary' : 'ghost'}
                    href={WHATSAPP}
                    className={`mt-8 w-full ${highlighted ? '' : 'border-brand/15 text-brand hover:border-brand hover:bg-brand/5'}`}
                  >
                    Solicitar cotización
                  </Button>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
