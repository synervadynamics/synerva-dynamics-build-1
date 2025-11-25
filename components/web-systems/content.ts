export const copyWebSystems = {
  hero: {
    title: "Web Systems",
    subtitle:
      "Architecture for clarity, conversion, and truth in measurement—Canadian defaults, evidence attached.",
    ctaPrimary: "Start with a 30-minute plan",
    ctaSecondary: "See proof of lift"
  },
  overview: {
    oneLiner: "Pages assigned real jobs, tracked by real signals, shipped behind a QA gate.",
    bullets: [
      "Sitemap with page roles and KPIs",
      "Wireframe-ready copy blocks and components",
      "GA4 events, accessibility checks, and rollback steps"
    ]
  },
  modules: [
    {
      title: "Sitemap & Page Roles",
      text:
        "JSON map of URLs to primary/secondary KPIs and roles: convert, inform, support. Hub-and-spoke structure with sensible depth."
    },
    {
      title: "Landing Copy Blocks",
      text:
        "H1/H2, proof modules, CTA rows, explainers, and FAQs that pair outcome, mechanism, and proof."
    },
    {
      title: "Component Kit",
      text:
        "Hero, CTA, metric cards, testimonial with permissions note, and FAQ accordion. Responsive by default."
    },
    {
      title: "CRO Backlog (ICE)",
      text:
        "Experiment queue with hypothesis, impact, confidence, and ease. One job per test."
    },
    {
      title: "Tracking Spec",
      text:
        "GA4-aligned events and params for FormSubmit, CTA_Click, and Case_View. Data layer documented."
    },
    {
      title: "Accessibility & en-CA",
      text:
        "Contrast, landmarks, alt text, focus states, and en-CA language tag. Pass required before publish."
    },
    {
      title: "A/B Test Plan",
      text:
        "Single-KPI hypothesis, sample size, stop/scale rules, and duration cap to reduce seasonality drift."
    },
    {
      title: "Lead → CRM Automation",
      text:
        "Form submission to CRM with field mapping, confirmation, and logging. Test event required before go-live."
    },
    {
      title: "Rollback Template",
      text:
        "Disable, revert, remove, verify, and document. Restore drills with dummy data."
    }
  ],
  process: [
    {
      step: "Map",
      detail:
        "Define page roles and KPIs in a sitemap JSON. Confirm hubs, spokes, and depth."
    },
    {
      step: "Assemble",
      detail:
        "Compose pages from landing copy blocks. Add proof modules and component selections."
    },
    {
      step: "Instrument",
      detail:
        "Attach GA4 events, UTM policy, consent notes, and CAD references where applicable."
    },
    {
      step: "Verify",
      detail:
        "Run accessibility, voice, and link checks. Publish only on gate pass."
    },
    {
      step: "Experiment",
      detail:
        "Launch next test from the ICE backlog with prewritten stop rules. Log outcomes."
    },
    {
      step: "Restore",
      detail:
        "Use rollback template if a tag misfires; verify and log the incident."
    }
  ],
  outcomes: {
    bullets: [
      "Faster paths to value with fewer clicks",
      "Operational calm through reversible releases",
      "Trusted data via aligned events and UTM policy"
    ]
  },
  faq: [
    {
      q: "How are KPIs assigned to pages?",
      a:
        "Each URL lists primary and secondary KPIs aligned to the role in the sitemap JSON."
    },
    {
      q: "What proof appears above the fold?",
      a:
        "Metric cards or permissioned testimonials positioned near the primary CTA."
    },
    {
      q: "How is accessibility enforced?",
      a:
        "A checklist guards contrast, headings, alt text, focus states, and en-CA language before publish."
    },
    {
      q: "What happens when a tag misfires?",
      a:
        "Follow rollback steps to disable and revert, then verify analytics cessation and log the incident."
    }
  ],
  cta: {
    heading: "Ready for pages that pull their weight?",
    primary: "Start with a 30-minute plan",
    secondary: "See proof of lift"
  }
};
