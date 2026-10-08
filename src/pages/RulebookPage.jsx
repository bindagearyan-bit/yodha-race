import React, { useState } from 'react';
import { ShieldCheck, ShieldAlert, Users2, Cpu, HeartPulse, Trophy, AlertTriangle, Clock, ArrowRight, CheckCircle2, XCircle, Flame } from 'lucide-react';
import { rulesCategories, podiumPrizes } from '../data/rulesData';
import { eventScheduleData } from '../data/stationsData';
import { playTick, playToggleSound } from '../services/sound';

export default function RulebookPage() {
  const [activeCategory, setActiveCategory] = useState('duo-dynamics');
  const [selectedPenalties, setSelectedPenalties] = useState([]);

  const infractionList = [
    { id: 'false-start', name: 'False Start / Breaking before horn', time: 5 },
    { id: 'burpee-lockout', name: 'Burpee: Incomplete hip lockout (No Rep)', time: 5 },
    { id: 'drop-weights', name: 'Farmer Walk: Dropping weights outside rest zone', time: 5 },
    { id: 'sled-boundary', name: 'Sled Pull: Stepping outside 2m anchor box', time: 5 },
    { id: 'tyre-knee', name: 'Tyre Flip: Bouncing off knee (Disqualified Rep)', time: 10 },
    { id: 'duo-separation', name: 'Duo separation > 5m in transition corridor', time: 10 },
    { id: 'damper-tamper', name: 'Ergometer: Tampering damper settings mid-race', time: 999, isDq: true },
  ];

  const toggleInfraction = (item) => {
    playTick();
    if (selectedPenalties.some(p => p.id === item.id)) {
      setSelectedPenalties(selectedPenalties.filter(p => p.id !== item.id));
    } else {
      setSelectedPenalties([...selectedPenalties, item]);
    }
  };

  const hasDq = selectedPenalties.some(p => p.isDq);
  const totalPenaltySeconds = selectedPenalties.reduce((sum, p) => sum + (p.isDq ? 0 : p.time), 0);

  const activeRulesObj = rulesCategories.find(c => c.id === activeCategory);

  return (
    <div className="min-h-screen bg-[#08090C] text-[#F8F9FA]">
      
      {/* Editorial Gym Header */}
      <section className="bg-[#0C0E14] text-[#F8F9FA] pt-12 pb-16 border-b-2 border-[#1E2332] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex items-center gap-2 mb-3">
            <span className="badge-tech badge-tech-volt">CODE OF CONDUCT</span>
            <span className="text-[#363D4F] font-mono text-xs">///</span>
            <span className="font-mono text-xs text-[#949CAE] uppercase font-bold">RACE REGULATIONS & PENALTIES</span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#F8F9FA] tracking-tight leading-none mb-4">
            OFFICIAL <span className="text-[#D2F824]">RULEBOOK</span>
          </h1>

          <p className="max-w-3xl text-sm sm:text-base text-[#949CAE] leading-relaxed">
            Strict sporting integrity defines YODHA RACE. Every second on the turf is audited by ASPIRE marshals and electronic timing gates. Familiarize your duo with heat dynamics, rep validity standards, and penalty time assessments.
          </p>

        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 bg-[#08090C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Navigation Category Tabs */}
          <div className="flex flex-wrap gap-2.5 mb-8 pb-4 border-b border-[#1E2332]">
            {rulesCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    playToggleSound();
                    setActiveCategory(cat.id);
                  }}
                  className={`px-4 py-2.5 rounded font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#D2F824] text-[#08090C] shadow-[0_0_15px_rgba(210,248,36,0.35)]'
                      : 'bg-[#12151E] text-[#949CAE] hover:text-[#F8F9FA] hover:bg-[#1C2130] border border-[#202534]'
                  }`}
                >
                  <span>{cat.title.split('//')[0]} //</span>
                  <span>{cat.title.split('//')[1]}</span>
                </button>
              );
            })}
          </div>

          {/* Active Rules Section Card */}
          <div className="bg-[#0B0D12] border-2 border-[#1E2332] p-6 sm:p-8 rounded-sm shadow-xl mb-12">
            <div className="border-b border-[#1E2332] pb-4 mb-6">
              <span className="font-mono text-xs text-[#60A5FA] font-bold uppercase tracking-wider">
                {activeRulesObj.subtitle}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-black text-[#F8F9FA] mt-1 tracking-tight">
                {activeRulesObj.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {activeRulesObj.rules.map((rule, idx) => (
                <div key={idx} className="p-5 bg-[#0E1118] border border-[#1E2332] rounded-sm hover:border-[#D2F824]/50 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-[#D2F824]"></span>
                    <h3 className="font-mono text-xs sm:text-sm font-black text-[#F8F9FA] uppercase tracking-wider">
                      {rule.heading}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#949CAE] leading-relaxed">
                    {rule.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Penalty Simulator Component */}
          <div className="bg-[#0A0C10] text-[#F8F9FA] border-2 border-[#202534] p-6 sm:p-8 rounded-sm shadow-2xl mb-12">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-[#1E2332] gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="badge-tech badge-tech-volt">PENALTY AUDIT</span>
                  <span className="font-mono text-xs text-[#7E879B] uppercase font-bold">RACE DISQUALIFICATION & TIME ADDITIONS</span>
                </div>
                <h3 className="font-display text-3xl sm:text-4xl font-black text-[#F8F9FA] tracking-tight">
                  PENALTY TIME SIMULATOR
                </h3>
              </div>

              {/* Total Penalty Pill */}
              <div className="p-3.5 bg-[#0E1118] border border-[#202534] rounded flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#D2F824]" />
                <div className="flex flex-col">
                  <span className="font-mono text-[9px] text-[#7E879B] uppercase font-bold">ACCUMULATED PENALTY:</span>
                  <span className="font-display text-3xl font-black leading-none text-[#D2F824]">
                    {hasDq ? 'DISQUALIFIED (DQ)' : `+${totalPenaltySeconds}.0s`}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#949CAE] mb-6">
              Click common race infractions below to test how penalties impact your duo’s final finish clock:
            </p>

            {/* Infractions Toggle Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {infractionList.map((item) => {
                const isSelected = selectedPenalties.some(p => p.id === item.id);
                return (
                  <button
                    key={item.id}
                    onClick={() => toggleInfraction(item)}
                    className={`p-3.5 rounded text-left border transition-all text-xs font-mono flex items-center justify-between ${
                      isSelected
                        ? item.isDq
                          ? 'bg-red-950/90 border-red-500 text-red-200'
                          : 'bg-[#141C10] border-[#D2F824] text-[#D2F824] shadow-[0_0_10px_rgba(210,248,36,0.2)]'
                        : 'bg-[#0E1118] border-[#1E2332] text-[#949CAE] hover:border-[#333C4E]'
                    }`}
                  >
                    <span>{item.name}</span>
                    <span className="font-bold shrink-0 ml-2">
                      {item.isDq ? 'DQ' : `+${item.time}s`}
                    </span>
                  </button>
                );
              })}
            </div>

            {selectedPenalties.length > 0 && (
              <div className="mt-6 pt-4 border-t border-[#1E2332] flex items-center justify-between text-xs font-mono">
                <span className="text-[#949CAE]">
                  {selectedPenalties.length} infraction(s) selected
                </span>
                <button
                  onClick={() => {
                    playTick();
                    setSelectedPenalties([]);
                  }}
                  className="text-[#D2F824] font-bold hover:underline"
                >
                  RESET SIMULATOR ↺
                </button>
              </div>
            )}
          </div>

          {/* Podium Awards & Prizes Section */}
          <div className="border-t border-[#1E2332] pt-12">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="badge-tech badge-tech-volt mb-2">PODIUM HONORS</span>
              <h2 className="font-display text-4xl sm:text-5xl font-black text-[#F8F9FA]">
                PRIZES & RECOGNITION
              </h2>
              <p className="text-xs sm:text-sm text-[#949CAE] mt-2">
                Champions are honored at the DYPCET main sports arena immediately following Wave 02 grand finals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {podiumPrizes.map((prize, idx) => (
                <div key={idx} className="p-6 bg-[#0E1118] border-2 border-[#1E2332] rounded-sm hover:border-[#D2F824] transition-all shadow-xl flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-xs font-bold text-[#60A5FA]">
                        {prize.badge}
                      </span>
                      <Trophy className="w-6 h-6" style={{ color: prize.color }} />
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-black text-[#F8F9FA] mb-3 tracking-tight">
                      {prize.place}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#949CAE] leading-relaxed">
                      {prize.award}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#1A1F2C] font-mono text-[10px] text-[#555C6E] uppercase font-bold">
                    OFFICIAL DYPCET CERTIFICATE INCLUDED
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
