import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetail from "@/src/components/ProductDetail";
import { findTableProduct, tableStaticParams } from "@/src/lib/catalog";

type Props = { params: Promise<{ productId: string }> };

export function generateStaticParams() {
  return tableStaticParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { productId } = await params;
  const product = findTableProduct(productId);
  if (!product) return { title: "Table not found", robots: { index: false, follow: true } };
  return { title: product.name, description: product.description, alternates: { canonical: `/pool-table/${product.id}` } };
}

export default async function ProductDetailAliasPage({ params }: Props) {
  const { productId } = await params;
  if (!findTableProduct(productId)) notFound();
  return <ProductDetail />;
}
