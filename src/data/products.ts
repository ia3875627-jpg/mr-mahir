import { Product } from '../types';

export const WHATSAPP_PRIMARY = '923142299397';
export const WHATSAPP_SECONDARY = '923409899984';
export const DISPLAY_PHONE_1 = '0314-2299397';
export const DISPLAY_PHONE_2 = '0340-9899984';
export const OFFICIAL_EMAIL = 'zulfiqar.ahmad413@gmail.com';
export const STORE_ADDRESS = 'Gohati, Swabi, KPK, Pakistan';
export const STANDARD_DELIVERY_FEE = 199;
export const INSTAGRAM_URL = 'https://www.instagram.com/mrmahirbeauty?srtk=Z3ByazJ5eTE1Mmxo';
export const FACEBOOK_URL = 'https://www.facebook.com/share/1EzXPNdxUN/';

export const PRODUCTS: Product[] = [
  {
    id: 'face-wash-130ml',
    name: 'MR MAHIR Face Wash',
    subtitle: 'Deep Cleaning & Refreshing',
    tagline: 'Deep Cleaning & Refreshing with Natural Extracts (All Skin Types)',
    price: 450,
    priceDisplay: 'Rs. 450 PKR',
    originalPrice: 550,
    volume: '130 ml e',
    rating: 5.0,
    reviewsCount: 210,
    image: '/assets/aistudio/MR_MAHIR_Natural_Beauty_Face_Wash_4deb8be6.png',
    category: 'Face Wash',
    badge: 'Rs. 450 PKR',
    description:
      'Purify your skin without stripping essential natural oils. MR MAHIR Face Wash is enriched with pure natural Aloe Vera extracts to deeply remove impurities, combat environmental dirt, unclog pores, and restore a crystal-clean, invigorated glow.',
    benefits: [
      'Deep pore cleansing that removes dirt, grease, and stubborn impurities',
      'Infused with 100% natural aloe vera extracts to soothe and calm skin',
      'Maintains ideal skin pH balance without any dry tightness',
      'Suitable for all skin types, including sensitive and acne-prone skin'
    ],
    keyIngredients: [
      { name: 'Natural Aloe Vera Extract', description: 'Deep hydration and anti-inflammatory cooling relief' },
      { name: 'Vitamin E Beads', description: 'Protects skin lipid barrier against daily environmental stressors' },
      { name: 'Botanical Cleansing Agents', description: 'Ultra-gentle sulfate-free lather that purifies pores' }
    ],
    howToUse: [
      'Wet face with lukewarm water.',
      'Squeeze a coin-sized amount onto clean palms and work into a rich lather.',
      'Gently massage across forehead, cheeks, nose, and chin in circular motions for 60 seconds.',
      'Rinse thoroughly and pat dry with a soft clean towel. Use morning and night.'
    ],
    stock: true
  },
  {
    id: 'beauty-cream-28g',
    name: 'MR MAHIR Beauty Cream',
    subtitle: 'For Healthy & Glowing Skin',
    tagline: 'For Healthy & Glowing Skin — Moisturizes, Nourishes & Brightens',
    price: 450,
    priceDisplay: 'Rs. 450 PKR',
    originalPrice: 550,
    volume: '28 g e',
    rating: 5.0,
    reviewsCount: 320,
    image: '/assets/aistudio/MR_MAHIR_Natural_Beauty_Cream_d627a62b.png',
    category: 'Beauty Cream',
    badge: 'Rs. 450 PKR',
    description:
      'Crafted with exquisite botanical butters and nourishing herbal extracts, MR MAHIR Beauty Cream provides rich yet weightless hydration. Formulated to moisturize, nourish, and visibly brighten your skin, it melts seamlessly into the skin for a velvety, porcelain glow all day long.',
    benefits: [
      'Intensively moisturizes and prevents trans-epidermal moisture loss',
      'Nourishes dry, tired, and dull skin patches with essential lipids',
      'Promotes an even, bright, and radiant skin tone without harsh chemicals',
      'Silky velvet finish that works beautifully both day and night'
    ],
    keyIngredients: [
      { name: 'Botanical Nourishing Butters', description: 'Restores skin suppleness and velvety texture' },
      { name: 'Pearl Glow Botanical Complex', description: 'Imparts a healthy, illuminated porcelain finish' },
      { name: 'Aloe & Vitamin Complex', description: 'Soothes redness while locking in round-the-clock hydration' }
    ],
    howToUse: [
      'Take a small pearl-sized amount with clean fingertips.',
      'Dot across forehead, cheeks, nose, and chin.',
      'Smooth outward in gentle upward strokes until completely absorbed.',
      'Apply in the morning as your glow-ready base, and at night before bed.'
    ],
    stock: true
  },
  {
    id: 'face-serum-15ml',
    name: 'MR MAHIR Face Serum',
    subtitle: 'Brightening & Rejuvenating',
    tagline: 'Brightening & Rejuvenating with Hyaluronic Acid, Vitamin C & E',
    price: 700,
    priceDisplay: 'Rs. 700 PKR',
    originalPrice: 850,
    isOpenRetail: false,
    volume: '15 ml e',
    rating: 5.0,
    reviewsCount: 185,
    image: '/assets/aistudio/Luxurious_Emerald_Face_Serum_Advertisement_50043b96.png',
    category: 'Face Serum',
    badge: 'Rs. 700 PKR',
    description:
      'An opulent elixir of vitality. MR MAHIR Brightening & Rejuvenating Face Serum combines multi-molecular Hyaluronic Acid with stable Vitamin C and Vitamin E. Formulated to fade dark spots, restore elasticity, and provide an all-day porcelain glow.',
    benefits: [
      'Deep cellular hydration through 2% multi-weight Hyaluronic Acid',
      'Visibly reduces stubborn dark spots, sun damage, and hyperpigmentation',
      'Boosts natural collagen synthesis for firmer, younger-looking skin',
      'Fast-absorbing, non-greasy formula that layers effortlessly under cream'
    ],
    keyIngredients: [
      { name: 'Hyaluronic Acid Complex', description: 'Binds up to 1000x its weight in water for plumping elasticity' },
      { name: 'Vitamin C & E Synergy', description: 'Antioxidant shield that brightens tone and diminishes blemishes' },
      { name: 'Jasmine Floral Elixir', description: 'Royal botanical extract providing calm, comfort, and delicate aroma' }
    ],
    howToUse: [
      'Cleanse face thoroughly with MR MAHIR Face Wash.',
      'Apply 3-4 drops directly to cleansed, slightly damp face and neck using the golden dropper.',
      'Lightly press and pat into skin using upward motions until fully absorbed.',
      'Follow immediately with MR MAHIR Beauty Cream to seal in active ingredients.'
    ],
    stock: true
  },
  {
    id: 'complete-glow-bundle',
    name: 'MR MAHIR 3-in-1 Complete Glow Bundle',
    subtitle: 'The Royal Skincare Regimen',
    tagline: 'Face Wash (130ml) + Beauty Cream (28g) + Face Serum (15ml) Full Kit',
    price: 1500,
    priceDisplay: 'Rs. 1,500 PKR',
    originalPrice: 1600,
    volume: 'Complete 3-Piece Kit',
    rating: 5.0,
    reviewsCount: 415,
    image: '/assets/aistudio/Luxurious_Emerald_Face_Serum_Advertisement_50043b96.png',
    secondaryImage: '/assets/aistudio/MR_MAHIR_Natural_Beauty_Face_Wash_4deb8be6.png',
    category: 'Complete Glow Kit',
    badge: 'Save Rs. 100 Combo',
    description:
      'Experience the pinnacle of royal botanical skincare. The MR MAHIR 3-in-1 Complete Glow Bundle brings together the purifying Face Wash (130ml - Rs. 450), the nourishing Beauty Cream (28g - Rs. 450), and the radiant Face Serum (15ml - Rs. 700). Special combo deal: Rs. 1,500 PKR (Save Rs. 100).',
    benefits: [
      'Comprehensive 3-step daily routine: Cleanse, Nourish & Brighten',
      'Special discounted combo pricing: Rs. 1,500 PKR (Save Rs. 100)',
      'Synergistic formulation maximizes glow and dark spot reduction speed',
      'Includes authentic luxury packaging and nationwide Cash on Delivery'
    ],
    keyIngredients: [
      { name: 'Full 130ml Face Wash', description: 'Deep cleansing aloe extracts (Rs. 450 PKR)' },
      { name: 'Full 28g Beauty Cream', description: 'Velvet brightening & moisture seal (Rs. 450 PKR)' },
      { name: 'Full 15ml Face Serum', description: 'Concentrated Hyaluronic & Vitamin C & E (Rs. 700 PKR)' }
    ],
    howToUse: [
      'Step 1 (Cleanse): Wash face with MR MAHIR Face Wash to remove impurities.',
      'Step 2 (Treat): Apply 3-4 drops of MR MAHIR Face Serum and gently pat into skin.',
      'Step 3 (Nourish): Lock in maximum radiance with MR MAHIR Beauty Cream.'
    ],
    stock: true
  }
];

export const CATEGORIES = [
  { id: 'all', name: 'ALL PRODUCTS', count: 4 },
  { id: 'face-wash', name: 'FACE WASH', targetCategory: 'Face Wash', image: '/assets/aistudio/MR_MAHIR_Natural_Beauty_Face_Wash_4deb8be6.png' },
  { id: 'beauty-cream', name: 'BEAUTY CREAM', targetCategory: 'Beauty Cream', image: '/assets/aistudio/MR_MAHIR_Natural_Beauty_Cream_d627a62b.png' },
  { id: 'face-serum', name: 'FACE SERUM', targetCategory: 'Face Serum', image: '/assets/aistudio/Luxurious_Emerald_Face_Serum_Advertisement_50043b96.png' },
  { id: 'complete-glow-kit', name: 'COMPLETE GLOW KIT', targetCategory: 'Complete Glow Kit', image: '/assets/aistudio/mrr_mahir_2e5a7708.jpg' },
  { id: 'hydrating-care', name: 'HYDRATING CARE', targetCategory: 'Face Serum', image: '/assets/aistudio/Luxurious_Emerald_Face_Serum_Advertisement_50043b96.png' },
  { id: 'gift-bundles', name: 'GIFT BUNDLES', targetCategory: 'Complete Glow Kit', image: '/assets/aistudio/mrr_mahir_2e5a7708.jpg' }
];

export const BOTANICAL_FEATURES = [
  {
    title: 'Natural Aloe Vera',
    subtitle: '100% Pure Extracts',
    desc: 'Sourced from organic aloe barbadensis to soothe, balance moisture, and refresh delicate facial tissues.',
    icon: 'Leaf'
  },
  {
    title: 'Hyaluronic Acid 2%',
    subtitle: 'Multi-Weight Hydration',
    desc: 'Penetrates surface and deep epidermal layers to plump, soften fine lines, and boost skin elasticity.',
    icon: 'Droplets'
  },
  {
    title: 'Vitamin C & E Synergy',
    subtitle: 'Antioxidant Powerhouse',
    desc: 'Clinically proven pairing that neutralizes free radicals, fades dark pigmentation, and restores radiant glow.',
    icon: 'Sun'
  },
  {
    title: 'Jasmine Floral Elixir',
    subtitle: 'Royal Botanical Essence',
    desc: 'Traditional royal botanical extract that relaxes facial tension, minimizes pores, and adds natural freshness.',
    icon: 'Flower2'
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Dr. Ayesha Malik',
    city: 'Lahore, Punjab',
    product: 'MR MAHIR Complete Glow Bundle',
    rating: 5,
    verified: true,
    date: 'Verified Buyer',
    comment:
      'MR MAHIR Complete Glow Bundle has completely transformed my skincare routine! The Face Wash and Beauty Cream are phenomenal at Rs. 450 each. Incredible quality at very honest prices!'
  },
  {
    id: 2,
    name: 'Fatima Zahra Khan',
    city: 'Karachi, Sindh',
    product: 'MR MAHIR Face Serum (15ml)',
    rating: 5,
    verified: true,
    date: 'Verified Buyer',
    comment:
      'I inquired about the Face Serum on WhatsApp and got a quick polite response. My stubborn dark spots started fading within just 2 weeks. Cash on delivery arrived safely.'
  },
  {
    id: 3,
    name: 'Muhammad Daniyal',
    city: 'Swabi, KPK',
    product: 'MR MAHIR Face Wash (130ml)',
    rating: 5,
    verified: true,
    date: 'Verified Buyer',
    comment:
      'Proud to support our local brand from Gohati, Swabi! The Face Wash is easily the best for oily and sensitive skin. Skin feels fresh all day.'
  },
  {
    id: 4,
    name: 'Hina Qureshi',
    city: 'Islamabad, ICT',
    product: 'MR MAHIR Beauty Cream (28g)',
    rating: 5,
    verified: true,
    date: 'Verified Buyer',
    comment:
      'The texture of this beauty cream is pure luxury! At Rs. 450 PKR, it outshines creams that cost thousands. Pure botanical nourishment.'
  }
];

export const PAKISTAN_CITIES = [
  'Swabi (KPK)',
  'Lahore',
  'Karachi',
  'Islamabad',
  'Rawalpindi',
  'Peshawar',
  'Mardan',
  'Faisalabad',
  'Multan',
  'Quetta',
  'Sialkot',
  'Gujranwala',
  'Hyderabad',
  'Abbottabad',
  'Bahawalpur',
  'Sargodha',
  'Sukkur',
  'Mirpur (AJK)',
  'Other City in Pakistan'
];

/**
 * Creates a pre-formatted WhatsApp message for instant ordering
 */
export function generateWhatsAppOrderUrl(productName: string, priceDisplay: string, phone = WHATSAPP_PRIMARY): string {
  const message = `Assalam-o-Alaikum MR MAHIR Natural Beauty! 🌸\n\nI want to inquire / place an order for:\n📦 Product: *${productName}*\n💰 Rate: *${priceDisplay}*\n📍 Location: Pakistan\n\nPlease confirm order booking via Cash on Delivery (COD). Thank you!`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

/**
 * Creates a pre-formatted WhatsApp message for cart orders
 */
export function generateCartWhatsAppUrl(
  items: { name: string; quantity: number; priceDisplay: string; price: number }[],
  totalFixed: number,
  hasOpenRetail: boolean,
  customerDetails?: { name: string; phone: string; city: string; address: string },
  phone = WHATSAPP_PRIMARY
): string {
  let message = `Assalam-o-Alaikum MR MAHIR Natural Beauty! 👑\n\nI want to place an order via Cash on Delivery (COD):\n\n`;
  message += `*ORDER ITEMS:*\n`;
  items.forEach((item, idx) => {
    message += `${idx + 1}. *${item.name}* x ${item.quantity} (${item.priceDisplay})\n`;
  });

  message += `\n*PAYMENT DETAILS:*\n`;
  if (totalFixed > 0 && !hasOpenRetail) {
    message += `💰 Fixed Items Total: *Rs. ${totalFixed.toLocaleString()} PKR*\n`;
  } else if (totalFixed > 0 && hasOpenRetail) {
    message += `💰 Subtotal (Standard Items): *Rs. ${totalFixed.toLocaleString()} PKR* (+ Serum Retail Rate to be confirmed)\n`;
  } else {
    message += `💰 Pricing: Open Retail / Confirmation on WhatsApp\n`;
  }
  message += `🚚 Nationwide Cash on Delivery (COD)\n`;

  if (customerDetails && customerDetails.name) {
    message += `\n*CUSTOMER DETAILS:*\n`;
    message += `👤 Name: ${customerDetails.name}\n`;
    message += `📞 Phone: ${customerDetails.phone}\n`;
    message += `📍 City: ${customerDetails.city}\n`;
    message += `🏠 Address: ${customerDetails.address}\n`;
  }

  message += `\nPlease confirm my order. JazakAllah!`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
