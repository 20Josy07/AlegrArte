import { ArrowUpRight } from 'lucide-react'
import { SERVICES } from '../data/content'
import { SectionTitle } from './ui/shared'

const accents = {
  yellow: { bar: 'from-brand-yellow to-yellow-light', tag: 'gradient-fun text-brand-dark', ring: 'hover:ring-brand-yellow/50', glow: 'group-hover:shadow-glow-yellow' },
  orange: { bar: 'from-accent to-brand-yellow', tag: 'bg-accent text-white', ring: 'hover:ring-accent/50', glow: '' },
  purple: { bar: 'from-brand to-brand-light', tag: 'bg-brand text-white', ring: 'hover:ring-brand/50', glow: 'group-hover:shadow-glow-purple' },
} as const

export function Services() {
  const [featured, ...rest] = SERVICES.items

  return (
    <section id="services" className="section relative bg-bg">
      <div className="dots-bg pointer-events-none absolute inset-0 opacity-[0.03]" />

      <div className="container-main relative">
        <SectionTitle
          label="Servicios"
          title={SERVICES.headline}
          description={SERVICES.description}
          emoji="🎈"
        />

        {(() => {
          const a = accents[featured.accent as keyof typeof accents]
          return (
            <article className={`group relative mb-6 overflow-hidden rounded-[2rem] bg-surface shadow-card ring-2 ring-transparent transition-all duration-300 lg:mb-8 ${a.ring} ${a.glow}`}>
              <div className={`h-1.5 bg-gradient-to-r ${a.bar}`} />
              <div className="grid lg:grid-cols-5">
                <div className="relative aspect-[16/10] overflow-hidden lg:col-span-3 lg:aspect-auto lg:min-h-[340px]">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-brand-dark/20" />
                  <span className={`absolute left-5 top-5 rounded-full px-4 py-2 text-xs font-bold shadow-lg ${a.tag}`}>
                    {featured.tag}
                  </span>
                  <span className="absolute bottom-5 left-5 text-5xl drop-shadow-lg lg:hidden" role="img" aria-hidden="true">{featured.emoji}</span>
                </div>
                <div className="flex flex-col justify-center p-8 lg:col-span-2 lg:p-10">
                  <span className="hidden text-5xl lg:block" role="img" aria-hidden="true">{featured.emoji}</span>
                  <h3 className="mt-0 font-display text-2xl font-bold text-text lg:mt-4 lg:text-3xl">{featured.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted">{featured.description}</p>
                  <a
                    href="#packages"
                    className="mt-7 inline-flex w-fit items-center gap-2 rounded-2xl gradient-fun px-6 py-3 text-sm font-bold text-brand-dark shadow-md shadow-yellow/20 transition-transform hover:-translate-y-0.5"
                  >
                    Ver paquetes <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </article>
          )
        })()}

        <div className="grid gap-5 md:grid-cols-2">
          {rest.map((item) => {
            const a = accents[item.accent as keyof typeof accents]
            return (
              <article
                key={item.title}
                className={`group overflow-hidden rounded-[1.75rem] bg-surface shadow-soft ring-2 ring-transparent transition-all duration-300 hover:-translate-y-1 hover:shadow-card ${a.ring}`}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-brand-dark/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <span className={`mb-3 inline-block rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wide ${a.tag}`}>
                      {item.tag}
                    </span>
                    <div className="flex items-end justify-between gap-3">
                      <div>
                        <h3 className="font-display text-xl font-bold text-white">{item.title}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-white/75">{item.description}</p>
                      </div>
                      <span className="shrink-0 text-3xl drop-shadow-md" role="img" aria-hidden="true">{item.emoji}</span>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
