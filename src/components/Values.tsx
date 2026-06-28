import { VALUES } from '../data/content'
import { SectionTitle } from './ui/shared'

export function Values() {
  return (
    <section id="values" className="section bg-bg">
      <div className="container-main">
        <SectionTitle
          label="Valores"
          title={VALUES.headline}
          description={VALUES.description}
          align="center"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.items.map((value) => (
            <article
              key={value.title}
              className="card-base group p-6 hover:ring-2 hover:ring-brand-yellow/30"
            >
              <span className="text-2xl transition-transform group-hover:scale-110" role="img" aria-hidden="true">
                {value.emoji}
              </span>
              <h3 className="mt-3 font-display text-base font-bold text-text">{value.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">{value.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
