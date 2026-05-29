import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Download, Send, FileText, CheckCircle2, ChevronRight, X, Sparkles } from "lucide-react";
import { useApp } from "../context/AppContext";
import { products, categories } from "../data/productsData";
import InquiryForm from "../components/InquiryForm";

const Products = () => {
  const { t, lang, formatVal } = useApp();
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [inquiryProduct, setInquiryProduct] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Check if there is an initial product parameter from the Home screen
  useEffect(() => {
    const prodId = searchParams.get("id");
    if (prodId) {
      const prod = products.find((p) => p.id === prodId);
      if (prod) {
        setSelectedProduct(prod);
      }
    }
  }, [searchParams]);

  // Image mappings to locally generated high-quality assets and clean Unsplash fallbacks
  const productImageMap = {
    // Basmati Rice
    "rice-basmati-1121": "/basmati_grain.png",

    // Non-Basmati Rice
    "rice-ponni": "/ponni_rice.png",
    "rice-sona-masoori": "/ponni_rice.png",
    "rice-idli": "/idli_rice.png",
    "rice-jeera": "/idli_rice.png",
    "rice-white": "/ponni_rice.png",
    "rice-boiled": "/ponni_rice.png",

    // Organic Rice
    "rice-matta": "/red_rice.png",
    "rice-brown": "/brown_rice.png",
    "rice-black": "/black_rice.png",

    // Fresh Coconuts
    "coconut-fresh-semihusked": "/coconut.png",
    "coconut-fresh-fullyhusked": "/fully_husked.png",
    "coconut-fresh-mature": "/coconut.png",
    "coconut-fresh-tender": "/tender_coconut.png",
    "coconut-fresh-copra": "/coconut.png",


  };

  // Filter products based on Category and Search Query
  const filteredProducts = products.filter((p) => {
    const matchesCategory = selectedCategory === "all" || p.category === selectedCategory;
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch =
      p.nameEn.toLowerCase().includes(searchLower) ||
      p.nameTa.toLowerCase().includes(searchLower) ||
      p.descriptionEn.toLowerCase().includes(searchLower) ||
      p.descriptionTa.toLowerCase().includes(searchLower);

    return matchesCategory && matchesSearch;
  });

  const handleOpenInquiry = (productName) => {
    setInquiryProduct(productName);
    setSelectedProduct(null); // Close modal if open
    // Scroll to the inquiry form at the bottom
    const formSection = document.getElementById("bulk-inquiry-section");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Client-side PDF brochure generator
  const downloadBrochurePDF = (prod) => {
    const printWindow = window.open("", "_blank");
    if (!printWindow) {
      alert("Please allow pop-ups to download the brochure.");
      return;
    }

    const specRows = Object.entries(lang === "ta" ? prod.specificationsTa : prod.specificationsEn)
      .map(([key, val]) => `<tr><td>${key}</td><td>${val}</td></tr>`)
      .join("");

    printWindow.document.write(`
      <html>
        <head>
          <title>${lang === "ta" ? prod.nameTa : prod.nameEn} - Specification Sheet</title>
          <style>
            body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #1E293B; padding: 40px; margin: 0; line-height: 1.5; }
            .header-banner { border-bottom: 4px solid #0F1E36; padding-bottom: 15px; margin-bottom: 30px; display: flex; justify-content: space-between; align-items: center; }
            .logo { font-size: 26px; font-weight: 800; color: #0F1E36; text-transform: uppercase; }
            .logo span { color: #C5A880; }
            .badge-title { background-color: #0F1E36; color: #C5A880; padding: 6px 12px; font-size: 11px; font-weight: 700; border-radius: 4px; letter-spacing: 0.5px; }
            .doc-title { font-size: 28px; font-weight: 700; color: #0F1E36; margin-bottom: 5px; }
            .doc-subtitle { font-size: 14px; color: #64748B; margin-bottom: 30px; border-bottom: 1px solid #E2E8F0; padding-bottom: 15px; }
            .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-bottom: 30px; }
            .section-title { font-size: 16px; font-weight: 700; color: #0F1E36; border-bottom: 2px solid #C5A880; padding-bottom: 6px; margin-bottom: 12px; text-transform: uppercase; }
            table { width: 100%; border-collapse: collapse; margin-bottom: 15px; }
            table td { padding: 9px 6px; border-bottom: 1px solid #E2E8F0; font-size: 13px; }
            table td:first-child { font-weight: 700; color: #0F1E36; width: 45%; }
            table td:last-child { color: #475569; }
            .disclaimer-box { background-color: #F8FAFC; border: 1px solid #E2E8F0; padding: 15px; border-radius: 6px; font-size: 11px; color: #64748B; margin-top: 30px; }
            .footer-info { margin-top: 50px; border-top: 1px solid #E2E8F0; padding-top: 15px; text-align: center; font-size: 11px; color: #94A3B8; }
          </style>
        </head>
        <body>
          <div class="header-banner">
            <div class="logo">SecureAgri<span>Impex</span></div>
            <div class="badge-title">OFFICIAL EXPORT DATASHEET</div>
          </div>
          
          <div class="doc-title">${lang === "ta" ? prod.nameTa : prod.nameEn}</div>
          <div class="doc-subtitle">Product Sourcing Specifications, Standard Logistics & Compliance Metrics</div>

          <div class="grid">
            <div>
              <div class="section-title">Sourcing & Metrics</div>
              <table>
                <tr><td>Origin Gateway</td><td>${lang === "ta" ? prod.originTa : prod.originEn}</td></tr>
                <tr><td>Size / Grading</td><td>${lang === "ta" ? prod.sizeTa : prod.sizeEn}</td></tr>
                <tr><td>Packaging Mode</td><td>${lang === "ta" ? prod.packagingTa : prod.packagingEn}</td></tr>
                <tr><td>Product Shelf Life</td><td>${lang === "ta" ? prod.shelfLifeTa : prod.shelfLifeEn}</td></tr>
              </table>
            </div>

            <div>
              <div class="section-title">Trade Logistics & Compliance</div>
              <table>
                <tr><td>Minimum Order (MOQ)</td><td>${lang === "ta" ? prod.moqTa : prod.moqEn}</td></tr>
                <tr><td>Export Quality Grade</td><td>${lang === "ta" ? prod.exportQualityTa : prod.exportQualityEn}</td></tr>
                <tr><td>Shipping Delivery</td><td>${lang === "ta" ? prod.shippingTa : prod.shippingEn}</td></tr>
              </table>
            </div>
          </div>

          <div class="section-title">Chemical & Physical Composition Analysis</div>
          <table>
            ${specRows}
          </table>

          <div class="disclaimer-box">
            <strong>Standard Export Warranty:</strong> All merchandise is rigorously inspected at load-ports under global guidelines. SecureAgri Impex supplies verified Phytosanitary certifications, Custom Health documents, and SGS verification reports as requested by letters of credit.
          </div>

          <div class="footer-info">
            SecureAgri Impex Co. | Guindy Industrial Estate, Chennai, India | Phone: +91 88707 78542 | Email: info@secureagriimpex.com
          </div>

          <script>
            window.onload = function() {
              window.print();
              setTimeout(function() { window.close(); }, 500);
            }
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
            {t("productsTitle")}
          </h1>
          <p style={{ color: "var(--accent)", fontWeight: "600", letterSpacing: "1px", textTransform: "uppercase" }}>
            {lang === "ta" ? "இந்தியாவின் உயர்தர பிரீமியம் ஏற்றுமதி பொருட்கள்" : "Sourcing Certified Premium Goods Directly from India"}
          </p>
        </div>
      </section>

      {/* Catalog Section */}
      <section className="section">
        <div className="container">
          {/* Search bar & Filter tabs */}
          <div style={{ maxWidth: "600px", margin: "0 auto 2.5rem auto" }} className="reveal">
            <input
              type="text"
              placeholder={lang === "ta" ? "தயாரிப்புகளை தேடுக..." : "Search products, specifications, or categories..."}
              className="form-control"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                borderRadius: "var(--radius-full)",
                padding: "1rem 1.5rem",
                boxShadow: "var(--shadow-md)",
                border: "1px solid var(--border-color)",
                textAlign: "center"
              }}
            />
          </div>

          <div className="filter-bar reveal delay-100">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`filter-btn ${selectedCategory === cat.id ? "active" : ""}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {lang === "ta" ? cat.labelTa || t(cat.labelKey) : cat.labelEn || t(cat.labelKey)}
              </button>
            ))}
          </div>

          {/* Catalog grid */}
          <div className="grid grid-3">
            {filteredProducts.map((prod, i) => (
              <div key={prod.id} className={`product-card reveal delay-${((i % 3) + 1) * 100}`}>
                <div className="product-img-wrapper">
                  <img src={productImageMap[prod.id]} alt={prod.nameEn} />
                  <span className="product-category-tag">
                    {categories.find((c) => c.id === prod.category)?.labelEn}
                  </span>
                </div>
                <div className="product-info">
                  <h3 style={{ fontSize: "1.2rem", color: "var(--primary)" }}>
                    {lang === "ta" ? prod.nameTa : prod.nameEn}
                  </h3>
                  <p className="product-desc" style={{ fontSize: "0.85rem" }}>
                    {lang === "ta" ? prod.descriptionTa : prod.descriptionEn}
                  </p>

                  <div className="product-meta-list">
                    <div className="product-meta-item">
                      <span className="product-meta-label">{t("originLabel")}:</span>
                      <span className="product-meta-val">{lang === "ta" ? prod.originTa : prod.originEn}</span>
                    </div>
                    <div className="product-meta-item">
                      <span className="product-meta-label">{t("moqLabel")}:</span>
                      <span className="product-meta-val">{lang === "ta" ? prod.moqTa : prod.moqEn}</span>
                    </div>
                  </div>

                  <div className="product-card-btns">
                    <button
                      onClick={() => setSelectedProduct(prod)}
                      className="btn btn-secondary btn-sm"
                      style={{ fontSize: "0.8rem" }}
                    >
                      {lang === "ta" ? "விவரங்கள்" : "View Specs"}
                    </button>
                    <button
                      onClick={() => handleOpenInquiry(prod.nameEn)}
                      className="btn btn-primary btn-sm"
                      style={{ fontSize: "0.8rem" }}
                    >
                      {lang === "ta" ? "விசாரணை" : "Inquire"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center" style={{ padding: "4rem 0" }}>
              <p className="text-muted" style={{ fontSize: "1.1rem" }}>
                {lang === "ta" ? "தயாரிப்புகள் எதுவும் கிடைக்கவில்லை." : "No products match your filters or search query."}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ animation: "slideUp 0.3s ease" }}>
            <button className="modal-close-btn" onClick={() => setSelectedProduct(null)} aria-label="Close details">
              <X size={20} />
            </button>

            <div className="modal-img-col">
              <img src={productImageMap[selectedProduct.id]} alt={selectedProduct.nameEn} />
              <span className="product-category-tag" style={{ top: "1.5rem", left: "1.5rem" }}>
                {categories.find((c) => c.id === selectedProduct.category)?.labelEn}
              </span>
            </div>

            <div className="modal-info-col">
              <div className="modal-info-header">
                <h2>{lang === "ta" ? selectedProduct.nameTa : selectedProduct.nameEn}</h2>
                <div style={{ color: "var(--accent)", fontWeight: "600", fontSize: "0.85rem", textTransform: "uppercase" }}>
                  {lang === "ta" ? selectedProduct.originTa : selectedProduct.originEn}
                </div>
              </div>

              <p className="modal-desc">
                {lang === "ta" ? selectedProduct.descriptionTa : selectedProduct.descriptionEn}
              </p>

              <div>
                <h4 style={{ fontSize: "0.95rem", marginBottom: "0.5rem", borderBottom: "1px solid var(--border-color)", paddingBottom: "0.25rem" }}>
                  {t("specificationsLabel")}
                </h4>
                <table className="specs-table">
                  <tbody>
                    <tr>
                      <td>{t("moqLabel")}</td>
                      <td>{lang === "ta" ? selectedProduct.moqTa : selectedProduct.moqEn}</td>
                    </tr>
                    <tr>
                      <td>{t("packagingLabel")}</td>
                      <td>{lang === "ta" ? selectedProduct.packagingTa : selectedProduct.packagingEn}</td>
                    </tr>
                    <tr>
                      <td>{t("shelfLifeLabel")}</td>
                      <td>{lang === "ta" ? selectedProduct.shelfLifeTa : selectedProduct.shelfLifeEn}</td>
                    </tr>
                    <tr>
                      <td>{t("qualityLabel")}</td>
                      <td>{lang === "ta" ? selectedProduct.exportQualityTa : selectedProduct.exportQualityEn}</td>
                    </tr>
                    {Object.entries(lang === "ta" ? selectedProduct.specificationsTa : selectedProduct.specificationsEn).map(([k, v]) => (
                      <tr key={k}>
                        <td>{k}</td>
                        <td>{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="modal-actions">
                <button
                  onClick={() => downloadBrochurePDF(selectedProduct)}
                  className="btn btn-secondary"
                  style={{ flex: 1 }}
                >
                  <FileText size={16} />
                  {lang === "ta" ? "PDF பதிவிறக்கம்" : "Brochure PDF"}
                </button>
                <button
                  onClick={() => handleOpenInquiry(selectedProduct.nameEn)}
                  className="btn btn-primary"
                  style={{ flex: 1 }}
                >
                  <Send size={16} />
                  {lang === "ta" ? "விசாரணை செய்க" : "Get Quote"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Inquiry Form Area */}
      <section id="bulk-inquiry-section" className="section" style={{ backgroundColor: "var(--bg-light)", borderTop: "1px solid var(--border-color)" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="section-header">
            <h2>{lang === "ta" ? "மொத்த கொள்முதல் விசாரணை" : "Request Bulk Quotation"}</h2>
            <p>{lang === "ta" ? "தயாரிப்பு விவரங்கள் மற்றும் அளவை குறிப்பிட்டு விலைப் பட்டியலைப் பெறவும்." : "Submit your specifications below, and our export desk will prepare a quotation."}</p>
          </div>
          <InquiryForm initialProduct={inquiryProduct} />
        </div>
      </section>
    </div>
  );
};

export default Products;
