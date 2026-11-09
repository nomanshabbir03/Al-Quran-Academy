import { ArrowRight } from 'lucide-react'
import CourseMarquee from './CourseMarquee'

export default function AboutMarquee() {
  return (
    <section className="bg-white pb-16 pt-8">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center">
          <a
            href="#about"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-text-h)] hover:text-[var(--color-accent-dark)]"
          >
            Learn More About Noor Academy
            <ArrowRight size={15} />
          </a>
        </div>

        <CourseMarquee />
      </div>
    </section>
  )
}
