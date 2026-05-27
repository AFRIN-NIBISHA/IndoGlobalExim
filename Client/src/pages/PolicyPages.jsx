import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ShieldAlert, FileText, Compass, AlertCircle } from "lucide-react";
import { useApp } from "../context/AppContext";

const PolicyPages = () => {
  const { policyType } = useParams();
  const { t, lang } = useApp();

  const renderContent = () => {
    switch (policyType) {
      case "privacy":
        return (
          <>
            <h1>{lang === "ta" ? "தனியுரிமைக் கொள்கை" : "Privacy Policy"}</h1>
            <p className="text-muted">Last Updated: May 2026</p>
            <hr style={{ margin: "1.5rem 0", borderColor: "var(--border-color)" }} />
            
            <h2>1. Information We Collect</h2>
            <p>
              We collect details you voluntarily provide through our Bulk Inquiry forms, WhatsApp widget, and live chat assistant. This includes your name, company name, email address, telephone number, product interests, and required order volumes.
            </p>

            <h2>2. How We Use Your Data</h2>
            <p>
              Your business metrics are strictly used to evaluate trade terms, verify custom rules at your discharge ports, and prepare official Proforma Invoices or quotations. We do not sell, rent, or distribute buyer information to third-party marketing companies.
            </p>

            <h2>3. Secure Storage & Retention</h2>
            <p>
              Corporate records of inquiries, contract drafts, and correspondence are retained on secure cloud servers with active firewalls. We preserve these details only as required by Indian customs regulations and international accounting audits.
            </p>

            <h2>4. Disclosures & Legal Duty</h2>
            <p>
              We may disclose corporate credentials to customs brokers, shipping agents, and banking institutions (such as state banks under Letters of Credit) solely to complete export logistics, ocean freight booking, and payment collections.
            </p>
          </>
        );

      case "terms":
        return (
          <>
            <h1>{lang === "ta" ? "விதிமுறைகள் மற்றும் நிபந்தனைகள்" : "Terms & Conditions"}</h1>
            <p className="text-muted">Last Updated: May 2026</p>
            <hr style={{ margin: "1.5rem 0", borderColor: "var(--border-color)" }} />

            <h2>1. Trade Agreement & Offers</h2>
            <p>
              All quotations, prices listed, or catalog metrics are invitations to treat. Contractual obligations are only established when an official Proforma Invoice (PI) is signed by both the buyer and IndoGlobal Exim, accompanied by a confirmed deposit or an active Letter of Credit (L/C).
            </p>

            <h2>2. Pricing & Currency</h2>
            <p>
              Export quotes are given on FOB, CFR, or CIF terms (Incoterms 2020) and are denominated in USD, EUR, or equivalent currencies. Because of variations in shipping freight rates and farm commodity prices, quotes are typically valid for 7 calendar days.
            </p>

            <h2>3. Governing Law & Arbitration</h2>
            <p>
              Any disputes, quality conflicts, or transit delays arising under contracts signed with IndoGlobal Exim will be governed by Indian laws. Disputes will be referred to exclusive arbitration in Chennai, Tamil Nadu, India, under the rules of the Indian Arbitration and Conciliation Act.
            </p>

            <h2>4. Buyer Duty</h2>
            <p>
              Buyers must check that the goods comply with import guidelines in their discharge countries (such as pesticide levels, import licenses, and packing markings). IndoGlobal Exim is not liable for cargo rejected by destination customs due to missing buyer-side import filings.
            </p>
          </>
        );

      case "shipping":
        return (
          <>
            <h1>{lang === "ta" ? "கப்பல் மற்றும் தளவாடக் கொள்கை" : "Shipping & Logistics Policy"}</h1>
            <p className="text-muted">Last Updated: May 2026</p>
            <hr style={{ margin: "1.5rem 0", borderColor: "var(--border-color)" }} />

            <h2>1. Ports of Loading</h2>
            <p>
              Our primary cargo loading gateways are Chennai Port (INMAA1), Tuticorin Port / VO Chidambaranar Port (INTUT1), and Cochin Port (INCOK1), depending on commodity type and destination routing efficiency.
            </p>

            <h2>2. Standard Dispatch Lead Time</h2>
            <p>
              Load-port dispatch takes 10 to 15 business days after receipt of advance deposit or a confirmed operative Letter of Credit (L/C). This period covers phytosanitary testing, fumigation, sorting, customs documentation, and container seal clearances.
            </p>

            <h2>3. Shipping Documentation</h2>
            <p>
              For every FCL/LCL shipment, we supply a standard set of official export documents:
            </p>
            <ul>
              <li>Commercial Invoice (signed)</li>
              <li>Packing List containing net and gross weights</li>
              <li>Original Bill of Lading (B/L) issued by shipping lines</li>
              <li>Certificate of Origin (issued by Chamber of Commerce)</li>
              <li>Phytosanitary Certificate (for agri-products)</li>
              <li>Fumigation Certificate</li>
              <li>SGS Inspection Certificate (if agreed in contract)</li>
            </ul>

            <h2>4. Demurrage & Detention</h2>
            <p>
              IndoGlobal Exim is responsible for customs clearance and port logistics at the load ports in India. Destinational customs clearance, import tariffs, and container demurrage charges at the port of discharge are solely to the account of the buyer.
            </p>
          </>
        );

      case "refund":
        return (
          <>
            <h1>{lang === "ta" ? "திரும்பப் பெறுதல் மற்றும் உரிமைக்கோரல் கொள்கை" : "Refund & Claim Policy"}</h1>
            <p className="text-muted">Last Updated: May 2026</p>
            <hr style={{ margin: "1.5rem 0", borderColor: "var(--border-color)" }} />

            <h2>1. Quality Claims & Inspections</h2>
            <p>
              Buyers must inspect the cargo immediately upon arrival at the port of discharge. Any claims regarding quality variance, weight deficits, moisture issues, or damage must be filed in writing to IndoGlobal Exim within 14 calendar days of container arrival.
            </p>

            <h2>2. Joint Survey Audits</h2>
            <p>
              To justify a claim, the buyer must supply an official survey report conducted by an accredited third-party surveyor (such as SGS, Bureau Veritas, or Intertek) at the port of discharge, detailing the seals and condition of the cargo.
            </p>

            <h2>3. Compensation & Adjustments</h2>
            <p>
              If a claim is validated by the joint surveyor inspection, IndoGlobal Exim will resolve the issue through:
            </p>
            <ul>
              <li>A direct credit note applied to the buyer's next shipment.</li>
              <li>Replacement of defective cargo in the next export cycle.</li>
              <li>Refund of the specific commodity value via bank telegraphic transfer.</li>
            </ul>

            <h2>4. Force Majeure Exclusion</h2>
            <p>
              We are not liable for cargo decay or weight loss caused by shipping transit delays, port strikes, custom detentions at discharge gateways, or acts of God (war, ocean typhoons, pandemics). These risks must be covered by maritime cargo insurance.
            </p>
          </>
        );

      default:
        return (
          <div className="text-center">
            <AlertCircle size={48} style={{ color: "var(--error)", marginBottom: "1rem" }} />
            <h2>Policy Document Not Found</h2>
            <p>Please select a valid policy link from the footer.</p>
          </div>
        );
    }
  };

  return (
    <div className="policy-page">
      <div className="container" style={{ maxWidth: "900px" }}>
        <div style={{ marginBottom: "2rem" }}>
          <Link to="/" className="btn btn-secondary btn-sm">
            <ArrowLeft size={16} /> {lang === "ta" ? "முகப்பு பக்கத்திற்குச் செல்ல" : "Back to Home"}
          </Link>
        </div>

        <div className="policy-content-box">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default PolicyPages;
