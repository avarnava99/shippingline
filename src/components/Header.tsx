"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Anchor } from "lucide-react";

const NAV_LINKS = [
  { href: "#quote", label: "Get Quote" },
  { href: "#schedule", label: "Schedule" },
  { href: "#pricing", label: "Pricing" },
  { href: "#about", label: "About" },
  { href: "#investors", label: "Investors" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy-950/95 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-ocean-500 rounded-lg flex items-center justify-center">
              <Anchor className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-white font-bold text-lg tracking-tight">
                ShippingLine
              </span>
              <span className="text-ocean-300 text-xs block -mt-1 tracking-widest uppercase">
                Mediterranean
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-300 hover:text-white text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#quote"
              className="bg-ocean-500 hover:bg-ocean-400 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors"
            >
              Book Now
            </a>
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <nav className="md:hidden pb-4 pt-2 border-t border-white/10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-slate-300 hover:text-white text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#quote"
              onClick={() => setOpen(false)}
              className="mt-2 block text-center bg-ocean-500 hover:bg-ocean-400 text-white px-5 py-2 rounded-lg text-sm font-semibold"
            >
              Book Now
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
