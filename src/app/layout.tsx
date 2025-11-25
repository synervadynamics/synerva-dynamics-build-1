import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "@/styles/globals.css";
import { copy } from "@/data/copy";
import CursorLayer from "@/components/CursorLayer";
import BackgroundDynamics from "@/components/BackgroundDynamics";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk"
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-plex-mono"
});

const metadataBase = new URL(copy.meta.url);

export const metadata: Metadata = {
  metadataBase,
  title: copy.meta.title,
  description: copy.meta.description,
  icons: "/favicon.ico",
  manifest: "/manifest.json",
  openGraph: {
    title: copy.meta.title,
    description: copy.meta.description,
    url: copy.meta.url,
    siteName: "Synerva Dynamics",
    images: [{ url: copy.meta.ogImage, width: 1200, height: 630, alt: copy.meta.title }],
    type: "website",
    locale: "en_CA"
  },
  twitter: {
    card: "summary_large_image",
    site: copy.meta.twitter,
    creator: copy.meta.twitter,
    title: copy.meta.title,
    description: copy.meta.description,
    images: [copy.meta.ogImage]
  },
  alternates: {
    canonical: copy.meta.url
  }
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: copy.footer.schema.name,
  url: copy.footer.schema.url,
  logo: copy.footer.schema.logo,
  sameAs: copy.footer.schema.sameAs,
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: copy.global.contact.phone,
      contactType: "customer support",
      areaServed: "CA",
      availableLanguage: ["English", "French"]
    }
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "259 St. Paul Street",
    addressLocality: "St. Catharines",
    addressRegion: "ON",
    postalCode: "L2R 3M7",
    addressCountry: "CA"
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: copy.meta.url
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Labs",
      item: `${copy.meta.url}/labs`
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Contact",
      item: `${copy.meta.url}/contact`
    }
  ]
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-CA" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${plexMono.variable} bg-[var(--bg)] text-white antialiased`} suppressHydrationWarning>
        <div className="global-backdrop" aria-hidden />
        <div className="global-gradient" aria-hidden />
        <BackgroundDynamics />
        <CursorLayer />
        <div className="page-shell">{children}</div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      </body>
    </html>
  );
}
