import BilliardBalls from "@/src/screens/BilliardBalls";
import { pageMetadata } from "@/src/lib/site";

export const metadata = pageMetadata("Billiard Balls & Sets", "Browse billiard ball sets in the OM Billiard catalog.", "/billiard-balls");

export default function BilliardBallsPage() {
  return <BilliardBalls />;
}
