import React from 'react';
import { Sparkles, Calendar, MessageCircle, Heart, Users, CheckCircle2 } from 'lucide-react';
import { PRODUCTS, BUSINESS_INFO } from '../data/products';
import { ProductCard } from './ProductCard';
import { createWhatsappUrl } from '../utils/whatsapp';

export const WeddingEventsSection: React.FC = () => {
  const weddingProducts = PRODUCTS.filter((p) => p.category === 'wedding');

  const celebrationTypes = [
    { title: 'Weddings & Nikkah', desc: 'Grand Wazwan dining essentials, dastarkhwan rolls, gold sweet boxes & royal wedding cakes.' },
    { title: 'Engagement Ceremonies', desc: 'Luxury dry-fruit packaging hampers, ribboned sweet cases & celebration cake centerpieces.' },
    { title: 'Birthday Parties', desc: 'Theme party kits, decorative cake toppers, candle sets, balloon supplies & snack boxes.' },
    { title: 'Anniversaries', desc: 'Special celebration cakes, elegant dinnerware, champagne-style flutes & dessert platters.' },
    { title: 'Corporate Events & Seminars', desc: 'Individual mineral water bottles, sanitized cups, cutlery, toothpicks & executive snack packs.' },
    { title: 'Kitty Parties & High Teas', desc: 'Chic printed napkins, pastry trays, coffee stirrers, appetizer plates & dessert cups.' },
    { title: 'Family Get-Togethers', desc: 'Bulk compartmentalized buffet plates, foil rolls, cling wraps & heavy garbage bags.' },
    { title: 'Community Feasts & Functions', desc: 'Wholesale thermocol plates, bowls, large dastarkhwan sheets and reliable catering supplies.' },
  ];

  const weddingEnquiryUrl = createWhatsappUrl(
    `Hello ${BUSINESS_INFO.name}, I am organizing a wedding/event in Anantnag and need an estimate for bakery and disposable supplies.`
  );

  return (
    <section id="wedding" className="py-20 bg-[#1f160e] text-white relative overflow-hidden">
      {/* Golden Accents & Pattern background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.12),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(184,134,11,0.1),transparent_50%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#e5c479] uppercase tracking-widest mb-3 px-3 py-1 bg-[#2e2014] rounded-full border border-[#4a3523]">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Kashmir Weddings &amp; All Celebrations</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#faf7f2] tracking-tight">
            Wedding &amp; Event Essentials
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#d1beab] leading-relaxed">
            From royal Kashmiri wedding feasts (Wazwan) and Nikkah hampers to intimate kitty parties and corporate conferences, Lavish Bakery &amp; Disposables equips your special moments with elegance, convenience, and complete reliability.
          </p>
        </div>

        {/* Celebration Types Grid - Explicitly featuring all requested events */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {celebrationTypes.map((event, index) => (
            <div
              key={index}
              className="p-5 rounded-xl bg-[#291e13] border border-[#423120] hover:border-[#d4af37]/50 transition-colors group"
            >
              <div className="flex items-center gap-2 text-[#e5c479] mb-2">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
                <h4 className="font-display font-bold text-sm text-[#faf7f2] group-hover:text-[#e5c479] transition-colors">
                  {event.title}
                </h4>
              </div>
              <p className="text-xs text-[#b89b7e] leading-relaxed">
                {event.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Product Cards for Event Essentials */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#faf7f2]">
              Featured Event &amp; Ceremony Solutions
            </h3>
            <span className="text-xs text-[#d4af37] font-semibold tracking-wide">
              Anantnag Wholesale &amp; Retail
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {weddingProducts.map((product) => (
              <ProductCard key={product.id} product={product} theme="luxury" />
            ))}
          </div>
        </div>

        {/* Wedding Consultation / Checklist Box */}
        <div className="relative rounded-2xl p-8 bg-gradient-to-br from-[#2b1f14] to-[#1c140d] border border-[#523d29] shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#d4af37] uppercase tracking-wider">
              <Heart className="w-4 h-4" />
              <span>Full Event Packaging Checklist</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#faf7f2]">
              Planning Your Wedding or Big Function?
            </h3>
            <p className="text-sm text-[#c9b4a0] max-w-2xl leading-relaxed">
              Don’t let last-minute disposable runs or packaging shortages cause stress. We supply complete wedding packages: dastarkhwan rolls, hand tissues, thermocol plates, bowls, cups, spoons, water bottles, and gift boxes.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            <a
              href={weddingEnquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-md transition-all active:scale-95"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Plan Event on WhatsApp</span>
            </a>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#3b2a1a] hover:bg-[#4d3824] text-[#faf7f2] font-semibold text-sm border border-[#5a422b] transition-colors"
            >
              <span>Call: {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
