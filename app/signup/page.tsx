import type { Metadata } from "next";
import SignUp from "@/src/screens/SignUp";

export const metadata: Metadata = {
  title: "Create account | OM Billiard",
  description: "Account creation prototype for OM Billiard.",
};

export default function SignUpPage() {
  return <SignUp />;
}
