import React from 'react';
import { ProductCard } from './ProductCard';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';

interface ProductGridProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  searchQuery: string;
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
  recentlyAddedId?: string | null;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  activeCategory,
  onSelectCategory,
  searchQuery,
  onAddToCart,
  onQuickView,
  recentlyAddedId,
}) => {
  const categoriesList = ['All', 'Face Wash', 'Face Serum', 'Beauty Cream', 'Complete Glow Kit'];

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory =
      activeCategory === 'All' ||
      activeCategory === 'all' ||
      product.category.toLowerCase() === activeCategory.toLowerCase();

    const matchesSearch =
      searchQuery.trim() === '' ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="products" className="py-16 sm:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold tracking-[0.2em] text-[#B8860B] uppercase font-sans">
            Botanical Excellence
          </span>
          <h2 className="font-['Cinzel'] text-2xl sm:text-3xl lg:text-4xl font-bold text-[#062B17] mt-1 tracking-wider uppercase">
            Our Signature Products
          </h2>
          <div className="w-20 h-0.5 gold-gradient-bg mx-auto mt-3 rounded-full" />
          <p className="text-[#526358] text-sm mt-3 leading-relaxed">
            Formulated with natural botanical extracts, nourishing vitamins, and royal essences to restore youthful radiance and deep hydration.
          </p>
        </div>

        {/* Clean Filter Tabs (Segmented Button Controls) */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {categoriesList.map((cat) => {
            const isSelected =
              activeCategory === cat ||
              (cat === 'All' && (activeCategory === 'all' || activeCategory === 'All'));

            return (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat === 'All' ? 'all' : cat)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-md transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#0B4627] text-white shadow-sm ring-1 ring-[#D4AF37]'
                    : 'bg-white text-[#526358] hover:text-[#062B17] hover:bg-[#F3EFE6] border border-[#E5DEC9]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Search indicator if active */}
        {searchQuery.trim() !== '' && (
          <div className="mb-6 flex items-center justify-between text-xs text-[#526358] bg-white p-3 rounded-lg border border-[#E5DEC9]">
            <span>
              Showing results for: <strong className="text-[#062B17]">"{searchQuery}"</strong> ({filteredProducts.length} items)
            </span>
            <button
              onClick={() => onSelectCategory('all')}
              className="text-[#0B4627] font-semibold hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* 4-Column Responsive Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                onQuickView={onQuickView}
                isAdded={recentlyAddedId === product.id}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-xl border border-dashed border-[#E5DEC9] max-w-md mx-auto p-8">
            <p className="text-sm text-[#526358]">No products found matching your current filter.</p>
            <button
              onClick={() => onSelectCategory('all')}
              className="mt-4 px-4 py-2 bg-[#0B4627] text-white text-xs font-bold rounded uppercase tracking-wider"
            >
              View All Products
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
