import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <AppProvider>
      <Router>
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
