import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { WHATSAPP_PRIMARY, DISPLAY_PHONE_1 } from '../data/products';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/${WHATSAPP_PRIMARY}?text=${encodeURIComponent(
    'Assalam-o-Alaikum MR MAHIR! 🌸\nI have an inquiry regarding your natural skincare products and bundle deals.'
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end flex-col gap-2 pointer-events-none">
      
      {/* Optional Dismissible Bubble Tooltip */}
      {showTooltip && (
        <div className="pointer-events-auto bg-white rounded-xl shadow-xl border border-[#D4AF37] p-3 text-xs max-w-[220px] relative animate-in fade-in slide-in-from-bottom-2 duration-300">
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Close message"
            className="absolute -top-1.5 -left-1.5 w-5 h-5 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full flex items-center justify-center text-[10px]"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="flex items-center gap-1.5 text-[#0B4627] font-bold text-[11px] mb-0.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
            <span>MR MAHIR Support</span>
          </div>
          <p className="text-[11px] text-gray-600 leading-tight">
            Order directly or ask questions on WhatsApp: <strong>{DISPLAY_PHONE_1}</strong>
          </p>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Order or Chat on WhatsApp"
        className="pointer-events-auto relative group flex items-center justify-center w-14 h-14 rounded-full bg-[#0B4627] text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-[#D4AF37] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)]"
      >
        <MessageCircle className="w-7 h-7 text-[#D4AF37] fill-[#D4AF37]/20" />
        
        {/* Subtle Ping Ring */}
        <span className="absolute inset-0 rounded-full border-2 border-[#D4AF37] animate-ping opacity-25 pointer-events-none" />
      </a>
    </div>
  );
};
