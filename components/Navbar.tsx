"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Diensten", href: "#diensten" },
  { label: "Work", href: "#work" },
  { label: "Over Ons", href: "#over-ons" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? "border-b border-gray-100 shadow-sm" : ""
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span
            className="font-syne text-xl text-[#0A0F2C]"
            style={{ fontWeight: 800, lineHeight: 1 }}
          >
            The<span className="text-[#0057FF]">Loop</span>
          </span>
          <span
            className="font-syne text-[9px] tracking-[0.18em] uppercase text-gray-400"
            style={{ fontWeight: 600 }}
          >
            Marketing Agency
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-dm text-sm font-medium text-gray-600 hover:text-[#0057FF] transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            className="bg-[#0057FF] text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-blue-700 transition-colors duration-200"
          >
            Gratis Audit
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu openen"
        >
          <span
            className={`block h-0.5 w-6 bg-[#0A0F2C] transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#0A0F2C] transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#0A0F2C] transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 pb-6 pt-4">
          <ul className="flex flex-col gap-4 mb-5">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-gray-700 hover:text-[#0057FF]"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="inline-block bg-[#0057FF] text-white text-sm font-medium px-5 py-2.5 rounded-full"
            onClick={() => setMenuOpen(false)}
          >
            Gratis Audit
          </a>
        </div>
      )}
    </header>
  );
}
