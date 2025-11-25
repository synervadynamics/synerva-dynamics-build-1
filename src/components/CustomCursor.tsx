"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import type { CSSProperties } from "react";

type CursorVariant = {
  scale: number;
  opacity: number;
  mixBlendMode: CSSProperties["mixBlendMode"];
  borderColor: string;
  backgroundColor: string;
  halo: string;
  core: string;
};

const variants: Record<"default" | "link" | "accent", CursorVariant> = {
  default: {
    scale: 1,
    opacity: 0.68,
    mixBlendMode: "screen",
    borderColor: "rgba(255,255,255,0.35)",
    backgroundColor: "rgba(255,255,255,0.06)",
    halo: "rgba(255,255,255,0.08)",
    core: "rgba(255,255,255,0.25)"
  },
  link: {
    scale: 1.4,
    opacity: 0.88,
    mixBlendMode: "screen",
    borderColor: "rgba(255,255,255,0.75)",
    backgroundColor: "rgba(255,255,255,0.12)",
    halo: "rgba(132,196,255,0.16)",
    core: "rgba(255,255,255,0.35)"
  },
  accent: {
    scale: 1.8,
    opacity: 0.92,
    mixBlendMode: "screen",
    borderColor: "rgba(88,229,255,0.9)",
    backgroundColor: "rgba(88,229,255,0.18)",
    halo: "rgba(88,229,255,0.18)",
    core: "rgba(255,255,255,0.48)"
  }
};

type VariantKey = keyof typeof variants;

export const CustomCursor = () => {
  const [variant, setVariant] = useState<VariantKey>("default");
  const [speedScale, setSpeedScale] = useState(1);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const smoothX = useSpring(x, { stiffness: 320, damping: 40, mass: 0.5 });
  const smoothY = useSpring(y, { stiffness: 320, damping: 40, mass: 0.5 });
  const haloSize = useSpring(speedScale, { stiffness: 220, damping: 30, mass: 0.4 });

  useEffect(() => {
    let lastX = 0;
    let lastY = 0;
    let lastTime = performance.now();

    const move = (event: MouseEvent) => {
      x.set(event.clientX - 16);
      y.set(event.clientY - 16);
      const now = performance.now();
      const dx = event.clientX - lastX;
      const dy = event.clientY - lastY;
      const dt = Math.max(now - lastTime, 16);
      const speed = Math.sqrt(dx * dx + dy * dy) / (dt / 1000);
      const nextScale = Math.min(1.15, Math.max(0.95, 1 + speed * 0.04));
      setSpeedScale(nextScale);
      lastX = event.clientX;
      lastY = event.clientY;
      lastTime = now;
      const target = (event.target as HTMLElement | null)?.closest<HTMLElement>("[data-cursor], a, button");
      if (target) {
        const attr = target.getAttribute("data-cursor");
        if (attr === "accent") {
          setVariant("accent");
        } else {
          setVariant("link");
        }
      } else {
        setVariant("default");
      }
    };

    const leave = () => setVariant("default");

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, [x, y]);

  const style = useMemo(
    () => ({
      translateX: smoothX,
      translateY: smoothY,
      borderColor: variants[variant].borderColor,
      backgroundColor: variants[variant].backgroundColor,
      mixBlendMode: variants[variant].mixBlendMode
    }),
    [smoothX, smoothY, variant]
  );

  return (
    <motion.div
      className="pointer-events-none fixed z-[9999] hidden md:block"
      style={{ translateX: style.translateX, translateY: style.translateY }}
      animate={{ opacity: variants[variant].opacity }}
      transition={{ type: "spring", stiffness: 260, damping: 28 }}
    >
      <motion.div
        className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          scale: haloSize,
          background: `radial-gradient(circle, ${variants[variant].halo} 0%, transparent 70%)`,
          filter: "blur(16px)",
          mixBlendMode: "screen",
          opacity: 0.8
        }}
        aria-hidden
      />
      <motion.div
        className="relative h-8 w-8 rounded-full border backdrop-blur-[4px]"
        style={{
          ...style,
          boxShadow: `0 0 24px rgba(255,255,255,${0.08 * speedScale})`,
          filter: `drop-shadow(0 0 20px rgba(255,255,255,${0.05 * speedScale}))`
        }}
        animate={{
          scale: variants[variant].scale * speedScale,
          opacity: variants[variant].opacity
        }}
        transition={{ type: "spring", stiffness: 240, damping: 26 }}
      >
        <span
          className="absolute inset-[28%] rounded-full"
          style={{
            background: `radial-gradient(circle at 40% 40%, ${variants[variant].core} 0%, rgba(255,255,255,0.08) 70%, transparent 100%)`,
            mixBlendMode: "screen"
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default CustomCursor;
