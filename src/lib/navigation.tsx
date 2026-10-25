"use client";

import NextLink from "next/link";
import { useRouter } from "next/navigation";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import type { ProductDetails } from "./types";

type LinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  to: string;
  children: ReactNode;
};

export function Link({ to, ...props }: LinkProps) {
  return <NextLink href={to} {...props} />;
}

export function useNavigate() {
  const router = useRouter();
  return (href: string, options?: { state?: { details?: ProductDetails } }) => {
    if (options?.state && typeof window !== "undefined") {
      sessionStorage.setItem("om-billiard:navigation-state", JSON.stringify(options.state));
    }
    router.push(href);
  };
}

export function useLocation() {
  const router = useRouter();
  return { state: null as { details?: ProductDetails } | null, key: router.toString() };
}
