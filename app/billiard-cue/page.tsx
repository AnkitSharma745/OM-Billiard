import type { Metadata } from "next";
import BilliardCues from "@/src/screens/BilliardCues";

export const metadata: Metadata = {
  title: "Cue sticks | OM Billiard",
  description: "Explore cue sticks currently listed in the OM Billiard catalog.",
};

export default function BilliardCuesPage() {
  return <BilliardCues />;
}
