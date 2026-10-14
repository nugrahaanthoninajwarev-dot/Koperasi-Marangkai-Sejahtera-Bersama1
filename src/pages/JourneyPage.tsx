import React, { useState } from 'react';
import { PageId } from '../types';
import { journeyChapters } from '../data/story';
import { ArrowRight, BookOpen, ChevronRight, X } from 'lucide-react';

interface JourneyPageProps {
  onNavigate: (page: PageId) => void;
}

export const JourneyPage: React.FC<JourneyPageProps> = ({ onNavigate }) => {
  const [selectedChapterId, setSelectedChapterId] = useState<string | null>(null);

  const activeChapter = journeyChapters.find((c) => c.id === selectedChapterId);

  return (
    <div className="min-h-screen bg-[#F7F5EE]">
      {/* Header Banner */}
      <section className="bg-[#2D4438] text-white py-20 px-4 sm:px-6 lg:px-8 border-b border-[#3D5A4A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="w-full h-full bg-[radial-gradient(#82C79B_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#385343] text-[#E0B47F] text-xs font-barlow font-bold uppercase tracking-widest border border-[#4C6F5A]">
            <BookOpen className="w-3.5 h-3.5" />
            <span>KOPERASI MARANGKAI SEJAHTERA BERSAMA</span>
          </div>

          <h1 className="font-bebas text-4xl sm:text-6xl md:text-7xl tracking-wider text-[#FAF6ED] leading-tight">
            COFFEE EXCELSA: THE LOST TREASURE OF MERATUS
          </h1>

          <p className="font-caladea text-lg sm:text-2xl text-[#C4DFC9] italic max-w-2xl mx-auto leading-relaxed">
            "excelsa was'nt a new coffee in meratus. our work was a great leap forward for excelsa tapin"
          </p>
        </div>
      </section>

      {/* Narrative Chapters Section */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {journeyChapters.map((chapter, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={chapter.id}
                className={`flex flex-col ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-10 lg:gap-14 items-center`}
              >
                {/* Chapter Visual */}
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#DCE5DE] group">
                    <img
                      src={chapter.image}
                      alt={chapter.title}
                      className="w-full h-[360px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-[#2D4438]/90 text-[#FAF6ED] text-xs font-barlow font-bold uppercase px-3 py-1.5 rounded shadow">
                      {chapter.tag}
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded text-xs font-barlow">
                      Chapter {index + 1} of {journeyChapters.length}
                    </div>
                  </div>
                </div>

                {/* Chapter Text */}
                <div className="w-full lg:w-1/2 space-y-5">
                  <span className="text-xs font-bold text-[#4D705C] tracking-widest uppercase font-barlow block">
                    CHAPTER {index + 1}
                  </span>

                  <h2 className="font-bebas text-3xl sm:text-4xl text-[#2D4438] tracking-wide leading-tight">
                    {chapter.title}
                  </h2>

                  {chapter.subtitle && (
                    <h4 className="font-caladea text-base sm:text-lg text-[#4A6F57] italic">
                      {chapter.subtitle}
                    </h4>
                  )}

                  <p className="font-barlow text-base text-gray-700 leading-relaxed">
                    {chapter.content}
                  </p>

                  <div className="pt-2">
                    <button
                      onClick={() => setSelectedChapterId(chapter.id)}
                      className="inline-flex items-center gap-2 bg-[#2D4438] hover:bg-[#3D5B4A] text-white font-barlow font-semibold text-xs uppercase tracking-wider px-5 py-3 rounded-lg shadow-sm hover:shadow transition-all cursor-pointer"
                    >
                      <span>Read More</span>
                      <ChevronRight className="w-4 h-4 text-[#E0B47F]" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Historical Milestones Timeline */}
      <section className="py-20 bg-[#EBF2EC] border-t border-[#D6E2D8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-[#4D705C] font-bold font-barlow">
              HISTORICAL MILESTONES
            </span>
            <h2 className="font-bebas text-4xl text-[#2D4438] tracking-wider mt-1">
              CHRONOLOGY OF MERATUS EXCELSA
            </h2>
            <p className="text-sm font-barlow text-gray-600 mt-2">
              The transformative journey of Excelsa coffee across the Meratus Mountain foothills in Tapin Regency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-[#DCE5DE] shadow-sm hover:border-[#82C79B] transition-colors">
              <span className="font-bebas text-3xl text-[#3D5E4A] block">LATE 19TH CENTURY</span>
              <h4 className="font-bold text-sm text-gray-900 font-barlow mt-1">Colonial Introduction</h4>
              <p className="text-xs text-gray-600 font-barlow mt-2 leading-relaxed">
                Introduced by Dutch agronomists, Excelsa naturalized readily in the limestone karst hills of Meratus before falling silent for decades.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#DCE5DE] shadow-sm hover:border-[#82C79B] transition-colors">
              <span className="font-bebas text-3xl text-[#3D5E4A] block">1970S - 2011 ERA</span>
              <h4 className="font-bold text-sm text-gray-900 font-barlow mt-1">Transmigration & Early Cultivation</h4>
              <p className="text-xs text-gray-600 font-barlow mt-2 leading-relaxed">
                Integrated into smallholder backyard forest plots by settling communities, resilient yet lacking commercial market pathways.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#DCE5DE] shadow-sm hover:border-[#82C79B] transition-colors">
              <span className="font-bebas text-3xl text-[#D4A36E] block">2018 - 2023</span>
              <h4 className="font-bold text-sm text-gray-900 font-barlow mt-1">The Gear Five Era</h4>
              <p className="text-xs text-gray-600 font-barlow mt-2 leading-relaxed">
                Formal establishment of Koperasi Marangkai Sejahtera Bersama, large-scale agroforestry adoption, and quality standardization.
              </p>
            </div>

            <div className="bg-[#FAF2E6] p-6 rounded-xl border border-[#E0B47F] shadow-sm">
              <span className="font-bebas text-3xl text-[#D4A36E] block">PRESENT (2024 - 2026)</span>
              <h4 className="font-bold text-sm text-gray-900 font-barlow mt-1">Japan Export MoU & SCA 83.25</h4>
              <p className="text-xs text-gray-600 font-barlow mt-2 leading-relaxed">
                Official cupping score 83.25 and direct export MoU to Japan, certifying Tapin Excelsa as a world-class specialty origin.
              </p>
            </div>
          </div>

          <div className="mt-14 text-center">
            <button
              onClick={() => onNavigate('why-our-excelsa-special')}
              className="inline-flex items-center gap-2 bg-[#E0B47F] hover:bg-[#D4A36E] text-[#24372D] font-barlow font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-lg shadow cursor-pointer transition-colors"
            >
              <span>EXPLORE WHY OUR EXCELSA IS SPECIAL</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Read More Modal */}
      {activeChapter && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl border border-gray-100 max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setSelectedChapterId(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold text-[#4D705C] uppercase tracking-widest font-barlow">
              KOPERASI MARANGKAI ARCHIVE
            </span>

            <h3 className="font-bebas text-3xl text-gray-900 mt-1 mb-2">
              {activeChapter.title}
            </h3>

            {activeChapter.subtitle && (
              <p className="font-caladea italic text-gray-600 text-base mb-4">
                {activeChapter.subtitle}
              </p>
            )}

            <div className="mb-6 rounded-xl overflow-hidden">
              <img
                src={activeChapter.image}
                alt={activeChapter.title}
                className="w-full h-52 object-cover"
              />
            </div>

            <p className="font-barlow text-sm text-gray-700 leading-relaxed mb-5">
              {activeChapter.content}
            </p>

            {activeChapter.moreDetails && (
              <div className="bg-[#F7F5EE] p-4 rounded-xl border border-[#DCE5DE] space-y-2.5">
                <h5 className="font-bold text-xs uppercase tracking-wider text-[#2D4438] font-barlow">
                  In-Depth Documentation:
                </h5>
                <ul className="space-y-2 text-xs font-barlow text-gray-700">
                  {activeChapter.moreDetails.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#82C79B] font-bold mt-0.5">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-6 text-right">
              <button
                onClick={() => setSelectedChapterId(null)}
                className="px-5 py-2.5 bg-[#2D4438] text-white rounded-lg text-xs font-barlow font-bold uppercase tracking-wider hover:bg-[#3D5B4A] cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
