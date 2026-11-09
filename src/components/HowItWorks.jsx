import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { BookOpenCheck, CornerDownRight, Search, Users2 } from 'lucide-react'

const STEPS = [
  {
    title: 'Find teacher or course.',
    description:
      'We connect you with a teacher who will motivate you, guide your first steps and inspire your learning.',
    icon: Search,
    image: '/images/step-find-teacher.jpg',
    badge: 'Step 01 • Teacher Selection',
  },
  {
    title: 'Start learning.',
    description:
      'Your teacher will guide you through your first lesson and help you plan your next steps.',
    icon: Users2,
    image: '/images/step-start-learning.jpg',
    badge: 'Step 02 • Live 1-on-1 Class',
  },
  {
    title: 'Recite, understand & memorize.',
    description:
      'Choose how many lessons you want to take each week and get ready to reach your goals.',
    icon: BookOpenCheck,
    image: '/images/step-recite-memorize.jpg',
    badge: 'Step 03 • Mastery & Hifz',
  },
]

function StepVisual({ title, icon: Icon, image, badge }) {
  return (
    <div className="relative size-full overflow-hidden rounded-xl bg-slate-100">
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="size-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
      <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
            <Icon size={18} className="text-white" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
            {badge}
          </span>
        </div>
      </div>
    </div>
  )
}

export default function HowItWorks() {
  const reduce = useReducedMotion()
  const [active, setActive] = useState(0)
  const stepRefs = useRef([])

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number(e.target.dataset.index))
        }
      },
      { rootMargin: '-45% 0px -45% 0px' },
    )
    stepRefs.current.forEach((el) => el && io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section id="how-it-works" className="bg-[var(--color-secondary-light)] px-5 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold tracking-tight text-[var(--color-text-h)] sm:text-5xl">
          How <span className="text-[var(--color-accent)]">Noor Academy</span> Works
        </h2>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-500">
          A simple, transparent process, so you always know what happens next
          — from your first lesson to reciting with confidence.
        </p>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="hidden lg:sticky lg:top-28 lg:block lg:self-start">
            <div className="relative aspect-[4/3] max-w-lg overflow-hidden rounded-xl bg-slate-50 shadow-xl">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: reduce ? 1 : 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: reduce ? 0 : 0.6, ease: 'easeOut' }}
                  className="absolute inset-0 size-full"
                >
                  <StepVisual {...STEPS[active]} />
                </motion.div>
              </AnimatePresence>
            </div>

            <a
              href="#contact"
              className="mt-5 inline-flex items-center gap-2 text-xs font-semibold transition hover:text-[var(--color-accent-dark)]"
            >
              <CornerDownRight className="size-4 text-[var(--color-accent)]" /> Get in touch
            </a>
          </div>

          <ol>
            {STEPS.map((s, i) => (
              <li
                key={s.title}
                data-index={i}
                ref={(el) => {
                  stepRefs.current[i] = el
                }}
                className={`border-b border-slate-200 py-10 transition-opacity duration-500 last:border-b-0 lg:min-h-[60vh] lg:py-16 lg:first:pt-0 ${
                  i === active ? 'opacity-100' : 'lg:opacity-35'
                }`}
              >
                <span className="block text-7xl font-light tracking-tight text-[var(--color-text-h)] sm:text-8xl">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-6 text-xl font-semibold text-[var(--color-text-h)]">{s.title}</h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-500">
                  {s.description}
                </p>

                <div className="relative mt-6 aspect-[4/3] w-full overflow-hidden rounded-xl lg:hidden">
                  <StepVisual {...s} />
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
