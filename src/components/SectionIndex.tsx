"use client";

import { useEffect, useMemo, useState } from "react";

type SectionItem = {
  id: string;
  label: string;
};

type Props = {
  sections: SectionItem[];
};

export const SectionIndex = ({ sections }: Props) => {
  const [active, setActive] = useState<string>(sections[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setActive(visible.target.id);
        }
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1]
      }
    );

    sections.forEach(section => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const items = useMemo(
    () =>
      sections.map(item => ({
        ...item,
        isActive: active === item.id
      })),
    [sections, active]
  );

  if (!items.length) return null;

  return (
    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/50">
      {items.map(item => (
        <a
          key={item.id}
          href={`#${item.id}`}
          data-cursor="accent"
          className={`flex flex-col items-center gap-2 transition ${
            item.isActive ? "text-white" : "hover:text-white/80"
          }`}
        >
          <span>{item.label}</span>
          <span
            className={`h-1 w-10 rounded-full bg-white/30 transition ${
              item.isActive ? "bg-white shadow-[0_0_18px_rgba(255,255,255,0.6)]" : ""
            }`}
          />
        </a>
      ))}
    </div>
  );
};
