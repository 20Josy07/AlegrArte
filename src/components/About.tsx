import { useState } from 'react'
import { MapPin, Target, Eye, Heart } from 'lucide-react'
import { ABOUT, SLOGAN } from '../data/content'
import { SectionTitle } from './ui/shared'

const tabs = [
  { id: 'mission', label: 'Misión', icon: Target, data: ABOUT.mission },
  { id: 'vision', label: 'Visión', icon: Eye, data: ABOUT.vision },
  { id: 'philosophy', label: 'Filosofía', icon: Heart, data: ABOUT.philosophy },
] as const

export function About() {
  const [active, setActive] = useState<(typeof tabs)[number]['id']>('mission')
  const current = tabs.find((t) => t.id === active)!

  return (
    <section id="about" className="section relative overflow-hidden bg-surface">
      <div className="pointer-events-none absolute -left-32 top-20 h-64 w-64 rounded-full bg-brand-yellow/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-brand/8 blur-3xl" />

      <div className="container-main relative">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Visual */}
          <div className="relative lg:col-span-5">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-brand-yellow/30 via-accent/20 to-brand/15 blur-sm" />
            <div className="relative overflow-hidden rounded-[1.75rem] shadow-elevated ring-1 ring-border">
              <img
                src={ABOUT.image}
                alt="Equipo y eventos AlegrArte"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-4 -right-2 rounded-2xl gradient-fun px-5 py-4 shadow-lg shadow-yellow/25 lg:-right-6">
              <p className="font-display text-2xl font-extrabold text-brand-dark">10+</p>
              <p className="text-[11px] font-bold uppercase tracking-wide text-brand-dark/75">Años creando alegría</p>
            </div>

            <div className="absolute -left-3 top-6 flex items-center gap-2 rounded-2xl bg-surface px-4 py-3 shadow-card ring-1 ring-border lg:-left-6">
              <MapPin size={16} className="text-accent" />
              <div>
                <p className="text-xs font-bold text-text">Barranquilla</p>
                <p className="text-[10px] text-muted">Colombia</p>
              </div>
            </div>
          </div>

          {/* Contenido */}
          <div className="lg:col-span-7">
            <SectionTitle
              label="Nosotros"
              title={ABOUT.headline}
              description={ABOUT.description}
            />

            <blockquote className="relative rounded-2xl border-l-4 border-brand-yellow bg-gradient-to-r from-brand-yellow/8 to-transparent px-6 py-5">
              <p className="font-display text-lg font-semibold italic leading-snug text-brand lg:text-xl">
                "{SLOGAN}"
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Cada celebración es una oportunidad para crear recuerdos imborrables.
              </p>
            </blockquote>

            {/* Tabs */}
            <div className="mt-8">
              <div className="flex flex-wrap gap-2">
                {tabs.map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => setActive(id)}
                    className={`inline-flex items-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                      active === id
                        ? 'gradient-fun text-brand-dark shadow-md shadow-yellow/20'
                        : 'border border-border bg-bg text-muted hover:border-brand/20 hover:text-brand'
                    }`}
                  >
                    <Icon size={16} />
                    {label}
                  </button>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-border bg-bg p-6 shadow-soft lg:p-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <current.icon size={20} />
                  </span>
                  <h3 className="font-display text-xl font-bold text-text">{current.data.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted lg:text-base">
                  {current.data.text}
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div className="mt-8 grid grid-cols-3 gap-3">
              {ABOUT.highlights.map((h) => (
                <div
                  key={h.label}
                  className="rounded-2xl border border-border bg-surface px-3 py-4 text-center transition-transform hover:-translate-y-0.5"
                >
                  <p className="font-display text-xl font-bold text-brand lg:text-2xl">{h.value}</p>
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-muted lg:text-xs">{h.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
