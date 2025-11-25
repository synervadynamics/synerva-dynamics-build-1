"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { copy } from "@/data/copy";

const SECTIONS = [
  { id: "hero", label: "Hero" },
  { id: "deliver", label: "What I Deliver" },
  { id: "philosophy", label: "Philosophy" },
  { id: "cases", label: "Case Studies" },
  { id: "labs", label: "Labs" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" }
];

export default function Navbar() {
  const [active, setActive] = useState<string>("hero");
  const [systemsOpen, setSystemsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);
  const itemRefs = useMemo(() => new Map<string, HTMLAnchorElement>(), []);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-30% 0px -65% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const bar = barRef.current;
    const a = itemRefs.get(active);
    const wrap = containerRef.current;
    if (!bar || !a || !wrap) return;

    const { left: wl } = wrap.getBoundingClientRect();
    const r = a.getBoundingClientRect();
    const x = r.left - wl;
    bar.style.transform = `translateX(${Math.round(x)}px)`;
    bar.style.width = `${Math.round(r.width)}px`;
  }, [active, itemRefs]);

  useEffect(() => {
    const onResize = () => {
      const bar = barRef.current;
      const a = itemRefs.get(active);
      const wrap = containerRef.current;
      if (!bar || !a || !wrap) return;
      const { left: wl } = wrap.getBoundingClientRect();
      const r = a.getBoundingClientRect();
      bar.style.transform = `translateX(${Math.round(r.left - wl)}px)`;
      bar.style.width = `${Math.round(r.width)}px`;
    };
    const ro = new ResizeObserver(onResize);
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener("resize", onResize);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, [active, itemRefs]);

  const reduce =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 backdrop-blur supports-[backdrop-filter]:bg-black/30">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4">
        <Link href="#hero" className="flex items-center gap-3 py-4">
            <img src="/logo.png" alt="" className="h-7 w-7 rounded" />
            <span className="text-sm sm:text-base font-semibold tracking-tight">
              Syndicate Dynamics
            </span>
          </Link>

        <div className="hidden items-center gap-6 md:flex">
          <div className="relative">
            <div ref={containerRef} className="flex gap-6 text-sm">
              {SECTIONS.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  ref={(el) => {
                    if (el) itemRefs.set(s.id, el);
                  }}
                  className={`py-1 transition-colors ${
                    active === s.id ? "text-ink" : "text-mute hover:text-ink/90"
                  }`}
                >
                  {s.label}
                </a>
              ))}
            </div>
            <div
              ref={barRef}
              className="absolute -bottom-1 h-0.5 rounded-full bg-accent transition-[transform,width] duration-300"
              style={{ transform: "translateX(0px)", width: 0 }}
            />
          </div>
          <div
            className="relative"
            onMouseEnter={() => setSystemsOpen(true)}
            onMouseLeave={() => setSystemsOpen(false)}
          >
            <button className="rounded-full border border-white/20 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/80 transition hover:border-white/60">
              Systems
            </button>
            <div
              className={`absolute right-0 mt-3 w-64 rounded-2xl border border-white/10 bg-black/80 p-4 text-sm text-white shadow-2xl transition duration-200 ${
                systemsOpen ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">Explore</p>
              <ul className="mt-3 space-y-3">
                {Object.values(copy.products).map(product => (
                  <li key={product.slug}>
                    <Link href={`/${product.slug}`} className="block rounded-xl border border-white/5 bg-white/5 px-3 py-2 transition hover:border-white/40">
                      <p className="text-xs uppercase tracking-[0.35em] text-white/60">{product.title}</p>
                      <p className="text-[0.75rem] text-white/70">{product.tagline}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Link
            href="/contact"
            className="rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-black transition hover:bg-white/90"
          >
            Start plan
          </Link>
        </div>

        <button
          className="md:hidden"
          onClick={() => setMobileOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          <span className="block h-0.5 w-6 bg-white" />
          <span className="mt-2 block h-0.5 w-6 bg-white" />
          <span className="mt-2 block h-0.5 w-6 bg-white" />
        </button>
      </nav>
      {!reduce && <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />}

      <div
        className={`md:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        } border-t border-white/10 bg-black/80 px-6 py-6 transition-opacity`}
      >
        <div className="space-y-4 text-sm">
          {SECTIONS.map(section => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={() => setMobileOpen(false)}
              className="block rounded-full border border-white/10 px-4 py-2 text-white/80"
            >
              {section.label}
            </a>
          ))}
          <div className="space-y-2 rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-[0.35em] text-white/50">Systems</p>
            {Object.values(copy.products).map(product => (
              <Link
                key={product.slug}
                href={`/${product.slug}`}
                onClick={() => setMobileOpen(false)}
                className="block rounded-xl border border-white/10 bg-black/60 px-3 py-2 text-sm text-white/80"
              >
                {product.title}
              </Link>
            ))}
          </div>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="block rounded-full bg-white px-4 py-2 text-center text-xs font-semibold uppercase tracking-[0.35em] text-black"
          >
            Start plan
          </Link>
        </div>
      </div>
    </header>
  );
}
