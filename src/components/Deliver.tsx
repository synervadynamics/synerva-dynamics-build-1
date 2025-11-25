"use client";

import { motion, useMotionTemplate, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { copy } from "@/data/copy";
import { CascadingText } from "@/components/CascadingText";

type DeliverItem = {
  title: string;
  text: string;
  detail: string;
  panelText?: string;
  panelDetail?: string;
  panelPoints: readonly string[];
  video: { src: string; label: string };
};

export const Deliver = () => {
  const shouldReduceMotion = useReducedMotion();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const focusY = useTransform(scrollYProgress, [0, 1], ["20%", "70%"]);
  const gradient = useMotionTemplate`radial-gradient(circle at 25% ${focusY}, rgba(64,148,178,0.24), transparent 55%)`;
  const [activeIndex, setActiveIndex] = useState(0);
  const deliverItems = copy.deliver.items as readonly DeliverItem[];
  const activeItem: DeliverItem = deliverItems[activeIndex] ?? deliverItems[0];
  const cardsRef = useRef<HTMLDivElement>(null);

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 40 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] as const }
    })
  };

  const activeProgress = useMemo(() => ((activeIndex + 1) / deliverItems.length) * 100, [activeIndex, deliverItems.length]);

  useEffect(() => {
    if (shouldReduceMotion) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".deliver-card", {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 75%"
        }
      });
    }, cardsRef);
    return () => ctx.revert();
  }, [shouldReduceMotion]);

  const setRefs = (node: HTMLElement | null) => {
    ref(node);
    sectionRef.current = node;
  };

  return (
    <motion.section id="deliver" ref={setRefs} className="relative isolate px-6 pb-18 pt-12 sm:px-10 sm:pb-22 sm:pt-12 lg:px-16 lg:pb-22 lg:pt-14">
      <div className="relative mx-auto max-w-6xl space-y-8">
        <header className="max-w-4xl space-y-6 text-white">
          <h2 className="text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">{copy.deliver.heading}</h2>
          <p className="text-lg text-white/72">{copy.deliver.intro}</p>
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-white/50">
            <span>Scroll to explore</span>
            <div className="h-px flex-1 bg-white/10" />
            <span>{Math.round(activeProgress)}%</span>
          </div>
        </header>
        <div className="bubble-drift grid gap-10 rounded-[2.5rem] border border-white/12 bg-gradient-to-br from-[rgba(10,22,36,0.74)] via-[rgba(12,30,48,0.7)] to-[rgba(8,16,30,0.7)] p-6 shadow-[0_50px_160px_-80px_rgba(0,0,0,0.86)] backdrop-blur-2xl sm:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
          <div ref={cardsRef} className="grid gap-6 lg:grid-cols-2">
            {copy.deliver.items.map((item, index) => (
              <motion.article
                key={item.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                tabIndex={0}
                className={`deliver-card bubble-drift group flex min-h-[220px] flex-col gap-4 rounded-3xl border border-white/12 bg-gradient-to-br from-[rgba(12,30,50,0.74)] via-[rgba(14,36,58,0.7)] to-[rgba(10,22,38,0.68)] p-6 shadow-[0_30px_120px_-70px_rgba(0,0,0,0.82)] transition ${
                  activeIndex === index ? "border-white/30 bg-gradient-to-br from-[rgba(16,40,66,0.8)] via-[rgba(18,46,74,0.74)] to-[rgba(12,28,48,0.72)] shadow-[0_42px_130px_-70px_rgba(0,0,0,0.8)]" : ""
                }`}
              >
                <p className="text-xs uppercase tracking-[0.35em] text-white/60">{item.title}</p>
                <p className="text-base text-white/80">{item.text}</p>
                <p
                  className={`overflow-hidden text-sm text-white/60 transition-all duration-300 ${
                    activeIndex === index ? "max-h-24 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {item.detail}
                </p>
              </motion.article>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
            animate={
              inView
                ? {
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
                  }
                : undefined
            }
            className="relative h-full rounded-[2.5rem] border border-white/12 bg-gradient-to-br from-[#102032] via-[#0f1c2c] to-[#0b1422] p-6 shadow-[0_44px_150px_-82px_rgba(0,0,0,0.82)] backdrop-blur-2xl"
          >
            <div className="overflow-hidden rounded-3xl border border-white/5">
              <video
                key={activeItem.video.src}
                autoPlay
                loop
                muted
                playsInline
                className="aspect-video w-full object-cover"
                aria-label={activeItem.video.label}
              >
                <track kind="captions" label={activeItem.video.label} />
                <source src={activeItem.video.src} type="video/mp4" />
              </video>
            </div>
            <p className="mt-4 text-sm uppercase tracking-[0.3em] text-white/60">
              {activeItem.video.label}
            </p>
            <p className="mt-2 text-lg text-white">{activeItem.title}</p>
            <p className="text-sm text-white/70">{activeItem.panelText ?? activeItem.text}</p>
            <p className="text-sm text-white/60">{activeItem.panelDetail ?? activeItem.detail}</p>
            {activeItem.panelPoints?.length ? (
              <ul className="mt-4 space-y-2 text-sm text-white/65">
                {activeItem.panelPoints.map(point => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-4 flex-shrink-0 rounded-full bg-white/40" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </motion.div>
        </div>
        <CascadingText
          className="pt-6"
          items={copy.deliver.items.map(item => item.title)}
          speed={60}
        />
      </div>
    </motion.section>
  );
};
