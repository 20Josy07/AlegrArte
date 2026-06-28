import { PROCESS } from '../data/content'
import { SectionTitle } from './ui/shared'

const colors = [
  { bg: 'gradient-fun text-brand-dark', ring: 'ring-brand-yellow/40' },
  { bg: 'bg-accent text-white', ring: 'ring-accent/40' },
  { bg: 'bg-brand text-white', ring: 'ring-brand/40' },
]

export function Process() {
  return (
    <section className="section relative overflow-hidden bg-surface">
      <div className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-brand-yellow/12 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-64 w-64 rounded-full bg-brand/8 blur-3xl" />

      <div className="container-main relative">
        <SectionTitle label="Proceso" title={PROCESS.headline} align="center" emoji="✨" />

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute left-1/2 top-8 hidden h-[calc(100%-4rem)] w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-brand-yellow via-accent to-brand lg:block" />

          <div className="grid gap-6 lg:gap-8">
            {PROCESS.steps.map((step, i) => {
              const isEven = i % 2 === 0
              const c = colors[i]

              return (
                <div
                  key={step.number}
                  className={`relative grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr] lg:gap-10 ${
                    isEven ? '' : 'lg:[&>*:first-child]:order-3 lg:[&>*:last-child]:order-1'
                  }`}
                >
                  <div className={`${isEven ? 'lg:text-right' : 'lg:text-left'} text-center`}>
                    <div className={`inline-block rounded-2xl border border-border bg-bg p-6 shadow-soft lg:max-w-sm ${isEven ? 'lg:ml-auto' : 'lg:mr-auto'}`}>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">Paso {step.number}</span>
                      <h3 className="mt-2 font-display text-xl font-bold text-text lg:text-2xl">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted lg:text-base">{step.description}</p>
                    </div>
                  </div>

                  <div className={`relative z-10 mx-auto flex h-[4.5rem] w-[4.5rem] shrink-0 items-center justify-center rounded-2xl text-2xl shadow-elevated ring-4 ${c.bg} ${c.ring}`}>
                    {step.emoji}
                    <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-brand-dark text-[10px] font-bold text-brand-yellow">
                      {i + 1}
                    </span>
                  </div>

                  <div className="hidden lg:block" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
