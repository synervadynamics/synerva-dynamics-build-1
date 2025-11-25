"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion, useMotionTemplate, useReducedMotion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { copy } from "@/data/copy";

export const Systems = () => {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const glowX = useTransform(scrollYProgress, [0, 1], ["30%", "75%"]);
  const glow = useMotionTemplate`radial-gradient(circle at ${glowX} 30%, rgba(68,148,182,0.2), transparent 60%)`;
  const systems = copy.stack.items;
  // Match stack cards with their respective product pages so CTAs stay in sync with routing.
  const productLookup: Record<string, { slug: string; title: string; video?: { src: string; label?: string } } | undefined> = {
    Lucentra: { ...copy.products.lucentra, video: { src: "/visuals/systems/lucentra.mp4", label: copy.products.lucentra.title } },
    Verisense: { ...copy.products.verisense, video: { src: "/visuals/systems/verisense.mp4", label: copy.products.verisense.title } },
    "Synerva OS": {
      ...copy.products.synervaOs,
      video: { src: "/visuals/systems/synerva-os-homepage-video.mp4", label: copy.products.synervaOs.title }
    }
  };

  useEffect(() => {
    if (shouldReduceMotion) return;
    videoRefs.current.forEach(node => {
      if (!node) return;
      node.currentTime = 0;
      void node.play();
    });
  }, [shouldReduceMotion]);

  useEffect(() => {
    if (shouldReduceMotion) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // ScrollTrigger staggers the system cards once they enter view, giving the section a measured cinematic reveal.
      gsap.from(".system-card", {
        opacity: 0,
        y: 40,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%"
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, [shouldReduceMotion]);

  const handleEnter = (index: number) => {
    const node = videoRefs.current[index];
    if (node) {
      node.currentTime = 0;
      void node.play();
    }
  };

  const handleLeave = (index: number) => {
    const node = videoRefs.current[index];
    if (node) {
      node.pause();
      node.currentTime = 0;
    }
  };

  return (
    <section id="systems" ref={sectionRef} className="relative px-6 pb-16 pt-12 sm:px-10 sm:pb-20 sm:pt-12 lg:px-16 lg:pb-20 lg:pt-14">
      <div className="relative mx-auto max-w-6xl space-y-6 text-white">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.4em] text-white/65">Core Systems</p>
          <h2 className="text-3xl sm:text-4xl">{copy.stack.heading}</h2>
          <p className="text-lg text-white/75">{copy.stack.intro}</p>
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">{copy.stack.footnote}</p>
        </div>
        <div className="bubble-drift grid gap-6 rounded-[2.5rem] border border-white/12 bg-gradient-to-br from-[rgba(8,18,32,0.74)] via-[rgba(12,28,46,0.7)] to-[rgba(10,20,36,0.7)] p-6 shadow-[0_50px_160px_-84px_rgba(0,0,0,0.86)] backdrop-blur-2xl lg:grid-cols-3 lg:p-8">
          {systems.map((system, index) => {
            const detail = productLookup[system.title];
            const href = detail ? `/${detail.slug}` : "/contact";
            return (
              <motion.article
                key={system.title}
                tabIndex={0}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                onMouseEnter={() => handleEnter(index)}
              onMouseLeave={() => handleLeave(index)}
              onFocus={() => handleEnter(index)}
              onBlur={() => handleLeave(index)}
                className="system-card group flex flex-col gap-4 rounded-[2rem] border border-white/12 bg-gradient-to-br from-[rgba(12,30,50,0.74)] via-[rgba(14,36,58,0.7)] to-[rgba(10,24,40,0.68)] p-5 text-white shadow-[0_32px_130px_-76px_rgba(0,0,0,0.82)] backdrop-blur-xl transition hover:border-white/30 hover:bg-gradient-to-br hover:from-[rgba(18,44,74,0.78)] hover:via-[rgba(20,52,86,0.74)] hover:to-[rgba(12,30,52,0.72)]"
            >
                <div className="overflow-hidden rounded-2xl border border-white/5">
                  <video
                    ref={node => {
                      videoRefs.current[index] = node;
                    }}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="aspect-video w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    aria-label={system.video?.label ?? system.title}
                  >
                    <track kind="captions" label={system.video?.label ?? system.title} />
                    {system.video?.src ? <source src={system.video.src} type="video/mp4" /> : null}
                  </video>
                </div>
                <div className="space-y-3 text-sm text-white/80">
                  <p className="text-xs uppercase tracking-[0.35em] text-white/60">
                    {system.title} — {system.subtitle}
                  </p>
                  <p className="text-base text-white">{system.description}</p>
                  <p className="text-white/70">{system.proof}</p>
                  <ul className="space-y-2 text-white/75">
                    {system.highlights.map(item => (
                      <li key={item} className="flex items-center gap-3">
                        <span className="h-1 w-6 rounded-full bg-white/40" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  {detail && (
                    <Link
                      href={href}
                      className="inline-flex rounded-full border border-white/40 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white transition hover:bg-white/10"
                    >
                      Learn more
                    </Link>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
