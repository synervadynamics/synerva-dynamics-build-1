import { cn } from "@/lib/utils";

type VideoPlaceholderProps = {
  label?: string;
  className?: string;
  ratio?: string;
};

export default function VideoPlaceholder({ label = "Video placeholder", className, ratio }: VideoPlaceholderProps) {
  const ratioClass = ratio ?? "aspect-[16/9]";

  return (
    <div
      className={cn(
        "relative flex w-full items-center justify-center overflow-hidden rounded-3xl border border-white/12 bg-white/[0.03] shadow-[0_18px_45px_rgba(0,0,0,0.35)]",
        ratioClass,
        className
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,170,255,0.18),transparent_62%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]" />
      <div className="pointer-events-none absolute inset-x-4 inset-y-3 rounded-2xl border border-white/12" aria-hidden="true" />
      <span className="relative z-10 text-[0.65rem] uppercase tracking-[0.45em] text-white/70">
        {label}
      </span>
    </div>
  );
}
