"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const mainLinks = [
  { name: 'Home', href: '/' },
  { name: 'Keynote Speakers', href: '/keynote-speakers' },
  { name: 'Call for Abstracts', href: '/call-for-abstracts' },
];

const moreLinks = [
  { name: 'Dates and Fees', href: '/dates-fees' },
  { name: 'Register', href: '/register' },
  { name: 'Publications and Awards', href: '/publications-awards' },
  { name: 'Organizing Committee', href: '/organizing-committee' },
  // Add more links as needed
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/asreem-logo.png" alt="ASREEM Logo" width={40} height={40} />
          <span className="font-bold text-lg hidden sm:inline">ASREEM 2025</span>
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2">
          {mainLinks.map(link => (
            <Link key={link.name} href={link.href} className="px-3 py-2 rounded hover:bg-gray-100 font-medium text-gray-700">
              {link.name}
            </Link>
          ))}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(v => !v)}
              className="px-3 py-2 rounded hover:bg-gray-100 font-medium text-gray-700 flex items-center gap-1"
            >
              More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-10">
                {moreLinks.filter(l => l.name !== 'Register').map(link => (
                  <Link key={link.name} href={link.href} className="block px-4 py-2 hover:bg-gray-100 text-gray-700">
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/register" className="ml-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 font-semibold transition">Register</Link>
        </div>
        {/* Mobile Nav */}
        <button
          className="md:hidden p-2 rounded hover:bg-gray-100"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
        {/* Drawer */}
        {mobileOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex">
            <div className="w-64 bg-white h-full shadow-lg p-6 flex flex-col gap-4">
              <div className="flex items-center justify-between mb-6">
                <Link href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
                  <Image src="/asreem-logo.png" alt="ASREEM Logo" width={32} height={32} />
                  <span className="font-bold text-lg">ASREEM 2025</span>
                </Link>
                <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
              {[...mainLinks, ...moreLinks].map(link => (
                <Link key={link.name} href={link.href} className="block px-2 py-2 rounded hover:bg-gray-100 text-gray-700 font-medium" onClick={() => setMobileOpen(false)}>
                  {link.name}
                </Link>
              ))}
              <Link href="/register" className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 font-semibold transition text-center" onClick={() => setMobileOpen(false)}>
                Register
              </Link>
            </div>
            <div className="flex-1" onClick={() => setMobileOpen(false)} />
          </div>
        )}
      </nav>
    </header>
  );
} 