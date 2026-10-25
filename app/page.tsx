import type { Metadata } from "next";
import Home from "@/src/screens/Home";

export const metadata: Metadata = {
  title: { absolute: "OM Billiard | Pool Tables, Cues & Billiard Equipment" },
  description: "Explore pool and snooker tables, cues, billiard balls and accessories from OM Billiard in Noida. Ask about installation, maintenance and refurbished tables.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return <Home />;
}
