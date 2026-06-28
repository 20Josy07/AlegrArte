import { ArrowRight, Sparkles } from 'lucide-react'
import { HERO, WHATSAPP } from '../data/content'
import { Button } from './ui/shared'

export function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden pt-24 lg:min-h-screen lg:pt-28">
      <div className="gradient-hero absolute inset-0" />
      <div className="dots-bg pointer-events-none absolute inset-0 opacity-[0.035]" />

      {/* Orbes de luz */}
      <div className="pointer-events-none absolute -right-20 top-1/4 h-72 w-72 rounded-full bg-brand-yellow/20 blur-[80px]" />
      <div className="pointer-events-none absolute -left-20 bottom-1/4 h-64 w-64 rounded-full bg-accent/15 blur-[70px]" />

      <div className="container-main relative flex min-h-[inherit] flex-col justify-center pb-20 pt-6 lg:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Texto — 7 cols */}
          <div className="animate-in lg:col-span-6 xl:col-span-5">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 backdrop-blur-md">
              <Sparkles size={14} className="text-brand-yellow" />
              <span className="text-sm font-semibold italic text-brand-yellow">{HERO.tag}</span>
            </div>

            <h1 className="font-display text-[2.65rem] font-bold leading-[1.02] tracking-tight text-white sm:text-6xl xl:text-[4.5rem]">
              {HERO.headline}
              <br />
              <span className="text-gradient">{HERO.headlineHighlight}</span>
            </h1>

            <p className="mt-6 max-w-md text-lg leading-relaxed text-white/70">
              {HERO.subheadline}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button variant="primary" href={WHATSAPP} className="px-8 py-4 text-base">
                {HERO.cta}
              </Button>
              <Button
                variant="ghost"
                href={HERO.ctaSecondaryHref}
                className="border-white/20 bg-white/5 text-white backdrop-blur-sm hover:border-white/40 hover:bg-white/10 hover:text-white"
              >
                {HERO.ctaSecondary}
                <ArrowRight size={17} />
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
              {HERO.stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-2xl font-bold text-white lg:text-3xl">{s.value}</p>
                  <p className="mt-0.5 text-xs font-medium text-white/50">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual — 7 cols, composición editorial */}
          <div className="animate-in relative lg:col-span-6 lg:col-start-7 xl:col-span-7" style={{ animationDelay: '0.12s' }}>
            <div className="relative mx-auto max-w-md lg:max-w-none lg:pl-8">
              {/* Marco decorativo */}
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-brand-yellow/40 via-accent/20 to-transparent blur-sm lg:-inset-4" />

              <div className="relative grid grid-cols-12 gap-3">
                <div className="col-span-8 overflow-hidden rounded-3xl shadow-elevated ring-1 ring-white/20">
                  <img
                    src={HERO.image}
                    alt="Evento festivo ALEGRARTE"
                    className="aspect-[4/5] w-full object-cover"
                  />
                </div>
                <div className="col-span-4 flex flex-col gap-3 pt-8">
                  <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-white/20">
                    <img
                      src={HERO.secondaryImage}
                      alt="Eventos ALEGRARTE"
                      className="aspect-[3/4] w-full object-cover"
                    />
                  </div>
                  <div className="rounded-2xl bg-brand-yellow p-4 shadow-lg">
                    <p className="font-display text-3xl font-bold text-brand-dark">4.9★</p>
                    <p className="mt-1 text-xs font-semibold leading-snug text-brand-dark/70">
                      127 familias nos recomiendan
                    </p>
                  </div>
                </div>
              </div>

              {/* Sticker */}
              <div className="animate-float-gentle absolute -bottom-4 left-4 flex items-center gap-2 rounded-2xl bg-surface px-5 py-3.5 shadow-elevated ring-1 ring-border lg:-left-6">
                <span className="text-xl">🎊</span>
                <div>
                  <p className="font-display text-sm font-bold text-text">Diversión garantizada</p>
                  <p className="text-xs text-muted">Animadores certificados</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
