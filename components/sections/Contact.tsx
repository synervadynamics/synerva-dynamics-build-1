"use client";

import { useState } from "react";
import { copy } from "./_content";

export default function Contact() {
  const [status, setStatus] = useState<"idle"|"sending"|"sent"|"error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: fd.get("name"),
          email: fd.get("email"),
          message: fd.get("message")
        }),
        headers: { "Content-Type": "application/json" }
      });
      if (res.ok) setStatus("sent");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24 sm:py-28">
      <div className="mx-auto max-w-2xl px-4">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">{copy.contact.heading}</h2>
        <form onSubmit={onSubmit} className="mt-8 space-y-4">
          <div>
            <label htmlFor="name" className="sr-only">Name</label>
            <input id="name" name="name" type="text" required
              className="w-full rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3 outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/30" />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input id="email" name="email" type="email" required
              className="w-full rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3 outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/30" />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea id="message" name="message" rows={5} required
              className="w-full rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3 outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/30" />
          </div>
          <div className="flex items-center gap-3">
            <button
              type="submit"
              className="btn-accent px-5 py-3 rounded-xl text-sm font-semibold transition-transform hover:scale-[1.02] active:scale-[0.99]"
            >
              Send
            </button>
            {status === "sending" && <span className="text-mute text-sm">Sending…</span>}
            {status === "sent" && <span className="text-sm text-ink">Sent.</span>}
            {status === "error" && <span className="text-sm text-red-300">Failed.</span>}
          </div>
        </form>
      </div>
    </section>
  );
}
