import type { MetadataRoute } from "next";
import PoolTableData from "@/src/Data/poolTable";
import { absoluteUrl } from "@/src/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/products", "/pool-table", "/billiard-balls", "/billiard-cue", "/brands", "/services"];
  return [
    ...pages.map((path) => ({ url: absoluteUrl(path) })),
    ...PoolTableData.map((product) => ({ url: absoluteUrl(`/pool-table/${product.id}`) })),
  ];
}
