import Link from "next/link";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Proof of Lift",
  description: "Evidence, dashboards, and signals demonstrating Synerva’s impact.",
  path: "/proof"
});

export default function ProofPage() {
  return (
    <main className="bg-[var(--bg)] text-white">
      <section className="relative isolate overflow-hidden px-6 pt-28 sm:px-10 lg:px-16">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-black/80 to-cyan-500/10" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative mx-auto flex max-w-5xl flex-col gap-6 rounded-[3rem] border border-white/10 bg-black/50 p-10 backdrop-blur-3xl">
          <div className="flex justify-start">
            <Link href="/" className="text-sm uppercase tracking-[0.3em] text-white/70 transition hover:text-white">
              ← Home
            </Link>
          </div>
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">Proof of Lift</p>
          <h1 className="text-4xl leading-tight sm:text-5xl">Evidence in Motion</h1>
          <p className="text-sm text-white/70">
            This page will house live dashboards, case metrics, and verification signals demonstrating Synerva’s impact. It’s coming soon—reach out if you want the latest report.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-black transition hover:bg-white/90"
            >
              Request the Report
            </Link>
            <Link
              href="/cases"
              className="rounded-full border border-white/40 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white hover:bg-white/10"
            >
              Explore Case Studies
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
