import { ArrowRight, ClipboardList, MessageCircle, PartyPopper } from 'lucide-react'
import { PROCESS } from '../data/content'
import { SectionTitle } from './ui/shared'

const steps = [
  { icon: MessageCircle, accent: 'from-brand-yellow to-yellow-light', iconBg: 'bg-brand-yellow/15 text-brand-dark' },
  { icon: ClipboardList, accent: 'from-accent to-brand-yellow', iconBg: 'bg-accent/15 text-accent' },
  { icon: PartyPopper, accent: 'from-brand to-brand-light', iconBg: 'bg-brand/10 text-brand' },
] as const

export function Process() {
  return (
    <section className="section relative overflow-hidden mesh-bg">
      <div className="container-main relative">
        <SectionTitle label="Proceso" title={PROCESS.headline} align="center" />

        <div className="grid gap-6 lg:grid-cols-3 lg:gap-0">
          {PROCESS.steps.map((step, i) => {
            const { icon: Icon, accent, iconBg } = steps[i]
            const isLast = i === PROCESS.steps.length - 1

            return (
              <div key={step.number} className="relative flex lg:flex-col">
                <article className="card-base relative flex flex-1 flex-col overflow-hidden p-7 lg:mx-3 lg:p-8">
                  <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accent}`} />

                  <span className="pointer-events-none absolute -right-2 -top-4 font-display text-7xl font-extrabold leading-none text-brand/5 lg:text-8xl">
                    {step.number}
                  </span>

                  <div className="relative">
                    <div className="flex items-center gap-4">
                      <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${iconBg}`}>
                        <Icon size={22} strokeWidth={2} />
                      </span>
                      <span className="font-display text-sm font-bold text-accent">Paso {step.number}</span>
                    </div>

                    <h3 className="mt-5 font-display text-xl font-bold text-text lg:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted lg:text-base">
                      {step.description}
                    </p>
                  </div>
                </article>

                {!isLast && (
                  <div className="flex items-center justify-center py-2 lg:absolute lg:right-0 lg:top-1/2 lg:z-10 lg:-translate-y-1/2 lg:translate-x-1/2 lg:py-0">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-muted shadow-soft lg:h-10 lg:w-10">
                      <ArrowRight size={16} className="rotate-90 lg:rotate-0" />
                    </span>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
