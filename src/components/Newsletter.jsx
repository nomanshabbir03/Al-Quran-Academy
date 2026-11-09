export default function Newsletter() {
  return (
    <section className="px-4 pb-4 md:px-8">
      <div className="mx-auto max-w-7xl rounded-3xl bg-[var(--color-accent)] px-6 py-12 text-center text-white sm:px-12">
        <h2 className="text-2xl font-bold sm:text-3xl">Subscribe for Noor Academy&apos;s Updates</h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-white/85">
          Learning Quran is now easier than ever with Noor Academy. Get tips
          and offers straight to your inbox.
        </p>

        <form
          className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="w-full flex-1 rounded-full border-0 px-5 py-3 text-sm text-[var(--color-text-h)] outline-none ring-0 placeholder:text-slate-400"
          />
          <button
            type="submit"
            className="shrink-0 rounded-full bg-[var(--color-dark)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-black"
          >
            Subscribe Now
          </button>
        </form>
      </div>
    </section>
  )
}
