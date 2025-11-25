"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { copy } from "@/data/copy";
import { AmbientVideo } from "@/components/AmbientVideo";

export const ContactRibbon = () => {
  const shouldReduceMotion = useReducedMotion();
  return (
    <section id="contact" className="relative overflow-hidden px-6 pb-20 pt-14 sm:px-10 sm:pb-22 sm:pt-16 lg:px-16 lg:pb-24 lg:pt-18">
      <AmbientVideo src="contact-ribbon" opacity={shouldReduceMotion ? 0.2 : 0.38} blur />
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col gap-6 rounded-[2.5rem] border border-white/12 bg-gradient-to-br from-[#0d1b2c] via-[#0f2236] to-[#0a1320] px-8 py-10 text-white shadow-[0_52px_160px_-82px_rgba(0,0,0,0.84)] backdrop-blur-2xl sm:flex-row sm:items-center sm:justify-between"
      >
        <p className="text-2xl sm:text-3xl">{copy.contact.heading}</p>
        <Link
          href="/contact"
          className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold uppercase tracking-wide text-black"
        >
          Start the plan
        </Link>
      </motion.div>
    </section>
  );
};
