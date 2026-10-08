import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Volume2, VolumeX, Menu, X, ArrowUpRight, Flame, Shield, Activity, Calendar, Dumbbell } from 'lucide-react';
import { isAudioMuted, toggleAudio, playTick } from '../services/sound';

export default function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [muted, setMuted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMuted(isAudioMuted());

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const isNowMuted = toggleAudio();
    setMuted(!isNowMuted);
    playTick();
  };

  const navLinks = [
    { to: '/', label: 'MISSION INTEL', num: '01' },
    { to: '/stations', label: '7 STATIONS', num: '02' },
    { to: '/rulebook', label: 'RULEBOOK', num: '03' },
    { to: '/register', label: 'RESERVE DUO', num: '04' }
  ];

  return (
    <>
      {/* Top Technical Marquee Ribbon */}
      <div className="bg-[#050608] text-[#848CA0] text-[11px] font-mono tracking-widest uppercase border-b border-[#1A1F2C] py-1.5 px-4 overflow-hidden select-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2 h-2 rounded-full bg-[#D2F824] pulse-target"></span>
            <span className="text-[#F8F9FA] font-bold">ASPIRE AIML × RUGGEDIAN™</span>
            <span className="text-[#363D4F] hidden sm:inline">///</span>
            <span className="hidden sm:inline text-[#D2F824] font-black">YODHA RACE 2026 // HYROX ARENA</span>
          </div>
          <div className="flex items-center gap-4 text-[10px] sm:text-[11px]">
            <span className="hidden md:inline text-[#848CA0]">VENUE: DYPCET ATHLETIC TURF, KOLHAPUR</span>
            <span className="text-[#363D4F] hidden md:inline">|</span>
            <span className="text-[#F8F9FA] font-bold">DATE: SAT, 17 OCT 2026</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar (Hardcore Dark Gym) */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 bg-[#080A0E]/95 backdrop-blur-md border-b-2 border-[#1E2332] shadow-[0_4px_25px_rgba(0,0,0,0.8)] ${
          scrolled ? 'py-3' : 'py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & College Credential */}
          <Link
            to="/"
            onClick={playTick}
            className="flex items-center gap-3 group text-decoration-none"
          >
            <div className="w-10 h-10 flex items-center justify-center font-display font-black text-xl tracking-tighter border-2 border-[#D2F824] bg-[#0E1118] text-[#D2F824] shadow-[0_0_12px_rgba(210,248,36,0.3)] transition-transform duration-200 group-hover:scale-105 rounded-xs">
              YR
            </div>
            <div className="flex flex-col">
              <span className="font-display text-2xl sm:text-3xl font-black tracking-tight leading-none text-[#F8F9FA] group-hover:text-[#D2F824] transition-colors">
                YODHA RACE
              </span>
              <span className="font-mono text-[9px] tracking-widest text-[#7E879B] uppercase font-bold mt-0.5">
                AIML ASPIRE × RUGGEDIAN™
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={playTick}
                  className={`px-4 py-2 text-xs font-mono font-black tracking-wider uppercase transition-all duration-200 rounded-sm relative flex items-center gap-1.5 ${
                    isActive
                      ? 'text-[#08090C] bg-[#D2F824] shadow-[0_0_15px_rgba(210,248,36,0.35)]'
                      : 'text-[#949CAE] hover:text-[#F8F9FA] hover:bg-[#151924] border border-transparent hover:border-[#222838]'
                  }`}
                >
                  <span className={`text-[9px] ${isActive ? 'text-[#08090C]' : 'text-[#555C6E]'}`}>{link.num}</span>
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-3">
            {/* Audio Toggle */}
            <button
              onClick={handleSoundToggle}
              title={muted ? 'Unmute Audio Feedback' : 'Mute Audio Feedback'}
              className="p-2 rounded-full border border-[#232838] bg-[#12151E] text-[#949CAE] hover:text-[#F8F9FA] hover:border-[#D2F824] transition-all text-xs flex items-center justify-center"
            >
              {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#D2F824]" />}
            </button>

            {/* Primary CTA */}
            <Link
              to="/register"
              onClick={playTick}
              className="btn-pill-volt !py-2 !px-4 text-xs font-mono hidden sm:inline-flex"
            >
              <span>REGISTER DUO (₹100)</span>
              <span className="btn-arrow !w-5 !h-5">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => {
                playTick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="lg:hidden p-2 rounded border border-[#232838] bg-[#12151E] text-[#F8F9FA]"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0A0C10] border-b-2 border-[#1E2332] px-6 py-6 animate-in slide-in-from-top-4 duration-200">
            <div className="space-y-3">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => {
                      playTick();
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center justify-between p-3.5 rounded font-mono text-sm uppercase tracking-wider font-bold ${
                      isActive
                        ? 'bg-[#151924] text-[#D2F824] border-l-4 border-[#D2F824]'
                        : 'text-[#949CAE] hover:bg-[#12151E] hover:text-[#F8F9FA]'
                    }`}
                  >
                    <span>{link.num} // {link.label}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-70" />
                  </Link>
                );
              })}
            </div>

            <div className="mt-6 pt-6 border-t border-[#1E2332] flex flex-col gap-3">
              <Link
                to="/register"
                onClick={() => {
                  playTick();
                  setMobileMenuOpen(false);
                }}
                className="btn-pill-volt w-full justify-center text-sm"
              >
                <span>RESERVE DUO SLOT (₹100)</span>
                <span className="btn-arrow">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </Link>
              <div className="text-center font-mono text-[10px] text-[#7E879B] uppercase pt-1 font-bold">
                DYPCET ATHLETIC TURF • KOLHAPUR
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
