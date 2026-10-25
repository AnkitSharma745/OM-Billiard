"use client";

import Balls from "../components/Balls";
import PageIntro from "../components/ui/PageIntro";

export default function BilliardBalls() {
  return <><PageIntro eyebrow="Billiard equipment" title="Billiard balls" description="Explore ball sets and current catalog pricing. Send an inquiry if you need more information about a set." /><Balls showHeading={false} /></>;
}
