export const metadata = {
    title: "Productized Offers — Syndicate Dynamics",
    description:
      "Transparent scopes that protect velocity. Timelines flex with complexity and approvals.",
  };
  
  function Offer({ name, time, body }: { name: string; time: string; body: string }) {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="mt-1 text-sm text-neutral-400">{time}</p>
        <p className="mt-3 text-neutral-300">{body}</p>
      </div>
    );
  }
  
  export default function OffersPage() {
    return (
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <h1 className="text-3xl font-semibold sm:text-4xl">Productized Offers</h1>
        <p className="mt-3 max-w-3xl text-neutral-300">
          Transparent scopes that protect velocity. Timelines flex with complexity and approvals.
        </p>
  
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Offer
            name="Clarity Sprint"
            time="2 weeks"
            body="Rapid alignment on positioning, sitemap, core pages, and a simple content plan. Hand-off doc included."
          />
          <Offer
            name="Site Refresh"
            time="4–6 weeks"
            body="Update message, layout, and styles on key pages. Accessibility pass, SEO basics, and performance tune-up."
          />
          <Offer
            name="Automation Starter"
            time="3–5 weeks"
            body="Map a painful process, ship a reliable v1 automation, document the guardrails, and train the team."
          />
          <Offer
            name="Measurement Makeover"
            time="2–3 weeks"
            body="Kill the noise. Keep the metrics that matter, add lightweight experiments, and create a monthly review rhythm."
          />
        </div>
      </div>
    );
  }
  