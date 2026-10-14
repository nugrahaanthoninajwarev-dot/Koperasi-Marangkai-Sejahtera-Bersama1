import React from 'react';
import { PageId } from '../types';
import { whySpecialData } from '../data/story';
import { siteImages } from '../assets/images';
import { ArrowRight, Sparkles, Sprout, Beaker, Heart, CheckCircle2, Trees, Droplets, Sun, Award } from 'lucide-react';

interface WhySpecialPageProps {
  onNavigate: (page: PageId) => void;
}

export const WhySpecialPage: React.FC<WhySpecialPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#F7F5EE]">
      {/* ===================== SECTION 0: WHERE CONSTRAINTS BECOME EXCEPTIONAL ===================== */}
      <section className="bg-[#2D4438] text-white py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#3D5A4A] relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#385343] text-[#E0B47F] text-xs font-barlow font-bold uppercase tracking-wider border border-[#4C6F5A]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>BOTANICAL TERROIR OF MERATUS • TAPIN</span>
            </div>

            <h1 className="font-bebas text-4xl sm:text-6xl text-[#FAF6ED] tracking-wider leading-tight">
              Where Constraints Become Exceptional
            </h1>

            <p className="font-barlow text-base sm:text-lg text-[#DCE8DF] leading-relaxed">
              {whySpecialData.constraintsSection.description}
            </p>

            {/* Flavor Notes & Certified SCA Scores Comparison Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-4">
              {/* Natural Process Notes */}
              <div className="bg-[#24372D] p-4 rounded-xl border border-[#395444]">
                <div className="flex items-center justify-between mb-2.5">
                  <h4 className="font-bebas text-base text-[#FAF6ED] tracking-wider">
                    NATURAL PROCESS
                  </h4>
                  <span className="text-[10px] font-bold bg-[#E0B47F]/20 text-[#E0B47F] px-2 py-0.5 rounded font-barlow border border-[#E0B47F]/40">
                    83.25 SCA
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {whySpecialData.constraintsSection.naturalNotes.map((note, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-[#344E3F] text-[#FAF6ED] px-2 py-0.5 rounded font-barlow"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              {/* Honey Process Notes */}
              <div className="bg-[#24372D] p-4 rounded-xl border border-[#395444]">
                <div className="flex items-center justify-between mb-2.5">
                  <h4 className="font-bebas text-base text-[#D4A36E] tracking-wider">
                    HONEY PROCESS
                  </h4>
                  <span className="text-[10px] font-bold bg-[#D4A36E]/20 text-[#D4A36E] px-2 py-0.5 rounded font-barlow border border-[#D4A36E]/40">
                    83.45 SCA
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {whySpecialData.constraintsSection.honeyNotes.map((note, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-[#344E3F] text-[#FAF6ED] px-2 py-0.5 rounded font-barlow"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              {/* Anaerobic Process Notes */}
              <div className="bg-[#24372D] p-4 rounded-xl border border-[#395444]">
                <div className="flex items-center justify-between mb-2.5">
                  <h4 className="font-bebas text-base text-[#82C79B] tracking-wider">
                    ANAEROBIC PROCESS
                  </h4>
                  <span className="text-[10px] font-bold bg-[#82C79B]/20 text-[#82C79B] px-2 py-0.5 rounded font-barlow border border-[#82C79B]/40">
                    83.75 SCA
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {whySpecialData.constraintsSection.anaerobicNotes.map((note, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-[#344E3F] text-[#FAF6ED] px-2 py-0.5 rounded font-barlow"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('store')}
                className="px-7 py-3.5 bg-[#E0B47F] hover:bg-[#D4A36E] text-[#24372D] font-barlow font-bold text-xs uppercase tracking-wider rounded-lg shadow cursor-pointer transition-colors"
              >
                ORDER COFFEE BEANS IN STORE
              </button>
              <button
                onClick={() => onNavigate('portfolio')}
                className="px-6 py-3.5 bg-transparent hover:bg-white/10 text-[#FAF6ED] font-barlow font-semibold text-xs uppercase tracking-wider rounded-lg border border-white/30 cursor-pointer transition-colors"
              >
                VIEW PORTFOLIO & SPECS
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#3D5A4A]">
              <img
                src={siteImages.harvestFarmers}
                alt="Excelsa Tapin Harvest"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-6 text-white space-y-2">
                <div className="flex flex-wrap gap-2 mb-1">
                  <span className="px-2.5 py-1 rounded bg-[#E0B47F] text-[#1E3025] font-barlow font-bold text-[11px] uppercase tracking-wider">
                    60% - 90% Shade Density
                  </span>
                  <span className="px-2.5 py-1 rounded bg-[#82C79B] text-[#1E3025] font-barlow font-bold text-[11px] uppercase tracking-wider">
                    Ultisol Soil
                  </span>
                </div>
                <span className="font-bebas text-2xl text-[#FAF6ED] tracking-wider">
                  NATIVE AGROFORESTRY TERROIR
                </span>
                <p className="text-xs text-gray-300 font-barlow leading-relaxed">
                  Naturally low-nutrient Ultisol subsoils push deep root development, while 60%–90% natural canopy shade delivers dense 18–29° Brix cherry sugars.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SCIENTIFIC TERROIR GRID ===================== */}
      <section className="py-14 bg-[#EBF2EC] border-b border-[#D6E2D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white p-5 rounded-xl border border-[#DCE5DE] shadow-xs">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest font-barlow block">
                SOIL PROFILE
              </span>
              <div className="font-bebas text-2xl text-[#2D4438] mt-1">ULTISOL SOIL</div>
              <p className="text-xs text-gray-600 font-barlow mt-1">
                Naturally low nutrient, fostering deep taproot networks and complex bean density.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-[#DCE5DE] shadow-xs">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest font-barlow block">
                CANOPY COVER
              </span>
              <div className="font-bebas text-2xl text-[#2D4438] mt-1">60% - 90% SHADE</div>
              <p className="text-xs text-gray-600 font-barlow mt-1">
                Multi-strata shade from native Meratus forest giants protecting understory bushes.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-[#DCE5DE] shadow-xs">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest font-barlow block">
                HARVEST CRITERIA
              </span>
              <div className="font-bebas text-2xl text-[#D4A36E] mt-1">18 - 29° BRIX</div>
              <p className="text-xs text-gray-600 font-barlow mt-1">
                Calibrated refractometer sugar measurement on peak physiologically ripe cherries.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-[#DCE5DE] shadow-xs">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest font-barlow block">
                PRODUCTION SCALE
              </span>
              <div className="font-bebas text-2xl text-[#82C79B] mt-1">2 TONS / 12 ROASTERS</div>
              <p className="text-xs text-gray-600 font-barlow mt-1">
                Artisanal seasonal processing capacity allocated exclusively to 12 domestic roasters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SECTION 1: TWO PILLARS OF DEDICATED FARMERS ===================== */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#4D705C] font-bold font-barlow">
            FARMER COGNITION & ETHICS
          </span>
          <h2 className="font-bebas text-3xl sm:text-5xl text-[#2D4438] tracking-wider mt-1">
            Excelsa Tapin: When Dedicated Farmers Plant Exceptional Crops
          </h2>
          <div className="w-20 h-1 bg-[#E0B47F] mx-auto mt-3"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {whySpecialData.farmerPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden shadow-md border border-[#DCE5DE] flex flex-col group hover:border-[#82C79B] transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-[#2D4438]/90 text-white text-xs font-barlow font-bold px-3 py-1 rounded">
                  Pillar {idx + 1}
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bebas text-2xl tracking-wide leading-snug mb-3 text-[#2D4438]">
                    {pillar.title}
                  </h3>
                  <p className="font-barlow text-sm text-gray-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-bold text-[#355241] font-barlow">
                  <CheckCircle2 className="w-4 h-4 text-[#82C79B]" />
                  <span>Marangkai Cooperative Commitment</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== SECTION 2: WILLING TO MOVING FORWARD ===================== */}
      <section className="py-16 bg-[#EBF2EC] border-y border-[#D6E2D8]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#4D705C] font-barlow">
            SUSTAINABLE PROGRESS
          </span>
          <h2 className="font-bebas text-4xl sm:text-5xl text-[#2D4438] tracking-wider">
            {whySpecialData.movingForward.title}
          </h2>
          <p className="font-caladea text-xl sm:text-2xl text-[#4A6F57] italic leading-relaxed max-w-2xl mx-auto">
            "{whySpecialData.movingForward.desc}"
          </p>
        </div>
      </section>

      {/* ===================== SECTION 3: WE DO OUR HOMEWORK & RESEARCH ===================== */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-[#DCE5DE]">
              <img
                src={siteImages.agroforestrySoil}
                alt="Agroecology and Soil Research"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-xl shadow-lg border border-[#DCE5DE] hidden sm:block max-w-xs">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-[#E7EFE9] text-[#2D4438] rounded-lg">
                  <Beaker className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bebas text-base text-gray-900 tracking-wide">ORGANIC SOIL CARE</h4>
                  <p className="text-[11px] font-barlow text-gray-500">Zero synthetic chemical fertilizers</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#4D705C] font-barlow">
              AGROECOLOGICAL SCIENCE & RESEARCH
            </span>

            <h2 className="font-bebas text-4xl sm:text-5xl text-[#2D4438] tracking-wide leading-tight">
              {whySpecialData.researchSection.title}
            </h2>

            <h3 className="font-caladea text-xl sm:text-2xl text-[#4A6F57] italic">
              {whySpecialData.researchSection.subtitle}
            </h3>

            <p className="font-barlow text-base text-gray-700 leading-relaxed">
              {whySpecialData.researchSection.intro}
            </p>

            <div className="bg-white p-6 rounded-xl border border-[#DCE5DE] shadow-sm space-y-3">
              <div className="flex items-start gap-3">
                <Sprout className="w-5 h-5 text-[#82C79B] shrink-0 mt-0.5" />
                <p className="text-sm font-barlow text-gray-700 leading-relaxed">
                  {whySpecialData.researchSection.details}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SECTION 4: OUR COFFEE OUR PROUD! ===================== */}
      <section className="py-20 bg-[#2D4438] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="w-16 h-16 rounded-full bg-[#385343] text-[#E0B47F] flex items-center justify-center mx-auto border border-[#4C6F5A]">
            <Heart className="w-8 h-8" />
          </div>

          <h2 className="font-bebas text-4xl sm:text-6xl text-[#FAF6ED] tracking-wider">
            {whySpecialData.prideSection.title}
          </h2>

          <p className="font-caladea text-xl sm:text-3xl text-[#C4DFC9] italic leading-relaxed max-w-2xl mx-auto">
            "{whySpecialData.prideSection.desc}"
          </p>

          <div className="pt-6">
            <button
              onClick={() => onNavigate('store')}
              className="inline-flex items-center gap-2 bg-[#E0B47F] hover:bg-[#D4A36E] text-[#24372D] font-barlow font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg cursor-pointer transition-colors"
            >
              <span>DISCOVER MARANGKAI COFFEE NOW</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
