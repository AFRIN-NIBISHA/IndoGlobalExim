import React from "react";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { useApp } from "../context/AppContext";
import InquiryForm from "../components/InquiryForm";

const Contact = () => {
  const { t, lang } = useApp();

  const galleryItems = [
    {
      titleEn: "Chennai Warehouse Sorting",
      titleTa: "கிடங்கில் தரம் பிரித்தல்",
      catEn: "Warehouse",
      catTa: "சேமிப்பு கிடங்கு",
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop"
    },
    {
      titleEn: "Vacuum Sealed Packaging",
      titleTa: "வெற்றிட பேக்கேஜிங் பிரிவு",
      catEn: "Packaging",
      catTa: "பேக்கிங் பிரிவு",
      img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=600&auto=format&fit=crop"
    },
    {
      titleEn: "Tuticorin Port Loading",
      titleTa: "துறைமுக கொள்கலன் ஏற்றுதல்",
      catEn: "Shipment",
      catTa: "ஏற்றுமதி",
      img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=600&auto=format&fit=crop"
    },
    {
      titleEn: "Spice Grinding Facility",
      titleTa: "மசாலா அரைக்கும் ஆலை",
      catEn: "Factory",
      catTa: "ஆலை",
      img: "/cardamom.png"
    }
  ];

  return (
    <div style={{ animation: "fadeIn 0.5s ease" }}>
      {/* Banner */}
      <section className="section" style={{ backgroundColor: "var(--primary)", color: "var(--text-white)", padding: "4rem 0", textAlign: "center" }}>
        <div className="container">
          <h1 style={{ color: "var(--text-white)", fontSize: "2.5rem", marginBottom: "0.5rem" }}>
            {t("navContact")}
          </h1>
          <p style={{ color: "var(--accent)", fontWeight: "600", letterSpacing: "1px", textTransform: "uppercase" }}>
            {lang === "ta" ? "உங்கள் மொத்த ஆர்டர்களுக்கான விசாரணையை இன்றே அனுப்பவும்" : "Send your bulk inquiry today."}
          </p>
        </div>
      </section>

      {/* Main Info and Form */}
      <section className="section">
        <div className="container">
          <div className="contact-container">
            {/* Info Cards Column */}
            <div className="contact-info-list reveal">
              <h2 style={{ fontSize: "1.75rem", color: "var(--primary)", marginBottom: "1rem" }}>
                {lang === "ta" ? "எங்களை நேரடியாகத் தொடர்பு கொள்ள" : "Corporate Coordinates"}
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", marginBottom: "1.5rem" }}>
                Connect with our trade desk directly. For urgent pricing details or shipping schedules, you can use our direct email or WhatsApp hotline.
              </p>

              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <MapPin size={24} />
                </div>
                <div className="contact-info-content">
                  <h3>{t("addressLabel")}</h3>
                  <p>12A, Export Tower, Industrial Estate, Guindy, Chennai, Tamil Nadu, 600032, India</p>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <Phone size={24} />
                </div>
                <div className="contact-info-content">
                  <h3>{t("phoneLabel")}</h3>
                  <p style={{ fontWeight: "bold", color: "var(--primary)" }}>+91 88707 78542</p>
                  <p style={{ fontSize: "0.8rem", color: "var(--success)" }}>Available on WhatsApp & Telegram</p>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <Mail size={24} />
                </div>
                <div className="contact-info-content">
                  <h3>{t("emailLabel")}</h3>
                  <p style={{ fontWeight: "bold", color: "var(--primary)" }}>info@secureagriimpex.com</p>
                  <p style={{ fontSize: "0.8rem" }}>General sales desk: sales@secureagriimpex.com</p>
                </div>
              </div>

              {/* Styled Mock Google Map */}
              <div
                style={{
                  height: "220px",
                  borderRadius: "var(--radius-lg)",
                  backgroundColor: "var(--primary)",
                  border: "1px solid var(--accent)",
                  overflow: "hidden",
                  position: "relative",
                  boxShadow: "var(--shadow-md)"
                }}
              >
                {/* Map graphics */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    opacity: 0.1,
                    backgroundImage: "radial-gradient(#FFF 1px, transparent 1px)",
                    backgroundSize: "20px 20px"
                  }}
                ></div>
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center"
                  }}
                >
                  <div
                    style={{
                      width: "16px",
                      height: "16px",
                      borderRadius: "50%",
                      backgroundColor: "var(--accent)",
                      border: "3px solid #FFF",
                      boxShadow: "0 0 10px var(--accent)",
                      margin: "0 auto 10px auto",
                      animation: "pulse-gold 2s infinite"
                    }}
                  ></div>
                  <strong style={{ color: "#FFF", fontSize: "0.95rem" }}>Guindy Industrial Estate</strong>
                  <div style={{ color: "var(--accent)", fontSize: "0.75rem", marginTop: "4px" }}>Chennai, Tamil Nadu, India</div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="reveal delay-200">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section" style={{ backgroundColor: "var(--bg-light)", borderTop: "1px solid var(--border-color)" }}>
        <div className="container">
          <div className="section-header reveal">
            <h2>{lang === "ta" ? "காட்சிக் கூடம்" : "Export & Sourcing Gallery"}</h2>
            <p>{lang === "ta" ? "எங்கள் உற்பத்தி ஆலை மற்றும் ஏற்றுமதி கன்டெய்னர் ஏற்றுதல் புகைப்படங்கள்." : "Visual highlights from our procurement networks, packaging systems, and port loadings."}</p>
          </div>

          <div className="gallery-grid">
            {galleryItems.map((item, idx) => (
              <div key={idx} className={`gallery-card reveal delay-${((idx % 4) + 1) * 100}`}>
                <img src={item.img} alt={item.titleEn} />
                <div className="gallery-card-overlay">
                  <div className="gallery-card-category">
                    {lang === "ta" ? item.catTa : item.catEn}
                  </div>
                  <div className="gallery-card-title">
                    {lang === "ta" ? item.titleTa : item.titleEn}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
