"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "#how-it-works" },
  { label: "Solutions", href: "#features" },
  { label: "Partners", href: "#testimonials" },
  { label: "Contact Us", href: "#contact" },
];

function FinmetLogo() {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <Image
        src="/brand/main-logo.png"
        width={100}
        height={60}
        alt="Finmet Logo"
        className="h-20 w-auto object-contain"
      />
    </Link>
  );
}

function ArrowUpRight() {
  return (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
      <path
        d="M2 9L9 2M9 2H3.5M9 2V7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#f0f0ee] border-b border-gray-200/60 py-2">
      <nav className="mx-auto flex h-[60px] max-w-7xl items-center justify-between px-6">
        <FinmetLogo />

        <div className="flex items-center gap-6">
          <ul className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-base tracking-widest text-gray-500 hover:text-gray-900 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="#get-started"
            className="hidden md:flex items-center gap-2 bg-[#1B3BFF] text-white text-base font-medium px-4 py-2 hover:bg-[#1530d4] transition-colors"
          >
           Talk to Us
            <ArrowUpRight />
          </Link>

        </div>
        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-[#f0f0ee] border-t border-gray-200/60 px-6 pb-6 pt-4">
          <ul className="flex flex-col gap-4 mb-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[11px] font-medium tracking-widest text-gray-500 hover:text-gray-900 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="#get-started"
            className="inline-flex items-center gap-2 bg-[#1B3BFF] text-white text-[13px] font-medium px-4 py-2 rounded-md"
            onClick={() => setOpen(false)}
          >
            Talk to Us
            <ArrowUpRight />
          </Link>
        </div>
      )}
    </header>
  );
}
