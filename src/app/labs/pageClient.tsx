"use client";

import Link from "next/link";
import Image from "next/image";
import { Labs } from "@/components/Labs";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { copy } from "@/data/copy";
import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AmbientVideo } from "@/components/AmbientVideo";

const labsPageCopy = copy.pages.labs;

export default function LabsPageClient() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="bg-[var(--bg)] text-white">
      <section ref={ref} className="relative isolate overflow-hidden px-6 pt-28 sm:px-10 lg:px-16">
        <AmbientVideo src="/video/labs/pulse-atlas.mp4" opacity={shouldReduceMotion ? 0.25 : 0.45} blur />
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-black/70 to-emerald-300/20" />
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto grid max-w-6xl gap-10 rounded-[3rem] border border-white/10 bg-black/50 p-8 backdrop-blur-3xl lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">{labsPageCopy.eyebrow}</p>
            <h1 className="text-4xl leading-tight sm:text-5xl lg:text-6xl">{labsPageCopy.heading}</h1>
            <p className="text-lg text-white/70">{labsPageCopy.description}</p>
            <div className="flex flex-wrap gap-4 text-sm text-white/60">
              {copy.labs.secondary.slice(0, 3).map(item => (
                <span key={item.title} className="rounded-full border border-white/10 px-3 py-1">
                  {item.title}
                </span>
              ))}
            </div>
            <Link
              href={labsPageCopy.cta.href}
              className="inline-flex w-fit rounded-full border border-white/60 px-6 py-3 text-sm uppercase tracking-wide hover:bg-white/10"
            >
              {labsPageCopy.cta.label}
            </Link>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96 }}
            animate={inView ? { opacity: 1, scale: 1 } : undefined}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel space-y-4 rounded-[2.5rem] border border-white/10 p-6"
          >
            <div className="overflow-hidden rounded-3xl border border-white/10">
              <Image
                src={copy.labs.feature.image.src}
                alt={copy.labs.feature.image.alt}
                width={1280}
                height={720}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">Featured Lab</p>
            <h2 className="text-3xl text-white">{copy.labs.feature.title}</h2>
            <p className="text-sm uppercase tracking-[0.3em] text-white/50">{copy.labs.feature.hook}</p>
            <p className="text-base text-white/80">{copy.labs.feature.blurb}</p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href={copy.labs.feature.ctaPrimaryHref}
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-black"
              >
                {copy.labs.feature.ctaPrimary}
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>
      <section className="relative overflow-hidden px-6 py-16 sm:px-10 lg:px-16">
        <AmbientVideo src="/video/labs/flux-courier.mp4" opacity={shouldReduceMotion ? 0.2 : 0.4} blur />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/90 via-black/70 to-black/80" />
        <div className="relative mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {copy.labs.secondary.map(item => (
            <div key={item.title} className="glass-panel flex flex-col gap-4 rounded-3xl border border-white/10 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">{item.title}</p>
              <p className="text-sm text-white/70">{item.desc}</p>
              <Link href={item.href} className="text-sm font-semibold text-white hover:text-cyan-300">
                {item.cta} →
              </Link>
            </div>
          ))}
        </div>
      </section>
      <Labs />
      <CTA />
      <Footer />
    </div>
  );
}
