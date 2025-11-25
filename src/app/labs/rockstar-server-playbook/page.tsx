import Link from "next/link";
import { buildPageMetadata } from "@/lib/metadata";
import { copy } from "@/data/copy";

const spotlight = copy.labs.rockstarPlaybook;

export const metadata = buildPageMetadata({
  title: spotlight.title,
  description: spotlight.description,
  path: "/labs/rockstar-server-playbook"
});

export default function RockstarPlaybookPage() {
  return (
    <main className="bg-[var(--bg)] text-white">
      <section className="relative isolate overflow-hidden px-6 pt-28 sm:px-10 lg:px-16">
        <div className="relative z-10 mb-4 flex justify-start">
          <Link href="/" className="text-sm uppercase tracking-[0.3em] text-white/70 transition hover:text-white">
            ← Home
          </Link>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-black/80 to-amber-400/10" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative mx-auto grid max-w-5xl gap-10 rounded-[3rem] border border-white/10 bg-black/50 p-10 backdrop-blur-3xl lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">{spotlight.eyebrow}</p>
            <h1 className="text-4xl leading-tight sm:text-5xl">{spotlight.title}</h1>
            <p className="text-base text-white/75">{spotlight.description}</p>
            <ul className="space-y-2 text-sm text-white/80">
              {spotlight.highlights.map(point => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/50" />
                  {point}
                </li>
              ))}
            </ul>
            <div className="grid gap-3 text-sm text-white/70">
              {spotlight.stats.map(stat => (
                <p key={stat.label}>
                  <span className="font-semibold text-white">{stat.label}:</span> {stat.value}
                </p>
              ))}
            </div>
            <Link
              href="/labs#preview-access"
              className="inline-flex rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-black"
            >
              Read the Playbook
            </Link>
          </div>
          <div className="space-y-4 rounded-[2.5rem] border border-white/10 bg-white/5 p-6">
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <video autoPlay loop muted playsInline className="aspect-[4/3] w-full object-cover" aria-label="What Pressure Teaches">
                <track kind="captions" label="What Pressure Teaches" />
                <source src="/visuals/deliver/hero-vid-1.mp4" type="video/mp4" />
              </video>
            </div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">{spotlight.title}</p>
            <p className="text-sm text-white/70">What Pressure Teaches</p>
          </div>
        </div>
      </section>
    </main>
  );
}
