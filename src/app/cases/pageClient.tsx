"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { copy } from "@/data/copy";
import { AmbientVideo } from "@/components/AmbientVideo";

const casesPageCopy = copy.pages.cases;

export default function CasesPageClient() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="bg-[var(--bg)] text-white">
      <section ref={ref} className="relative overflow-hidden px-6 pt-28 sm:px-10 lg:px-16">
        <AmbientVideo src="/visuals/cases/polar.mp4" opacity={shouldReduceMotion ? 0.25 : 0.4} blur />
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/80" />
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto flex max-w-5xl flex-col gap-6"
        >
          <div className="flex justify-start">
            <Link href="/" className="text-sm uppercase tracking-[0.3em] text-white/70 transition hover:text-white">
              ← Home
            </Link>
          </div>
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">{casesPageCopy.eyebrow}</p>
          <h1 className="text-4xl leading-tight sm:text-5xl lg:text-6xl">{casesPageCopy.heading}</h1>
          <p className="text-lg text-white/70">{casesPageCopy.description}</p>
          <p className="text-sm text-white/60">{casesPageCopy.note}</p>
          <Link
            href={casesPageCopy.cta.href}
            className="w-fit rounded-full border border-white/50 px-6 py-3 text-sm uppercase tracking-wide hover:bg-white/10"
          >
            {casesPageCopy.cta.label}
          </Link>
        </motion.div>
      </section>
      <CTA />
      <Footer />
    </div>
  );
}
