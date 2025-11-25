"use client";

import { motion, useScroll } from "framer-motion";

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div className="pointer-events-none fixed inset-y-16 right-6 z-40 hidden lg:block" aria-hidden>
      <div className="relative h-full w-px overflow-hidden rounded-full bg-white/10">
        <motion.span
          style={{ scaleY: scrollYProgress }}
          className="absolute inset-0 origin-top bg-gradient-to-b from-cyan-400 via-white to-emerald-300"
        />
      </div>
    </div>
  );
};
