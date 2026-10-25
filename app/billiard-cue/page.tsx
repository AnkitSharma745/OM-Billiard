import BilliardCues from "@/src/screens/BilliardCues";
import { pageMetadata } from "@/src/lib/site";

export const metadata = pageMetadata("Pool & Snooker Cues", "Explore cue sticks currently listed in the OM Billiard catalog.", "/billiard-cue");

export default function BilliardCuesPage() {
  return <BilliardCues />;
}
