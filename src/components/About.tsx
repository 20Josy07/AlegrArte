import { Target, Eye, Heart } from 'lucide-react'
import { ABOUT } from '../data/content'
import { SectionTitle } from './ui/shared'

const blocks = [
  { key: 'mission', icon: Target, data: ABOUT.mission, color: 'bg-brand-yellow/15 text-brand-dark' },
  { key: 'vision', icon: Eye, data: ABOUT.vision, color: 'bg-accent/10 text-accent' },
  { key: 'philosophy', icon: Heart, data: ABOUT.philosophy, color: 'bg-brand/10 text-brand' },
] as const

export function About() {
  return (
    <section id="about" className="section bg-surface">
      <div className="container-main">
        <SectionTitle
          label="Nosotros"
          title={ABOUT.headline}
          description={ABOUT.description}
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {blocks.map(({ key, icon: Icon, data, color }) => (
            <article key={key} className="card-base flex flex-col p-8">
              <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl ${color}`}>
                <Icon size={22} />
              </div>
              <h3 className="font-display text-xl font-bold text-text">{data.title}</h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{data.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
