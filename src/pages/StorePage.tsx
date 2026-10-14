import React, { useState } from 'react';
import { Product, PageId } from '../types';
import { productsData } from '../data/products';
import { siteImages } from '../assets/images';
import { ProductCard } from '../components/ProductCard';
import { Filter, ShoppingBag, Package, MessageSquare, Sparkles, Award } from 'lucide-react';

interface StorePageProps {
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onNavigate: (page: PageId) => void;
}

export const StorePage: React.FC<StorePageProps> = ({
  onSelectProduct,
  onAddToCart,
  onNavigate,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'Green Beans' | 'Roast Beans' | 'Drip Bag'>('all');
  const [selectedProcess, setSelectedProcess] = useState<'all' | 'Natural Process' | 'Honey Process' | 'Anaerobic Process' | 'Specialty Blend'>('all');

  const filteredProducts = productsData.filter((p) => {
    const matchCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchProcess = selectedProcess === 'all' || p.process === selectedProcess;
    return matchCategory && matchProcess;
  });

  const greenBeansCount = productsData.filter((p) => p.category === 'Green Beans').length;
  const roastBeansCount = productsData.filter((p) => p.category === 'Roast Beans').length;
  const dripBagCount = productsData.filter((p) => p.category === 'Drip Bag').length;

  return (
    <div className="min-h-screen bg-[#F7F5EE]">
      {/* ===================== STORE HERO BANNER ===================== */}
      <section className="relative py-24 bg-[#2D4438] text-white overflow-hidden text-center border-b border-[#3D5A4A]">
        <div className="absolute inset-0 z-0">
          <img
            src={siteImages.storeHero}
            alt="Excelsa Coffee Store"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2D4438] via-[#2D4438]/70 to-[#2D4438]/90" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#385343] text-[#E0B47F] text-xs font-barlow font-bold uppercase tracking-wider border border-[#4C6F5A]">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>MARANGKAI COOPERATIVE OFFICIAL CATALOG</span>
          </div>

          <h1 className="font-bebas text-5xl sm:text-7xl text-[#FAF6ED] tracking-wider">
            SHOP NOW
          </h1>

          <p className="font-caladea text-xl sm:text-3xl text-[#C4DFC9] italic leading-relaxed">
            "a journey of excellently excelsa"
          </p>

          <p className="font-barlow text-sm text-[#DCE8DF] max-w-xl mx-auto pt-2">
            Pure red-cherry Excelsa coffee beans cultivated on low-nutrient Ultisol soil under 60%–90% agroforestry shade in the Meratus Mountains, Tapin Regency. Micro-lots available starting from 10 Kg.
          </p>
        </div>
      </section>

      {/* ===================== OFFICIAL PRICE & FLAVOR SUMMARY CARD ===================== */}
      <section className="pt-12 pb-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-[#DCE5DE] p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 pb-5 mb-6">
            <div>
              <span className="text-xs font-bold text-[#4D705C] uppercase tracking-widest font-barlow">
                PRICING & SENSORY SPECIFICATIONS
              </span>
              <h3 className="font-bebas text-2xl sm:text-3xl text-[#2D4438] tracking-wide mt-0.5">
                OFFICIAL PRICE LIST & FLAVOUR NOTES OF MERATUS EXCELSA COFFEE
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs bg-[#E7EFE9] text-[#2D4438] font-barlow font-semibold px-3 py-1.5 rounded-full border border-[#DCE5DE]">
                Micro-Lot from 10 Kg
              </span>
              <span className="text-xs bg-[#FAF7F0] text-[#D4A36E] font-barlow font-semibold px-3 py-1.5 rounded-full border border-[#EBE2D0]">
                2 Tons Seasonal Capacity
              </span>
            </div>
          </div>

          {/* Sensory Notes Reference Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 rounded-xl bg-[#F7F5EE] border border-[#DCE5DE]">
              <div className="flex items-center justify-between mb-1">
                <span className="font-bebas text-base text-[#2D4438] tracking-wider block">
                  NATURAL PROCESS
                </span>
                <span className="text-[10px] font-bold bg-[#E0B47F]/20 text-[#2D4438] px-2 py-0.5 rounded font-barlow border border-[#E0B47F]/40">
                  83.25 SCA
                </span>
              </div>
              <p className="text-xs font-barlow text-gray-500 mb-2">Sun-dried ripe red cherries on raised beds</p>
              <div className="flex flex-wrap gap-1.5">
                <span className="text-xs bg-white text-[#2D4438] px-2.5 py-1 rounded font-barlow font-semibold border border-[#DCE5DE]">Black tea</span>
                <span className="text-xs bg-white text-[#2D4438] px-2.5 py-1 rounded font-barlow font-semibold border border-[#DCE5DE]">Hazelnut</span>
                <span className="text-xs bg-white text-[#2D4438] px-2.5 py-1 rounded font-barlow font-semibold border border-[#DCE5DE]">Spicy</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#F7F5EE] border border-[#DCE5DE]">
              <div className="flex items-center justify-between mb-1">
                <span className="font-bebas text-base text-[#D4A36E] tracking-wider block">
                  HONEY PROCESS
                </span>
                <span className="text-[10px] font-bold bg-[#D4A36E]/20 text-[#D4A36E] px-2 py-0.5 rounded font-barlow border border-[#D4A36E]/40">
                  83.45 SCA
                </span>
              </div>
              <p className="text-xs font-barlow text-gray-500 mb-2">Semi-washed with intact sweet mucilage</p>
              <div className="flex flex-wrap gap-1.5">
                <span className="text-xs bg-white text-[#2D4438] px-2.5 py-1 rounded font-barlow font-semibold border border-[#DCE5DE]">Brown sugar</span>
                <span className="text-xs bg-white text-[#2D4438] px-2.5 py-1 rounded font-barlow font-semibold border border-[#DCE5DE]">Caramel</span>
                <span className="text-xs bg-white text-[#2D4438] px-2.5 py-1 rounded font-barlow font-semibold border border-[#DCE5DE]">Brown fruit</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#F7F5EE] border border-[#DCE5DE]">
              <div className="flex items-center justify-between mb-1">
                <span className="font-bebas text-base text-[#82C79B] tracking-wider block">
                  ANAEROBIC PROCESS
                </span>
                <span className="text-[10px] font-bold bg-[#82C79B]/20 text-[#2D4438] px-2 py-0.5 rounded font-barlow border border-[#82C79B]/40">
                  83.75 SCA
                </span>
              </div>
              <p className="text-xs font-barlow text-gray-500 mb-2">Controlled oxygen-free tank fermentation</p>
              <div className="flex flex-wrap gap-1.5">
                <span className="text-xs bg-white text-[#2D4438] px-2.5 py-1 rounded font-barlow font-semibold border border-[#DCE5DE]">Brown sugar</span>
                <span className="text-xs bg-white text-[#2D4438] px-2.5 py-1 rounded font-barlow font-semibold border border-[#DCE5DE]">Dried plum</span>
                <span className="text-xs bg-white text-[#2D4438] px-2.5 py-1 rounded font-barlow font-semibold border border-[#DCE5DE]">Dried apple</span>
              </div>
            </div>
          </div>

          {/* Quick Price Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-barlow border-collapse">
              <thead>
                <tr className="bg-[#E7EFE9] text-[#2D4438] font-bold uppercase tracking-wider">
                  <th className="p-3 rounded-l-lg">Category</th>
                  <th className="p-3">Process Variant</th>
                  <th className="p-3">Flavour Notes</th>
                  <th className="p-3">SCA Score</th>
                  <th className="p-3">Unit</th>
                  <th className="p-3 text-right rounded-r-lg">Official Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                <tr className="hover:bg-gray-50/80">
                  <td className="p-3 font-semibold text-gray-900">Green Bean</td>
                  <td className="p-3 text-[#D4A36E] font-medium">Honey Process</td>
                  <td className="p-3">Brown sugar, caramel, brown fruit</td>
                  <td className="p-3 font-semibold text-[#D4A36E]">83.45 SCA</td>
                  <td className="p-3">1 Kg</td>
                  <td className="p-3 text-right font-bold text-[#2D4438] text-sm">IDR 180,000</td>
                </tr>
                <tr className="hover:bg-gray-50/80">
                  <td className="p-3 font-semibold text-gray-900">Green Bean</td>
                  <td className="p-3 text-[#2D4438] font-medium">Natural Process</td>
                  <td className="p-3">Black tea, hazelnut, spicy</td>
                  <td className="p-3 font-semibold text-[#2D4438]">83.25 SCA</td>
                  <td className="p-3">1 Kg</td>
                  <td className="p-3 text-right font-bold text-[#2D4438] text-sm">IDR 150,000</td>
                </tr>
                <tr className="hover:bg-gray-50/80">
                  <td className="p-3 font-semibold text-gray-900">Green Bean</td>
                  <td className="p-3 text-[#82C79B] font-medium">Anaerobic Process</td>
                  <td className="p-3">Brown sugar, dried plum, dried apple</td>
                  <td className="p-3 font-semibold text-[#82C79B]">83.75 SCA</td>
                  <td className="p-3">1 Kg</td>
                  <td className="p-3 text-right font-bold text-[#2D4438] text-sm">IDR 400,000</td>
                </tr>
                <tr className="hover:bg-gray-50/80">
                  <td className="p-3 font-semibold text-gray-900">Roastbean</td>
                  <td className="p-3 text-[#D4A36E] font-medium">Honey Process</td>
                  <td className="p-3">Brown sugar, caramel, brown fruit</td>
                  <td className="p-3 font-semibold text-[#D4A36E]">83.45 SCA</td>
                  <td className="p-3">1 Kg</td>
                  <td className="p-3 text-right font-bold text-[#2D4438] text-sm">IDR 350,000</td>
                </tr>
                <tr className="hover:bg-gray-50/80">
                  <td className="p-3 font-semibold text-gray-900">Roastbean</td>
                  <td className="p-3 text-[#2D4438] font-medium">Natural Process</td>
                  <td className="p-3">Black tea, hazelnut, spicy</td>
                  <td className="p-3 font-semibold text-[#2D4438]">83.25 SCA</td>
                  <td className="p-3">1 Kg</td>
                  <td className="p-3 text-right font-bold text-[#2D4438] text-sm">IDR 330,000</td>
                </tr>
                <tr className="hover:bg-gray-50/80">
                  <td className="p-3 font-semibold text-gray-900">Drip Bag</td>
                  <td className="p-3 text-[#2D4438] font-medium">Filter Sachet Box</td>
                  <td className="p-3">Brown sugar, caramel, dried plum, hazelnut</td>
                  <td className="p-3 font-semibold text-gray-600">Specialty Blend</td>
                  <td className="p-3">Box (10 pcs)</td>
                  <td className="p-3 text-right font-bold text-[#2D4438] text-sm">IDR 200,000 (200K)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 pt-3 border-t border-gray-100 flex flex-wrap items-center justify-between text-[11px] text-gray-500 font-barlow gap-2">
            <span>* Micro-lot orders begin from 10 Kg. Seasonal processing capacity: 2 metric tons.</span>
            <span>* Harvested at 18–29° Brix on low-nutrient Ultisol soil under 60%–90% agroforestry shade.</span>
          </div>
        </div>
      </section>

      {/* ===================== FILTER & PRODUCTS ===================== */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 pb-6 border-b border-[#DCE5DE]">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-[#4D705C]" />
            <span className="font-barlow text-sm font-bold text-gray-700 uppercase tracking-wider">
              Product Categories:
            </span>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-lg text-xs font-barlow font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#2D4438] text-white shadow'
                  : 'bg-white text-gray-700 border border-[#DCE5DE] hover:bg-gray-50'
              }`}
            >
              All Products ({productsData.length})
            </button>
            <button
              onClick={() => setSelectedCategory('Green Beans')}
              className={`px-4 py-2 rounded-lg text-xs font-barlow font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === 'Green Beans'
                  ? 'bg-[#2D4438] text-white shadow'
                  : 'bg-white text-gray-700 border border-[#DCE5DE] hover:bg-gray-50'
              }`}
            >
              Green Beans ({greenBeansCount})
            </button>
            <button
              onClick={() => setSelectedCategory('Roast Beans')}
              className={`px-4 py-2 rounded-lg text-xs font-barlow font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === 'Roast Beans'
                  ? 'bg-[#2D4438] text-white shadow'
                  : 'bg-white text-gray-700 border border-[#DCE5DE] hover:bg-gray-50'
              }`}
            >
              Roast Beans ({roastBeansCount})
            </button>
            <button
              onClick={() => setSelectedCategory('Drip Bag')}
              className={`px-4 py-2 rounded-lg text-xs font-barlow font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === 'Drip Bag'
                  ? 'bg-[#2D4438] text-white shadow'
                  : 'bg-white text-gray-700 border border-[#DCE5DE] hover:bg-gray-50'
              }`}
            >
              Drip Bag ({dripBagCount})
            </button>
          </div>

          {/* Process Filter */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-barlow text-gray-500">Process:</span>
            <select
              value={selectedProcess}
              onChange={(e) => setSelectedProcess(e.target.value as any)}
              className="px-3 py-1.5 bg-white border border-[#DCE5DE] rounded-lg text-xs font-barlow text-gray-700 cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#82C79B]"
            >
              <option value="all">All Processes</option>
              <option value="Natural Process">Natural (83.25 SCA)</option>
              <option value="Honey Process">Honey (83.45 SCA)</option>
              <option value="Anaerobic Process">Anaerobic (83.75 SCA)</option>
              <option value="Specialty Blend">Specialty Blend</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onSelectProduct}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </section>

      {/* ===================== ROASTER DIRECT TRADE FOOTER CTA ===================== */}
      <section className="bg-[#2D4438] text-white py-16 mt-12 border-t border-[#3D5A4A]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#385343] text-[#E0B47F] text-xs font-barlow font-bold uppercase tracking-wider border border-[#4C6F5A]">
            <Package className="w-3.5 h-3.5" />
            <span>COMMERCIAL ROASTERY SAMPLES & MICRO-LOTS</span>
          </div>

          <h2 className="font-bebas text-3xl sm:text-5xl text-[#FAF6ED] tracking-wider">
            Need Micro-Lots or Sample Cupping Packs?
          </h2>

          <p className="font-barlow text-sm sm:text-base text-[#DCE8DF] max-w-xl mx-auto leading-relaxed">
            We provide green bean sample packages (300g) and micro-lot contracts from 10 Kg up to our artisanal 2-ton seasonal capacity for specialty roasters across Indonesia and international export partners.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('contact-us')}
              className="px-8 py-3.5 bg-[#E0B47F] hover:bg-[#D4A36E] text-[#1E3025] font-barlow font-bold text-xs uppercase tracking-wider rounded-lg shadow cursor-pointer transition-colors"
            >
              INQUIRE DIRECT TRADE SUPPLY
            </button>
            <a
              href="https://wa.me/6289690571731?text=Hello%20Marangkai%20Cooperative,%20I%20would%20like%20to%20inquire%20about%20Excelsa%20micro-lot%20supply"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 bg-[#385343] hover:bg-[#456452] text-white font-barlow font-semibold text-xs uppercase tracking-wider rounded-lg border border-[#4C6F5A] flex items-center gap-2 transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#82C79B]" />
              <span>WHATSAPP (+62 896-9057-1731)</span>
            </a>
            <a
              href="https://wa.me/6281223741112?text=Hello%20Marangkai%20Cooperative,%20I%20would%20like%20to%20inquire%20about%20Excelsa%20micro-lot%20supply"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 bg-white/10 hover:bg-white/20 text-[#FAF6ED] font-barlow font-semibold text-xs uppercase tracking-wider rounded-lg border border-white/20 flex items-center gap-2 transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#E0B47F]" />
              <span>WHATSAPP (081223741112)</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
