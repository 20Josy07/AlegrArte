import { CheckCircle2 } from 'lucide-react'
import { QUALITY } from '../data/content'
import { SectionTitle } from './ui/shared'

export function Quality() {
  return (
    <section id="quality" className="section-dark section relative overflow-hidden">
      <div className="dots-bg pointer-events-none absolute inset-0 opacity-[0.06]" />
      <div className="pointer-events-none absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-brand-yellow/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 top-1/4 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />

      <div className="container-main relative">
        <SectionTitle
          label="Calidad"
          title={QUALITY.headline}
          description={QUALITY.policy}
          align="center"
          light
        />

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {[QUALITY.internal, QUALITY.external].map((block, idx) => (
            <div
              key={block.title}
              className="rounded-3xl border border-white/12 bg-white/6 p-8 backdrop-blur-sm transition-transform hover:-translate-y-1 lg:p-10"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl gradient-fun text-sm font-bold text-brand-dark">
                  {idx === 0 ? 'IN' : 'EX'}
                </span>
                <h3 className="font-display text-xl font-bold text-white">{block.title}</h3>
              </div>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {block.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 rounded-xl bg-white/5 px-3 py-2.5 text-xs leading-snug text-white/85 lg:text-sm">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-yellow" strokeWidth={2} />
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
