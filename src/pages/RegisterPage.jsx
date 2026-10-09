import React, { useState } from 'react';
import { ArrowUpRight, QrCode, CheckCircle2, ChevronDown, ChevronUp, ShieldCheck, AlertCircle, Copy, Check, Users2, Calendar, Clock, ExternalLink, Flame } from 'lucide-react';
import UpiModal from '../components/UpiModal';
import { faqData } from '../data/faqData';
import { eventScheduleData } from '../data/stationsData';
import { playTick, playToggleSound, playSuccessChime } from '../services/sound';

export default function RegisterPage() {
  const [division, setDivision] = useState('male_duo'); // male_duo or female_duo
  const [yearOfStudy, setYearOfStudy] = useState('SY_TY');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [showUpiModal, setShowUpiModal] = useState(false);
  const [copiedUpi, setCopiedUpi] = useState(false);

  const upiId = "7058745254-2@ybl";

  const handleCopyUpi = () => {
    playSuccessChime();
    navigator.clipboard.writeText(upiId);
    setCopiedUpi(true);
    setTimeout(() => setCopiedUpi(false), 2500);
  };

  const waveTime = yearOfStudy === 'SY_TY' ? '11:00 AM Sharp (Wave 01)' : '1:10 PM Sharp (Wave 02)';

  return (
    <div className="min-h-screen bg-[#08090C] text-[#F8F9FA]">
      
      {/* Editorial Header */}
      <section className="bg-[#0C0E14] text-[#F8F9FA] pt-12 pb-16 border-b-2 border-[#1E2332] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex items-center gap-2 mb-3">
            <span className="badge-tech badge-tech-volt">SECURE GATEWAY</span>
            <span className="text-[#363D4F] font-mono text-xs">///</span>
            <span className="font-mono text-xs text-[#949CAE] uppercase font-bold">SLOT RESERVATION & REGISTRATION</span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#F8F9FA] tracking-tight leading-none mb-4">
            RESERVE YOUR <span className="text-[#D2F824]">DUO SLOT</span>
          </h1>

          <p className="max-w-3xl text-sm sm:text-base text-[#949CAE] leading-relaxed">
            Standard entry is strictly <strong>₹100 per Duo</strong> (covers both athletes). 
            Select your division and reporting wave, then complete the UPI transaction to access the official Google Form reservation ledger.
          </p>

        </div>
      </section>

      {/* Main Reservation Grid */}
      <section className="py-12 md:py-16 bg-[#08090C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
            
            {/* Left Column: Interactive Reservation Assistant (8 cols) */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* STEP 1: Duo Division Selection */}
              <div className="bg-[#0B0D12] border-2 border-[#1E2332] p-6 sm:p-7 rounded-sm shadow-xl">
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#1E2332]">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#08090C] bg-[#D2F824] px-2 py-0.5 rounded">
                      STEP 01
                    </span>
                    <h2 className="font-display text-xl sm:text-2xl font-black text-[#F8F9FA] m-0 tracking-tight">
                      SELECT DUO DIVISION
                    </h2>
                  </div>
                  <span className="font-mono text-xs text-[#7E879B] font-bold">2 ATHLETES</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { id: 'male_duo', label: '♂ MALE DUO', sub: '2 Male Athletes', badge: 'Standard Male Specs' },
                    { id: 'female_duo', label: '♀ FEMALE DUO', sub: '2 Female Athletes', badge: 'Standard Female Specs' }
                  ].map((div) => {
                    const isSelected = division === div.id;
                    return (
                      <div
                        key={div.id}
                        onClick={() => {
                          playToggleSound();
                          setDivision(div.id);
                        }}
                        className={`p-4 rounded border-2 transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#121622] border-[#D2F824] text-[#F8F9FA] shadow-[0_0_15px_rgba(210,248,36,0.2)]'
                            : 'bg-[#0E1118] border-[#1E2332] text-[#949CAE] hover:border-[#333C4E]'
                        }`}
                      >
                        <div className={`font-display text-xl font-black ${isSelected ? 'text-[#D2F824]' : 'text-[#F8F9FA]'}`}>
                          {div.label}
                        </div>
                        <div className={`text-xs font-mono mt-1 ${isSelected ? 'text-[#C0C7D6]' : 'text-[#7E879B]'}`}>
                          {div.sub}
                        </div>
                        <div className="text-[10px] font-mono mt-2 pt-2 border-t border-current/20 font-bold">
                          {div.badge}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* STEP 2: Year of Study & Dispatch Wave */}
              <div className="bg-[#0B0D12] border-2 border-[#1E2332] p-6 sm:p-7 rounded-sm shadow-xl">
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#1E2332]">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#08090C] bg-[#D2F824] px-2 py-0.5 rounded">
                      STEP 02
                    </span>
                    <h2 className="font-display text-xl sm:text-2xl font-black text-[#F8F9FA] m-0 tracking-tight">
                      YEAR OF STUDY & REPORTING WAVE
                    </h2>
                  </div>
                  <span className="font-mono text-xs text-[#60A5FA] font-bold">DISPATCH TIMELINE</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div
                    onClick={() => {
                      playToggleSound();
                      setYearOfStudy('SY_TY');
                    }}
                    className={`p-4 rounded border-2 transition-all cursor-pointer ${
                      yearOfStudy === 'SY_TY'
                        ? 'bg-[#121622] border-[#D2F824] text-[#F8F9FA] shadow-[0_0_15px_rgba(210,248,36,0.2)]'
                        : 'bg-[#0E1118] border-[#1E2332] text-[#949CAE] hover:border-[#333C4E]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-[10px] text-[#D2F824] uppercase font-bold">WAVE 01</span>
                      <Clock className="w-4 h-4 text-[#D2F824]" />
                    </div>
                    <div className="font-display text-2xl font-black text-[#F8F9FA]">
                      SECOND & THIRD YEAR (SY / TY)
                    </div>
                    <div className={`text-xs font-mono mt-2 font-bold ${yearOfStudy === 'SY_TY' ? 'text-[#D2F824]' : 'text-[#60A5FA]'}`}>
                      REPORTING: 11:00 AM SHARP
                    </div>
                  </div>

                  <div
                    onClick={() => {
                      playToggleSound();
                      setYearOfStudy('FE');
                    }}
                    className={`p-4 rounded border-2 transition-all cursor-pointer ${
                      yearOfStudy === 'FE'
                        ? 'bg-[#121622] border-[#60A5FA] text-[#F8F9FA] shadow-[0_0_15px_rgba(96,165,250,0.2)]'
                        : 'bg-[#0E1118] border-[#1E2332] text-[#949CAE] hover:border-[#333C4E]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-[10px] text-[#60A5FA] uppercase font-bold">WAVE 02</span>
                      <Clock className="w-4 h-4 text-[#60A5FA]" />
                    </div>
                    <div className="font-display text-2xl font-black text-[#F8F9FA]">
                      FIRST YEAR (FE)
                    </div>
                    <div className={`text-xs font-mono mt-2 font-bold ${yearOfStudy === 'FE' ? 'text-[#60A5FA]' : 'text-[#7E879B]'}`}>
                      REPORTING: 1:10 PM SHARP
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Checkout Summary & Payment Card (4 cols) */}
            <div className="lg:col-span-4 sticky top-24">
              <div className="bg-[#0B0D12] text-[#F8F9FA] border-2 border-[#1E2332] p-6 rounded-sm shadow-2xl space-y-6">
                
                <div className="border-b border-[#1E2332] pb-4">
                  <span className="badge-tech badge-tech-volt mb-2">HEAT SUMMARY</span>
                  <h3 className="font-display text-3xl font-black text-[#F8F9FA] leading-none tracking-tight">
                    DUO PASS BREAKDOWN
                  </h3>
                </div>

                {/* Summary Table */}
                <div className="space-y-3 text-xs font-mono">
                  <div className="flex justify-between text-[#949CAE]">
                    <span>DIVISION:</span>
                    <strong className="text-[#F8F9FA]">{division.toUpperCase().replace('_', ' ')}</strong>
                  </div>
                  <div className="flex justify-between text-[#949CAE]">
                    <span>REPORTING TIME:</span>
                    <strong className="text-[#D2F824]">{waveTime}</strong>
                  </div>
                  <div className="flex justify-between text-[#949CAE]">
                    <span>DATE:</span>
                    <strong className="text-[#F8F9FA]">SAT, 17 OCT 2026</strong>
                  </div>
                  <div className="flex justify-between text-[#949CAE]">
                    <span>VENUE:</span>
                    <strong className="text-[#F8F9FA]">DYPCET TURF, KOLHAPUR</strong>
                  </div>
                  <div className="flex justify-between text-[#949CAE]">
                    <span>PER ATHLETE:</span>
                    <strong className="text-[#F8F9FA]">₹50.00</strong>
                  </div>

                  <div className="pt-3 border-t border-[#1E2332] flex justify-between items-baseline">
                    <span className="font-bold text-[#F8F9FA]">TOTAL ENTRY FEE:</span>
                    <div className="text-right">
                      <div className="font-display text-4xl font-black text-[#D2F824] leading-none">
                        ₹100
                      </div>
                      <div className="text-[10px] text-[#7E879B]">Includes 2 Athletes</div>
                    </div>
                  </div>
                </div>

                {/* Instant UPI QR Trigger */}
                <div className="space-y-3 pt-2">
                  <button
                    onClick={() => {
                      playTick();
                      setShowUpiModal(true);
                    }}
                    className="btn-pill-volt w-full justify-center text-xs"
                  >
                    <QrCode className="w-4 h-4 mr-1" />
                    <span>SCAN UPI QR CODE (₹100)</span>
                  </button>

                  <a
                    href="https://forms.gle/qFxo44YXxbrkfYH1A"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playTick}
                    className="btn-pill-dark w-full justify-center text-xs"
                  >
                    <span>OPEN OFFICIAL GOOGLE FORM</span>
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>

                {/* UPI ID Quick Copy Box */}
                <div className="p-3 bg-[#0E1118] border border-[#1E2332] rounded text-xs font-mono flex items-center justify-between">
                  <div>
                    <div className="text-[9px] text-[#7E879B] font-bold">OFFICIAL UPI ID:</div>
                    <div className="text-[#F8F9FA] font-bold select-all">{upiId}</div>
                  </div>
                  <button
                    onClick={handleCopyUpi}
                    className="p-1.5 rounded bg-[#161A24] text-[#949CAE] hover:text-[#D2F824] transition-colors"
                    title="Copy UPI ID"
                  >
                    {copiedUpi ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="text-[11px] font-mono text-[#555C6E] text-center leading-relaxed">
                  * Screenshot of transaction with UTR / Reference ID required in the Google Form.
                </div>

              </div>
            </div>

          </div>

          {/* FAQ Accordion Section */}
          <div className="border-t border-[#1E2332] pt-16">
            <div className="max-w-3xl mx-auto">
              
              <div className="text-center mb-10">
                <span className="badge-tech badge-tech-volt mb-2">QUICK HELP</span>
                <h2 className="font-display text-4xl sm:text-5xl font-black text-[#F8F9FA]">
                  FREQUENTLY ASKED QUESTIONS
                </h2>
                <p className="text-xs sm:text-sm text-[#949CAE] mt-2">
                  Everything you need to know about registration, duos, wave reporting, and racing.
                </p>
              </div>

              <div className="space-y-3">
                {faqData.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="bg-[#0B0D12] border-2 border-[#1E2332] rounded-sm overflow-hidden transition-colors"
                    >
                      <button
                        onClick={() => {
                          playTick();
                          setOpenFaqIndex(isOpen ? -1 : idx);
                        }}
                        className="w-full p-5 text-left flex items-center justify-between gap-4 font-mono text-sm font-bold text-[#F8F9FA] hover:bg-[#0E1118] transition-colors"
                      >
                        <span>{faq.q}</span>
                        {isOpen ? <ChevronUp className="w-4 h-4 shrink-0 text-[#D2F824]" /> : <ChevronDown className="w-4 h-4 shrink-0 text-[#7E879B]" />}
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#949CAE] leading-relaxed border-t border-[#1E2332]">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* QR Payment Modal */}
      <UpiModal
        isOpen={showUpiModal}
        onClose={() => setShowUpiModal(false)}
      />

    </div>
  );
}
