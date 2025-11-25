export const metadata = {
    title: "Work — Syndicate Dynamics",
    description:
      "Selected projects and case studies.",
  };
  
  type Item = {
    title: string;
    summary: string;
    href?: string;
  };
  
  const ITEMS: Item[] = [
    {
      title: "Signal-first Website Revamp",
      summary:
        "Rebuilt core pages for clarity, speed, and accessibility. Simplified information architecture and shipped measurable conversion gains.",
    },
    {
      title: "Ops Automation Pilot",
      summary:
        "Mapped a noisy workflow, shipped a reliable v1, added guardrails, and trained the team. Hours saved weekly.",
    },
    {
      title: "Measurement Makeover",
      summary:
        "Replaced dashboard sprawl with a minimal, defensible metric set and a monthly review rhythm.",
    },
  ];
  
  export default function WorkPage() {
    return (
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <h1 className="text-3xl font-semibold sm:text-4xl">Work</h1>
        <p className="mt-3 max-w-3xl text-neutral-300">Selected projects and case studies.</p>
  
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {ITEMS.map((it) => (
            <article
              key={it.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-xl font-semibold">{it.title}</h3>
              <p className="mt-2 text-neutral-300">{it.summary}</p>
            </article>
          ))}
        </div>
      </div>
    );
  }
  