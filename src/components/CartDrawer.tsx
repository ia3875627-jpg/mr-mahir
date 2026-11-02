import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, MessageCircle, ArrowRight, ShieldCheck, Truck } from 'lucide-react';
import { CartItem } from '../types';
import { generateCartWhatsAppUrl, STANDARD_DELIVERY_FEE } from '../data/products';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onProceedCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedCheckout,
}) => {
  if (!isOpen) return null;

  // Calculate fixed subtotal
  const fixedSubtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const hasOpenRetail = items.some((item) => item.product.isOpenRetail);
  const deliveryFee = items.length > 0 ? STANDARD_DELIVERY_FEE : 0;
  const totalFixed = fixedSubtotal + deliveryFee;

  const formattedItemsForWhatsApp = items.map((i) => ({
    name: i.product.name,
    quantity: i.quantity,
    priceDisplay: i.product.priceDisplay,
    price: i.product.price,
  }));

  const cartWhatsAppUrl = generateCartWhatsAppUrl(
    formattedItemsForWhatsApp,
    totalFixed,
    hasOpenRetail
  );

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      
      {/* Backdrop */}
      <div className="flex-1" onClick={onClose} />

      {/* Drawer Panel */}
      <div
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between border-l border-[#E6D7A8] relative z-10 animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-[#E6D7A8] bg-[#FAF8F5] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#0B4627] flex items-center justify-center text-white">
              <ShoppingBag className="w-4 h-4 text-[#D4AF37]" />
            </div>
            <div>
              <h3 className="font-['Cinzel'] text-base font-bold text-[#062B17]">
                Your Shopping Bag
              </h3>
              <span className="text-[11px] text-[#526358] font-medium">
                {items.length} {items.length === 1 ? 'product' : 'products'} selected
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Shopping Bag"
            className="p-1.5 rounded-full text-gray-500 hover:text-black hover:bg-gray-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Clean Nationwide Delivery Announcement Strip (NO Rs. 2,000 threshold) */}
        <div className="px-5 py-3 bg-[#FAF8F5]/80 border-b border-[#E5DEC9] flex items-center gap-2.5 text-xs text-[#062B17]">
          <Truck className="w-4 h-4 text-[#0B4627] shrink-0" />
          <span className="font-medium">
            <strong>Nationwide Cash on Delivery (COD) Available</strong> across Pakistan
          </span>
        </div>

        {/* Itemized List */}
        <div className="p-5 overflow-y-auto flex-1 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#FAF8F5] border border-[#E6D7A8] flex items-center justify-center text-[#B8860B]">
                <ShoppingBag className="w-8 h-8 opacity-60" />
              </div>
              <div>
                <h4 className="font-['Cinzel'] text-base font-bold text-[#062B17]">Your bag is empty</h4>
                <p className="text-xs text-[#526358] mt-1 max-w-xs">
                  Discover our natural botanical formulas with Face Wash & Beauty Cream at Rs. 450 PKR each.
                </p>
              </div>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-lg bg-[#0B4627] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#062B17] transition-colors"
              >
                Shop Products
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.product.id}
                className="flex gap-3.5 p-3 rounded-lg border border-[#E5DEC9] bg-white shadow-xs hover:border-[#D4AF37]/50 transition-colors"
              >
                {/* Thumbnail */}
                <div className="w-16 h-20 rounded-md bg-[#FAF8F5] p-1 border border-gray-100 shrink-0 flex items-center justify-center overflow-hidden">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-['Cinzel'] text-xs font-bold text-[#062B17] line-clamp-1">
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        aria-label={`Remove ${item.product.name}`}
                        className="text-gray-400 hover:text-red-600 transition-colors p-0.5"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <span className="text-[10px] text-[#526358] block">{item.product.volume}</span>
                    <span className="text-[11px] font-bold text-[#0B4627] font-['Cinzel'] mt-0.5 block">
                      {item.product.priceDisplay}
                    </span>
                  </div>

                  {/* Quantity Stepper & Item Total */}
                  <div className="flex items-center justify-between pt-1">
                    <div className="inline-flex items-center border border-[#E5DEC9] rounded bg-white">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                        aria-label="Decrease quantity"
                        className="p-1 text-gray-500 hover:text-black hover:bg-gray-100"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-6 text-center text-xs font-bold text-[#111C15] tabular-nums">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                        aria-label="Increase quantity"
                        className="p-1 text-gray-500 hover:text-black hover:bg-gray-100"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <span className="text-xs font-bold text-[#0B4627] font-['Cinzel'] tabular-nums">
                      {item.product.price > 0
                        ? `Rs. ${(item.product.price * item.quantity).toLocaleString()}`
                        : 'Open Retail'}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Summary & Action CTAs */}
        {items.length > 0 && (
          <div className="p-5 border-t border-[#E6D7A8] bg-[#FAF8F5] space-y-3">
            {/* Calculation rows */}
            <div className="space-y-1.5 text-xs text-[#526358]">
              <div className="flex justify-between">
                <span>Items Subtotal</span>
                <span className="font-semibold text-[#111C15]">
                  {fixedSubtotal > 0 ? `Rs. ${fixedSubtotal.toLocaleString()} PKR` : 'Open Retail'}
                  {hasOpenRetail && fixedSubtotal > 0 && ' (+ Serum Rate)'}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Nationwide Shipping</span>
                <span className="font-semibold tabular-nums text-[#111C15]">Rs. {deliveryFee}</span>
              </div>
              <div className="flex justify-between pt-1.5 border-t border-gray-200 text-sm font-bold text-[#062B17]">
                <span>Payable on Delivery</span>
                <span className="font-['Cinzel'] text-base text-[#0B4627]">
                  {totalFixed > 0 ? `Rs. ${totalFixed.toLocaleString()} PKR` : 'Custom Rate'}
                  {hasOpenRetail && ' (+ Serum)'}
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-2 pt-2">
              <button
                onClick={onProceedCheckout}
                className="w-full py-3.5 px-4 rounded-lg gold-gradient-bg text-[#062B17] font-bold text-xs uppercase tracking-wider hover:opacity-95 shadow-md flex items-center justify-center gap-2 cursor-pointer border border-[#D4AF37]"
              >
                <span>Proceed To Cash On Delivery</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={cartWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-lg bg-[#0B4627] hover:bg-[#062B17] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm flex items-center justify-center gap-2 border border-[#D4AF37]/40"
              >
                <MessageCircle className="w-4 h-4 text-[#D4AF37]" />
                <span>Order Entire Cart on WhatsApp</span>
              </a>
            </div>

            <p className="text-[10px] text-center text-[#526358] pt-1">
              Dispatch from Gohati, Swabi, KPK. Pay Cash on Delivery (COD).
            </p>
          </div>
        )}

      </div>
    </div>
  );
};
