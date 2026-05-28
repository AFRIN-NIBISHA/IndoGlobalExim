import React, { useState, useEffect } from "react";
import { Send, CheckCircle } from "lucide-react";
import { useApp } from "../context/AppContext";
import { products } from "../data/productsData";
import { CONFIG } from "../config";
import emailjs from "@emailjs/browser";

const InquiryForm = ({ initialProduct = "" }) => {
  const { t, lang } = useApp();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: initialProduct,
    quantity: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync initialProduct if it changes (e.g. inside a modal selection)
  useEffect(() => {
    if (initialProduct) {
      setFormData((prev) => ({ ...prev, product: initialProduct }));
    }
  }, [initialProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert(lang === "ta" ? "தயவுசெய்து தேவையான அனைத்து விவரங்களையும் நிரப்பவும்." : "Please fill in all required fields.");
      return;
    }
    setIsSubmitting(true);

    const hasTelegram = !!(CONFIG.TELEGRAM_BOT_TOKEN && CONFIG.TELEGRAM_CHAT_ID);
    const hasEmailJS = !!(CONFIG.EMAILJS_SERVICE_ID && CONFIG.EMAILJS_TEMPLATE_ID && CONFIG.EMAILJS_PUBLIC_KEY);

    // 1. Prepare Email Notification
    let emailPromise = Promise.resolve();
    if (hasEmailJS) {
      // Premium Custom Template email via EmailJS
      emailPromise = emailjs.send(
        CONFIG.EMAILJS_SERVICE_ID,
        CONFIG.EMAILJS_TEMPLATE_ID,
        {
          subject: `New Bulk Inquiry from ${formData.name} - SecureAgri Impex`,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          product: formData.product || "Not Specified",
          quantity: formData.quantity || "Not Specified",
          message: formData.message || "No message provided."
        },
        CONFIG.EMAILJS_PUBLIC_KEY
      )
        .then((response) => {
          console.log("Email sent successfully via EmailJS!", response.status, response.text);
        })
        .catch((error) => {
          console.error("EmailJS sending failed:", error);
        });
    } else {
      // Clean HTML Table fallback email via FormSubmit (Direct to afrinnibisha65@gmail.com)
      const targetEmail = "afrinnibisha65@gmail.com";
      emailPromise = fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          _subject: `New Bulk Inquiry: ${formData.product || "General"} - SecureAgri Impex`,
          _captcha: "false",
          _template: "table", // Renders structured HTML table instead of plain list
          "Client Name / Company": formData.name,
          "Email Address": formData.email,
          "Phone / WhatsApp": formData.phone,
          "Selected Product": formData.product || "Not Specified",
          "Order Quantity": formData.quantity || "Not Specified",
          "Special Requirements": formData.message || "No message provided."
        })
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("FormSubmit response:", data);
        })
        .catch((err) => console.error("Error submitting email via FormSubmit:", err));
    }

    // 2. Prepare Telegram Notification via Bot API
    let telegramPromise = Promise.resolve();
    if (hasTelegram) {
      const messageText = `🔔 *New Bulk Inquiry Received!*\n\n` +
                          `👤 *Name/Company:* ${formData.name}\n` +
                          `📧 *Email:* ${formData.email}\n` +
                          `📞 *Phone:* ${formData.phone}\n` +
                          `🌾 *Product:* ${formData.product || "Not Specified"}\n` +
                          `⚖️ *Quantity:* ${formData.quantity || "Not Specified"}\n` +
                          `💬 *Message:* ${formData.message || "No message provided."}`;

      telegramPromise = fetch(`https://api.telegram.org/bot${CONFIG.TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CONFIG.TELEGRAM_CHAT_ID,
          text: messageText,
          parse_mode: "Markdown"
        })
      })
        .then((res) => res.json())
        .then((data) => {
          if (!data.ok) {
            console.error("Telegram Bot API submission failed:", data.description);
          } else {
            console.log("Telegram notification sent successfully!");
          }
        })
        .catch((err) => console.error("Error submitting to Telegram Bot API:", err));
    } else {
      console.warn("Telegram Bot Token or Chat ID is not configured in Client/src/config.js. Sourcing mock Telegram dispatch instead.");
    }

    try {
      // Add a minimum duration of 1000ms for loading state transitions
      await Promise.all([
        emailPromise,
        telegramPromise,
        new Promise((resolve) => setTimeout(resolve, 1000))
      ]);
    } catch (err) {
      console.error("Notification dispatch encountered errors:", err);
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      product: "",
      quantity: "",
      message: ""
    });
  };

  if (isSubmitted) {
    return (
      <div className="inquiry-box text-center" style={{ animation: "slideUp 0.4s ease-out" }}>
        <CheckCircle size={64} style={{ color: "var(--success)", marginBottom: "1.5rem" }} />
        <h3 style={{ marginBottom: "1rem", color: "var(--primary)" }}>
          {lang === "ta" ? "விசாரணை பெறப்பட்டது!" : "Inquiry Received!"}
        </h3>
        <p className="text-muted" style={{ marginBottom: "2rem" }}>
          {t("formSuccess")}
        </p>
        <button onClick={() => setIsSubmitted(false)} className="btn btn-primary">
          {lang === "ta" ? "புதிய விசாரணையை அனுப்புக" : "Submit Another Inquiry"}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="inquiry-box" style={{ animation: "slideUp 0.4s ease-out" }}>
      <h3 style={{ marginBottom: "1.5rem", borderBottom: "2px solid var(--accent)", paddingBottom: "0.5rem" }}>
        {t("inquiryFormTitle")}
      </h3>

      <div className="form-group">
        <label htmlFor="name">{t("formName")} *</label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-control"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="e.g. John Doe / Global Foods Co."
        />
      </div>

      <div className="grid grid-2" style={{ gap: "1rem" }}>
        <div className="form-group">
          <label htmlFor="email">{t("formEmail")} *</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="e.g. buyer@company.com"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">{t("formPhone")} *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="form-control"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="e.g. +1 555 123 4567"
          />
        </div>
      </div>

      <div className="grid grid-2" style={{ gap: "1rem" }}>
        <div className="form-group">
          <label htmlFor="product">{t("formProduct")}</label>
          <select
            id="product"
            name="product"
            className="form-control"
            value={formData.product}
            onChange={handleChange}
          >
            <option value="">{lang === "ta" ? "-- தயாரிப்பைத் தேர்ந்தெடுக்கவும் --" : "-- Select Product --"}</option>
            {products.map((p) => (
              <option key={p.id} value={p.nameEn}>
                {lang === "ta" ? p.nameTa : p.nameEn}
              </option>
            ))}
            <option value="Other Product">{lang === "ta" ? "பிற தயாரிப்புகள் / தனிப்பயன்" : "Other / Bulk Custom Commodity"}</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="quantity">{t("formQuantity")}</label>
          <input
            type="text"
            id="quantity"
            name="quantity"
            className="form-control"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="e.g. 15 Metric Tons"
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="message">{t("formMessage")}</label>
        <textarea
          id="message"
          name="message"
          className="form-control"
          value={formData.message}
          onChange={handleChange}
          placeholder="Detailed specifications, shipping port, packing preferences..."
        ></textarea>
      </div>

      <button type="submit" className="btn btn-primary" style={{ width: "100%" }} disabled={isSubmitting}>
        <Send size={16} />
        {isSubmitting ? t("formSending") : t("formSubmit")}
      </button>
    </form>
  );
};

export default InquiryForm;
