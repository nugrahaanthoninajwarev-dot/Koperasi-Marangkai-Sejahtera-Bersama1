import React from 'react';
import { Product } from '../types';
import { ShoppingBag, Eye, Award } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelect,
  onAddToCart,
}) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-[#DDE6E0] hover:border-[#82C79B] transition-all duration-300 hover:shadow-lg group flex flex-col h-full">
      {/* Product Image Area */}
      <div className="relative aspect-[4/3] bg-[#F2F5F2] overflow-hidden cursor-pointer" onClick={() => onSelect(product)}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transform transition-transform duration-300 ease-out group-hover:scale-[1.03]"
          loading="lazy"
        />

        {/* Process & Category Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
          <span className="bg-[#2D4438]/90 backdrop-blur-sm text-[#FAF6ED] text-[11px] font-barlow font-semibold uppercase px-2.5 py-1 rounded shadow-sm tracking-wider">
            {product.process}
          </span>
          <span className="bg-[#E0B47F] text-[#24372D] text-[10px] font-barlow font-bold uppercase px-2 py-0.5 rounded shadow-sm tracking-wider">
            {product.category}
          </span>
        </div>

        {/* Cupping Score Badge */}
        {product.cuppingScore && (
          <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full shadow flex items-center gap-1 border border-[#E2EBD5]">
            <Award className="w-3.5 h-3.5 text-[#D4A36E]" />
            <span className="text-xs font-bold text-[#34483C] font-barlow">
              {product.cuppingScore} SCA
            </span>
          </div>
        )}

        {/* Hover Quick Actions Overlay */}
        <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelect(product);
            }}
            className="p-3 bg-white text-[#2D4438] rounded-full hover:bg-[#E0B47F] hover:text-[#24372D] transition-colors shadow-lg cursor-pointer transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
            title="View Details"
          >
            <Eye className="w-5 h-5" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
            className="p-3 bg-[#82C79B] text-[#1E3025] rounded-full hover:bg-[#6DB888] transition-colors shadow-lg cursor-pointer transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
            title="Add to Cart"
          >
            <ShoppingBag className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Card Details */}
      <div className="p-5 flex flex-col flex-grow justify-between bg-white">
        <div>
          {/* Packaging Weight & Origin */}
          <div className="flex items-center justify-between text-xs text-gray-500 font-barlow mb-1.5">
            <span className="font-medium text-[#466954]">Pack {product.weight}</span>
            <span>Tapin, South Kalimantan</span>
          </div>

          {/* Product Name */}
          <h3
            onClick={() => onSelect(product)}
            className="font-bebas text-xl tracking-wide text-gray-900 group-hover:text-[#466954] transition-colors cursor-pointer line-clamp-1"
          >
            {product.name}
          </h3>

          {/* Tasting Notes Chips */}
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {product.flavorNotes.slice(0, 3).map((note, idx) => (
              <span
                key={idx}
                className="text-[11px] bg-[#EEF5F0] text-[#3D5A49] px-2 py-0.5 rounded font-barlow border border-[#DCE8DF]"
              >
                {note}
              </span>
            ))}
            {product.flavorNotes.length > 3 && (
              <span className="text-[11px] text-gray-400 font-barlow self-center">
                +{product.flavorNotes.length - 3} notes
              </span>
            )}
          </div>
        </div>

        {/* Price & Add to Cart button */}
        <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
          <div>
            <span className="block text-[11px] text-gray-400 uppercase font-barlow tracking-wider">Cooperative Price</span>
            <span className="font-bebas text-2xl tracking-wider text-[#2D4438] font-bold">
              {product.priceFormatted}
            </span>
          </div>

          <button
            onClick={() => onAddToCart(product)}
            className="inline-flex items-center gap-1.5 bg-[#2D4438] hover:bg-[#3D5B4B] text-white text-xs font-barlow font-bold uppercase tracking-wider px-3.5 py-2.5 rounded-lg transition-colors cursor-pointer shadow-sm"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-[#E0B47F]" />
            <span>ADD</span>
          </button>
        </div>
      </div>
    </div>
  );
};
