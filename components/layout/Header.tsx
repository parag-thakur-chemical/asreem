"use client";

import { useEffect, useState } from "react";
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
import { motion } from "framer-motion";
import React  from "react";
const mainLinks = [
  { name: "Home", href: "/" },
  { name: "Keynote Speakers", href: "/keynote-speakers" },
  { name: "Invited Speakers", href: "/invited-speakers" },
  { name: "Dates and Fees", href: "/dates-fees" },
  { name: "Sponsorships", href: "/sponsorships" },
  { name: "Publications & Awards", href: "/publications-awards" },
  
];

const moreLinks = [
  { name: "Organizing Committee", href: "/organizing-committee" },
  { name: "Highlights of 2021", href: "/highlights" },
  { name: "Advisory Committee", href: "/advisory-committee" },
  { name: "Tourist Spots", href: "/tourist-spots" },
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [visible, setVisible] = useState(true);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setVisible(false); // scrolling down → hide
      } else {
        setVisible(true); // scrolling up → show
      }
      lastScrollY = window.scrollY;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY < 80) {
        setVisible(true); // if cursor near top of screen
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white backdrop-blur-sm shadow transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="w-full flex items-center justify-between px-6 py-3">
        {/* Left: Logo + Desktop Links */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/asreem-logo.png"
              alt="ASREEM Logo"
              width={40}
              height={40}
            />
            <span className="font-bold text-lg">ASREEM 2026</span>
          </Link>

          {/* Desktop Nav with animated highlight */}
<div className="hidden md:flex items-center  relative">
  {mainLinks.map((link) => {
    const isActive = pathname === link.href;

    return (
      <Link
        key={link.name}
        href={link.href}
        onMouseEnter={() => setHovered(link.name)}
        onMouseLeave={() => setHovered(null)}
        className={`relative px-3 py-2 font-bold rounded-md 
          ${isActive ? "text-green-700" : "text-gray-700 hover:text-gray-900"}`}
      >
        {/* Hover background */}
        {hovered === link.name && (
          <motion.div
            layoutId="nav-bg"
            className="absolute inset-0 rounded-md bg-gray-200 -z-10"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}

        {/* Active (current page) background */}
        {isActive && (
          <div className="absolute inset-0 rounded-md bg-green-100 -z-10" />
        )}

        {link.name}
      </Link>
    );
  })}

  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" className="px-4 py-1 cursor-pointer">
        More ▼
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="start">
      {moreLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <DropdownMenuItem
            className={`cursor-pointer ${isActive ? "bg-green-100 text-green-700" : ""}`}
            asChild
            key={link.name}
          >
            <Link href={link.href}>{link.name}</Link>
          </DropdownMenuItem>
        );
      })}
    </DropdownMenuContent>
  </DropdownMenu>
</div>


        </div>

        {/* Right: CTA */}
        <div className="hidden md:block">
          <Link href="/register">
            <Button className="bg-green-600 hover:bg-green-700 text-white cursor-pointer">
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </Button>
            </DrawerTrigger>
            <DrawerContent className="w-64 max-w-full h-full p-0 flex flex-col">
              <DrawerTitle className="sr-only">
                Mobile Navigation
              </DrawerTitle>
              <div className="flex items-center justify-between px-6 py-4 border-b">
                <Link href="/" className="flex items-center gap-2">
                  <Image
                    src="/asreem-logo.png"
                    alt="ASREEM Logo"
                    width={32}
                    height={32}
                  />
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
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
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
                        pathname === link.href
                          ? "bg-green-100 text-green-700"
                          : "hover:bg-gray-100"
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
