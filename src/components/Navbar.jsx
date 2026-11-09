import { useEffect, useState } from 'react'
import {
  ArrowRight,
  BookOpen,
  ChevronDown,
  GraduationCap,
  Languages,
  Menu,
  Sparkles,
  X,
} from 'lucide-react'

const courseLinks = [
  {
    label: 'Quran Reading (Nazra)',
    href: '#courses',
    desc: 'Foundational Arabic letters, sounds & fluent recitation',
    icon: BookOpen,
  },
  {
    label: 'Tajweed Rules & Practice',
    href: '#courses',
    desc: 'Master Makharij, rules of Noon/Meem & beautification',
    icon: Sparkles,
  },
  {
    label: 'Quran Memorization (Hifz)',
    href: '#courses',
    desc: 'Personalized retention plans with certified Hafiz tutors',
    icon: GraduationCap,
  },
  {
    label: 'Islamic Studies & Arabic',
    href: '#courses',
    desc: 'Aqeedah, Fiqh, Seerah, Hadith & Quranic Arabic',
    icon: Languages,
  },
]

const navLinks = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Teachers', href: '#teachers' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

function Logo() {
  return (
    <a href="#home" className="flex items-center gap-3" aria-label="Noor Academy home">
      {/* Brand Icon */}
      <span className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 via-[var(--color-accent)] to-[var(--color-accent-dark)] text-white shadow-sm transition-transform hover:scale-105">
        <svg width="22" height="22" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M23 4.5C17.5 3 12 6 10.5 11.5C9 17 12 22.5 17.5 24C14.5 25.5 11 25 8.5 22.5C11 28.5 18 31 24 28.5C19 29.5 14 26.5 13 21.5C18 24 23.5 21.5 25.5 16.5C21 18.5 16 16.5 14.5 12C13.5 8.5 15.5 5 19 4C20.5 3.5 21.5 4 23 4.5Z"
            fill="white"
          />
        </svg>
      </span>

      {/* Brand Text styled in Scaltiva's signature wide tracking */}
      <span className="text-xl font-light uppercase tracking-[0.22em] text-slate-900 sm:text-2xl">
        Noor Academy
      </span>
    </a>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMobile = () => setMobileOpen(false)

  const navLinkStyle =
    'text-xs font-semibold uppercase tracking-wider text-slate-700 transition hover:text-[var(--color-accent-dark)]'

  return (
    <header
      className={`fixed inset-x-3 top-3 z-50 mx-auto max-w-7xl rounded-2xl border border-slate-200/80 bg-white/90 backdrop-blur-md transition-all duration-300 sm:inset-x-5 sm:top-4 ${
        scrolled ? 'shadow-md shadow-slate-300/40 border-slate-300/80' : 'shadow-sm'
      }`}
    >
      <nav className="flex h-16 items-center justify-between px-4 lg:px-6" aria-label="Main">
        {/* Logo */}
        <Logo />

        {/* Desktop Nav Links */}
        <ul className="hidden items-center gap-8 lg:flex xl:gap-9">
          {/* Courses Dropdown with Scaltiva-style Mega Menu */}
          <li className="group relative">
            <button
              type="button"
              className={`flex items-center gap-1 py-5 ${navLinkStyle}`}
            >
              Courses
              <ChevronDown className="size-3.5 transition-transform duration-200 group-hover:rotate-180" />
            </button>

            {/* Mega Dropdown Panel */}
            <div className="invisible absolute left-1/2 top-full w-[34rem] -translate-x-1/2 origin-top scale-95 overflow-hidden rounded-2xl border border-slate-100 bg-white opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:scale-100 group-hover:opacity-100">
              <ul className="grid grid-cols-2 gap-2 p-3">
                {courseLinks.map((course) => {
                  const Icon = course.icon
                  return (
                    <li key={course.label}>
                      <a
                        href={course.href}
                        className="group/item flex items-start gap-3 rounded-xl p-3 transition hover:bg-slate-50"
                      >
                        <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-emerald-50 text-[var(--color-accent-dark)] transition-all duration-300 group-hover/item:-rotate-6 group-hover/item:scale-110 group-hover/item:bg-[var(--color-accent)] group-hover/item:text-white">
                          <Icon className="size-5" />
                        </span>
                        <span className="min-w-0">
                          <span className="flex items-center gap-1 text-sm font-semibold normal-case tracking-normal text-slate-900">
                            {course.label}
                            <ArrowRight className="size-3.5 -translate-x-1 opacity-0 transition duration-300 group-hover/item:translate-x-0 group-hover/item:opacity-100 text-[var(--color-accent)]" />
                          </span>
                          <span className="mt-0.5 block text-xs font-normal normal-case leading-snug tracking-normal text-slate-500">
                            {course.desc}
                          </span>
                        </span>
                      </a>
                    </li>
                  )
                })}
              </ul>

              <a
                href="#contact"
                className="flex items-center justify-between border-t border-slate-100 bg-slate-50 px-6 py-3.5 text-xs font-medium normal-case tracking-normal text-slate-700 transition hover:bg-emerald-50 hover:text-[var(--color-accent-dark)]"
              >
                <span>Not sure which course is right? Book a free trial lesson</span>
                <ArrowRight className="size-4 text-[var(--color-accent)]" />
              </a>
            </div>
          </li>

          {/* Standard Navigation Links */}
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className={navLinkStyle}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Action Button (Scaltiva CTA Button) & Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-lg bg-[#ea580c] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition hover:bg-[#c2410c] hover:opacity-95 lg:inline-block"
          >
            Get a Quote
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="grid size-10 place-items-center rounded-lg text-slate-700 hover:bg-slate-100 lg:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="border-t border-slate-100 px-4 pb-5 pt-3 lg:hidden">
          <p className="px-3 py-2 text-xs font-semibold uppercase tracking-widest text-slate-400">
            Courses
          </p>
          {courseLinks.map((course) => (
            <a
              key={course.label}
              href={course.href}
              onClick={closeMobile}
              className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              {course.label}
            </a>
          ))}

          <div className="my-2 border-t border-slate-100" />

          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeMobile}
              className="block rounded-lg px-3 py-2.5 text-xs font-semibold uppercase tracking-wide text-slate-700 hover:bg-slate-50"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={closeMobile}
            className="mt-3 block rounded-lg bg-[#ea580c] py-3 text-center text-xs font-bold uppercase tracking-wider text-white shadow-sm"
          >
            Get a Quote
          </a>
        </div>
      )}
    </header>
  )
}
