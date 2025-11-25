"use client";

import { useEffect } from "react";

type Palette = {
  id: string;
  colors: [string, string, string, string];
};

type BestMatch = {
  ratio: number;
  colors: [string, string, string, string];
};

const palettes: Palette[] = [
  { id: "hero", colors: ["rgba(88,229,255,0.24)", "rgba(255,170,120,0.20)", "rgba(170,255,210,0.18)", "rgba(255,214,120,0.14)"] },
  { id: "narrative", colors: ["rgba(255,149,205,0.22)", "rgba(132,196,255,0.20)", "rgba(255,231,164,0.16)", "rgba(146,255,210,0.14)"] },
  { id: "deliver", colors: ["rgba(122,255,190,0.22)", "rgba(255,186,73,0.20)", "rgba(88,229,255,0.20)", "rgba(255,140,180,0.14)"] },
  { id: "systems", colors: ["rgba(180,200,255,0.22)", "rgba(255,140,200,0.20)", "rgba(140,255,200,0.18)", "rgba(255,210,130,0.14)"] },
  { id: "philosophy", colors: ["rgba(255,200,150,0.22)", "rgba(150,220,255,0.20)", "rgba(200,255,170,0.18)", "rgba(255,170,210,0.14)"] },
  { id: "cases", colors: ["rgba(140,255,220,0.22)", "rgba(255,210,140,0.20)", "rgba(200,180,255,0.18)", "rgba(255,140,190,0.14)"] },
  { id: "roadmap", colors: ["rgba(255,160,200,0.22)", "rgba(140,210,255,0.20)", "rgba(255,220,160,0.18)", "rgba(170,255,210,0.14)"] },
  { id: "labs", colors: ["rgba(170,255,210,0.22)", "rgba(255,170,200,0.20)", "rgba(170,200,255,0.18)", "rgba(255,210,150,0.14)"] },
  { id: "about", colors: ["rgba(140,210,255,0.22)", "rgba(255,200,170,0.20)", "rgba(160,255,210,0.18)", "rgba(255,170,220,0.14)"] },
  { id: "cta", colors: ["rgba(255,186,73,0.22)", "rgba(120,220,255,0.20)", "rgba(180,255,200,0.18)", "rgba(255,160,210,0.14)"] }
];

const setPalette = (colors?: [string, string, string, string]) => {
  if (!colors) return;
  const root = document.documentElement;
  root.style.setProperty("--g1", colors[0]);
  root.style.setProperty("--g2", colors[1]);
  root.style.setProperty("--g3", colors[2]);
  root.style.setProperty("--g4", colors[3]);
};

export const GradientOrchestrator = () => {
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const handleEntry = (entries: IntersectionObserverEntry[]) => {
      let best: BestMatch | null = null;

      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const palette = palettes.find(p => p.id === entry.target.id);
          if (palette?.colors) {
            if (!best || entry.intersectionRatio > best.ratio) {
              best = { ratio: entry.intersectionRatio, colors: palette.colors };
            }
          }
        }
      });

      if (best) setPalette((best as BestMatch).colors);
    };

    palettes.forEach(p => {
      const el = document.getElementById(p.id);
      if (!el) return;
      const observer = new IntersectionObserver(handleEntry, {
        root: null,
        threshold: [0.15, 0.35, 0.6, 0.85]
      });
      observer.observe(el);
      observers.push(observer);
    });

    const heroPalette = palettes.find(p => p.id === "hero");
    setPalette(heroPalette?.colors);

    return () => observers.forEach(o => o.disconnect());
  }, []);

  return null;
};
