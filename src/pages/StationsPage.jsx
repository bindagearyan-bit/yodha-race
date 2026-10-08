import React, { useState } from 'react';
import { ArrowUpRight, Dumbbell, Gauge, ShieldAlert, CheckCircle2, Users2, Zap, SlidersHorizontal, TableProperties, Grid3X3, Search } from 'lucide-react';
import StationCard from '../components/StationCard';
import StationDrawer from '../components/StationDrawer';
import { stationsData } from '../data/stationsData';
import { playTick, playToggleSound } from '../services/sound';

export default function StationsPage() {
  const [gender, setGender] = useState('male');
  const [selectedStation, setSelectedStation] = useState(null);
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'comparison'
  const [searchQuery, setSearchQuery] = useState('');

  const handleGenderToggle = (newGender) => {
    playToggleSound();
    setGender(newGender);
  };

  const categories = ['ALL', 'POWER', 'METABOLIC', 'ENDURANCE', 'HEAVY LOAD'];

  const filteredStations = stationsData.filter((station) => {
    const matchesFilter =
      activeFilter === 'ALL' ||
      (activeFilter === 'POWER' && (station.id === 1 || station.id === 7)) ||
      (activeFilter === 'METABOLIC' && (station.id === 2 || station.id === 4)) ||
      (activeFilter === 'ENDURANCE' && (station.id === 3 || station.id === 4)) ||
      (activeFilter === 'HEAVY LOAD' && (station.id === 3 || station.id === 5 || station.id === 6 || station.id === 7));

    const matchesSearch =
      station.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      station.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      station.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#08090C] text-[#F8F9FA]">
      
      {/* Header Banner */}
      <section className="bg-[#0C0E14] text-[#F8F9FA] pt-12 pb-16 border-b-2 border-[#1E2332] relative overflow-hidden">
        <div className="absolute inset-0 bg-gym-turf opacity-50 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2">
              <span className="badge-tech badge-tech-volt">COURSE SPECIFICATION</span>
              <span className="text-[#363D4F] font-mono text-xs">///</span>
              <span className="font-mono text-xs text-[#949CAE] uppercase font-bold">7 MANDATORY WORK ZONES</span>
            </div>
            <div className="font-mono text-xs text-[#D2F824] uppercase font-bold">
              ASPIRE AIML × RUGGEDIAN™ STANDARDS
            </div>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#F8F9FA] tracking-tight leading-none mb-4">
            THE 7-STATION <span className="text-[#D2F824]">GAUNTLET</span>
          </h1>

          <p className="max-w-3xl text-sm sm:text-base text-[#949CAE] font-sans leading-relaxed mb-8">
            Complete telemetry and movement benchmarks for all seven competitive stations. 
            Toggle between Male and Female divisions to view exact weight loads, distance requirements, 
            valid repetition standards, and disqualification penalties.
          </p>

          {/* Action Row: Male vs Female Switcher + View Toggles */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 bg-[#080A0E] border-2 border-[#1E2332] rounded-sm shadow-xl">
            
            {/* Division Switcher */}
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[#7E879B] font-black uppercase hidden sm:inline">
                ACTIVE DIVISION:
              </span>
              <div className="switch-capsule shadow-lg">
                <button
                  onClick={() => handleGenderToggle('male')}
                  className={gender === 'male' ? 'active' : 'inactive'}
                >
                  ♂ MALE ATHLETE
                </button>
                <button
                  onClick={() => handleGenderToggle('female')}
                  className={gender === 'female' ? 'active' : 'inactive'}
                >
                  ♀ FEMALE ATHLETE
                </button>
              </div>
            </div>

            {/* View Mode & Search */}
            <div className="flex items-center gap-3">
              <div className="relative flex-1 sm:w-60">
                <Search className="w-3.5 h-3.5 text-[#555C6E] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Filter stations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-[#0E1118] border border-[#202534] rounded text-xs font-mono text-[#F8F9FA] focus:outline-none focus:border-[#D2F824]"
                />
              </div>

              <div className="flex items-center bg-[#0E1118] border border-[#202534] rounded p-0.5">
                <button
                  onClick={() => {
                    playTick();
                    setViewMode('grid');
                  }}
                  className={`p-1.5 rounded text-xs ${viewMode === 'grid' ? 'bg-[#1C2130] text-[#D2F824]' : 'text-[#555C6E] hover:text-[#F8F9FA]'}`}
                  title="Grid View"
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    playTick();
                    setViewMode('comparison');
                  }}
                  className={`p-1.5 rounded text-xs ${viewMode === 'comparison' ? 'bg-[#1C2130] text-[#D2F824]' : 'text-[#555C6E] hover:text-[#F8F9FA]'}`}
                  title="Comparison Matrix"
                >
                  <TableProperties className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 md:py-16 bg-[#08090C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-8 pb-4 border-b border-[#1E2332]">
            <span className="font-mono text-xs text-[#7E879B] font-black uppercase mr-2">
              DISCIPLINE:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  playTick();
                  setActiveFilter(cat);
                }}
                className={`px-3.5 py-1.5 rounded text-xs font-mono font-bold tracking-wider uppercase transition-all ${
                  activeFilter === cat
                    ? 'bg-[#D2F824] text-[#08090C] shadow-[0_0_12px_rgba(210,248,36,0.3)]'
                    : 'bg-[#12151E] text-[#949CAE] hover:text-[#F8F9FA] hover:bg-[#1C2130] border border-[#202534]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* VIEW MODE 1: Standard Cards Grid */}
          {viewMode === 'grid' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredStations.map((station) => (
                <StationCard
                  key={station.id}
                  station={station}
                  gender={gender}
                  onSelect={(st) => setSelectedStation(st)}
                />
              ))}
            </div>
          )}

          {/* VIEW MODE 2: Comprehensive Male vs Female Comparative Matrix */}
          {viewMode === 'comparison' && (
            <div className="bg-[#0B0D12] text-[#F8F9FA] border-2 border-[#1E2332] rounded-sm overflow-x-auto shadow-2xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#1E2332] bg-[#0E1118] font-mono text-xs text-[#7E879B] uppercase font-bold">
                    <th className="p-4">STATION</th>
                    <th className="p-4 text-[#D2F824]">♂ MALE ATHLETE SPEC</th>
                    <th className="p-4 text-[#60A5FA]">♀ FEMALE ATHLETE SPEC</th>
                    <th className="p-4">PRIMARY TARGET MUSCLES</th>
                    <th className="p-4 text-right">ACTION</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1E2332] text-xs font-mono">
                  {stationsData.map((station) => (
                    <tr key={station.id} className="hover:bg-[#121622] transition-colors">
                      <td className="p-4">
                        <div className="font-display text-xl text-[#F8F9FA] font-black tracking-tight">
                          {station.number} // {station.title}
                        </div>
                        <div className="text-[10px] text-[#7E879B]">
                          {station.category}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="text-[#F8F9FA] font-bold">{station.male.target}</div>
                        <div className="text-[11px] text-[#D2F824]">{station.male.load}</div>
                        <div className="text-[10px] text-[#555C6E]">Benchmark: {station.male.benchmark}</div>
                      </td>
                      <td className="p-4">
                        <div className="text-[#F8F9FA] font-bold">{station.female.target}</div>
                        <div className="text-[11px] text-[#60A5FA]">{station.female.load}</div>
                        <div className="text-[10px] text-[#555C6E]">Benchmark: {station.female.benchmark}</div>
                      </td>
                      <td className="p-4">
                        <div className="flex flex-wrap gap-1">
                          {station.muscles.map((m, i) => (
                            <span key={i} className="text-[10px] px-2 py-0.5 bg-[#161B26] text-[#949CAE] border border-[#202534] rounded">
                              {m.name}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="p-4 text-right">
                        <button
                          onClick={() => {
                            playTick();
                            setSelectedStation(station);
                          }}
                          className="px-3.5 py-1.5 bg-[#D2F824] text-[#08090C] font-black text-xs rounded hover:bg-[#E2FF4A] transition-colors"
                        >
                          PROTOCOL ↗
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Quick Notice Banner */}
          <div className="mt-12 p-6 bg-[#0E1117] border-2 border-[#1E2332] rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Zap className="w-5 h-5 text-[#D2F824]" />
              <div className="text-xs sm:text-sm text-[#C8CEDC] font-medium">
                Want to know official rep standards, penalty criteria, and pacing strategy for each station? Click on any card to inspect full technical protocols.
              </div>
            </div>
            <button
              onClick={() => {
                playTick();
                setSelectedStation(stationsData[0]);
              }}
              className="btn-pill-volt !py-2.5 !px-5 text-xs font-mono shrink-0"
            >
              <span>INSPECT STATION 01</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* Interactive Station Drawer Modal */}
      {selectedStation && (
        <StationDrawer
          station={selectedStation}
          gender={gender}
          onGenderToggle={handleGenderToggle}
          onClose={() => setSelectedStation(null)}
        />
      )}

    </div>
  );
}
