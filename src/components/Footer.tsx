import React from 'react';
import { PageId } from '../types';
import { siteImages } from '../assets/images';
import { MapPin, Mail, Phone, ExternalLink, Award, Leaf, ShieldCheck, Briefcase } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenCookies: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenCookies }) => {
  return (
    <footer className="bg-[#24372D] text-[#DCE8DF] border-t border-[#344E3F]">
      {/* Top Value Banner */}
      <div className="border-b border-[#344E3F] bg-[#1E3025] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="p-3 bg-[#2D4438] rounded-full text-[#E0B47F]">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bebas text-lg tracking-wider text-[#FAF6ED]">CUPPING SCORE 83.25</h4>
              <p className="text-xs text-[#BDD7C4] font-barlow">Certified Specialty Grade Excelsa from Tapin</p>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="p-3 bg-[#2D4438] rounded-full text-[#82C79B]">
              <Leaf className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bebas text-lg tracking-wider text-[#FAF6ED]">ADAPTIVE AGROFORESTRY</h4>
              <p className="text-xs text-[#BDD7C4] font-barlow">Native Forest Conservation in Meratus Mountains</p>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="p-3 bg-[#2D4438] rounded-full text-[#E0B47F]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bebas text-lg tracking-wider text-[#FAF6ED]">EXPORT QUALITY MOU</h4>
              <p className="text-xs text-[#BDD7C4] font-barlow">Bilateral Direct Trade Partnership with Japan</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Cooperative Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-[#D4A36E] bg-white shrink-0 shadow-xs">
                <img
                  src={siteImages.logo}
                  alt="Koperasi Marangkai Sejahtera Bersama Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bebas text-xl tracking-wider text-[#FAF6ED] leading-tight">
                KOPERASI MARANGKAI SEJAHTERA BERSAMA
              </h3>
            </div>
            <p className="font-barlow text-sm text-[#BDD7C4] leading-relaxed">
              Smallholder coffee producer cooperative in Tapin Regency, South Kalimantan. Guarding the botanical heritage of the Meratus Mountains through sustainable agroforestry and transparent direct trade.
            </p>
            <div className="pt-2">
              <span className="inline-block px-2.5 py-1 text-xs rounded bg-[#2D4438] text-[#82C79B] font-barlow font-medium">
                Registered Agricultural Producer Cooperative
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bebas text-lg tracking-wider text-[#FAF6ED] mb-4 pb-1 border-b border-[#3D5A4A] inline-block">
              NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-sm font-barlow">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#E0B47F] transition-colors cursor-pointer text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('the-journey')}
                  className="hover:text-[#E0B47F] transition-colors cursor-pointer text-left"
                >
                  The Journey (History & Ecology)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('why-our-excelsa-special')}
                  className="hover:text-[#E0B47F] transition-colors cursor-pointer text-left"
                >
                  Why Special (Terroir & Flavours)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('portfolio')}
                  className="hover:text-[#E0B47F] transition-colors cursor-pointer text-left font-medium text-[#E0B47F]"
                >
                  Portfolio & Achievements
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('company-profile')}
                  className="hover:text-[#E0B47F] transition-colors cursor-pointer text-left font-medium"
                >
                  Company Profile & Governance
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('store')}
                  className="hover:text-[#E0B47F] transition-colors cursor-pointer text-left"
                >
                  Store (Green Beans & Roasted)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact-us')}
                  className="hover:text-[#E0B47F] transition-colors cursor-pointer text-left"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div>
            <h4 className="font-bebas text-lg tracking-wider text-[#FAF6ED] mb-4 pb-1 border-b border-[#3D5A4A] inline-block">
              CONTACT & LOCATION
            </h4>
            <ul className="space-y-3.5 text-sm font-barlow text-[#BDD7C4]">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#E0B47F] shrink-0 mt-0.5" />
                <span>Burakai Village, Hatungun District, Tapin Regency, South Kalimantan 71181, Indonesia</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#E0B47F] shrink-0" />
                <a
                  href="mailto:marangkaisejahterabersama@gmail.com"
                  className="hover:text-[#E0B47F] transition-colors break-all"
                >
                  marangkaisejahterabersama@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#E0B47F] shrink-0 mt-0.5" />
                <div className="space-y-1 text-xs">
                  <a
                    href="https://wa.me/6289690571731"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#E0B47F] transition-colors block"
                  >
                    +62 896-9057-1731 (WhatsApp)
                  </a>
                  <a
                    href="https://wa.me/6281223741112"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#E0B47F] transition-colors block"
                  >
                    081223741112 (Phone / WA)
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Slogan & Mission */}
          <div className="bg-[#2D4438] p-5 rounded-xl border border-[#3E5C4B]">
            <h4 className="font-caladea text-base italic text-[#FAF6ED] mb-2">
              "A Cup of Coffee, A Tale From Meratus"
            </h4>
            <p className="text-xs font-barlow text-[#BDD7C4] mb-4 leading-relaxed">
              Take the coffee, keep Meratus in the story. Direct partnerships with smallholder farmers guaranteeing living wages, world-class bean quality, and ecological preservation.
            </p>
            <div className="pt-2 border-t border-[#3E5C4B]">
              <a
                href="https://koperasimarangkaisejahterabersama.mystrikingly.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#BDD7C4] hover:text-[#E0B47F] transition-colors font-barlow"
              >
                <span>Original Strikingly Site</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="mt-12 pt-8 border-t border-[#344E3F] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-barlow text-[#A3BEAB]">
          <div>
            © {new Date().getFullYear()} Koperasi Marangkai Sejahtera Bersama. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={onOpenCookies}
              className="hover:text-[#FAF6ED] transition-colors underline cursor-pointer"
            >
              Cookie Policy
            </button>
            <button
              onClick={() => onNavigate('contact-us')}
              className="hover:text-[#FAF6ED] transition-colors underline cursor-pointer"
            >
              Contact Officers
            </button>
            <span>Tapin Regency • South Kalimantan</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
