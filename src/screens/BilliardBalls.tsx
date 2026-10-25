"use client";

import Balls from "../components/Balls";
import PageIntro from "../components/ui/PageIntro";
import EditorialImageSection from "../components/EditorialImageSection";
import BallsImage from "../assets/Product_Category/Balls.jpg";

export default function BilliardBalls() {
  return <><PageIntro eyebrow="Billiard equipment" title="Billiard balls" description="Explore ball sets and current catalog pricing. Send an inquiry if you need more information about a set." /><Balls showHeading={false} /><EditorialImageSection eyebrow="The right set for your game" title="Every break begins with the right ball set." description="Tell us whether you play pool or snooker and which table you use. We can help you discuss the sets listed in the catalog." image={BallsImage} alt="Billiard balls grouped on a table" href="/#contact" action="Ask about ball sets" /></>;
}
