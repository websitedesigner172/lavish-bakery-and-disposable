import React, { useState } from 'react';
import { Package, Truck, Layers, MessageCircle, Boxes } from 'lucide-react';
import { PRODUCTS, BUSINESS_INFO } from '../data/products';
import { ProductCard } from './ProductCard';
import { createWhatsappUrl } from '../utils/whatsapp';

export const DisposablesSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const disposableProducts = PRODUCTS.filter((p) => p.category === 'disposables');

  const filteredProducts = disposableProducts.filter((product) => {
    if (filter === 'all') return true;
    if (filter === 'dining') {
      return ['disp-thermocol-plates', 'disp-toothpicks', 'disp-straws-stirrers', 'disp-water-bottles'].includes(product.id);
    }
    if (filter === 'packaging') {
      return ['disp-sweet-boxes', 'disp-cake-boxes', 'disp-popcorn-boxes'].includes(product.id);
    }
    if (filter === 'kitchen') {
      return ['disp-cling-foil', 'disp-disposable-gloves', 'disp-garbage-bags'].includes(product.id);
    }
    return true;
  });

  const bulkWhatsappUrl = createWhatsappUrl(
    `Hello ${BUSINESS_INFO.name}, I would like to enquire about bulk disposables & packaging supplies for an upcoming event in Anantnag.`
  );

  return (
    <section id="disposables" className="py-20 bg-[#f5ede0] border-t border-b border-[#ebdcc8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#8c6d48] uppercase tracking-widest mb-2">
              <Boxes className="w-4 h-4 text-[#b8860b]" />
              <span>Event, Banquet &amp; Daily Packaging Supplies</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1c140d] tracking-tight">
              Disposable Items &amp; Packaging Catalog
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#695442] max-w-2xl leading-relaxed">
              Wholesale and retail disposables for households, caterers, restaurant kitchens, school canteens, and grand wedding banquets. From sturdy thermocol tableware to premium sweet and cake boxes.
            </p>
          </div>

          {/* Bulk Event Order Button */}
          <div className="shrink-0">
            <a
              href={bulkWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#1c140d] hover:bg-black text-[#e8ca84] font-semibold text-sm shadow-md transition-all duration-200"
            >
              <Truck className="w-4 h-4 text-[#d4af37]" />
              <span>Bulk / Event Enquiry</span>
            </a>
          </div>
        </div>

        {/* Feature Badges for Catering */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <div className="bg-white/80 backdrop-blur-xs p-4 rounded-xl border border-[#decbb7] flex items-start gap-3">
            <Package className="w-5 h-5 text-[#b8860b] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-[#1c140d]">All 10 Essential Categories</h4>
              <p className="text-xs text-[#735b44] mt-0.5">Water bottles, foils, thermocol plates, sweet &amp; cake boxes, hygiene gloves &amp; garbage bags.</p>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-xs p-4 rounded-xl border border-[#decbb7] flex items-start gap-3">
            <Truck className="w-5 h-5 text-[#b8860b] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-[#1c140d]">Wholesale &amp; Retail Available</h4>
              <p className="text-xs text-[#735b44] mt-0.5">Order small packs for family dinners or bulk cartons for community gatherings &amp; feasts.</p>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-xs p-4 rounded-xl border border-[#decbb7] flex items-start gap-3">
            <Layers className="w-5 h-5 text-[#b8860b] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-[#1c140d]">Food-Grade &amp; Sturdy Quality</h4>
              <p className="text-xs text-[#735b44] mt-0.5">Durable materials built to prevent spills and keep banquet food hot and fresh.</p>
            </div>
          </div>
        </div>

        {/* Interactive Filter Control */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
              filter === 'all'
                ? 'bg-[#1c140d] text-[#e8ca84] font-semibold shadow-sm'
                : 'bg-white text-[#5a483a] border border-[#d8c3ae] hover:bg-[#faf4ec]'
            }`}
          >
            All Disposable Supplies ({disposableProducts.length})
          </button>
          <button
            onClick={() => setFilter('dining')}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
              filter === 'dining'
                ? 'bg-[#1c140d] text-[#e8ca84] font-semibold shadow-sm'
                : 'bg-white text-[#5a483a] border border-[#d8c3ae] hover:bg-[#faf4ec]'
            }`}
          >
            Dining Tableware &amp; Drinkware
          </button>
          <button
            onClick={() => setFilter('packaging')}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
              filter === 'packaging'
                ? 'bg-[#1c140d] text-[#e8ca84] font-semibold shadow-sm'
                : 'bg-white text-[#5a483a] border border-[#d8c3ae] hover:bg-[#faf4ec]'
            }`}
          >
            Sweet, Cake &amp; Snack Boxes
          </button>
          <button
            onClick={() => setFilter('kitchen')}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
              filter === 'kitchen'
                ? 'bg-[#1c140d] text-[#e8ca84] font-semibold shadow-sm'
                : 'bg-white text-[#5a483a] border border-[#d8c3ae] hover:bg-[#faf4ec]'
            }`}
          >
            Kitchen Rolls &amp; Hygiene
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} theme="luxury" />
          ))}
        </div>

        {/* Catalog Ordering Guide */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-[#e0ceb9] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-xl font-bold text-[#1c140d]">
              Need Exact Quantities for Your Upcoming Function?
            </h3>
            <p className="mt-1 text-sm text-[#695442]">
              Send your guest count and required item list via WhatsApp. We will promptly share wholesale availability and bundle offers.
            </p>
          </div>
          <a
            href={bulkWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-md transition-all active:scale-95"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Send List on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
