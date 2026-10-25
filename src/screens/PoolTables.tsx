"use client";

import PoolTable from "../components/PoolTable";
import PageIntro from "../components/ui/PageIntro";
import TableDiscovery from "../components/TableDiscovery";
import EditorialImageSection from "../components/EditorialImageSection";
import TableImage from "../assets/Products/AmericanPoolTable1.jpg";

export default function PoolTables() {
  return (
    <>
      <PageIntro
        eyebrow="Pool & snooker"
        title="Tables made for your space."
        description="Explore the tables in our current catalog. Contact us to discuss a model, dimensions or installation details."
      />
      <TableDiscovery />
      <PoolTable showHeading={false} />
      <EditorialImageSection eyebrow="Plan the room" title="The best table starts with the space around it." description="Table dimensions are only one part of the decision. Share your room measurements and access details with our team before choosing a model or planning installation." image={TableImage} alt="Pool table with cues and a rack of balls" href="/#contact" action="Discuss your space" />
    </>
  );
}
