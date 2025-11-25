import Image from "next/image";
import rockstarCover from "@/public/rockstar-cover.png";

export const metadata = {
  title: "Labs — Syndicate Dynamics",
  description:
    "A space for experiments, writing, and tools in progress.",
};

export default function LabsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-semibold sm:text-4xl">Labs</h1>
      <p className="mt-3 max-w-3xl text-neutral-300">
        Experiments, drafts, and prototypes from the studio.  
        Things that don’t fit the portfolio but push the systems forward.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold">The Rockstar Server Playbook</h2>
          <p className="mt-2 text-neutral-300">
            A humorous, practical e-book on hospitality, service culture, and keeping your sanity
            in the chaos. Written for servers, bartenders, and managers who take pride in the craft.
          </p>
          <div className="mt-4 overflow-hidden rounded-xl border border-white/10">
            <Image
              src={rockstarCover}
              alt="The Rockstar Server Playbook cover"
              className="w-full object-cover"
              placeholder="blur"
            />
          </div>
          <p className="mt-3 text-sm text-neutral-400">
            <em>Coming soon — digital & print.</em>
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold">Lucentra Engine</h2>
          <p className="mt-2 text-neutral-300">
            A research interface for prompt orchestration, context caching, and multi-model
            reasoning built for internal use. Designed for creative and consulting workflows.
          </p>
          <p className="mt-3 text-sm text-neutral-400">Internal prototype</p>
        </div>
      </div>
    </div>
  );
}
