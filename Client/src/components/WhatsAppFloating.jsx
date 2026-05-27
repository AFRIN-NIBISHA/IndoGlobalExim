import React, { useState } from "react";
import { MessageSquare, Send, X } from "lucide-react";
import { useApp } from "../context/AppContext";

const WhatsAppFloating = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, lang } = useApp();

  const phoneNumber = "918870778542"; // Default company contact number

  const departments = [
    {
      nameEn: "Sales & Bulk Inquiries",
      nameTa: "விற்பனை மற்றும் மொத்த விசாரணைகள்",
      descEn: "Get instant price quotes & MOQ details",
      descTa: "விலை விவரங்கள் மற்றும் MOQ அறிய",
      msg: "Hi IndoGlobal Exim Sales team, I am interested in a bulk import inquiry."
    },
    {
      nameEn: "Logistics & Shipping",
      nameTa: "ஷிப்பிங் & தளவாடங்கள் பிரிவு",
      descEn: "Track your containers & delivery schedules",
      descTa: "சரக்கு கன்டெய்னர் கண்காணிப்பு மற்றும் விநியோக கால அட்டவணை",
      msg: "Hi IndoGlobal Exim Logistics team, I would like to check shipment status."
    },
    {
      nameEn: "Documentation & Customs",
      nameTa: "சுங்க ஆவணங்கள் பிரிவு",
      descEn: "Inquire about APEDA, FSSAI, L/C, B/L documentation",
      descTa: "APEDA, FSSAI, L/C, B/L ஆவணங்கள் பற்றி அறிய",
      msg: "Hi IndoGlobal Exim Documentation team, I need information regarding custom clearance docs."
    }
  ];

  const handleOpenChat = (msg) => {
    const encodedMsg = encodeURIComponent(msg);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMsg}`, "_blank");
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="whatsapp-drawer">
          {/* Header */}
          <div className="whatsapp-header">
            <div className="whatsapp-avatar">IE</div>
            <div>
              <h4 style={{ color: "#fff", fontSize: "0.95rem" }}>IndoGlobal Exim</h4>
              <p style={{ color: "#a7f3d0", fontSize: "0.75rem" }}>Typically replies in 15 minutes</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{ marginLeft: "auto", background: "none", border: "none", color: "#fff", cursor: "pointer" }}
              aria-label="Close WhatsApp chat"
            >
              <X size={18} />
            </button>
          </div>

          {/* Body Message */}
          <div className="whatsapp-body">
            <div className="whatsapp-msg-bubble">
              <p>{lang === "ta" ? "வணக்கம்! நீங்கள் எந்த துறையுடன் தொடர்பு கொள்ள விரும்புகிறீர்கள்?" : "Hello! Which department would you like to chat with?"}</p>
            </div>

            {/* Department Choices */}
            <div className="whatsapp-dept-list">
              {departments.map((dept, index) => (
                <div
                  key={index}
                  className="whatsapp-dept-card"
                  onClick={() => handleOpenChat(dept.msg)}
                >
                  <div>
                    <div className="whatsapp-dept-name">
                      {lang === "ta" ? dept.nameTa : dept.nameEn}
                    </div>
                    <div className="whatsapp-dept-desc">
                      {lang === "ta" ? dept.descTa : dept.descEn}
                    </div>
                  </div>
                  <Send size={14} style={{ color: "#25D366" }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Button */}
      <button
        className="widget-btn whatsapp-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Chat on WhatsApp"
      >
        <svg
          viewBox="0 0 24 24"
          width="28"
          height="28"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ transform: "translateY(1px)" }}
        >
          <path
            fill="currentColor"
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.46h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
          />
        </svg>
      </button>
    </>
  );
};

export default WhatsAppFloating;
