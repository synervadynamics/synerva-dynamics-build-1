"use client";

import VideoPlaceholder from "@/components/VideoPlaceholder";
import { motion } from "framer-motion";
import { copy } from "./_content";

export default function Labs() {
  const feature = copy.labs.feature;
  const featureVideo = feature?.video as { src?: string; label?: string; poster?: string } | undefined;
  const secondary = copy.labs.secondary ?? [];

  return (
    <section id="labs" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 space-y-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            {featureVideo?.src ? (
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-white/12 bg-white/[0.03] shadow-[0_18px_45px_rgba(0,0,0,0.35)]">
                <video
                  src={featureVideo.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={featureVideo.poster}
                  aria-label={featureVideo.label ?? `${feature?.title ?? "Labs"} visual`}
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/22 via-transparent to-transparent" aria-hidden="true" />
              </div>
            ) : (
              <VideoPlaceholder label={`${feature?.title ?? "Labs"} visual`} />
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
            className="space-y-5"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">{copy.labs.heading}</h2>
            <p className="text-mute max-w-prose">{copy.labs.desc}</p>
            {feature ? (
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-glass">
                <p className="text-sm uppercase tracking-[0.35em] text-white/60">Feature release</p>
                <h3 className="mt-3 text-xl font-semibold">{feature.title}</h3>
                {feature.hook ? <p className="mt-2 text-sm text-white/80">{feature.hook}</p> : null}
                {feature.blurb ? <p className="mt-3 text-sm text-mute leading-relaxed">{feature.blurb}</p> : null}
                <div className="mt-4 flex flex-wrap gap-3 text-sm font-medium">
                  {feature.ctaPrimary ? (
                    <a href="#contact" className="rounded-xl bg-[color:var(--accent)] px-4 py-2 text-[#001018] shadow-[0_8px_24px_rgba(0,170,255,0.25)] transition hover:scale-[1.02]">
                      {feature.ctaPrimary}
                    </a>
                  ) : null}
                  {feature.ctaSecondary ? (
                    <a href="/labs" className="rounded-xl border border-white/10 px-4 py-2 text-white/80 transition hover:bg-white/10">
                      {feature.ctaSecondary}
                    </a>
                  ) : null}
                </div>
              </div>
            ) : null}
          </motion.div>
        </div>

        {secondary.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2">
            {secondary.map((item, idx) => (
              <motion.div
                key={item.title ?? idx}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.04 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-glass"
              >
                {item.video ? (
                  <div className="relative mb-5 aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-[0_18px_45px_rgba(0,0,0,0.35)]">
                    <video
                      src={item.video.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      aria-label={item.video.label ?? `${item.title ?? "Lab"} visual`}
                      className="h-full w-full object-cover"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" aria-hidden="true" />
                  </div>
                ) : (
                  <VideoPlaceholder label={`${item.title ?? "Lab"} visual`} className="mb-5" ratio="aspect-[4/3]" />
                )}
                <h3 className="text-lg font-semibold">{item.title}</h3>
                {item.desc ? <p className="mt-2 text-sm text-mute leading-relaxed">{item.desc}</p> : null}
                {item.cta ? (
                  <div className="mt-4">
                    <a href={item.href ?? "#contact"} className="text-sm font-medium text-[color:var(--accent)] hover:underline">
                      {item.cta}
                    </a>
                  </div>
                ) : null}
              </motion.div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
