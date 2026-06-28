export const PHONE = '+57 300 123 4567'
export const PHONE_HREF = 'tel:+573001234567'
export const EMAIL = 'hola@alegrarte.com'
export const WHATSAPP = 'https://wa.me/573001234567'

export const NAV_LINKS = [
  { label: 'Servicios', href: '#services' },
  { label: 'Paquetes', href: '#packages' },
  { label: 'Galería', href: '#gallery' },
  { label: 'Contacto', href: '#contact' },
]

export const HERO = {
  tag: '🎉 Recreación y eventos en Bogotá',
  headline: 'Hacemos que tu evento sea',
  headlineHighlight: 'inolvidable',
  subheadline:
    'Fiestas infantiles, eventos corporativos y celebraciones con animación profesional, decoración temática y recreación para todas las edades.',
  cta: 'Cotizar por WhatsApp',
  ctaSecondary: 'Ver servicios',
  image: 'https://i.postimg.cc/jdWhsPss/04.jpg',
  secondaryImage: 'https://i.postimg.cc/QxBqX1j4/eventos.jpg',
  stats: [
    { value: '500+', label: 'Eventos' },
    { value: '10', label: 'Años' },
    { value: '4.9★', label: 'Valoración' },
  ],
}

export const SERVICES = {
  headline: 'Lo que hacemos',
  description: 'Cada evento es diferente. Estos son nuestros servicios más solicitados.',
  items: [
    {
      title: 'Fiestas infantiles',
      description: 'Animación, juegos, personajes y decoración temática para cumpleaños inolvidables.',
      image: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c16?w=600&h=450&fit=crop&q=80',
      tag: 'Más popular',
      emoji: '🎈',
      accent: 'yellow',
    },
    {
      title: 'Eventos corporativos',
      description: 'Team building, integración y celebraciones empresariales con dinámicas profesionales.',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=450&fit=crop&q=80',
      tag: 'Empresas',
      emoji: '🎯',
      accent: 'orange',
    },
    {
      title: 'Recreación y shows',
      description: 'Inflables, magia, globoflexia, pinta caritas y entretenimiento para cualquier ocasión.',
      image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&h=450&fit=crop&q=80',
      tag: 'Diversión',
      emoji: '🎪',
      accent: 'purple',
    },
  ],
}

export const PROCESS = {
  headline: 'Así de fácil es',
  steps: [
    {
      number: '01',
      title: 'Cuéntanos tu idea',
      description: 'Escríbenos por WhatsApp con la fecha, tipo de evento e invitados.',
      emoji: '💬',
    },
    {
      number: '02',
      title: 'Recibe tu propuesta',
      description: 'Te enviamos un plan personalizado con precio en menos de 24 horas.',
      emoji: '📋',
    },
    {
      number: '03',
      title: 'Disfruta tu evento',
      description: 'Nos encargamos de todo. Tú solo llegas y celebras.',
      emoji: '🎊',
    },
  ],
}

export const PACKAGES = {
  headline: 'Paquetes',
  description: 'Elige el que mejor se adapte. Siempre personalizable según tu evento.',
  items: [
    {
      name: 'Esencial',
      price: 'Desde $800.000',
      description: 'Perfecto para fiestas pequeñas e íntimas.',
      features: [
        'Animador profesional (2h)',
        'Juegos y dinámicas',
        'Decoración básica temática',
        'Música y sonido',
      ],
      highlighted: false,
    },
    {
      name: 'Celebración',
      price: 'Desde $1.500.000',
      description: 'El favorito para cumpleaños y graduaciones.',
      features: [
        'Todo lo del Esencial',
        'Show de magia o personaje',
        'Mesa de dulces decorada',
        'Photobooth con accesorios',
        'Coordinador de evento',
      ],
      highlighted: true,
    },
    {
      name: 'Experiencia VIP',
      price: 'Cotización a medida',
      description: 'Para eventos grandes o totalmente personalizados.',
      features: [
        'Todo lo de Celebración',
        'Decoración premium a medida',
        'Catering y mesa de snacks',
        'Fotografía del evento',
        'Souvenirs personalizados',
      ],
      highlighted: false,
    },
  ],
}

export const TESTIMONIALS = {
  headline: 'Lo que dicen nuestros clientes',
  items: [
    {
      quote: 'Los niños no paraban de reír. La decoración quedó exactamente como la soñamos.',
      name: 'María González',
      event: 'Cumpleaños infantil',
    },
    {
      quote: 'Organizaron el evento de fin de año de la empresa sin un solo contratiempo. Muy profesionales.',
      name: 'Carlos Mendoza',
      event: 'Evento corporativo',
    },
    {
      quote: 'Desde la cotización hasta el día del evento, todo fue fácil y transparente.',
      name: 'Ana Rodríguez',
      event: 'Graduación',
    },
  ],
}

export const GALLERY = {
  headline: 'Galería',
  description: 'Algunos momentos de eventos que hemos creado.',
  images: [
    { src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=750&fit=crop&q=80', alt: 'Fiesta con globos', tall: true },
    { src: 'https://images.unsplash.com/photo-1464366400600-7168b878af9b?w=600&h=400&fit=crop&q=80', alt: 'Mesa decorada', tall: false },
    { src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=400&fit=crop&q=80', alt: 'Celebración exterior', tall: false },
    { src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=750&fit=crop&q=80', alt: 'Fiesta nocturna', tall: true },
    { src: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&h=400&fit=crop&q=80', alt: 'Evento musical', tall: false },
  ],
}

export const FAQ = {
  headline: 'Preguntas frecuentes',
  items: [
    {
      question: '¿Con cuánta anticipación debo reservar?',
      answer: 'Recomendamos 2 a 4 semanas. Para fechas especiales o eventos grandes, cuanto antes mejor.',
      defaultOpen: false,
    },
    {
      question: '¿Puedo personalizar la temática?',
      answer: 'Sí. Trabajamos superhéroes, princesas, unicornios, deportes, videojuegos y temáticas 100% a medida.',
      defaultOpen: true,
    },
    {
      question: '¿Qué zonas cubren?',
      answer: 'Bogotá y municipios cercanos. Consulta disponibilidad para otras ciudades.',
      defaultOpen: false,
    },
    {
      question: '¿Cómo pago?',
      answer: 'Aceptamos transferencia, Nequi, Daviplata y tarjetas. Se requiere un anticipo para confirmar la fecha.',
      defaultOpen: false,
    },
  ],
}

export const FOOTER = {
  description: 'Recreación y eventos para familias y empresas en Bogotá.',
  services: [
    'Fiestas infantiles',
    'Eventos corporativos',
    'Recreación y shows',
    'Decoración temática',
  ],
  contact: {
    address: 'Bogotá, Colombia',
    hours: 'Lun – Sáb, 8:00 – 18:00',
  },
  copyright: '© 2025 ALEGRARTE',
}
