import React from 'react';
import { PageId } from '../types';
import { companyProfileData } from '../data/companyProfileData';
import { siteImages } from '../assets/images';
import {
  Building2,
  Users,
  Compass,
  Award,
  CheckCircle2,
  Target,
  ArrowRight,
  Printer,
  Scale,
  Coffee,
  ShoppingBag,
} from 'lucide-react';

interface CompanyProfilePageProps {
  onNavigate: (page: PageId) => void;
}

export const CompanyProfilePage: React.FC<CompanyProfilePageProps> = ({ onNavigate }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#F7F5EE]">
      {/* ===================== HERO HEADER ===================== */}
      <section className="relative bg-[#2D4438] text-white py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#3D5A4A] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15">
          <img
            src={siteImages.coopProfile}
            alt="Office of Koperasi Marangkai Sejahtera Bersama"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#385343] text-[#E0B47F] text-xs font-barlow font-bold uppercase tracking-wider border border-[#4E735D]">
            <Building2 className="w-3.5 h-3.5" />
            <span>COMPANY PROFILE & COOPERATIVE INSTITUTION</span>
          </div>

          <div className="flex flex-col items-center justify-center gap-3">
            <div className="w-20 h-20 rounded-full bg-white p-1 shadow-md border-2 border-[#E0B47F]">
              <img
                src={siteImages.logo}
                alt="Logo Koperasi Marangkai"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h1 className="font-bebas text-4xl sm:text-6xl md:text-7xl text-[#FAF6ED] tracking-wider leading-tight">
              {companyProfileData.identity.fullName}
            </h1>
            <p className="font-caladea text-xl sm:text-2xl text-[#C4DFC9] italic">
              "{companyProfileData.identity.tagline}"
            </p>
          </div>

          <p className="font-barlow text-sm sm:text-base text-[#DCE8DF] max-w-2xl mx-auto leading-relaxed">
            Registered smallholder producer cooperative based in the Meratus Mountain belt of Tapin Regency, South Kalimantan. Dedicated to advancing single-origin Excelsa coffee with specialty standards, direct trade transparency, and equitable farmer prosperity.
          </p>

          {/* Action Row */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('contact-us')}
              className="px-6 py-3 bg-[#E0B47F] hover:bg-[#D4A36E] text-[#1E3025] font-barlow font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm cursor-pointer transition-colors"
            >
              CONTACT COOPERATIVE OFFICERS
            </button>
            <button
              onClick={handlePrint}
              className="px-6 py-3 bg-[#385343] hover:bg-[#456452] text-[#FAF6ED] font-barlow font-medium text-xs uppercase tracking-wider rounded-lg border border-[#4E735D] cursor-pointer flex items-center gap-2 transition-colors shadow-2xs"
            >
              <Printer className="w-4 h-4 text-[#E0B47F]" />
              <span>PRINT / SAVE PROFILE</span>
            </button>
          </div>
        </div>
      </section>

      {/* ===================== KEY STATS ===================== */}
      <section className="bg-[#EBF2EC] py-6 text-[#2D4438] border-b border-[#D6E2D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="border-r border-[#D6E2D8] last:border-0 p-2">
            <span className="block font-bebas text-3xl sm:text-4xl text-[#3D5E4A]">12 ROASTERS</span>
            <span className="text-xs text-gray-600 font-barlow uppercase tracking-wider">Exclusive Domestic Network</span>
          </div>
          <div className="border-r border-[#D6E2D8] last:border-0 p-2">
            <span className="block font-bebas text-3xl sm:text-4xl text-[#D4A36E]">83.75</span>
            <span className="text-xs text-gray-600 font-barlow uppercase tracking-wider">Top SCA Score (Anaerobic)</span>
          </div>
          <div className="border-r border-[#D6E2D8] last:border-0 p-2">
            <span className="block font-bebas text-3xl sm:text-4xl text-[#3D5E4A]">2 TONS</span>
            <span className="text-xs text-gray-600 font-barlow uppercase tracking-wider">Seasonal Processing Capacity</span>
          </div>
          <div className="p-2">
            <span className="block font-bebas text-3xl sm:text-4xl text-[#D4A36E]">10 KG START</span>
            <span className="text-xs text-gray-600 font-barlow uppercase tracking-wider">Micro-Lot Orders</span>
          </div>
        </div>
      </section>

      {/* ===================== SECTION: ABOUT COOPERATIVE & LEGAL IDENTITY ===================== */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#3D5E4A] font-barlow">
              <Scale className="w-4 h-4 text-[#82C79B]" />
              <span>LEGALITY & INSTITUTIONAL IDENTITY</span>
            </div>

            <h2 className="font-bebas text-3xl sm:text-5xl text-[#2D4438] tracking-wide leading-tight">
              Championing Independent Prosperity for Meratus Coffee Smallholders
            </h2>

            <p className="font-barlow text-sm sm:text-base text-gray-700 leading-relaxed">
              <strong>Koperasi Marangkai Sejahtera Bersama</strong> was founded as a collective initiative to unlock the latent value of Excelsa coffee in Tapin Regency, which had remained overlooked in national commercial supply chains for decades.
            </p>
            <p className="font-barlow text-sm sm:text-base text-gray-700 leading-relaxed">
              Organized legally as an agricultural producer cooperative, our institution provides price security at the farmgate, organizes harvest handling to international specialty standards, and builds direct trade relationships with specialty roasters across Indonesia and global export partners in Japan.
            </p>

            {/* Legal Info Table */}
            <div className="bg-white rounded-xl border border-[#DCE5DE] overflow-hidden shadow-sm">
              <div className="p-4 bg-[#E7EFE9] border-b border-[#DCE5DE] font-barlow font-bold text-xs uppercase tracking-wider text-[#2D4438]">
                Cooperative Legal Entity Overview
              </div>
              <div className="divide-y divide-gray-100 text-xs font-barlow">
                <div className="p-3.5 flex justify-between">
                  <span className="text-gray-500">Legal Entity</span>
                  <span className="font-semibold text-gray-900">{companyProfileData.identity.type}</span>
                </div>
                <div className="p-3.5 flex justify-between">
                  <span className="text-gray-500">Jurisdiction & Domicile</span>
                  <span className="font-semibold text-gray-900">{companyProfileData.identity.domicile}</span>
                </div>
                <div className="p-3.5 flex justify-between">
                  <span className="text-gray-500">Chairman</span>
                  <span className="font-semibold text-gray-900">Fery Setyawan</span>
                </div>
                <div className="p-3.5 flex justify-between">
                  <span className="text-gray-500">Secretary</span>
                  <span className="font-semibold text-gray-900">Nugraha Anthoni Najwa</span>
                </div>
                <div className="p-3.5 flex justify-between">
                  <span className="text-gray-500">Treasurer</span>
                  <span className="font-semibold text-gray-900">Prawoto</span>
                </div>
                <div className="p-3.5 flex justify-between">
                  <span className="text-gray-500">Primary Commodity</span>
                  <span className="font-semibold text-[#2D4438]">{companyProfileData.identity.primaryCommodity}</span>
                </div>
                <div className="p-3.5 flex justify-between">
                  <span className="text-gray-500">Official SCA Cupping Score</span>
                  <span className="font-bold text-[#D4A36E]">{companyProfileData.identity.cuppingScore}</span>
                </div>
                <div className="p-3.5 flex justify-between">
                  <span className="text-gray-500">Registered Office Address</span>
                  <span className="font-medium text-gray-700 text-right max-w-xs">{companyProfileData.identity.legalAddress}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#DCE5DE] shadow-lg">
              <img
                src={siteImages.harvestFarmers}
                alt="Meratus Coffee Smallholders Harvesting Excelsa Cherries"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#E0B47F] font-barlow">
                    Burakai Village, Hatungun District
                  </span>
                  <h3 className="font-bebas text-2xl text-white tracking-wide mt-1">
                    Direct Farmgate Equity & Generational Heritage
                  </h3>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl border border-[#DCE5DE] shadow-xs">
                <span className="text-xs font-bold text-[#82C79B] font-barlow uppercase block mb-1">
                  Traceability
                </span>
                <p className="text-xs font-barlow text-gray-700">
                  Every lot is traceable to specific hillside agroforestry plots in Hatungun, Tapin.
                </p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-[#DCE5DE] shadow-xs">
                <span className="text-xs font-bold text-[#E0B47F] font-barlow uppercase block mb-1">
                  Red Cherry Only
                </span>
                <p className="text-xs font-barlow text-gray-700">
                  100% ripe red cherry picking enforced for optimal sugar content and clean cup attributes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SECTION: VISION & MISSION ===================== */}
      <section className="py-20 bg-[#EBF2EC] border-y border-[#D6E2D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-[#3D5E4A] font-bold font-barlow">
              STRATEGIC DIRECTION
            </span>
            <h2 className="font-bebas text-4xl sm:text-5xl text-[#2D4438] tracking-wider mt-1">
              VISION & STRATEGIC MISSIONS
            </h2>
            <div className="w-16 h-1 bg-[#82C79B] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Vision Card */}
            <div className="lg:col-span-5 bg-[#2D4438] text-white p-8 sm:p-10 rounded-2xl border border-[#3D5A4A] shadow-lg relative overflow-hidden">
              <div className="relative z-10 space-y-6">
                <div className="w-12 h-12 rounded-xl bg-[#385343] flex items-center justify-center text-[#E0B47F]">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#E0B47F] font-barlow block mb-2">
                    COOPERATIVE VISION
                  </span>
                  <h3 className="font-caladea text-xl sm:text-2xl italic leading-relaxed text-[#FAF6ED]">
                    "{companyProfileData.vision}"
                  </h3>
                </div>
                <div className="pt-4 border-t border-[#3D5A4A] flex items-center gap-2 text-xs text-[#C4DFC9] font-barlow">
                  <Compass className="w-4 h-4 text-[#E0B47F]" />
                  <span>Guiding every harvest and cooperative initiative</span>
                </div>
              </div>
            </div>

            {/* Mission List */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#3D5E4A] font-barlow block mb-2">
                5 STRATEGIC MISSIONS
              </span>
              <div className="space-y-3">
                {companyProfileData.missions.map((mission, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-5 rounded-xl border border-[#DCE5DE] shadow-xs flex items-start gap-4 hover:border-[#82C79B] transition-colors"
                  >
                    <span className="w-7 h-7 rounded-full bg-[#E7EFE9] text-[#2D4438] font-bebas text-base flex items-center justify-center shrink-0 border border-[#DCE5DE]">
                      {idx + 1}
                    </span>
                    <p className="font-barlow text-sm text-gray-800 leading-relaxed">
                      {mission}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SECTION: 4 CORE VALUES ===================== */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#3D5E4A] font-bold font-barlow">
            WORKING PRINCIPLES
          </span>
          <h2 className="font-bebas text-3xl sm:text-5xl text-[#2D4438] tracking-wider mt-1">
            CORE VALUES
          </h2>
          <p className="text-sm font-barlow text-gray-600 mt-2">
            The foundation of integrity that guides every bean harvested, processed, and shipped.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {companyProfileData.coreValues.map((val, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-2xl border border-[#DCE5DE] shadow-sm hover:shadow-md hover:border-[#82C79B] transition-all flex flex-col justify-between"
            >
              <div>
                <span className="font-bebas text-4xl text-[#E0B47F] block mb-2">0{idx + 1}</span>
                <h4 className="font-bebas text-xl text-gray-900 tracking-wide mb-3">
                  {val.title}
                </h4>
                <p className="text-xs font-barlow text-gray-600 leading-relaxed">
                  {val.description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-1.5 text-[11px] font-bold text-[#2D4438] font-barlow">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#82C79B]" />
                <span>Verified in Practice</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== SECTION: FLAGSHIP PRODUCTS (GREEN BEAN & ROASTED BEANS) ===================== */}
      {/* User instruction: "Tidak usah tampilkan unit usaha apapun, hanya produk yakni Green bean dan Roasted Beans" */}
      <section className="py-20 bg-[#EBF2EC] border-y border-[#D6E2D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest text-[#3D5E4A] font-bold font-barlow">
              PRIMARY COMMODITIES & OFFERINGS
            </span>
            <h2 className="font-bebas text-4xl sm:text-5xl text-[#2D4438] tracking-wider mt-1">
              FLAGSHIP PRODUCTS: GREEN BEANS & ROASTED BEANS
            </h2>
            <p className="text-sm font-barlow text-gray-600 mt-2">
              Single-origin Meratus Excelsa directly supplied by Koperasi Marangkai Sejahtera Bersama with certified traceability and flavor precision.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product 1: Green Beans */}
            <div className="bg-white rounded-2xl border border-[#DCE5DE] shadow-md overflow-hidden flex flex-col justify-between hover:border-[#82C79B] transition-all">
              <div className="p-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-full bg-[#E7EFE9] text-[#2D4438] text-xs font-barlow font-bold uppercase tracking-wider">
                    RAW COMMODITY
                  </span>
                  <span className="font-barlow text-xs font-bold text-[#D4A36E]">
                    IDR 150,000 - 400,000 / Kg
                  </span>
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-100 shrink-0">
                    <img
                      src={siteImages.productGreenBeans}
                      alt="Meratus Excelsa Green Beans"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bebas text-3xl text-[#2D4438] tracking-wide">
                      Excelsa Green Beans
                    </h3>
                    <p className="text-xs text-gray-500 font-barlow">
                      Single-Origin Hatungun, Tapin • 60%-90% Shade • Ultisol Soil
                    </p>
                  </div>
                </div>

                <p className="text-xs font-barlow text-gray-600 leading-relaxed mb-4">
                  Specialty grade raw beans cultivated on low-nutrient Ultisol soil under 60%–90% native forest shade and harvested at 18–29° Brix. Micro-lots available starting from 10 Kg within our 2-ton seasonal capacity:
                </p>

                {/* Available Processes & Pricing */}
                <div className="space-y-2 mb-5">
                  <div className="p-2.5 rounded-lg bg-[#F7F5EE] border border-[#E3D9C9] flex items-center justify-between text-xs font-barlow">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-[#2D4438]">Natural Process</span>
                        <span className="text-[10px] font-bold bg-[#E0B47F]/20 text-[#2D4438] px-1.5 py-0.2 rounded">83.25 SCA</span>
                      </div>
                      <span className="text-[11px] text-gray-500">Flavour: Black tea, hazelnut, spicy</span>
                    </div>
                    <span className="font-bold text-[#2D4438] shrink-0">IDR 150,000/Kg</span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-[#F7F5EE] border border-[#E3D9C9] flex items-center justify-between text-xs font-barlow">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-[#2D4438]">Honey Process</span>
                        <span className="text-[10px] font-bold bg-[#D4A36E]/20 text-[#2D4438] px-1.5 py-0.2 rounded">83.45 SCA</span>
                      </div>
                      <span className="text-[11px] text-gray-500">Flavour: Brown sugar, caramel, brown fruit</span>
                    </div>
                    <span className="font-bold text-[#2D4438] shrink-0">IDR 180,000/Kg</span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-[#F7F5EE] border border-[#E3D9C9] flex items-center justify-between text-xs font-barlow">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-[#2D4438]">Anaerobic Process</span>
                        <span className="text-[10px] font-bold bg-[#82C79B]/20 text-[#2D4438] px-1.5 py-0.2 rounded">83.75 SCA</span>
                      </div>
                      <span className="text-[11px] text-gray-500">Flavour: Brown sugar, dried plum, dried apple</span>
                    </div>
                    <span className="font-bold text-[#2D4438] shrink-0">IDR 400,000/Kg</span>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs font-barlow text-gray-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#82C79B] shrink-0" />
                    <span>Micro-lot orders available starting from 10 Kg</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#82C79B] shrink-0" />
                    <span>Moisture content strictly calibrated to 11 - 12% in GrainPro hermetic liners</span>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-[#FAF9F5] border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-500 font-barlow">Available for Export & Domestic Roasters</span>
                <button
                  onClick={() => onNavigate('store')}
                  className="px-5 py-2.5 bg-[#2D4438] hover:bg-[#3D5B4A] text-white text-xs font-barlow font-bold uppercase tracking-wider rounded-lg flex items-center gap-2 cursor-pointer transition-colors"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Order Green Beans</span>
                </button>
              </div>
            </div>

            {/* Product 2: Roasted Beans */}
            <div className="bg-white rounded-2xl border border-[#DCE5DE] shadow-md overflow-hidden flex flex-col justify-between hover:border-[#82C79B] transition-all">
              <div className="p-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-full bg-[#F5E6D3] text-[#8C5828] text-xs font-barlow font-bold uppercase tracking-wider">
                    ARTISANAL ROAST
                  </span>
                  <span className="font-barlow text-xs font-bold text-[#D4A36E]">
                    IDR 330,000 - 350,000 / Kg
                  </span>
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-100 shrink-0">
                    <img
                      src={siteImages.productRoastHoney}
                      alt="Meratus Excelsa Roasted Beans"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bebas text-3xl text-[#2D4438] tracking-wide">
                      Excelsa Roasted Beans
                    </h3>
                    <p className="text-xs text-gray-500 font-barlow">
                      Medium Roast Profile • Whole Bean or Custom Grind
                    </p>
                  </div>
                </div>

                <p className="text-xs font-barlow text-gray-600 leading-relaxed mb-4">
                  Freshly batch-roasted to highlight the signature tart-sweet complexity, pleasant winey undertones, and prolonged caramelized sweetness of Tapin Excelsa:
                </p>

                {/* Available Processes & Pricing */}
                <div className="space-y-2 mb-5">
                  <div className="p-2.5 rounded-lg bg-[#F7F5EE] border border-[#E3D9C9] flex items-center justify-between text-xs font-barlow">
                    <div>
                      <span className="font-bold text-[#2D4438] block">Natural Process Roasted</span>
                      <span className="text-[11px] text-gray-500">Flavour: Black tea, hazelnut, spicy</span>
                    </div>
                    <span className="font-bold text-[#2D4438] shrink-0">IDR 330,000/Kg</span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-[#F7F5EE] border border-[#E3D9C9] flex items-center justify-between text-xs font-barlow">
                    <div>
                      <span className="font-bold text-[#2D4438] block">Honey Process Roasted</span>
                      <span className="text-[11px] text-gray-500">Flavour: Brown sugar, caramel, brown fruit</span>
                    </div>
                    <span className="font-bold text-[#2D4438] shrink-0">IDR 350,000/Kg</span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-[#F7F5EE] border border-[#E3D9C9] flex items-center justify-between text-xs font-barlow">
                    <div>
                      <span className="font-bold text-[#2D4438] block">Excelsa Drip Bag Box (10 pcs)</span>
                      <span className="text-[11px] text-gray-500">Flavour: Brown sugar, caramel, plum, hazelnut</span>
                    </div>
                    <span className="font-bold text-[#2D4438] shrink-0">IDR 200,000/Box</span>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs font-barlow text-gray-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#82C79B] shrink-0" />
                    <span>Sealed with one-way degassing valves to lock in delicate aromas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#82C79B] shrink-0" />
                    <span>Ideal for manual drip, cold brew, and distinctive espresso blends</span>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-[#FAF9F5] border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-500 font-barlow">Custom batch roasted upon order</span>
                <button
                  onClick={() => onNavigate('store')}
                  className="px-5 py-2.5 bg-[#2D4438] hover:bg-[#3D5B4A] text-white text-xs font-barlow font-bold uppercase tracking-wider rounded-lg flex items-center gap-2 cursor-pointer transition-colors"
                >
                  <Coffee className="w-3.5 h-3.5" />
                  <span>Order Roasted Beans</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SECTION: STRUKTUR PENGURUS (SECRETARY & TREASURER ONLY) ===================== */}
      {/* User instruction: "Sekretaris: Nugraha Anthoni Najwa, Bendahara: Prawoto. Sisanya di struktur tidak usah di isi" */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#3D5E4A] font-bold font-barlow">
            ORGANIZATIONAL GOVERNANCE
          </span>
          <h2 className="font-bebas text-4xl sm:text-5xl text-[#2D4438] tracking-wider mt-1">
            COOPERATIVE GOVERNANCE OFFICERS
          </h2>
          <p className="text-sm font-barlow text-gray-600 mt-2">
            Dedicated cooperative leadership managing institutional administration, member prosperity, and financial controllership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {companyProfileData.management.map((person, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl border border-[#DCE5DE] shadow-sm hover:shadow-lg hover:border-[#82C79B] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-[#2D4438] text-[#E0B47F] font-bebas text-2xl flex items-center justify-center shrink-0 border border-[#3E5C4B]">
                    {person.name
                      .split(' ')
                      .slice(0, 2)
                      .map((n) => n[0])
                      .join('')}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#3D5E4A] uppercase tracking-wider font-barlow block">
                      {person.role}
                    </span>
                    <h4 className="font-bebas text-2xl text-gray-900 tracking-wide group-hover:text-[#2D4438] transition-colors">
                      {person.name}
                    </h4>
                  </div>
                </div>

                <p className="text-xs sm:text-sm font-barlow text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {person.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400 font-barlow">
                <span>Koperasi Marangkai Sejahtera Bersama</span>
                <span className="text-[#82C79B] font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Active Officer
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== SECTION: CERTIFICATIONS & CREDENTIALS ===================== */}
      {/* User instruction: "Kami bukan binaan dinas apapun" - No dinas mentioned */}
      <section className="py-16 bg-[#2D4438] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-widest text-[#E0B47F] font-bold font-barlow">
              STANDARDS & ACCREDITATION
            </span>
            <h3 className="font-bebas text-3xl sm:text-4xl text-[#FAF6ED] tracking-wider mt-1">
              LEGALITY, CERTIFICATION & EXPORT ACCREDITATION
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {companyProfileData.certifications.map((cert, idx) => (
              <div
                key={idx}
                className="bg-[#24372D] p-6 rounded-xl border border-[#395444] flex items-center gap-4 shadow"
              >
                <div className="p-3 bg-[#344E3F] text-[#E0B47F] rounded-lg shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-bebas text-lg text-[#FAF6ED] tracking-wide leading-tight">
                    {cert.title}
                  </h5>
                  <span className="text-xs text-[#BDD7C4] font-barlow">
                    {cert.issuer}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SECTION: CTA PARTNERSHIP & CONTACT ===================== */}
      <section className="py-20 bg-[#F7F5EE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold text-[#3D5E4A] uppercase tracking-widest font-barlow">
            STRATEGIC COFFEE PARTNERSHIPS
          </span>

          <h2 className="font-bebas text-4xl sm:text-5xl text-[#2D4438] tracking-wider leading-tight">
            Interested in Partnering with Koperasi Marangkai?
          </h2>

          <p className="font-barlow text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We warmly welcome commercial coffee roasters, green bean importers, specialty coffee shops, and research partners to establish direct relationships and sample lots of Meratus Excelsa.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('contact-us')}
              className="px-8 py-3.5 bg-[#2D4438] hover:bg-[#3D5B4A] text-white font-barlow font-bold text-xs uppercase tracking-wider rounded-lg shadow cursor-pointer transition-colors"
            >
              SUBMIT PARTNERSHIP INQUIRY
            </button>
            <button
              onClick={() => onNavigate('store')}
              className="px-8 py-3.5 bg-white hover:bg-[#F2ECE1] text-[#2D4438] font-barlow font-bold text-xs uppercase tracking-wider rounded-lg border border-[#DCE5DE] shadow-xs cursor-pointer transition-colors"
            >
              EXPLORE OUR STORE
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
