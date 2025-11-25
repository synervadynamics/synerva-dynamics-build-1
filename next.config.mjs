import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typedRoutes: true,
  // Ensure Next.js treats this directory as the workspace root even if other lockfiles exist.
  outputFileTracingRoot: __dirname
};

export default nextConfig;
