import React, { useState } from 'react';
import { X, Copy, Check, QrCode, ExternalLink, ArrowRight, ShieldCheck, Smartphone } from 'lucide-react';
import { playTick, playSuccessChime } from '../services/sound';

export default function UpiModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const upiId = "7058745254-2@ybl";
  const payeeName = "Aspire Association";
  const amount = "100";
  const upiDeepLink = `upi://pay?pa=7058745254-2@ybl&pn=Aspire%20Association&am=100&cu=INR&tn=${encodeURIComponent('Yodha Race Duo Registration')}`;

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
            <div className="relative p-3 bg-[#FFFFFF] border-4 border-[#D2F824] rounded-lg shadow-xl overflow-hidden group">
              {/* Scan beam line */}
              <div className="scan-line"></div>

              {/* Real Uploaded UPI QR Code */}
              <img
                src="/upi-qr.png"
                alt="Aspire Association UPI QR Code"
                className="w-52 h-52 sm:w-60 sm:h-60 object-contain rounded"
              />
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
            href="https://forms.gle/qFxo44YXxbrkfYH1A"
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
