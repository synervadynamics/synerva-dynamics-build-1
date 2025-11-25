import Link from "next/link";
import FadeIn from "../../components/sections/FadeIn";
import VideoPlaceholder from "@/components/VideoPlaceholder";
import { copyVoiceSystems } from "../../components/voice-systems/content";

export const metadata = {
  title: "Voice Systems — Syndicate Dynamics",
  description: copyVoiceSystems.hero.subtitle
};

export default function VoiceSystemsPage() {
  const { hero, overview, modules, process, outcomes, faq, cta } = copyVoiceSystems;

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24 space-y-24">
      <section className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-center">
        <FadeIn className="space-y-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[rgba(0,170,255,0.8)]">
              Voice Systems
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
              href="/cases"
              className="rounded-xl border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-semibold transition hover:bg-white/[0.1]"
            >
              {hero.ctaSecondary}
            </Link>
          </div>
        </FadeIn>
        <FadeIn>
          <VideoPlaceholder
            label="Voice system overview reel"
            ratio="aspect-[16/10]"
          />
        </FadeIn>
      </section>

      <section className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.8fr)]">
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
          <VideoPlaceholder label="Brand Voice Card mockup" ratio="aspect-[4/5]" />
          <VideoPlaceholder label="Messaging House storyboard" ratio="aspect-[4/5]" />
        </FadeIn>
      </section>

      <section className="space-y-8">
        <FadeIn>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Core Modules
          </h2>
          <p className="mt-3 max-w-3xl text-sm text-mute sm:text-base">
            Each component locks rhythm, lexicon, and proof so brand voice holds across every asset and channel.
          </p>
        </FadeIn>
        <div className="grid gap-6 md:grid-cols-2">
          {modules.map(module => (
            <FadeIn key={module.title} className="h-full">
              <article className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-glass">
                <header>
                  <h3 className="text-lg font-semibold sm:text-xl">{module.title}</h3>
                  <p className="mt-3 text-sm text-mute sm:text-base leading-relaxed">
                    {module.text}
                  </p>
                </header>
                <div className="mt-6">
                  <VideoPlaceholder
                    label={`${module.title} preview`}
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
            Implementation Process
          </h2>
          <p className="mt-3 max-w-3xl text-sm text-mute sm:text-base">
            Engagements move in disciplined stages—each unlocking a ready-to-ship asset and a measurable proof point.
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
              href="/cases"
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
