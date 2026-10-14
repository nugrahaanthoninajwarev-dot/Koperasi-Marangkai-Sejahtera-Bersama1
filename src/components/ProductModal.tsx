import React, { useState } from 'react';
import { Product } from '../types';
import { X, ShoppingBag, Award, MapPin, Compass, ShieldCheck, Check, Trees, Sparkles, Sprout } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-gray-100 flex flex-col md:flex-row max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-gray-700 shadow hover:text-black transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image Column */}
        <div className="md:w-1/2 relative bg-[#F2F5F2] min-h-[260px] md:min-h-full">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
            <span className="bg-[#2D4438]/90 text-[#FAF6ED] text-xs font-barlow font-bold uppercase px-3 py-1 rounded shadow">
              {product.process}
            </span>
            <span className="bg-[#E0B47F] text-[#24372D] text-xs font-barlow font-bold uppercase px-3 py-1 rounded shadow">
              {product.category}
            </span>
          </div>
        </div>

        {/* Details Column */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="flex items-center gap-2 mb-1 text-xs font-barlow text-[#4A7059] font-semibold uppercase tracking-wider">
              <span>Koperasi Marangkai Sejahtera Bersama</span>
            </div>

            <h2 className="font-bebas text-2xl sm:text-3xl text-gray-900 leading-tight mb-2">
              {product.name}
            </h2>

            <div className="flex items-baseline gap-2 mb-4">
              <span className="font-bebas text-3xl text-[#2D4438] font-bold">
                {product.priceFormatted}
              </span>
              <span className="text-xs text-gray-500 font-barlow">
                / {product.weight}
              </span>
            </div>

            {/* Flavor Notes */}
            <div className="mb-5 bg-[#FAF7F0] p-3.5 rounded-xl border border-[#E5EDE5]">
              <span className="block text-xs font-bold text-gray-700 uppercase font-barlow mb-2 tracking-wider">
                Flavour Notes Profile:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {product.flavorNotes.map((note, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-[#EBF4ED] text-[#2E4E3A] px-2.5 py-1 rounded-md font-barlow font-medium border border-[#D5E5DA]"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>

            {/* Specifications */}
            <div className="space-y-2 text-xs font-barlow text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#D4A36E] shrink-0" />
                <span>
                  <strong>Cupping Score:</strong> {product.cuppingScore || '83.25'} SCA Standard
                </span>
              </div>
              {product.microLot && (
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#82C79B] shrink-0" />
                  <span>
                    <strong>Micro-Lot Order:</strong> {product.microLot}
                  </span>
                </div>
              )}
              {product.brixCount && (
                <div className="flex items-center gap-2">
                  <Sprout className="w-4 h-4 text-[#4A7059] shrink-0" />
                  <span>
                    <strong>Cherry Brix Count:</strong> {product.brixCount}
                  </span>
                </div>
              )}
              {product.soilType && (
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[#4A7059] shrink-0" />
                  <span>
                    <strong>Soil Type & Shade:</strong> {product.soilType} ({product.shadeDensity || '60%-90%'} shade)
                  </span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#4A7059] shrink-0" />
                <span>
                  <strong>Single Origin:</strong> {product.origin}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#4A7059] shrink-0" />
                <span>
                  <strong>Botanical Variety:</strong> {product.variety}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs text-gray-600 font-barlow leading-relaxed mb-6">
              {product.description}
            </p>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-gray-100 flex items-center gap-4">
            {/* Quantity Controller */}
            <div className="flex items-center border border-[#D5E1D8] rounded-lg overflow-hidden bg-[#F6FAF7]">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-2 text-gray-600 hover:bg-[#EAF1EC] transition-colors font-bold cursor-pointer"
              >
                -
              </button>
              <span className="px-3 py-2 text-xs font-bold text-gray-800 font-barlow min-w-[28px] text-center">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-2 text-gray-600 hover:bg-[#EAF1EC] transition-colors font-bold cursor-pointer"
              >
                +
              </button>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAdd}
              disabled={added}
              className={`flex-grow py-3 px-4 rounded-lg font-barlow font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow ${
                added
                  ? 'bg-[#76B88F] text-white'
                  : 'bg-[#2D4438] hover:bg-[#3B5A49] text-white'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>ADDED TO CART!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4 text-[#E0B47F]" />
                  <span>ADD TO CART</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
