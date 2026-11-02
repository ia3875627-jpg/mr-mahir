import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Truck, MessageCircle, ArrowRight } from 'lucide-react';
import { CartItem, CheckoutDetails } from '../types';
import { PAKISTAN_CITIES, STANDARD_DELIVERY_FEE, generateCartWhatsAppUrl, DISPLAY_PHONE_1 } from '../data/products';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onOrderSuccess: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  onOrderSuccess,
}) => {
  const [formData, setFormData] = useState<CheckoutDetails>({
    fullName: '',
    phone: '',
    alternatePhone: '',
    city: 'Swabi (KPK)',
    address: '',
    notes: '',
    paymentMethod: 'cod',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  if (!isOpen) return null;

  const fixedSubtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const hasOpenRetail = items.some((item) => item.product.isOpenRetail);
  const deliveryFee = items.length > 0 ? STANDARD_DELIVERY_FEE : 0;
  const total = fixedSubtotal + deliveryFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.address.trim()) {
      return;
    }

    const randomNum = Math.floor(10000 + Math.random() * 90000);
    const newOrderNumber = `MM-${randomNum}`;
    setOrderNumber(newOrderNumber);
    setIsSubmitted(true);
    onOrderSuccess();
  };

  const formattedItemsForWhatsApp = items.map((i) => ({
    name: i.product.name,
    quantity: i.quantity,
    priceDisplay: i.product.priceDisplay,
    price: i.product.price,
  }));

  const orderWhatsAppUrl = generateCartWhatsAppUrl(
    formattedItemsForWhatsApp,
    total,
    hasOpenRetail,
    {
      name: formData.fullName,
      phone: formData.phone,
      city: formData.city,
      address: formData.address,
    }
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      
      <div
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border-2 border-[#D4AF37]/50 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-[#E6D7A8] bg-[#FAF8F5] flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold tracking-widest text-[#B8860B] uppercase">
              Nationwide Cash on Delivery
            </span>
            <h3 className="font-['Cinzel'] text-lg font-bold text-[#062B17]">
              {isSubmitted ? 'Order Confirmed!' : 'Cash On Delivery Order'}
            </h3>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Checkout"
            className="p-1.5 rounded-full text-gray-500 hover:text-black hover:bg-gray-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
            
            {/* Quick Order Summary Strip */}
            <div className="bg-[#FAF8F5] p-3 rounded-lg border border-[#E5DEC9] flex items-center justify-between text-xs">
              <span className="text-[#526358]">
                {items.length} {items.length === 1 ? 'item' : 'items'} in order
              </span>
              <div className="text-right">
                <span className="text-gray-500 text-[11px] block">Payable at Doorstep:</span>
                <span className="font-['Cinzel'] font-bold text-sm text-[#0B4627]">
                  {total > 0 ? `Rs. ${total.toLocaleString()} PKR` : 'Open Retail'}
                  {hasOpenRetail && ' (+ Serum Rate)'}
                </span>
              </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-[#111C15] uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Fatima Khan / Zulfiqar Ahmad"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5DEC9] text-xs text-[#111C15] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent bg-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#111C15] uppercase tracking-wider mb-1">
                    WhatsApp / Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="03XX-XXXXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5DEC9] text-xs text-[#111C15] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#111C15] uppercase tracking-wider mb-1">
                    City (Pakistan) *
                  </label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5DEC9] text-xs text-[#111C15] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent bg-white"
                  >
                    {PAKISTAN_CITIES.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#111C15] uppercase tracking-wider mb-1">
                  Complete Delivery Address *
                </label>
                <textarea
                  required
                  rows={2}
                  placeholder="House / Flat No, Street, Mohalla / Sector, Landmark"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5DEC9] text-xs text-[#111C15] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#111C15] uppercase tracking-wider mb-1">
                  Special Notes / Delivery Instructions (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Call before delivery, deliver in afternoon"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5DEC9] text-xs text-[#111C15] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent bg-white"
                />
              </div>

              {/* Payment Method Selector */}
              <div className="pt-2">
                <label className="block text-xs font-bold text-[#111C15] uppercase tracking-wider mb-2">
                  Payment Method
                </label>
                <div className="p-3 rounded-lg border-2 border-[#0B4627] bg-[#FAF8F5] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Truck className="w-5 h-5 text-[#0B4627]" />
                    <div>
                      <span className="text-xs font-bold text-[#062B17] block">
                        Cash on Delivery (COD)
                      </span>
                      <span className="text-[11px] text-[#526358]">
                        Pay cash, JazzCash, or EasyPaisa when courier arrives
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#0B4627] bg-white px-2 py-0.5 rounded border border-[#0B4627]/30">
                    Recommended
                  </span>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center justify-center gap-4 text-[11px] text-[#526358] pt-1">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0B4627]" />
                100% Original Products
              </span>
              <span className="flex items-center gap-1">
                <Truck className="w-3.5 h-3.5 text-[#0B4627]" />
                Nationwide Delivery
              </span>
            </div>

            {/* Submit Button */}
            <div className="pt-3">
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-lg gold-gradient-bg text-[#062B17] font-bold text-xs sm:text-sm uppercase tracking-wider hover:opacity-95 shadow-md flex items-center justify-center gap-2 cursor-pointer border border-[#D4AF37]"
              >
                <span>Confirm Order</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </form>
        ) : (
          /* Confirmation Screen */
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-[#0B4627]/10 border-2 border-[#D4AF37] flex items-center justify-center mx-auto text-[#0B4627]">
              <CheckCircle2 className="w-10 h-10 text-[#0B4627]" />
            </div>

            <div>
              <span className="text-xs font-bold text-[#B8860B] uppercase tracking-widest">
                Thank You For Your Order!
              </span>
              <h3 className="font-['Cinzel'] text-2xl font-bold text-[#062B17] mt-1">
                Order #{orderNumber} Placed
              </h3>
              <p className="text-xs text-[#526358] mt-2 max-w-sm mx-auto leading-relaxed">
                Dear <strong>{formData.fullName}</strong>, your order has been received. Our team will verify and dispatch your package to <strong>{formData.city}</strong> from our warehouse in Gohati, Swabi, KPK.
              </p>
            </div>

            {/* Receipt Summary Card */}
            <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#E6D7A8] text-xs text-left space-y-2">
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-[#526358]">Contact Phone:</span>
                <span className="font-bold text-[#111C15]">{formData.phone}</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-[#526358]">Delivery Address:</span>
                <span className="font-medium text-[#111C15] text-right max-w-xs truncate">{formData.address}, {formData.city}</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-[#062B17] pt-1">
                <span>Total Payable at Doorstep:</span>
                <span className="font-['Cinzel'] text-[#0B4627]">
                  {total > 0 ? `Rs. ${total.toLocaleString()} PKR` : 'Open Retail'}
                  {hasOpenRetail && ' (+ Serum Rate)'}
                </span>
              </div>
            </div>

            {/* Direct WhatsApp Confirmation Trigger */}
            <div className="pt-2 space-y-3">
              <a
                href={orderWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-lg bg-[#0B4627] hover:bg-[#062B17] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2 border border-[#D4AF37]"
              >
                <MessageCircle className="w-4 h-4 text-[#D4AF37]" />
                <span>Send Order Receipt to WhatsApp ({DISPLAY_PHONE_1})</span>
              </a>

              <button
                onClick={onClose}
                className="text-xs font-semibold text-[#526358] hover:text-[#062B17] uppercase tracking-wider py-1"
              >
                Continue Browsing
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
