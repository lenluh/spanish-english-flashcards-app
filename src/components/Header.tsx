"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems } from "@/data/siteContent";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "border-b border-zinc-900/10 bg-[#f5f1eb]/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 md:px-10">
        <Link
          href="#"
          className="font-serif text-lg tracking-[0.18em] text-zinc-900 uppercase"
        >
          Atelier Nove
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-9 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm tracking-wide text-zinc-700 transition-colors hover:text-zinc-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#contact"
          className="rounded-full border border-zinc-900/30 px-5 py-2 text-xs tracking-[0.14em] text-zinc-900 uppercase transition hover:border-zinc-900 hover:bg-zinc-900 hover:text-[#f5f1eb]"
        >
          Start a Project
        </Link>
      </div>
    </header>
  );
}
