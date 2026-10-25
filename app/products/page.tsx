import Product from "@/src/screens/productPage/Product";
import { pageMetadata } from "@/src/lib/site";

export const metadata = pageMetadata("Pool Tables, Cues & Billiard Equipment", "Browse pool and snooker tables, billiard balls, cue sticks and accessories from OM Billiard.", "/products");

export default function ProductsPage() {
  return <Product />;
}
