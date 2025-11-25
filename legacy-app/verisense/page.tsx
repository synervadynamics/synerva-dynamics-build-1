import Link from "next/link";
import FadeIn from "../../components/sections/FadeIn";
import VideoPlaceholder from "@/components/VideoPlaceholder";
import { copyVerisense } from "../../components/verisense/content";

export const metadata = {
  title: "Verisense — Syndicate Dynamics",
  description: copyVerisense.hero.subtitle
};

export default function VerisensePage() {
  const { hero, overview, architecture, applications, process, outcomes, faq, cta } = copyVerisense;

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24 space-y-24">
      <section className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-center">
        <FadeIn className="space-y-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[rgba(0,170,255,0.8)]">
              Verisense
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              {hero.title}
            </h1>
          </div>
          <p className="max-w-2xl text-base text-mute sm:text-lg">
            {hero.subtitle}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="rounded-xl bg-[color:var(--accent)] px-5 py-3 text-sm font-semibold text-[#001018] shadow-[0_8px_32px_rgba(0,170,255,0.25)] transition-transform hover:scale-[1.02] active:scale-[0.99]"
            >
              {hero.ctaPrimary}
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-semibold transition hover:bg-white/[0.1]"
            >
              {hero.ctaSecondary}
            </Link>
          </div>
        </FadeIn>
        <FadeIn>
          <VideoPlaceholder
            label="Verisense insight dashboard reel"
            ratio="aspect-[16/10]"
          />
        </FadeIn>
      </section>

      <section className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
        <FadeIn className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {overview.oneLiner}
          </h2>
          <ul className="space-y-3 text-sm text-mute sm:text-base">
            {overview.bullets.map(point => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[rgba(0,170,255,0.6)]" aria-hidden="true" />
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </FadeIn>
        <FadeIn className="grid gap-6 sm:grid-cols-2">
          <VideoPlaceholder label="Signal capture workflow" ratio="aspect-[4/5]" />
          <VideoPlaceholder label="Behavioural insight snapshot" ratio="aspect-[4/5]" />
        </FadeIn>
      </section>

      <section className="space-y-8">
        <FadeIn>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Architecture Layers
          </h2>
          <p className="mt-3 max-w-3xl text-sm text-mute sm:text-base">
            Verisense fuses video, audio, and language signals into actionable intelligence—grounded in ethics and consent.
          </p>
        </FadeIn>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {architecture.map(layer => (
            <FadeIn key={layer.title} className="h-full">
              <article className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-glass">
                <header>
                  <h3 className="text-lg font-semibold sm:text-xl">{layer.title}</h3>
                  <p className="mt-3 text-sm text-mute sm:text-base leading-relaxed">
                    {layer.text}
                  </p>
                </header>
                <div className="mt-6">
                  <VideoPlaceholder
                    label={`${layer.title} visual`}
                    ratio="aspect-[16/10]"
                    className="bg-white/[0.05]"
                  />
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <FadeIn>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Where Verisense Operates
          </h2>
          <p className="mt-3 max-w-3xl text-sm text-mute sm:text-base">
            Precision measurement unlocks better coaching, hiring, negotiation, and learning—without crossing ethical lines.
          </p>
        </FadeIn>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {applications.map(item => (
            <FadeIn key={item.title} className="h-full">
              <article className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-glass">
                <header>
                  <h3 className="text-lg font-semibold sm:text-xl">{item.title}</h3>
                  <p className="mt-3 text-sm text-mute sm:text-base leading-relaxed">
                    {item.text}
                  </p>
                </header>
                <div className="mt-6">
                  <VideoPlaceholder
                    label={`${item.title} preview`}
                    ratio="aspect-[16/10]"
                    className="bg-white/[0.05]"
                  />
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <FadeIn>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Operating Loop
          </h2>
          <p className="mt-3 max-w-3xl text-sm text-mute sm:text-base">
            Capture signals, decode them, visualize the insight, and apply it—each step governed by consent and clarity.
          </p>
        </FadeIn>
        <div className="space-y-5">
          {process.map((item, index) => (
            <FadeIn
              key={item.step}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-7"
            >
              <div className="flex flex-wrap items-start gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(0,170,255,0.4)] text-sm font-semibold text-[rgba(0,170,255,0.9)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold sm:text-xl">{item.step}</h3>
                  <p className="mt-3 text-sm text-mute sm:text-base leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <FadeIn>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Outcomes You Can Measure
          </h2>
        </FadeIn>
        <FadeIn>
          <ul className="grid gap-4 sm:grid-cols-3">
            {outcomes.bullets.map(item => (
              <li
                key={item}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 text-sm text-mute sm:text-base"
              >
                {item}
              </li>
            ))}
          </ul>
        </FadeIn>
      </section>

      <section id="faq" className="space-y-6">
        <FadeIn>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Frequently Asked Questions
          </h2>
        </FadeIn>
        <div className="space-y-4">
          {faq.map(item => (
            <FadeIn key={item.q}>
              <details className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <summary className="cursor-pointer text-base font-medium sm:text-lg">
                  {item.q}
                </summary>
                <p className="mt-3 text-sm text-mute sm:text-base leading-relaxed">
                  {item.a}
                </p>
              </details>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-[rgba(0,170,255,0.3)] bg-[rgba(0,170,255,0.1)] px-6 py-12 shadow-glass sm:px-10">
        <FadeIn className="space-y-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {cta.heading}
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="rounded-xl bg-[color:var(--accent)] px-5 py-3 text-sm font-semibold text-[#001018] shadow-[0_8px_32px_rgba(0,170,255,0.25)] transition-transform hover:scale-[1.02] active:scale-[0.99]"
            >
              {cta.primary}
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-white/10 bg-white/[0.08] px-5 py-3 text-sm font-semibold transition hover:bg-white/[0.14]"
            >
              {cta.secondary}
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
