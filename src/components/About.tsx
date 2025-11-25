"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { copy } from "@/data/copy";

const renderWithBreaks = (text: string) =>
  text.split("\n").map((line, index, arr) => (
    <span key={`${index}-${line}`}>
      {line}
      {index < arr.length - 1 && <br />}
    </span>
  ));

export const About = () => {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const tilt = useTransform(scrollYProgress, [0, 1], ["-6deg", "4deg"]);

  return (
    <section id="about" ref={sectionRef} className="relative overflow-hidden px-6 pb-24 pt-14 sm:px-10 sm:pb-24 sm:pt-16 lg:px-16 lg:pb-28 lg:pt-18">
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          style={{ rotateX: shouldReduceMotion ? undefined : tilt }}
          className="bubble-drift grid gap-8 rounded-[3rem] border border-white/12 bg-gradient-to-br from-[rgba(10,22,36,0.74)] via-[rgba(14,30,48,0.7)] to-[rgba(8,16,32,0.7)] p-10 text-white shadow-[0_54px_180px_-92px_rgba(0,0,0,0.86)] backdrop-blur-2xl sm:p-16 lg:grid-cols-2"
        >
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">About</p>
            <h2 className="text-3xl text-white sm:text-4xl">{copy.about.heading}</h2>
            <p className="text-lg text-white/80">{copy.about.p1}</p>
          </div>
          <div className="space-y-4 text-white/80">
            <p className="text-lg">{renderWithBreaks(copy.about.p2)}</p>
            <ul className="space-y-2 text-sm uppercase tracking-[0.3em] text-white/60">
              <li>CASL + en-CA native compliance</li>
              <li>Transparent acceptance criteria</li>
              <li>Systems engineered around measurable lift</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
