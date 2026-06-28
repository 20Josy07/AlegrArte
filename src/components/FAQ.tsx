import { useState } from 'react'
import { Plus } from 'lucide-react'
import { FAQ as FAQ_DATA } from '../data/content'
import { SectionTitle } from './ui/shared'

export function FAQ() {
  const [open, setOpen] = useState<number | null>(
    FAQ_DATA.items.findIndex((i) => i.defaultOpen),
  )

  return (
    <section id="faq" className="section mesh-bg">
      <div className="container-main">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionTitle
              label="FAQ"
              title={FAQ_DATA.headline}
              description="Resolvemos las dudas más comunes antes de tu evento."
            />
            <div className="hidden rounded-3xl bg-brand p-8 text-white lg:block">
              <p className="text-4xl" role="img" aria-hidden="true">🎉</p>
              <p className="mt-4 font-display text-xl font-bold">¿Tienes otra pregunta?</p>
              <p className="mt-2 text-sm text-white/70">
                Escríbenos por WhatsApp y te respondemos en minutos.
              </p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 rounded-2xl gradient-fun px-5 py-3 text-sm font-bold text-brand-dark transition-transform hover:-translate-y-0.5"
              >
                Ir a contacto →
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-3">
              {FAQ_DATA.items.map((item, i) => {
                const isOpen = open === i
                return (
                  <div
                    key={item.question}
                    className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                      isOpen ? 'border-brand/30 bg-surface shadow-soft' : 'border-border bg-surface/80'
                    }`}
                  >
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="font-display text-base font-semibold text-text">{item.question}</span>
                      <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${isOpen ? 'gradient-fun text-brand-dark rotate-45' : 'bg-bg text-muted'}`}>
                        <Plus size={16} />
                      </span>
                    </button>
                    <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                      <div className="overflow-hidden">
                        <p className="border-t border-border/60 px-6 pb-5 pt-4 text-sm leading-relaxed text-muted">{item.answer}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
