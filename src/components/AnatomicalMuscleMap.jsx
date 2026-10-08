import React from 'react';
import { Target, Activity, Flame, Shield } from 'lucide-react';

export default function AnatomicalMuscleMap({ muscles = [], activeStationTitle = "GAUNTLET ZONE" }) {
  // Map of primary muscle locations for technical visual telemetry
  const muscleNodes = [
    { id: 'deltoids', label: 'DELTOIDS / CHEST', x: '50%', y: '26%', side: 'top' },
    { id: 'lats', label: 'LATISSIMUS / BACK', x: '50%', y: '36%', side: 'right' },
    { id: 'core', label: 'CORE / ABDOMINALS', x: '50%', y: '46%', side: 'center' },
    { id: 'grip', label: 'FOREARMS / GRIP', x: '22%', y: '50%', side: 'left' },
    { id: 'quads', label: 'QUADRICEPS', x: '44%', y: '68%', side: 'center' },
    { id: 'hamstrings', label: 'HAMSTRINGS / GLUTES', x: '56%', y: '72%', side: 'center' },
    { id: 'calves', label: 'CALVES / SOLEUS', x: '50%', y: '86%', side: 'bottom' },
  ];

  return (
    <div className="bg-[#141518] border border-[#26272B] p-5 rounded-sm relative overflow-hidden">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#26272B]">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-[#D2F824]" />
          <span className="font-mono text-xs font-bold text-[#F5F4F0] uppercase tracking-wider">
            ANATOMICAL TELEMETRY
          </span>
        </div>
        <span className="badge-tech badge-tech-volt text-[10px]">
          PHYSIO DATA
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Visual Wireframe Humanoid athletic graphic with target crosshairs */}
        <div className="md:col-span-5 relative flex items-center justify-center p-4 bg-[#0E0F12] border border-[#26272B] rounded min-h-[260px]">
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none"></div>

          {/* SVG Athletic Silhouette Graphic */}
          <svg
            viewBox="0 0 120 240"
            className="w-36 h-64 text-[#26272B] fill-current stroke-[#3B82F6] stroke-[0.8]"
          >
            {/* Head */}
            <circle cx="60" cy="22" r="14" fill="#1C1E23" stroke="#D2F824" strokeWidth="1.2" />
            {/* Neck & Traps */}
            <path d="M52,36 L68,36 L78,48 L42,48 Z" fill="#22252C" stroke="#8E929B" />
            {/* Torso / Pectorals */}
            <path d="M42,48 L78,48 L74,96 L46,96 Z" fill="#1C1E23" stroke="#3B82F6" strokeWidth="1" />
            {/* Core / Abdominals grid */}
            <line x1="60" y1="52" x2="60" y2="92" stroke="#D2F824" strokeDasharray="2,2" />
            <line x1="48" y1="64" x2="72" y2="64" stroke="#D2F824" strokeDasharray="2,2" />
            <line x1="48" y1="78" x2="72" y2="78" stroke="#D2F824" strokeDasharray="2,2" />
            {/* Left Arm & Forearm */}
            <path d="M42,48 L28,80 L20,118 L26,120 L35,84 L44,52 Z" fill="#1C1E23" stroke="#8E929B" />
            {/* Right Arm & Forearm */}
            <path d="M78,48 L92,80 L100,118 L94,120 L85,84 L76,52 Z" fill="#1C1E23" stroke="#8E929B" />
            {/* Pelvis / Glutes */}
            <path d="M46,96 L74,96 L80,120 L40,120 Z" fill="#22252C" stroke="#3B82F6" />
            {/* Left Leg / Quads / Calf */}
            <path d="M42,120 L36,170 L34,226 L44,226 L48,172 L58,120 Z" fill="#1C1E23" stroke="#D2F824" strokeWidth="1" />
            {/* Right Leg / Quads / Calf */}
            <path d="M62,120 L72,172 L76,226 L86,226 L84,170 L78,120 Z" fill="#1C1E23" stroke="#D2F824" strokeWidth="1" />
          </svg>

          {/* Glowing target indicators on key zones */}
          <div className="absolute top-[32%] left-[48%] -translate-x-1/2 -translate-y-1/2">
            <span className="block w-3 h-3 rounded-full bg-[#D2F824] pulse-target"></span>
          </div>
          <div className="absolute top-[68%] left-[38%] -translate-x-1/2 -translate-y-1/2">
            <span className="block w-2.5 h-2.5 rounded-full bg-[#1D4ED8] animate-ping"></span>
          </div>
          <div className="absolute top-[86%] left-[62%] -translate-x-1/2 -translate-y-1/2">
            <span className="block w-2.5 h-2.5 rounded-full bg-[#D2F824]"></span>
          </div>

          {/* Technical caliper labels overlay */}
          <div className="absolute top-2 left-2 text-[9px] font-mono text-[#8E929B]">
            TARGET: ACTIVE ENGAGEMENT
          </div>
          <div className="absolute bottom-2 right-2 text-[9px] font-mono text-[#D2F824]">
            LACTATE INDEX: HIGH
          </div>
        </div>

        {/* Breakdown of Muscle Groups & Intensity Bars */}
        <div className="md:col-span-7 space-y-3.5">
          <div className="font-mono text-[11px] text-[#8E929B] uppercase tracking-wider mb-2">
            ENGAGEMENT BREAKDOWN // {activeStationTitle}
          </div>

          {muscles.map((muscle, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#F5F4F0] font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#D2F824] inline-block"></span>
                  {muscle.name}
                </span>
                <span className="text-[#D2F824] font-bold">{muscle.intensity}% LOAD</span>
              </div>
              {/* Load Bar */}
              <div className="w-full h-2 bg-[#0E0F12] border border-[#26272B] rounded-full overflow-hidden p-[1px]">
                <div
                  className="h-full bg-gradient-to-r from-[#1D4ED8] via-[#D2F824] to-[#E2FF4A] rounded-full transition-all duration-500"
                  style={{ width: `${muscle.intensity}%` }}
                ></div>
              </div>
            </div>
          ))}

          {/* Physiology Insight Box */}
          <div className="mt-4 p-3 bg-[#0E0F12] border border-[#26272B] rounded text-[11px] font-mono text-[#8E929B] leading-relaxed flex items-start gap-2">
            <Flame className="w-4 h-4 text-[#D2F824] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#F5F4F0]">Physiological Demand:</strong> Rapid glycogen depletion with heavy reliance on type-II fast-twitch motor units. Ensure optimal breath cadence between work intervals.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
