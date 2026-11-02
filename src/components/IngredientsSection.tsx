import React from 'react';
import { Leaf, Droplets, Sun, Flower2, Sparkles } from 'lucide-react';
import { BOTANICAL_FEATURES } from '../data/products';

export const IngredientsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Leaf':
        return <Leaf className="w-6 h-6 text-[#0B4627]" />;
      case 'Droplets':
        return <Droplets className="w-6 h-6 text-[#0B4627]" />;
      case 'Sun':
        return <Sun className="w-6 h-6 text-[#0B4627]" />;
      case 'Flower2':
        return <Flower2 className="w-6 h-6 text-[#0B4627]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#0B4627]" />;
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-[#E6D7A8]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-[0.2em] text-[#B8860B] uppercase font-sans">
            Pure Botanical Alchemy
          </span>
          <h2 className="font-['Cinzel'] text-2xl sm:text-3xl lg:text-4xl font-bold text-[#062B17] mt-1 tracking-wider uppercase">
            Ingredients That Transform
          </h2>
          <div className="w-20 h-0.5 gold-gradient-bg mx-auto mt-3 rounded-full" />
          <p className="text-[#526358] text-sm mt-3 leading-relaxed">
            Every bottle and jar of MR MAHIR Natural Beauty is crafted with certified active botanical extracts and skin-loving vitamins. Zero harmful bleaches, mercury, or harsh parabens.
          </p>
        </div>

        {/* 4 Botanical Ingredients Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {BOTANICAL_FEATURES.map((item, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-[#FAF8F5] border border-[#E5DEC9] hover:border-[#D4AF37] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-white border border-[#D4AF37]/40 shadow-xs flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {getIcon(item.icon)}
                </div>

                <span className="text-[11px] font-bold uppercase tracking-widest text-[#B8860B] block">
                  {item.subtitle}
                </span>

                <h3 className="font-['Cinzel'] text-base font-bold text-[#062B17] mt-1">
                  {item.title}
                </h3>

                <p className="text-xs text-[#526358] mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#E6D7A8]/50 flex items-center gap-1.5 text-[11px] font-semibold text-[#0B4627]">
                <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                <span>100% Skin Safe & Ethical</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
