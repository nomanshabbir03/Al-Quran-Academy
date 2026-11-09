const bannerButtons = [
  // Primary CTAs (Bottom Left)
  {
    id: 'register-now',
    label: 'Register Now',
    href: '#contact',
    type: 'primary',
    left: '5.83%',
    top: '83.94%',
    width: '11.96%',
    height: '6.42%',
  },
  {
    id: 'free-trial',
    label: 'Get Free Trial',
    href: '#contact',
    type: 'secondary',
    left: '19.02%',
    top: '83.94%',
    width: '11.78%',
    height: '6.42%',
  },

  // Course Pills (Bottom Right)
  // Row 1
  {
    id: 'tajweed',
    label: 'Tajweed',
    href: '#courses',
    type: 'primary',
    left: '74.23%',
    top: '76.27%',
    width: '6.99%',
    height: '4.35%',
  },
  {
    id: 'quran-reading',
    label: 'Quran Reading',
    href: '#courses',
    type: 'secondary',
    left: '81.84%',
    top: '76.27%',
    width: '10.18%',
    height: '4.35%',
  },

  // Row 2
  {
    id: 'tafseer',
    label: 'Tafseer',
    href: '#courses',
    type: 'secondary',
    left: '74.23%',
    top: '81.66%',
    width: '6.63%',
    height: '4.35%',
  },
  {
    id: 'quran-recitation',
    label: 'Quran Recitation',
    href: '#courses',
    type: 'primary',
    left: '81.47%',
    top: '81.66%',
    width: '11.90%',
    height: '4.35%',
  },

  // Row 3
  {
    id: 'noorani-qaida',
    label: 'Noorani Qaida',
    href: '#courses',
    type: 'secondary',
    left: '74.23%',
    top: '87.05%',
    width: '10.06%',
    height: '4.35%',
  },
  {
    id: 'arabic-basics',
    label: 'Arabic Basics',
    href: '#courses',
    type: 'secondary',
    left: '84.91%',
    top: '87.05%',
    width: '9.69%',
    height: '4.35%',
  },

  // Row 4
  {
    id: 'hifz',
    label: 'Hifz (Memorization)',
    href: '#courses',
    type: 'primary',
    left: '74.23%',
    top: '92.44%',
    width: '12.76%',
    height: '4.35%',
  },
]

export default function Hero() {
  const handleClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative flex w-full min-h-screen items-center justify-center overflow-hidden pb-4 pt-20 sm:pt-24"
      style={{
        background:
          'linear-gradient(to bottom, #ffffff 0%, #ffffff 49.64%, #dbf2e3 49.64%, #dbf2e3 100%)',
      }}
    >
      {/* Full-width canvas: banner centered at its natural aspect ratio, seamlessly blending edge-to-edge */}
      <div className="relative flex w-full items-center justify-center">
        <div
          className="relative aspect-[1630/965] w-full"
          style={{
            maxHeight: 'calc(100dvh - 6.5rem)',
            maxWidth: 'calc((100dvh - 6.5rem) * 1.689)',
          }}
        >
          <img
            src="/images/Modern Quran Learning Banner.png"
            alt="Modern Quran Learning Banner"
            className="h-full w-full select-none object-contain"
          />

          {/* Interactive Clickable Hotspot Overlays */}
          {bannerButtons.map((btn) => (
            <a
              key={btn.id}
              href={btn.href}
              onClick={(e) => handleClick(e, btn.href)}
              aria-label={btn.label}
              title={btn.label}
              className={`group absolute cursor-pointer rounded-full transition-all duration-200 active:scale-95 focus:outline-none ${
                btn.type === 'primary'
                  ? 'hover:ring-2 hover:ring-emerald-400 hover:ring-offset-2 hover:bg-white/10'
                  : 'hover:ring-2 hover:ring-emerald-800/60 hover:bg-emerald-900/10'
              }`}
              style={{
                left: btn.left,
                top: btn.top,
                width: btn.width,
                height: btn.height,
              }}
            >
              <span className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-200 group-hover:opacity-100 bg-white/10" />
            </a>
          ))}
        </div>
      </div>

      {/* Mobile quick-action bar for small phone screens */}
      <div className="absolute inset-x-0 bottom-2 z-10 flex flex-col items-center gap-1.5 px-3 sm:hidden">
        <div className="flex w-full max-w-xs gap-2">
          <a
            href="#contact"
            onClick={(e) => handleClick(e, '#contact')}
            className="flex-1 rounded-full bg-[var(--color-accent)] py-2 text-center text-xs font-semibold text-white shadow-md active:bg-[var(--color-accent-dark)]"
          >
            Register Now
          </a>
          <a
            href="#contact"
            onClick={(e) => handleClick(e, '#contact')}
            className="flex-1 rounded-full border border-[var(--color-accent)] bg-white/95 py-2 text-center text-xs font-semibold text-[var(--color-accent-dark)] shadow-sm active:bg-slate-50"
          >
            Free Trial
          </a>
        </div>
      </div>
    </section>
  )
}
