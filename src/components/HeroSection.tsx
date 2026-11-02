import React, { useState } from 'react';
import { Sparkles, MessageCircle, ArrowRight, ShieldCheck, Droplets, Sun, Truck, Star } from 'lucide-react';
import { WHATSAPP_PRIMARY } from '../data/products';

interface HeroSectionProps {
  onShopClick: () => void;
  onQuickViewTrio: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onShopClick, onQuickViewTrio }) => {
  const [activeTab, setActiveTab] = useState<'trio' | 'serum' | 'cream' | 'wash'>('trio');

  return (
    <section id="home" className="relative pt-6 sm:pt-10 pb-20 sm:pb-28 overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#F5EFE6] to-[#FAF8F5]">
      {/* Decorative Gold & Emerald Ambient Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#0B4627]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 2-Column Split Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (58% / 7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Royal Gold Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D4AF37] bg-white/80 shadow-xs backdrop-blur-xs">
              <Sparkles className="w-4 h-4 text-[#B8860B]" />
              <span className="text-xs font-bold tracking-[0.18em] uppercase text-[#0B4627] font-sans">
                100% NATURAL EXTRACTS
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-['Cinzel'] text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-[#062B17] leading-[1.12] tracking-tight text-balance">
              Radiant Skin. <br className="hidden sm:inline" />
              <span className="gold-gradient-text drop-shadow-xs">Royal Confidence.</span>
            </h1>

            {/* Subtext */}
            <p className="text-[#526358] text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Deep cleansing, brightening, and rejuvenating botanical formulas crafted for healthy, glowing skin. Experience pure Aloe Vera, Hyaluronic Acid, and Vitamin C & E.
            </p>

            {/* Key Quality Highlights */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1 text-xs text-[#111C15] font-medium">
              <span className="inline-flex items-center gap-1.5 bg-white/70 px-3 py-1 rounded-md border border-[#E6D7A8]/60">
                <Star className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                Starting at only Rs. 450 PKR
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/70 px-3 py-1 rounded-md border border-[#E6D7A8]/60">
                <Truck className="w-3.5 h-3.5 text-[#0B4627]" />
                Nationwide Cash on Delivery
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/70 px-3 py-1 rounded-md border border-[#E6D7A8]/60">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0B4627]" />
                Gohati, Swabi, KPK Origin
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <button
                onClick={onShopClick}
                className="w-full sm:w-auto px-8 py-4 rounded-lg gold-gradient-bg text-[#062B17] font-bold text-sm tracking-wider uppercase shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.99] transition-all flex items-center justify-center gap-2 group cursor-pointer border border-[#D4AF37]"
              >
                <span>SHOP NOW</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href={`https://wa.me/${WHATSAPP_PRIMARY}?text=${encodeURIComponent('Assalam-o-Alaikum MR MAHIR! I would like to order your natural beauty skincare products. Please guide me.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 rounded-lg bg-[#0B4627] text-white font-bold text-sm tracking-wider uppercase hover:bg-[#062B17] transition-all shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.99] flex items-center justify-center gap-2 border border-[#D4AF37]/50"
              >
                <MessageCircle className="w-4 h-4 text-[#D4AF37]" />
                <span>ORDER ON WHATSAPP</span>
              </a>
            </div>

            {/* Quick interactive product tabs */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-2 flex-wrap">
              <span className="text-[11px] font-semibold tracking-wider text-[#526358] uppercase">Explore:</span>
              <button
                onClick={() => setActiveTab('trio')}
                className={`text-xs px-2.5 py-1 rounded transition-colors font-medium ${
                  activeTab === 'trio' ? 'bg-[#0B4627] text-white' : 'bg-white/80 text-[#111C15] hover:bg-white'
                }`}
              >
                Trio Set
              </button>
              <button
                onClick={() => setActiveTab('wash')}
                className={`text-xs px-2.5 py-1 rounded transition-colors font-medium ${
                  activeTab === 'wash' ? 'bg-[#0B4627] text-white' : 'bg-white/80 text-[#111C15] hover:bg-white'
                }`}
              >
                Face Wash (Rs. 450)
              </button>
              <button
                onClick={() => setActiveTab('cream')}
                className={`text-xs px-2.5 py-1 rounded transition-colors font-medium ${
                  activeTab === 'cream' ? 'bg-[#0B4627] text-white' : 'bg-white/80 text-[#111C15] hover:bg-white'
                }`}
              >
                Beauty Cream (Rs. 450)
              </button>
              <button
                onClick={() => setActiveTab('serum')}
                className={`text-xs px-2.5 py-1 rounded transition-colors font-medium ${
                  activeTab === 'serum' ? 'bg-[#0B4627] text-white' : 'bg-white/80 text-[#111C15] hover:bg-white'
                }`}
              >
                Face Serum (Rs. 700)
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual Studio Showcase (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Background luxury frame ring */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[340px] sm:w-[420px] h-[340px] sm:h-[420px] rounded-full border border-[#D4AF37]/30 bg-gradient-to-tr from-[#0B4627]/10 via-[#FAF8F5]/50 to-[#D4AF37]/20" />
            </div>

            {/* Main Showcase Card with High-Res Product Visual */}
            <div className="relative w-full max-w-[430px] rounded-2xl overflow-hidden bg-white border-2 border-[#D4AF37]/40 shadow-2xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(11,70,39,0.2)]">
              
              {/* Product Visual Container */}
              <div className="relative aspect-4/5 overflow-hidden bg-gradient-to-b from-[#0B4627] to-[#062B17]">
                
                {/* Image switcher based on active tab */}
                {activeTab === 'trio' && (
                  <div className="relative w-full h-full flex flex-col items-center justify-center p-3">
                    <img
                      src="/assets/aistudio/Luxurious_Emerald_Face_Serum_Advertisement_50043b96.png"
                      alt="MR MAHIR Complete Royal Skincare Set"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
                    
                    {/* Floating Product Badges */}
                    <div className="absolute bottom-4 inset-x-4 flex items-center justify-between text-white">
                      <div className="text-left">
                        <span className="text-[10px] uppercase tracking-widest text-[#F3E5AB] font-semibold block">Complete 3-in-1 Kit</span>
                        <h4 className="font-['Cinzel'] text-sm sm:text-base font-bold">Face Wash + Cream + Serum</h4>
                      </div>
                      <span className="text-xs font-bold text-[#062B17] bg-[#D4AF37] px-2.5 py-1 rounded shadow-sm">
                        Rs. 1,500 PKR
                      </span>
                    </div>
                  </div>
                )}

                {activeTab === 'wash' && (
                  <div className="relative w-full h-full">
                    <img
                      src="/assets/aistudio/MR_MAHIR_Natural_Beauty_Face_Wash_4deb8be6.png"
                      alt="MR MAHIR Face Wash 130ml"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 inset-x-4 bg-black/60 backdrop-blur-xs p-2.5 rounded-lg flex items-center justify-between text-white">
                      <div>
                        <span className="text-[10px] text-[#F3E5AB]">130 ml e Tube</span>
                        <p className="font-semibold text-xs">Deep Cleaning Face Wash</p>
                      </div>
                      <span className="text-xs font-bold text-[#D4AF37]">Rs. 450 PKR</span>
                    </div>
                  </div>
                )}

                {activeTab === 'cream' && (
                  <div className="relative w-full h-full">
                    <img
                      src="/assets/aistudio/MR_MAHIR_Natural_Beauty_Cream_d627a62b.png"
                      alt="MR MAHIR Beauty Cream 28g"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 inset-x-4 bg-black/60 backdrop-blur-xs p-2.5 rounded-lg flex items-center justify-between text-white">
                      <div>
                        <span className="text-[10px] text-[#F3E5AB]">28 g e Jar</span>
                        <p className="font-semibold text-xs">Velvet Beauty Cream</p>
                      </div>
                      <span className="text-xs font-bold text-[#D4AF37]">Rs. 450 PKR</span>
                    </div>
                  </div>
                )}

                {activeTab === 'serum' && (
                  <div className="relative w-full h-full">
                    <img
                      src="/assets/aistudio/Luxurious_Emerald_Face_Serum_Advertisement_50043b96.png"
                      alt="MR MAHIR Face Serum 15ml"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 inset-x-4 bg-black/60 backdrop-blur-xs p-2.5 rounded-lg flex items-center justify-between text-white">
                      <div>
                        <span className="text-[10px] text-[#F3E5AB]">15 ml e Dropper</span>
                        <p className="font-semibold text-xs">Brightening Face Serum</p>
                      </div>
                      <span className="text-xs font-bold text-[#D4AF37]">Rs. 700 PKR</span>
                    </div>
                  </div>
                )}

                {/* Floating Gold Crown Seal */}
                <div className="absolute top-3.5 right-3.5 w-12 h-12 rounded-full p-0.5 gold-gradient-bg shadow-lg">
                  <div className="w-full h-full rounded-full bg-white overflow-hidden p-0.5">
                    <img
                      src="/assets/aistudio/mrr_mahir_2e5a7708.jpg"
                      alt="Official Seal"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Nationwide COD Tag */}
                <div className="absolute top-3.5 left-3.5 bg-[#0B4627]/90 backdrop-blur-xs border border-[#D4AF37] px-2.5 py-1 rounded text-[10px] font-bold text-[#F3E5AB] tracking-wide uppercase">
                  Nationwide Cash on Delivery
                </div>
              </div>

              {/* Bottom Quick Action Strip inside Hero Card */}
              <div className="p-4 bg-white flex items-center justify-between border-t border-[#E6D7A8]">
                <button
                  onClick={onQuickViewTrio}
                  className="text-xs font-bold text-[#0B4627] hover:text-[#062B17] uppercase tracking-wider flex items-center gap-1.5"
                >
                  <span>View Regimen Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={onShopClick}
                  className="px-3 py-1.5 text-xs font-semibold rounded bg-[#FAF8F5] border border-[#D4AF37] text-[#062B17] hover:bg-[#D4AF37] transition-colors"
                >
                  Shop Products
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* OVERLAPPING 4-FEATURE TRUST BAR */}
        <div className="mt-12 sm:mt-16 bg-white rounded-xl border border-[#D4AF37]/40 shadow-[0_12px_30px_rgba(11,70,39,0.08)] p-6 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 lg:divide-x divide-gray-100">
            
            {/* Feature 1 */}
            <div className="flex items-start gap-3.5 pt-4 sm:pt-0">
              <div className="w-10 h-10 rounded-full bg-[#0B4627]/10 flex items-center justify-center shrink-0 border border-[#D4AF37]/30">
                <Sparkles className="w-5 h-5 text-[#0B4627]" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#062B17] uppercase tracking-wide">
                  Natural Extracts
                </h4>
                <p className="text-xs text-[#526358] mt-1 leading-snug">
                  Aloe Vera, Hyaluronic Acid & Vitamin C & E
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-3.5 pt-4 sm:pt-0 lg:pl-6">
              <div className="w-10 h-10 rounded-full bg-[#0B4627]/10 flex items-center justify-center shrink-0 border border-[#D4AF37]/30">
                <Droplets className="w-5 h-5 text-[#0B4627]" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#062B17] uppercase tracking-wide">
                  Deep Cleansing
                </h4>
                <p className="text-xs text-[#526358] mt-1 leading-snug">
                  Refreshes & purifies all skin types
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-3.5 pt-4 sm:pt-0 lg:pl-6">
              <div className="w-10 h-10 rounded-full bg-[#0B4627]/10 flex items-center justify-center shrink-0 border border-[#D4AF37]/30">
                <Sun className="w-5 h-5 text-[#0B4627]" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#062B17] uppercase tracking-wide">
                  Brightening Care
                </h4>
                <p className="text-xs text-[#526358] mt-1 leading-snug">
                  Moisturizes, nourishes & boosts glow
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-start gap-3.5 pt-4 sm:pt-0 lg:pl-6">
              <div className="w-10 h-10 rounded-full bg-[#0B4627]/10 flex items-center justify-center shrink-0 border border-[#D4AF37]/30">
                <Truck className="w-5 h-5 text-[#0B4627]" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#062B17] uppercase tracking-wide">
                  Fast Cash on Delivery
                </h4>
                <p className="text-xs text-[#526358] mt-1 leading-snug">
                  Nationwide delivery across Pakistan
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
