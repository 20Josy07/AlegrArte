import { VALUES } from '../data/content'
import { SectionTitle } from './ui/shared'

const accents = [
  'border-t-brand-yellow hover:shadow-glow-yellow',
  'border-t-accent',
  'border-t-brand hover:shadow-glow-purple',
  'border-t-brand-yellow',
  'border-t-accent',
  'border-t-brand',
  'border-t-brand-yellow',
  'border-t-accent',
]

export function Values() {
  const [featured, ...rest] = VALUES.items

  return (
    <section id="values" className="section mesh-bg relative overflow-hidden">
      <div className="container-main relative">
        <SectionTitle
          label="Valores"
          title={VALUES.headline}
          description={VALUES.description}
          align="center"
          emoji="⭐"
        />

        <div className="grid gap-4 lg:grid-cols-12 lg:gap-5">
          <article className="gradient-border group relative overflow-hidden rounded-3xl p-8 lg:col-span-5 lg:row-span-2">
            <div className="absolute inset-0 bento-highlight opacity-60" />
            <div className="relative">
              <span className="text-5xl transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6" role="img" aria-hidden="true">
                {featured.emoji}
              </span>
              <h3 className="mt-5 font-display text-3xl font-bold text-text">{featured.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-muted">{featured.description}</p>
              <div className="mt-6 h-1 w-12 rounded-full bg-gradient-to-r from-brand-yellow to-accent" />
            </div>
          </article>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3 lg:gap-4">
            {rest.map((value, i) => (
              <article
                key={value.title}
                className={`card-base group border-t-4 p-5 ${accents[i + 1]} ${i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
              >
                <span className="text-2xl transition-transform group-hover:-translate-y-1 group-hover:scale-110" role="img" aria-hidden="true">
                  {value.emoji}
                </span>
                <h3 className="mt-3 font-display text-sm font-bold text-text">{value.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted line-clamp-3">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
