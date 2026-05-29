import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFloating from "./components/WhatsAppFloating";
import LiveChat from "./components/LiveChat";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Certifications from "./pages/Certifications";
import WhyChooseUs from "./pages/WhyChooseUs";
import Contact from "./pages/Contact";
import PolicyPages from "./pages/PolicyPages";

// Helper component to initialize scroll reveal animations on route changes
const ScrollRevealInit = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on page change
    window.scrollTo(0, 0);

    // Short timeout to wait for React rendering to finish
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("active");
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.05,
          rootMargin: "0px 0px -50px 0px"
        }
      );

      const elements = document.querySelectorAll(".reveal");
      elements.forEach((el) => {
        if (el.classList.contains("active")) return;
        observer.observe(el);
      });

      return () => {
        elements.forEach((el) => observer.unobserve(el));
        observer.disconnect();
      };
    }, 150);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <AppProvider>
      <Router>
        <ScrollRevealInit />
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
          {/* Header Navigation */}
          <Navbar />

          {/* Page Routing */}
          <main style={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/certifications" element={<Certifications />} />
              <Route path="/why-choose-us" element={<WhyChooseUs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/policy/:policyType" element={<PolicyPages />} />
              <Route path="*" element={<Home />} /> {/* Fallback routing */}
            </Routes>
          </main>

          {/* Shared Footer */}
          <Footer />

          {/* Floating Actions Widgets Container */}
          <div className="widgets-container">
            <WhatsAppFloating />
            <LiveChat />
          </div>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
