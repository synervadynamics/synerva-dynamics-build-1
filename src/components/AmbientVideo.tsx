"use client";

import type { CSSProperties } from "react";

type Props = {
  src: string;
  className?: string;
  opacity?: number;
  blur?: boolean;
  bleed?: number;
  style?: CSSProperties;
};

const hueFromString = (input: string) => {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = (hash << 5) - hash + input.charCodeAt(i);
    hash |= 0;
  }
  return (Math.abs(hash) % 360) / 360;
};

export const AmbientVideo = ({ src, className = "", opacity = 0.65, blur = false, bleed = 15, style }: Props) => {
  const baseHue = hueFromString(src);
  const c1 = `hsla(${Math.round(baseHue * 360)}, 85%, 62%, ${opacity * 0.6})`;
  const c2 = `hsla(${Math.round(((baseHue + 0.2) % 1) * 360)}, 80%, 55%, ${opacity * 0.5})`;
  const c3 = `hsla(${Math.round(((baseHue + 0.4) % 1) * 360)}, 75%, 65%, ${opacity * 0.4})`;

  const gradientStyle: CSSProperties = {
    "--ambient-c1": c1,
    "--ambient-c2": c2,
    "--ambient-c3": c3,
    top: `-${bleed}%`,
    left: `-${bleed}%`,
    right: `-${bleed}%`,
    bottom: `-${bleed}%`,
    filter: blur ? "blur(12px)" : undefined,
    transform: blur ? "scale(1.05)" : undefined,
    ...style
  } as CSSProperties;

  return (
    <div
      aria-hidden
      className={`ambient-gradient pointer-events-none absolute -z-10 ${className}`}
      style={gradientStyle}
    />
  );
};
