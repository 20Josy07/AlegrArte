import { useState } from 'react'
import { Plus } from 'lucide-react'
import { FAQ as FAQ_DATA } from '../data/content'
import { SectionTitle } from './ui/shared'

export function FAQ() {
  const [open, setOpen] = useState<number | null>(
    FAQ_DATA.items.findIndex((i) => i.defaultOpen),
  )

  return (
    <section id="faq" className="section bg-surface">
      <div className="container-main">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionTitle
            label="FAQ"
            title={FAQ_DATA.headline}
            description="Resolvemos las dudas más comunes antes de tu evento."
          />

          <div className="divide-y divide-border rounded-2xl border border-border bg-bg">
            {FAQ_DATA.items.map((item, i) => {
              const isOpen = open === i
              return (
                <div key={item.question}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-surface/80"
                  >
                    <span className="font-display text-base font-semibold text-text">{item.question}</span>
                    <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl transition-all ${isOpen ? 'bg-brand text-white' : 'bg-border/60 text-muted'}`}>
                      <Plus size={16} className={`transition-transform ${isOpen ? 'rotate-45' : ''}`} />
                    </span>
                  </button>
                  <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm leading-relaxed text-muted">{item.answer}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
