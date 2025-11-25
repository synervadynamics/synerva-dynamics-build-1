import { ProductPage } from "@/components/ProductPage";
import { copy } from "@/data/copy";
import { buildPageMetadata } from "@/lib/metadata";

const product = copy.products.synervaOs;

export const metadata = buildPageMetadata({
  title: `${product.title} — ${product.tagline} | Synerva Dynamics`,
  description: product.description[0],
  path: `/${product.slug}`
});

export default function SynervaOsPage() {
  return <ProductPage product={product} />;
}
