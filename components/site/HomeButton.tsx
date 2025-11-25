"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HomeButton() {
  const pathname = usePathname();

  if (!pathname || pathname === "/") {
    return null;
  }

  return (
    <div className="fixed left-4 top-4 z-[100] sm:left-6 sm:top-6">
      <Link
        href="/"
        aria-label="Return to the Syndicate Dynamics homepage"
        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-accent/60 focus:ring-offset-2 focus:ring-offset-black/40 sm:text-sm sm:tracking-[0.4em]"
      >
        <span className="hidden sm:inline">Back to Homepage</span>
        <span className="sm:hidden">Home</span>
      </Link>
    </div>
  );
}
