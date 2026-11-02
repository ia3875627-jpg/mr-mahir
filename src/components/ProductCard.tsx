import React from 'react';
import { Star, MessageCircle, ShoppingBag, Eye, Check } from 'lucide-react';
import { Product } from '../types';
import { generateWhatsAppOrderUrl } from '../data/products';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
  isAdded?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onQuickView,
  isAdded = false,
}) => {
  const whatsappUrl = generateWhatsAppOrderUrl(product.name, product.priceDisplay);

  // Distinct action buttons based on prompt requirements
  const isSerum = product.id === 'face-serum-15ml';
  const isBundle = product.id === 'complete-glow-bundle';

  return (
    <div className="group bg-white rounded-lg border border-[#E5DEC9] shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden relative">
      
      {/* Top Badge */}
      {product.badge && (
        <div className="absolute top-3 left-3 z-10 bg-[#0B4627] text-[#F3E5AB] border border-[#D4AF37] px-2.5 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase shadow-xs">
          {product.badge}
        </div>
      )}

      {/* Quick View Button on Image Hover */}
      <button
        onClick={() => onQuickView(product)}
        className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-[#0B4627] shadow-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        title="Quick View Details"
      >
        <Eye className="w-4 h-4" />
      </button>

      {/* Product Image Container */}
      <div
        onClick={() => onQuickView(product)}
        className="relative aspect-4/5 overflow-hidden bg-[#FAF8F5] cursor-pointer flex items-center justify-center p-3"
      >
        <img
          src={product.image}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </div>

      {/* Product Content Body */}
      <div className="p-4 sm:p-5 flex flex-col grow justify-between bg-white space-y-3">
        
        {/* Rating and Volume */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-1 text-[#B8860B]">
            <div className="flex text-[#D4AF37]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
              ))}
            </div>
            <span className="text-[11px] text-[#526358] font-medium ml-1">
              ({product.reviewsCount})
            </span>
          </div>

          <span className="text-[11px] font-semibold text-[#0B4627] bg-[#0B4627]/10 px-2 py-0.5 rounded">
            {product.volume}
          </span>
        </div>

        {/* Product Name */}
        <div>
          <h3
            onClick={() => onQuickView(product)}
            className="font-['Cinzel'] text-base sm:text-lg font-bold text-[#111C15] group-hover:text-[#0B4627] transition-colors cursor-pointer line-clamp-1"
          >
            {product.name}
          </h3>
          <p className="text-xs text-[#526358] mt-1 line-clamp-2 leading-relaxed">
            {product.tagline}
          </p>
        </div>

        {/* Price & Savings Display */}
        <div className="pt-1 border-t border-gray-100">
          <div className="flex items-baseline justify-between">
            <span className="text-base sm:text-lg font-bold text-[#062B17] font-['Cinzel']">
              {product.priceDisplay}
            </span>
            {product.originalPrice && product.originalPrice > product.price && product.price > 0 && (
              <span className="text-xs text-gray-400 line-through tabular-nums">
                Rs. {product.originalPrice}
              </span>
            )}
          </div>
          <span className="text-[10px] text-emerald-800 font-medium block mt-0.5">
            Nationwide Cash on Delivery (COD)
          </span>
        </div>

        {/* Action Buttons specifically customized according to requirements */}
        <div className="pt-2">
          {/* 1. Case: Face Serum (Buttons: "INQUIRE PRICE ON WHATSAPP" + "ADD TO CART") */}
          {isSerum ? (
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => onAddToCart(product)}
                className={`w-full py-2.5 px-2 rounded-md font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1 border cursor-pointer ${
                  isAdded
                    ? 'bg-[#0B4627] text-white border-[#0B4627]'
                    : 'bg-white hover:bg-[#FAF8F5] text-[#062B17] border-[#D4AF37] hover:border-[#0B4627]'
                }`}
              >
                {isAdded ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#F3E5AB]" />
                    <span>Added</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-3.5 h-3.5 text-[#0B4627]" />
                    <span>ADD TO CART</span>
                  </>
                )}
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-2 rounded-md bg-[#0B4627] hover:bg-[#062B17] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1 border border-[#D4AF37]/40 shadow-xs"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="truncate">WHATSAPP</span>
              </a>
            </div>
          ) : isBundle ? (
            /* 2. Case: 3-in-1 Bundle (Buttons: "ORDER BUNDLE ON WHATSAPP" + "ADD TO CART") */
            <div className="space-y-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-md gold-gradient-bg text-[#062B17] font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 border border-[#D4AF37] shadow-xs hover:opacity-95"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#062B17]" />
                <span className="truncate">ORDER BUNDLE ON WHATSAPP</span>
              </a>

              <button
                onClick={() => onAddToCart(product)}
                className={`w-full py-2 px-3 rounded-md font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 border cursor-pointer ${
                  isAdded
                    ? 'bg-[#0B4627] text-white border-[#0B4627]'
                    : 'bg-white hover:bg-[#FAF8F5] text-[#062B17] border-[#D4AF37]'
                }`}
              >
                {isAdded ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#F3E5AB]" />
                    <span>Added to Cart</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-3.5 h-3.5 text-[#0B4627]" />
                    <span>ADD TO CART</span>
                  </>
                )}
              </button>
            </div>
          ) : (
            /* 3. Case: Face Wash & Beauty Cream (Buttons: "ADD TO CART" + "WHATSAPP ORDER") */
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => onAddToCart(product)}
                className={`w-full py-2.5 px-2 rounded-md font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1 border cursor-pointer ${
                  isAdded
                    ? 'bg-[#0B4627] text-white border-[#0B4627]'
                    : 'bg-white hover:bg-[#FAF8F5] text-[#062B17] border-[#D4AF37] hover:border-[#0B4627]'
                }`}
              >
                {isAdded ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#F3E5AB]" />
                    <span>Added</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-3.5 h-3.5 text-[#0B4627]" />
                    <span>ADD TO CART</span>
                  </>
                )}
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-2 rounded-md bg-[#0B4627] hover:bg-[#062B17] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1 border border-[#D4AF37]/40 shadow-xs"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="truncate">WHATSAPP</span>
              </a>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
