import type { Metadata } from "next";
import Product from "@/src/screens/productPage/Product";

export const metadata: Metadata = {
  title: "Shop billiards, snooker tables, cues and accessories | OM Billiard",
  description: "Browse pool and snooker tables, billiard balls, cue sticks and accessories from OM Billiard.",
};

export default function ProductsPage() {
  return <Product />;
}
