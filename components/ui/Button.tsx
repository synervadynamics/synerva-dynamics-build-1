import { cn } from "../../lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

/**
 * Accessible button with consistent accent and motion-safe focus ring.
 */
const Button = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center rounded-xl font-semibold transition-transform duration-150",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40",
        "hover:scale-[1.02] active:scale-[0.98]",
        "px-5 py-3 text-sm text-ink bg-accent shadow-glass",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
);

Button.displayName = "Button";
export { Button };
