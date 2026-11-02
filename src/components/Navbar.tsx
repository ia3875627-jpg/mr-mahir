import React, { useState } from 'react';
import { ShoppingBag, Search, Menu, X, MessageCircle, Phone, Sparkles, Instagram, Facebook } from 'lucide-react';
import { WHATSAPP_PRIMARY, DISPLAY_PHONE_1, INSTAGRAM_URL, FACEBOOK_URL } from '../data/products';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onSelectCategory: (category: string) => void;
  onOpenSearch: () => void;
  onOpenAbout: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onSelectCategory,
  onOpenSearch,
  onOpenAbout,
  onOpenContact,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string, category?: string) => {
    setMobileMenuOpen(false);
    if (category) {
      onSelectCategory(category);
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-[#E6D7A8] shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[85px] gap-4">
          
          {/* LEFT: Brand Logo with Circular Gold Frame and Crown M */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            className="flex items-center gap-3 group shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
          >
            <div className="relative w-14 h-14 rounded-full p-[2.5px] gold-gradient-bg shadow-sm transition-transform duration-300 group-hover:scale-105 shrink-0">
              <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center p-0.5">
                <img
                  src="/assets/aistudio/mrr_mahir_2e5a7708.jpg"
                  alt="MR MAHIR Crown Emblem Logo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* Subtle gold shine effect */}
              <div className="absolute inset-0 rounded-full border border-[#D4AF37]/50 pointer-events-none" />
            </div>

            <div className="flex flex-col">
              <span className="font-['Cinzel'] text-xl sm:text-2xl font-bold tracking-[0.08em] text-[#062B17] leading-tight group-hover:text-[#0B4627] transition-colors">
                MR MAHIR
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.2em] uppercase text-[#D4AF37] font-sans">
                Natural Beauty
              </span>
            </div>
          </a>

          {/* CENTER: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs xl:text-sm font-semibold tracking-wider text-[#111C15]">
            <button
              onClick={() => handleNavClick('home')}
              className="hover:text-[#0B4627] transition-colors uppercase py-1 border-b-2 border-transparent hover:border-[#D4AF37]"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('products')}
              className="hover:text-[#0B4627] transition-colors uppercase py-1 border-b-2 border-transparent hover:border-[#D4AF37]"
            >
              Shop
            </button>
            <button
              onClick={() => handleNavClick('products', 'Face Care')}
              className="hover:text-[#0B4627] transition-colors uppercase py-1 border-b-2 border-transparent hover:border-[#D4AF37]"
            >
              Face Care
            </button>
            <button
              onClick={() => handleNavClick('bundle-offer')}
              className="hover:text-[#0B4627] transition-colors uppercase py-1 border-b-2 border-transparent hover:border-[#D4AF37] text-[#0B4627] flex items-center gap-1 font-bold"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              Bundle Deals
            </button>
            <button
              onClick={onOpenAbout}
              className="hover:text-[#0B4627] transition-colors uppercase py-1 border-b-2 border-transparent hover:border-[#D4AF37]"
            >
              About Us
            </button>
            <button
              onClick={onOpenContact}
              className="hover:text-[#0B4627] transition-colors uppercase py-1 border-b-2 border-transparent hover:border-[#D4AF37]"
            >
              Contact Us
            </button>
          </nav>

          {/* RIGHT: Search, WhatsApp Quick Order, Shopping Cart */}
          <div className="flex items-center gap-2.5 sm:gap-4 shrink-0">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              aria-label="Search Products"
              className="p-2 text-[#111C15] hover:text-[#0B4627] hover:bg-[#FAF8F5] rounded-full transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* WhatsApp Quick Order button */}
            <a
              href={`https://wa.me/${WHATSAPP_PRIMARY}?text=${encodeURIComponent('Assalam-o-Alaikum MR MAHIR! I want to inquire about your natural beauty skincare products.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-full bg-[#0B4627] text-white hover:bg-[#062B17] border border-[#D4AF37]/50 shadow-xs transition-all hover:shadow-md hover:scale-[1.02]"
            >
              <MessageCircle className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]/20" />
              <span className="tracking-wide">WhatsApp Order</span>
            </a>

            {/* Shopping Cart button with counter badge */}
            <button
              onClick={onOpenCart}
              aria-label="Shopping Cart"
              className="relative p-2.5 text-[#062B17] hover:text-[#0B4627] bg-[#FAF8F5] border border-[#E6D7A8] rounded-full transition-all hover:bg-[#F3EFE6] hover:scale-105 active:scale-95"
            >
              <ShoppingBag className="w-5 h-5 text-[#0B4627]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-5 h-5 px-1 text-[11px] font-bold text-[#062B17] bg-[#D4AF37] rounded-full shadow-sm ring-2 ring-white animate-in zoom-in-50">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Mobile Menu"
              className="lg:hidden p-2 text-[#111C15] hover:text-[#0B4627] hover:bg-[#FAF8F5] rounded-md transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[123px] bg-white border-b border-[#E6D7A8] shadow-xl p-6 space-y-4 animate-in slide-in-from-top-4 duration-200 z-50">
          <div className="grid grid-cols-2 gap-3 text-sm font-semibold text-[#111C15]">
            <button
              onClick={() => handleNavClick('home')}
              className="p-3 text-left bg-[#FAF8F5] hover:bg-[#0B4627]/10 rounded-lg transition-colors border border-gray-100"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('products')}
              className="p-3 text-left bg-[#FAF8F5] hover:bg-[#0B4627]/10 rounded-lg transition-colors border border-gray-100"
            >
              Shop All
            </button>
            <button
              onClick={() => handleNavClick('products', 'Face Wash')}
              className="p-3 text-left bg-[#FAF8F5] hover:bg-[#0B4627]/10 rounded-lg transition-colors border border-gray-100"
            >
              Face Wash
            </button>
            <button
              onClick={() => handleNavClick('products', 'Face Serum')}
              className="p-3 text-left bg-[#FAF8F5] hover:bg-[#0B4627]/10 rounded-lg transition-colors border border-gray-100"
            >
              Face Serum
            </button>
            <button
              onClick={() => handleNavClick('products', 'Beauty Cream')}
              className="p-3 text-left bg-[#FAF8F5] hover:bg-[#0B4627]/10 rounded-lg transition-colors border border-gray-100"
            >
              Beauty Cream
            </button>
            <button
              onClick={() => handleNavClick('bundle-offer')}
              className="p-3 text-left bg-[#0B4627]/10 text-[#0B4627] hover:bg-[#0B4627]/20 rounded-lg transition-colors font-bold border border-[#D4AF37]/40"
            >
              Bundle Deals
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAbout();
              }}
              className="p-3 text-left bg-[#FAF8F5] hover:bg-[#0B4627]/10 rounded-lg transition-colors border border-gray-100"
            >
              About Us
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="p-3 text-left bg-[#FAF8F5] hover:bg-[#0B4627]/10 rounded-lg transition-colors border border-gray-100"
            >
              Contact Us
            </button>
          </div>

          <div className="pt-3 border-t border-gray-200 flex flex-col gap-2.5">
            <a
              href={`https://wa.me/${WHATSAPP_PRIMARY}?text=${encodeURIComponent('Assalam-o-Alaikum MR MAHIR! I want to order skincare products.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#0B4627] text-white font-semibold text-sm border border-[#D4AF37]"
            >
              <MessageCircle className="w-4 h-4 text-[#D4AF37]" />
              Order on WhatsApp ({DISPLAY_PHONE_1})
            </a>
            <a
              href={`tel:03142299397`}
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#FAF8F5] text-[#062B17] font-medium text-xs border border-gray-200"
            >
              <Phone className="w-3.5 h-3.5 text-[#0B4627]" />
              Call Customer Care
            </a>

            {/* Social Links */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-pink-50 border border-pink-200 text-pink-700 text-xs font-semibold"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Instagram</span>
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold"
              >
                <Facebook className="w-3.5 h-3.5" />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
