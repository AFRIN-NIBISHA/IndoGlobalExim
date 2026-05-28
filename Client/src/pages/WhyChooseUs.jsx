import React from "react";
import { Link } from "react-router-dom";
import { Award, Compass, Truck, Sparkles, PhoneCall, ShieldCheck, CheckCircle } from "lucide-react";
import { useApp } from "../context/AppContext";

const WhyChooseUs = () => {
  const { t, lang } = useApp();

  const benefits = [
    {
      titleKey: "whyQ1",
      descKey: "whyQD1",
      icon: <Award size={28} />
    },
    {
      titleKey: "whyQ2",
      descKey: "whyQD2",
      icon: <Compass size={28} />
    },
    {
      titleKey: "whyQ3",
      descKey: "whyQD3",
      icon: <Truck size={28} />
    },
    {
      titleKey: "whyQ4",
      descKey: "whyQD4",
      icon: <Sparkles size={28} />
    },
    {
      titleKey: "whyQ5",
      descKey: "whyQD5",
      icon: <PhoneCall size={28} />
    },
    {
      titleKey: "whyQ6",
      descKey: "whyQD6",
      icon: <ShieldCheck size={28} />
    }
  ];

  const standards = [
    {
      titleEn: "Farm-gate Sourcing Model",
      titleTa: "நேரடி பண்ணைக் கொள்முதல் முறை",
      descEn: "We source our spices, vegetables, and rice directly from contracted farmer cooperatives, guaranteeing freshness and eliminating intermediary inflation.",
      descTa: "இடைத்தரகர்கள் இல்லாமல் விவசாய கூட்டுறவு சங்கங்களிடமிருந்து நேரடியாக கொள்முதல் செய்து புதிய பொருட்களை வழங்குகிறோம்."
    },
    {
      titleEn: "Vacuum Barrier Export Packing",
      titleTa: "வெற்றிட பேக்கேஜிங் (Vacuum Packing) பாதுகாப்பு",
      descEn: "To prevent moisture, mold, and pest damage during long sea transits, agricultural goods are packed in food-grade, multi-layer vacuum bags or robust double-stitched jute bags.",
      descTa: "நீண்ட கடல் போக்குவரத்தில் ஈரப்பதம் மற்றும் பூச்சிகள் தாக்காமல் இருக்க உணவு தர வெற்றிடப் பைகள் அல்லது வலுவான சணல் பைகளில் பேக்கிங் செய்யப்படுகிறது."
    },
    {
      titleEn: "Pre-Shipment Inspections (SGS/Bureau Veritas)",
      titleTa: "ஏற்றுமதிக்கு முந்தைய தர சோதனைகள்",
      descEn: "Every container load is sealed and certified by accredited third-party inspectors like SGS or Bureau Veritas for weight, size, moisture content, and chemical limits before loading.",
      descTa: "சரக்கு ஏற்றப்படுவதற்கு முன்பு எடை, ஈரப்பதம் மற்றும் இரசாயன அளவுகள் குறித்து SGS போன்ற சர்வதேச தரச்சான்று அமைப்புகளால் சரிபார்க்கப்படுகிறது."
    },
    {
      titleEn: "Letter of Credit (L/C) Safety Compliance",
      titleTa: "கடன் கடிதம் (Letter of Credit) கட்டண பாதுகாப்பு",
      descEn: "We support safe banking structures, offering transparent trade options through irrevocable Letters of Credit (L/C) at sight and flexible T/T payments.",
      descTa: "பாதுகாப்பான வர்த்தகத்தை உறுதி செய்ய கடன் கடிதங்கள் (L/C) மற்றும் எளிய தந்தி பரிமாற்ற (T/T) கட்டண வழிமுறைகளை ஆதரிக்கிறோம்."
    }
  ];

  return (
    <div style={{ animation: "fadeIn 0.5s ease" }}>
      {/* Banner */}
      <section className="section" style={{ backgroundColor: "var(--primary)", color: "var(--text-white)", padding: "4rem 0", textAlign: "center" }}>
        <div className="container">
          <h1 style={{ color: "var(--text-white)", fontSize: "2.5rem", marginBottom: "0.5rem" }}>
            {t("navWhyChooseUs")}
          </h1>
          <p style={{ color: "var(--accent)", fontWeight: "600", letterSpacing: "1px", textTransform: "uppercase" }}>
            {lang === "ta" ? "சிறந்த தரம், நம்பகமான தளவாடங்கள், பாதுகாப்பான வர்த்தகம்" : "Premium Standards. Timely Shipping. Secure Payments."}
          </p>
        </div>
      </section>

      {/* Benefits grid */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>{lang === "ta" ? "எங்கள் தனிச்சிறப்புகள்" : "What Sets Us Apart"}</h2>
            <p>{t("whySubtitle")}</p>
          </div>

          <div className="grid grid-3">
            {benefits.map((benefit, i) => (
              <div key={i} className="why-card">
                <div className="why-icon">
                  {benefit.icon}
                </div>
                <h3>{t(benefit.titleKey)}</h3>
                <p>{t(benefit.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cargo Standards & QA Timeline */}
      <section className="section" style={{ backgroundColor: "var(--bg-light)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
        <div className="container">
          <div className="info-row">
            <div className="info-col-text">
              <span className="text-accent" style={{ fontWeight: 700, textTransform: "uppercase", fontSize: "0.85rem", letterSpacing: "1px" }}>
                QA STANDARDS
              </span>
              <h2 style={{ fontSize: "2.25rem", marginTop: "0.5rem", marginBottom: "1.5rem" }}>
                {lang === "ta" ? "எங்கள் தரக் கட்டுப்பாட்டு நெறிமுறைகள்" : "Our International Quality Protocols"}
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", marginBottom: "2rem" }}>
                International trade relies on consistency. At SecureAgri Impex, we have set strict control checklists from harvest to loading. We ensure that our buyers receive exactly what is described in the contract spec sheets.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {standards.map((std, idx) => (
                  <div key={idx} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <div style={{ color: "var(--success)", flexShrink: 0, marginTop: "0.25rem" }}>
                      <CheckCircle size={22} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: "1.1rem", color: "var(--primary)", marginBottom: "0.25rem" }}>
                        {lang === "ta" ? std.titleTa : std.titleEn}
                      </h4>
                      <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
                        {lang === "ta" ? std.descTa : std.descEn}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="info-col-img">
              <div className="img-frame">
                <img
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800&auto=format&fit=crop"
                  alt="Quality Check on Shipping Container Cargo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>{t("faqTitle")}</h2>
            <p>{lang === "ta" ? "பயனர்கள் அடிக்கடி கேட்கும் சில பொதுவான வினாக்கள்." : "Common questions about ordering, custom clearances, and shipping."}</p>
          </div>

          <div className="faq-list">
            <FAQItem
              q={lang === "ta" ? "குறைந்தபட்ச ஆர்டர் அளவு (MOQ) எவ்வளவு?" : "What is your typical Minimum Order Quantity (MOQ)?"}
              a={lang === "ta" 
                ? "MOQ தயாரிப்பைப் பொறுத்து மாறுபடும். அரிசி மற்றும் தேங்காய்கள் 20 மெட்ரிக் டன் (1 கன்டெய்னர்). மசாலாப் பொருட்களுக்கு 500 கிலோ மட்டுமே." 
                : "MOQ varies by product. For high-volume commodities like Rice and Coconuts, the MOQ is 1 Full Container Load (FCL, approx 20 Metric Tons). For spices, the MOQ is 500 Kg."
              }
            />
            <FAQItem
              q={lang === "ta" ? "தயாரிப்பு மாதிரிகள் (Samples) வழங்கப்படுகிறதா?" : "Do you provide product samples before contract signing?"}
              a={lang === "ta"
                ? "ஆம், நாங்கள் தரம் சரிபார்க்க இலவச மாதிரிகளை வழங்குகிறோம். வாங்குபவர்கள் கூரியர்/சரக்கு கட்டணத்தை மட்டும் செலுத்த வேண்டும்."
                : "Yes, we provide free product samples (up to 1-2kg for agricultural goods) to verified business buyers. The buyer is only requested to arrange or reimburse the DHL/FedEx courier shipping charges."
              }
            />
            <FAQItem
              q={lang === "ta" ? "கப்பல் போக்குவரத்து மற்றும் விநியோக காலம் எவ்வளவு?" : "What are your shipping lead times?"}
              a={lang === "ta"
                ? "கொள்முதல் மற்றும் சுங்க ஆவணங்களை முடிக்க 10-15 நாட்கள் ஆகும். கடல் போக்குவரத்து நேரம் சேருமிடத்தைப் பொறுத்து 7 முதல் 30 நாட்கள் ஆகும்."
                : "Typically, load-port dispatch takes 10-15 days from order confirmation/payment receipt. Ocean shipping transit takes 7-10 days for GCC/Southeast Asia, and 22-30 days for Europe and North America."
              }
            />
            <FAQItem
              q={lang === "ta" ? "பயன்படுத்தப்படும் கட்டண முறைகள் யாவை?" : "What are your standard payment terms?"}
              a={lang === "ta"
                ? "நாங்கள் கடன் கடிதம் (L/C - Letter of Credit) மற்றும் முன்பணமாக 30% செலுத்தி, மீதமுள்ள 70% B/L நகலுக்கு எதிராக செலுத்தும் (T/T) முறையை ஏற்கிறோம்."
                : "We operate on secure payment parameters: 100% Irrevocable Letter of Credit (L/C) at sight, or Telegraphic Transfer (T/T) with 30% Advance deposit and the remaining 70% payable against scanned copies of the Bill of Lading (B/L) and export invoices."
              }
            />
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="section" style={{ backgroundColor: "var(--primary)", color: "var(--text-white)", padding: "4rem 0", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "700px" }}>
          <h2 style={{ color: "#FFF", fontSize: "2rem", marginBottom: "1rem" }}>
            {lang === "ta" ? "மொத்த ஆர்டர்கள் பற்றி பேசலாமா?" : "Ready to Discuss a Bulk Import?"}
          </h2>
          <p style={{ color: "#94A3B8", marginBottom: "2rem" }}>
            {lang === "ta" ? "எங்கள் ஏற்றுமதி நிபுணர் குழுவிடம் இருந்து 12 மணி நேரத்திற்குள் விலைப் பட்டியலைப் பெற விசாரணையை அனுப்பவும்." : "Partner with a government-registered Indian exporter. Get detailed pricing, shipping schedules, and documentation drafts."}
          </p>
          <Link to="/contact" className="btn btn-accent">
            {t("btnContactUs")}
          </Link>
        </div>
      </section>
    </div>
  );
};

// Simple internal FAQ Accordion Item component
const FAQItem = ({ q, a }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className={`faq-item ${isOpen ? "open" : ""}`}>
      <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        {q}
        <span style={{ fontSize: "1.25rem", color: "var(--accent)", transition: "transform 0.2s" }} className={isOpen ? "rotate" : ""}>
          {isOpen ? "−" : "+"}
        </span>
      </button>
      <div className="faq-answer">
        <p>{a}</p>
      </div>
    </div>
  );
};

export default WhyChooseUs;
