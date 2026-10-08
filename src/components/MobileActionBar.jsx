import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Zap, Shield } from 'lucide-react';
import { playTick } from '../services/sound';

export default function MobileActionBar() {
  const location = useLocation();

  // Hide on register page to avoid duplication
  if (location.pathname === '/register') {
    return null;
  }

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0E0F12]/95 backdrop-blur-lg border-t border-[#26272B] p-3 px-4 shadow-[0_-8px_20px_rgba(0,0,0,0.5)]">
      <div className="flex items-center justify-between gap-3">
        {/* Left fee & wave indicator */}
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#8E929B] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D2F824] animate-pulse"></span>
            <span>SLOTS OPEN</span>
          </div>
          <div className="font-display text-lg font-black text-[#F5F4F0] leading-none">
            ₹100 <span className="text-xs font-mono text-[#D2F824] font-bold">/ DUO</span>
          </div>
        </div>

        {/* Action Button */}
        <Link
          to="/register"
          onClick={playTick}
          className="btn-pill-volt !py-2.5 !px-4 text-xs font-mono tracking-wider flex-1 max-w-[210px] justify-center"
        >
          <span>REGISTER NOW</span>
          <span className="btn-arrow !w-5 !h-5">
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </Link>
      </div>
    </div>
  );
}
