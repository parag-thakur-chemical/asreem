"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerClose,
  DrawerTitle,
} from "@/components/ui/drawer";

const mainLinks = [
  { name: "Home", href: "/" },
  { name: "Keynote Speakers", href: "/keynote-speakers" },
  { name: "Call for Abstracts", href: "/call-for-abstracts" },
  { name: "Dates and Fees", href: "/dates-fees" },
  { name: "Sponsorships", href: "/sponsorships" },
  { name: "Publications & Awards", href: "/publications-awards" },
  { name: "Organizing Committee", href: "/organizing-committee" },
];

const moreLinks = [
  
  { name: "Advisory Committee", href: "/advisory-committee" },
  { name: "Tourist Spots", href: "/tourist-spots" },
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <header className="w-full  shadow sticky top-0 z-50 bg-white/80 backdrop-blur-sm">
      <nav className="w-full flex items-center justify-between px-6 py-3">
        {/* Left: Logo + Desktop Links */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/asreem-logo.png" alt="ASREEM Logo" width={40} height={40} />
            <span className="font-bold text-lg">ASREEM 2026</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-4 ">
            {mainLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-bold px-2 py-1 rounded transition-colors text-center ${
                  pathname === link.href
                    ? "bg-green-100 text-green-700"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="px-2 py-1">
                  More ▼
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                {moreLinks.map((link) => (
                  <DropdownMenuItem asChild key={link.name}>
                    <Link href={link.href}>{link.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Right: CTA */}
        <div className="hidden md:block">
          <Link href="/register">
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              Register
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <Drawer direction="right">
            <DrawerTrigger asChild>
              <Button variant="ghost" size="icon">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </DrawerTrigger>
            <DrawerContent className="w-64 max-w-full h-full p-0 flex flex-col">
              <DrawerTitle className="sr-only">Mobile Navigation</DrawerTitle>
              <div className="flex items-center justify-between px-6 py-4 border-b">
                <Link href="/" className="flex items-center gap-2">
                  <Image src="/asreem-logo.png" alt="ASREEM Logo" width={32} height={32} />
                  <span className="font-bold text-lg">ASREEM 2026</span>
                </Link>
                <DrawerClose asChild>
                  <Button variant="ghost" size="icon">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </Button>
                </DrawerClose>
              </div>

              {/* Mobile Nav Links */}
              <div className="flex flex-col gap-1 px-6 py-4">
                {[...mainLinks, ...moreLinks].map((link) => (
                  <DrawerClose asChild key={link.name}>
                      <Link
                        href={link.href}
                        className={`block px-2 py-2 rounded text-gray-700 font-medium w-full text-left ${
                          pathname === link.href ? "bg-green-100 text-green-700" : "hover:bg-gray-100"
                        }`}
                      >
                        {link.name}
                      </Link>
                  </DrawerClose>
                ))}
                <DrawerClose asChild>
                  <Button
                    className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => router.push("/register")}
                  >
                    Register
                  </Button>
                </DrawerClose>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </nav>
    </header>
  );
}
