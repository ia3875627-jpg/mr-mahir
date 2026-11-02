import React, { useState } from 'react';
import { X, Star, ShoppingBag, MessageCircle, CheckCircle, ShieldCheck, Sparkles, Plus, Minus } from 'lucide-react';
import { Product } from '../types';
import { generateWhatsAppOrderUrl } from '../data/products';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const isSerum = product.id === 'face-serum-15ml';
  const isBundle = product.id === 'complete-glow-bundle';
  const whatsappUrl = generateWhatsAppOrderUrl(product.name, product.priceDisplay);

  const handleAdd = () => {
    onAddToCart(product, quantity);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border-2 border-[#D4AF37]/40 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Modal"
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-gray-700 hover:text-black shadow-md flex items-center justify-center transition-colors border border-gray-200"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          
          {/* Left Column: Product Image (5 cols) */}
          <div className="md:col-span-5 bg-[#FAF8F5] p-6 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-[#E5DEC9] relative">
            <div className="w-full aspect-4/5 rounded-xl overflow-hidden bg-white p-4 shadow-sm border border-[#E6D7A8] flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Quality Seals */}
            <div className="mt-4 flex items-center gap-2 text-[11px] font-semibold text-[#0B4627]">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>100% Original MR MAHIR Guaranteed</span>
            </div>
          </div>

          {/* Right Column: Details & Ordering (7 cols) */}
          <div className="md:col-span-7 p-6 sm:p-8 space-y-5">
            
            {/* Header info */}
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#B8860B]">
                  {product.category}
                </span>
                <span className="text-xs font-semibold text-[#0B4627] bg-[#0B4627]/10 px-2.5 py-0.5 rounded">
                  {product.volume}
                </span>
              </div>

              <h2 className="font-['Cinzel'] text-xl sm:text-2xl font-bold text-[#062B17] mt-1">
                {product.name}
              </h2>

              <p className="text-xs text-[#526358] mt-1 font-medium">
                {product.tagline}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-1.5 mt-2 text-xs">
                <div className="flex text-[#D4AF37]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                <span className="font-bold text-[#111C15]">{product.rating.toFixed(1)}</span>
                <span className="text-[#526358]">· {product.reviewsCount} Customer Reviews</span>
              </div>
            </div>

            {/* Price Banner */}
            <div className="p-3.5 rounded-lg bg-[#FAF8F5] border border-[#E5DEC9] flex items-baseline justify-between">
              <div>
                <span className="text-xs text-gray-500 block">Current Price:</span>
                <span className="text-2xl font-bold text-[#062B17] font-['Cinzel']">
                  {product.price > 0 && !isBundle
                    ? `Rs. ${(product.price * quantity).toLocaleString()} PKR`
                    : product.priceDisplay}
                </span>
              </div>
              <span className="text-xs font-bold text-[#0B4627] bg-white px-2.5 py-1 rounded border border-[#0B4627]/30">
                Cash on Delivery Available
              </span>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-[#526358] leading-relaxed">
              {product.description}
            </p>

            {/* Key Benefits */}
            <div className="space-y-1.5">
              <h4 className="text-xs font-bold tracking-wider uppercase text-[#062B17] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                Key Benefits
              </h4>
              <ul className="space-y-1 text-xs text-[#111C15]">
                {product.benefits.slice(0, 3).map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#0B4627] shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Ingredients */}
            <div className="space-y-1.5 pt-1">
              <h4 className="text-xs font-bold tracking-wider uppercase text-[#062B17]">
                Botanical Extracts
              </h4>
              <div className="grid grid-cols-1 gap-1.5 text-[11px]">
                {product.keyIngredients.map((item, i) => (
                  <div key={i} className="bg-gray-50 p-2 rounded border border-gray-100">
                    <strong className="text-[#0B4627] font-semibold">{item.name}: </strong>
                    <span className="text-[#526358]">{item.description}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quantity Selector & Action Buttons */}
            <div className="pt-2 space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-[#111C15] uppercase tracking-wider">Quantity:</span>
                <div className="inline-flex items-center border border-[#E5DEC9] rounded-md bg-white">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    aria-label="Decrease quantity"
                    className="p-1.5 text-gray-600 hover:text-black hover:bg-gray-100 transition-colors"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-8 text-center text-xs font-bold text-[#111C15] tabular-nums">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    aria-label="Increase quantity"
                    className="p-1.5 text-gray-600 hover:text-black hover:bg-gray-100 transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={handleAdd}
                  className="w-full py-3 px-4 rounded-lg gold-gradient-bg text-[#062B17] font-bold text-xs uppercase tracking-wider hover:opacity-95 shadow-md flex items-center justify-center gap-2 cursor-pointer border border-[#D4AF37]"
                >
                  <ShoppingBag className="w-4 h-4 text-[#062B17]" />
                  <span>Add To Cart</span>
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-lg bg-[#0B4627] hover:bg-[#062B17] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2 border border-[#D4AF37]/50"
                >
                  <MessageCircle className="w-4 h-4 text-[#D4AF37]" />
                  <span>{isSerum ? 'Inquire on WhatsApp' : isBundle ? 'Order Bundle on WhatsApp' : 'WhatsApp Order'}</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
