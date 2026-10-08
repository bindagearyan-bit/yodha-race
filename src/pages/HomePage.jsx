import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Flame, Shield, Activity, Users2, Trophy, Clock, ChevronRight, Zap, Target, Layers, Dumbbell } from 'lucide-react';
import CountdownTicker from '../components/CountdownTicker';
import StationCard from '../components/StationCard';
import StationDrawer from '../components/StationDrawer';
import WaveCalculator from '../components/WaveCalculator';
import { stationsData } from '../data/stationsData';
import { playTick, playToggleSound } from '../services/sound';

export default function HomePage() {
  const [activeGender, setActiveGender] = useState('male');
  const [selectedStation, setSelectedStation] = useState(null);

  const handleGenderToggle = (gender) => {
    playToggleSound();
    setActiveGender(gender);
  };

  return (
    <div className="min-h-screen bg-[#08090C] text-[#F8F9FA]">
      
      {/* =========================================================================
          HERO SECTION: Hardcore Dark Gym & HYROX Arena
          High-energy athletic dark environment with Volt accents
          ========================================================================= */}
      <section className="relative pt-8 pb-16 md:pt-16 md:pb-24 border-b-2 border-[#1E2332] bg-[#08090C] overflow-hidden">
        {/* Subtle arena knurling & spotlight aura */}
        <div className="absolute inset-0 bg-gym-turf opacity-70 pointer-events-none"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#D2F824]/5 blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Top Tagline & Badges */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="badge-tech badge-tech-volt">DYPCET ATHLETIC TURF</span>
              <span className="text-[#363D4F] font-mono text-xs">///</span>
              <span className="font-mono text-xs font-bold text-[#E2E6F0] tracking-wider uppercase">
                DEPT. OF AIML • ASPIRE
              </span>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-[#949CAE]">
              <span className="text-[#D0D5E0] font-semibold">POWERED PARTNERSHIP:</span>
              <span className="px-2.5 py-0.5 bg-[#161A24] border border-[#2D3448] text-[#D2F824] font-black tracking-widest text-[11px] rounded shadow-[0_0_10px_rgba(210,248,36,0.15)]">
                RUGGEDIAN™
              </span>
            </div>
          </div>

          {/* Massive Heavyweight Display Title */}
          <div className="mb-8">
            <div className="font-mono text-xs sm:text-sm font-black tracking-widest text-[#D2F824] uppercase mb-2 flex items-center gap-2">
              <Flame className="w-4 h-4 text-[#D2F824] animate-pulse" />
              <span>HYBRID FITNESS CHAMPIONSHIP 2026 // HARDCORE GAUNTLET</span>
            </div>
            
            <h1 className="font-display text-7xl sm:text-8xl md:text-9xl lg:text-[11rem] font-black text-[#F8F9FA] tracking-tighter leading-[0.88] m-0 select-none drop-shadow-[0_4px_25px_rgba(0,0,0,0.8)]">
              YODHA <span className="text-[#D2F824] hover:text-[#E2FF4A] transition-colors">RACE</span>
            </h1>

            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mt-3 pt-3 border-t border-[#1E2332]">
              <span className="font-headline text-2xl sm:text-3xl md:text-4xl text-[#949CAE] tracking-tight uppercase">
                // HYROX COMPETITIVE FORMAT
              </span>
              <span className="font-mono text-xs sm:text-sm text-[#D2F824] font-bold uppercase tracking-wider">
                7 STATIONS • 2 ATHLETES • ZERO EXCUSES
              </span>
            </div>
          </div>

          {/* Athletic Split Hero Content: Intel Summary + CTAs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
            
            <div className="lg:col-span-7 space-y-5">
              <p className="text-base sm:text-lg text-[#C8CEDC] font-sans leading-relaxed">
                Step into the arena for Western Maharashtra’s premier collegiate functional fitness gauntlet. 
                Organized by the <strong className="text-[#F8F9FA]">ASPIRE Student Association</strong> (AIML Dept, DYPCET) 
                in direct powered synergy with <strong className="text-[#D2F824]">RUGGEDIAN™</strong>. 
                Test your maximum cardiovascular endurance, isometric grip fortitude, and duo synchronicity against 
                the official HYROX racing standard.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/register"
                  onClick={playTick}
                  className="btn-pill-volt !py-4 !px-7 text-sm font-mono tracking-wider"
                >
                  <span>RESERVE DUO SLOT (₹100)</span>
                  <span className="btn-arrow !w-6 !h-6">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </Link>

                <Link
                  to="/stations"
                  onClick={playTick}
                  className="btn-pill-dark !py-4 !px-7 text-sm font-mono tracking-wider"
                >
                  <Dumbbell className="w-4 h-4 text-[#D2F824]" />
                  <span>EXPLORE 7 STATIONS</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Quick Stat Tiles in Aggressive Carbon & Steel */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3.5">
              <div className="p-4 sm:p-5 bg-[#0E1016] text-[#F8F9FA] border-2 border-[#1E2332] rounded-sm hover:border-[#D2F824]/60 transition-colors">
                <div className="font-mono text-[10px] text-[#7E879B] tracking-wider uppercase font-bold mb-1">
                  CHALLENGE STATIONS
                </div>
                <div className="font-display text-4xl sm:text-5xl font-black text-[#D2F824] leading-none">
                  07
                </div>
                <div className="font-mono text-[10px] text-[#555C6E] mt-1 font-semibold">
                  Full Kinetic Chain
                </div>
              </div>

              <div className="p-4 sm:p-5 bg-[#0E1016] text-[#F8F9FA] border-2 border-[#1E2332] rounded-sm hover:border-[#60A5FA]/60 transition-colors">
                <div className="font-mono text-[10px] text-[#7E879B] tracking-wider uppercase font-bold mb-1">
                  TEAM STRUCTURE
                </div>
                <div className="font-display text-4xl sm:text-5xl font-black text-[#60A5FA] leading-none">
                  DUO
                </div>
                <div className="font-mono text-[10px] text-[#555C6E] mt-1 font-semibold">
                  2 Athletes per Heat
                </div>
              </div>

              <div className="p-4 sm:p-5 bg-[#0E1016] text-[#F8F9FA] border-2 border-[#1E2332] rounded-sm hover:border-[#D2F824]/60 transition-colors">
                <div className="font-mono text-[10px] text-[#7E879B] tracking-wider uppercase font-bold mb-1">
                  ENTRY / TEAM FEE
                </div>
                <div className="font-display text-4xl sm:text-5xl font-black text-[#F8F9FA] leading-none">
                  ₹100
                </div>
                <div className="font-mono text-[10px] text-[#D2F824] mt-1 font-bold">
                  ₹50 Per Athlete
                </div>
              </div>

              <div className="p-4 sm:p-5 bg-[#0E1016] text-[#F8F9FA] border-2 border-[#1E2332] rounded-sm hover:border-[#D2F824]/60 transition-colors">
                <div className="font-mono text-[10px] text-[#7E879B] tracking-wider uppercase font-bold mb-1">
                  DISPATCH WAVES
                </div>
                <div className="font-display text-4xl sm:text-5xl font-black text-[#D2F824] leading-none">
                  02
                </div>
                <div className="font-mono text-[10px] text-[#555C6E] mt-1 font-semibold">
                  11:00 AM & 1:10 PM
                </div>
              </div>
            </div>

          </div>

          {/* Live Countdown Ticker */}
          <div className="mt-8">
            <CountdownTicker />
          </div>

        </div>
      </section>

      {/* =========================================================================
          HYROX PHILOSOPHY DECONSTRUCTED: Hardcore Gym & Fitness Gauntlet
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#08090C] text-[#F8F9FA] border-b-2 border-[#1E2332] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#1E2332] mb-12">
            <div>
              <span className="badge-tech badge-tech-volt mb-2">ARENA DISCIPLINE</span>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-[#F8F9FA] tracking-tight m-0">
                WHAT IS A HYROX-INSPIRED RACE?
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-[#949CAE] font-sans leading-relaxed">
              Unlike traditional running or static bodybuilding, HYROX combines explosive linear speed with heavy functional work capacities in an uninterrupted race against the clock.
            </p>
          </div>

          {/* 3 Pillars Grid with Heavy Metal / Gym Framing */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 sm:p-7 bg-[#0E1016] border-2 border-[#1E2332] rounded-sm hover:border-[#D2F824] transition-all group shadow-xl">
              <div className="w-12 h-12 rounded bg-[#161A24] border border-[#2D3448] flex items-center justify-center text-[#D2F824] mb-5 group-hover:scale-110 transition-transform">
                <Flame className="w-6 h-6" />
              </div>
              <div className="font-mono text-xs text-[#7E879B] uppercase tracking-wider mb-1 font-bold">
                PILLAR 01 // ENDURANCE
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-black text-[#F8F9FA] mb-2 tracking-tight">
                LACTATE TOLERANCE
              </h3>
              <p className="text-xs sm:text-sm text-[#949CAE] leading-relaxed">
                Transition seamlessly from high-output sprint bursts into heavy resistance sleds and rowing ergs without allowing heart rate to drop.
              </p>
            </div>

            <div className="p-6 sm:p-7 bg-[#0E1016] border-2 border-[#1E2332] rounded-sm hover:border-[#60A5FA] transition-all group shadow-xl">
              <div className="w-12 h-12 rounded bg-[#161A24] border border-[#2D3448] flex items-center justify-center text-[#60A5FA] mb-5 group-hover:scale-110 transition-transform">
                <Users2 className="w-6 h-6" />
              </div>
              <div className="font-mono text-xs text-[#7E879B] uppercase tracking-wider mb-1 font-bold">
                PILLAR 02 // CHEMISTRY
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-black text-[#F8F9FA] mb-2 tracking-tight">
                DUO SYNCHRONICITY
              </h3>
              <p className="text-xs sm:text-sm text-[#949CAE] leading-relaxed">
                Both athletes suffer and conquer together. Tagging in, pacing split times, verbal cues, and synchronized flips dictate podium victory.
              </p>
            </div>

            <div className="p-6 sm:p-7 bg-[#0E1016] border-2 border-[#1E2332] rounded-sm hover:border-[#D2F824] transition-all group shadow-xl">
              <div className="w-12 h-12 rounded bg-[#161A24] border border-[#2D3448] flex items-center justify-center text-[#D2F824] mb-5 group-hover:scale-110 transition-transform">
                <Trophy className="w-6 h-6" />
              </div>
              <div className="font-mono text-xs text-[#7E879B] uppercase tracking-wider mb-1 font-bold">
                PILLAR 03 // AUDITING
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-black text-[#F8F9FA] mb-2 tracking-tight">
                STRICT MOVEMENT REPS
              </h3>
              <p className="text-xs sm:text-sm text-[#949CAE] leading-relaxed">
                Zero sloppy reps permitted. Official ASPIRE marshals audit chest-to-turf burpees, full tyre overturns, and photogate breaks with zero bias.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          7-STATION INTERACTIVE PREVIEW GAUNTLET & GENDER SWITCHER
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#0A0C11] border-b-2 border-[#1E2332] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 mb-8 border-b border-[#1E2332]">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="badge-tech badge-tech-volt">7-STATION GAUNTLET</span>
                <span className="text-[#363D4F] font-mono text-xs">///</span>
                <span className="font-mono text-xs text-[#949CAE] uppercase font-bold">KINETIC WORKFLOW</span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-[#F8F9FA] tracking-tight m-0">
                INTERACTIVE COURSE PREVIEW
              </h2>
            </div>

            {/* Division Switcher */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <span className="font-mono text-xs text-[#7E879B] font-bold uppercase">
                DIVISION:
              </span>
              <div className="switch-capsule shadow-xl">
                <button
                  onClick={() => handleGenderToggle('male')}
                  className={activeGender === 'male' ? 'active' : 'inactive'}
                >
                  ♂ MALE ATHLETE
                </button>
                <button
                  onClick={() => handleGenderToggle('female')}
                  className={activeGender === 'female' ? 'active' : 'inactive'}
                >
                  ♀ FEMALE ATHLETE
                </button>
              </div>
            </div>
          </div>

          {/* Grid of Stations */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {stationsData.map((station) => (
              <StationCard
                key={station.id}
                station={station}
                gender={activeGender}
                onSelect={(st) => setSelectedStation(st)}
              />
            ))}

            {/* Callout Tile: Grand Finish Arch */}
            <div className="bg-[#0E1016] text-[#F8F9FA] border-2 border-dashed border-[#2D3448] p-6 rounded-sm flex flex-col justify-between hover:border-[#D2F824] transition-colors">
              <div>
                <span className="badge-tech badge-tech-volt text-[10px] mb-3">
                  FINISH ARCH // TIMING GATES
                </span>
                <h3 className="font-display text-3xl font-black text-[#F8F9FA] mb-2 tracking-tight">
                  THE GLORY FINISH
                </h3>
                <p className="text-xs text-[#949CAE] leading-relaxed mb-4">
                  After conquering all 7 stations, both duo members sprint under the Ruggedian™ championship arch. 
                  Live LED chip clocks stop on the trailing athlete.
                </p>
              </div>
              <Link
                to="/stations"
                onClick={playTick}
                className="btn-pill-volt !py-2.5 !px-4 text-xs font-mono w-full justify-center"
              >
                <span>OPEN FULL STATION EXPLORER</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          WAVE SCHEDULE & COMBAT LOADOUT CHECKLIST
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#08090C] border-b-2 border-[#1E2332]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <WaveCalculator />
        </div>
      </section>

      {/* =========================================================================
          COLLEGIATE CREDENTIALS & PARTNERSHIP SHOWCASE
          ========================================================================= */}
      <section className="py-16 bg-[#0B0D12] border-b-2 border-[#1E2332]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <span className="badge-tech badge-tech-dark">INSTITUTIONAL EXCELLENCE</span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#F8F9FA] leading-tight">
                ORGANIZED BY ASPIRE // POWERED BY RUGGEDIAN™
              </h2>
              <p className="text-sm text-[#949CAE] leading-relaxed">
                The <strong className="text-[#F8F9FA]">ASPIRE Student Association</strong> represents the Department of Artificial Intelligence & Machine Learning at DYPCET Kolhapur. 
                Dedicated to pioneering student leadership, athletic endurance, and technological prowess.
              </p>
              <p className="text-sm text-[#949CAE] leading-relaxed">
                In official partnership with <strong className="text-[#D2F824]">RUGGEDIAN™</strong>, India's foremost adventure race brand known for brutal obstacle courses, 
                high-octane trail runs, and global athletic standards.
              </p>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-[#0E1117] border-2 border-[#1E2332] rounded-sm shadow-md hover:border-[#60A5FA]/50 transition-colors">
                <div className="font-mono text-xs text-[#60A5FA] font-bold uppercase mb-1">
                  DEPARTMENT OF AIML
                </div>
                <div className="font-display text-2xl font-black text-[#F8F9FA] mb-1">
                  DYPCET KOLHAPUR
                </div>
                <p className="text-xs text-[#949CAE] leading-relaxed">
                  Leading NAAC 'A' Grade Engineering Campus in Kolhapur with world-class turf grounds and sports infrastructure.
                </p>
              </div>

              <div className="p-5 bg-[#0E1117] border-2 border-[#1E2332] rounded-sm shadow-md hover:border-[#D2F824]/50 transition-colors">
                <div className="font-mono text-xs text-[#08090C] bg-[#D2F824] inline-block px-1.5 py-0.5 rounded font-black uppercase mb-1">
                  RUGGEDIAN™ POWERED
                </div>
                <div className="font-display text-2xl font-black text-[#F8F9FA] mb-1">
                  CHAMPIONSHIP STANDARDS
                </div>
                <p className="text-xs text-[#949CAE] leading-relaxed">
                  Certified timing chips, official movement auditing, obstacle equipment calibration, and branded merchandise.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          FINAL CALL TO ACTION BANNER
          ========================================================================= */}
      <section className="py-20 bg-[#06070A] text-[#F8F9FA] text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
          <span className="badge-tech badge-tech-volt">LIMIT: ONLY 60 DUO SLOTS AVAILABLE</span>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl font-black text-[#F8F9FA] leading-none tracking-tight">
            DO YOU HAVE WHAT IT TAKES TO BE A <span className="text-[#D2F824]">YODHA</span>?
          </h2>
          <p className="text-sm sm:text-base text-[#949CAE] max-w-2xl mx-auto leading-relaxed">
            Form your duo. Lock in your wave slot. Prove your training on the championship turf. 
            Registration is strictly ₹100 per team.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/register"
              onClick={playTick}
              className="btn-pill-volt !py-4 !px-8 text-base font-mono"
            >
              <span>LOCK YOUR DUO RESERVATION (₹100)</span>
              <span className="btn-arrow !w-6 !h-6">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Station Protocol Drawer */}
      {selectedStation && (
        <StationDrawer
          station={selectedStation}
          gender={activeGender}
          onGenderToggle={handleGenderToggle}
          onClose={() => setSelectedStation(null)}
        />
      )}

    </div>
  );
}
