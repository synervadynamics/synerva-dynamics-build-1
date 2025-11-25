import { buildPageMetadata } from "@/lib/metadata";
import { copy } from "@/data/copy";
import LabsPageClient from "./pageClient";

const labsPageCopy = copy.pages.labs;

export const metadata = buildPageMetadata({
  title: `Labs — ${labsPageCopy.heading}`,
  description: labsPageCopy.description,
  path: "/labs"
});

export default function LabsPage() {
  return <LabsPageClient />;
}
