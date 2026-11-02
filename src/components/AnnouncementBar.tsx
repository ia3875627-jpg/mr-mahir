import React from 'react';
import { Phone, Mail, Sparkles, Instagram, Facebook } from 'lucide-react';
import { DISPLAY_PHONE_1, DISPLAY_PHONE_2, OFFICIAL_EMAIL, WHATSAPP_PRIMARY, WHATSAPP_SECONDARY, INSTAGRAM_URL, FACEBOOK_URL } from '../data/products';

export const AnnouncementBar: React.FC = () => {
  return (
    <aside
      aria-label="Store Announcement"
      className="w-full bg-[#0B4627] text-[#F3E5AB] text-xs font-medium border-b border-[#D4AF37]/25 relative z-40 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Left message (No Rs. 2,000 condition) */}
        <div className="flex items-center gap-2 text-center md:text-left">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
          <span>
            <strong className="text-white font-semibold">Nationwide Cash on Delivery Available</strong>
            <span className="mx-2 opacity-50">|</span>
            <span className="text-[#F3E5AB]/90">100% Natural Extracts</span>
          </span>
        </div>

        {/* Right contacts */}
        <div className="flex items-center gap-4 text-[11px] sm:text-xs">
          <div className="flex items-center gap-1.5">
            <Phone className="w-3 h-3 text-[#D4AF37] shrink-0" />
            <span className="text-[#F3E5AB]/75">WhatsApp / Order:</span>
            <a
              href={`https://wa.me/${WHATSAPP_PRIMARY}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors underline decoration-[#D4AF37]/50 font-semibold"
            >
              {DISPLAY_PHONE_1}
            </a>
            <span className="opacity-40">/</span>
            <a
              href={`https://wa.me/${WHATSAPP_SECONDARY}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors underline decoration-[#D4AF37]/50 font-semibold"
            >
              {DISPLAY_PHONE_2}
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-1.5 border-l border-[#D4AF37]/20 pl-3">
            <Mail className="w-3 h-3 text-[#D4AF37] shrink-0" />
            <a
              href={`mailto:${OFFICIAL_EMAIL}`}
              className="hover:text-white transition-colors"
            >
              {OFFICIAL_EMAIL}
            </a>
          </div>

          <div className="flex items-center gap-2 border-l border-[#D4AF37]/20 pl-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="MR MAHIR Instagram"
              className="text-[#F3E5AB] hover:text-white transition-colors p-0.5"
              title="@mrmahirbeauty on Instagram"
            >
              <Instagram className="w-3.5 h-3.5 text-[#D4AF37] hover:text-white" />
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="MR MAHIR Facebook Page"
              className="text-[#F3E5AB] hover:text-white transition-colors p-0.5"
              title="MR MAHIR on Facebook"
            >
              <Facebook className="w-3.5 h-3.5 text-[#D4AF37] hover:text-white" />
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
};
