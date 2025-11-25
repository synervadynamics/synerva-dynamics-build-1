export const copyVoiceSystems = {
  hero: {
    title: "Voice Systems",
    subtitle:
      "Language that scales without losing identity. Brand voice rendered as an operating standard—enforceable, testable, production-ready.",
    ctaPrimary: "Start with a 30-minute plan",
    ctaSecondary: "See proof of lift"
  },
  overview: {
    oneLiner: "Voice is infrastructure. Rules, rhythm, and proof—applied everywhere.",
    bullets: [
      "Brand Voice Card, Messaging House, syntax patterns, rhythm ratio",
      "Banned-lexicon controls with en-CA enforcement",
      "Universal QA Gate before publish"
    ]
  },
  modules: [
    {
      title: "Brand Voice Card",
      text:
        "Traits, tone base, rhythm (60/30/10), syntax discipline, humanity protocol, and banned-lexicon rules in one reference."
    },
    {
      title: "Messaging House",
      text:
        "Promise, pillars, and proof lines that anchor headlines, subheads, CTAs, and case narration."
    },
    {
      title: "Lexicon & Banned Terms",
      text:
        "Canonical wordlist with Canadian variants; forbidden terms replaced with plain-language alternatives."
    },
    {
      title: "Syntax Patterns",
      text:
        "Reusable sentence scaffolds by tone mode—Strategic, Magnetic, Clean, Technical, Conversational."
    },
    {
      title: "Acceptance & QA",
      text:
        "Pre-publish checklist: rhythm ratio, banned words, en-CA spelling, proof near claim, accessibility, rollback note."
    }
  ],
  process: [
    {
      step: "Audit",
      detail:
        "Score current assets for rhythm, banned terms, and proof adjacency; produce gap report."
    },
    {
      step: "Assemble",
      detail:
        "Lock the Voice Card, Messaging House, lexicon, and ten gold lines."
    },
    {
      step: "Instrument",
      detail:
        "Embed voice checks into briefs, templates, and validation scripts."
    },
    {
      step: "Ship",
      detail:
        "Publish only on QA gate pass; record evidence and rollback note."
    },
    {
      step: "Measure",
      detail:
        "Monitor engagement signals; update examples and lexicon on cadence."
    }
  ],
  outcomes: {
    bullets: [
      "Faster throughput with fewer edits",
      "Higher conversion through clear message architecture",
      "Lower risk via compliance and accessibility checks"
    ]
  },
  faq: [
    {
      q: "How does tone stay consistent across formats?",
      a:
        "Rhythm, syntax patterns, and lexicon controls run at brief and QA stages; nothing ships before passing checks."
    },
    {
      q: "What compliance and accessibility standards apply?",
      a:
        "en-CA spelling, CASL/PIPEDA awareness, and accessibility checks attach to the Voice QA."
    },
    {
      q: "Does automation make copy robotic?",
      a:
        "Patterns enforce clarity while the humanity protocol preserves natural cadence and respect for the reader."
    }
  ],
  cta: {
    heading: "Ready for language that scales?",
    primary: "Start with a 30-minute plan",
    secondary: "See proof of lift"
  }
};

export type VoiceProcessStep = (typeof copyVoiceSystems.process)[number];
export type VoiceModule = (typeof copyVoiceSystems.modules)[number];
