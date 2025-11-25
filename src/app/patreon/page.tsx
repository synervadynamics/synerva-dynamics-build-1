import { buildPageMetadata } from "@/lib/metadata";
import { copy } from "@/data/copy";
import Link from "next/link";

const patreon = copy.patreon;

export const metadata = buildPageMetadata({
  title: patreon.title,
  description: patreon.lead,
  path: "/patreon"
});

export default function PatreonPage() {
  return (
    <main className="bg-[var(--bg)] text-white">
      <section className="relative isolate overflow-hidden px-6 pt-28 sm:px-10 lg:px-16">
        <div className="relative z-10 mb-4 flex justify-start">
          <Link href="/" className="text-sm uppercase tracking-[0.3em] text-white/70 transition hover:text-white">
            ← Home
          </Link>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-black/70 to-cyan-500/20" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative mx-auto flex max-w-5xl flex-col gap-6 rounded-[3rem] border border-white/10 bg-black/50 p-10 backdrop-blur-2xl">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">{patreon.eyebrow}</p>
          <h1 className="text-4xl leading-tight sm:text-5xl lg:text-6xl">{patreon.title}</h1>
          <p className="text-lg text-white/75">{patreon.lead}</p>
          <Link
            href={patreon.cta.href}
            className="inline-flex w-fit rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-black transition hover:bg-white/90"
          >
            {patreon.cta.label}
          </Link>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-16 sm:px-10 lg:px-16">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-slate-900/70 to-black" />
        <div className="relative mx-auto max-w-6xl space-y-10 rounded-[3rem] border border-white/10 bg-black/40 p-8 backdrop-blur-2xl">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">Tiers</p>
            <h2 className="text-3xl text-white sm:text-4xl">Choose Your Seat</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {patreon.tiers.map(tier => (
              <div key={tier.name} className="glass-panel flex h-full flex-col gap-3 rounded-3xl border border-white/10 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-white/60">{tier.name}</p>
                <p className="text-sm text-white/75">{tier.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 pb-20 sm:px-10 lg:px-16">
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/85" />
        <div className="relative mx-auto max-w-6xl space-y-8 rounded-[3rem] border border-white/10 bg-black/40 p-8 backdrop-blur-2xl">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">What’s included</p>
            <h2 className="text-3xl text-white sm:text-4xl">Inside the Inner Studio</h2>
          </div>
          <ul className="grid gap-4 md:grid-cols-2">
            {patreon.includes.map(item => (
              <li key={item} className="flex items-start gap-3 text-sm text-white/80">
                <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300" />
                {item}
              </li>
            ))}
          </ul>
          <Link
            href={patreon.cta.href}
            className="inline-flex w-fit rounded-full border border-white/40 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white hover:bg-white/10"
          >
            {patreon.cta.label}
          </Link>
        </div>
      </section>
    </main>
  );
}
