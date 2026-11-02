import React from 'react';

interface CategorySectionProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export const CategorySection: React.FC<CategorySectionProps> = ({
  activeCategory,
  onSelectCategory,
}) => {
  const categories = [
    {
      name: 'FACE WASH',
      id: 'Face Wash',
      image: '/assets/aistudio/MR_MAHIR_Natural_Beauty_Face_Wash_4deb8be6.png',
      subtitle: '130ml Deep Cleanse'
    },
    {
      name: 'FACE SERUM',
      id: 'Face Serum',
      image: '/assets/aistudio/Luxurious_Emerald_Face_Serum_Advertisement_50043b96.png',
      subtitle: '15ml Radiant Glow'
    },
    {
      name: 'BEAUTY CREAM',
      id: 'Beauty Cream',
      image: '/assets/aistudio/MR_MAHIR_Natural_Beauty_Cream_d627a62b.png',
      subtitle: '28g Velvet Moisture'
    },
    {
      name: 'COMPLETE GLOW KIT',
      id: 'Complete Glow Kit',
      image: '/assets/aistudio/Luxurious_Emerald_Face_Serum_Advertisement_50043b96.png',
      subtitle: '3-in-1 Trio Set'
    },
    {
      name: 'HYDRATING CARE',
      id: 'Face Serum',
      image: '/assets/aistudio/MR_MAHIR_Natural_Beauty_Cream_d627a62b.png',
      subtitle: 'Hyaluronic & Aloe'
    },
    {
      name: 'GIFT BUNDLES',
      id: 'Complete Glow Kit',
      image: '/assets/aistudio/mrr_mahir_2e5a7708.jpg',
      subtitle: 'Special Regimens'
    }
  ];

  const handleClick = (categoryId: string) => {
    onSelectCategory(categoryId);
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-14 sm:py-20 bg-white border-y border-[#E6D7A8]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with Gold Divider */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-[0.2em] text-[#B8860B] uppercase font-sans">
            Curated Formulations
          </span>
          <h2 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold text-[#062B17] mt-1 tracking-wider uppercase">
            Shop By Category
          </h2>
          <div className="w-16 h-0.5 gold-gradient-bg mx-auto mt-3 rounded-full" />
        </div>

        {/* 6 Circular Cards (150px x 150px with gold border & hover zoom) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 justify-items-center">
          {categories.map((cat, idx) => {
            const isSelected = activeCategory === cat.id;

            return (
              <button
                key={idx}
                onClick={() => handleClick(cat.id)}
                className="group flex flex-col items-center text-center cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-xl p-2 transition-transform hover:-translate-y-1"
              >
                {/* 150px x 150px Circular Thumbnail with Gold Border #D4AF37 */}
                <div
                  className={`w-[130px] h-[130px] sm:w-[150px] sm:h-[150px] rounded-full p-1 transition-all duration-300 shadow-md ${
                    isSelected
                      ? 'gold-gradient-bg ring-4 ring-[#0B4627]/20 scale-105'
                      : 'border-2 border-[#D4AF37] group-hover:border-[#0B4627] bg-[#FAF8F5]'
                  }`}
                >
                  <div className="w-full h-full rounded-full overflow-hidden bg-[#0B4627] relative">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-115"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                  </div>
                </div>

                {/* Category Title */}
                <h3 className="mt-3.5 font-['Cinzel'] text-xs sm:text-sm font-bold text-[#111C15] group-hover:text-[#0B4627] tracking-wider transition-colors">
                  {cat.name}
                </h3>
                <span className="text-[11px] text-[#526358] font-medium mt-0.5">
                  {cat.subtitle}
                </span>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
