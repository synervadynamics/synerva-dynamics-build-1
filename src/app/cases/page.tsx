import CasesPageClient from "./pageClient";
import { buildPageMetadata } from "@/lib/metadata";
import { copy } from "@/data/copy";

const casesPageCopy = copy.pages.cases;

export const metadata = buildPageMetadata({
  title: `Case Studies — ${casesPageCopy.heading}`,
  description: casesPageCopy.description,
  path: "/cases"
});

export default function CasesPage() {
  return <CasesPageClient />;
}
