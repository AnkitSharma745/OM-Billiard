import type { Metadata } from "next";
import type { ReactNode } from "react";
import NavBar from "@/src/components/NavBar";
import Footer from "@/src/components/Footer";
import { absoluteUrl, jsonLd, siteName, siteUrl } from "@/src/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "OM Billiard | Pool Tables, Cues & Billiard Equipment", template: "%s | OM Billiard" },
  description: "Explore pool and snooker tables, cues, billiard balls, accessories, installation and maintenance from OM Billiard in Noida.",
  applicationName: siteName,
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_IN", siteName, url: siteUrl, title: "OM Billiard | Pool Tables, Cues & Billiard Equipment", description: "Tables, equipment and support for the game room you have in mind.", images: [{ url: absoluteUrl("/opengraph-image"), alt: siteName }] },
  twitter: { card: "summary_large_image", title: "OM Billiard", description: "Pool tables, cues, billiard equipment and services.", images: [absoluteUrl("/opengraph-image")] },
  robots: { index: true, follow: true },
};

const storeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Store",
      "@id": absoluteUrl("/#store"),
      name: siteName,
      url: siteUrl,
      telephone: "+91-9810508355",
      email: "askombilliard@gmail.com",
      address: { "@type": "PostalAddress", streetAddress: "Gali No. 2, FNG Vihar 2, near Garhi, Chokhandi, Sector 121", addressLocality: "Noida", addressRegion: "Uttar Pradesh", postalCode: "201309", addressCountry: "IN" },
      openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "09:00", closes: "19:00" },
      sameAs: ["https://www.instagram.com/ombilliardofficial/", "https://www.facebook.com/Ombilliardofficial"],
    },
    { "@type": "WebSite", "@id": absoluteUrl("/#website"), name: siteName, url: siteUrl, publisher: { "@id": absoluteUrl("/#store") }, inLanguage: "en-IN" },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <a href="#main-content" className="sr-only fixed left-4 top-4 z-toast rounded-full bg-surface px-5 py-3 font-semibold text-ink shadow-card focus:not-sr-only">Skip to content</a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(storeSchema) }} />
        <div className="flex min-h-screen flex-col">
          <NavBar />
          <div id="main-content" className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
