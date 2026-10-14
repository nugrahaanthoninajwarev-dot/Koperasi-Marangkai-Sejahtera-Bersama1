import React, { useState } from 'react';
import { PageId } from '../types';
import { siteImages } from '../assets/images';
import { ShoppingBag, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  cartCount: number;
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  cartCount,
  onOpenCart,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'HOME' },
    { id: 'the-journey', label: 'THE JOURNEY' },
    { id: 'why-our-excelsa-special', label: 'WHY SPECIAL' },
    { id: 'portfolio', label: 'PORTFOLIO' },
    { id: 'company-profile', label: 'COMPANY PROFILE' },
    { id: 'store', label: 'STORE' },
    { id: 'contact-us', label: 'CONTACT US' },
  ];

  const handleNavClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8E0D2] text-[#2C352F] transition-all shadow-xs">
      {/* Top Banner Notice */}
      <div className="bg-[#EFE8DD] text-[#4A5D50] text-xs py-1.5 px-4 text-center font-barlow tracking-wider flex items-center justify-center gap-2 border-b border-[#E2D8C8]">
        <span className="inline-block w-2 h-2 rounded-full bg-[#82C79B] animate-pulse"></span>
        <span className="font-semibold">MERATUS EXCELSA COFFEE PRODUCER COOPERATIVE • TAPIN REGENCY, SOUTH KALIMANTAN</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Cooperative Brand */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3.5 group text-left cursor-pointer focus:outline-none"
          >
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#D4A36E] shadow-sm bg-white shrink-0 group-hover:scale-105 transition-transform duration-300">
              <img
                src={siteImages.logo}
                alt="Logo Koperasi Marangkai Sejahtera Bersama"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bebas text-xl sm:text-2xl tracking-wider text-[#263129] group-hover:text-[#B3743B] transition-colors leading-none">
                KOPERASI MARANGKAI SEJAHTERA BERSAMA
              </span>
              <span className="font-barlow text-[11px] tracking-widest text-[#728276] uppercase mt-1">
                Authentic Excelsa Coffee of Meratus
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative font-barlow text-xs font-bold tracking-wider transition-colors py-2 cursor-pointer ${
                    isActive
                      ? 'text-[#2D4438]'
                      : 'text-[#5C6E62] hover:text-[#2D4438]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#D4A36E] rounded-full transition-all"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Actions: Cart & Mobile Toggle */}
          <div className="flex items-center gap-3.5">
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full bg-[#EBF2EC] hover:bg-[#DFECE1] text-[#2D4438] transition-colors border border-[#D6E2D8] cursor-pointer flex items-center justify-center group"
              title="Shopping Cart"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform text-[#2D4438]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#D4A36E] text-white font-bold text-xs rounded-full w-5 h-5 flex items-center justify-center shadow-xs">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => handleNavClick('store')}
              className="hidden md:inline-flex items-center gap-2 bg-[#2D4438] hover:bg-[#3D5B4A] text-white font-barlow font-bold text-xs tracking-wider uppercase px-4 py-2.5 rounded-md transition-all shadow-sm hover:shadow cursor-pointer"
            >
              <span>SHOP COFFEE</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-md text-[#2C352F] hover:bg-[#F0EAE0] transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#FAF7F2] border-b border-[#E8E0D2] px-4 pt-3 pb-6 animate-fadeIn shadow-lg">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left font-barlow text-sm font-semibold py-2.5 px-3 rounded-lg transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#EBF2EC] text-[#2D4438] font-bold'
                      : 'text-[#5C6E62] hover:bg-[#F5EFE5] hover:text-[#2D4438]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <div className="pt-3 border-t border-[#E8E0D2] flex flex-col gap-2">
              <button
                onClick={() => handleNavClick('store')}
                className="w-full text-center bg-[#2D4438] hover:bg-[#3D5B4A] text-white font-barlow font-bold text-xs tracking-wider uppercase py-3 rounded-md transition-all shadow-sm cursor-pointer"
              >
                VISIT COFFEE STORE
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
