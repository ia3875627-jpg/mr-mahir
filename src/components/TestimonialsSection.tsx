import React from 'react';
import { Star, CheckCircle, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/products';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#FAF8F5] border-t border-[#E6D7A8]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-[0.2em] text-[#B8860B] uppercase font-sans">
            Real Results · Real Skin
          </span>
          <h2 className="font-['Cinzel'] text-2xl sm:text-3xl lg:text-4xl font-bold text-[#062B17] mt-1 tracking-wider uppercase">
            Loved By Customers Across Pakistan
          </h2>
          <div className="w-20 h-0.5 gold-gradient-bg mx-auto mt-3 rounded-full" />
          <p className="text-[#526358] text-sm mt-3 leading-relaxed">
            Read authentic reviews from women and men across Lahore, Karachi, Islamabad, and Faisalabad who elevated their daily routine with MR MAHIR.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-xl p-5 border border-[#E5DEC9] shadow-xs hover:shadow-lg transition-all flex flex-col justify-between relative"
            >
              <div className="space-y-3">
                {/* Quote Icon */}
                <Quote className="w-6 h-6 text-[#D4AF37]/30" />

                {/* Stars */}
                <div className="flex text-[#D4AF37]">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-xs text-[#111C15] leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Author & Verification */}
              <div className="mt-5 pt-3 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-xs text-[#062B17]">{review.name}</h4>
                    <span className="text-[10px] text-[#526358]">{review.city}</span>
                  </div>

                  <div className="flex items-center gap-1 text-[10px] text-emerald-800 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded">
                    <CheckCircle className="w-3 h-3 text-[#0B4627]" />
                    <span>Verified</span>
                  </div>
                </div>

                <span className="text-[9px] text-gray-400 mt-1 block">
                  Purchased: {review.product}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
