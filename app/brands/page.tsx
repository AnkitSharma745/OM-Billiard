import type { Metadata } from "next";
import Brands from "@/src/screens/Brands";

export const metadata: Metadata = {
  title: "Brands | OM Billiard",
  description: "Explore billiards brands represented in the OM Billiard catalog.",
};

export default function BrandsPage() {
  return <Brands />;
}
