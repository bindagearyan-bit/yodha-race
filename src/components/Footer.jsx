import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ShieldCheck, MapPin, Award, HeartPulse, ExternalLink } from 'lucide-react';
import { playTick } from '../services/sound';

export default function Footer() {
  return (
    <footer className="bg-[#0E0F12] text-[#8E929B] border-t border-[#26272B] pt-16 pb-28 md:pb-16 relative overflow-hidden select-none">
      {/* Decorative technical grid background */}
      <div className="absolute inset-0 bg-tech-grid-dark opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Massive Editorial Brand Header */}
        <div className="border-b border-[#26272B] pb-12 mb-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="badge-tech badge-tech-volt">POWERED PARTNERSHIP</span>
                <span className="text-[#5A5D64] font-mono text-xs">///</span>
                <span className="font-mono text-xs text-[#F5F4F0] uppercase tracking-wider">OFFICIAL ATHLETIC GAUNTLET</span>
              </div>
              <h2 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-[#F5F4F0] tracking-tighter leading-none m-0">
                YODHA <span className="text-[#D2F824]">RACE</span>
              </h2>
            </div>
            <div className="max-w-md">
              <p className="text-sm font-sans text-[#8E929B] leading-relaxed mb-4">
                The premier collegiate physical fitness gauntlet inspired by HYROX competitive dynamics. 
                Engineered to test cardiovascular capacity, raw strength endurance, and unbreakable duo synergy.
              </p>
              <div className="flex items-center gap-4 text-xs font-mono text-[#D2F824]">
                <span>AIML ASPIRE</span>
                <span className="text-[#5A5D64]">×</span>
                <span className="text-[#F5F4F0] font-bold">RUGGEDIAN™</span>
                <span className="text-[#5A5D64]">×</span>
                <span>DYPCET</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Technical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-[#26272B]">
          
          {/* Col 1: Collegiate Credentials */}
          <div>
            <div className="font-mono text-xs text-[#F5F4F0] font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#D2F824]"></span>
              COLLEGIATE HOST
            </div>
            <p className="text-xs text-[#8E929B] leading-relaxed mb-3">
              <strong className="text-[#F5F4F0]">ASPIRE Student Association</strong><br />
              Department of Artificial Intelligence & Machine Learning (AIML)<br />
              D.Y. Patil College of Engineering & Technology, Kasaba Bawada, Kolhapur 416006.
            </p>
            <div className="text-[11px] font-mono text-[#5A5D64] flex items-center gap-1.5 mt-2">
              <MapPin className="w-3.5 h-3.5 text-[#D2F824]" />
              <span>16.7050° N, 74.2433° E</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <div className="font-mono text-xs text-[#F5F4F0] font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#1D4ED8]"></span>
              NAVIGATION ARCHITECTURE
            </div>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <Link to="/" onClick={playTick} className="text-[#8E929B] hover:text-[#D2F824] transition-colors flex items-center justify-between">
                  <span>01 // MISSION INTEL</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </Link>
              </li>
              <li>
                <Link to="/stations" onClick={playTick} className="text-[#8E929B] hover:text-[#D2F824] transition-colors flex items-center justify-between">
                  <span>02 // 7-STATION GAUNTLET</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </Link>
              </li>
              <li>
                <Link to="/rulebook" onClick={playTick} className="text-[#8E929B] hover:text-[#D2F824] transition-colors flex items-center justify-between">
                  <span>03 // OFFICIAL RULEBOOK</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </Link>
              </li>
              <li>
                <Link to="/register" onClick={playTick} className="text-[#8E929B] hover:text-[#D2F824] transition-colors flex items-center justify-between">
                  <span>04 // DUO RESERVATION (₹100)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Timings & Waves */}
          <div>
            <div className="font-mono text-xs text-[#F5F4F0] font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#D2F824]"></span>
              RACE DAY PROTOCOLS
            </div>
            <div className="space-y-3 text-xs font-mono">
              <div className="p-2.5 bg-[#141518] border border-[#26272B] rounded">
                <div className="text-[#D2F824] font-bold">WAVE 01 (SY & TY):</div>
                <div className="text-[#F5F4F0]">11:00 AM Sharp Reporting</div>
                <div className="text-[10px] text-[#5A5D64]">Turf Briefing & Heat Flag-off</div>
              </div>
              <div className="p-2.5 bg-[#141518] border border-[#26272B] rounded">
                <div className="text-[#3B82F6] font-bold">WAVE 02 (FE):</div>
                <div className="text-[#F5F4F0]">1:10 PM Sharp Reporting</div>
                <div className="text-[10px] text-[#5A5D64]">Freshmen Gauntlet Briefing</div>
              </div>
            </div>
          </div>

          {/* Col 4: Safety & Medical */}
          <div>
            <div className="font-mono text-xs text-[#F5F4F0] font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#EF4444]"></span>
              EMERGENCY PROTOCOL
            </div>
            <p className="text-xs text-[#8E929B] leading-relaxed mb-3">
              Certified on-site sports medical officers and mobile paramedic units stationed at the finish zone.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-[#F5F4F0] p-2 bg-[#1C1E23] rounded border border-[#26272B]">
              <HeartPulse className="w-4 h-4 text-red-500 animate-pulse" />
              <span>FIRST AID SQUAD ACTIVE</span>
            </div>
          </div>
        </div>

        {/* Bottom Technical Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#5A5D64]">
          <div>
            © 2026 ASPIRE AIML × RUGGEDIAN™. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>SYSTEM HASH: YR-2026-HYROX-DYPCET</span>
            <span>•</span>
            <span className="text-[#D2F824]">STATUS: REGISTRATION OPEN</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
