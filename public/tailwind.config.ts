import type { Config } from "tailwindcss"
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./styles/**/*.{css}"],
  theme: {
    extend: { colors: { cyan: { DEFAULT: "#00aaff" } } }
  },
  plugins: []
}
export default config
