import { buildPageMetadata } from "@/lib/metadata";
import { copy } from "@/data/copy";
import ContactPageClient from "./pageClient";

const contactCopy = copy.pages.contact;

export const metadata = buildPageMetadata({
  title: `Contact — ${contactCopy.heading}`,
  description: contactCopy.description,
  path: "/contact"
});

export default function ContactPage() {
  return <ContactPageClient />;
}
