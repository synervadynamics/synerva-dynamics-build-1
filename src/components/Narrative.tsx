"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { copy } from "@/data/copy";

export const Narrative = () => {
  const shouldReduceMotion = useReducedMotion();
  const story = copy.story;
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (shouldReduceMotion) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".story-bullet", {
        opacity: 0,
        x: -20,
        stagger: 0.15,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%"
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, [shouldReduceMotion]);

  return (
    <section id="narrative" className="relative px-6 pb-14 pt-12 sm:px-10 sm:pb-20 sm:pt-14 lg:px-16 lg:pb-20 lg:pt-16">
      <div className="relative mx-auto flex max-w-6xl flex-col gap-8 text-white">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-5"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-white/62">{story.eyebrow}</p>
          <h2 className="text-3xl leading-tight sm:text-4xl lg:text-5xl">{story.heading}</h2>
          <p className="text-lg text-white/85">{story.statement}</p>
          <p className="text-base text-white/76">{story.proof}</p>
          <Link
            href={story.cta.href}
            className="inline-flex rounded-full border border-white/60 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-white/10"
          >
            {story.cta.label}
          </Link>
        </motion.div>
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="bubble-drift relative grid gap-10 rounded-[2.5rem] border border-white/12 bg-gradient-to-br from-[rgba(10,26,44,0.74)] via-[rgba(14,34,56,0.68)] to-[rgba(8,20,34,0.68)] p-6 shadow-[0_50px_140px_-72px_rgba(0,0,0,0.82)] backdrop-blur-2xl lg:grid-cols-[1.1fr_0.9fr] lg:p-10"
        >
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.4em] text-white/64">System guardrails</p>
            <ul className="space-y-4 text-sm text-white/78">
              {story.bullets.map(point => (
                <li key={point} className="story-bullet flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-6 flex-shrink-0 rounded-full bg-cyan-300/70" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.4em] text-white/64">Engagement stance</p>
            <p className="text-sm text-white/80">
              We orchestrate systems for clarity-first teams, pairing precision controls with story-led delivery so every release lands with intent.
            </p>
            <p className="text-sm text-white/74">
              Tight guardrails, measured automation, human oversight: the triad keeps momentum without drift.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Narrative;
