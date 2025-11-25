import Link from "next/link";
import { notFound } from "next/navigation";
import { copy } from "@/data/copy";
import { buildPageMetadata } from "@/lib/metadata";

const detailsBySlug: Record<
  string,
  {
    eyebrow: string;
    title: string;
    lead: string;
    bullets: string[];
    videoLabel: string;
    ctaLabel: string;
    proof: string;
  }
> = {
  lucentra: {
    eyebrow: "Adaptive Intelligence for Operators Who Outgrow Chaos",
    title: "Lucentra: The Operating Mind Behind Your Work",
    lead:
      "Lucentra is what happens when orchestration becomes intelligence instead of effort. It doesn’t wait for you to wrestle clarity out of a pile of obligations; it reads your direction, anticipates structure, and assembles the spine of your work before you even name the shape. Strategy becomes less of a meeting and more of a physics: clean, aligned, inevitable. Lucentra keeps you inside momentum, not maintenance.",
    bullets: [
      "Converts scattered inputs into coherent, execution-ready architecture",
      "Generates strategy-grade content with the precision of a well-run studio",
      "Reduces cognitive load while increasing velocity, consistency, and lift"
    ],
    videoLabel: "Lucentra system console",
    ctaLabel: "Enter Lucentra Labs",
    proof:
      "Built from the real constraints of real operators who needed clarity faster than chaos could form."
  },
  verisense: {
    eyebrow:
      "Behavioral Signal Intelligence for Leaders Who Need Truth, Not Noise",
    title: "Verisense: Decode Presence, Power, and the Human Signal",
    lead:
      "Verisense turns communication into data without stripping it of humanity. It reads micro-behaviors, cadence, tension, and the emotional current beneath your words, revealing the invisible architecture of how people trust, resist, decide, and follow. Leadership stops being guesswork and becomes a discipline you can measure, train, and refine. Verisense shows you the difference between speaking and being heard.",
    bullets: [
      "Captures tone, pacing, tension, and behavioral signals in real time",
      "Reveals the psychological patterns that drive persuasion and rapport",
      "Enables targeted coaching based on measurable communication outcomes"
    ],
    videoLabel: "Verisense signal capture stream",
    ctaLabel: "Explore Verisense Labs",
    proof:
      "Modeled on evidence-based communication psychology used in executive coaching, crisis negotiation, and elite performance."
  },
  "analytics-patterns": {
    eyebrow: "Diagnostics for Operators Who Treat Data Like a Living System",
    title:
      "Analytics Patterns: Truth-Seeking Dashboards for Serious Decisions",
    lead:
      "Analytics Patterns transforms dashboards from decorative charts into diagnostic instruments. It traces cause and effect through your funnel, your workflows, and your operations, revealing not only what’s happening but why it’s happening. Vanity metrics vanish. Operational realism takes their place. You get a closed-loop feedback system that behaves more like a flight deck than a report—capable of exposing friction, validating direction, and giving you the confidence to scale without superstition.",
    bullets: [
      "Replaces surface-level reports with deep attribution logic",
      "Maps behavior, bottlenecks, and performance with surgical clarity",
      "Creates feedback systems that enhance decisions instead of decorate them"
    ],
    videoLabel: "Operational realism overlays",
    ctaLabel: "View Analytics Patterns",
    proof:
      "Informed by real operator data from teams who needed dashboards that could actually keep up."
  },
  "content-systems-workbook": {
    eyebrow:
      "Editorial Architecture for Brands That Want Scale Without Losing Soul",
    title:
      "Content Systems Workbook: The Framework That Makes Creativity Repeatable",
    lead:
      "The Content Systems Workbook is editorial gravity in a bottle. It teaches your ideas to organize themselves so you can produce at scale without diluting the intelligence or authenticity behind your voice. Every matrix, scaffold, and narrative template inside it acts like a stabilizing field: it keeps your thinking sharp, your message consistent, and your creative identity unmistakably your own. This is how you build a publishing engine that grows with you, not against you.",
    bullets: [
      "Turns scattered notions into a structured, repeatable content ecosystem",
      "Preserves voice while multiplying volume and depth",
      "Eliminates creative drift with a framework that guides quality at every layer"
    ],
    videoLabel: "Editorial systems overview",
    ctaLabel: "Open the Workbook",
    proof:
      "Used to build multi-platform content engines for operators who needed to scale output without sacrificing integrity."
  },
  "offer-engineering-sheets": {
    eyebrow:
      "Behavioral Economics for Offers Built on Clarity, Not Manipulation",
    title:
      "Offer Engineering Sheets: The Art and Psychology of High-Trust Conversion",
    lead:
      "Offer Engineering Sheets distill the mechanics of human decision-making into a clean, ethical blueprint. They help you articulate value with undeniable clarity, shape pricing logic that respects how people understand risk, and remove friction without resorting to coercion. The result is a structure that guides prospects toward the choice already aligned with their self-interest. You don’t push. You illuminate. And people say yes because everything finally makes sense.",
    bullets: [
      "Builds pricing and value logic aligned with real human decision patterns",
      "Removes friction in how offers are framed, understood, and acted on",
      "Improves conversion without pressure, games, or cognitive overload"
    ],
    videoLabel: "Offer Engineering diagnostics",
    ctaLabel: "Access Offer Sheets",
    proof:
      "Rooted in peer-reviewed behavioral economics and field-tested offer design used across high-trust services."
  },
  "rockstar-server-playbook": {
    eyebrow: "Where Chaos Becomes Craft",
    title: "The Rockstar Server Playbook",
    lead:
      "This is the book that sparked early murmurs around Synerva. A raw, cinematic, psychologically sharp account of what it means to operate with grace in a pressure cooker world. The Rockstar Server Playbook is not a hospitality manual. It is a study in human behavior, timing, identity, and resilience. Every chapter is a backstage pass into the places where timing becomes intuition, intuition becomes leadership, and leadership becomes art.",
    bullets: [
      "A psychological blueprint for handling chaos with precision and humor.",
      "Narrative intelligence honed through thousands of high stress interactions.",
      "Frameworks for performance, empathy, timing, and emotional clarity."
    ],
    videoLabel: "What Pressure Teaches",
    ctaLabel: "Get Your Preview Copy",
    proof: ""
  }
};

const labsItems = [
  ...copy.labs.secondary.map(item => ({
    ...item,
    slug: item.href.replace("/labs/", "")
  })),
  {
    title: "The Rockstar Server Playbook",
    desc:
      "This is the book that sparked early murmurs around Synerva. A raw, cinematic, psychologically sharp account of what it means to operate with grace in a pressure cooker world.",
    href: "/labs/rockstar-server-playbook",
    video: {
      src: "/visuals/deliver/hero-vid-1.mp4",
      label: "What Pressure Teaches"
    },
    slug: "rockstar-server-playbook"
  }
];

const bySlug = (slug: string) => labsItems.find(item => item.slug === slug);

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = bySlug(slug);
  if (!item) return {};
  return buildPageMetadata({
    title: `${item.title} — Labs | Synerva Dynamics`,
    description: item.desc.replace(/\n/g, " "),
    path: `/labs/${slug}`
  });
}

export default async function Page({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = bySlug(slug);
  if (!item) return notFound();

  const detail = detailsBySlug[slug];
  if (!detail) return notFound();

  return (
    <main className="bg-[var(--bg)] text-white">
      <section className="relative isolate overflow-hidden px-6 pt-28 sm:px-10 lg:px-16">
        <div className="relative z-10 mb-4 flex justify-start">
          <Link
            href="/"
            className="text-sm uppercase tracking-[0.3em] text-white/70 transition hover:text-white"
          >
            ← Home
          </Link>
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-black/80 to-cyan-500/10" />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative mx-auto grid max-w-5xl gap-10 rounded-[3rem] border border-white/10 bg-black/50 p-10 backdrop-blur-3xl lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">
              {detail.eyebrow}
            </p>
            <h1 className="text-4xl leading-tight sm:text-5xl">
              {detail.title}
            </h1>
            <p className="text-base text-white/75 whitespace-pre-line">
              {detail.lead}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/labs#preview-access"
                className="rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-black transition hover:bg-white/90"
              >
                {detail.ctaLabel}
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-white/40 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white hover:bg-white/10"
              >
                Talk to Synerva
              </Link>
            </div>
          </div>

          <div className="space-y-4 rounded-[2.5rem] border border-white/10 bg-white/5 p-6">
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="aspect-[4/3] w-full object-cover"
                aria-label={item.video.label}
              >
                <track kind="captions" label={item.video.label} />
                <source src={item.video.src} type="video/mp4" />
              </video>
            </div>

            <p className="text-xs uppercase tracking-[0.35em] text-white/60">
              {item.title}
            </p>
            <p className="text-sm text-white/70">{detail.videoLabel}</p>

            <ul className="space-y-2 text-sm text-white/75">
              {detail.bullets.map(point => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/50" />
                  {point}
                </li>
              ))}
            </ul>

            <p className="text-xs uppercase tracking-[0.3em] text-white/50">
              {detail.proof}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
