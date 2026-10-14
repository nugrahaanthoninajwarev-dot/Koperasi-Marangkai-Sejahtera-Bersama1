import React from 'react';
import { X, Shield, Check } from 'lucide-react';

interface CookieModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAccept: () => void;
}

export const CookieModal: React.FC<CookieModalProps> = ({ isOpen, onClose, onAccept }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl border border-gray-100">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2.5 text-[#4E725D] mb-2">
          <Shield className="w-5 h-5" />
          <span className="font-bebas text-xl tracking-wider text-[#2D4438]">
            COOKIE & PRIVACY POLICY
          </span>
        </div>

        <h3 className="font-bebas text-2xl text-gray-900 mb-3">
          KOPERASI MARANGKAI SEJAHTERA BERSAMA
        </h3>

        <div className="space-y-3 text-xs font-barlow text-gray-600 leading-relaxed max-h-60 overflow-y-auto pr-2 mb-6">
          <p>
            This website utilizes essential cookies to ensure an optimal browsing experience, including remembering page preferences, managing your coffee shopping cart, and optimizing navigation performance.
          </p>
          <p>
            We do not sell personal browsing data to third parties. We deeply value the trust and privacy of coffee connoisseurs, roastery partners, and member farmers of Koperasi Marangkai Sejahtera Bersama.
          </p>
          <p>
            By clicking "Accept All", you agree to the use of functional cookies in accordance with standard digital privacy practices.
          </p>
        </div>

        <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-barlow text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
          >
            Close
          </button>
          <button
            onClick={() => {
              onAccept();
              onClose();
            }}
            className="px-5 py-2.5 bg-[#2D4438] hover:bg-[#3D5B4A] text-white rounded-lg text-xs font-barlow font-bold uppercase tracking-wider flex items-center gap-1.5 shadow cursor-pointer"
          >
            <Check className="w-4 h-4 text-[#E0B47F]" />
            <span>Accept & Continue</span>
          </button>
        </div>
      </div>
    </div>
  );
};
