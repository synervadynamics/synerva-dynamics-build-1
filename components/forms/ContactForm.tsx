"use client";

import * as React from "react";

type State =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success" }
  | { status: "error"; message: string };

export default function ContactForm() {
  const [state, setState] = React.useState<State>({ status: "idle" });
  const formRef = React.useRef<HTMLFormElement>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state.status === "submitting") return;

    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      message: String(fd.get("message") || "").trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setState({ status: "error", message: "All fields are required." });
      return;
    }

    try {
      setState({ status: "submitting" });
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error || "Failed to send message.");
      }
      setState({ status: "success" });
      formRef.current?.reset();
    } catch (err: any) {
      setState({ status: "error", message: err?.message || "Something went wrong." });
    }
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm text-neutral-300">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-cyan-500/40"
          placeholder="Jane Doe"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm text-neutral-300">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-cyan-500/40"
          placeholder="jane@example.com"
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-neutral-300">Message</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-cyan-500/40"
          placeholder="What can we build together?"
          required
        />
      </div>

      <button
        type="submit"
        disabled={state.status === "submitting"}
        className="inline-flex items-center justify-center rounded-xl bg-cyan-600/90 px-5 py-3 text-sm font-medium text-white transition hover:bg-cyan-500 focus-visible:outline-none focus-visible:ring focus-visible:ring-cyan-400/60 disabled:opacity-60"
      >
        {state.status === "submitting" ? "Sending..." : "Send"}
      </button>

      {state.status === "error" && (
        <p className="text-sm text-red-400">{state.message}</p>
      )}
      {state.status === "success" && (
        <p className="text-sm text-emerald-400">Thanks — message sent.</p>
      )}
    </form>
  );
}
