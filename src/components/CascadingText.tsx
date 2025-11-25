"use client";

import type { CSSProperties } from "react";

type Props = {
  items: string[];
  direction?: "left" | "right";
  speed?: number;
  className?: string;
};

export const CascadingText = ({ items, direction = "left", speed = 60, className = "" }: Props) => {
  const dataset = [...items, ...items];
  return (
    <div className={`cascade-outer ${className}`}>
      <div
        className={`cascade-track ${direction === "left" ? "cascade-left" : "cascade-right"}`}
        style={{ "--speed": `${speed}s` } as CSSProperties}
      >
        {dataset.map((item, index) => (
          <span key={`${item}-${index}`} className="cascade-token">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};
