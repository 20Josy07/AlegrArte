const items = [
  'Fiestas infantiles',
  'Eventos corporativos',
  'Graduaciones',
  'Baby showers',
  'Recreación en vivo',
  'Decoración temática',
  'Shows de magia',
  'Team building',
]

export function Marquee() {
  const doubled = [...items, ...items]

  return (
    <div className="relative overflow-hidden border-y border-border bg-surface py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-surface to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-surface to-transparent" />
      <div className="flex w-max animate-marquee">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="mx-6 flex shrink-0 items-center gap-3 whitespace-nowrap text-sm font-semibold text-muted"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
