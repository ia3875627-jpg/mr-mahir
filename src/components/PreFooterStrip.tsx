import React from 'react';
import { Truck, MessageCircle, MapPin, Headphones } from 'lucide-react';
import { DISPLAY_PHONE_1, DISPLAY_PHONE_2, OFFICIAL_EMAIL, STORE_ADDRESS, WHATSAPP_PRIMARY } from '../data/products';

export const PreFooterStrip: React.FC = () => {
  return (
    <section className="bg-[#FAF8F5] border-y border-[#E6D7A8] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: FAST DELIVERY */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white border border-[#D4AF37]/40 shadow-xs flex items-center justify-center shrink-0">
              <Truck className="w-6 h-6 text-[#0B4627]" />
            </div>
            <div>
              <h4 className="font-['Cinzel'] text-xs sm:text-sm font-bold text-[#062B17] tracking-wider uppercase">
                Fast Delivery
              </h4>
              <p className="text-xs text-[#526358] mt-0.5">
                All across Pakistan
              </p>
            </div>
          </div>

          {/* Column 2: WHATSAPP ORDER */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white border border-[#D4AF37]/40 shadow-xs flex items-center justify-center shrink-0">
              <MessageCircle className="w-6 h-6 text-[#0B4627]" />
            </div>
            <div>
              <h4 className="font-['Cinzel'] text-xs sm:text-sm font-bold text-[#062B17] tracking-wider uppercase">
                WhatsApp Order
              </h4>
              <a
                href={`https://wa.me/${WHATSAPP_PRIMARY}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#0B4627] font-semibold hover:underline block mt-0.5"
              >
                {DISPLAY_PHONE_1} / {DISPLAY_PHONE_2}
              </a>
            </div>
          </div>

          {/* Column 3: OUR LOCATION */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white border border-[#D4AF37]/40 shadow-xs flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6 text-[#0B4627]" />
            </div>
            <div>
              <h4 className="font-['Cinzel'] text-xs sm:text-sm font-bold text-[#062B17] tracking-wider uppercase">
                Our Location
              </h4>
              <p className="text-xs text-[#526358] mt-0.5 font-medium">
                {STORE_ADDRESS}
              </p>
            </div>
          </div>

          {/* Column 4: 24/7 SUPPORT */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white border border-[#D4AF37]/40 shadow-xs flex items-center justify-center shrink-0">
              <Headphones className="w-6 h-6 text-[#0B4627]" />
            </div>
            <div>
              <h4 className="font-['Cinzel'] text-xs sm:text-sm font-bold text-[#062B17] tracking-wider uppercase">
                24/7 Support
              </h4>
              <a
                href={`mailto:${OFFICIAL_EMAIL}`}
                className="text-xs text-[#0B4627] font-semibold hover:underline block mt-0.5 truncate max-w-[200px]"
              >
                {OFFICIAL_EMAIL}
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
