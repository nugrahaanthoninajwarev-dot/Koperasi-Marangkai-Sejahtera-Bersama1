import React from 'react';
import { PageId, Product } from '../types';
import { productsData } from '../data/products';
import { siteImages } from '../assets/images';
import { ProductCard } from '../components/ProductCard';
import { ArrowRight, Award } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectProduct,
  onAddToCart,
}) => {
  return (
    <div className="min-h-screen bg-[#F7F5EE]">
      {/* ===================== HERO SECTION ===================== */}
      {/* Recreates Strikingly section 0: text-one-text with Meratus hero image */}
      <section className="relative min-h-[85vh] flex items-center justify-center text-center overflow-hidden">
        {/* Background Image with Semi-Pastel Atmospheric Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={siteImages.hero}
            alt="Meratus Mountains South Kalimantan"
            className="w-full h-full object-cover scale-105 animate-pulse duration-[10000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#243A2E]/75 via-[#2C4437]/55 to-[#24382D]/90" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-white">
          {/* Cooperative Crest Emblem */}
          <button
            onClick={() => onNavigate('company-profile')}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 mb-6 text-xs sm:text-sm font-barlow tracking-widest text-[#F7F2E7] uppercase cursor-pointer transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-[#82C79B]"></span>
            <span>KOPERASI MARANGKAI SEJAHTERA BERSAMA • VIEW PROFILE</span>
          </button>

          {/* Main Hero Headline from Strikingly */}
          <h1 className="font-caladea text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#FAF6ED] leading-tight drop-shadow-md">
            A Cup of Coffee, A Tale From Meratus
          </h1>

          {/* Subtitle from Strikingly */}
          <p className="mt-6 font-barlow text-lg sm:text-2xl text-[#D5E5D9] font-light max-w-2xl mx-auto drop-shadow leading-relaxed">
            How does our community protect its gift
          </p>

          {/* Three Primary Action Buttons from Strikingly */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6 font-barlow">
            <button
              onClick={() => onNavigate('the-journey')}
              className="px-7 py-3.5 bg-transparent hover:bg-white/15 text-[#FAF6ED] border-2 border-white/80 rounded-md font-semibold text-sm uppercase tracking-wider transition-all cursor-pointer backdrop-blur-sm"
            >
              ABOUT US
            </button>
            <button
              onClick={() => onNavigate('store')}
              className="px-8 py-3.5 bg-[#E0B47F] hover:bg-[#D4A36E] text-[#24372D] rounded-md font-bold text-sm uppercase tracking-wider transition-all shadow-md hover:shadow-lg cursor-pointer"
            >
              STORE
            </button>
            <button
              onClick={() => onNavigate('contact-us')}
              className="px-7 py-3.5 bg-transparent hover:bg-white/15 text-[#FAF6ED] border-2 border-white/80 rounded-md font-semibold text-sm uppercase tracking-wider transition-all cursor-pointer backdrop-blur-sm"
            >
              CONTACT US
            </button>
          </div>

          {/* Quality Stats Counter */}
          <div className="mt-14 pt-8 border-t border-white/20 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-2">
              <span className="block font-bebas text-3xl sm:text-4xl text-[#E0B47F]">83.75</span>
              <span className="text-[11px] text-[#B8D3C1] uppercase font-barlow tracking-wider">Top SCA Cupping Score</span>
            </div>
            <div className="p-2">
              <span className="block font-bebas text-3xl sm:text-4xl text-[#82C79B]">60% - 90%</span>
              <span className="text-[11px] text-[#B8D3C1] uppercase font-barlow tracking-wider">Agroforestry Shade Density</span>
            </div>
            <div className="p-2">
              <span className="block font-bebas text-3xl sm:text-4xl text-[#E0B47F]">2 TONS</span>
              <span className="text-[11px] text-[#B8D3C1] uppercase font-barlow tracking-wider">Seasonal Processing Capacity</span>
            </div>
            <div className="p-2">
              <span className="block font-bebas text-3xl sm:text-4xl text-[#82C79B]">12 ROASTERS</span>
              <span className="text-[11px] text-[#B8D3C1] uppercase font-barlow tracking-wider">Exclusive Domestic Network</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== 3-COLUMN FEATURE GRID ===================== */}
      {/* Recreates Strikingly section 1: Grid (ABOUT US / store / CONTACT US) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-[#4D705C] font-bold font-barlow">
            TAPIN COFFEE PRODUCER COOPERATIVE
          </span>
          <h2 className="font-bebas text-3xl sm:text-4xl tracking-wider text-[#2D4438] mt-1">
            EXPLORE MARANGKAI COOPERATIVE
          </h2>
          <div className="w-16 h-1 bg-[#E0B47F] mx-auto mt-2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: ABOUT US */}
          <div
            onClick={() => onNavigate('the-journey')}
            className="group relative h-96 rounded-2xl overflow-hidden shadow-md border border-[#DCE5DE] cursor-pointer transform hover:-translate-y-1.5 transition-all duration-300"
          >
            <img
              src={siteImages.harvestFarmers}
              alt="About Us Smallholder Coffee Farmers in Tapin"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
              <span className="text-xs font-barlow tracking-widest text-[#E0B47F] uppercase font-semibold">
                History & Movement
              </span>
              <h3 className="font-bebas text-3xl sm:text-4xl tracking-wider text-[#F7F2E7] group-hover:text-[#F3CE9F] transition-colors">
                <u>ABOUT US</u>
              </h3>
              <p className="text-xs font-barlow text-gray-200 mt-2 line-clamp-2">
                Reviving the botanical heritage of Meratus Excelsa from 19th-century roots to modern agroforestry renewal.
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs font-bold font-barlow text-[#82C79B] group-hover:translate-x-1 transition-transform">
                <span>READ THE STORY</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Card 2: STORE */}
          <div
            onClick={() => onNavigate('store')}
            className="group relative h-96 rounded-2xl overflow-hidden shadow-md border border-[#DCE5DE] cursor-pointer transform hover:-translate-y-1.5 transition-all duration-300"
          >
            <img
              src={siteImages.storeHero}
              alt="Store Meratus Excelsa Coffee Beans"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
              <span className="text-xs font-barlow tracking-widest text-[#E0B47F] uppercase font-semibold">
                Official Catalog
              </span>
              <h3 className="font-bebas text-3xl sm:text-4xl tracking-wider text-[#F7F2E7] group-hover:text-[#F3CE9F] transition-colors">
                <u>STORE</u>
              </h3>
              <p className="text-xs font-barlow text-gray-200 mt-2 line-clamp-2">
                Single-origin Green Beans and fresh Roasted Beans in Natural, Honey, and Anaerobic processes.
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs font-bold font-barlow text-[#82C79B] group-hover:translate-x-1 transition-transform">
                <span>VISIT STORE</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Card 3: CONTACT US */}
          <div
            onClick={() => onNavigate('contact-us')}
            className="group relative h-96 rounded-2xl overflow-hidden shadow-md border border-[#DCE5DE] cursor-pointer transform hover:-translate-y-1.5 transition-all duration-300"
          >
            <img
              src={siteImages.dryingPatio}
              alt="Contact Us Burakai Village Hatungun"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
              <span className="text-xs font-barlow tracking-widest text-[#E0B47F] uppercase font-semibold">
                Reach Officers
              </span>
              <h3 className="font-bebas text-3xl sm:text-4xl tracking-wider text-[#F7F2E7] group-hover:text-[#F3CE9F] transition-colors">
                <u>CONTACT US</u>
              </h3>
              <p className="text-xs font-barlow text-gray-200 mt-2 line-clamp-2">
                Burakai Village, Hatungun District. Commercial green bean contracts, sample requests, and roaster direct trade.
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs font-bold font-barlow text-[#82C79B] group-hover:translate-x-1 transition-transform">
                <span>CONTACT US</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PRODUCT SHOWCASE ===================== */}
      {/* Recreates Strikingly section 2: PRODUCT SHOWCASE */}
      <section className="py-20 bg-[#EBF2EC] border-y border-[#D6E2D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest text-[#4D705C] font-bold font-barlow">
              OFFICIAL HARVEST SELECTION
            </span>
            <h2 className="font-bebas text-4xl sm:text-5xl tracking-wider text-[#2D4438] mt-1">
              PRODUCT SHOWCASE
            </h2>
            <h4 className="font-caladea text-xl text-[#466954] italic mt-2">
              Check out all our products in store!
            </h4>
            <p className="font-barlow text-sm text-gray-600 mt-2">
              Freshly harvested and hygienically processed by local smallholder families in Burakai Village, Hatungun District, Tapin Regency.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {productsData.map((prod) => (
              <ProductCard
                key={prod.id}
                product={prod}
                onSelect={onSelectProduct}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>

          {/* Recreates Strikingly section 3: GO TO STORE Button */}
          <div className="mt-14 text-center">
            <button
              onClick={() => onNavigate('store')}
              className="inline-flex items-center gap-3 bg-[#2D4438] hover:bg-[#3D5B4A] text-white font-barlow font-bold text-sm uppercase tracking-wider px-10 py-4 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <span>GO TO STORE</span>
              <ArrowRight className="w-4 h-4 text-[#E0B47F]" />
            </button>
          </div>
        </div>
      </section>

      {/* ===================== STORY HIGHLIGHT & EXPORT QUOTE ===================== */}
      <section className="py-24 bg-[#F7F5EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#2D4438] text-white rounded-3xl p-8 sm:p-14 overflow-hidden relative shadow-xl border border-[#3E5C4B]">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#3F614E] rounded-full blur-3xl opacity-35 pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#395646] text-[#82C79B] text-xs font-barlow font-semibold uppercase tracking-wider border border-[#4D705C]">
                  <Award className="w-3.5 h-3.5 text-[#E0B47F]" />
                  <span>Smallholder Coffee Entering Global Specialty Markets</span>
                </div>

                <h3 className="font-caladea text-3xl sm:text-4xl text-[#F7F2E7] leading-tight">
                  "Entering the Japanese Market: From Meratus Slopes to the World"
                </h3>

                <p className="font-barlow text-[#D3E5D7] text-base leading-relaxed">
                  Koperasi Marangkai Sejahtera Bersama has signed a historic Memorandum of Understanding (MoU) for direct export to Japan. Driven by the dedication of farming families in Hatungun, the once-overlooked Excelsa variety now stands proudly on the international stage with a certified SCA cupping score of <strong>83.25</strong>.
                </p>

                <div className="pt-2 flex flex-wrap gap-3">
                  <button
                    onClick={() => onNavigate('portfolio')}
                    className="px-6 py-3 bg-[#E0B47F] hover:bg-[#D4A36E] text-[#24372D] font-barlow font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer shadow"
                  >
                    VIEW PORTFOLIO & MOU
                  </button>
                  <button
                    onClick={() => onNavigate('company-profile')}
                    className="px-6 py-3 bg-[#82C79B] hover:bg-[#6EB888] text-[#1E3326] font-barlow font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer shadow"
                  >
                    COOPERATIVE PROFILE
                  </button>
                  <button
                    onClick={() => onNavigate('why-our-excelsa-special')}
                    className="px-6 py-3 bg-[#3B5748] hover:bg-[#496E5A] text-white font-barlow font-medium text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer border border-[#4E735D]"
                  >
                    WHY SPECIAL?
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border-2 border-[#436452] shadow-lg">
                  <img
                    src={siteImages.cupping}
                    alt="Cupping Excelsa 83.25"
                    className="w-full h-72 sm:h-80 object-cover"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 to-transparent p-4 text-center">
                    <span className="font-bebas text-2xl text-[#E0B47F] tracking-wider block">
                      SCORE 83.25 • SPECIALTY EVALUATION
                    </span>
                    <span className="text-xs text-gray-200 font-barlow">
                      Sensory: Black Tea, Hazelnut, Spicy, Brown Sugar, Dried Plum & Apple
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
