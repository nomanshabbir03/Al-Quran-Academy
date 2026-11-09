import { useState } from 'react'
import { Plus } from 'lucide-react'

const faqs = [
  {
    question: 'How do online Quran classes work?',
    answer:
      "You'll be matched with a qualified teacher who guides you through live, one-on-one video lessons at a time that suits your schedule.",
  },
  {
    question: 'Do you offer classes for kids?',
    answer:
      'Yes, we have teachers who specialize in teaching children, using engaging methods suited to younger learners.',
  },
  {
    question: 'What do I need to get started?',
    answer: 'Just a stable internet connection, a device with a camera, and a quiet place to learn.',
  },
  {
    question: 'Can I choose my own teacher?',
    answer:
      'Absolutely. You can browse teacher profiles, read reviews, and book a trial lesson before committing.',
  },
  {
    question: 'What if I want to cancel or reschedule a lesson?',
    answer:
      'You can reschedule or cancel a lesson up to 24 hours in advance directly from your dashboard, free of charge.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-[var(--color-text-h)] sm:text-4xl">
          Frequently Asked Questions
        </h2>

        <div className="mt-10 divide-y divide-slate-100 rounded-2xl border border-slate-100">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div key={faq.question} className="px-5">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-sm font-medium text-[var(--color-text-h)] sm:text-base">
                    {faq.question}
                  </span>
                  <Plus
                    size={18}
                    className={`shrink-0 text-[var(--color-accent-dark)] transition-transform ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="pb-5 text-sm leading-relaxed text-slate-500">{faq.answer}</p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
