import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{ts,tsx,mdx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/styles/**/*.{css}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        ink: "var(--ink)",
        mute: "var(--mute)",
        accent: "var(--accent)"
      },
      fontFamily: {
        sans: ["'Space Grotesk Variable'", "Inter", "system-ui", "sans-serif"],
        display: ["'Space Grotesk Variable'", "Inter", "system-ui", "sans-serif"],
        mono: ["'IBM Plex Mono'", "ui-monospace", "SFMono-Regular", "monospace"]
      },
      boxShadow: {
        "glass": "0 1px 0 rgba(255,255,255,0.06) inset, 0 10px 40px rgba(0,170,255,0.08)"
      },
      backgroundImage: {
        "radial-grid": "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.06) 0, rgba(255,255,255,0.04) 1px, transparent 1px)"
      },
      backgroundSize: {
        "grid": "24px 24px"
      },
      keyframes: {
        "soft-pulse": {
          "0%": { opacity: 0.3, transform: "scale(0.96)" },
          "50%": { opacity: 0.7, transform: "scale(1)" },
          "100%": { opacity: 0.3, transform: "scale(0.96)" }
        },
        "slow-pan": {
          "0%": { transform: "translate3d(-2%, -2%, 0)" },
          "100%": { transform: "translate3d(2%, 2%, 0)" }
        }
      },
      animation: {
        pulseAmbient: "soft-pulse 8s ease-in-out infinite",
        panSlow: "slow-pan 24s ease-in-out alternate infinite"
      }
    }
  },
  plugins: []
} satisfies Config;
