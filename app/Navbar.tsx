"use client";

import { useState } from "react";
import Link from "next/link";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/contractors", label: "Contractors" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

// Site header. Desktop (md and up) renders exactly the previous inline nav.
// Below md, links collapse into a hamburger button toggling a dropdown panel.
export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-bold text-slate-900">
          FedTalent<span className="text-blue-600">USA</span>
        </Link>
        <nav className="hidden gap-5 text-sm font-medium text-slate-600 md:flex">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-blue-700">
              {l.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-slate-200 px-4 py-2 md:hidden"
        >
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block py-2 text-sm font-medium text-slate-600 hover:text-blue-700"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
