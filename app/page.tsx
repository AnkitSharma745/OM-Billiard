import type { Metadata } from "next";
import Home from "@/src/screens/Home";

export const metadata: Metadata = {
  title: "OM Billiard | Pool Tables, Cues & Billiard Equipment",
  description: "Explore pool tables, billiard balls, cues and services from OM Billiard.",
};

export default function HomePage() {
  return <Home />;
}
