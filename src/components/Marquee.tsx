const items = [
  { text: 'Fiestas infantiles', emoji: '🎈' },
  { text: 'Eventos corporativos', emoji: '🎯' },
  { text: 'Graduaciones', emoji: '🎓' },
  { text: 'Baby showers', emoji: '👶' },
  { text: 'Recreación en vivo', emoji: '🎪' },
  { text: 'Decoración temática', emoji: '✨' },
  { text: 'Shows de magia', emoji: '🪄' },
  { text: 'Team building', emoji: '🤝' },
]

export function Marquee() {
  const doubled = [...items, ...items]

  return (
    <div className="relative overflow-hidden bg-brand-dark py-5">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-transparent to-brand-dark z-10 pointer-events-none" />
      <div className="absolute inset-y-0 left-0 z-20 w-24 bg-gradient-to-r from-brand-dark to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 z-20 w-24 bg-gradient-to-l from-brand-dark to-transparent pointer-events-none" />

      <div className="flex w-max animate-marquee">
        {doubled.map((item, i) => (
          <span
            key={`${item.text}-${i}`}
            className="mx-4 flex shrink-0 items-center gap-3 whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-bold text-white backdrop-blur-sm lg:mx-5 lg:px-6"
          >
            <span className="text-base" role="img" aria-hidden="true">{item.emoji}</span>
            {item.text}
          </span>
        ))}
      </div>
    </div>
  )
}
