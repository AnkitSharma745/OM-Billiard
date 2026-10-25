import Brands from "@/src/screens/Brands";
import { pageMetadata } from "@/src/lib/site";

export const metadata = pageMetadata("Billiards Brands", "Explore billiards brands represented in the OM Billiard catalog.", "/brands");

export default function BrandsPage() {
  return <Brands />;
}
