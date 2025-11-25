"use client";

import VideoPlaceholder from "@/components/VideoPlaceholder";
import { motion } from "framer-motion";
import Link from "next/link";
import { copy } from "./_content";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-5"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">{copy.about.heading}</h2>
          <p className="text-mute">{copy.about.p1}</p>
          <p className="text-mute">{copy.about.p2}</p>
          {copy.about.href && copy.about.cta ? (
            <Link
              href={{ pathname: copy.about.href }}
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:text-accent/80"
            >
              {copy.about.cta}
              <span aria-hidden="true">&rarr;</span>
            </Link>
          ) : null}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
          className="grid gap-4 sm:grid-cols-2"
        >
          <VideoPlaceholder label="Studio walkthrough" className="sm:col-span-2" />
          <VideoPlaceholder label="Prototype build" ratio="aspect-square" />
          <VideoPlaceholder label="System in motion" ratio="aspect-square" />
        </motion.div>
      </div>
    </section>
  );
}
