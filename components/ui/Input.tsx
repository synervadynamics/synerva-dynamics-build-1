import { cn } from "../../lib/utils";
import { InputHTMLAttributes, forwardRef } from "react";

/**
 * Minimal, motion-safe input with accent focus state.
 */
const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "w-full rounded-xl bg-white/[0.04] border border-white/10",
        "px-4 py-3 text-sm text-ink placeholder:text-mute/70",
        "outline-none transition-colors",
        "focus:border-accent/50 focus:ring-2 focus:ring-accent/30",
        className
      )}
      {...props}
    />
  )
);

Input.displayName = "Input";
export { Input };
