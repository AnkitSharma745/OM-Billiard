import PoolTables from "@/src/screens/PoolTables";
import { pageMetadata } from "@/src/lib/site";

export const metadata = pageMetadata("Pool & Snooker Tables", "Compare OM Billiard pool and snooker tables, recorded sizes and listed prices. Ask about installation and the right table for your space.", "/pool-table");

export default function PoolTablesPage() {
  return <PoolTables />;
}
