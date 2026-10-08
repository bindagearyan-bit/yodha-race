import React, { useEffect } from 'react';
import { X, ShieldAlert, CheckCircle2, Users2, Zap, ArrowRight, Gauge, Dumbbell, Activity, AlertTriangle, Flame } from 'lucide-react';
import AnatomicalMuscleMap from './AnatomicalMuscleMap';
import { playTick, playModalOpen } from '../services/sound';

export default function StationDrawer({ station, gender, onGenderToggle, onClose }) {
  useEffect(() => {
    if (!station) return;

    playModalOpen();

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow || 'unset';
    };
  }, [station, onClose]);

  if (!station) return null;

  const currentProfile = gender === 'male' ? station.male : station.female;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#000000]/85 backdrop-blur-md transition-opacity duration-300"
        onClick={() => {
          playTick();
          onClose();
        }}
      ></div>

      {/* Drawer Container */}
      <div className="relative w-full max-w-3xl bg-[#080A0E] text-[#F8F9FA] border-l-2 border-[#202534] h-full overflow-y-auto shadow-[0_0_50px_rgba(0,0,0,0.9)] z-10 flex flex-col">
        
        {/* Drawer Sticky Top Header */}
        <div className="sticky top-0 bg-[#0C0E14]/95 backdrop-blur-md border-b-2 border-[#1E2332] p-4 sm:p-6 flex items-center justify-between z-20">
          <div className="flex items-center gap-3">
            <span className="font-display text-4xl sm:text-5xl font-black text-[#D2F824] leading-none">
              {station.number}
            </span>
            <div className="flex flex-col">
              <span className="font-mono text-[10px] text-[#7E879B] tracking-widest uppercase font-bold">
                {station.tag}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-black text-[#F8F9FA] leading-none tracking-tight">
                {station.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Gender Toggle Inside Drawer */}
            <div className="switch-capsule hidden sm:inline-flex">
              <button
                onClick={() => {
                  playTick();
                  onGenderToggle('male');
                }}
                className={gender === 'male' ? 'active' : 'inactive'}
              >
                ♂ MALE
              </button>
              <button
                onClick={() => {
                  playTick();
                  onGenderToggle('female');
                }}
                className={gender === 'female' ? 'active' : 'inactive'}
              >
                ♀ FEMALE
              </button>
            </div>

            {/* Close Button */}
            <button
              onClick={() => {
                playTick();
                onClose();
              }}
              className="p-2 rounded-full bg-[#161A24] hover:bg-[#D2F824] hover:text-[#08090C] border border-[#262C3E] text-[#949CAE] transition-all"
              aria-label="Close station protocol"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Gender Switcher Bar */}
        <div className="sm:hidden px-4 py-2.5 bg-[#0A0C12] border-b border-[#1E2332] flex justify-center">
          <div className="switch-capsule w-full justify-center">
            <button
              onClick={() => {
                playTick();
                onGenderToggle('male');
              }}
              className={`w-1/2 ${gender === 'male' ? 'active' : 'inactive'}`}
            >
              ♂ MALE ATHLETE
            </button>
            <button
              onClick={() => {
                playTick();
                onGenderToggle('female');
              }}
              className={`w-1/2 ${gender === 'female' ? 'active' : 'inactive'}`}
            >
              ♀ FEMALE ATHLETE
            </button>
          </div>
        </div>

        {/* Main Content Body */}
        <div className="p-4 sm:p-6 lg:p-8 space-y-8 flex-1">
          
          {/* Key Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            <div className="p-4 bg-[#0E1118] border border-[#202534] rounded-sm relative overflow-hidden">
              <div className="flex items-center gap-1.5 text-xs font-mono text-[#7E879B] mb-1 font-bold">
                <Dumbbell className="w-3.5 h-3.5 text-[#D2F824]" />
                <span>LOAD / WEIGHT</span>
              </div>
              <div className="font-display text-2xl sm:text-3xl font-black text-[#F8F9FA] tracking-tight">
                {currentProfile.load}
              </div>
              <div className="font-mono text-[10px] text-[#D2F824] uppercase mt-1 font-bold">
                {gender.toUpperCase()} SPECIFICATION
              </div>
            </div>

            <div className="p-4 bg-[#0E1118] border border-[#202534] rounded-sm relative overflow-hidden">
              <div className="flex items-center gap-1.5 text-xs font-mono text-[#7E879B] mb-1 font-bold">
                <Gauge className="w-3.5 h-3.5 text-[#60A5FA]" />
                <span>VOLUME / REPS</span>
              </div>
              <div className="font-display text-2xl sm:text-3xl font-black text-[#F8F9FA] tracking-tight">
                {currentProfile.target}
              </div>
              <div className="font-mono text-[10px] text-[#7E879B] uppercase mt-1 font-bold">
                MANDATORY FINISH
              </div>
            </div>

            <div className="p-4 bg-[#0E1118] border border-[#202534] rounded-sm relative overflow-hidden">
              <div className="flex items-center gap-1.5 text-xs font-mono text-[#7E879B] mb-1 font-bold">
                <Zap className="w-3.5 h-3.5 text-[#D2F824]" />
                <span>PACING BENCHMARK</span>
              </div>
              <div className="font-display text-2xl sm:text-3xl font-black text-[#D2F824] tracking-tight">
                {currentProfile.benchmark}
              </div>
              <div className="font-mono text-[10px] text-[#7E879B] uppercase mt-1 font-bold">
                ELITE TIME TARGET
              </div>
            </div>
          </div>

          {/* Detailed Task Description */}
          <div className="p-5 bg-[#0E1118] border border-[#202534] rounded-sm">
            <div className="font-mono text-xs text-[#D2F824] font-black uppercase tracking-wider mb-2 flex items-center gap-2">
              <Flame className="w-4 h-4 text-[#D2F824]" />
              <span>STATION PROTOCOL & EXECUTION PROFILE</span>
            </div>
            <p className="text-sm text-[#D5DAE5] leading-relaxed">
              {currentProfile.description}
            </p>
          </div>

          {/* Section 1: Anatomical Muscle Telemetry */}
          <div>
            <AnatomicalMuscleMap muscles={station.muscles} activeStationTitle={station.title} />
          </div>

          {/* Section 2: Movement Standards (Valid Rep Criteria) */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 pb-2.5 border-b border-[#1E2332]">
              <CheckCircle2 className="w-5 h-5 text-[#D2F824]" />
              <h4 className="font-mono text-xs sm:text-sm font-black uppercase tracking-wider text-[#F8F9FA]">
                VALID REP CRITERIA // MOVEMENT STANDARDS
              </h4>
            </div>
            <div className="space-y-2">
              {station.movementStandards.map((std, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 bg-[#0A0D14] border border-[#1E2434] rounded-sm text-xs sm:text-sm text-[#E2E6F0] hover:border-[#D2F824]/40 transition-colors">
                  <span className="font-mono text-[#D2F824] font-black shrink-0 text-sm">{String(idx + 1).padStart(2, '0')}.</span>
                  <span className="leading-relaxed">{std}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Judge & Penalty Criteria */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 pb-2.5 border-b border-[#1E2332]">
              <ShieldAlert className="w-5 h-5 text-red-500" />
              <h4 className="font-mono text-xs sm:text-sm font-black uppercase tracking-wider text-[#F8F9FA]">
                JUDGING AUDIT // NO REP PENALTIES (+5.0s / DQ)
              </h4>
            </div>
            <div className="space-y-2">
              {station.noRepPenalties.map((penalty, idx) => (
                <div key={idx} className="p-3.5 bg-[#140A0D] border border-red-900/50 rounded-sm text-xs sm:text-sm text-red-200 flex items-start gap-3">
                  <span className="font-mono text-red-400 font-black shrink-0 uppercase bg-red-950/80 px-1.5 py-0.5 rounded text-[10px]">
                    NO REP //
                  </span>
                  <span className="leading-relaxed">{penalty}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Duo Strategy & Energy Management */}
          <div className="p-5 bg-[#0B101D] border-2 border-[#1E3A8A]/50 rounded-sm relative overflow-hidden">
            <div className="flex items-center gap-2 mb-2">
              <Users2 className="w-4 h-4 text-[#60A5FA]" />
              <span className="font-mono text-xs font-black text-[#93C5FD] uppercase tracking-wider">
                DUO SYNERGY & PACING STRATEGY
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#DBEAFE] leading-relaxed mb-4">
              {station.duoStrategy}
            </p>

            <div className="border-t border-[#1E3A8A]/40 pt-3">
              <div className="font-mono text-[11px] text-[#93C5FD] uppercase font-bold mb-2">
                COACHING CUES ON THE TURF:
              </div>
              <ul className="space-y-1.5 text-xs font-mono text-[#BFDBFE]">
                {station.technicalCues.map((cue, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-[#3B82F6]">▶</span>
                    <span>{cue}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Drawer Sticky Footer with Quick Actions */}
        <div className="sticky bottom-0 bg-[#0C0E14]/95 backdrop-blur-md border-t-2 border-[#1E2332] p-4 sm:p-5 flex items-center justify-between">
          <div className="text-xs font-mono text-[#7E879B] hidden sm:block font-bold">
            ASPIRE AIML × RUGGEDIAN™ // CHAMPIONSHIP PROTOCOL
          </div>
          <button
            onClick={() => {
              playTick();
              onClose();
            }}
            className="btn-pill-volt w-full sm:w-auto text-xs"
          >
            <span>CONFIRM & RETURN TO ARENA</span>
            <span className="btn-arrow">
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </button>
        </div>

      </div>
    </div>
  );
}
