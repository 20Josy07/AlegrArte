import { Target, Eye, Heart } from 'lucide-react'
import { ABOUT, SLOGAN } from '../data/content'
import { SectionTitle } from './ui/shared'

const blocks = [
  {
    icon: Target,
    data: ABOUT.mission,
    accent: 'border-t-brand-yellow',
    iconBg: 'gradient-fun text-brand-dark',
  },
  {
    icon: Eye,
    data: ABOUT.vision,
    accent: 'border-t-accent',
    iconBg: 'bg-accent text-white',
  },
  {
    icon: Heart,
    data: ABOUT.philosophy,
    accent: 'border-t-brand',
    iconBg: 'bg-brand text-white',
  },
] as const

export function About() {
  return (
    <section id="about" className="section relative overflow-hidden bg-surface">
      <div className="pointer-events-none absolute -left-32 top-20 h-64 w-64 rounded-full bg-brand-yellow/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-brand/8 blur-3xl" />

      <div className="container-main relative">
        <SectionTitle
          label="Nosotros"
          title={ABOUT.headline}
          description={ABOUT.description}
          align="center"
        />

        <blockquote className="mx-auto mb-10 max-w-3xl rounded-2xl border-l-4 border-brand-yellow bg-gradient-to-r from-brand-yellow/8 to-transparent px-6 py-5 text-center lg:mb-14 lg:px-8">
          <p className="font-display text-lg font-semibold italic leading-snug text-brand lg:text-xl">
            "{SLOGAN}"
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Cada celebración es una oportunidad para crear recuerdos imborrables.
          </p>
        </blockquote>

        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          {blocks.map(({ icon: Icon, data, accent, iconBg }) => (
            <article
              key={data.title}
              className={`card-base flex flex-col border-t-4 p-7 lg:p-8 ${accent}`}
            >
              <div className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl shadow-sm ${iconBg}`}>
                <Icon size={20} />
              </div>
              <h3 className="font-display text-xl font-bold text-text">{data.title}</h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted lg:text-[0.925rem]">
                {data.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
