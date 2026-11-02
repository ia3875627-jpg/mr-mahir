export interface Product {
  id: string;
  name: string;
  subtitle: string;
  tagline: string;
  price: number; // 0 if inquiry/open retail
  priceDisplay: string; // e.g. "Rs. 450 PKR", "Ask Price on WhatsApp", "Rs. 900 + Serum Rate"
  originalPrice?: number;
  isOpenRetail?: boolean;
  volume: string;
  rating: number;
  reviewsCount: number;
  image: string;
  secondaryImage?: string;
  category: 'Face Wash' | 'Face Serum' | 'Beauty Cream' | 'Complete Glow Kit' | 'Hydrating Care' | 'Gift Bundles';
  badge?: string;
  description: string;
  benefits: string[];
  keyIngredients: {
    name: string;
    description: string;
  }[];
  howToUse: string[];
  stock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CheckoutDetails {
  fullName: string;
  phone: string;
  alternatePhone?: string;
  city: string;
  address: string;
  notes?: string;
  paymentMethod: 'cod' | 'jazzcash' | 'easypaisa' | 'bank_transfer';
}
