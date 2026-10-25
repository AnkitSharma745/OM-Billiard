/* eslint-disable react/prop-types */
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "../lib/navigation";

const navigation = [
  { name: "Products", href: "/products", current: false },
  { name: "Services", href: "/services", current: false },
  { name: "Brands", href: "/brands", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  return (
    <Disclosure
      as="nav"
      className="shadow-lg w-[98%] mx-auto mt-2 rounded-3xl bg-white border-2 border-transparent bg-clip-padding hover:border-gradient-to-r from-indigo-400 via-pink-500 to-teal-400 transition duration-500 ease-in-out sticky top-0 z-50"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Logo at the left corner */}
              <div className="flex-shrink-0">
                <h4
                  className="text-2xl sm:text-3xl font-semibold tracking-widest relative transition-all duration-500 ease-in-out transform hover:scale-105"
                  style={{
                    color: "#1A202C", // Dark gray for more contrast
                    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.15)", // Soft shadow to make the text pop
                  }}
                >
                  OM Billiard
                </h4>
              </div>

              {/* Centered links for larger screens */}
              <div className="hidden sm:flex justify-center flex-1 space-x-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-700 hover:bg-gradient-to-r from-[#117D6A] via-[#117D6A] to-[#072079] hover:text-white transition-all duration-300 ease-in-out",
                      "rounded-md px-4 py-2 text-base font-semibold"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* "Get Started" button for larger screens */}
              <div className="hidden sm:flex">
                <Link
                  to="/products"
                  className="rounded-full bg-gradient-to-r from-[#117D6A] via-[#117D6A] to-[#072079] text-white px-5 py-2 text-base font-semibold hover:bg-gradient-to-l transition-all duration-300 ease-in-out"
                  style={{ color: "#ffffff" }} // Keep text white to contrast the gradient
                >
                  Get Started
                </Link>
              </div>

              {/* Mobile menu button (hamburger) for small screens */}
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile navigation (shown when menu is open) */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  to={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-700 hover:bg-gradient-to-r from-indigo-300 via-pink-300 to-teal-300 hover:text-white transition-all duration-300 ease-in-out",
                    "block rounded-md px-3 py-2 text-base font-semibold"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <Link
                to="/product"
                className="block rounded-full bg-gradient-to-r from-[#117D6A] via-[#117D6A] to-[#072079] text-white px-4 py-2 text-base font-semibold text-center hover:bg-gradient-to-l transition-all duration-300 ease-in-out"
              >
                Get Started
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}


