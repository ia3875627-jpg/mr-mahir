import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, MapPin, Sparkles, Check, Instagram, Facebook } from 'lucide-react';
import { DISPLAY_PHONE_1, DISPLAY_PHONE_2, OFFICIAL_EMAIL, STORE_ADDRESS, WHATSAPP_PRIMARY, WHATSAPP_SECONDARY, INSTAGRAM_URL, FACEBOOK_URL } from '../data/products';

interface FooterProps {
  onSelectCategory: (category: string) => void;
  onOpenAbout: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory, onOpenAbout, onOpenContact }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const handleScrollTo = (id: string, category?: string) => {
    if (category) {
      onSelectCategory(category);
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#062B17] text-white pt-16 pb-12 border-t-2 border-[#D4AF37]/50 relative overflow-hidden">
      
      {/* Background ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#D4AF37]/20">
          
          {/* Column 1: Brand Column (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full p-0.5 gold-gradient-bg shadow-sm shrink-0">
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
                <span className="font-['Cinzel'] text-xl font-bold tracking-wider text-white block">
                  MR MAHIR
                </span>
                <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#F3E5AB]">
                  Natural Beauty
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-sm">
              Thoughtful botanical skincare formulated for fresh, healthy, and glowing skin. Pure Aloe Vera, Hyaluronic Acid, and Vitamin C & E.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#F3E5AB]">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>100% Original Brand Guaranteed</span>
            </div>

            {/* Social Media Links */}
            <div className="pt-2 flex items-center gap-2.5">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0B4627] hover:bg-[#145A32] text-white text-xs border border-[#D4AF37]/40 transition-all hover:scale-105 shadow-xs"
                title="Follow @mrmahirbeauty on Instagram"
              >
                <Instagram className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Instagram</span>
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0B4627] hover:bg-[#145A32] text-white text-xs border border-[#D4AF37]/40 transition-all hover:scale-105 shadow-xs"
                title="Like MR MAHIR on Facebook"
              >
                <Facebook className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Facebook</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-['Cinzel'] text-sm font-bold text-[#F3E5AB] tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <button
                  onClick={() => handleScrollTo('home')}
                  className="hover:text-[#F3E5AB] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo('products')}
                  className="hover:text-[#F3E5AB] transition-colors"
                >
                  Shop
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo('products', 'Face Wash')}
                  className="hover:text-[#F3E5AB] transition-colors"
                >
                  Face Wash (Rs. 450)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo('products', 'Beauty Cream')}
                  className="hover:text-[#F3E5AB] transition-colors"
                >
                  Beauty Cream (Rs. 450)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo('products', 'Face Serum')}
                  className="hover:text-[#F3E5AB] transition-colors"
                >
                  Face Serum (Rs. 700)
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  className="hover:text-[#F3E5AB] transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Official Contact & Address (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-['Cinzel'] text-sm font-bold text-[#F3E5AB] tracking-wider uppercase">
              Official Contact & Address
            </h4>
            <div className="space-y-2.5 text-xs text-gray-300">
              
              {/* Address */}
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-gray-400 block uppercase font-semibold">Store Address:</span>
                  <span className="text-white font-medium">{STORE_ADDRESS}</span>
                </div>
              </div>

              {/* WhatsApp 1 */}
              <div className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-gray-400 block uppercase font-semibold">WhatsApp 1:</span>
                  <a
                    href={`https://wa.me/${WHATSAPP_PRIMARY}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#F3E5AB] font-semibold underline decoration-[#D4AF37]/50"
                  >
                    {DISPLAY_PHONE_1}
                  </a>
                </div>
              </div>

              {/* WhatsApp 2 */}
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-gray-400 block uppercase font-semibold">WhatsApp 2:</span>
                  <a
                    href={`https://wa.me/${WHATSAPP_SECONDARY}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#F3E5AB] font-semibold underline decoration-[#D4AF37]/50"
                  >
                    {DISPLAY_PHONE_2}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-gray-400 block uppercase font-semibold">Official Email:</span>
                  <a
                    href={`mailto:${OFFICIAL_EMAIL}`}
                    className="text-white hover:text-[#F3E5AB] transition-colors break-all"
                  >
                    {OFFICIAL_EMAIL}
                  </a>
                </div>
              </div>

              {/* Instagram & Facebook */}
              <div className="flex items-start gap-2.5 pt-1">
                <Instagram className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-gray-400 block uppercase font-semibold">Instagram:</span>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#F3E5AB] transition-colors underline decoration-[#D4AF37]/50"
                  >
                    @mrmahirbeauty
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Facebook className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-gray-400 block uppercase font-semibold">Facebook Page:</span>
                  <a
                    href={FACEBOOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#F3E5AB] transition-colors underline decoration-[#D4AF37]/50"
                  >
                    MR MAHIR Official
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter & Payments (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-['Cinzel'] text-sm font-bold text-[#F3E5AB] tracking-wider uppercase">
              Newsletter & Payments
            </h4>
            <p className="text-xs text-gray-300 leading-relaxed">
              Subscribe to get exclusive discount codes and skincare advice directly to your inbox.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex rounded-md overflow-hidden border border-[#D4AF37]">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-[#0B4627] text-white placeholder-gray-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="gold-gradient-bg px-3.5 py-2 text-xs font-bold text-[#062B17] uppercase tracking-wider hover:opacity-90 shrink-0 cursor-pointer"
                >
                  Subscribe
                </button>
              </div>

              {subscribed && (
                <p className="text-xs text-[#F3E5AB] flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Thank you for subscribing!
                </p>
              )}
            </form>

            {/* Payment & Delivery Badges */}
            <div className="pt-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-2">
                Accepted Payment Methods
              </span>
              <div className="flex flex-wrap gap-1.5 text-[10px] font-bold">
                <span className="bg-[#0B4627] px-2.5 py-1 rounded border border-[#D4AF37]/40 text-[#F3E5AB]">
                  Cash on Delivery
                </span>
                <span className="bg-[#0B4627] px-2.5 py-1 rounded border border-[#D4AF37]/40 text-[#F3E5AB]">
                  JazzCash
                </span>
                <span className="bg-[#0B4627] px-2.5 py-1 rounded border border-[#D4AF37]/40 text-[#F3E5AB]">
                  EasyPaisa
                </span>
                <span className="bg-[#0B4627] px-2.5 py-1 rounded border border-[#D4AF37]/40 text-[#F3E5AB]">
                  Bank Transfer
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>
            © {new Date().getFullYear()} <strong>MR MAHIR — Natural Beauty</strong>. All Rights Reserved.
          </p>
          <div className="flex items-center gap-3 text-[11px]">
            <span>Gohati, Swabi, KPK, Pakistan</span>
            <span>·</span>
            <span>Nationwide Cash on Delivery</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
