import { BookOpen, Compass, Hexagon, Infinity as InfinityIcon, Shield, Zap } from 'lucide-react'

const courses = [
  { icon: InfinityIcon, label: 'All Courses' },
  { icon: BookOpen, label: 'Quran Reading' },
  { icon: Zap, label: 'Hifz Memorization' },
  { icon: Hexagon, label: 'Tajweed Rules' },
  { icon: Shield, label: 'Islamic Studies' },
  { icon: Compass, label: 'Arabic Language' },
]

function MarqueeTrack() {
  return (
    <div className="flex shrink-0 items-center">
      {courses.map(({ icon: Icon, label }, index) => (
        <span
          key={`${label}-${index}`}
          className="mx-6 flex items-center gap-2.5 whitespace-nowrap text-lg font-bold uppercase tracking-wide text-[var(--color-text-h)] sm:text-xl"
        >
          <Icon size={22} className="text-[var(--color-accent)]" />
          {label}
        </span>
      ))}
    </div>
  )
}

export default function CourseMarquee() {
  return (
    <div className="relative mt-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max animate-marquee">
        <MarqueeTrack />
        <MarqueeTrack />
      </div>
    </div>
  )
}
