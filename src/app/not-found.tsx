import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--bg)] px-6 py-20 text-white">
      <div className="max-w-xl space-y-6 rounded-[2rem] border border-white/10 bg-black/60 p-8 text-center backdrop-blur-2xl">
        <p className="text-xs uppercase tracking-[0.4em] text-white/60">Page Coming Soon</p>
        <h1 className="text-3xl sm:text-4xl">This page isn&apos;t live yet.</h1>
        <p className="text-sm text-white/70">
          We&apos;re finishing this section. In the meantime, you can head back to the homepage.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/#hero"
            className="rounded-full bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-black hover:bg-white/90"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </main>
  );
}
