import MosqueSkyline from './MosqueSkyline'

const currentYear = new Date().getFullYear()

function StarBadge({ children, label, href = '#' }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="group relative flex h-9 w-9 items-center justify-center transition-transform hover:scale-110 sm:h-10 sm:w-10"
    >
      {/* 8-pointed Islamic Star (Khatam / Octagram) */}
      <svg
        viewBox="0 0 36 36"
        className="absolute inset-0 h-full w-full text-white/20 transition-colors group-hover:text-white/35"
        aria-hidden="true"
      >
        <path
          d="M 18.0 2.0 L 22.4 7.4 L 29.3 6.7 L 28.6 13.6 L 34.0 18.0 L 28.6 22.4 L 29.3 29.3 L 22.4 28.6 L 18.0 34.0 L 13.6 28.6 L 6.7 29.3 L 7.4 22.4 L 2.0 18.0 L 7.4 13.6 L 6.7 6.7 L 13.6 7.4 Z"
          fill="currentColor"
          stroke="white"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      </svg>
      <span className="relative z-10 flex items-center justify-center text-white">
        {children}
      </span>
    </a>
  )
}

const navLinks = [
  'Home',
  'About Us',
  'Courses',
  'Pricing',
  'Find Teachers',
  "FAQ's",
  'Contact Us',
  'Privacy Policy',
  'Terms & Conditions',
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Top Sky with Islamic Geometric Watermark & Grand Mosque Skyline */}
      <div className="relative h-48 bg-gradient-to-b from-white via-[var(--color-secondary-light)] to-[var(--color-secondary)] sm:h-64 md:h-72 lg:h-80">
        <MosqueSkyline className="absolute inset-0 h-full w-full text-[var(--color-accent)]" />
      </div>

      {/* Mosque Main Body - Solid Brand Accent with Brand Content */}
      <div className="relative -mt-px bg-[var(--color-accent)] px-4 pb-10 pt-2 text-center text-white">
        {/* Brand Logo with Open Quran & Sunburst Rays (Noor) */}
        <a href="#home" className="group inline-flex flex-col items-center">
          <div className="relative flex items-center justify-center">
            {/* Sunburst / Noor radiance behind Quran */}
            <svg width="44" height="22" viewBox="0 0 44 22" fill="none" className="absolute -top-3">
              <circle cx="22" cy="22" r="13" fill="#fbbf24" fillOpacity="0.9" />
              <line x1="22" y1="3" x2="22" y2="7" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
              <line x1="14" y1="6" x2="16.5" y2="9.5" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
              <line x1="30" y1="6" x2="27.5" y2="9.5" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
              <line x1="7" y1="13" x2="11" y2="15" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
              <line x1="37" y1="13" x2="33" y2="15" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
            </svg>

            {/* Open Holy Quran on Wooden Rehal */}
            <svg width="48" height="32" viewBox="0 0 48 32" fill="none" className="relative drop-shadow">
              <path
                d="M24 9 C20 5, 10 4, 4 7 L4 22 C10 19, 20 20, 24 24 C28 20, 38 19, 44 22 L44 7 C38 4, 28 5, 24 9 Z"
                fill="#ffffff"
                stroke="#e2e8f0"
                strokeWidth="0.8"
              />
              <line x1="24" y1="9" x2="24" y2="24" stroke="#cbd5e1" strokeWidth="1" />
              <path
                d="M13 23 L20 29 L24 26 L28 29 L35 23 L32 21 L24 25 L16 21 Z"
                fill="#fef3c7"
                opacity="0.95"
              />
              <path
                d="M16 27 L13 31 M32 27 L35 31"
                stroke="#fef3c7"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <span className="mt-2 text-xl font-bold tracking-tight text-white transition-opacity group-hover:opacity-95">
            Noor Academy
          </span>
        </a>

        {/* Social Icons in 8-Point Islamic Star Badges */}
        <div className="mt-6 flex items-center justify-center gap-2.5 sm:gap-3.5">
          {/* Facebook */}
          <StarBadge label="Facebook">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14 9h-2a2 2 0 0 0-2 2v2H8v3h2v6h3v-6h2.2l.3-3H13v-1.6c0-.6.2-1 1-1h1.3V9h-1.3Z" />
            </svg>
          </StarBadge>

          {/* Instagram */}
          <StarBadge label="Instagram">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="3.5" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </StarBadge>

          {/* WhatsApp */}
          <StarBadge label="WhatsApp">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3Zm0 1.8A7.2 7.2 0 1 1 6.9 17l-.3-.2-2.7.7.7-2.6-.2-.3A7.2 7.2 0 0 1 12 4.8Zm-3.6 3.5c-.2 0-.5 0-.7.3-.2.3-.9.8-.9 2s.9 2.4 1 2.6c.1.2 1.8 2.8 4.4 3.8 2.1.8 2.6.7 3 .6.5 0 1.6-.6 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3-.3-.2-1.6-.8-1.9-.9-.2-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.6.1-.3-.2-1.1-.4-2.1-1.3-.8-.7-1.3-1.5-1.5-1.8-.1-.3 0-.4.1-.6l.4-.5c.1-.1.2-.3.2-.4.1-.2 0-.4 0-.5-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4Z" />
            </svg>
          </StarBadge>

          {/* Twitter / X */}
          <StarBadge label="Twitter / X">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.2 3h3.4l-7.4 8.5 8.8 11.5h-6.8l-5.3-7-6.1 7H1.3l8-9.1L0.8 3h7l4.8 6.3L18.2 3Zm-1.2 18h1.9L6.9 4.9H4.8l12.2 16.1Z" />
            </svg>
          </StarBadge>

          {/* YouTube */}
          <StarBadge label="YouTube">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21.6 7.2a2.7 2.7 0 0 0-1.9-1.9C18 4.8 12 4.8 12 4.8s-6 0-7.7.5a2.7 2.7 0 0 0-1.9 1.9C2 8.9 2 12 2 12s0 3.1.4 4.8a2.7 2.7 0 0 0 1.9 1.9c1.7.5 7.7.5 7.7.5s6 0 7.7-.5a2.7 2.7 0 0 0 1.9-1.9c.4-1.7.4-4.8.4-4.8s0-3.1-.4-4.8ZM10 15V9l5.2 3-5.2 3Z" />
            </svg>
          </StarBadge>
        </div>

        {/* Navigation Links */}
        <nav className="mx-auto mt-7 flex max-w-4xl flex-wrap items-center justify-center gap-x-6 gap-y-2.5 text-sm font-medium text-white/90">
          {navLinks.map((link) => (
            <a key={link} href="#" className="transition-colors hover:text-white hover:underline underline-offset-4">
              {link}
            </a>
          ))}
        </nav>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-[var(--color-accent-dark)] py-3.5 text-center text-xs font-medium text-white/85 sm:text-sm">
        All rights reserved {currentYear} © Noor Academy
      </div>
    </footer>
  )
}
