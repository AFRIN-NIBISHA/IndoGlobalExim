import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { useApp } from "../context/AppContext";

const Footer = () => {
  const { t } = useApp();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Logo and Intro */}
          <div className="footer-logo-desc">
            <Link to="/" className="logo">
              <div className="logo-icon">S</div>
              <div className="logo-text">
                SecureAgri<span>Impex</span>
              </div>
            </Link>
            <p className="footer-desc">
              We are a government-registered Indian multi-commodity exporter, certified by APEDA, FSSAI, and ISO. Delivering export-quality agriculture, textile, and handicraft products globally.
            </p>
            <div className="flex-center" style={{ justifyContent: "flex-start", gap: "1rem", marginTop: "0.5rem" }}>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: "#94A3B8" }} aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: "#94A3B8" }} aria-label="Facebook">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: "#94A3B8" }} aria-label="Twitter">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footer-title">{t("navProducts")}</h3>
            <div className="footer-links">
              <Link to="/products" className="footer-link">Spices & Curcumin</Link>
              <Link to="/products" className="footer-link">Indian Rice Varieties</Link>
              <Link to="/products" className="footer-link">Organic Garments</Link>
              <Link to="/products" className="footer-link">Pollachi Coir Pith</Link>
              <Link to="/products" className="footer-link">Handicrafts & Decor</Link>
            </div>
          </div>

          {/* Info Links */}
          <div>
            <h3 className="footer-title">Quick Links</h3>
            <div className="footer-links">
              <Link to="/about" className="footer-link">{t("navAbout")}</Link>
              <Link to="/certifications" className="footer-link">{t("navCertifications")}</Link>
              <Link to="/why-choose-us" className="footer-link">{t("navWhyChooseUs")}</Link>
              <Link to="/contact" className="footer-link">{t("navContact")}</Link>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="footer-title">Registered Office</h3>
            <div className="footer-contact-item">
              <MapPin size={20} />
              <span>12A, Export Tower, Industrial Estate, Guindy, Chennai, Tamil Nadu, 600032, India</span>
            </div>
            <div className="footer-contact-item">
              <Phone size={18} />
              <span>+91 88707 78542</span>
            </div>
            <div className="footer-contact-item">
              <Mail size={18} />
              <span>info@secureagriimpex.com</span>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="footer-bottom">
          <p>{t("footerCopyright")}</p>
          <div className="footer-bottom-links">
            <Link to="/policy/privacy" className="footer-link">{t("footerPrivacy")}</Link>
            <Link to="/policy/terms" className="footer-link">{t("footerTerms")}</Link>
            <Link to="/policy/shipping" className="footer-link">{t("footerShipping")}</Link>
            <Link to="/policy/refund" className="footer-link">{t("footerRefund")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
