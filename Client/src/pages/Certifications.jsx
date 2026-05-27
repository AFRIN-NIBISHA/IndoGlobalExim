import React, { useState } from "react";
import { ShieldCheck, Award, FileText, CheckCircle2, X, Printer } from "lucide-react";
import { useApp } from "../context/AppContext";

const Certifications = () => {
  const { t, lang } = useApp();
  const [activeCert, setActiveCert] = useState(null);

  const certificationsList = [
    {
      id: "iec",
      code: "IEC",
      nameEn: "Import Export Code (IEC)",
      nameTa: "இறக்குமதி ஏற்றுமதி குறியீடு (IEC)",
      authorityEn: "Directorate General of Foreign Trade (DGFT), Ministry of Commerce, Govt. of India",
      authorityTa: "இந்திய வர்த்தக அமைச்சகம், வெளிநாட்டு வர்த்தக பொது இயக்குநரகம் (DGFT)",
      number: "IEC No: 0418029513",
      validityEn: "Lifetime Validity (Subject to annual update)",
      validityTa: "ஆயுட்கால செல்லுபடி",
      purposeEn: "Mandatory primary license required for legal customs clearance of imports and exports from India.",
      purposeTa: "இந்தியாவில் இருந்து சட்டப்பூர்வமாக பொருட்களை இறக்குமதி/ஏற்றுமதி செய்ய தேவையான முக்கிய உரிமம்."
    },
    {
      id: "gst",
      code: "GST",
      nameEn: "GST Registration Certificate",
      nameTa: "ஜிஎஸ்டி பதிவு சான்றிதழ் (GST)",
      authorityEn: "Department of Revenue, Ministry of Finance, Government of India",
      authorityTa: "நிதி அமைச்சகம், வருவாய்த்துறை, இந்திய அரசு",
      number: "GSTIN: 33AAACI1289K1Z4",
      validityEn: "Active & Compliant",
      validityTa: "செயலில் உள்ளது",
      purposeEn: "Goods and Services Tax registration necessary for domestic supply and tax refunds on exported commodities.",
      purposeTa: "உள்நாட்டு கொள்முதல் மற்றும் ஏற்றுமதிக்கான வரி ரீஃபண்ட் பெற தேவையான அரசாங்க வரி சான்றிதழ்."
    },
    {
      id: "fssai",
      code: "FSSAI",
      nameEn: "Food Safety & Standards Authority",
      nameTa: "உணவு பாதுகாப்பு மற்றும் தர நிர்ணய ஆணையம் (FSSAI)",
      authorityEn: "Food Safety and Standards Authority of India (FSSAI), Govt. of India",
      authorityTa: "இந்திய உணவு பாதுகாப்பு மற்றும் தர நிர்ணய ஆணையம், இந்திய அரசு",
      number: "FSSAI License: 10024042000516",
      validityEn: "Valid till May 2031",
      validityTa: "மே 2031 வரை செல்லுபடியாகும்",
      purposeEn: "Mandatory food safety clearance for shipping edible agricultural products, spices, and grains overseas.",
      purposeTa: "உணவுப் பொருட்கள், மசாலாக்கள் மற்றும் அரிசியை வெளிநாடுகளுக்கு ஏற்றுமதி செய்ய தேவையான கட்டாய பாதுகாப்பு சான்றிதழ்."
    },
    {
      id: "apeda",
      code: "APEDA",
      nameEn: "Agricultural Products Export Board",
      nameTa: "விவசாய பொருட்கள் ஏற்றுமதி வாரியம் (APEDA)",
      authorityEn: "Agricultural & Processed Food Products Export Development Authority, Govt. of India",
      authorityTa: "விவசாய மற்றும் பதப்படுத்தப்பட்ட உணவு பொருட்கள் ஏற்றுமதி மேம்பாட்டு வாரியம்",
      number: "RCMC No: APEDA/198254/2026",
      validityEn: "Valid till Dec 2030",
      validityTa: "டிசம்பர் 2030 வரை செல்லுபடியாகும்",
      purposeEn: "Registration-cum-Membership Certificate for exporting fruits, vegetables, rice, and value-added foods.",
      purposeTa: "விவசாயப் பொருட்கள், காய்கறிகள் மற்றும் அரிசி ஏற்றுமதி செய்வதற்கான அரசாங்கத்தின் உத்தியோகபூர்வ உறுப்பினர் சான்றிதழ்."
    },
    {
      id: "iso",
      code: "ISO",
      nameEn: "ISO 9001:2015 Quality Management",
      nameTa: "ISO 9001:2015 தர மேலாண்மை சான்றிதழ்",
      authorityEn: "QMS International Certification Services / Accreditation Body",
      authorityTa: "QMS சர்வதேச தரச்சான்று நிறுவனம்",
      number: "Certificate No: QMS-2026-9001-38",
      validityEn: "Valid till Feb 2029",
      validityTa: "பிப்ரவரி 2029 வரை செல்லுபடியாகும்",
      purposeEn: "International audit clearance validating systematic quality checks, warehousing cleanliness, and process handling.",
      purposeTa: "கொள்முதல் மற்றும் கிடங்கு மேலாண்மை சர்வதேச தரத்தில் இருப்பதை உறுதி செய்யும் உலகளாவிய சான்றிதழ்."
    },
    {
      id: "organic",
      code: "ORGANIC",
      nameEn: "National Program for Organic Production",
      nameTa: "தேசிய ஆர்கானிக் தயாரிப்பு சான்றிதழ் (NPOP)",
      authorityEn: "Lacon Quality Certification Pvt Ltd / APEDA Accredited Agency",
      authorityTa: "Lacon தரச்சான்றிதழ் நிறுவனம் / APEDA அங்கீகாரம் பெற்றது",
      number: "NPOP Registration: ORG-2605-1854",
      validityEn: "Valid till April 2028",
      validityTa: "ஏப்ரல் 2028 வரை செல்லுபடியாகும்",
      purposeEn: "Certifies that organic products (spices, turmeric, cotton) comply with NPOP & USDA organic farming norms.",
      purposeTa: "மசாலாக்கள் மற்றும் பருத்தி தயாரிப்புகள் ஆர்கானிக் முறையில் விளைவிக்கப்பட்டதை உறுதி செய்யும் சான்றிதழ்."
    }
  ];

  const handlePrintCertificate = (id) => {
    const certElement = document.getElementById(`print-cert-${id}`);
    if (!certElement) return;

    const printWindow = window.open("", "_blank");
    printWindow.document.write(`
      <html>
        <head>
          <title>Certificate Verification - ${id.toUpperCase()}</title>
          <style>
            body { font-family: 'Times New Roman', Times, serif; padding: 40px; text-align: center; color: #1E293B; background: #FFF; }
            .border-double { border: 15px double #0F1E36; padding: 30px; border-radius: 4px; }
            .header { text-transform: uppercase; font-size: 20px; font-weight: bold; margin-bottom: 20px; color: #0F1E36; }
            .emblem { font-size: 40px; margin-bottom: 15px; }
            .title { font-size: 32px; font-weight: bold; color: #C5A880; font-family: Georgia, serif; margin-bottom: 10px; }
            .subtitle { font-size: 16px; font-style: italic; margin-bottom: 30px; }
            .body-text { font-size: 15px; line-height: 1.8; max-width: 600px; margin: 0 auto 40px auto; text-align: justify; }
            .info-table { width: 100%; max-width: 500px; margin: 0 auto 40px auto; border-collapse: collapse; }
            .info-table td { padding: 8px; border-bottom: 1px dashed #CBD5E1; font-size: 14px; text-align: left; }
            .info-table td:first-child { font-weight: bold; color: #0F1E36; }
            .footer-sign { display: flex; justify-content: space-between; align-items: center; margin-top: 50px; padding: 0 40px; }
            .sign-line { border-top: 1px solid #1E293B; width: 180px; padding-top: 8px; font-size: 12px; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="border-double">
            <div class="emblem">⚜️</div>
            <div class="header">GOVERNMENT OF INDIA / REGULATORY BODIES</div>
            <div class="title">Certificate of Registration</div>
            <div class="subtitle">Official Verification Document for Export Clearance</div>
            
            <div class="body-text">
              This certifies that the export enterprise <strong>INDO GLOBAL EXIM CO.</strong>, located at Chennai, Tamil Nadu, India, has been duly inspected and registered with the respective authority. All compliance checklists, facility safety measures, and quality norms have been met in accordance with legal directives.
            </div>

            <table class="info-table">
              <tr><td>License Authority</td><td>${certElement.dataset.authority}</td></tr>
              <tr><td>License Type</td><td>${certElement.dataset.name}</td></tr>
              <tr><td>Registration No</td><td>${certElement.dataset.number}</td></tr>
              <tr><td>Current Status</td><td>${certElement.dataset.validity}</td></tr>
            </table>

            <div class="footer-sign">
              <div class="sign-line">Directorate Stamp / Seal</div>
              <div class="sign-line">Authorized Signatory<br>IndoGlobal Exim Desk</div>
            </div>
          </div>
          <script>
            window.onload = function() { window.print(); setTimeout(function() { window.close(); }, 500); }
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  return (
    <div style={{ animation: "fadeIn 0.5s ease" }}>
      {/* Banner */}
      <section className="section" style={{ backgroundColor: "var(--primary)", color: "var(--text-white)", padding: "4rem 0", textAlign: "center" }}>
        <div className="container">
          <h1 style={{ color: "var(--text-white)", fontSize: "2.5rem", marginBottom: "0.5rem" }}>
            {t("navCertifications")}
          </h1>
          <p style={{ color: "var(--accent)", fontWeight: "600", letterSpacing: "1px", textTransform: "uppercase" }}>
            {t("certificationsSubtitle")}
          </p>
        </div>
      </section>

      {/* Intro info */}
      <section className="section">
        <div className="container">
          <div className="info-row" style={{ marginBottom: "4rem", alignItems: "center" }}>
            <div className="info-col-text">
              <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
                {lang === "ta" ? "சர்வதேச தர இணக்க உத்திரவாதம்" : "Building Global Buyer Trust through Legal Compliance"}
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1.05rem" }}>
                To ensure a smooth custom clearance process at destination ports, we keep our certifications, memberships, and corporate filings updated with government organizations. From phytosanitary safety (FSSAI, APEDA) to quality audits (ISO 9001:2015), our trade procedures are fully transparent and verified.
              </p>
              <div style={{ marginTop: "1.5rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem", fontWeight: "600" }}>
                  <ShieldCheck size={20} style={{ color: "var(--success)" }} /> Customs Clearance Approved
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem", fontWeight: "600" }}>
                  <ShieldCheck size={20} style={{ color: "var(--success)" }} /> SGS Inspections Welcome
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem", fontWeight: "600" }}>
                  <ShieldCheck size={20} style={{ color: "var(--success)" }} /> Letter of Credit Compliant
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem", fontWeight: "600" }}>
                  <ShieldCheck size={20} style={{ color: "var(--success)" }} /> 100% Tax Compliant
                </div>
              </div>
            </div>
            <div className="info-col-img" style={{ flex: 0.8 }}>
              <div className="why-card text-center" style={{ border: "2px dashed var(--accent)", padding: "3rem" }}>
                <Award size={64} style={{ color: "var(--accent)", marginBottom: "1rem" }} />
                <h3 style={{ fontSize: "1.25rem", color: "var(--primary)", marginBottom: "0.5rem" }}>
                  DGFT Registered Exporter
                </h3>
                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                  Verified by the Ministry of Commerce & Industry, Government of India.
                </p>
              </div>
            </div>
          </div>

          {/* Badges Grid */}
          <div className="cert-grid">
            {certificationsList.map((cert) => (
              <div key={cert.id} className="cert-card" onClick={() => setActiveCert(cert)}>
                <div className="cert-badge-placeholder">
                  {cert.code}
                </div>
                <h3>{lang === "ta" ? cert.nameTa : cert.nameEn}</h3>
                <p>{cert.number}</p>
                <span
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: "700",
                    color: "var(--accent)",
                    textTransform: "uppercase",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.25rem",
                    marginTop: "auto"
                  }}
                >
                  <FileText size={14} /> {lang === "ta" ? "பதிவு சான்றிதழ்" : "View Official Copy"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hidden print templates data fields */}
      {certificationsList.map((cert) => (
        <div
          key={`print-data-${cert.id}`}
          id={`print-cert-${cert.id}`}
          style={{ display: "none" }}
          data-name={lang === "ta" ? cert.nameTa : cert.nameEn}
          data-authority={lang === "ta" ? cert.authorityTa : cert.authorityEn}
          data-number={cert.number}
          data-validity={lang === "ta" ? cert.validityTa : cert.validityEn}
        ></div>
      ))}

      {/* Cert Lightbox Modal */}
      {activeCert && (
        <div className="lightbox" onClick={() => setActiveCert(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()} style={{ animation: "slideUp 0.3s ease" }}>
            <button className="lightbox-close" onClick={() => setActiveCert(null)} aria-label="Close certificate">
              <X size={22} />
            </button>

            <Award size={48} style={{ color: "var(--accent)", marginBottom: "1rem" }} />
            <h3 style={{ fontSize: "1.5rem", color: "var(--primary)" }}>
              {lang === "ta" ? activeCert.nameTa : activeCert.nameEn}
            </h3>
            <p className="text-muted" style={{ fontSize: "0.8rem", marginTop: "0.25rem" }}>
              {lang === "ta" ? activeCert.authorityTa : activeCert.authorityEn}
            </p>

            {/* Official Document Mock Rendering */}
            <div className="lightbox-doc" style={{ padding: "2rem", border: "4px double var(--primary)", position: "relative" }}>
              <div style={{ position: "absolute", top: "10px", left: "10px", fontSize: "10px", opacity: 0.3, fontWeight: "bold" }}>ORIGINAL COPY</div>
              <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🇮🇳</div>
              <div style={{ fontFamily: "Georgia, serif", fontSize: "1.1rem", fontWeight: "bold", letterSpacing: "1px", textTransform: "uppercase", color: "var(--primary)" }}>
                Government Certificate
              </div>
              <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", margin: "0.5rem 0" }}>
                Official Trade Registration & Security Compliance
              </div>
              <div style={{ borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)", padding: "0.75rem 0", margin: "1rem 0" }}>
                <div style={{ fontSize: "0.95rem", fontWeight: "700", color: "var(--accent)" }}>{activeCert.number}</div>
                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{lang === "ta" ? activeCert.validityTa : activeCert.validityEn}</div>
              </div>
              <p style={{ fontSize: "0.8rem", lineHeight: "1.5", color: "var(--text-muted)" }}>
                {lang === "ta" ? activeCert.purposeTa : activeCert.purposeEn}
              </p>
            </div>

            <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem" }}>
              <button
                onClick={() => setActiveCert(null)}
                className="btn btn-secondary"
                style={{ flex: 1 }}
              >
                {lang === "ta" ? "மூடுக" : "Close Portal"}
              </button>
              <button
                onClick={() => handlePrintCertificate(activeCert.id)}
                className="btn btn-primary"
                style={{ flex: 1 }}
              >
                <Printer size={16} />
                {lang === "ta" ? "அச்சிடுக" : "Print / PDF"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certifications;
