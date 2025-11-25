"use client";

import { useEffect, useRef } from "react";

type Props = {
  className?: string;
};

/**
 * Motion-safe radial grid background with ultra-subtle parallax.
 * Adjusts CSS var --grid-y for background-position.
 */
export default function GridBackground({ className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) return;

    const onScroll = () => {
      if (raf.current != null) return;
      raf.current = requestAnimationFrame(() => {
        raf.current = null;
        const y = Math.max(-24, Math.min(24, window.scrollY * 0.03));
        el.style.setProperty("--grid-y", `${y}px`);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return <div ref={ref} className={className ?? ""} aria-hidden="true" />;
}
