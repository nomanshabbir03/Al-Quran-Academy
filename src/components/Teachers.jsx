import { useState } from 'react'

const teachers = [
  {
    name: 'Ustadh Muhammad Ibrahim',
    image: '/images/Tutor-1.png',
    specialty: 'Tajweed & Quran Recitation Mentor',
  },
  {
    name: 'Ustadh Omar Ibn Abdullah',
    image: '/images/Tutor-2.png',
    specialty: 'Hifz & Qira’at Specialist',
  },
  {
    name: 'Sheikh Dr. Abdullah Al-Mansoor',
    image: '/images/Tutor-3.png',
    specialty: 'Senior Quran & Islamic Studies Scholar',
  },
  {
    name: 'Ustadha Fatima Al-Zahra',
    image: '/images/Tutor-4.png',
    specialty: 'Kids & Female Tajweed Instructor',
  },
  {
    name: 'Ustadha Maryam Siddiqa',
    image: '/images/Tutor-5.png',
    specialty: 'Senior Quran & Tafseer Specialist',
  },
]

export default function Teachers() {
  const [active, setActive] = useState(0)

  return (
    <section id="teachers" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-[var(--color-text-h)] sm:text-4xl">
          Find the Right Teacher for You
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-sm text-slate-500">
          Hover over a photo to meet the teacher.
        </p>

        <div className="mt-10 flex h-[380px] gap-2.5 overflow-hidden rounded-3xl sm:h-[450px]">
          {teachers.map((teacher, index) => {
            const isActive = index === active
            return (
              <button
                key={teacher.name}
                type="button"
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                aria-pressed={isActive}
                className={`relative h-full shrink-0 cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-b from-slate-50 to-slate-100 transition-[flex-grow] duration-500 ease-in-out focus:outline-none ${
                  isActive ? 'grow-[5]' : 'grow'
                }`}
                style={{ flexBasis: 0 }}
              >
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  loading="lazy"
                  className={`h-full w-full object-cover object-top transition duration-500 ${
                    isActive ? 'scale-105' : 'brightness-95 contrast-95'
                  }`}
                />

                <div
                  className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-5 text-left transition-opacity duration-300 ${
                    isActive ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <p className="text-lg font-semibold text-white">{teacher.name}</p>
                  <p className="text-xs font-medium text-emerald-300">{teacher.specialty}</p>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
