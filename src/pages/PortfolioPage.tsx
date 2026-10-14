import React, { useState } from 'react';
import { PageId } from '../types';
import { siteImages } from '../assets/images';
import {
  Briefcase,
  Globe2,
  Award,
  Trees,
  FlaskConical,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Filter,
  FileCheck,
  PackageCheck,
  Send,
  Coffee,
  Sparkles,
} from 'lucide-react';

interface PortfolioPageProps {
  onNavigate: (page: PageId) => void;
}

type CategoryFilter = 'all' | 'export' | 'processing' | 'conservation' | 'quality';

interface PortfolioItem {
  id: string;
  category: 'export' | 'processing' | 'conservation' | 'quality';
  categoryLabel: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  metric: string;
  metricLabel: string;
  year: string;
  highlights: string[];
  specs: { label: string; value: string }[];
}

const portfolioData: PortfolioItem[] = [
  {
    id: 'japan-export-mou',
    category: 'export',
    categoryLabel: 'Direct Export Trade',
    title: 'Japan Specialty Coffee Export Partnership (MoU)',
    subtitle: 'Bilateral trade corridor establishing direct supply of Meratus Excelsa to Japan',
    description:
      'A landmark Memorandum of Understanding signed with specialty coffee trading partners in Japan. Koperasi Marangkai Sejahtera Bersama provides direct container-lot and micro-lot supply of Specialty Grade 1 Excelsa green beans, verified with international phytosanitary and origin certificates.',
    image: siteImages.excelsaBeansStore,
    metric: 'Annual MoU',
    metricLabel: 'Direct Export Contract',
    year: '2023 - Present',
    highlights: [
      'Direct farm-to-port export shipping from South Kalimantan to Japan',
      'GrainPro hermetic lining to safeguard bean moisture during ocean transit',
      'Full plot-level traceability provided for every export lot',
      'Fair-trade compliant premium paid directly to Hatungun smallholders',
    ],
    specs: [
      { label: 'Export Grade', value: 'Specialty Grade 1' },
      { label: 'Target Markets', value: 'Tokyo, Osaka & Yokohama' },
      { label: 'Moisture Target', value: '11.0% - 12.0%' },
      { label: 'Processes', value: 'Honey, Natural & Anaerobic' },
    ],
  },
  {
    id: 'sca-cupping-score',
    category: 'quality',
    categoryLabel: 'Cupping & Sensory Lab',
    title: 'Official SCA Cupping Benchmark: Scores up to 83.75',
    subtitle: 'Anaerobic 83.75 | Honey 83.45 | Natural 83.25',
    description:
      'Rigorous physical and sensory assessment conducted under standard Specialty Coffee Association (SCA) cupping protocols by licensed Q-graders. Anaerobic process achieved 83.75, Honey process reached 83.45, and Natural process scored 83.25, establishing that lowland agroforestry Excelsa achieves certified specialty cup standing.',
    image: siteImages.cupping,
    metric: '83.75',
    metricLabel: 'Top SCA Cupping Score',
    year: 'Certified 2023',
    highlights: [
      'Anaerobic Process: 83.75 SCA (Brown sugar, dried plum, dried apple)',
      'Honey Process: 83.45 SCA (Brown sugar, caramel, brown fruit)',
      'Natural Process: 83.25 SCA (Black tea, hazelnut, spicy notes)',
      'Harvested strictly at 18–29° Brix cherry sugar count',
    ],
    specs: [
      { label: 'Anaerobic Score', value: '83.75 SCA Standard' },
      { label: 'Honey Score', value: '83.45 SCA Standard' },
      { label: 'Natural Score', value: '83.25 SCA Standard' },
      { label: 'Sugar Ripeness', value: '18 - 29° Brix Count' },
    ],
  },
  {
    id: 'agroforestry-conservation',
    category: 'conservation',
    categoryLabel: 'Ecological Agroforestry',
    title: '120+ Hectare Native Canopy Agroforestry Program',
    subtitle: 'Preserving tropical biodiversity through polyculture coffee cultivation',
    description:
      'Cultivated within the buffer zone of the Meratus Mountains on low-nutrient Ultisol soil. Coffee bushes flourish beneath towering native canopy trees with 60%–90% natural shade density, stabilizing steep slopes and developing dense, slow-maturing cherry sugar reserves without synthetic chemical pesticides.',
    image: siteImages.agroforestrySoil,
    metric: '60% - 90%',
    metricLabel: 'Agroforestry Shade Density',
    year: 'Ongoing Initiative',
    highlights: [
      '60% - 90% forest shade density under native durian, cempedak, and dipterocarps',
      'Naturally low-nutrient Ultisol soil encouraging deep taproots and dense sugars',
      'Living soil preservation via organic leaf compost and native microorganisms',
      'Zero deforestation: cultivated exclusively within shaded polyculture buffers',
    ],
    specs: [
      { label: 'Shade Density', value: '60% - 90% Canopy Shade' },
      { label: 'Soil Type', value: 'Ultisol (Low Nutrient, Deep Depth)' },
      { label: 'Agroforestry Area', value: '120+ Managed Hectares' },
      { label: 'Synthetic Chemicals', value: '0% (Strictly Organic Leaf Mulch)' },
    ],
  },
  {
    id: 'precision-processing',
    category: 'processing',
    categoryLabel: 'Post-Harvest Innovation',
    title: 'Precision Micro-Lot Wet & Dry Mill in Burakai',
    subtitle: '2-ton seasonal capacity with 18–29° Brix cherry selection',
    description:
      'Centrally operated processing facility in Burakai Village, Hatungun District. Designed with an artisanal seasonal processing capacity of 2 metric tons to guarantee unwavering attention to detail. Employs ventilated bamboo raised drying beds, sealed anaerobic fermentation vessels, and digital moisture verification.',
    image: siteImages.dryingPatio,
    metric: '2 Tons',
    metricLabel: 'Seasonal Processing Capacity',
    year: 'Artisanal Scale',
    highlights: [
      '2-ton seasonal processing capacity prioritizing artisanal specialty precision',
      'Micro-lot orders available starting from 10 Kg for boutique roasteries',
      'Continuous calibrated Brix sugar monitoring on fresh cherries (18–29° Brix)',
      'Raised bamboo drying beds under mountain sun ensuring uniform 11–12% moisture',
    ],
    specs: [
      { label: 'Seasonal Capacity', value: '2 Metric Tons' },
      { label: 'Micro-Lot Minimum', value: 'Starting from 10 Kg' },
      { label: 'Brix Cherry Count', value: '18 - 29° Brix' },
      { label: 'Target Moisture', value: '11.0% - 12.0%' },
    ],
  },
  {
    id: 'domestic-roasters-supply',
    category: 'export',
    categoryLabel: 'Direct Trade Supply',
    title: 'Exclusive Domestic Roasters Network (12 Roasters)',
    subtitle: 'Strict allocation partnership limited to 12 select domestic roasters',
    description:
      'To maintain uncompromising quality and close relationships, our domestic distribution is strictly dedicated to only 12 select specialty coffee roasters across Indonesia. Roasters in Jakarta, Bandung, Yogyakarta, and Bali receive prioritized micro-lot allocations from 10 Kg upward.',
    image: siteImages.productGreenBeans,
    metric: '12 Roasters',
    metricLabel: 'Exclusive Domestic Partners',
    year: '2023 - Present',
    highlights: [
      'Strictly limited to 12 exclusive domestic specialty roasters across Indonesia',
      'Flexible micro-lot orders starting from 10 Kg up to full seasonal contracts',
      'Direct trade agreements guaranteeing stable farmgate prices and full lot traceability',
      'Detailed cupping scorecards and origin notes included with every consignment',
    ],
    specs: [
      { label: 'Domestic Allocation', value: 'Only 12 Specialty Roasters' },
      { label: 'Micro-Lot Size', value: 'Starting from 10 Kg' },
      { label: 'Packaging', value: 'GrainPro Hermetic + Burlap' },
      { label: 'Sample Lots', value: '300g Cupping Samples Available' },
    ],
  },
  {
    id: 'farmer-equity-program',
    category: 'conservation',
    categoryLabel: 'Community Impact',
    title: 'Smallholder Farmer Livelihood & Generational Renewal',
    subtitle: 'Empowering 45+ local farming families with fair pricing and agronomy training',
    description:
      'Transforming coffee from an abandoned backyard crop into a respected, dignifying livelihood. Through our cooperative model, smallholder families receive guaranteed buying prices for ripe red cherries harvested at 18–29° Brix, technical pruning workshops, and cooperative profit sharing (SHU).',
    image: siteImages.harvestFarmers,
    metric: '45+ Families',
    metricLabel: 'Smallholder Members',
    year: 'Established 2023',
    highlights: [
      'Cherry purchasing prices paid significantly above conventional commodity middlemen',
      'Free high-yield, drought-tolerant Excelsa seedling distributions',
      'Hands-on training in selective red-picking at 18–29° Brix standard',
      'Encouraging next-generation youth participation in coffee agriculture',
    ],
    specs: [
      { label: 'Village Base', value: 'Desa Burakai, Hatungun' },
      { label: 'Governance', value: 'Democratic Producer Cooperative' },
      { label: 'Harvest Training', value: '18 - 29° Brix Ripe Cherry Standard' },
      { label: 'Revenue Model', value: 'Transparent Fair Farmgate Purchase' },
    ],
  },
];

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onNavigate }) => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');

  const filteredItems =
    activeFilter === 'all'
      ? portfolioData
      : portfolioData.filter((item) => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#F7F5EE]">
      {/* ===================== HERO HEADER ===================== */}
      <section className="relative bg-[#2D4438] text-white py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#3D5A4A] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15">
          <img
            src={siteImages.excelsaBeansStore}
            alt="Koperasi Marangkai Portfolio Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#385343] text-[#E0B47F] text-xs font-barlow font-bold uppercase tracking-wider border border-[#4E735D]">
            <Briefcase className="w-3.5 h-3.5" />
            <span>PORTFOLIO, EXPORT PARTNERSHIPS & ACHIEVEMENTS</span>
          </div>

          <h1 className="font-bebas text-4xl sm:text-6xl md:text-7xl text-[#FAF6ED] tracking-wider leading-tight">
            SUPPLY CAPABILITIES & PROVEN TRACK RECORD
          </h1>

          <p className="font-caladea text-xl sm:text-2xl text-[#C4DFC9] italic max-w-3xl mx-auto">
            "From the shaded mountain forest of Meratus to international cupping tables and direct export contracts."
          </p>

          <p className="font-barlow text-sm sm:text-base text-[#DCE8DF] max-w-2xl mx-auto leading-relaxed">
            Explore our verified portfolio of bilateral export partnerships, certified SCA cupping scores up to 83.75, 2-ton seasonal capacity, and our dedicated network of 12 domestic specialty roasters.
          </p>

          {/* Quick Action */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('contact-us')}
              className="px-6 py-3 bg-[#E0B47F] hover:bg-[#D4A36E] text-[#1E3025] font-barlow font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm cursor-pointer transition-colors"
            >
              REQUEST GREEN BEAN SAMPLES
            </button>
            <button
              onClick={() => onNavigate('store')}
              className="px-6 py-3 bg-[#385343] hover:bg-[#456452] text-[#FAF6ED] font-barlow font-medium text-xs uppercase tracking-wider rounded-lg border border-[#4E735D] cursor-pointer flex items-center gap-2 transition-colors shadow-2xs"
            >
              <Coffee className="w-4 h-4 text-[#E0B47F]" />
              <span>BROWSE PRODUCT STORE</span>
            </button>
          </div>
        </div>
      </section>

      {/* ===================== SUMMARY STATS ===================== */}
      <section className="bg-[#EBF2EC] py-6 text-[#2D4438] border-b border-[#D6E2D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="border-r border-[#D6E2D8] last:border-0 p-2">
            <span className="block font-bebas text-3xl sm:text-4xl text-[#3D5E4A]">12 ROASTERS</span>
            <span className="text-xs text-gray-600 font-barlow uppercase tracking-wider">Exclusive Domestic Network</span>
          </div>
          <div className="border-r border-[#D6E2D8] last:border-0 p-2">
            <span className="block font-bebas text-3xl sm:text-4xl text-[#D4A36E]">83.75</span>
            <span className="text-xs text-gray-600 font-barlow uppercase tracking-wider">Top SCA Cupping Score</span>
          </div>
          <div className="border-r border-[#D6E2D8] last:border-0 p-2">
            <span className="block font-bebas text-3xl sm:text-4xl text-[#3D5E4A]">2 TONS</span>
            <span className="text-xs text-gray-600 font-barlow uppercase tracking-wider">Seasonal Processing Capacity</span>
          </div>
          <div className="p-2">
            <span className="block font-bebas text-3xl sm:text-4xl text-[#D4A36E]">10 KG START</span>
            <span className="text-xs text-gray-600 font-barlow uppercase tracking-wider">Micro-Lot Orders Available</span>
          </div>
        </div>
      </section>

      {/* ===================== FILTER TABS ===================== */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-full text-xs font-barlow font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-[#2D4438] text-white shadow-sm'
                : 'bg-white text-gray-700 border border-[#DCE5DE] hover:bg-[#EBF2EC]'
            }`}
          >
            All Milestones ({portfolioData.length})
          </button>
          <button
            onClick={() => setActiveFilter('export')}
            className={`px-4 py-2 rounded-full text-xs font-barlow font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeFilter === 'export'
                ? 'bg-[#2D4438] text-white shadow-sm'
                : 'bg-white text-gray-700 border border-[#DCE5DE] hover:bg-[#EBF2EC]'
            }`}
          >
            Export & Trade
          </button>
          <button
            onClick={() => setActiveFilter('quality')}
            className={`px-4 py-2 rounded-full text-xs font-barlow font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeFilter === 'quality'
                ? 'bg-[#2D4438] text-white shadow-sm'
                : 'bg-white text-gray-700 border border-[#DCE5DE] hover:bg-[#EBF2EC]'
            }`}
          >
            Cupping & Quality
          </button>
          <button
            onClick={() => setActiveFilter('processing')}
            className={`px-4 py-2 rounded-full text-xs font-barlow font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeFilter === 'processing'
                ? 'bg-[#2D4438] text-white shadow-sm'
                : 'bg-white text-gray-700 border border-[#DCE5DE] hover:bg-[#EBF2EC]'
            }`}
          >
            Processing Innovation
          </button>
          <button
            onClick={() => setActiveFilter('conservation')}
            className={`px-4 py-2 rounded-full text-xs font-barlow font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeFilter === 'conservation'
                ? 'bg-[#2D4438] text-white shadow-sm'
                : 'bg-white text-gray-700 border border-[#DCE5DE] hover:bg-[#EBF2EC]'
            }`}
          >
            Agroforestry & Community
          </button>
        </div>
      </section>

      {/* ===================== PORTFOLIO SHOWCASE GRID ===================== */}
      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-[#DCE5DE] shadow-sm hover:shadow-xl hover:border-[#82C79B] transition-all overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Image Banner */}
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-[#2D4438]/90 text-[#FAF6ED] text-[11px] font-barlow font-bold uppercase tracking-wider border border-[#3E5C4B]">
                      {item.categoryLabel}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/90 text-[#2D4438] text-[11px] font-barlow font-bold">
                      {item.year}
                    </span>
                  </div>

                  {/* Bottom Image Callout */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                    <div>
                      <span className="text-[11px] font-barlow uppercase tracking-wider text-[#E0B47F]">
                        Key Benchmark
                      </span>
                      <div className="font-bebas text-3xl text-white">{item.metric}</div>
                      <span className="text-[11px] text-[#C4DFC9] font-barlow">{item.metricLabel}</span>
                    </div>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-7 space-y-4">
                  <div>
                    <h3 className="font-bebas text-2xl sm:text-3xl text-[#2D4438] tracking-wide group-hover:text-[#3D5B4A] transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-caladea text-sm text-[#4D705C] italic mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>

                  <p className="font-barlow text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2 pt-2 border-t border-gray-100">
                    <strong className="block text-xs uppercase tracking-wider text-[#2D4438] font-barlow">
                      Verified Highlights:
                    </strong>
                    {item.highlights.map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs font-barlow text-gray-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#82C79B] shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>

                  {/* Specs Grid */}
                  <div className="grid grid-cols-2 gap-2 pt-3">
                    {item.specs.map((sp, sIdx) => (
                      <div
                        key={sIdx}
                        className="bg-[#F7F5EE] p-2.5 rounded-lg border border-[#E7EFE9] text-xs font-barlow"
                      >
                        <span className="text-gray-500 block text-[10px] uppercase tracking-wider">
                          {sp.label}
                        </span>
                        <span className="font-semibold text-[#2D4438] block mt-0.5">
                          {sp.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-6 bg-[#FAF9F5] border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-500 font-barlow">
                  Koperasi Marangkai Sejahtera Bersama
                </span>
                <button
                  onClick={() => onNavigate('contact-us')}
                  className="px-4 py-2 bg-[#2D4438] hover:bg-[#3D5B4A] text-white text-xs font-barlow font-bold uppercase tracking-wider rounded-lg flex items-center gap-1.5 cursor-pointer transition-colors"
                >
                  <span>Inquire Lot</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== GREEN BEAN CONTRACT & SAMPLE CTA ===================== */}
      <section className="py-20 bg-[#2D4438] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#385343] text-[#E0B47F] text-xs font-barlow font-bold uppercase tracking-wider border border-[#4E735D]">
            <PackageCheck className="w-3.5 h-3.5" />
            <span>COMMERCIAL INQUIRIES & GREEN BEAN LOT RESERVATIONS</span>
          </div>

          <h2 className="font-bebas text-4xl sm:text-6xl text-[#FAF6ED] tracking-wider leading-tight">
            Reserve Single-Origin Meratus Excelsa For Your Roastery
          </h2>

          <p className="font-barlow text-sm sm:text-base text-[#DCE8DF] max-w-2xl mx-auto leading-relaxed">
            We collaborate with boutique roasters, coffee shops, and international importers seeking exceptional micro-lots with authentic botanical heritage, transparent pricing, and verifiable environmental ethics.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left max-w-3xl mx-auto pt-4">
            <div className="bg-[#24372D] p-5 rounded-xl border border-[#395444]">
              <span className="text-xs font-bold text-[#E0B47F] uppercase tracking-wider font-barlow block mb-1">
                Sample Dispatch
              </span>
              <p className="text-xs text-[#BDD7C4] font-barlow">
                300g cupping sample packages sent to registered roasters nationwide and overseas.
              </p>
            </div>
            <div className="bg-[#24372D] p-5 rounded-xl border border-[#395444]">
              <span className="text-xs font-bold text-[#E0B47F] uppercase tracking-wider font-barlow block mb-1">
                Micro-Lots from 10 Kg
              </span>
              <p className="text-xs text-[#BDD7C4] font-barlow">
                Micro-lot orders start from 10 Kg up to our artisanal 2-ton seasonal capacity.
              </p>
            </div>
            <div className="bg-[#24372D] p-5 rounded-xl border border-[#395444]">
              <span className="text-xs font-bold text-[#E0B47F] uppercase tracking-wider font-barlow block mb-1">
                Exclusive Roaster Network
              </span>
              <p className="text-xs text-[#BDD7C4] font-barlow">
                Direct trade supply reserved for only 12 domestic roasters and bilateral Japan exports.
              </p>
            </div>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('contact-us')}
              className="px-8 py-3.5 bg-[#E0B47F] hover:bg-[#D4A36E] text-[#1E3025] font-barlow font-bold text-xs uppercase tracking-wider rounded-lg shadow cursor-pointer transition-colors"
            >
              CONTACT COOPERATIVE SALES
            </button>
            <button
              onClick={() => onNavigate('store')}
              className="px-8 py-3.5 bg-[#385343] hover:bg-[#456452] text-[#FAF6ED] font-barlow font-bold text-xs uppercase tracking-wider rounded-lg border border-[#4E735D] shadow-xs cursor-pointer transition-colors"
            >
              VIEW STORE PRICING
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
