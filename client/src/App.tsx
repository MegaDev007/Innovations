import React from "react";
import Header from "./components/layout/Header";
import HomePage from "./components/home/HomePage";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Terms } from "./components/pages/Terms";
import { RefundPolicy } from "./components/pages/RefundPolicy";
import { PrivacyPolicy } from "./components/pages/PrivacyPolicy";

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/terms-and-conditions" element={<Terms />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            {/* Add other routes as needed */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
