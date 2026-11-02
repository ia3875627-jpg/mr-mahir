import React, { useState } from 'react';
import { X, Search, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
  onSearchSubmit: (query: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
  onSearchSubmit,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const results = query.trim()
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.tagline.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase())
      )
    : PRODUCTS;

  const handleSelect = (product: Product) => {
    onSelectProduct(product);
    onClose();
  };

  const handleApplyFilter = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchSubmit(query);
    onClose();
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-start justify-center p-4 sm:p-6 pt-20 animate-in fade-in duration-200">
      
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border-2 border-[#D4AF37]/50 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header & Search Input */}
        <div className="p-4 sm:p-6 border-b border-[#E6D7A8] bg-[#FAF8F5]">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#B8860B]">
              Instant Product Search
            </span>
            <button
              onClick={onClose}
              className="p-1 rounded-full text-gray-400 hover:text-black hover:bg-gray-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleApplyFilter} className="relative flex items-center">
            <Search className="w-5 h-5 text-[#0B4627] absolute left-3.5 pointer-events-none" />
            <input
              type="text"
              autoFocus
              placeholder="Search Face Wash, Face Serum, Beauty Cream, Aloe Vera..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-11 pr-24 py-3 rounded-lg border border-[#E5DEC9] text-sm text-[#111C15] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] bg-white"
            />
            <button
              type="submit"
              className="absolute right-2 px-3 py-1.5 rounded-md gold-gradient-bg text-[#062B17] font-bold text-xs uppercase tracking-wider hover:opacity-90"
            >
              Search
            </button>
          </form>
        </div>

        {/* Results List */}
        <div className="p-4 sm:p-6 max-h-[60vh] overflow-y-auto space-y-3">
          <span className="text-xs font-semibold text-[#526358] block mb-2">
            {query.trim() ? `Results (${results.length})` : 'Popular Recommendations:'}
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {results.map((product) => (
              <div
                key={product.id}
                onClick={() => handleSelect(product)}
                className="flex items-center gap-3 p-3 rounded-xl border border-[#E5DEC9] bg-white hover:border-[#D4AF37] hover:bg-[#FAF8F5] transition-all cursor-pointer shadow-xs"
              >
                <div className="w-14 h-16 rounded-lg bg-gray-50 p-1 border border-gray-100 shrink-0 flex items-center justify-center overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-['Cinzel'] text-xs font-bold text-[#062B17] truncate">
                    {product.name}
                  </h4>
                  <span className="text-[10px] text-[#526358] block truncate">
                    {product.volume} · {product.subtitle}
                  </span>
                  <span className="text-xs font-bold text-[#0B4627] font-['Cinzel'] mt-1 block">
                    Rs. {product.price.toLocaleString()}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-300 shrink-0" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
