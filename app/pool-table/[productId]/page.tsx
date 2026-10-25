import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetail from "@/src/components/ProductDetail";
import { findTableProduct, tableStaticParams } from "@/src/lib/catalog";
import { parsePrice } from "@/src/lib/price";
import { absoluteUrl, jsonLd } from "@/src/lib/site";

type Props = { params: Promise<{ productId: string }> };

export function generateStaticParams() {
  return tableStaticParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { productId } = await params;
  const product = findTableProduct(productId);
  if (!product) return { title: "Table not found", robots: { index: false, follow: true } };
  const canonical = `/pool-table/${product.id}`;
  return {
    title: product.name,
    description: `${product.description} View the listed ${product.details.size.join(", ")} size and ask OM Billiard about this table.`,
    alternates: { canonical },
    openGraph: { title: `${product.name} | OM Billiard`, description: product.description, url: canonical, images: [{ url: product.img.src, alt: product.name }] },
    twitter: { card: "summary_large_image", title: `${product.name} | OM Billiard`, description: product.description, images: [product.img.src] },
  };
}

export default async function PoolTableDetailPage({ params }: Props) {
  const { productId } = await params;
  const product = findTableProduct(productId);
  if (!product) notFound();
  const url = absoluteUrl(`/pool-table/${product.id}`);
  const price = parsePrice(product.details.price.current);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: absoluteUrl(product.img.src),
    url,
    category: product.category,
    ...(price !== null ? { offers: { "@type": "Offer", url, priceCurrency: "INR", price, seller: { "@type": "Organization", name: "OM Billiard" } } } : {}),
  };
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Pool tables", item: absoluteUrl("/pool-table") },
      { "@type": "ListItem", position: 3, name: product.name, item: url },
    ],
  };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbs) }} /><ProductDetail /></>;
}
