/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId, Product, CartItem } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/CookieBanner';
import { CookieModal } from './components/CookieModal';
import { CartDrawer } from './components/CartDrawer';
import { ProductModal } from './components/ProductModal';
import { HomePage } from './pages/HomePage';
import { CompanyProfilePage } from './pages/CompanyProfilePage';
import { PortfolioPage } from './pages/PortfolioPage';
import { JourneyPage } from './pages/JourneyPage';
import { WhySpecialPage } from './pages/WhySpecialPage';
import { StorePage } from './pages/StorePage';
import { ContactPage } from './pages/ContactPage';
import { Check } from 'lucide-react';

const VALID_PAGES: PageId[] = [
  'home',
  'company-profile',
  'portfolio',
  'the-journey',
  'why-our-excelsa-special',
  'store',
  'contact-us',
];

export default function App() {
  // Page Navigation State
  const [currentPage, setCurrentPage] = useState<PageId>(() => {
    const hash = window.location.hash.replace('#', '') as PageId;
    if (VALID_PAGES.includes(hash)) {
      return hash;
    }
    return 'home';
  });

  // Cart State with LocalStorage Persistence
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('marangkai_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Cookie Notice State
  const [cookiesAccepted, setCookiesAccepted] = useState<boolean>(() => {
    try {
      return localStorage.getItem('marangkai_cookies_accepted') === 'true';
    } catch {
      return false;
    }
  });
  const [isCookieModalOpen, setIsCookieModalOpen] = useState(false);

  // Notification Toast State
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('marangkai_cart', JSON.stringify(cartItems));
    } catch {
      // ignore
    }
  }, [cartItems]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (VALID_PAGES.includes(hash)) {
        setCurrentPage(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  const handleAddToCart = (product: Product, quantity = 1) => {
    setCartItems((prev) => {
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
    showToast(`${quantity}x ${product.name} added to cart`);
  };

  const handleUpdateQuantity = (productId: number, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (productId: number) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleAcceptCookies = () => {
    setCookiesAccepted(true);
    try {
      localStorage.setItem('marangkai_cookies_accepted', 'true');
    } catch {
      // ignore
    }
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="flex flex-col min-h-screen text-[#2D4438] selection:bg-[#82C79B] selection:text-[#1E3025]">
      {/* Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Page Routing */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectProduct={(p) => setSelectedProduct(p)}
            onAddToCart={(p) => handleAddToCart(p, 1)}
          />
        )}
        {currentPage === 'company-profile' && <CompanyProfilePage onNavigate={handleNavigate} />}
        {currentPage === 'portfolio' && <PortfolioPage onNavigate={handleNavigate} />}
        {currentPage === 'the-journey' && <JourneyPage onNavigate={handleNavigate} />}
        {currentPage === 'why-our-excelsa-special' && <WhySpecialPage onNavigate={handleNavigate} />}
        {currentPage === 'store' && (
          <StorePage
            onSelectProduct={(p) => setSelectedProduct(p)}
            onAddToCart={(p) => handleAddToCart(p, 1)}
            onNavigate={handleNavigate}
          />
        )}
        {currentPage === 'contact-us' && <ContactPage />}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenCookies={() => setIsCookieModalOpen(true)}
      />

      {/* Interactive Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Cookie Consent Banner */}
      {!cookiesAccepted && (
        <CookieBanner
          onAccept={handleAcceptCookies}
          onOpenDetails={() => setIsCookieModalOpen(true)}
        />
      )}

      {/* Cookie Policy Modal */}
      <CookieModal
        isOpen={isCookieModalOpen}
        onClose={() => setIsCookieModalOpen(false)}
        onAccept={handleAcceptCookies}
      />

      {/* Notification Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#2D4438] text-white px-5 py-3 rounded-xl shadow-2xl border border-[#3E5C4B] flex items-center gap-3 animate-slideUp text-xs font-barlow font-medium">
          <div className="w-5 h-5 rounded-full bg-[#82C79B] text-[#1E3025] flex items-center justify-center font-bold">
            <Check className="w-3.5 h-3.5" />
          </div>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
