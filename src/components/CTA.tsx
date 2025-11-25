"use client";

import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";
import { copy } from "@/data/copy";

export const CTA = () => {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLElement | null>(null);
  const { ref: inViewRef, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const setRefs = (node: HTMLElement | null) => {
    ref.current = node;
    inViewRef(node);
  };

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const parallax = useTransform(scrollYProgress, [0, 1], ["-6%", "8%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.35, 0.85]);

  return (
    <section ref={setRefs} id="cta" className="relative overflow-hidden px-6 pb-24 pt-14 sm:px-10 sm:pb-26 sm:pt-16 lg:px-16 lg:pb-26 lg:pt-18">
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
        animate={inView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden p-0"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/14 to-white/10"
          style={{ opacity: shouldReduceMotion ? 0.6 : overlayOpacity }}
        />
        <div className="bubble-drift relative grid gap-6 rounded-[2.5rem] border border-white/12 bg-gradient-to-br from-[rgba(12,26,44,0.74)] via-[rgba(14,32,52,0.7)] to-[rgba(8,16,32,0.7)] p-10 text-white shadow-[0_58px_180px_-86px_rgba(0,0,0,0.86)] backdrop-blur-2xl sm:p-16 lg:grid-cols-2 lg:items-center">
          <motion.div style={{ y: shouldReduceMotion ? undefined : parallax }} className="space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">{copy.cta.label}</p>
            <h2 className="text-3xl leading-tight sm:text-4xl lg:text-5xl">{copy.cta.title}</h2>
            <p className="text-lg text-white/80">{copy.cta.body}</p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={copy.cta.primary.href}
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-black"
              >
                {copy.cta.primary.label}
              </Link>
              <Link
                href={copy.cta.secondary.href}
                className="rounded-full border border-white/50 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-white/10"
              >
                {copy.cta.secondary.label}
              </Link>
            </div>
          </motion.div>
          <div className="bubble-drift rounded-3xl border border-white/12 bg-gradient-to-br from-[rgba(16,36,54,0.76)] via-[rgba(16,30,44,0.72)] to-[rgba(10,20,34,0.68)] p-6 text-sm text-white/80 backdrop-blur-xl">
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-white/50">{copy.cta.infoTitle}</p>
            <ul className="mt-4 space-y-3">
              {copy.cta.bullets.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
