import React, { useState } from 'react';
import { Cake, Sparkles, MessageCircle, HeartHandshake } from 'lucide-react';
import { PRODUCTS, BUSINESS_INFO } from '../data/products';
import { ProductCard } from './ProductCard';
import { CakeModal } from './CakeModal';
import { createWhatsappUrl } from '../utils/whatsapp';

export const BakerySection: React.FC = () => {
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('All');
  const [isCakeModalOpen, setIsCakeModalOpen] = useState(false);

  const bakeryProducts = PRODUCTS.filter((p) => p.category === 'bakery');

  const subCategories = ['All', 'Cakes', 'Pastries', 'Breads & Buns', 'Traditional', 'Cookies'];

  const filteredProducts = selectedSubCategory === 'All'
    ? bakeryProducts
    : bakeryProducts.filter((p) => p.subCategory === selectedSubCategory);

  const customCakeWhatsapp = createWhatsappUrl(
    `Hello ${BUSINESS_INFO.name}, I would like to consult with you for a custom celebration cake.`
  );

  return (
    <section id="bakery" className="py-20 bg-[#faf7f2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#8c6d48] uppercase tracking-widest mb-2">
              <Cake className="w-4 h-4 text-[#d4af37]" />
              <span>Handcrafted Confectionery &amp; Oven Delights</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1c140d] tracking-tight">
              Fresh Artisan Bakery &amp; Celebration Cakes
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#695442] max-w-2xl leading-relaxed">
              Every celebration in Kashmir deserves an exquisite centerpiece. We prepare fresh cakes and bakery treats for birthdays, anniversaries, weddings, Nikkah ceremonies, and family tea gatherings.
            </p>
          </div>

          {/* Quick Action Button for Custom Cake */}
          <div className="shrink-0 flex items-center gap-3">
            <button
              onClick={() => setIsCakeModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#291d14] hover:bg-[#1c140d] text-[#e8ca84] font-semibold text-sm shadow-md transition-all duration-200 active:scale-95"
            >
              <Sparkles className="w-4 h-4 text-[#d4af37]" />
              <span>Book Custom Cake</span>
            </button>
          </div>
        </div>

        {/* Occasion Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="p-4 rounded-xl bg-white border border-[#ebdcc8] shadow-2xs">
            <h4 className="font-display text-sm font-bold text-[#1c140d]">Birthday Cakes</h4>
            <p className="text-xs text-[#735b44] mt-1">Chocolate truffle, butterscotch &amp; custom photo designs.</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-[#ebdcc8] shadow-2xs">
            <h4 className="font-display text-sm font-bold text-[#1c140d]">Weddings &amp; Nikkah</h4>
            <p className="text-xs text-[#735b44] mt-1">Multi-tier royal wedding celebration cakes.</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-[#ebdcc8] shadow-2xs">
            <h4 className="font-display text-sm font-bold text-[#1c140d]">Anniversaries</h4>
            <p className="text-xs text-[#735b44] mt-1">Heart shapes, red velvet &amp; fresh fruit confections.</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-[#ebdcc8] shadow-2xs">
            <h4 className="font-display text-sm font-bold text-[#1c140d]">Daily Bakery</h4>
            <p className="text-xs text-[#735b44] mt-1">Soft milk breads, Kashmiri kulchas &amp; flaky puff patties.</p>
          </div>
        </div>

        {/* Interactive Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {subCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedSubCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                selectedSubCategory === cat
                  ? 'bg-[#1c140d] text-[#e8ca84] shadow-sm font-semibold'
                  : 'bg-white text-[#5a483a] border border-[#e5d6c3] hover:bg-[#f5ede0]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} theme="luxury" />
          ))}
        </div>

        {/* Bakery Banner / Custom Order Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#24190f] text-white border border-[#402e1d] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#d4af37] tracking-wider uppercase">
              <HeartHandshake className="w-4 h-4" />
              <span>Special Orders &amp; Occasions</span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#faf7f2]">
              Planning a Birthday or Wedding in Anantnag?
            </h3>
            <p className="text-xs sm:text-sm text-[#c9b4a0] max-w-xl">
              We customize tier designs, flavors, colors, and cake inscriptions according to your celebration theme. Chat directly with our baking team to finalize details.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={() => setIsCakeModalOpen(true)}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#d4af37] hover:bg-[#c29e2e] text-[#1c140d] font-bold text-xs sm:text-sm shadow-md transition-colors"
            >
              Customize Cake Online
            </button>
            <a
              href={customCakeWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm shadow-md transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>

      </div>

      {/* Custom Cake Modal */}
      <CakeModal isOpen={isCakeModalOpen} onClose={() => setIsCakeModalOpen(false)} />
    </section>
  );
};
