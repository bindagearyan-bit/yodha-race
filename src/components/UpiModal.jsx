import React, { useState } from 'react';
import { X, Copy, Check, QrCode, ExternalLink, ArrowRight, ShieldCheck, Smartphone } from 'lucide-react';
import { playTick, playSuccessChime } from '../services/sound';

export default function UpiModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const upiId = "aspire.aiml@oksbi";
  const payeeName = "ASPIRE AIML DYPCET";
  const amount = "100";
  const upiDeepLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&am=${amount}&cu=INR&tn=${encodeURIComponent('Yodha Race Duo Registration')}`;

  if (!isOpen) return null;

  const handleCopy = () => {
    playSuccessChime();
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#0E0F12]/85 backdrop-blur-md transition-opacity"
        onClick={() => {
          playTick();
          onClose();
        }}
      ></div>

      {/* Modal Dialog */}
      <div className="relative bg-[#0E0F12] text-[#F5F4F0] border border-[#26272B] max-w-lg w-full rounded-sm shadow-2xl z-10 overflow-hidden">
        
        {/* Top Header */}
        <div className="p-4 sm:p-5 border-b border-[#26272B] bg-[#141518] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <QrCode className="w-5 h-5 text-[#D2F824]" />
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-black text-[#F5F4F0] leading-none">
                UPI PAYMENT GATEWAY // ₹100
              </h3>
              <span className="font-mono text-[10px] text-[#8E929B] tracking-wider uppercase">
                ASPIRE AIML OFFICIAL ACCOUNT
              </span>
            </div>
          </div>
          <button
            onClick={() => {
              playTick();
              onClose();
            }}
            className="p-1.5 rounded-full bg-[#1C1E23] hover:bg-[#D2F824] hover:text-[#0E0F12] text-[#8E929B] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-6">
          
          {/* QR Code Container with High-Tech Scan Frame */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative p-5 bg-[#FFFFFF] border-4 border-[#D2F824] rounded-lg shadow-xl relative overflow-hidden group">
              {/* Scan beam line */}
              <div className="scan-line"></div>

              {/* Dynamic Crisp SVG QR Graphic for UPI */}
              <svg
                viewBox="0 0 200 200"
                className="w-48 h-48 sm:w-52 sm:h-52"
              >
                {/* QR Finder patterns */}
                <rect width="200" height="200" fill="#FFFFFF" />
                {/* Top-Left Finder */}
                <rect x="15" y="15" width="50" height="50" fill="#0E0F12" />
                <rect x="22" y="22" width="36" height="36" fill="#FFFFFF" />
                <rect x="29" y="29" width="22" height="22" fill="#0E0F12" />
                {/* Top-Right Finder */}
                <rect x="135" y="15" width="50" height="50" fill="#0E0F12" />
                <rect x="142" y="22" width="36" height="36" fill="#FFFFFF" />
                <rect x="149" y="29" width="22" height="22" fill="#0E0F12" />
                {/* Bottom-Left Finder */}
                <rect x="15" y="135" width="50" height="50" fill="#0E0F12" />
                <rect x="22" y="142" width="36" height="36" fill="#FFFFFF" />
                <rect x="29" y="149" width="22" height="22" fill="#0E0F12" />
                
                {/* QR Data Matrix grid lines and mock blocks */}
                <g fill="#0E0F12">
                  <rect x="75" y="15" width="10" height="10" />
                  <rect x="95" y="15" width="10" height="10" />
                  <rect x="115" y="15" width="10" height="10" />
                  <rect x="75" y="35" width="10" height="20" />
                  <rect x="95" y="45" width="20" height="10" />
                  <rect x="15" y="75" width="10" height="10" />
                  <rect x="35" y="75" width="20" height="10" />
                  <rect x="75" y="75" width="10" height="10" />
                  <rect x="95" y="75" width="10" height="10" />
                  <rect x="115" y="75" width="10" height="10" />
                  <rect x="135" y="75" width="20" height="10" />
                  <rect x="165" y="75" width="10" height="10" />
                  <rect x="15" y="95" width="10" height="10" />
                  <rect x="45" y="95" width="10" height="20" />
                  <rect x="65" y="95" width="20" height="10" />
                  <rect x="105" y="95" width="10" height="10" />
                  <rect x="125" y="95" width="20" height="10" />
                  <rect x="155" y="95" width="20" height="20" />
                  <rect x="15" y="115" width="20" height="10" />
                  <rect x="75" y="115" width="20" height="10" />
                  <rect x="105" y="115" width="20" height="10" />
                  <rect x="135" y="115" width="10" height="10" />
                  <rect x="75" y="135" width="20" height="10" />
                  <rect x="115" y="135" width="20" height="10" />
                  <rect x="155" y="135" width="10" height="20" />
                  <rect x="175" y="135" width="10" height="10" />
                  <rect x="75" y="155" width="10" height="20" />
                  <rect x="95" y="155" width="20" height="10" />
                  <rect x="125" y="155" width="20" height="10" />
                  <rect x="75" y="175" width="30" height="10" />
                  <rect x="115" y="175" width="10" height="10" />
                  <rect x="145" y="165" width="20" height="20" />
                </g>

                {/* Central Logo Stamp */}
                <rect x="80" y="80" width="40" height="40" rx="4" fill="#0E0F12" />
                <rect x="83" y="83" width="34" height="34" rx="2" fill="#D2F824" />
                <text x="100" y="105" fill="#0E0F12" fontFamily="sans-serif" fontSize="16" fontWeight="bold" textAnchor="middle">₹100</text>
              </svg>
            </div>

            <span className="font-mono text-xs text-[#D2F824] font-bold mt-3 uppercase tracking-wider">
              SCAN VIA ANY UPI APP (GPAY / PHONEPE / PAYTM)
            </span>
          </div>

          {/* Copyable UPI ID Box */}
          <div className="bg-[#141518] border border-[#26272B] p-3.5 rounded flex items-center justify-between">
            <div className="flex flex-col">
              <span className="font-mono text-[9px] text-[#8E929B] uppercase">OFFICIAL UPI VPA:</span>
              <span className="font-mono text-sm font-bold text-[#F5F4F0] select-all">
                {upiId}
              </span>
            </div>
            <button
              onClick={handleCopy}
              className={`px-3 py-1.5 rounded font-mono text-xs font-bold transition-all flex items-center gap-1.5 ${
                copied
                  ? 'bg-green-600 text-white'
                  : 'bg-[#1C1E23] hover:bg-[#D2F824] hover:text-[#0E0F12] text-[#F5F4F0] border border-[#26272B]'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>COPIED!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>COPY UPI</span>
                </>
              )}
            </button>
          </div>

          {/* Direct Mobile UPI App Link */}
          <div className="text-center">
            <a
              href={upiDeepLink}
              onClick={playTick}
              className="inline-flex items-center gap-2 text-xs font-mono text-[#3B82F6] hover:text-[#60A5FA] underline"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Click to open UPI app directly on this phone</span>
            </a>
          </div>

          {/* Payment Steps Instructions */}
          <div className="p-4 bg-[#141518] border border-[#26272B] rounded text-xs space-y-2 text-[#8E929B]">
            <div className="font-mono text-[10px] text-[#D2F824] uppercase font-bold">
              REGISTRATION SUBMISSION STEPS:
            </div>
            <ol className="list-decimal list-inside space-y-1 font-mono text-[11px] text-[#E5E4DE]">
              <li>Transfer <strong>₹100</strong> via UPI (covers both duo athletes).</li>
              <li>Save a screenshot showing the <strong>12-digit UTR / Reference ID</strong>.</li>
              <li>Open the official Google Form and attach the transaction proof.</li>
            </ol>
          </div>

          {/* Direct Google Form Button */}
          <a
            href="https://forms.gle/yodha-race-aspire-2026"
            target="_blank"
            rel="noopener noreferrer"
            onClick={playTick}
            className="btn-pill-volt w-full justify-center text-xs"
          >
            <span>PROCEED TO OFFICIAL GOOGLE FORM</span>
            <ExternalLink className="w-4 h-4 ml-1" />
          </a>

        </div>

      </div>
    </div>
  );
}
