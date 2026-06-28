import { GALLERY } from '../data/content'
import { SectionTitle } from './ui/shared'

const layouts = [
  'md:col-span-2 md:row-span-2',
  '',
  '',
  'md:row-span-2',
  'md:col-span-2',
]

export function Gallery() {
  return (
    <section id="gallery" className="section bg-bg">
      <div className="container-main">
        <SectionTitle label="Galería" title={GALLERY.headline} description={GALLERY.description} emoji="📸" />

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:auto-rows-[180px] md:gap-4 lg:auto-rows-[200px]">
          {GALLERY.images.map((img, i) => (
            <div
              key={img.alt}
              className={`group relative overflow-hidden rounded-2xl shadow-soft ring-1 ring-border transition-all duration-500 hover:-translate-y-1 hover:shadow-card hover:ring-brand-yellow/30 ${layouts[i] ?? ''}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent opacity-60 transition-opacity group-hover:opacity-90" />
              <div className="absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 md:p-5">
                <p className="font-display text-sm font-bold text-white">{img.alt}</p>
                <div className="mt-2 h-0.5 w-8 rounded-full bg-brand-yellow" />
              </div>
              {i === 0 && (
                <span className="absolute left-4 top-4 rounded-full gradient-fun px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-brand-dark">
                  Destacado
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
