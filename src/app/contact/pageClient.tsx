"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { Footer } from "@/components/Footer";
import { copy } from "@/data/copy";
import { AmbientVideo } from "@/components/AmbientVideo";

const contactCopy = copy.pages.contact;

type FormState = {
  name: string;
  email: string;
  company: string;
  project: string;
  consent: boolean;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  project: "",
  consent: false
};

const renderWithBreaks = (text: string) =>
  text.split("\n").map((line, index, arr) => (
    <span key={`${index}-${line}`}>
      {line}
      {index < arr.length - 1 && <br />}
    </span>
  ));

export default function ContactPageClient() {
  return (
    <div className="bg-[var(--bg)] text-white">
      <section className="relative overflow-hidden px-6 pt-28 sm:px-10 lg:px-16">
        <AmbientVideo src="/visuals/footer/pulse.mp4" opacity={0.45} blur />
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-black/70 to-cyan-500/20" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative mx-auto flex max-w-5xl flex-col gap-5 rounded-[3rem] border border-white/10 bg-black/50 p-10 backdrop-blur-2xl">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">{contactCopy.eyebrow}</p>
          <h1 className="text-4xl leading-tight sm:text-5xl lg:text-6xl">{contactCopy.heading}</h1>
          <p className="text-lg text-white/70">{contactCopy.description}</p>
          <p className="text-sm text-white/60">{copy.contact.subhead}</p>
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">{copy.contact.responseTime}</p>
        </div>
      </section>
      <section className="relative overflow-hidden px-6 py-12 sm:px-10 lg:px-16">
        <AmbientVideo src="/visuals/deliver/analytics.mp4" opacity={0.35} blur />
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/80" />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {copy.contactProcess.map(step => (
            <div key={step.title} className="glass-panel rounded-3xl border border-white/10 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">{step.title}</p>
              <p className="mt-2 text-sm text-white/75">{step.detail}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="relative overflow-hidden px-6 py-16 sm:px-10 lg:px-16">
        <AmbientVideo src="/visuals/deliver/compounding-systems.mp4" opacity={0.3} blur />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/95 via-black/70 to-black/85" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <ContactForm />
          <aside className="glass-panel h-full rounded-3xl border border-white/10 p-8">
            <h2 className="text-xl text-white">{contactCopy.sidebarTitle}</h2>
            <p className="mt-4 text-sm text-white/70">{renderWithBreaks(copy.global.contact.address)}</p>
            <div className="mt-6 space-y-2 text-sm text-white/80">
              <a className="block hover:text-white" href={`tel:${copy.global.contact.phone.replace(/[^0-9+]/g, "")}`}>
                {copy.global.contact.phone}
              </a>
              <a className="block hover:text-white" href={`mailto:${copy.global.contact.email}`}>
                {copy.global.contact.email}
              </a>
            </div>
            <div className="mt-8 space-y-2 text-sm text-white/60">
              {contactCopy.sidebarBullets.map(item => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </aside>
        </div>
      </section>
      <Footer />
    </div>
  );
}

function ContactForm() {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const formCopy = copy.contactForm;

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = event.target;
    const { name, value } = target;
    const isCheckbox = target instanceof HTMLInputElement && target.type === "checkbox";
    setFormState(prev => ({ ...prev, [name]: isCheckbox ? target.checked : value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formState.consent) return;
    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState)
      });
      if (!response.ok) {
        throw new Error("Request failed");
      }
      setStatus("success");
      setFormState(initialState);
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-panel space-y-6 rounded-3xl border border-white/10 p-8 shadow-[0_40px_80px_rgba(0,0,0,0.35)]"
    >
      <div>
        <label className="text-sm uppercase tracking-[0.3em] text-white/60" htmlFor="name">
          {formCopy.labels.name}
        </label>
        <input
          className="mt-2 w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder:text-white/30 focus:border-white/40"
          id="name"
          name="name"
          required
          value={formState.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="text-sm uppercase tracking-[0.3em] text-white/60" htmlFor="email">
          {formCopy.labels.email}
        </label>
        <input
          className="mt-2 w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder:text-white/30 focus:border-white/40"
          id="email"
          name="email"
          type="email"
          required
          value={formState.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="text-sm uppercase tracking-[0.3em] text-white/60" htmlFor="company">
          {formCopy.labels.company}
        </label>
        <input
          className="mt-2 w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder:text-white/30 focus:border-white/40"
          id="company"
          name="company"
          required
          value={formState.company}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="text-sm uppercase tracking-[0.3em] text-white/60" htmlFor="project">
          {formCopy.labels.project}
        </label>
        <textarea
          className="mt-2 min-h-[140px] w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder:text-white/30 focus:border-white/40"
          id="project"
          name="project"
          required
          value={formState.project}
          onChange={handleChange}
        />
      </div>
      <label className="flex items-start gap-3 text-sm text-white/70">
        <input
          type="checkbox"
          name="consent"
          className="mt-1 h-4 w-4 accent-cyan-400"
          checked={formState.consent}
          onChange={handleChange}
          required
        />
        <span>{formCopy.labels.consent}</span>
      </label>
      <button
        type="submit"
        disabled={status === "submitting" || !formState.consent}
        className="w-full rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-black disabled:cursor-not-allowed disabled:bg-white/40"
      >
        {status === "submitting" ? formCopy.submit.pending : formCopy.submit.idle}
      </button>
      {status === "success" && <p className="text-sm text-emerald-300">{formCopy.success}</p>}
      {status === "error" && (
        <p className="text-sm text-rose-300">
          {formCopy.errorTemplate.replace("{email}", copy.global.contact.email)}
        </p>
      )}
    </form>
  );
}
