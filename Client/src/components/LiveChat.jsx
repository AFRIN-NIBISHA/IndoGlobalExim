import React, { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import { useApp } from "../context/AppContext";

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const { t, lang } = useApp();
  const messagesEndRef = useRef(null);

  // Initialize welcome message
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: 1,
          sender: "bot",
          text: t("chatWelcome")
        }
      ]);
    }
  }, [lang]);

  // Scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  const faqOptions = [
    { key: "faq1", question: t("chatFAQ1"), answer: t("chatReplyLead") },
    { key: "faq2", question: t("chatFAQ2"), answer: t("chatReplySamples") },
    { key: "faq3", question: t("chatFAQ3"), answer: t("chatReplyPayments") }
  ];

  const handleOptionClick = (option) => {
    // Add user question
    const userMsgId = Date.now();
    setMessages((prev) => [
      ...prev,
      { id: userMsgId, sender: "user", text: option.question }
    ]);

    // Simulate bot typing
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, sender: "bot", text: option.answer }
      ]);
    }, 800);
  };

  return (
    <>
      {isOpen && (
        <div className="chat-drawer">
          {/* Header */}
          <div className="chat-header">
            <div className="chat-header-info">
              <div className="chat-avatar-status">
                <div
                  className="flex-center"
                  style={{
                    width: "36px",
                    height: "36px",
                    backgroundColor: "var(--accent)",
                    color: "var(--primary)",
                    borderRadius: "50%",
                    fontWeight: "bold"
                  }}
                >
                  A
                </div>
                <div className="chat-status-dot"></div>
              </div>
              <div>
                <h4 style={{ color: "#fff", fontSize: "0.9rem" }}>Exim Assistant</h4>
                <p style={{ color: "var(--accent)", fontSize: "0.7rem", fontWeight: "600" }}>ONLINE</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{ background: "none", border: "none", color: "#fff", cursor: "pointer" }}
              aria-label="Close Chat"
            >
              <X size={18} />
            </button>
          </div>

          {/* Message List */}
          <div className="chat-messages">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`chat-bubble ${msg.sender === "bot" ? "chat-bubble-bot" : "chat-bubble-user"}`}
              >
                {msg.text}
              </div>
            ))}
            {isTyping && (
              <div className="chat-bubble chat-bubble-bot" style={{ display: "flex", gap: "3px", padding: "0.6rem 1rem" }}>
                <span className="dot" style={{ width: "6px", height: "6px", backgroundColor: "var(--text-muted)", borderRadius: "50%", display: "inline-block", animation: "pulse 1s infinite alternate" }}></span>
                <span className="dot" style={{ width: "6px", height: "6px", backgroundColor: "var(--text-muted)", borderRadius: "50%", display: "inline-block", animation: "pulse 1s infinite alternate 0.2s" }}></span>
                <span className="dot" style={{ width: "6px", height: "6px", backgroundColor: "var(--text-muted)", borderRadius: "50%", display: "inline-block", animation: "pulse 1s infinite alternate 0.4s" }}></span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick FAQ Selection */}
          <div className="chat-options-box">
            <p style={{ fontSize: "0.75rem", fontWeight: "bold", color: "var(--text-muted)", marginBottom: "0.25rem" }}>
              {lang === "ta" ? "பொதுவான கேள்விகள்:" : "Select a question:"}
            </p>
            {faqOptions.map((opt) => (
              <button
                key={opt.key}
                className="chat-option-btn"
                onClick={() => handleOptionClick(opt)}
                disabled={isTyping}
              >
                {opt.question}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Trigger Button */}
      <button
        className="widget-btn chat-btn"
        onClick={() => setIsOpen(!isOpen)}
        style={{ backgroundColor: "var(--primary)" }}
        aria-label="Toggle Live Chat Assistant"
      >
        {isOpen ? <X size={26} style={{ color: "var(--accent)" }} /> : <MessageSquare size={26} style={{ color: "var(--accent)" }} />}
      </button>

      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.4; }
          100% { transform: scale(1.4); opacity: 1; }
        }
      `}</style>
    </>
  );
};

export default LiveChat;
