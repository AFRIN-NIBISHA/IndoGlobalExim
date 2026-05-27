import React from "react";
import { Link } from "react-router-dom";
import { Award, Compass, Eye, ShieldAlert, HeartHandshake, CheckCircle } from "lucide-react";
import { useApp } from "../context/AppContext";

const About = () => {
  const { t, lang } = useApp();

  const values = [
    {
      titleKey: "valueQuality",
      descEn: "Every batch of agricultural or textile product undergoes multi-stage inspections before custom clearance.",
      descTa: "ஒவ்வொரு தயாரிப்பும் ஏற்றுமதிக்கு முன் பல கட்ட சோதனைகளுக்கு உட்படுத்தப்பட்டு தரம் உறுதி செய்யப்படுகிறது.",
      icon: <Award size={24} />
    },
    {
      titleKey: "valueIntegrity",
      descEn: "We maintain 100% honesty in weights, pesticide-clearance, moisture levels, and billing transactions.",
      descTa: "எடை அளவுகள், பூச்சிக்கொல்லி இல்லாத சான்றிதழ் மற்றும் கட்டண பரிவர்த்தனைகளில் 100% நேர்மை.",
      icon: <Eye size={24} />
    },
    {
      titleKey: "valueReliability",
      descEn: "With dedicated logistics and shipping partnerships, we ensure that cargo is dispatched strictly on schedule.",
      descTa: "சிறந்த கப்பல் போக்குவரத்து கூட்டணிகள் மூலம் சரக்குகள் திட்டமிட்ட நேரத்தில் அனுப்பப்படுவதை உறுதி செய்கிறோம்.",
      icon: <Compass size={24} />
    },
    {
      titleKey: "valuePartnership",
      descEn: "We work for sustainable relations, resolving shipping delays or claims with empathy and professionalism.",
      descTa: "நாங்கள் வாடிக்கையாளர்களுடன் நீண்டகால மற்றும் பரஸ்பர நன்மை பயக்கும் உறவுகளை உருவாக்குவதில் கவனம் செலுத்துகிறோம்.",
      icon: <HeartHandshake size={24} />
    }
  ];

  const timeline = [
    {
      year: "2018",
      titleEn: "Company Foundation",
      titleTa: "நிறுவனம் தொடக்கம்",
      descEn: "Established in Chennai, India, starting with domestic agricultural sourcing and processing networks.",
      descTa: "விவசாய கொள்முதல் மற்றும் செயலாக்க நெட்வொர்க்குகளுடன் சென்னையில் தொடங்கப்பட்டது."
    },
    {
      year: "2020",
      titleEn: "First International Shipment",
      titleTa: "முதல் சர்வதேச ஏற்றுமதி",
      descEn: "Dispatched our first full container load (FCL) of Sella Basmati Rice and Turmeric to Dubai, UAE.",
      descTa: "ஐக்கிய அரபு அமீரகத்திற்கு (Dubai) எங்களது முதல் கொள்கலன் (FCL) அரிசி மற்றும் மஞ்சள் ஏற்றுமதி செய்யப்பட்டது."
    },
    {
      year: "2022",
      titleEn: "Regulatory Certifications",
      titleTa: "ஒழுங்குமுறை சான்றிதழ்கள்",
      descEn: "Acquired official FSSAI, APEDA, ISO 9001:2015, and Organic certificates for international grade compliance.",
      descTa: "சர்வதேச தர இணக்கத்திற்காக FSSAI, APEDA, ISO 9001:2015 மற்றும் இயற்கை சான்றிதழ்களைப் பெற்றது."
    },
    {
      year: "2024",
      titleEn: "Global Footprint Expansion",
      titleTa: "உலகளாவிய விரிவாக்கம்",
      descEn: "Expanded regular exports to USA, UK, Singapore, and Canada, introducing organic cotton garments and coco peat blocks.",
      descTa: "ஆர்கானிக் ஆடைகள் மற்றும் தேங்காய் நார் கழிவுகளை அறிமுகப்படுத்தி அமெரிக்கா, இங்கிலாந்து, சிங்கப்பூருக்கு ஏற்றுமதி விரிவாக்கம்."
    },
    {
      year: "2026",
      titleEn: "Advanced Packing Centers",
      titleTa: "அதிநவீன பேக்கிங் மையங்கள்",
      descEn: "Inaugurating cold storage and vacuum-packaging warehouses near Tuticorin and Cochin ports to guarantee maximum shelf life.",
      descTa: "அதிகபட்ச அடுக்கு ஆயுளுக்கு தூத்துக்குடி மற்றும் கொச்சி துறைமுகங்கள் அருகே குளிர்சாதன மற்றும் வெற்றிட பேக்கேஜிங் கிடங்குகள் அமைப்பு."
    }
  ];

  return (
    <div style={{ animation: "fadeIn 0.5s ease" }}>
      {/* Banner */}
      <section className="section" style={{ backgroundColor: "var(--primary)", color: "var(--text-white)", padding: "4rem 0", textAlign: "center" }}>
        <div className="container">
          <h1 style={{ color: "var(--text-white)", fontSize: "2.5rem", marginBottom: "0.5rem" }}>
            {t("navAbout")}
          </h1>
          <p style={{ color: "var(--accent)", fontWeight: "600", letterSpacing: "1px", textTransform: "uppercase" }}>
            IndoGlobal Exim — Delivering Pure Excellence Since 2018
          </p>
        </div>
      </section>

      {/* Story & Vision */}
      <section className="section">
        <div className="container">
          <div className="info-row" style={{ marginBottom: "5rem" }}>
            <div className="info-col-text">
              <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem", borderBottom: "2px solid var(--accent)", paddingBottom: "0.5rem" }}>
                {t("aboutStoryTitle")}
              </h2>
              <p style={{ fontSize: "1.05rem", lineHeight: "1.7", color: "var(--text-muted)" }}>
                {t("aboutStoryText")}
              </p>
              <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontWeight: "600" }}>
                  <CheckCircle size={18} style={{ color: "var(--success)" }} /> APEDA Registered
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontWeight: "600" }}>
                  <CheckCircle size={18} style={{ color: "var(--success)" }} /> FSSAI Certified
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontWeight: "600" }}>
                  <CheckCircle size={18} style={{ color: "var(--success)" }} /> ISO 9001 Quality
                </div>
              </div>
            </div>
            <div className="info-col-img">
              <div className="img-frame">
                <img
                  src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=800&auto=format&fit=crop"
                  alt="Corporate Sourcing and Handshake"
                />
              </div>
            </div>
          </div>

          <div className="info-row" style={{ flexDirection: "row-reverse" }}>
            <div className="info-col-text">
              <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem", borderBottom: "2px solid var(--accent)", paddingBottom: "0.5rem" }}>
                {t("founderVisionTitle")}
              </h2>
              <p style={{ fontSize: "1.05rem", lineHeight: "1.7", color: "var(--text-muted)" }}>
                {t("founderVisionText")}
              </p>
              <div style={{ marginTop: "1.5rem", padding: "1.5rem", borderLeft: "4px solid var(--accent)", backgroundColor: "var(--bg-light)", borderRadius: "0 var(--radius-md) var(--radius-md) 0" }}>
                <p style={{ fontStyle: "italic", color: "var(--primary)", fontWeight: "500", marginBottom: "0.5rem" }}>
                  “We don't just export commodities; we build enduring international trust and deliver the rich heritage of Indian quality.”
                </p>
                <strong>- Founder & Managing Director, IndoGlobal Exim</strong>
              </div>
            </div>
            <div className="info-col-img">
              <div className="img-frame">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop"
                  alt="Founder and Sourcing Boardroom"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section" style={{ backgroundColor: "var(--bg-light)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
        <div className="container">
          <div className="section-header">
            <h2>{t("valuesTitle")}</h2>
            <p>{lang === "ta" ? "நேர்மையான மற்றும் பாதுகாப்பான ஏற்றுமதி வர்த்தகத்திற்கான எங்களது தூண்கள்." : "The founding principles that guide every shipment and transaction at IndoGlobal Exim."}</p>
          </div>

          <div className="grid grid-2">
            {values.map((v, i) => (
              <div key={i} className="why-card" style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start", padding: "2rem" }}>
                <div className="why-icon" style={{ flexShrink: 0, margin: 0 }}>
                  {v.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: "1.15rem", marginBottom: "0.5rem" }}>{t(v.titleKey)}</h3>
                  <p style={{ fontSize: "0.9rem" }}>{lang === "ta" ? v.descTa : v.descEn}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>{lang === "ta" ? "எங்கள் வளர்ச்சிப் பாதை" : "Our Growth Timeline"}</h2>
            <p>{lang === "ta" ? "கடந்த சில ஆண்டுகளில் நாங்கள் கடந்து வந்த மைல்கற்கள்." : "Milestones that define our commitment to scaling premium exports."}</p>
          </div>

          <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative", padding: "2rem 0" }}>
            {/* Center Line */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: 0,
                bottom: 0,
                width: "2px",
                backgroundColor: "var(--border-color)",
                transform: "translateX(-50%)"
              }}
            ></div>

            {timeline.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: isEven ? "flex-start" : "flex-end",
                    alignItems: "center",
                    position: "relative",
                    marginBottom: "3rem",
                    width: "100%"
                  }}
                >
                  {/* Central Node */}
                  <div
                    style={{
                      position: "absolute",
                      left: "50%",
                      width: "16px",
                      height: "16px",
                      borderRadius: "50%",
                      backgroundColor: "var(--accent)",
                      border: "4px solid var(--secondary)",
                      boxShadow: "0 0 0 4px rgba(197, 168, 128, 0.2)",
                      transform: "translateX(-50%)",
                      zIndex: 2
                    }}
                  ></div>

                  {/* Card content */}
                  <div
                    className="why-card"
                    style={{
                      width: "45%",
                      padding: "1.5rem",
                      position: "relative",
                      textAlign: isEven ? "right" : "left",
                      boxShadow: "var(--shadow-md)"
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "Outfit",
                        fontSize: "1.5rem",
                        fontWeight: "800",
                        color: "var(--accent)",
                        marginBottom: "0.25rem"
                      }}
                    >
                      {item.year}
                    </div>
                    <h3 style={{ fontSize: "1.15rem", marginBottom: "0.5rem" }}>
                      {lang === "ta" ? item.titleTa : item.titleEn}
                    </h3>
                    <p style={{ fontSize: "0.85rem" }}>
                      {lang === "ta" ? item.descTa : item.descEn}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          /* Adjust timeline for mobile */
          div[style*="left: 50%"] {
            left: 20px !important;
          }
          div[style*="justify-content"] {
            justify-content: flex-end !important;
            padding-left: 40px;
          }
          div[style*="width: 45%"] {
            width: 100% !important;
            text-align: left !important;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
