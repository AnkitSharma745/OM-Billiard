import Services from "@/src/screens/Services";
import { pageMetadata } from "@/src/lib/site";

export const metadata = pageMetadata("Pool Table Installation, Maintenance & Design", "Explore pool and foosball table installation, maintenance, and custom design services.", "/services");

export default function ServicesPage() {
  return <Services />;
}
