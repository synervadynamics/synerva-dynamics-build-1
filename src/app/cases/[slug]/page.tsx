import Link from "next/link";

export default function CaseComingSoon() {
  return (
    <main className="bg-[var(--bg)] text-white">
      <section className="relative isolate overflow-hidden px-6 py-28 sm:px-10 lg:px-16">
        <div className="relative z-10 mb-4 flex justify-start">
          <Link href="/" className="text-sm uppercase tracking-[0.3em] text-white/70 transition hover:text-white">
            ← Home
          </Link>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-black/80 to-cyan-500/10" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-[3rem] border border-white/10 bg-black/60 p-10 text-center backdrop-blur-2xl">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">Page Coming Soon</p>
          <h1 className="text-3xl sm:text-4xl">This case study is not live yet.</h1>
          <p className="text-sm text-white/70">
            We&apos;re preparing this story. In the meantime, explore the current case summaries or head back to the homepage.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/cases"
              className="rounded-full bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-black hover:bg-white/90"
            >
              View Case Summaries
            </Link>
            <Link
              href="/#cases"
              className="rounded-full border border-white/30 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white hover:border-white/60"
            >
              Back to Cases Section
            </Link>
            <Link
              href="/#hero"
              className="rounded-full border border-white/30 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white hover:border-white/60"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
