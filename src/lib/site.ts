import type { Metadata } from "next";

export const siteUrl = "https://www.ombilliard.in";
export const siteName = "OM Billiard";

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

export function jsonLd(value: Record<string, unknown>) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const fullTitle = `${title} | ${siteName}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type: "website", locale: "en_IN", siteName, title: fullTitle, description, url: absoluteUrl(path), images: [{ url: absoluteUrl("/opengraph-image"), alt: siteName }] },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [absoluteUrl("/opengraph-image")] },
  };
}
