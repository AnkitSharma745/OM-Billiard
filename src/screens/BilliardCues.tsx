"use client";

import Stick from "../components/Stick";
import PageIntro from "../components/ui/PageIntro";

export default function BilliardCues() {
  return <><PageIntro eyebrow="Billiard equipment" title="Cue sticks" description="Browse the cue sticks currently listed in our catalog. Ask us about an item for further details." /><Stick showHeading={false} /></>;
}
