"use client";

import VideoPlaceholder from "@/components/VideoPlaceholder";
import { motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";
import { copy } from "./_content";

export default function Deliver() {
  return (
    <section id="deliver" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            {copy.deliver.heading}
          </h2>
          <p className="text-mute max-w-prose">
            {copy.deliver.intro}
          </p>
        </div>

        <div className="space-y-8">
          {copy.deliver.items.map((it, idx) => (
            <motion.article
              key={it.title}
              initial={{ opacity: 0, y: 16, rotateX: -2 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: idx * 0.05 }}
              className="group grid gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-glass will-change-transform md:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] md:items-center lg:gap-10 lg:p-8"
              style={{ perspective: "900px" } as any}
            >
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/15">
                    <Check className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
                      {it.href ? (
                        <Link href={{ pathname: it.href }} className="no-underline">
                          {it.title}
                        </Link>
                      ) : (
                        it.title
                      )}
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-mute leading-relaxed sm:text-base">
                  {it.text}
                </p>
                {it.href && it.cta ? (
                  <Link
                    href={{ pathname: it.href }}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:text-accent/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
                  >
                    {it.cta}
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                ) : null}
              </div>
              {it.video ? (
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-[0_18px_45px_rgba(0,0,0,0.35)]">
                  <video
                    src={it.video.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    aria-label={it.video.label ?? `${it.title} visual`}
                    className="h-full w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" aria-hidden="true" />
                </div>
              ) : (
                <VideoPlaceholder label={`${it.title} visual`} />
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
