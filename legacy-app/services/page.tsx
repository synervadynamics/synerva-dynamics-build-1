import FadeIn from "../../components/sections/FadeIn";

export const metadata = {
  title: "Services — Syndicate Dynamics",
  description: "Strategy, design, and automation that compound."
};

const items = [
  {
    title: "Strategic Positioning",
    points: ["Market differentiation analysis", "Messaging architecture", "Competitive intelligence", "Go-to-market strategy"]
  },
  {
    title: "World-Class Design",
    points: ["Brand identity systems", "Website & product design", "Marketing collateral", "Design system creation"]
  },
  {
    title: "AI Automation",
    points: ["Process automation", "AI-powered workflows", "Data integration", "Custom tool development"]
  }
];

export default function ServicesPage() {
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-semibold sm:text-4xl">What I Deliver</h1>
      <p className="mt-3 max-w-2xl text-mute">Three core capabilities that transform businesses from invisible to inevitable.</p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {items.map(card => (
          <FadeIn key={card.title}>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-glass">
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-mute">
                {card.points.map(p => <li key={p} className="leading-relaxed">↳ {p}</li>)}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
