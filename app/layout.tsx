import type { Metadata } from "next";
import type { ReactNode } from "react";
import NavBar from "@/src/components/NavBar";
import Footer from "@/src/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Om Billiard - Premium Pool Tables",
  description: "Explore premium pool tables, cues, and accessories at Om Billiard.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <div className="flex min-h-screen flex-col">
        <NavBar />
        <div className="flex-1">{children}</div>
        <Footer />
        </div>
      </body>
    </html>
  );
}
