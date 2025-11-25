"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { copy } from "./_content";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:py-32 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-8"
        >
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            {copy.hero.title}
          </h1>
          <p className="text-mute max-w-prose">
            {copy.hero.subtitle}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="#contact"
              className="px-5 py-3 rounded-xl text-sm font-semibold transition-transform hover:scale-[1.02] active:scale-[0.99] bg-[color:var(--accent)] text-[#001018] shadow-[0_8px_32px_rgba(0,170,255,0.25)]"
            >
              {copy.cta.contact}
            </Link>
            <Link
              href="#cases"
              className="px-5 py-3 rounded-xl text-sm font-semibold bg-white/[0.06] border border-white/10 hover:bg-white/[0.1] transition"
            >
              {copy.cta.work}
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
          className="relative w-full aspect-[16/9] min-h-[280px] sm:min-h-[340px] rounded-3xl border border-white/10 bg-white/[0.03] shadow-[0_10px_40px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.05)] overflow-hidden"
        >
          <div className="absolute inset-0 rounded-3xl overflow-hidden">
            <video
              src="/visuals/hero/hero-vid-1.mp4"
              poster="/visuals/hero/hero_main_render.webp"
              autoPlay
              loop
              muted
              playsInline
              aria-hidden="true"
              className="h-full w-full object-cover opacity-90"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
