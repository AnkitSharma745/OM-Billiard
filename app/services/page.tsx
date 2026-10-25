import type { Metadata } from "next";
import Services from "@/src/screens/Services";

export const metadata: Metadata = {
  title: "Table services | OM Billiard",
  description: "Explore pool and foosball table installation, maintenance, and custom design services.",
};

export default function ServicesPage() {
  return <Services />;
}
