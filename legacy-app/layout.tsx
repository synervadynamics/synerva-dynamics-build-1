import type { Metadata } from "next";
import { Inter } from "next/font/google";
import HomeButton from "../components/site/HomeButton";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Syndicate Dynamics",
  description: "Syndicate Dynamics"
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-bg text-ink antialiased selection:bg-accent/20 selection:text-ink">
        {/* GridBackground will be implemented in Section 3 */}
        <div className="bg-grid bg-[length:24px_24px] relative">
          <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
          <HomeButton />
          <main className="relative z-10">{children}</main>
        </div>
      </body>
    </html>
  );
}
