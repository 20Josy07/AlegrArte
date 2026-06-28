import { CheckCircle2 } from 'lucide-react'
import { QUALITY } from '../data/content'
import { SectionTitle } from './ui/shared'

export function Quality() {
  return (
    <section id="quality" className="section bg-surface">
      <div className="container-main">
        <SectionTitle
          label="Calidad"
          title={QUALITY.headline}
          description={QUALITY.policy}
          align="center"
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {[QUALITY.internal, QUALITY.external].map((block) => (
            <div key={block.title} className="rounded-3xl border border-border bg-bg p-8">
              <h3 className="font-display text-xl font-bold text-text">{block.title}</h3>
              <ul className="mt-6 space-y-3">
                {block.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-text">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent" strokeWidth={2} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
