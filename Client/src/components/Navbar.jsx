import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe, Landmark, Phone } from "lucide-react";
import { useApp } from "../context/AppContext";

const Navbar = () => {
  const { lang, setLang, currency, setCurrency, t, currencyList } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { path: "/", labelKey: "navHome" },
    { path: "/about", labelKey: "navAbout" },
    { path: "/products", labelKey: "navProducts" },
    { path: "/certifications", labelKey: "navCertifications" },
    { path: "/why-choose-us", labelKey: "navWhyChooseUs" },
    { path: "/contact", labelKey: "navContact" }
  ];

  return (
    <>
      <header className="navbar-wrapper">
        <div className="container navbar">
          {/* Logo */}
          <Link to="/" className="logo" onClick={closeMenu}>
            <div className="logo-icon">S</div>
            <div className="logo-text">
              SecureAgri<span>Impex</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="nav-links">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? "active" : ""}`}
              >
                {t(item.labelKey)}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="nav-actions">
            {/* Language Selector */}
            <div className="flex-center" style={{ gap: "0.25rem", color: "#94A3B8" }}>
              <Globe size={16} />
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value)}
                className="control-select"
                aria-label="Language Selector"
              >
                <option value="en">English</option>
                <option value="ta">தமிழ்</option>
              </select>
            </div>

            {/* Currency Selector */}
            <div className="flex-center" style={{ gap: "0.25rem", color: "#94A3B8" }}>
              <Landmark size={16} />
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="control-select"
                aria-label="Currency Selector"
              >
                {currencyList.map((cur) => (
                  <option key={cur} value={cur}>
                    {cur}
                  </option>
                ))}
              </select>
            </div>

            <Link to="/contact" className="btn btn-accent btn-sm">
              <Phone size={14} />
              {t("btnGetQuote")}
            </Link>
          </div>

          {/* Mobile Hamburguer */}
          <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isOpen && <div className="mobile-drawer-overlay" onClick={closeMenu}></div>}
      <div className={`mobile-drawer ${isOpen ? "open" : ""}`}>
        <button className="drawer-close" onClick={closeMenu} aria-label="Close menu">
          <X size={28} />
        </button>

        <nav className="mobile-links">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`mobile-nav-link ${location.pathname === item.path ? "active" : ""}`}
              onClick={closeMenu}
            >
              {t(item.labelKey)}
            </Link>
          ))}
        </nav>

        <div className="mobile-actions">
          {/* Language Selector Mobile */}
          <div className="flex-between" style={{ padding: "0.5rem 0", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
            <span className="flex-center" style={{ gap: "0.5rem", color: "#94A3B8" }}>
              <Globe size={18} /> Language
            </span>
            <select
              value={lang}
              onChange={(e) => {
                setLang(e.target.value);
                closeMenu();
              }}
              className="control-select"
            >
              <option value="en">English</option>
              <option value="ta">தமிழ்</option>
            </select>
          </div>

          {/* Currency Selector Mobile */}
          <div className="flex-between" style={{ padding: "0.5rem 0", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
            <span className="flex-center" style={{ gap: "0.5rem", color: "#94A3B8" }}>
              <Landmark size={18} /> Currency
            </span>
            <select
              value={currency}
              onChange={(e) => {
                setCurrency(e.target.value);
                closeMenu();
              }}
              className="control-select"
            >
              {currencyList.map((cur) => (
                <option key={cur} value={cur}>
                  {cur}
                </option>
              ))}
            </select>
          </div>

          <Link
            to="/contact"
            className="btn btn-accent btn-sm"
            style={{ width: "100%", marginTop: "1rem" }}
            onClick={closeMenu}
          >
            <Phone size={14} />
            {t("btnGetQuote")}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
