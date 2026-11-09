import { useState } from 'react'
import { Clock, Layers, Star } from 'lucide-react'

const categories = ['All Courses', 'For Kids', 'For Adults', 'Tajweed', 'Islamic Studies']

const courses = [
  {
    category: 'For Kids',
    tag: 'For Kids',
    gradient: 'from-emerald-400 to-emerald-700',
    title: 'Learning Arabic Alphabets Basics',
    description:
      'Learning the Arabic alphabet builds the foundation for reading, writing, and pronouncing Quranic words.',
    duration: '10hr 45m',
    classes: '14 Classes',
    rating: '4.9 Reviews',
    price: '$35.00',
  },
  {
    category: 'Tajweed',
    tag: 'Tajweed',
    gradient: 'from-teal-500 to-slate-800',
    title: '30 Days Tajweed Rules Basics',
    description:
      'Learning Tajweed opens doors to understanding a rich language spoken by millions worldwide.',
    duration: '10hr 45m',
    classes: '14 Classes',
    rating: '4.9 Reviews',
    price: '$40.00',
  },
  {
    category: 'For Adults',
    tag: 'For Adults',
    gradient: 'from-slate-700 to-slate-900',
    title: 'Adult Quran Learning Course',
    description:
      'Learning Quran is now easier than ever with Noor Academy, we offer the best online Quran learning.',
    duration: '10hr 45m',
    classes: '14 Classes',
    rating: '4.9 Reviews',
    price: '$60.00',
  },
  {
    category: 'Islamic Studies',
    tag: 'Islamic Studies',
    gradient: 'from-emerald-600 to-teal-800',
    title: 'Foundations of Islamic Studies',
    description:
      'Build a strong foundation in Aqeedah, Fiqh, and Seerah with structured, easy-to-follow lessons.',
    duration: '8hr 30m',
    classes: '10 Classes',
    rating: '4.8 Reviews',
    price: '$45.00',
  },
]

export default function Courses() {
  const [active, setActive] = useState('All Courses')

  const filtered =
    active === 'All Courses' ? courses : courses.filter((c) => c.category === active)

  return (
    <section id="courses" className="bg-[var(--color-secondary-light)] py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-secondary)] px-4 py-2 text-sm font-medium text-[var(--color-accent-dark)]">
            Our Courses
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-[var(--color-text-h)] sm:text-4xl">
            Find the Best Course for Your Needs
          </h2>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === category
                  ? 'bg-[var(--color-dark)] text-white'
                  : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((course) => (
            <div
              key={course.title}
              className="flex flex-col rounded-2xl bg-white p-3 shadow-sm ring-1 ring-slate-100 transition-shadow hover:shadow-lg"
            >
              <div
                className={`relative h-36 rounded-xl bg-gradient-to-br ${course.gradient}`}
              >
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[var(--color-text-h)]">
                  {course.tag}
                </span>
              </div>

              <h3 className="mt-4 text-base font-semibold leading-snug text-[var(--color-text-h)]">
                {course.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
                {course.description}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <Clock size={13} />
                  {course.duration}
                </span>
                <span className="flex items-center gap-1">
                  <Layers size={13} />
                  {course.classes}
                </span>
                <span className="flex items-center gap-1">
                  <Star size={13} className="fill-amber-400 text-amber-400" />
                  {course.rating}
                </span>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                <span className="text-lg font-bold text-[var(--color-text-h)]">
                  {course.price}
                </span>
                <a
                  href="#contact"
                  className="rounded-full bg-[var(--color-accent)] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[var(--color-accent-dark)]"
                >
                  Join Course
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
