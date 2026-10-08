import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileActionBar from './components/MobileActionBar';
import HomePage from './pages/HomePage';
import StationsPage from './pages/StationsPage';
import RulebookPage from './pages/RulebookPage';
import RegisterPage from './pages/RegisterPage';
import { initAudioSetting } from './services/sound';

// Scroll to top automatically on route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  useEffect(() => {
    initAudioSetting();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#F5F4F0] text-[#0E0F12]">
      <ScrollToTop />
      
      {/* Top Navigation */}
      <Navbar />

      {/* Main Routed Page Content */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/stations" element={<StationsPage />} />
          <Route path="/rulebook" element={<RulebookPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      {/* Mobile Sticky Floating Action Bar */}
      <MobileActionBar />

      {/* Footer */}
      <Footer />
    </div>
  );
}
