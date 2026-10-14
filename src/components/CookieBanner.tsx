import React from 'react';
import { X } from 'lucide-react';

interface CookieBannerProps {
  onAccept: () => void;
  onOpenDetails: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onAccept, onOpenDetails }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#2D4438]/95 text-white py-3.5 px-4 sm:px-6 shadow-2xl border-t border-[#3E5C4B] backdrop-blur-md animate-slideUp">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm font-barlow">
        <div className="flex items-center gap-2 text-center sm:text-left text-[#E6EFE8]">
          <span>
            We use cookies to ensure a smooth browsing experience. By continuing we assume you accept the use of cookies.
          </span>
          <button
            onClick={onOpenDetails}
            className="text-[#E0B47F] underline hover:text-[#F3CE9F] transition-colors ml-1 cursor-pointer font-medium"
          >
            Learn More
          </button>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onAccept}
            className="bg-[#82C79B] hover:bg-[#6EB888] text-[#1D3225] font-semibold text-xs uppercase tracking-wider px-5 py-2 rounded transition-all cursor-pointer shadow"
          >
            Accept
          </button>
          <button
            onClick={onAccept}
            className="text-[#AEC7B6] hover:text-white transition-colors p-1 cursor-pointer"
            aria-label="Dismiss cookie notice"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
