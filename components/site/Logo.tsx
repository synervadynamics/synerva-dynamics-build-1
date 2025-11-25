import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`font-semibold tracking-tight text-cyan-400 hover:text-cyan-300 ${className}`}
      aria-label="Syndicate Dynamics Home"
    >
      Syndicate Dynamics
    </Link>
  );
}
