import React from 'react';
import { MessageCircle, Plus, Check } from 'lucide-react';
import { Product } from '../data/products';
import { createProductWhatsappUrl } from '../utils/whatsapp';
import { useEnquiry } from '../context/EnquiryContext';

interface ProductCardProps {
  product: Product;
  theme?: 'luxury' | 'fitness';
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, theme = 'luxury' }) => {
  const { addToEnquiry, items } = useEnquiry();
  const isInList = items.some((item) => item.product.id === product.id);

  const whatsappUrl = createProductWhatsappUrl(product.name, product.subCategory);

  const isFitness = theme === 'fitness';

  return (
    <div
      className={`group flex flex-col bg-white rounded-xl overflow-hidden border transition-all duration-300 hover:shadow-xl ${
        isFitness
          ? 'border-emerald-100 hover:border-emerald-300'
          : 'border-[#ebdcc8] hover:border-[#cba158]/60'
      }`}
    >
      {/* Product Image */}
      <div className="relative aspect-4/3 overflow-hidden bg-[#f5ede0]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {product.highlight && (
          <div className="absolute top-3 left-3 bg-[#1c140d]/85 text-white/95 text-xs font-semibold px-2.5 py-1 rounded backdrop-blur-sm tracking-wide">
            {product.highlight}
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Subcategory & Unit Hint - Unboxed typographic metadata */}
        <div className="flex items-center gap-1.5 text-xs text-[#8c6d48] font-medium tracking-wide uppercase mb-1.5">
          <span>{product.subCategory || 'Store Specialty'}</span>
          {product.unitHint && (
            <>
              <span aria-hidden="true" className="text-[#cba158]">·</span>
              <span className="text-[#6b5849] lowercase normal-case">{product.unitHint}</span>
            </>
          )}
        </div>

        {/* Product Title */}
        <h3 className="font-display text-lg font-bold text-[#1c140d] leading-snug group-hover:text-[#9d752c] transition-colors">
          {product.name}
        </h3>

        {/* Product Description */}
        <p className="mt-2 text-sm text-[#5a483a] leading-relaxed flex-1 line-clamp-3">
          {product.description}
        </p>

        {/* Dietary / Supplement Disclaimer if applicable */}
        {product.isSupplement && (
          <p className="mt-2 text-[11px] text-amber-800 bg-amber-50 p-2 rounded border border-amber-200">
            *Fitness supplement in sealed pack for adults. Not sold as a food item.
          </p>
        )}

        {/* Action Controls */}
        <div className="mt-5 pt-4 border-t border-[#f2e7d8] flex items-center gap-2">
          {/* Primary WhatsApp Enquiry Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-xs font-semibold text-white shadow-sm transition-all duration-200 active:scale-95 ${
              isFitness
                ? 'bg-emerald-700 hover:bg-emerald-800 focus:ring-2 focus:ring-emerald-500'
                : 'bg-[#291d14] hover:bg-[#1c140d] hover:text-[#e4be77] focus:ring-2 focus:ring-[#cba158]'
            }`}
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Enquire on WhatsApp</span>
          </a>

          {/* Quick Add to List Button */}
          <button
            type="button"
            onClick={() => addToEnquiry(product, 1)}
            title="Add to enquiry list"
            aria-label={`Add ${product.name} to enquiry list`}
            className={`p-2.5 rounded-lg border text-xs font-medium transition-colors flex items-center justify-center ${
              isInList
                ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
                : 'border-[#e0ceb9] hover:bg-[#faf4ec] text-[#4a392d]'
            }`}
          >
            {isInList ? (
              <Check className="w-4 h-4 text-emerald-600" />
            ) : (
              <Plus className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
