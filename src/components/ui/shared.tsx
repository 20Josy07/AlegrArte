import type { ReactNode, ButtonHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

const styles: Record<Variant, string> = {
  primary:
    'gradient-fun text-brand-dark font-bold hover:brightness-105 shadow-lg shadow-yellow/25 hover:-translate-y-0.5 active:translate-y-0',
  secondary:
    'bg-brand text-white hover:bg-brand-light shadow-md hover:-translate-y-0.5',
  ghost:
    'bg-transparent text-text border border-border hover:border-brand/40 hover:bg-brand/5 hover:text-brand',
}

type BtnProps = {
  variant?: Variant
  href?: string
  children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ variant = 'primary', href, children, className = '', ...props }: BtnProps) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold transition-all duration-300 ${styles[variant]} ${className}`

  if (href) return <a href={href} className={cls}>{children}</a>
  return <button className={cls} {...props}>{children}</button>
}

export function Logo() {
  return (
    <a href="#" className="group flex items-center gap-2.5 font-display text-xl font-bold tracking-tight text-text">
      <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-yellow to-accent text-base shadow-md shadow-yellow/30 transition-transform group-hover:scale-105 group-hover:animate-wiggle">
        🎉
      </span>
      ALEGR<span className="text-gradient">ARTE</span>
    </a>
  )
}

export function SectionTitle({
  label,
  title,
  description,
  align = 'left',
  emoji,
}: {
  label?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  emoji?: string
}) {
  const centered = align === 'center'

  return (
    <div className={`mb-14 max-w-2xl ${centered ? 'mx-auto text-center' : ''}`}>
      <div className={`mb-4 flex items-center gap-3 ${centered ? 'justify-center' : ''}`}>
        {label && (
          <span className={`section-label ${centered ? 'flex-row-reverse' : ''}`}>
            {label}
          </span>
        )}
        {emoji && (
          <span className="text-2xl" role="img" aria-hidden="true">{emoji}</span>
        )}
      </div>
      <h2 className="font-display text-[2rem] font-bold leading-tight tracking-tight text-text sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed text-muted lg:text-lg ${centered ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </div>
  )
}

export function WaveDivider({ flip = false, className = '' }: { flip?: boolean; className?: string }) {
  return (
    <div className={`leading-[0] ${flip ? 'rotate-180' : ''} ${className}`} aria-hidden="true">
      <svg viewBox="0 0 1440 64" preserveAspectRatio="none" className="block h-8 w-full md:h-12">
        <path
          d="M0,32 C360,64 720,0 1080,32 C1260,48 1380,16 1440,32 L1440,64 L0,64 Z"
          className="fill-bg"
        />
      </svg>
    </div>
  )
}
