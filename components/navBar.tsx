"use client";

import { useState, useEffect } from "react";
import icons from "@/constants/icons";

const NAV_LINKS = [
  { id: "home", label: "HOME", icon: icons.home },
  { id: "about", label: "ABOUT ME", icon: icons.about },
  { id: "skills", label: "SKILLS", icon: icons.skills },
  { id: "project", label: "PROJECT", icon: icons.project },
  { id: "certificate", label: "CERTIFICATE", icon: icons.certificate },
  { id: "timeline", label: "TIMELINE", icon: icons.timeline },
  { id: "contact", label: "CONTACT ME", icon: icons.contact },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Detect scroll to add stronger glass blur on scroll
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Apply dark mode class to <html>
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <>
      {/* ── Global font import ─────────────────────────────────────── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@500;700&family=Nunito:wght@400;600;700&display=swap');

        :root {
          --accent: #818cf8; /* indigo-400 */
          --accent-glow: rgba(129,140,248,0.35);
        }

        /* Active tab underline grows from centre */
        .nav-link .underline-bar {
          transform: scaleX(0);
          transition: transform 0.25s ease;
          transform-origin: center;
        }
        .nav-link.is-active .underline-bar {
          transform: scaleX(1);
        }
        .nav-link.is-active span {
          color: var(--accent);
        }

        /* Hover tint on inactive links */
        .nav-link:not(.is-active):hover span {
          color: #a5b4fc;
        }
        .nav-link:not(.is-active):hover .underline-bar {
          transform: scaleX(0.5);
          opacity: 0.5;
        }

        /* Toggle button wobble */
        @keyframes wobble {
          0%,100%{ transform: rotate(0deg); }
          25%{ transform: rotate(-12deg); }
          75%{ transform: rotate(12deg); }
        }
        .toggle-btn:active svg {
          animation: wobble 0.4s ease;
        }

        /* Glassmorphism card */
        .glass {
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(16px) saturate(180%);
          -webkit-backdrop-filter: blur(16px) saturate(180%);
          border: 1px solid rgba(255,255,255,0.22);
        }
        .dark .glass {
          background: rgba(15,15,30,0.45);
          border: 1px solid rgba(255,255,255,0.08);
        }
        .glass.scrolled-glass {
          backdrop-filter: blur(28px) saturate(200%);
          -webkit-backdrop-filter: blur(28px) saturate(200%);
        }

        /* Mobile menu slide-down */
        @keyframes slideDown {
          from{ opacity:0; transform:translateY(-8px); }
          to  { opacity:1; transform:translateY(0); }
        }
        .mobile-menu {
          animation: slideDown 0.22s ease forwards;
        }

        /* Mona logo font */
        .logo-font { font-family: 'Caveat', cursive; }
        /* Nav labels */
        .nav-font  { font-family: 'Nunito', sans-serif; }
      `}</style>

      {/* ── Navbar ─────────────────────────────────────────────────── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass ${
          scrolled ? "scrolled-glass shadow-lg" : "shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* ── Logo ─────────────────────────────────────────────── */}
            <a
              href="#"
              onClick={() => setActive("home")}
              className="logo-font text-3xl font-bold select-none tracking-tight"
              style={{
                background: "linear-gradient(135deg, #818cf8 0%, #c084fc 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "none",
              }}
            >
              Mona
              <span
                className="inline-block w-1.5 h-1.5 rounded-full ml-0.5 mb-3"
                style={{ background: "#c084fc", verticalAlign: "bottom" }}
              />
            </a>

            {/* ── Desktop nav links ─────────────────────────────────── */}
            <ul className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map(({ id, label, icon }) => (
                <li key={id}>
                  <button
                    onClick={() => setActive(id)}
                    className={`nav-link nav-font relative flex items-center gap-1.5 px-2.5 py-1.5 text-[11px] font-700 tracking-widest transition-colors duration-200 group ${
                      active === id ? "is-active" : ""
                    }`}
                    style={{ fontWeight: 700 }}
                  >
                    {/* Icon */}
                    <span
                      className="transition-colors duration-200 mb-1"
                      style={{
                        color: active === id ? "var(--accent)" : "#94a3b8",
                      }}
                    >
                      {icon}
                    </span>

                    {/* Label */}
                    <span
                      className="transition-colors duration-200 mb-0.5"
                      style={{
                        color: active === id ? "var(--accent)" : "#94a3b8",
                      }}
                    >
                      {label}
                    </span>

                    {/* Active / hover underline */}
                    <span
                      className="underline-bar absolute bottom-0 left-2 right-2 h-0.5 rounded-full"
                      style={{
                        background: "linear-gradient(90deg, #818cf8, #c084fc)",
                        boxShadow:
                          active === id ? "0 0 6px var(--accent-glow)" : "none",
                      }}
                    />
                  </button>
                </li>
              ))}
            </ul>

            {/* ── Right side: toggle + hamburger ───────────────────── */}
            <div className="flex items-center gap-3">
              {/* Theme toggle */}
              <button
                onClick={() => setDark((d) => !d)}
                className="toggle-btn relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300"
                style={{
                  background: dark
                    ? "linear-gradient(135deg,#1e1b4b,#312e81)"
                    : "linear-gradient(135deg,#fde68a,#fbbf24)",
                  boxShadow: dark
                    ? "0 0 12px rgba(99,102,241,0.5)"
                    : "0 0 12px rgba(251,191,36,0.5)",
                }}
                aria-label="Toggle theme"
              >
                <span
                  className="transition-all duration-300"
                  style={{ color: dark ? "#a5b4fc" : "#fff" }}
                >
                  {dark ? icons.moon : icons.sun}
                </span>
              </button>

              {/* Hamburger for mobile screens */}
              <button
                className="lg:hidden flex flex-col gap-1 p-2"
                onClick={() => setMenuOpen((o) => !o)}
                aria-label="Open menu"
              >
                <span
                  className="block w-5 h-0.5 rounded-full transition-all duration-300"
                  style={{
                    background: "#94a3b8",
                    transform: menuOpen
                      ? "rotate(45deg) translate(3px,3px)"
                      : "none",
                  }}
                />
                <span
                  className="block w-5 h-0.5 rounded-full transition-all duration-300"
                  style={{
                    background: "#94a3b8",
                    opacity: menuOpen ? 0 : 1,
                  }}
                />
                <span
                  className="block w-5 h-0.5 rounded-full transition-all duration-300"
                  style={{
                    background: "#94a3b8",
                    transform: menuOpen
                      ? "rotate(-45deg) translate(3px,-3px)"
                      : "none",
                  }}
                />
              </button>
            </div>
          </div>
        </div>

        {/* ── Mobile dropdown ────────────────────────────────────────── */}
        {menuOpen && (
          <div className="lg:hidden glass mobile-menu border-t border-white/10">
            <ul className="flex flex-col py-2 px-4">
              {NAV_LINKS.map(({ id, label, icon }) => (
                <li key={id}>
                  <button
                    onClick={() => {
                      setActive(id);
                      setMenuOpen(false);
                    }}
                    className={`nav-font w-full flex items-center gap-3 px-3 py-3 text-xs font-bold tracking-widest border-l-2 transition-all duration-200 ${
                      active === id
                        ? "border-indigo-400 bg-indigo-400/10"
                        : "border-transparent hover:border-indigo-400/40 hover:bg-white/5"
                    }`}
                    style={{
                      color: active === id ? "var(--accent)" : "#94a3b8",
                    }}
                  >
                    {icon}
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}
