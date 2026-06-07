"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="site-header fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-neutral-700 rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-neutral-400 rounded-full relative">
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-neutral-400 rounded-full"></div>
              </div>
            </div>
          </Link>

          {/* Navigation */}
          <div className="flex gap-2 items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setActiveSection(item.name.toLowerCase())}
                className={`px-6 py-2 rounded transition-colors ${
                  activeSection === item.name.toLowerCase()
                    ? "bg-neutral-700 text-white"
                    : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}