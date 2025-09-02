import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const SECTIONS = [
  { id: "top", label: "HOME", href: "#top" },
  { id: "projects", label: "PROJECTS", href: "#projects" },
  { id: "about-section", label: "ABOUT", href: "#about-section" },
  { id: "contact", label: "CONTACT", href: "#contact" },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState<string>(
    window.location.hash || "#top"
  );
  const [menuOpen, setMenuOpen] = useState(false);

  // collapse banner on desktop when scrolled
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // sync active link when hash changes
  useEffect(() => {
    const onHash = () => setActiveHash(window.location.hash || "#top");
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // highlight active section while scrolling
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) {
          setActiveHash(`#${visible.target.id}`);
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -60% 0px",
        threshold: [0.2, 0.4, 0.6, 0.8],
      }
    );

    const ids = ["top", "projects", "about-section", "contact"];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 800 && menuOpen) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [menuOpen]);

  // Smooth scroll & close menu (mobile) when clicking hash links
  const handleHashClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    const href = (e.currentTarget.getAttribute("href") || "").trim();
    if (!href.startsWith("#")) return; // ignore non-hash
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      // optional: adjust for fixed navbar height via scroll-margin-top in CSS
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveHash(href);
      setMenuOpen(false); // close mobile menu
      // update URL hash
      // eslint-disable-next-line no-restricted-globals
      history.replaceState(null, "", href);
    }
  };

  return (
    <div
      className={`navbar ${isScrolled ? "scrolled" : ""} ${
        menuOpen ? "menu-open" : ""
      }`}
    >
      {/* Sentinel for HOME */}
      <div id="top" style={{ position: "absolute", top: 0 }} aria-hidden />

      {/* Desktop banner (hidden on mobile via CSS) */}
      <div className="navbar-banner">
        <h1>Seymur Uvarov</h1>
        <h3>Full-Stack developer</h3>
      </div>

      {/* Top bar with brand + hamburger (mobile), and link row (desktop) */}
      <div className="navbar-topbar">
        <div className="brand">Seymur Uvarov</div>

        {/* Hamburger button (mobile only via CSS) */}
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>

        {/* Desktop link row */}
        <ul className="navbar-links desktop">
          {SECTIONS.map((s) => (
            <li
              key={s.id}
              className={`li-nav-link ${activeHash === s.href ? "active" : ""}`}
            >
              <a className="nav-link" href={s.href} onClick={handleHashClick}>
                {s.label}
              </a>
            </li>
          ))}
          <li className="li-nav-link">
            <NavLink
              to="/playground"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              PLAYGROUND
            </NavLink>
          </li>
          <li className="li-nav-link">
            <a
              className="nav-link"
              href="https://github.com/princeVegeta2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GITHUB
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile dropdown menu */}
      <nav
        id="mobile-menu"
        className={`mobile-menu ${menuOpen ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
      >
        <ul className="navbar-links mobile">
          {SECTIONS.map((s) => (
            <li
              key={s.id}
              className={`li-nav-link ${activeHash === s.href ? "active" : ""}`}
            >
              <a className="nav-link" href={s.href} onClick={handleHashClick}>
                {s.label}
              </a>
            </li>
          ))}
          <li className="li-nav-link">
            <NavLink
              to="/playground"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              onClick={() => setMenuOpen(false)}
            >
              PLAYGROUND
            </NavLink>
          </li>
          <li className="li-nav-link">
            <a
              className="nav-link"
              href="https://github.com/princeVegeta2/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              GITHUB
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
