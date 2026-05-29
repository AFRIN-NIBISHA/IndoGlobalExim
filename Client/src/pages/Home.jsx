import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, ChevronLeft, ChevronRight, CheckCircle2, ShieldCheck, Globe, Clock, Award } from "lucide-react";
import { useApp } from "../context/AppContext";

const AnimatedCounter = ({ target, suffix = "", duration = 1500 }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    if (!window.IntersectionObserver) {
      setHasStarted(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const end = parseInt(target, 10);
    if (start === end) return;

    let startTimestamp = null;
    let animId;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      const easeOutQuad = (t) => t * (2 - t);
      const current = Math.floor(easeOutQuad(progress) * (end - start) + start);
      
      setCount(current);

      if (progress < 1) {
        animId = window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    animId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animId);
  }, [hasStarted, target, duration]);

  return <span ref={elementRef}>{count}{suffix}</span>;
};

const Home = () => {
  const { t, lang } = useApp();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const stats = [
    { target: 15, suffix: "+", labelKey: "statsProducts", icon: <Award size={28} /> },
    { target: 50, suffix: "+", labelKey: "statsCountries", icon: <Globe size={28} /> },
    { target: 100, suffix: "%", labelKey: "statsDelivery", icon: <Clock size={28} /> },
    { target: 24, suffix: "/7", labelKey: "statsSupport", icon: <ShieldCheck size={28} /> }
  ];

  const highlights = [
    {
      id: "rice-basmati-1121",
      nameKey: "Basmati Rice",
      nameTa: "பாசுமதி அரிசி",
      cat: "Basmati Rice",
      img: "/basmati_grain.png",
      descEn: "World-famous extra-long aromatic grain rice, aged to perfection.",
      descTa: "உலகப் புகழ்பெற்ற கூடுதல் நீளமான பாசுமதி அரிசி. சமைத்தவுடன் உதிரியாக மாறும்."
    },
    {
      id: "coconut-fresh-semihusked",
      nameKey: "Semi Husked Coconut",
      cat: "Fresh Coconuts",
      img: "/coconut.png",
      descEn: "Premium fresh semi-husked coconuts from Pollachi, rich in oil.",
      descTa: "பொள்ளாச்சி பகுதியில் இருந்து பெறப்பட்ட நாரோடி உரித்த உயர்தர தேங்காய்கள்."
    },
    {
      id: "coconut-fresh-fullyhusked",
      nameKey: "Fully Husked Coconut",
      nameTa: "முழுமையாக நார் நீக்கிய தேங்காய்",
      cat: "Fresh Coconuts",
      img: "/fully_husked.png",
      descEn: "Clean, washed fully husked shell coconuts, ready for retail and processing.",
      descTa: "பொள்ளாச்சி பகுதியில் இருந்து பெறப்பட்ட தூய்மையான முழு நார் உரித்த தேங்காய்கள்."
    }
  ];

  const testimonials = [
    {
      quoteEn: "We received premium basmati rice samples from SecureAgri Impex. The grain length, aroma, and packaging quality are top-tier. Their transparency during our purchase discussions has been outstanding.",
      quoteTa: "செக்யூர்அக்ரி இம்பெக்ஸ் நிறுவனத்திடமிருந்து பிரீமியம் பாசுமதி அரிசி மாதிரிகளைப் பெற்றோம். அரிசியின் நீளம், நறுமணம் மற்றும் பேக்கிங் தரம் மிகச் சிறப்பாக இருந்தது. எங்களது ஆரம்பக்கட்ட பேச்சுவார்த்தைகளில் அவர்களின் வெளிப்படைத்தன்மை பாராட்டத்தக்கது.",
      client: "Al-Hamad Foods Trading Co.",
      country: "Dubai, UAE",
      stars: 5
    },
    {
      quoteEn: "Their support and responsiveness in providing verified registration proofs and customs compliance details during our procurement process have been highly professional.",
      quoteTa: "எங்கள் கொள்முதல் செயல்பாட்டின் போது சரிபார்க்கப்பட்ட பதிவுச் சான்றுகள் மற்றும் சுங்க இணக்க விவரங்களை வழங்குவதில் அவர்களின் ஆதரவு மற்றும் உடனடி பதிலளிப்பு மிகவும் தொழில்முறையாக இருந்தது.",
      client: "Vogue Imports Ltd.",
      country: "London, UK",
      stars: 5
    },
    {
      quoteEn: "We inspected their trial shipment of fresh coconuts and fully husked coconuts. The moisture levels and weight parameters strictly matched the contract specification sheet.",
      quoteTa: "புதிய தேங்காய்கள் மற்றும் முழுமையாக நார் நீக்கிய தேங்காய்களின் மாதிரிகளை நாங்கள் ஆய்வு செய்தோம். ஈரப்பதம் மற்றும் எடை அளவுகள் ஒப்பந்தத்தில் குறிப்பிட்டபடியே துல்லியமாக இருந்தன.",
      client: "GreenGrow Hydroponics",
      country: "Singapore",
      stars: 5
    }
  ];

  const exportCountries = [
    { name: "India (Origin)", x: "55%", y: "65%", type: "origin" },
    { name: "Dubai, UAE (Transit: 8 Days)", x: "42%", y: "58%", type: "destination" },
    { name: "Singapore (Transit: 6 Days)", x: "65%", y: "74%", type: "destination" },
    { name: "Kuala Lumpur, Malaysia (Transit: 7 Days)", x: "67%", y: "76%", type: "destination" },
    { name: "London, UK (Transit: 22 Days)", x: "28%", y: "30%", type: "destination" },
    { name: "New York, USA (Transit: 28 Days)", x: "12%", y: "35%", type: "destination" },
    { name: "Toronto, Canada (Transit: 30 Days)", x: "10%", y: "28%", type: "destination" }
  ];

  const [hoveredCountry, setHoveredCountry] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ animation: "fadeIn 0.5s ease" }}>
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <h1>{t("heroTitle")}</h1>
          <p>{t("heroSubtitle")}</p>
          <div className="hero-btns">
            <Link to="/contact" className="btn btn-accent">
              {t("btnGetQuote")}
              <ArrowRight size={18} />
            </Link>
            <Link to="/products" className="btn btn-secondary">
              {t("viewAllProducts")}
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="container" style={{ position: "relative", zIndex: 10 }}>
        <div className="stats-bar grid grid-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-item">
              <div className="why-icon" style={{ marginBottom: "0.5rem" }}>
                {stat.icon}
              </div>
              <div className="stat-num">
                <AnimatedCounter target={stat.target} suffix={stat.suffix} />
              </div>
              <div className="stat-label">{t(stat.labelKey)}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Company Intro Section */}
      <section className="section">
        <div className="container">
          <div className="info-row">
            <div className="info-col-text reveal">
              <span className="text-accent" style={{ fontWeight: 700, textTransform: "uppercase", fontSize: "0.85rem", letterSpacing: "1px" }}>
                WHO WE ARE
              </span>
              <h2 style={{ fontSize: "2.25rem", marginTop: "0.5rem", marginBottom: "1.5rem" }}>
                {t("companyIntroTitle")}
              </h2>
              <p>{t("companyIntroDesc1")}</p>
              <p>{t("companyIntroDesc2")}</p>
              <div style={{ marginTop: "2rem" }}>
                <Link to="/about" className="btn btn-primary">
                  {lang === "ta" ? "எங்களை பற்றி அறிய" : "Read Our Full Story"}
                </Link>
              </div>
            </div>
            <div className="info-col-img reveal delay-200">
              <div className="img-frame">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop"
                  alt="SecureAgri Impex Warehouse and Logistics"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section" style={{ backgroundColor: "var(--bg-light)", borderTop: "1px solid var(--border-color)" }}>
        <div className="container">
          <div className="section-header reveal">
            <h2>{t("productHighlights")}</h2>
            <p>{lang === "ta" ? "எங்கள் சிறந்த மற்றும் உலகளாவிய தரம் வாய்ந்த ஏற்றுமதி பொருட்களின் தொகுப்பு." : "A curated selection of our highest-demand export categories."}</p>
          </div>

          <div className="grid grid-3">
            {highlights.map((prod, i) => (
              <div key={prod.id} className={`product-card reveal delay-${(i + 1) * 100}`}>
                <div className="product-img-wrapper">
                  <img src={prod.img} alt={prod.nameKey} />
                  <span className="product-category-tag">{prod.cat}</span>
                </div>
                <div className="product-info">
                  <h3 style={{ fontSize: "1.15rem" }}>
                    {lang === "ta" ? prod.nameTa || prod.nameKey : prod.nameKey}
                  </h3>
                  <p className="product-desc">
                    {lang === "ta" ? prod.descTa : prod.descEn}
                  </p>
                  <div style={{ marginTop: "1rem" }}>
                    <Link to={`/products?id=${prod.id}`} className="btn btn-secondary btn-sm" style={{ width: "100%" }}>
                      {lang === "ta" ? "விவரக்குறிப்புகளைக் காண்க" : "View Specifications"}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: "3rem" }}>
            <Link to="/products" className="btn btn-outline-gold">
              {t("viewAllProducts")} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Export Map */}
      <section className="section" style={{ backgroundColor: "#0A1424", color: "#FFF" }}>
        <div className="container">
          <div className="section-header reveal">
            <h2 style={{ color: "#FFF" }}>{t("countriesTitle")}</h2>
            <p style={{ color: "#94A3B8" }}>{t("countriesSubtitle")}</p>
          </div>

          <div className="map-container reveal delay-200">
            <h3 style={{ color: "var(--accent)", marginBottom: "1rem", textAlign: "center" }}>
              {lang === "ta" ? "விநியோக வழித்தடம் & போக்குவரத்து நேரம்" : "Explore Shipping Routes & Transit Times"}
            </h3>
            <p className="text-center text-muted" style={{ fontSize: "0.9rem", color: "#94A3B8" }}>
              {lang === "ta" ? "குறியீடுகள் மீது கர்சரை நகர்த்தி விவரங்களைப் பார்க்கவும்." : "Hover over the green (origin) and gold (destinations) hubs to view details."}
            </p>

            <div className="map-svg-mock">
              {/* World Map Background silhouette */}
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop"
                alt="World Map Silhouette"
                className="map-bg-image"
              />

              {/* Draw dots */}
              {exportCountries.map((c, i) => (
                <div
                  key={i}
                  className={`map-dot ${c.type === "origin" ? "origin-dot" : ""}`}
                  style={{ left: c.x, top: c.y }}
                  onMouseEnter={() => setHoveredCountry(c)}
                  onMouseLeave={() => setHoveredCountry(null)}
                ></div>
              ))}

              {/* Map Lines from origin (India - 55%, 65%) to others */}
              <svg style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none" }}>
                <path d="M 55% 65% Q 48% 61% 42% 58%" stroke="var(--accent)" strokeWidth="1.5" fill="none" strokeDasharray="5,5" opacity="0.6" />
                <path d="M 55% 65% Q 60% 69% 65% 74%" stroke="var(--accent)" strokeWidth="1.5" fill="none" strokeDasharray="5,5" opacity="0.6" />
                <path d="M 55% 65% Q 61% 70% 67% 76%" stroke="var(--accent)" strokeWidth="1.5" fill="none" strokeDasharray="5,5" opacity="0.6" />
                <path d="M 55% 65% Q 41% 47% 28% 30%" stroke="var(--accent)" strokeWidth="1.5" fill="none" strokeDasharray="5,5" opacity="0.6" />
                <path d="M 55% 65% C 40% 45%, 25% 45%, 12% 35%" stroke="var(--accent)" strokeWidth="1.5" fill="none" strokeDasharray="5,5" opacity="0.6" />
                <path d="M 55% 65% C 38% 40%, 22% 38%, 10% 28%" stroke="var(--accent)" strokeWidth="1.5" fill="none" strokeDasharray="5,5" opacity="0.6" />
              </svg>

              {/* Tooltip */}
              {hoveredCountry && (
                <div
                  className="map-tooltip"
                  style={{
                    left: hoveredCountry.x,
                    top: hoveredCountry.y,
                    animation: "fadeIn 0.2s ease"
                  }}
                >
                  <strong style={{ color: hoveredCountry.type === "origin" ? "var(--success)" : "var(--accent)" }}>
                    {hoveredCountry.name}
                  </strong>
                  <div style={{ fontSize: "0.75rem", marginTop: "0.25rem", color: "#E2E8F0" }}>
                    {hoveredCountry.type === "origin"
                      ? (lang === "ta" ? "தலைமை அலுவலகம் & ஏற்றுமதி மையம்" : "Headquarters & Export Gateway")
                      : (lang === "ta" ? "கடல்வழி போக்குவரத்து மற்றும் விநியோகம்" : "Direct container freight and custom clearances setup.")}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section" style={{ borderBottom: "1px solid var(--border-color)" }}>
        <div className="container">
          <div className="section-header reveal">
            <h2>{t("testimonialsTitle")}</h2>
            <p>{lang === "ta" ? "எங்கள் வாடிக்கையாளர்களின் நம்பிக்கையான சான்றுகள்." : "Feedback from verified wholesale buyers worldwide."}</p>
          </div>

          <div className="testimonial-carousel reveal delay-200">
            <div className="flex-center" style={{ gap: "0.25rem", color: "var(--accent-gold)", marginBottom: "1rem" }}>
              {[...Array(testimonials[currentTestimonial].stars)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>
            <p className="testimonial-quote">
              “{lang === "ta" ? testimonials[currentTestimonial].quoteTa : testimonials[currentTestimonial].quoteEn}”
            </p>
            <div className="testimonial-client">
              {testimonials[currentTestimonial].client}
            </div>
            <div className="testimonial-company">
              {testimonials[currentTestimonial].country}
            </div>

            <div className="carousel-dots">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  className={`carousel-dot ${currentTestimonial === idx ? "active" : ""}`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
