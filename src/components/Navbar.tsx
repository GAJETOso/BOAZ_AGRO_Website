"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Divisions", href: "#divisions" },
  { label: "AgriTech", href: "#agritech" },
  { label: "Exports", href: "#exports" },
  { label: "Logistics", href: "#logistics" },
  { label: "Sustainability", href: "#circularity" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav id="navbar" className={scrolled ? "scrolled" : ""}>
      <a href="#hero" className="nav-logo">
        <div className="logo-mark">B</div>
        <div className="logo-text">
          <strong>BOAZ AGRO</strong>
          <span>Limited</span>
        </div>
      </a>

      <ul
        className="nav-links"
        style={
          menuOpen
            ? {
                display: "flex",
                flexDirection: "column",
                position: "fixed",
                top: 72,
                left: 0,
                right: 0,
                background: "rgba(10,34,18,0.98)",
                padding: "20px 5vw",
                gap: 20,
              }
            : undefined
        }
      >
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="https://boaz-agro-internal.vercel.app/"
            className="nav-staff"
            target="_blank"
            rel="noopener noreferrer"
          >
            🔒 Staff Portal
          </a>
        </li>
      </ul>

      <a href="#contact" className="nav-cta" style={menuOpen ? { display: "block" } : undefined}>
        Partner With Us
      </a>

      <div className="hamburger" onClick={() => setMenuOpen((o) => !o)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
