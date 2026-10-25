import type { Metadata } from "next";
import Login from "@/src/screens/Login";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign-in prototype for OM Billiard.",
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return <Login />;
}
