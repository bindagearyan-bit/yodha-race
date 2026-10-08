import React from 'react';
import { ArrowUpRight, Dumbbell, Gauge, Target, Zap, Activity } from 'lucide-react';
import { playTick } from '../services/sound';

export default function StationCard({ station, gender, onSelect }) {
  const profile = gender === 'male' ? station.male : station.female;

  return (
    <div
      onClick={() => {
        playTick();
        onSelect(station);
      }}
      className="station-card bg-[#141518] text-[#F5F4F0] border border-[#26272B] hover:border-[#D2F824] p-5 sm:p-6 rounded-sm cursor-pointer relative group flex flex-col justify-between overflow-hidden"
    >
      {/* Corner crosshair accents */}
      <span className="absolute top-2 left-2 text-[9px] font-mono text-[#5A5D64] select-none">+</span>
      <span className="absolute top-2 right-2 text-[9px] font-mono text-[#5A5D64] select-none">+</span>
      <span className="absolute bottom-2 left-2 text-[9px] font-mono text-[#5A5D64] select-none">+</span>
      <span className="absolute bottom-2 right-2 text-[9px] font-mono text-[#5A5D64] select-none">+</span>

      {/* Top Header Row */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="font-display text-4xl sm:text-5xl font-black text-[#5A5D64] group-hover:text-[#D2F824] transition-colors leading-none">
            {station.number}
          </span>
          <div className="flex items-center gap-2">
            <span className="badge-tech badge-tech-dark text-[10px]">
              {gender === 'male' ? '♂ MALE SPEC' : '♀ FEMALE SPEC'}
            </span>
          </div>
        </div>

        <div className="font-mono text-[10px] text-[#8E929B] uppercase tracking-wider mb-1">
          {station.category}
        </div>
        <h3 className="font-display text-2xl sm:text-3xl font-black text-[#F5F4F0] group-hover:text-[#D2F824] transition-colors leading-tight mb-2">
          {station.title}
        </h3>
        <p className="text-xs text-[#8E929B] line-clamp-2 leading-relaxed mb-4">
          {station.subtitle}
        </p>

        {/* Dynamic Metric Grid */}
        <div className="grid grid-cols-2 gap-2.5 p-3 bg-[#0E0F12] border border-[#26272B] rounded mb-4">
          <div>
            <div className="font-mono text-[9px] text-[#8E929B] uppercase flex items-center gap-1">
              <Dumbbell className="w-3 h-3 text-[#D2F824]" />
              LOAD / SETUP
            </div>
            <div className="font-mono text-xs font-bold text-[#F5F4F0] truncate mt-0.5">
              {profile.load}
            </div>
          </div>
          <div>
            <div className="font-mono text-[9px] text-[#8E929B] uppercase flex items-center gap-1">
              <Gauge className="w-3 h-3 text-[#1D4ED8]" />
              VOLUME / REPS
            </div>
            <div className="font-mono text-xs font-bold text-[#F5F4F0] truncate mt-0.5">
              {profile.target}
            </div>
          </div>
        </div>

        {/* Muscle Focus Pills */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {station.muscles.slice(0, 3).map((m, idx) => (
            <span
              key={idx}
              className="text-[10px] font-mono px-2 py-0.5 bg-[#1C1E23] text-[#8E929B] border border-[#26272B] rounded-xs group-hover:border-[#3B82F6]/40 transition-colors"
            >
              {m.name}
            </span>
          ))}
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="pt-3 border-t border-[#26272B] flex items-center justify-between">
        <span className="font-mono text-[11px] text-[#D2F824] font-bold tracking-wider uppercase group-hover:underline flex items-center gap-1">
          <span>INSPECT PROTOCOL</span>
        </span>
        <span className="w-7 h-7 rounded-full bg-[#1C1E23] group-hover:bg-[#D2F824] text-[#F5F4F0] group-hover:text-[#0E0F12] flex items-center justify-center transition-all duration-200 group-hover:rotate-45">
          <ArrowUpRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </div>
  );
}
