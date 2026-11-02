import React from 'react';
import { MessageCircle, ShoppingBag, CheckCircle, Gift } from 'lucide-react';
import { WHATSAPP_PRIMARY, PRODUCTS } from '../data/products';
import { Product } from '../types';

interface PromoBannerProps {
  onAddToCart: (product: Product) => void;
  onOpenQuickView: (product: Product) => void;
}

export const PromoBanner: React.FC<PromoBannerProps> = ({ onAddToCart, onOpenQuickView }) => {
  const bundleProduct = PRODUCTS.find((p) => p.id === 'complete-glow-bundle') || PRODUCTS[3];

  const handleWhatsAppOrder = () => {
    const msg = `Assalam-o-Alaikum MR MAHIR! 👑\n\nI want to order the *MR MAHIR 3-in-1 Complete Glow Bundle*:\n• Face Wash (130ml) - Rs. 450 PKR\n• Beauty Cream (28g) - Rs. 450 PKR\n• Face Serum (15ml) - Rs. 700 PKR\n\nTotal Combo Price: *Rs. 1,500 PKR* (Save Rs. 100)\nPlease book my Cash on Delivery order.`;
    window.open(`https://wa.me/${WHATSAPP_PRIMARY}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="bundle-offer" className="py-16 sm:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 2-column asymmetric split */}
        <div className="rounded-2xl overflow-hidden border-2 border-[#D4AF37] shadow-2xl bg-white grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* Left Block: Deep Emerald Green background (#0B4627) with Gold border */}
          <div className="lg:col-span-5 bg-[#0B4627] p-8 sm:p-12 flex flex-col justify-between text-white relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#D4AF37]/15 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#145A32]/40 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#062B17] border border-[#D4AF37] text-[11px] font-bold tracking-[0.2em] text-[#F3E5AB] uppercase">
                <Gift className="w-3.5 h-3.5 text-[#D4AF37]" />
                Special Bundle Offer
              </div>

              {/* Heading */}
              <h3 className="font-['Cinzel'] text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-wide text-white">
                Complete 3-Step <br />
                <span className="text-[#F3E5AB]">Glowing Skin Regimen</span>
              </h3>

              {/* Subtext */}
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                Get the MR MAHIR Face Wash (130ml), Beauty Cream (28g), and Face Serum (15ml) combo at a special discounted combo price.
              </p>

              {/* Checklist */}
              <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-[#F3E5AB]/90 font-medium">
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Step 1: Deep Aloe Cleaning Face Wash (130ml) — <strong>Rs. 450 PKR</strong></span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Step 2: Velvet Radiance Beauty Cream (28g) — <strong>Rs. 450 PKR</strong></span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Step 3: Brightening Hyaluronic Serum (15ml) — <strong>Rs. 700 PKR</strong></span>
                </div>
              </div>

              {/* Pricing Box */}
              <div className="pt-2 p-3.5 rounded-xl bg-[#062B17]/90 border border-[#D4AF37]/60">
                <span className="text-[10px] text-gray-300 uppercase tracking-widest block font-medium">
                  Special Combo Price
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#F3E5AB] font-['Cinzel']">
                    Rs. 1,500 PKR
                  </span>
                  <span className="text-xs sm:text-sm text-gray-400 line-through">
                    Rs. 1,600
                  </span>
                  <span className="text-xs font-bold text-[#062B17] bg-[#D4AF37] px-2 py-0.5 rounded">
                    Save Rs. 100
                  </span>
                </div>
                <span className="text-[10px] text-[#D4AF37] font-semibold mt-1 block">
                  Nationwide Cash on Delivery (COD) Available
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="relative z-10 pt-8 flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleWhatsAppOrder}
                className="flex-1 py-3.5 px-5 rounded-lg gold-gradient-bg text-[#062B17] font-bold text-xs sm:text-sm uppercase tracking-wider hover:opacity-95 shadow-lg flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#062B17]" />
                <span>ORDER COMBO ON WHATSAPP</span>
              </button>

              <button
                onClick={() => onAddToCart(bundleProduct)}
                className="py-3.5 px-4 rounded-lg bg-[#062B17] border border-[#D4AF37] text-white font-bold text-xs uppercase tracking-wider hover:bg-black transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4 text-[#D4AF37]" />
                <span>Add To Cart</span>
              </button>
            </div>
          </div>

          {/* Right Block: High-res flat-lay lifestyle showcase of MR MAHIR products */}
          <div className="lg:col-span-7 bg-[#FAF8F5] p-6 sm:p-10 flex flex-col justify-center items-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

            {/* 3 Products Showcase Grid */}
            <div className="w-full relative z-10 grid grid-cols-3 gap-3 sm:gap-4">
              
              {/* Product 1: Face Wash */}
              <div
                onClick={() => onOpenQuickView(PRODUCTS[0])}
                className="group relative bg-white rounded-xl p-2.5 sm:p-3 border border-[#E6D7A8] shadow-sm hover:shadow-md transition-all cursor-pointer text-center"
              >
                <div className="aspect-3/4 rounded-lg overflow-hidden bg-[#0B4627] mb-2 relative">
                  <img
                    src="/assets/aistudio/MR_MAHIR_Natural_Beauty_Face_Wash_4deb8be6.png"
                    alt="Face Wash"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute top-1.5 left-1.5 text-[9px] bg-black/60 text-[#F3E5AB] font-bold px-1.5 py-0.5 rounded">
                    130 ml
                  </span>
                </div>
                <h4 className="font-['Cinzel'] text-xs font-bold text-[#062B17] truncate">Face Wash</h4>
                <p className="text-[10px] text-[#526358] truncate">Deep Cleaning</p>
                <span className="text-xs font-bold text-[#0B4627] mt-1 block">Rs. 450 PKR</span>
              </div>

              {/* Product 2: Beauty Cream */}
              <div
                onClick={() => onOpenQuickView(PRODUCTS[1])}
                className="group relative bg-white rounded-xl p-2.5 sm:p-3 border border-[#E6D7A8] shadow-sm hover:shadow-md transition-all cursor-pointer text-center"
              >
                <div className="aspect-3/4 rounded-lg overflow-hidden bg-[#0B4627] mb-2 relative">
                  <img
                    src="/assets/aistudio/MR_MAHIR_Natural_Beauty_Cream_d627a62b.png"
                    alt="Beauty Cream"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute top-1.5 left-1.5 text-[9px] bg-black/60 text-[#F3E5AB] font-bold px-1.5 py-0.5 rounded">
                    28 g
                  </span>
                </div>
                <h4 className="font-['Cinzel'] text-xs font-bold text-[#062B17] truncate">Beauty Cream</h4>
                <p className="text-[10px] text-[#526358] truncate">Velvet Glow</p>
                <span className="text-xs font-bold text-[#0B4627] mt-1 block">Rs. 450 PKR</span>
              </div>

              {/* Product 3: Face Serum */}
              <div
                onClick={() => onOpenQuickView(PRODUCTS[2])}
                className="group relative bg-white rounded-xl p-2.5 sm:p-3 border-2 border-[#D4AF37] shadow-lg hover:shadow-xl transition-all cursor-pointer text-center -translate-y-1.5 sm:-translate-y-2"
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0B4627] text-[#F3E5AB] border border-[#D4AF37] text-[8px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider whitespace-nowrap">
                  Open Retail
                </div>
                <div className="aspect-3/4 rounded-lg overflow-hidden bg-[#0B4627] mb-2 relative">
                  <img
                    src="/assets/aistudio/Luxurious_Emerald_Face_Serum_Advertisement_50043b96.png"
                    alt="Face Serum"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute top-1.5 left-1.5 text-[9px] bg-black/60 text-[#F3E5AB] font-bold px-1.5 py-0.5 rounded">
                    15 ml
                  </span>
                </div>
                <h4 className="font-['Cinzel'] text-xs font-bold text-[#062B17] truncate">Face Serum</h4>
                <p className="text-[10px] text-[#526358] truncate">Brightening Elixir</p>
                <span className="text-xs font-bold text-[#0B4627] mt-1 block">Rs. 700 PKR</span>
              </div>

            </div>

            {/* Bottom Location & Authentic Guarantee badge */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs text-[#062B17] font-semibold bg-white/90 border border-[#E6D7A8] px-4 py-2 rounded-full shadow-xs">
              <span>Origin: Gohati, Swabi, KPK, Pakistan</span>
              <span className="text-gray-300">·</span>
              <span>Fast Nationwide Cash on Delivery</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
