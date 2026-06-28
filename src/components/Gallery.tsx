import { GALLERY } from '../data/content'
import { SectionTitle } from './ui/shared'

export function Gallery() {
  return (
    <section id="gallery" className="section bg-bg">
      <div className="container-main">
        <SectionTitle label="Galería" title={GALLERY.headline} description={GALLERY.description} emoji="📸" />

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {GALLERY.images.map((img, i) => (
            <div
              key={img.alt}
              className={`group relative overflow-hidden rounded-2xl ${
                i === 0 ? 'col-span-2 row-span-2 md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                  i === 0 ? 'aspect-square md:aspect-auto md:h-full md:min-h-[420px]' : 'aspect-square'
                }`}
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-brand-dark/70 via-transparent to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-sm font-semibold text-white">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
