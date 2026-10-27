"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const LINKS_BEFORE_TOOLS = [
  { href: "/", label: "Home" },
  { href: "/contractors", label: "Contractors" },
  { href: "/blog", label: "Blog" },
];
const TOOLS_LINKS = [
  { href: "/tools/contractor-finder", label: "Finder" },
];
const LINKS_AFTER_TOOLS = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

// Site header. Desktop (md and up) renders the inline nav with a
// click-to-open Tools dropdown. Below md, links collapse into a hamburger
// button toggling a dropdown panel, with Tools as an expandable section.
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [mobileToolsOpen, setMobileToolsOpen] = useState(false);
  const toolsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!toolsOpen) return;
    const onMouseDown = (ev: MouseEvent) => {
      if (toolsRef.current && !toolsRef.current.contains(ev.target as Node)) {
        setToolsOpen(false);
      }
    };
    const onKeyDown = (ev: KeyboardEvent) => {
      if (ev.key === "Escape") setToolsOpen(false);
    };
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [toolsOpen]);

  const closeMobileMenu = () => {
    setOpen(false);
    setMobileToolsOpen(false);
  };

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-bold text-slate-900">
          FedTalent<span className="text-blue-600">USA</span>
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-medium text-slate-600 md:flex">
          {LINKS_BEFORE_TOOLS.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-blue-700">
              {l.label}
            </Link>
          ))}
          <div ref={toolsRef} className="relative">
            <button
              type="button"
              className="rounded-lg px-1 py-0.5 hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-blue-600"
              aria-haspopup="true"
              aria-expanded={toolsOpen}
              aria-controls="tools-menu"
              onClick={() => setToolsOpen((o) => !o)}
            >
              Tools {toolsOpen ? "▴" : "▾"}
            </button>
            {toolsOpen && (
              <div
                id="tools-menu"
                className="absolute left-0 top-full z-50 mt-2 w-48 rounded-lg border border-slate-200 bg-white py-1 shadow-lg"
              >
                {TOOLS_LINKS.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="block px-4 py-2 text-sm font-medium text-slate-600 hover:bg-blue-50 hover:text-blue-700"
                    onClick={() => setToolsOpen(false)}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {LINKS_AFTER_TOOLS.map((l) => (
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
          {LINKS_BEFORE_TOOLS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block py-2 text-sm font-medium text-slate-600 hover:text-blue-700"
              onClick={closeMobileMenu}
            >
              {l.label}
            </Link>
          ))}
          <button
            type="button"
            className="flex w-full items-center justify-between py-2 text-left text-sm font-medium text-slate-600 hover:text-blue-700"
            aria-expanded={mobileToolsOpen}
            aria-controls="mobile-tools-submenu"
            onClick={() => setMobileToolsOpen((o) => !o)}
          >
            Tools <span>{mobileToolsOpen ? "▴" : "▾"}</span>
          </button>
          {mobileToolsOpen && (
            <div id="mobile-tools-submenu">
              {TOOLS_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="block py-2 pl-4 text-sm font-medium text-slate-600 hover:text-blue-700"
                  onClick={closeMobileMenu}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          )}
          {LINKS_AFTER_TOOLS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block py-2 text-sm font-medium text-slate-600 hover:text-blue-700"
              onClick={closeMobileMenu}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
