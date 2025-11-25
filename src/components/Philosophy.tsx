"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Easing } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { copy } from "@/data/copy";

export const Philosophy = () => {
  const shouldReduceMotion = useReducedMotion();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  // Fix: explicitly type the easing tuple so TS does not infer `number[]`
  const easeCurve = [0.16, 1, 0.3, 1] as Easing;

  const variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: easeCurve, staggerChildren: 0.15 }
    }
  };

  return (
    <section
      id="philosophy"
      ref={ref}
      className="relative px-6 pb-20 pt-14 sm:px-10 sm:pb-22 sm:pt-16 lg:px-16 lg:pb-24 lg:pt-18"
    >
      <motion.div
        variants={variants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="bubble-drift relative overflow-hidden rounded-[2.5rem] border border-white/12 bg-gradient-to-br from-[rgba(14,30,52,0.76)] via-[rgba(14,26,42,0.7)] to-[rgba(10,20,34,0.7)] p-8 text-white shadow-[0_52px_170px_-86px_rgba(0,0,0,0.86)] backdrop-blur-2xl sm:p-12 lg:p-14"
      >
        <motion.div variants={variants} className="relative space-y-6 text-white">
          <blockquote className="text-3xl leading-tight sm:text-4xl lg:text-5xl">
            “{copy.philosophy.quote}”
          </blockquote>
          <p className="max-w-3xl text-lg text-white/80">{copy.philosophy.p1}</p>
          <p className="max-w-3xl text-lg text-white/80">{copy.philosophy.p2}</p>
        </motion.div>
      </motion.div>
    </section>
  );
};
