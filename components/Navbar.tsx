"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/95 backdrop-blur-xl border-b border-zinc-800/80 py-3 shadow-2xl shadow-black/50"
          : "bg-black/92 backdrop-blur-lg py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-[#F5B800] rounded-lg flex items-center justify-center group-hover:bg-[#ffaa00] transition-colors duration-300 shadow-md">
            <Zap size={22} className="text-black fill-black" />
          </div>
          <div className="leading-tight select-none">
            <div className="flex items-baseline gap-1">
              <span className="font-bold text-2xl tracking-wider text-white drop-shadow-sm">
                SENOT
              </span>
              <span className="font-bold text-2xl tracking-wider text-[#FFD700] drop-shadow-[0_1px_6px_rgba(245,184,0,0.6)]">
                RAMS
              </span>
            </div>
            <div className="text-[10px] font-medium tracking-[0.28em] text-[#FFD700]/75 uppercase -mt-1">
              Digital Store
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-medium text-sm tracking-wider uppercase text-zinc-300 hover:text-[#FFD700] transition-all duration-200 hover:drop-shadow-[0_0_8px_rgba(255,215,0,0.35)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="https://wa.me/255683073428"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-[#25D366] hover:bg-[#1da851] text-black font-bold text-sm tracking-wide rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-green-900/40"
        >
          WhatsApp Us
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2 -mr-2"
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-zinc-800/80 px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-lg font-semibold uppercase tracking-wide text-zinc-100 hover:text-[#FFD700] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/255683073428"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-6 py-4 bg-[#25D366] hover:bg-[#1da851] text-black font-bold text-base tracking-wide rounded-full text-center transition-all shadow-lg shadow-green-900/30"
          >
            WhatsApp Us
          </a>
        </div>
      )}
    </header>
  );
}