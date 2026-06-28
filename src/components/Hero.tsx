import { ArrowRight, MapPin, Sparkles, PartyPopper } from 'lucide-react'
import { HERO, WHATSAPP } from '../data/content'
import { Button } from './ui/shared'

export function Hero() {
  return (
    <section className="relative min-h-[95vh] overflow-hidden pt-24 lg:min-h-screen lg:pt-28">
      <div className="gradient-hero absolute inset-0" />
      <div className="dots-bg pointer-events-none absolute inset-0 opacity-[0.04]" />

      <div className="pointer-events-none absolute -right-24 top-1/4 h-80 w-80 rounded-full bg-brand-yellow/25 blur-[90px] animate-pulse-glow" />
      <div className="pointer-events-none absolute -left-24 bottom-1/3 h-72 w-72 rounded-full bg-accent/20 blur-[80px]" />
      <div className="pointer-events-none absolute right-1/3 top-16 h-32 w-32 rounded-full bg-brand-yellow/10 blur-2xl" />

      <div className="container-main relative flex min-h-[inherit] flex-col justify-center pb-16 pt-4 lg:pb-24">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8 xl:gap-12">
          <div className="animate-in lg:col-span-6 xl:col-span-5">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-md">
                <Sparkles size={14} className="text-brand-yellow" />
                <span className="text-sm font-semibold italic text-brand-yellow">{HERO.tag}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/70 backdrop-blur-sm">
                <MapPin size={12} className="text-brand-yellow" />
                Barranquilla, Colombia
              </div>
            </div>

            <h1 className="font-display text-[2.75rem] font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl xl:text-[4.75rem]">
              {HERO.headline}
              <br />
              <span className="text-brand-yellow">{HERO.headlineHighlight}</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/75">
              {HERO.subheadline}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="primary" href={WHATSAPP} className="px-8 py-4 text-base shadow-glow-yellow">
                {HERO.cta}
              </Button>
              <Button
                variant="ghost"
                href={HERO.ctaSecondaryHref}
                className="border-white/25 bg-white/8 text-white backdrop-blur-sm hover:border-brand-yellow/50 hover:bg-white/15 hover:text-white"
              >
                {HERO.ctaSecondary}
                <ArrowRight size={17} />
              </Button>
            </div>
          </div>

          <div className="animate-in relative lg:col-span-6 lg:col-start-7 xl:col-span-7 delay-200">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-brand-yellow/50 via-accent/30 to-brand/20 blur-md lg:-inset-6" />

              <div className="relative">
                <div className="grid grid-cols-12 items-end gap-3 lg:gap-4">
                  <div className="col-span-7 overflow-hidden rounded-[1.75rem] shadow-elevated ring-2 ring-white/25 lg:col-span-8">
                    <img
                      src={HERO.image}
                      alt="Evento festivo ALEGRARTE"
                      className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <div className="col-span-5 pb-2 lg:col-span-4">
                    <div className="overflow-hidden rounded-2xl shadow-lg ring-2 ring-white/20 lg:-rotate-2 lg:transition-transform lg:hover:rotate-0">
                      <img
                        src={HERO.secondaryImage}
                        alt="Eventos ALEGRARTE"
                        className="aspect-[3/4] w-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="animate-float-gentle absolute -bottom-3 -left-2 z-10 flex items-center gap-3 rounded-2xl bg-surface px-5 py-3.5 shadow-elevated ring-1 ring-border lg:-left-8 lg:bottom-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-yellow/20 text-brand-dark">
                    <PartyPopper size={20} />
                  </span>
                  <div>
                    <p className="font-display text-sm font-bold text-text">Diversión garantizada</p>
                    <p className="text-xs text-muted">Animadores certificados</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
