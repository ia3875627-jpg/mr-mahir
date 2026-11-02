import React, { useState, useEffect } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CategorySection } from './components/CategorySection';
import { PromoBanner } from './components/PromoBanner';
import { ProductGrid } from './components/ProductGrid';
import { IngredientsSection } from './components/IngredientsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PreFooterStrip } from './components/PreFooterStrip';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { ProductModal } from './components/ProductModal';
import { SearchModal } from './components/SearchModal';
import { AboutModal } from './components/AboutModal';
import { ContactModal } from './components/ContactModal';
import { Product, CartItem } from './types';
import { PRODUCTS } from './data/products';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('mr_mahir_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [recentlyAddedId, setRecentlyAddedId] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('mr_mahir_cart', JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  const handleAddToCart = (product: Product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });

    setRecentlyAddedId(product.id);
    setTimeout(() => {
      setRecentlyAddedId(null);
    }, 1800);

    // Open cart drawer so user gets immediate visual confirmation
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleProceedCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleOrderSuccess = () => {
    setCart([]);
  };

  const handleShopScroll = () => {
    const el = document.getElementById('products');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleQuickViewTrio = () => {
    const trio = PRODUCTS.find((p) => p.id === 'complete-glow-bundle') || PRODUCTS[3];
    setSelectedProduct(trio);
  };

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#111C15] font-sans selection:bg-[#D4AF37] selection:text-[#062B17]">
      
      {/* 1. Top Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Header / Navigation Bar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
          setSearchQuery('');
        }}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenAbout={() => setIsAboutOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      <main className="flex-1">
        {/* 3. Hero Section + Overlapping 4-Feature Trust Bar */}
        <HeroSection
          onShopClick={handleShopScroll}
          onQuickViewTrio={handleQuickViewTrio}
        />

        {/* 4. Shop by Category (6 Circular Cards) */}
        <CategorySection
          activeCategory={activeCategory}
          onSelectCategory={(cat) => {
            setActiveCategory(cat);
            setSearchQuery('');
          }}
        />

        {/* 5. Split Promotional Banner (Special 3-Piece Regimen Combo) */}
        <PromoBanner
          onAddToCart={handleAddToCart}
          onOpenQuickView={(prod) => setSelectedProduct(prod)}
        />

        {/* 6. Signature Products Grid (Face Wash, Face Serum, Beauty Cream, Trio Bundle) */}
        <ProductGrid
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          searchQuery={searchQuery}
          onAddToCart={handleAddToCart}
          onQuickView={(prod) => setSelectedProduct(prod)}
          recentlyAddedId={recentlyAddedId}
        />

        {/* 7. Botanical Ingredients Transparency Section */}
        <IngredientsSection />

        {/* 8. Customer Reviews & Social Proof */}
        <TestimonialsSection />

        {/* 9. Pre-Footer Service Strip */}
        <PreFooterStrip />
      </main>

      {/* 10. Luxury Footer */}
      <Footer
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
          handleShopScroll();
        }}
        onOpenAbout={() => setIsAboutOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* 11. Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* 12. Shopping Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedCheckout={handleProceedCheckout}
      />

      {/* 13. Cash on Delivery Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cart}
        onOrderSuccess={handleOrderSuccess}
      />

      {/* 14. Product Quick View / Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* 15. Instant Product Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(prod) => setSelectedProduct(prod)}
        onSearchSubmit={(q) => {
          setSearchQuery(q);
          setActiveCategory('all');
        }}
      />

      {/* 16. About Us Modal */}
      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
        onShopClick={handleShopScroll}
      />

      {/* 17. Contact Us Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

    </div>
  );
}
