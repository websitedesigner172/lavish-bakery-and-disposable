import React, { useState } from 'react';
import { Coffee, Flame, Sparkles, MessageCircle } from 'lucide-react';
import { PRODUCTS, BUSINESS_INFO } from '../data/products';
import { ProductCard } from './ProductCard';
import { createWhatsappUrl } from '../utils/whatsapp';

export const CafeSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const cafeProducts = PRODUCTS.filter((p) => p.category === 'cafe');

  const filteredProducts = cafeProducts.filter((product) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'coffee') {
      return product.id.includes('coffee');
    }
    if (activeTab === 'shakes') {
      return product.id.includes('shake');
    }
    if (activeTab === 'cold') {
      return product.id.includes('cold-drinks');
    }
    return true;
  });

  const cafeWhatsappUrl = createWhatsappUrl(
    `Hello ${BUSINESS_INFO.name}, I would like to order café drinks / shakes for takeaway or dine-in.`
  );

  return (
    <section id="cafe" className="py-20 bg-[#faf7f2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#8c6d48] uppercase tracking-widest mb-2">
              <Coffee className="w-4 h-4 text-[#b8860b]" />
              <span>Café Bar &amp; Refreshment Lounge</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1c140d] tracking-tight">
              Coffee, Cold Drinks &amp; Shakes
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#695442] max-w-2xl leading-relaxed">
              Step into our cozy café bar right in Bonadialgam, Anantnag. Enjoy freshly brewed hot coffees, ice-cold frappes, luscious thick shakes, refreshing sodas, and energizing protein blends.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href={cafeWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#291d14] hover:bg-[#1c140d] text-[#e8ca84] font-semibold text-sm shadow-md transition-all active:scale-95"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Order Drinks on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Café Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="p-4 rounded-xl bg-white border border-[#ebdcc8] shadow-2xs">
            <h4 className="font-display text-sm font-bold text-[#1c140d]">Hot Coffee</h4>
            <p className="text-xs text-[#735b44] mt-1">Rich espresso, cappuccino &amp; creamy lattes.</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-[#ebdcc8] shadow-2xs">
            <h4 className="font-display text-sm font-bold text-[#1c140d]">Cold Drinks</h4>
            <p className="text-xs text-[#735b44] mt-1">Chilled carbonated refreshers &amp; citrus coolers.</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-[#ebdcc8] shadow-2xs">
            <h4 className="font-display text-sm font-bold text-[#1c140d]">Regular Shakes</h4>
            <p className="text-xs text-[#735b44] mt-1">Thick chocolate, strawberry, mango &amp; oreo shakes.</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-[#ebdcc8] shadow-2xs">
            <h4 className="font-display text-sm font-bold text-[#1c140d]">Protein Shakes</h4>
            <p className="text-xs text-[#735b44] mt-1">Post-workout whey blends for fitness recovery.</p>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
              activeTab === 'all'
                ? 'bg-[#1c140d] text-[#e8ca84] font-semibold shadow-sm'
                : 'bg-white text-[#5a483a] border border-[#d8c3ae] hover:bg-[#faf4ec]'
            }`}
          >
            All Beverages ({cafeProducts.length})
          </button>
          <button
            onClick={() => setActiveTab('coffee')}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
              activeTab === 'coffee'
                ? 'bg-[#1c140d] text-[#e8ca84] font-semibold shadow-sm'
                : 'bg-white text-[#5a483a] border border-[#d8c3ae] hover:bg-[#faf4ec]'
            }`}
          >
            Hot &amp; Iced Coffee
          </button>
          <button
            onClick={() => setActiveTab('shakes')}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
              activeTab === 'shakes'
                ? 'bg-[#1c140d] text-[#e8ca84] font-semibold shadow-sm'
                : 'bg-white text-[#5a483a] border border-[#d8c3ae] hover:bg-[#faf4ec]'
            }`}
          >
            Shakes (Regular &amp; Protein)
          </button>
          <button
            onClick={() => setActiveTab('cold')}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
              activeTab === 'cold'
                ? 'bg-[#1c140d] text-[#e8ca84] font-semibold shadow-sm'
                : 'bg-white text-[#5a483a] border border-[#d8c3ae] hover:bg-[#faf4ec]'
            }`}
          >
            Cold Drinks &amp; Coolers
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} theme="luxury" />
          ))}
        </div>

      </div>
    </section>
  );
};
