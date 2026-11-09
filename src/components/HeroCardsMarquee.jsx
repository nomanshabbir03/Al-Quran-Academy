const cards = [
  {
    title: 'Quran for Adults',
    image: '/images/hero-quran-adult.jpg',
    alt: 'Adult reading and studying the Holy Quran',
  },
  {
    title: 'Quran for Kids',
    image: '/images/hero-quran-kids.jpg',
    alt: 'Young student learning Quran',
  },
  {
    title: 'Tajweed Classes',
    image: '/images/hero-tajweed.jpg',
    alt: 'Holy Quran with Tajweed calligraphy',
  },
  {
    title: 'Islamic Studies',
    image: '/images/hero-islamic-studies.jpg',
    alt: 'Islamic studies knowledge and books',
  },
  {
    title: 'Hifz Memorization',
    image: '/images/hero-hifz.jpg',
    alt: 'Holy Quran with tasbih for memorization',
  },
]

function Card({ title, image, alt }) {
  return (
    <div className="relative flex h-64 w-48 shrink-0 flex-col overflow-hidden rounded-3xl shadow-lg sm:h-72 sm:w-56">
      <div className="relative flex-1 overflow-hidden bg-slate-100">
        <img
          src={image}
          alt={alt}
          loading="lazy"
          className="h-full w-full rounded-t-3xl object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="bg-white p-4">
        <p className="text-base font-semibold text-[var(--color-text-h)]">{title}</p>
      </div>
    </div>
  )
}

function Track() {
  return (
    <div className="flex shrink-0 items-center gap-6 pr-6">
      {cards.map((card, index) => (
        <Card key={`${card.title}-${index}`} {...card} />
      ))}
    </div>
  )
}

export default function HeroCardsMarquee() {
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
      <div className="flex w-max animate-marquee-cards">
        <Track />
        <Track />
      </div>
    </div>
  )
}
