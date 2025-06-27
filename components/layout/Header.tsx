"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
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
} from "@/components/ui/drawer";

const mainLinks = [
  { name: "Home", href: "/" },
  { name: "Keynote Speakers", href: "/keynote-speakers" },
  { name: "Call for Abstracts", href: "/call-for-abstracts" },
  { name: "Dates and Fees", href: "/dates-fees" },
];

const moreLinks = [
  { name: "Register", href: "/register" },
  { name: "Publications and Awards", href: "/publications-awards" },
  { name: "Organizing Committee", href: "/organizing-committee" },
  { name: "About the Conference", href: "/about-conference" },
  // Add more links as needed
];

export default function Header() {
  return (
    <header className="w-full bg-white shadow sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/asreem-logo.png"
            alt="ASREEM Logo"
            width={40}
            height={40}
          />
          <span className="font-bold text-lg hidden sm:inline">
            ASREEM 2026
          </span>
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2">
          {mainLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-3 py-2 rounded hover:bg-gray-100 font-medium text-gray-700"
            >
              {link.name}
            </Link>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="px-3 py-2 font-medium text-gray-700 flex items-center gap-1"
              >
                More
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {moreLinks
                .filter((l) => l.name !== "Register")
                .map((link) => (
                  <DropdownMenuItem asChild key={link.name}>
                    <Link href={link.href} className="w-full text-left">
                      {link.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/register">
            <Button className="ml-4 btn-organic">Register</Button>
          </Link>
        </div>
        {/* Mobile Nav */}
        <Drawer direction="right">
          <DrawerTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
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
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <Link
                href="/"
                className="flex items-center gap-2"
                onClick={() => {}}
              >
                <Image
                  src="/asreem-logo.png"
                  alt="ASREEM Logo"
                  width={32}
                  height={32}
                />
                <span className="font-bold text-lg">ASREEM 2025</span>
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
            <div className="flex flex-col gap-1 px-6 py-4">
              {[...mainLinks, ...moreLinks].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-2 py-2 rounded hover:bg-gray-100 text-gray-700 font-medium"
                >
                  {link.name}
                </Link>
              ))}
              <Link href="/register" className="mt-4">
                <Button className="w-full" variant="default">
                  Register
                </Button>
              </Link>
            </div>
          </DrawerContent>
        </Drawer>
      </nav>
    </header>
  );
}
