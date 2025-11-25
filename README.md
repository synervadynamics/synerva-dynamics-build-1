# Synerva Dynamics

Cinematic, psychology-informed marketing site for Synerva Dynamics. Built with Next.js 14 App Router, TypeScript, Tailwind CSS, Framer Motion, and GSAP to showcase Lucentra, Verisense, and Synerva OS across immersive sections and dedicated product routes.

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Run the dev server**
   ```bash
   npm run dev
   ```
3. **Production build / preview**
   ```bash
   npm run build
   npm start
   ```
4. **Lint**
   ```bash
   npm run lint
   ```

Use Node.js 18+. The project is ready for a Git repository—initialize one (`git init && git add . && git commit`) before connecting to Vercel/GitHub so each push runs CI/CD automatically.

## Architecture Notes

- **App Router** (`src/app`) powers all routing. Each major page (home, Labs, Cases, Contact, and product detail routes) exports metadata built through `src/lib/metadata.ts` so SEO, Open Graph, and Twitter tags stay consistent.
- **Styling & motion**: Tailwind for layout, CSS variables for theming, Framer Motion for component choreography, GSAP ScrollTrigger for heavier scroll-linked sequences, and custom cursor/scroll progress layers for immersion.
- **Data-first content**: All copy is centralized in `src/data/copy.ts` and is sourced verbatim from `seed-files/Syndicate_Dynamics_Website_Copy_v2.pdf`. Video/image assets live in `public/visuals` and `seed-files/`.
- **API**: `/api/contact` sends email via Resend when `RESEND_API_KEY` is provided; without it the endpoint safely logs/stubs the request (see `src/app/api/contact/route.ts`).

## Deployment Checklist

- Set `RESEND_API_KEY` in Vercel to enable live contact emails.
- Provide a production domain that matches `copy.meta.url` for accurate canonical/open graph tags.
- Keep `seed-files/` handy for any future copy audits; the README intentionally documents the source to maintain compliance.
