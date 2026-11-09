import { Check } from 'lucide-react'

const benefits = ['Find new students', 'Grow your teaching business', 'Get paid securely']

export default function BecomeTeacher() {
  return (
    <section id="become-a-teacher" className="bg-[var(--color-accent)] py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 md:px-8 lg:grid-cols-2">
        <div className="text-white">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
            Become a
            <br />
            Noor Academy Teacher
          </h2>
          <p className="mt-4 max-w-md text-white/85">
            Earn money sharing your expert knowledge with students. Sign up to
            start teaching Quran and Islamic studies online with Noor
            Academy.
          </p>

          <ul className="mt-6 space-y-2.5">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-2.5 text-sm font-medium">
                <Check size={16} className="shrink-0" />
                {benefit}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <a
              href="#contact"
              className="rounded-full bg-[var(--color-dark)] px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-black"
            >
              Become a Teacher
            </a>
            <a href="#contact" className="text-sm font-semibold underline underline-offset-4">
              Help &amp; Guideline
            </a>
          </div>
        </div>

        <div className="relative h-72 overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/20 sm:h-80">
          <img
            src="/images/become-teacher.jpg"
            alt="Noor Academy teacher providing online Quran instruction"
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>
    </section>
  )
}
