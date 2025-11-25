"use client";

import { motion, useReducedMotion } from "framer-motion";
import { copy } from "@/data/copy";

export const Roadmap = () => {
  const shouldReduceMotion = useReducedMotion();
  const phases = copy.roadmap.phases;

  return (
    <section id="roadmap" className="relative overflow-hidden px-6 pb-24 pt-14 sm:px-10 sm:pb-26 sm:pt-16 lg:px-16 lg:pb-28 lg:pt-20">
      <div className="relative mx-auto flex max-w-6xl flex-col gap-8">
        <div className="max-w-3xl space-y-4 text-white">
          <p className="text-xs uppercase tracking-[0.4em] text-white/65">Roadmap</p>
          <h2 className="text-3xl text-white sm:text-4xl lg:text-5xl">{copy.roadmap.heading}</h2>
          <p className="text-lg text-white/75">{copy.roadmap.intro}</p>
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">{copy.roadmap.footnote}</p>
        </div>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-white/12 sm:left-6" />
          <div className="space-y-8">
            {phases.map((phase, index) => (
              <motion.article
                key={phase.title}
                initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-10 sm:pl-12"
              >
                <span className="absolute left-0 top-2 flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-gradient-to-br from-[rgba(16,38,64,0.8)] via-[rgba(14,30,48,0.74)] to-[rgba(10,20,34,0.7)] text-xs font-mono text-white/78 shadow-[0_12px_32px_-14px_rgba(0,0,0,0.65)] sm:left-1">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="bubble-drift rounded-3xl border border-white/12 bg-gradient-to-br from-[rgba(14,30,50,0.74)] via-[rgba(16,34,58,0.7)] to-[rgba(10,22,36,0.68)] p-6 shadow-[0_44px_140px_-76px_rgba(0,0,0,0.82)] backdrop-blur-2xl">
                  <div className="flex flex-col gap-2 text-white">
                    <p className="text-sm uppercase tracking-[0.35em] text-white/60">{phase.timeframe}</p>
                    <h3 className="text-2xl">{phase.title}</h3>
                    <p className="text-base text-white/75">{phase.body}</p>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-white/70">
                    {phase.deliverables.map(item => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-white/70" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
        <div>
          <a
            href={copy.roadmap.cta.href}
            className="inline-flex rounded-full border border-white/50 px-6 py-3 text-sm uppercase tracking-wide text-white hover:bg-white/10"
          >
            {copy.roadmap.cta.label}
          </a>
        </div>
      </div>
    </section>
  );
};
