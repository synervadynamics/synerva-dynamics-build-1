import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines Tailwind and custom class names safely.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Small helper for clamping a value between min and max.
 */
export function clamp(v: number, min: number, max: number) {
  return Math.min(Math.max(v, min), max);
}
