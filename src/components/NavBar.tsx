"use client";

import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import { Link } from "../lib/navigation";
import { ButtonLink } from "./ui/Button";

const navigation = [
  { name: "Products", href: "/products" },
  { name: "Pool tables", href: "/pool-table" },
  { name: "Billiard balls", href: "/billiard-balls" },
  { name: "Cues", href: "/billiard-cue" },
  { name: "Services", href: "/services" },
  { name: "Brands", href: "/brands" },
];

function isCurrent(pathname: string, href: string) {
  return href === "/products"
    ? pathname === href || pathname.startsWith(`${href}/`)
    : pathname === href || pathname.startsWith(`${href}/`);
}

export default function NavBar() {
  const pathname = usePathname();

  return (
    <Disclosure as="header" className="sticky top-0 z-header border-b border-line bg-surface/95 backdrop-blur">
      {({ open }) => (
        <>
          <div className="page-shell flex min-h-16 items-center justify-between gap-5 py-2 lg:min-h-[5.25rem]">
            <Link to="/" className="group flex shrink-0 items-center gap-3" aria-label="OM Billiard home">
              <span className="grid h-10 w-10 place-items-center rounded-full border border-sand bg-bg font-display text-base font-bold text-ink transition-colors group-hover:bg-surface-2" aria-hidden="true">OM</span>
              <span className="font-display text-lg font-semibold tracking-tight text-ink sm:text-xl">OM Billiard</span>
            </Link>

            <nav aria-label="Main navigation" className="hidden flex-1 items-center justify-center gap-1 lg:flex">
              {navigation.map((item) => {
                const current = isCurrent(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    aria-current={current ? "page" : undefined}
                    className={`rounded-full px-3 py-2 text-sm font-medium transition-colors duration-fast ease-standard ${current ? "bg-surface-2 text-ink" : "text-muted hover:bg-bg hover:text-ink"}`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden shrink-0 items-center gap-2 lg:flex">
              <ButtonLink href="/products" size="sm">Explore products</ButtonLink>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <Disclosure.Button className="grid h-11 w-11 place-items-center rounded-full border border-line bg-surface text-ink transition-colors hover:bg-bg" aria-label={open ? "Close navigation menu" : "Open navigation menu"}>
                {open ? <XMarkIcon className="h-5 w-5" aria-hidden="true" /> : <Bars3Icon className="h-5 w-5" aria-hidden="true" />}
              </Disclosure.Button>
            </div>
          </div>

          <Disclosure.Panel className="border-t border-line bg-surface lg:hidden">
            <nav aria-label="Mobile navigation" className="page-shell grid gap-1 py-3">
              {navigation.map((item) => {
                const current = isCurrent(pathname, item.href);
                return (
                  <Disclosure.Button
                    key={item.href}
                    as={Link}
                    to={item.href}
                    aria-current={current ? "page" : undefined}
                    className={`min-h-12 rounded-lg px-4 py-3 text-base font-medium ${current ? "bg-surface-2 text-ink" : "text-muted hover:bg-bg hover:text-ink"}`}
                  >
                    {item.name}
                  </Disclosure.Button>
                );
              })}
              <ButtonLink href="/products" size="md" className="mt-2 w-full">Explore products</ButtonLink>
            </nav>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
