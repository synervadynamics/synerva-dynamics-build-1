export const metadata = {
    title: "System — Syndicate Dynamics",
    description:
      "Under the hood of the Verisense/Syndicate ecosystem.",
  };
  
  export default function SystemPage() {
    return (
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <h1 className="text-3xl font-semibold sm:text-4xl">System</h1>
        <p className="mt-3 max-w-3xl text-neutral-300">
          Syndicate Dynamics operates on a modular stack of internal frameworks
          developed to analyze, automate, and scale human communication.
        </p>
        <div className="mt-8 space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-cyan-400">Verisense</h2>
            <p className="mt-2 text-neutral-300">
              The analytical core — transforms qualitative conversation data into
              measurable insight. Powers VibeCheck and communication benchmarking.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-cyan-400">Lucentra</h2>
            <p className="mt-2 text-neutral-300">
              The reasoning layer — orchestrates multi-prompt operations and memory
              state across creative and analytical tasks.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-cyan-400">Signalhouse</h2>
            <p className="mt-2 text-neutral-300">
              The integration suite — connects external APIs, automates report
              generation, and manages multi-brand client systems.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-cyan-400">Rubican</h2>
            <p className="mt-2 text-neutral-300">
              The bridge from concept to production — deploys internal tools,
              dashboards, and websites like this one.
            </p>
          </section>
        </div>
      </div>
    );
  }
  