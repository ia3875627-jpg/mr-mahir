import React, { useState } from 'react';
import { X, MessageCircle, Phone, Mail, MapPin, Send, Check, Instagram, Facebook } from 'lucide-react';
import { DISPLAY_PHONE_1, DISPLAY_PHONE_2, OFFICIAL_EMAIL, WHATSAPP_PRIMARY, WHATSAPP_SECONDARY, INSTAGRAM_URL, FACEBOOK_URL } from '../data/products';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && message) {
      const waMsg = `Assalam-o-Alaikum MR MAHIR Natural Beauty!\n\nName: ${name}\nPhone: ${phone}\nMessage: ${message}`;
      window.open(`https://wa.me/${WHATSAPP_PRIMARY}?text=${encodeURIComponent(waMsg)}`, '_blank');
      setSent(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      
      <div
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border-2 border-[#D4AF37]/50 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-[#E6D7A8] bg-[#FAF8F5] flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold tracking-widest text-[#B8860B] uppercase">
              24/7 Dedicated Support
            </span>
            <h3 className="font-['Cinzel'] text-lg font-bold text-[#062B17]">
              Contact MR MAHIR
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-gray-500 hover:text-black hover:bg-gray-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          
          {/* Quick Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href={`https://wa.me/${WHATSAPP_PRIMARY}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-[#0B4627] text-white flex items-center gap-3 hover:bg-[#062B17] transition-all border border-[#D4AF37]"
            >
              <MessageCircle className="w-6 h-6 text-[#D4AF37] shrink-0" />
              <div>
                <span className="text-[10px] text-[#F3E5AB] uppercase block">WhatsApp Primary</span>
                <strong className="text-xs">{DISPLAY_PHONE_1}</strong>
              </div>
            </a>

            <a
              href={`https://wa.me/${WHATSAPP_SECONDARY}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-[#0B4627] text-white flex items-center gap-3 hover:bg-[#062B17] transition-all border border-[#D4AF37]"
            >
              <Phone className="w-6 h-6 text-[#D4AF37] shrink-0" />
              <div>
                <span className="text-[10px] text-[#F3E5AB] uppercase block">WhatsApp Secondary</span>
                <strong className="text-xs">{DISPLAY_PHONE_2}</strong>
              </div>
            </a>
          </div>

          {/* Email & Location info */}
          <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E5DEC9] space-y-2 text-xs">
            <div className="flex items-center gap-2 text-[#111C15]">
              <Mail className="w-4 h-4 text-[#0B4627] shrink-0" />
              <span>Official Email: </span>
              <a href={`mailto:${OFFICIAL_EMAIL}`} className="text-[#0B4627] font-semibold hover:underline">
                {OFFICIAL_EMAIL}
              </a>
            </div>
            <div className="flex items-center gap-2 text-[#526358]">
              <MapPin className="w-4 h-4 text-[#0B4627] shrink-0" />
              <span>Location: <strong>Gohati, Swabi, KPK, Pakistan</strong> (Nationwide Cash on Delivery)</span>
            </div>
          </div>

          {/* Social Profiles Card */}
          <div className="grid grid-cols-2 gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-gradient-to-r from-pink-500/10 to-amber-500/10 border border-pink-500/30 hover:border-pink-500 flex items-center gap-2.5 transition-all group"
            >
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-pink-600 shadow-xs group-hover:scale-105 transition-transform">
                <Instagram className="w-4 h-4" />
              </div>
              <div className="text-left min-w-0">
                <span className="text-[10px] text-gray-500 uppercase block font-semibold">Instagram</span>
                <strong className="text-xs text-[#062B17] truncate block">@mrmahirbeauty</strong>
              </div>
            </a>

            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30 hover:border-blue-500 flex items-center gap-2.5 transition-all group"
            >
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-blue-600 shadow-xs group-hover:scale-105 transition-transform">
                <Facebook className="w-4 h-4" />
              </div>
              <div className="text-left min-w-0">
                <span className="text-[10px] text-gray-500 uppercase block font-semibold">Facebook Page</span>
                <strong className="text-xs text-[#062B17] truncate block">MR MAHIR</strong>
              </div>
            </a>
          </div>

          {/* Direct Message Form */}
          <form onSubmit={handleSubmit} className="space-y-3 pt-1">
            <h4 className="font-['Cinzel'] text-xs font-bold text-[#062B17] uppercase tracking-wider">
              Send an Instant Inquiry
            </h4>

            <div>
              <input
                type="text"
                required
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-[#E5DEC9] text-xs text-[#111C15] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              />
            </div>

            <div>
              <input
                type="tel"
                placeholder="Your Phone / WhatsApp"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-[#E5DEC9] text-xs text-[#111C15] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              />
            </div>

            <div>
              <textarea
                required
                rows={3}
                placeholder="Ask about skin type recommendation, bundle deals, or delivery time..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-[#E5DEC9] text-xs text-[#111C15] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-lg gold-gradient-bg text-[#062B17] font-bold text-xs uppercase tracking-wider hover:opacity-95 shadow-md flex items-center justify-center gap-2 border border-[#D4AF37]"
            >
              <Send className="w-4 h-4 text-[#062B17]" />
              <span>Send To Official WhatsApp ({DISPLAY_PHONE_1})</span>
            </button>

            {sent && (
              <p className="text-xs text-center text-emerald-800 font-semibold flex items-center justify-center gap-1 mt-2">
                <Check className="w-4 h-4" /> Message prepared in WhatsApp!
              </p>
            )}
          </form>

        </div>

      </div>
    </div>
  );
};
