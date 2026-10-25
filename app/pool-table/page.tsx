import type { Metadata } from "next";
import PoolTables from "@/src/screens/PoolTables";

export const metadata: Metadata = {
  title: "Pool & snooker tables | OM Billiard",
  description: "Explore pool and snooker tables in the OM Billiard catalog.",
};

export default function PoolTablesPage() {
  return <PoolTables />;
}
