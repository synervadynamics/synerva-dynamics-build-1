"use client";

import Link from "next/link";
import { motion, useMotionTemplate, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { copy } from "@/data/copy";
import { useEffect, useMemo, useRef, useState } from "react";
import { CascadingText } from "@/components/CascadingText";
import { SectionIndex } from "@/components/SectionIndex";
import type { Easing } from "framer-motion";

const sectionMap = [
  { id: "systems", label: "Systems" },
  { id: "deliver", label: "Deliverables" },
  { id: "labs", label: "Labs" }
];

export const Hero = () => {
  const shouldReduceMotion = useReducedMotion();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });
  const sectionRef = useRef<HTMLElement | null>(null);
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const sheen = useTransform(scrollYProgress, [0, 1], ["30%", "80%"]);
  const focusY = useTransform(scrollYProgress, [0, 1], ["18%", "72%"]);
  const blurOpacity = useTransform(scrollYProgress, [0, 1], [0.22, 0.68]);
  const sheenBackground = useMotionTemplate`radial-gradient(circle at ${sheen} 20%, rgba(70,156,192,0.32), transparent 45%)`;

  const easeCurve = [0.16, 1, 0.3, 1] as Easing;

  const container = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: easeCurve, staggerChildren: 0.1 }
    }
  };

  const child = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: easeCurve } }
  };

  const setRefs = (node: HTMLElement | null) => {
    ref(node);
    sectionRef.current = node;
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="hero"
      ref={setRefs}
      className="relative isolate min-h-screen px-6 pb-8 pt-14 sm:px-10 sm:pb-10 sm:pt-16 lg:px-16 lg:pb-10 lg:pt-20"
      suppressHydrationWarning
    >
      <div className="hero-grid" />
      <div className="hero-gradient" />
      {mounted ? (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          suppressHydrationWarning
          style={{
            background: shouldReduceMotion ? undefined : sheenBackground
          }}
        />
      ) : null}
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10">
        <header className="flex flex-col gap-4 pb-6 lg:flex-row lg:items-center lg:justify-between">
          <Link href="/" className="font-mono text-xs uppercase tracking-[0.5em] text-white/70 hover:text-white">
            Synerva Dynamics
          </Link>
          <nav className="flex flex-wrap items-center gap-4 text-sm text-white/70">
            {copy.global.nav.map(item => (
              <Link key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
          <SectionIndex sections={sectionMap} />
        </header>
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col gap-10"
        >
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
            <div className="flex flex-col gap-6 text-balance">
              <motion.p variants={child} className="text-xs uppercase tracking-[0.5em] text-white/60">
                {copy.hero.eyebrow}
              </motion.p>
              <motion.h1
                variants={child}
                className="text-4xl font-light leading-[1.05] text-white sm:text-5xl lg:text-6xl xl:text-7xl"
              >
                {copy.hero.headline.map((line, index) => (
                  <span key={line} className="reveal-line">
                    <motion.span
                      variants={child}
                      transition={{ delay: index * 0.12 }}
                      className="block"
                    >
                      {line}
                    </motion.span>
                  </span>
                ))}
              </motion.h1>
              <motion.p variants={child} className="max-w-3xl text-lg text-white/80 sm:text-xl">
                {copy.hero.subhead}
              </motion.p>
              <motion.div variants={child} className="flex flex-wrap gap-4">
                <Link
                  data-cursor="accent"
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-black transition hover:bg-white/90"
                  href={copy.hero.primaryCta.href}
                >
                  {copy.hero.primaryCta.label}
                </Link>
                <Link
                  data-cursor="accent"
                  className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-white/10"
                  href={copy.hero.secondaryCta.href}
                >
                  {copy.hero.secondaryCta.label}
                </Link>
              </motion.div>
            </div>

            <motion.div variants={child} className="space-y-4 rounded-[2.5rem] border border-white/10 bg-black/0 p-0">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#0d1c2e] via-[#0f2438] to-[#0a1624] p-4 shadow-[0_42px_140px_-70px_rgba(0,0,0,0.8)] backdrop-blur-2xl">
                <div className="overflow-hidden rounded-2xl border border-white/8">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="aspect-[4/3] w-full object-cover"
                    aria-label={copy.hero.spotlight.video.alt}
                  >
                    <track kind="captions" label={copy.hero.spotlight.video.alt} />
                    <source src={copy.hero.spotlight.video.src} type="video/mp4" />
                  </video>
                </div>
              </div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/65">
                {copy.hero.spotlight.label}
              </p>
              <p className="text-sm text-white/78">{copy.hero.spotlight.description}</p>
            </motion.div>
          </div>

          <div className="grid gap-6 text-sm text-white/70 sm:grid-cols-2 md:grid-cols-3">
            {copy.hero.proofs.map(({ label, value }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : undefined}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6, ease: easeCurve }}
                className="rounded-2xl border border-white/12 bg-gradient-to-br from-[#0c1a2b] via-[#0f2234] to-[#0a1826] px-6 py-4 text-center shadow-[0_24px_80px_-50px_rgba(0,0,0,0.78)] transition hover:border-white/35 backdrop-blur-2xl"
              >
                <p className="text-[0.6rem] uppercase tracking-[0.35em] text-white/60">{label}</p>
                <p className="mt-2 font-mono text-[0.75rem] text-white whitespace-nowrap sm:text-sm">{value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <CascadingText className="mt-8 pt-6" items={["Brand orchestration", "Web systems", "Content labs", "Automation loops", "Analytics clarity"]} speed={70} />
      </div>
    </section>
  );
};
