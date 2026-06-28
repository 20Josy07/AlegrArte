import { MessageCircle } from 'lucide-react'
import { WHATSAPP, PHONE, PHONE_HREF, EMAIL } from '../data/content'
import { Button } from './ui/shared'

export function ContactCTA() {
  return (
    <section id="contact" className="section relative overflow-hidden">
      <div className="gradient-hero absolute inset-0" />
      <div className="dots-bg pointer-events-none absolute inset-0 opacity-[0.04]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-96 -translate-x-1/2 rounded-full bg-brand-yellow/15 blur-[100px]" />

      <div className="container-main relative">
        <div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-md lg:p-14">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-yellow text-2xl shadow-lg shadow-yellow/20">
            🎊
          </div>
          <h2 className="mt-6 font-display text-3xl font-bold text-white lg:text-4xl">
            ¿Listo para tu próximo evento?
          </h2>
          <p className="mt-4 text-white/65">
            Escríbenos y recibe una propuesta personalizada en menos de 24 horas. Sin compromiso.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button variant="primary" href={WHATSAPP} className="gap-2 px-8 py-4 text-base">
              <MessageCircle size={18} />
              Escríbenos por WhatsApp
            </Button>
            <Button
              variant="ghost"
              href={PHONE_HREF}
              className="border-white/20 bg-white/5 text-white backdrop-blur-sm hover:border-white/40 hover:bg-white/10 hover:text-white"
            >
              {PHONE}
            </Button>
          </div>
          <p className="mt-6 text-sm text-white/40">
            {EMAIL}
          </p>
        </div>
      </div>
    </section>
  )
}
