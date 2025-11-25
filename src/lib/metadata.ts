import type { Metadata } from "next";
import { copy } from "@/data/copy";

const siteUrl = copy.meta.url;
const siteName = copy.footer.schema.name;
const defaultImage = copy.meta.ogImage;

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
};

/**
 * Creates a metadata object with sensible defaults for Synerva Dynamics pages.
 * Sharing the logic keeps Open Graph, Twitter, and canonical tags in sync.
 */
export const buildPageMetadata = ({ title, description, path = "/", image }: MetadataInput): Metadata => {
  const url = new URL(path, siteUrl).toString();
  const ogImage = image ?? defaultImage;

  return {
    title,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      type: "website",
      locale: "en_CA"
    },
    twitter: {
      card: "summary_large_image",
      site: copy.meta.twitter,
      creator: copy.meta.twitter,
      title,
      description,
      images: [ogImage]
    }
  };
};
