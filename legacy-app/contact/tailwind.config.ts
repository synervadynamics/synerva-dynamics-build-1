import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./styles/**/*.{css}"],
  theme: {
    container: { center: true, padding: "1rem", screens: { lg: "64rem", xl: "72rem", "2xl": "80rem" } },
    extend: {
      colors: {
        bg: "#0b0e13",
        ink: "#e8f1f8",
        mute: "#9aa8b2",
        cyan: { DEFAULT: "#00aaff", 500: "#00aaff", 400: "#35b9ff", 300: "#64c8ff" }
      },
      borderRadius: { xl: "1rem", "2xl": "1.25rem" },
      boxShadow: {
        glass: "0 1px 0 0 rgba(255,255,255,0.06) inset, 0 10px 30px -12px rgba(0,170,255,0.25)"
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
}
export default config
