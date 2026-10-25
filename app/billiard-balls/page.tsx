import type { Metadata } from "next";
import BilliardBalls from "@/src/screens/BilliardBalls";

export const metadata: Metadata = {
  title: "Billiard balls | OM Billiard",
  description: "Browse billiard ball sets in the OM Billiard catalog.",
};

export default function BilliardBallsPage() {
  return <BilliardBalls />;
}
