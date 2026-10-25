"use client";

import PoolTable from "../components/PoolTable";
import PageIntro from "../components/ui/PageIntro";

export default function PoolTables() {
  return (
    <>
      <PageIntro
        eyebrow="Pool & snooker"
        title="Tables made for your space."
        description="Explore the tables in our current catalog. Contact us to discuss a model, dimensions or installation details."
      />
      <PoolTable showHeading={false} />
    </>
  );
}
