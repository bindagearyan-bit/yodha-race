import React, { useState } from 'react';
import { Calendar, Clock, CheckSquare, Square, AlertCircle, ArrowRight, Sparkles, ShieldCheck, Flame, Dumbbell } from 'lucide-react';
import confetti from 'canvas-confetti';
import { eventScheduleData } from '../data/stationsData';
import { playTick, playSuccessChime, playToggleSound } from '../services/sound';

export default function WaveCalculator() {
  const [selectedYear, setSelectedYear] = useState('SY_TY'); // 'SY_TY' or 'FE'
  const [checkedGear, setCheckedGear] = useState({});

  const handleToggleYear = (year) => {
    playToggleSound();
    setSelectedYear(year);
  };

  const handleToggleCheck = (id) => {
    playTick();
    const updated = {
      ...checkedGear,
      [id]: !checkedGear[id]
    };
    setCheckedGear(updated);

    // If all mandatory items are checked, trigger celebration
    const allMandatoryChecked = eventScheduleData.gearChecklist.every(
      item => !item.mandatory || updated[item.id]
    );

    if (allMandatoryChecked && !checkedGear[id]) {
      playSuccessChime();
      try {
        confetti({
          particleCount: 90,
          spread: 80,
          origin: { y: 0.7 },
          colors: ['#D2F824', '#2563EB', '#FFFFFF']
        });
      } catch (e) {}
    }
  };

  const currentWave = selectedYear === 'SY_TY' 
    ? eventScheduleData.waves[0] 
    : eventScheduleData.waves[1];

  const totalMandatory = eventScheduleData.gearChecklist.filter(g => g.mandatory).length;
  const checkedCount = eventScheduleData.gearChecklist.filter(g => checkedGear[g.id]).length;
  const progressPercent = Math.round((checkedCount / totalMandatory) * 100);

  return (
    <div className="bg-[#0B0D12] text-[#F8F9FA] border-2 border-[#1E2332] p-6 sm:p-8 rounded-sm shadow-[0_12px_40px_rgba(0,0,0,0.9)]">
      
      {/* Header (Cleaned of any developer/feature tags) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-[#1E2332] gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="badge-tech badge-tech-volt">RACE DISPATCH</span>
            <span className="font-mono text-xs text-[#7E879B] uppercase font-bold">WAVE SCHEDULE & COMBAT LOADOUT</span>
          </div>
          <h3 className="font-display text-3xl sm:text-4xl font-black text-[#F8F9FA] tracking-tight leading-none">
            REPORTING TIMELINE & HEAT BRIEFING
          </h3>
        </div>

        {/* Year Selector Tabs */}
        <div className="switch-capsule">
          <button
            onClick={() => handleToggleYear('SY_TY')}
            className={selectedYear === 'SY_TY' ? 'active' : 'inactive'}
          >
            SY & TY ATHLETES
          </button>
          <button
            onClick={() => handleToggleYear('FE')}
            className={selectedYear === 'FE' ? 'active' : 'inactive'}
          >
            FE (FIRST YEAR)
          </button>
        </div>
      </div>

      {/* Wave Calculation Result Banner (Industrial Arena Board) */}
      <div className="bg-[#06070A] border-2 border-[#202534] p-5 sm:p-7 rounded-sm mb-8 relative overflow-hidden">
        {/* Accent Glow border */}
        <div className={`absolute top-0 left-0 right-0 h-1.5 ${
          selectedYear === 'SY_TY' ? 'bg-[#D2F824] shadow-[0_0_12px_#D2F824]' : 'bg-[#2563EB] shadow-[0_0_12px_#2563EB]'
        }`}></div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8 space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-[#D2F824] font-black uppercase tracking-wider">
              <Clock className="w-4 h-4 text-[#D2F824]" />
              <span>{currentWave.waveCode}</span>
            </div>
            <div className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-[#F8F9FA] leading-none">
              REPORTING TIME: <span className={selectedYear === 'SY_TY' ? 'text-[#D2F824]' : 'text-[#60A5FA]'}>
                {currentWave.reportingTime}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#949CAE] leading-relaxed">
              {currentWave.details}
            </p>
          </div>

          <div className="md:col-span-4 bg-[#0E1117] border border-[#202534] p-4 rounded-sm text-xs font-mono space-y-2.5">
            <div className="text-[#7E879B] uppercase font-bold text-[10px]">HEAT ITINERARY:</div>
            <div className="flex justify-between text-[#F8F9FA]">
              <span className="text-[#949CAE]">Turf Briefing:</span>
              <strong className="text-[#D2F824]">{currentWave.briefing.split(' ')[0]} {currentWave.briefing.split(' ')[1]}</strong>
            </div>
            <div className="flex justify-between text-[#F8F9FA]">
              <span className="text-[#949CAE]">Flag-Off Gun:</span>
              <strong className="text-[#60A5FA]">{currentWave.startGun.split(' ')[0]} {currentWave.startGun.split(' ')[1]}</strong>
            </div>
            <div className="text-[10px] text-[#555C6E] pt-2 border-t border-[#1E2332] font-semibold">
              Venue: DYPCET Main Sports Turf, Kolhapur
            </div>
          </div>
        </div>
      </div>

      {/* Athlete Gear & Loadout Checklist */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#1E2332]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#D2F824]" />
            <h4 className="font-mono text-xs font-black uppercase tracking-wider text-[#F8F9FA]">
              MANDATORY ATHLETE GEAR & VERIFICATION CHECKLIST
            </h4>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#949CAE]">
            <span className="font-bold">STATUS:</span>
            <span className="text-[#D2F824] font-black">{checkedCount} / {totalMandatory} READY</span>
            <span className="text-[10px] text-[#7E879B]">({progressPercent}%)</span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full h-2 bg-[#06070A] border border-[#1E2332] rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#2563EB] to-[#D2F824] transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>

        {/* Checklist Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {eventScheduleData.gearChecklist.map((item) => {
            const isChecked = !!checkedGear[item.id];
            return (
              <div
                key={item.id}
                onClick={() => handleToggleCheck(item.id)}
                className={`p-4 rounded border transition-all duration-200 cursor-pointer flex items-center gap-3.5 select-none ${
                  isChecked
                    ? 'bg-[#0E150F] border-[#D2F824] text-[#F8F9FA] shadow-[0_0_12px_rgba(210,248,36,0.15)]'
                    : 'bg-[#06070A] border-[#1E2332] text-[#949CAE] hover:border-[#333C4E]'
                }`}
              >
                {isChecked ? (
                  <CheckSquare className="w-5 h-5 text-[#D2F824] shrink-0" />
                ) : (
                  <Square className="w-5 h-5 text-[#555C6E] shrink-0" />
                )}
                <div className="flex flex-col">
                  <span className={`text-xs font-mono font-bold ${isChecked ? 'text-[#F8F9FA]' : 'text-[#D0D5E0]'}`}>
                    {item.label}
                  </span>
                  {item.mandatory && (
                    <span className="text-[9px] font-mono text-[#D2F824] font-black tracking-wider uppercase mt-0.5">
                      ★ MANDATORY FOR ENTRY
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* All items completed celebration alert */}
        {progressPercent === 100 && (
          <div className="p-4 bg-[#0A160D] border-2 border-[#22C55E] rounded-sm flex items-center justify-between text-xs font-mono text-[#86EFAC] mt-4 shadow-[0_0_20px_rgba(34,197,94,0.25)]">
            <div className="flex items-center gap-2 font-bold">
              <Sparkles className="w-4 h-4 text-[#D2F824]" />
              <span>GEAR COMPLIANCE 100% VERIFIED — CLEARED FOR TURF COMBAT</span>
            </div>
            <span className="badge-tech badge-tech-volt text-[10px]">
              READY TO COMPETE
            </span>
          </div>
        )}
      </div>

    </div>
  );
}
