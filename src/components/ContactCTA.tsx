import { MapPin, MessageCircle, Phone } from 'lucide-react'
import { SLOGAN, WHATSAPP, PHONE, PHONE_HREF } from '../data/content'
import { Button } from './ui/shared'

export function ContactCTA() {
  return (
    <section id="contact" className="section relative overflow-hidden">
      <div className="gradient-hero absolute inset-0" />
      <div className="dots-bg pointer-events-none absolute inset-0 opacity-[0.05]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[32rem] -translate-x-1/2 rounded-full bg-brand-yellow/15 blur-[100px]" />

      <div className="container-main relative">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="text-center lg:col-span-5 lg:text-left">
            <p className="section-label section-label-light">Contacto</p>
            <h2 className="mt-4 font-display text-3xl font-bold text-white lg:text-4xl xl:text-5xl">
              ¿Listo para tu próximo evento?
            </h2>
            <p className="mt-4 text-lg italic text-brand-yellow">{SLOGAN}</p>
            <p className="mt-3 text-white/65">
              Escríbenos y recibe una propuesta personalizada en menos de 24 horas. Sin compromiso.
            </p>

            <div className="mt-8 hidden space-y-4 lg:block">
              {[
                { icon: MapPin, text: 'Barranquilla, Colombia' },
                { icon: Phone, text: PHONE, href: PHONE_HREF },
              ].map(({ icon: Icon, text, href }) => (
                <div key={text} className="flex items-center gap-3 text-sm text-white/75">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">
                    <Icon size={16} className="text-brand-yellow" />
                  </span>
                  {href ? (
                    <a href={href} className="hover:text-brand-yellow transition-colors">{text}</a>
                  ) : (
                    text
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-[2rem] border border-white/12 bg-white/6 p-8 backdrop-blur-xl lg:p-12">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl gradient-fun text-3xl shadow-glow-yellow lg:mx-0">
                🎊
              </div>
              <p className="mt-6 text-center text-lg font-semibold text-white lg:text-left">
                La forma más rápida: WhatsApp
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
                <Button variant="primary" href={WHATSAPP} className="gap-2 px-8 py-4 text-base shadow-glow-yellow">
                  <MessageCircle size={18} />
                  Escríbenos por WhatsApp
                </Button>
                <Button
                  variant="ghost"
                  href={PHONE_HREF}
                  className="border-white/25 bg-white/8 text-white backdrop-blur-sm hover:border-brand-yellow/50 hover:bg-white/15 hover:text-white"
                >
                  {PHONE}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
