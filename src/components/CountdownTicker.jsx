import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Zap, Flame, Timer } from 'lucide-react';

export default function CountdownTicker() {
  const targetDate = new Date('2026-10-17T11:00:00+05:30').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isCompleted: false
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isCompleted: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isCompleted: false });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const units = [
    { label: 'DAYS', value: timeLeft.days, sub: 'TRAINING CYCLE' },
    { label: 'HOURS', value: timeLeft.hours, sub: 'HOURS UNTIL GLORY' },
    { label: 'MINUTES', value: timeLeft.minutes, sub: 'PRECISION PACING' },
    { label: 'SECONDS', value: timeLeft.seconds, sub: 'LIVE INTERVAL' }
  ];

  return (
    <div className="bg-[#0A0C10] text-[#F8F9FA] border-2 border-[#202534] shadow-[0_10px_40px_rgba(0,0,0,0.8)] relative rounded-sm overflow-hidden">
      {/* High-Voltage Top Laser Line */}
      <div className="h-1 bg-gradient-to-r from-[#D2F824] via-[#2563EB] to-[#D2F824] shadow-[0_0_10px_#D2F824]"></div>

      {/* Gym Wall Timer Header */}
      <div className="p-4 sm:p-5 border-b border-[#1E2330] flex flex-wrap items-center justify-between gap-4 bg-[#0E1117]">
        <div className="flex items-center gap-3">
          <span className="flex h-3 w-3 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D2F824] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#D2F824]"></span>
          </span>
          <span className="font-mono text-xs sm:text-sm font-black tracking-widest text-[#D2F824] uppercase flex items-center gap-2">
            <Timer className="w-4 h-4 text-[#D2F824]" />
            ARENA COUNTDOWN // OFFICIAL RACE CLOCK
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono text-[#949CAE]">
          <span className="flex items-center gap-1.5 text-[#F8F9FA] font-bold">
            <Calendar className="w-3.5 h-3.5 text-[#D2F824]" />
            SATURDAY, 17 OCT 2026
          </span>
          <span className="text-[#363D4F]">|</span>
          <span className="flex items-center gap-1.5 text-[#F8F9FA] font-bold">
            <Clock className="w-3.5 h-3.5 text-[#2563EB]" />
            11:00 AM IST
          </span>
        </div>
      </div>

      {/* Numerical Digits Display (Rogue Gym Digital Wall Clock Style) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#1E2330] p-4 sm:p-6 bg-[#08090C] bg-gym-knurl">
        {units.map((unit, idx) => (
          <div key={idx} className="p-4 sm:p-5 text-center group transition-colors duration-200 hover:bg-[#11141C]">
            <div className="font-mono text-[10px] text-[#7E879B] font-black tracking-widest uppercase mb-1 flex items-center justify-center gap-1">
              <span className="w-1 h-1 bg-[#D2F824] inline-block"></span>
              {unit.label}
            </div>
            <div className="font-display gym-timer-display text-6xl sm:text-7xl md:text-8xl font-black text-[#F8F9FA] group-hover:text-[#D2F824] transition-colors leading-none tracking-tight">
              {String(unit.value).padStart(2, '0')}
            </div>
            <div className="font-mono text-[9px] text-[#555C6E] tracking-widest uppercase mt-2 font-bold">
              {unit.sub}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Arena Status Sub-bar */}
      <div className="py-3 px-5 bg-[#0E1117] border-t border-[#1E2330] flex flex-wrap items-center justify-between text-xs font-mono text-[#949CAE] gap-2">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 text-[#D2F824] font-bold">
            <Flame className="w-3.5 h-3.5" />
            WAVE 01 (SY / TY): 11:00 AM
          </span>
          <span className="text-[#363D4F]">///</span>
          <span className="inline-flex items-center gap-1.5 text-[#60A5FA] font-bold">
            WAVE 02 (FE): 1:10 PM
          </span>
        </div>
        <div className="text-[#D2F824] font-black uppercase tracking-wider flex items-center gap-1.5 text-[11px]">
          <span className="w-2 h-2 rounded-full bg-[#D2F824] animate-pulse"></span>
          LIMITED SLOTS REMAINING
        </div>
      </div>
    </div>
  );
}
