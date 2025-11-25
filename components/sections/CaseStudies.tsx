"use client";

import VideoPlaceholder from "@/components/VideoPlaceholder";
import Image from "next/image";
import * as React from "react";

type Img = string | { src?: string; alt?: string; width?: number; height?: number; priority?: boolean };

type Item = {
  id?: string | number;
  heading?: string;
  subheading?: string;
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
  image?: Img;
  mediaLabel?: string;
};

type Props = {
  items?: Item[];
  title?: string;
  intro?: string;
};

const FALLBACK_ITEMS: Item[] = [
  {
    id: "rockstar",
    heading: "The Rockstar Server Playbook",
    subheading: "From bar chaos to five-star flow",
    body: "Systems, scripts, and service psychology that turn slammed nights into repeat business. A labs project proving how ops thinking and brand voice can make tips and retention climb together.",
    ctaLabel: "View project",
    ctaHref: "#labs",
    mediaLabel: "Rockstar Server Playbook"
  }
];

function normalizeItems(items: unknown): Item[] {
  if (!Array.isArray(items)) return FALLBACK_ITEMS;

  const cleaned = items
    .filter(Boolean)
    .map((raw, idx) => {
      const obj = (typeof raw === "object" && raw) ? (raw as Record<string, unknown>) : {};
      const heading = typeof obj.heading === "string" && obj.heading.trim().length > 0 ? obj.heading.trim() : "Untitled case study";
      const subheading = typeof obj.subheading === "string" ? obj.subheading : "";
      const body = typeof obj.body === "string" ? obj.body : "";
      const ctaLabel = typeof obj.ctaLabel === "string" && obj.ctaLabel.trim().length > 0 ? obj.ctaLabel.trim() : undefined;
      const ctaHref = typeof obj.ctaHref === "string" && obj.ctaHref.trim().length > 0 ? obj.ctaHref.trim() : "#";
      const image: Img | undefined =
        typeof obj.image === "string" || typeof obj.image === "object" ? (obj.image as Img) : undefined;
      const mediaLabel = typeof obj.mediaLabel === "string" && obj.mediaLabel.trim().length > 0 ? obj.mediaLabel : undefined;
      const id = String(obj.id ?? heading ?? idx);

      return { id, heading, subheading, body, ctaLabel, ctaHref, image, mediaLabel };
    });

  return cleaned.length > 0 ? cleaned : FALLBACK_ITEMS;
}

export default function CaseStudies(props: Props) {
  const title = typeof props.title === "string" ? props.title : "Selected work";
  const intro =
    typeof props.intro === "string"
      ? props.intro
      : "Three snapshots under real constraints: clearer story, faster path to value, measurable lift.";

  const items = React.useMemo(() => normalizeItems(props.items), [props.items]);

  return (
    <section id="cases" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <header className="mb-12 max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
          {intro ? <p className="mt-3 text-base/7 text-neutral-400">{intro}</p> : null}
        </header>

        <div className="space-y-8">
          {items.map((item, idx) => {
            const key = String(item.id ?? idx);
            const heading = item.heading ?? "Untitled case study";
            const subheading = item.subheading ?? "";
            const body = item.body ?? "";
            const ctaLabel = item.ctaLabel ?? undefined;
            const ctaHref = item.ctaHref ?? "#";
            const img = item.image;
            const mediaLabel = item.mediaLabel ?? heading;

            return (
              <article
                key={key}
                className="grid gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-glass md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:items-center lg:gap-10 lg:p-8"
              >
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight">{heading}</h3>
                    {subheading ? <p className="mt-2 text-sm uppercase tracking-[0.35em] text-white/60">{subheading}</p> : null}
                  </div>
                  {body ? <p className="text-sm text-neutral-300 leading-relaxed sm:text-base">{body}</p> : null}
                  {ctaLabel ? (
                    <div>
                      <a
                        href={ctaHref}
                        className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
                      >
                        {ctaLabel}
                        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" focusable="false">
                          <path fill="currentColor" d="M13.172 12 8.222 7.05l1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
                        </svg>
                      </a>
                    </div>
                  ) : null}
                </div>

                <div>
                  {renderMedia(img, mediaLabel)}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function renderMedia(img: Img | undefined, label: string) {
  if (!img) {
    return <VideoPlaceholder label={`${label} visual`} />;
  }

  if (typeof img === "string") {
    return (
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
        <Image src={img} alt={label} width={640} height={360} className="h-full w-full object-cover" />
      </div>
    );
  }

  const src = img.src ?? "";
  const alt = img.alt ?? label;
  const width = img.width ?? 640;
  const height = img.height ?? 360;
  const priority = !!img.priority;

  if (!src) {
    return <VideoPlaceholder label={`${label} visual`} />;
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
      <Image src={src} alt={alt} width={width} height={height} priority={priority} className="h-full w-full object-cover" />
    </div>
  );
}
