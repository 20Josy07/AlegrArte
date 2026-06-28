import { ArrowUpRight } from 'lucide-react'
import { SERVICES } from '../data/content'
import { SectionTitle } from './ui/shared'

const accents = {
  yellow: { bar: 'from-brand-yellow to-yellow-light', tag: 'bg-brand-yellow text-brand-dark', ring: 'hover:ring-brand-yellow/40' },
  orange: { bar: 'from-accent to-brand-yellow', tag: 'bg-accent text-white', ring: 'hover:ring-accent/40' },
  purple: { bar: 'from-brand to-brand-light', tag: 'bg-brand text-white', ring: 'hover:ring-brand/40' },
} as const

export function Services() {
  const [featured, ...rest] = SERVICES.items

  return (
    <section id="services" className="section bg-bg">
      <div className="container-main">
        <SectionTitle
          label="Servicios"
          title={SERVICES.headline}
          description={SERVICES.description}
          emoji="🎈"
        />

        {/* Tarjeta destacada — horizontal */}
        {(() => {
          const a = accents[featured.accent as keyof typeof accents]
          return (
            <article className={`card-base group mb-6 overflow-hidden ring-2 ring-transparent ${a.ring} lg:mb-8`}>
              <div className={`h-1 bg-gradient-to-r ${a.bar}`} />
              <div className="grid lg:grid-cols-2">
                <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[320px]">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className={`absolute left-5 top-5 rounded-xl px-3 py-1.5 text-xs font-bold ${a.tag}`}>
                    {featured.tag}
                  </span>
                </div>
                <div className="flex flex-col justify-center p-8 lg:p-12">
                  <span className="text-4xl" role="img" aria-hidden="true">{featured.emoji}</span>
                  <h3 className="mt-4 font-display text-2xl font-bold text-text lg:text-3xl">{featured.title}</h3>
                  <p className="mt-3 max-w-md text-base leading-relaxed text-muted">{featured.description}</p>
                  <a href="#packages" className="mt-6 inline-flex w-fit items-center gap-2 rounded-xl bg-brand/8 px-5 py-2.5 text-sm font-bold text-brand transition-colors hover:bg-brand hover:text-white">
                    Ver paquetes <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </article>
          )
        })()}

        {/* Dos tarjetas secundarias */}
        <div className="grid gap-6 md:grid-cols-2">
          {rest.map((item) => {
            const a = accents[item.accent as keyof typeof accents]
            return (
              <article key={item.title} className={`card-base group overflow-hidden ring-2 ring-transparent ${a.ring}`}>
                <div className={`h-1 bg-gradient-to-r ${a.bar}`} />
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className={`absolute left-4 top-4 rounded-xl px-3 py-1.5 text-xs font-bold ${a.tag}`}>
                    {item.tag}
                  </span>
                </div>
                <div className="p-7">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl font-bold text-text">{item.title}</h3>
                    <span className="text-2xl" role="img" aria-hidden="true">{item.emoji}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
