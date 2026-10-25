import type { Metadata } from "next";
import SignUp from "@/src/screens/SignUp";

export const metadata: Metadata = {
  title: "Create account",
  description: "Account creation prototype for OM Billiard.",
  robots: { index: false, follow: false },
};

export default function SignUpPage() {
  return <SignUp />;
}
