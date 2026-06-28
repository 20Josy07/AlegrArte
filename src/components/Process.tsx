import { PROCESS } from '../data/content'
import { SectionTitle } from './ui/shared'

const colors = [
  'bg-brand-yellow text-brand-dark shadow-yellow/30',
  'bg-accent text-white shadow-accent/30',
  'bg-brand text-white shadow-brand/30',
]

export function Process() {
  return (
    <section className="section relative overflow-hidden bg-surface">
      <div className="pointer-events-none absolute -right-32 top-0 h-64 w-64 rounded-full bg-brand-yellow/10 blur-3xl" />

      <div className="container-main relative">
        <SectionTitle label="Proceso" title={PROCESS.headline} align="center" emoji="✨" />

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-8 top-10 hidden h-[calc(100%-5rem)] w-px bg-gradient-to-b from-brand-yellow via-accent to-brand md:block lg:left-1/2 lg:-translate-x-px" />

          <div className="space-y-10 md:space-y-14">
            {PROCESS.steps.map((step, i) => {
              const isEven = i % 2 === 0
              return (
                <div
                  key={step.number}
                  className={`relative flex flex-col gap-6 md:flex-row md:items-center ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${isEven ? 'lg:text-right' : 'lg:text-left'} text-center`}>
                    <span className="text-xs font-bold uppercase tracking-widest text-accent">
                      Paso {step.number}
                    </span>
                    <h3 className="mt-1 font-display text-xl font-bold text-text lg:text-2xl">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted lg:text-base">{step.description}</p>
                  </div>

                  <div className={`relative z-10 mx-auto flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-2xl shadow-lg ${colors[i]}`}>
                    {step.emoji}
                  </div>

                  <div className="hidden flex-1 lg:block" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
