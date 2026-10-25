"use client";

import Stick from "../components/Stick";
import PageIntro from "../components/ui/PageIntro";
import EditorialImageSection from "../components/EditorialImageSection";
import CueImage from "../assets/Product_Category/Pool Stick.jpg";

export default function BilliardCues() {
  return <><PageIntro eyebrow="Billiard equipment" title="Cue sticks" description="Browse the cue sticks currently listed in our catalog. Ask us about an item for further details." /><Stick showHeading={false} /><EditorialImageSection eyebrow="Feel the difference" title="The cue is part of every shot." description="Browse the listed cue styles, then contact us about length, joint style or other details you need before choosing." image={CueImage} alt="Cue sticks displayed for billiards play" href="/#contact" action="Ask about cues" reverse /></>;
}
