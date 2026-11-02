import React from 'react';
import { X, Sparkles, ShieldCheck, Heart, Leaf, Check } from 'lucide-react';
import { DISPLAY_PHONE_1, DISPLAY_PHONE_2, OFFICIAL_EMAIL } from '../data/products';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShopClick: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose, onShopClick }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border-2 border-[#D4AF37]/50 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-[#E6D7A8] bg-[#FAF8F5] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full p-0.5 gold-gradient-bg">
              <div className="w-full h-full rounded-full overflow-hidden bg-white p-0.5">
                <img
                  src="/assets/aistudio/mrr_mahir_2e5a7708.jpg"
                  alt="MR MAHIR Emblem"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <span className="text-[10px] font-bold tracking-widest text-[#B8860B] uppercase">
                Our Story & Philosophy
              </span>
              <h3 className="font-['Cinzel'] text-lg font-bold text-[#062B17]">
                About MR MAHIR Natural Beauty
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-gray-500 hover:text-black hover:bg-gray-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto text-xs sm:text-sm text-[#526358] leading-relaxed">
          
          <div className="p-4 rounded-xl bg-[#0B4627] text-white flex items-center gap-4 border border-[#D4AF37]">
            <Sparkles className="w-8 h-8 text-[#D4AF37] shrink-0" />
            <div>
              <h4 className="font-['Cinzel'] text-sm font-bold text-[#F3E5AB]">
                "Radiant Skin. Royal Confidence."
              </h4>
              <p className="text-xs text-white/80 mt-0.5">
                Elevating Pakistani skincare with natural extracts and ethical clean beauty.
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-['Cinzel'] text-base font-bold text-[#062B17] mb-1.5">
              Botanical Luxury For Every Skin Type
            </h4>
            <p>
              <strong>MR MAHIR Natural Beauty</strong> is proudly based in <strong>Gohati, Swabi, KPK, Pakistan</strong>, established with a singular royal vision: to provide authentic, highly effective skincare formulated specifically for the South Asian climate without using harmful bleaching agents, steroids, or harsh chemicals.
            </p>
            <p className="mt-2">
              From our deeply purifying Aloe Vera Face Wash (130ml — Rs. 450 PKR) and velvety Beauty Cream (28g — Rs. 450 PKR) to our multi-molecular Hyaluronic & Vitamin C Face Serum (15ml — Rs. 700 PKR), every creation is rigorously balanced to nourish, brighten, and protect your skin daily.
            </p>
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-3 rounded-lg bg-[#FAF8F5] border border-[#E5DEC9] text-center">
              <Leaf className="w-5 h-5 text-[#0B4627] mx-auto mb-1" />
              <h5 className="font-bold text-[#062B17] text-xs">100% Herbal Extracts</h5>
              <p className="text-[11px] text-gray-500 mt-0.5">Pure Aloe, Jasmine & Vitamins</p>
            </div>

            <div className="p-3 rounded-lg bg-[#FAF8F5] border border-[#E5DEC9] text-center">
              <ShieldCheck className="w-5 h-5 text-[#0B4627] mx-auto mb-1" />
              <h5 className="font-bold text-[#062B17] text-xs">Authentic & Safe</h5>
              <p className="text-[11px] text-gray-500 mt-0.5">Zero harsh steroids or mercury</p>
            </div>

            <div className="p-3 rounded-lg bg-[#FAF8F5] border border-[#E5DEC9] text-center">
              <Heart className="w-5 h-5 text-[#0B4627] mx-auto mb-1" />
              <h5 className="font-bold text-[#062B17] text-xs">Customer First</h5>
              <p className="text-[11px] text-gray-500 mt-0.5">Instant WhatsApp & fast COD</p>
            </div>
          </div>

          {/* Contact summary */}
          <div className="pt-2 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-3">
            <div className="text-xs">
              <span className="text-gray-400 block">Direct Inquiries:</span>
              <strong className="text-[#0B4627]">{DISPLAY_PHONE_1} / {DISPLAY_PHONE_2}</strong>
            </div>

            <button
              onClick={() => {
                onClose();
                onShopClick();
              }}
              className="px-5 py-2.5 rounded-lg gold-gradient-bg text-[#062B17] font-bold text-xs uppercase tracking-wider hover:opacity-95 shadow-xs"
            >
              Explore Products
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
