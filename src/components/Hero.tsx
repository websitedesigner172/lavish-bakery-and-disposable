import React from 'react';
import { MessageCircle, ArrowRight, Sparkles, MapPin, CheckCircle2, ShieldCheck, HeartPulse, PartyPopper } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';
import { createWhatsappUrl } from '../utils/whatsapp';

export const Hero: React.FC = () => {
  const whatsappHeroUrl = createWhatsappUrl(
    `Hello ${BUSINESS_INFO.name}, I would like to order and enquire about your products.`
  );

  return (
    <section id="hero" className="relative bg-[#1c140d] text-white overflow-hidden pt-8 pb-16 lg:py-24">
      {/* Background Subtle Gradient & Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(212,175,55,0.18),rgba(28,20,13,0))] pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#cba158]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-32 w-96 h-96 bg-[#16a34a]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Location & Distinction Kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2b1f14] border border-[#4d3723] text-xs text-[#e8ca84]">
              <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
              <span className="font-semibold tracking-wide">
                Bonadialgam, Anantnag · Near Sports Stadium
              </span>
            </div>

            {/* Business Name */}
            <div>
              <h2 className="text-xs sm:text-sm uppercase tracking-widest text-[#d4af37] font-semibold mb-1">
                Premier Destination in South Kashmir
              </h2>
              <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#faf7f2] tracking-tight leading-[1.15]">
                Lavish Bakery <span className="text-[#e2c178]">&amp; Disposables</span>
              </h1>
            </div>

            {/* Headline */}
            <p className="text-xl sm:text-2xl font-medium text-[#f0e4d7] leading-relaxed font-display">
              “Your One-Stop Shop for Bakery, Party Supplies &amp; Healthy Food.”
            </p>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#c9b4a0] max-w-2xl leading-relaxed">
              We bring together fresh artisan celebration cakes, complete disposable packaging supplies, wedding tableware essentials, refreshing café beverages, and wholesome protein-rich fitness foods. Serving families, celebrations, caterers, and gym enthusiasts across Anantnag with premium quality.
            </p>

            {/* Main Tagline */}
            <div className="p-3.5 rounded-xl bg-[#291d14]/70 border border-[#453221] text-xs sm:text-sm text-[#decbb7] flex items-center justify-center lg:justify-start gap-2.5">
              <Sparkles className="w-4 h-4 text-[#d4af37] shrink-0" />
              <span>
                <strong>Main Tagline:</strong> {BUSINESS_INFO.mainTagline}
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              {/* Button 1: Order on WhatsApp */}
              <a
                href={whatsappHeroUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-base shadow-lg shadow-[#25D366]/20 transition-all duration-200 active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
                <span>Order on WhatsApp</span>
              </a>

              {/* Button 2: Explore Our Products */}
              <a
                href="#bakery"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-[#362517] hover:bg-[#473220] text-[#faf7f2] font-semibold text-base border border-[#593f29] transition-all duration-200"
              >
                <span>Explore Our Products</span>
                <ArrowRight className="w-4 h-4 text-[#d4af37]" />
              </a>
            </div>

            {/* Quick trust metrics */}
            <div className="pt-4 border-t border-[#332316] grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div>
                <p className="text-xs text-[#b89b7e]">Celebration Cakes</p>
                <p className="font-bold text-sm text-[#faf7f2] mt-0.5">Freshly Baked</p>
              </div>
              <div>
                <p className="text-xs text-[#b89b7e]">Event Disposables</p>
                <p className="font-bold text-sm text-[#faf7f2] mt-0.5">Wholesale Stock</p>
              </div>
              <div>
                <p className="text-xs text-[#b89b7e]">Fitness Meals</p>
                <p className="font-bold text-sm text-[#34d399] mt-0.5">High Protein</p>
              </div>
              <div>
                <p className="text-xs text-[#b89b7e]">WhatsApp Orders</p>
                <p className="font-bold text-sm text-[#e2c178] mt-0.5">Quick Response</p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Collage Banner */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Outer Decorative Glow Border */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#d4af37]/40 via-[#b8860b]/20 to-[#10b981]/20 rounded-3xl blur-md opacity-70" />

              <div className="relative bg-[#261a10] rounded-2xl p-3 border border-[#4a3523] shadow-2xl">
                {/* Collage Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {/* Image 1: Designer Cake */}
                  <div className="relative rounded-xl overflow-hidden aspect-4/5 group">
                    <img
                      src="/src/assets/images/birthday_cake_1791816755660.jpg"
                      alt="Celebration Birthday Cakes at Lavish Bakery"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-[#e5c479] tracking-wider">Artisan Bakery</span>
                        <p className="text-xs font-bold text-white">Designer Cakes</p>
                      </div>
                    </div>
                  </div>

                  {/* Image 2: Wedding & Disposables */}
                  <div className="relative rounded-xl overflow-hidden aspect-4/5 group">
                    <img
                      src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=700&q=80"
                      alt="Wedding packaging & disposables"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-[#e5c479] tracking-wider">Events &amp; Feasts</span>
                        <p className="text-xs font-bold text-white">Disposables &amp; Boxes</p>
                      </div>
                    </div>
                  </div>

                  {/* Image 3: Shakes & Café */}
                  <div className="relative rounded-xl overflow-hidden aspect-4/5 group">
                    <img
                      src="https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=700&q=80"
                      alt="Café shakes and coffee"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-[#e5c479] tracking-wider">Café Bar</span>
                        <p className="text-xs font-bold text-white">Coffee &amp; Shakes</p>
                      </div>
                    </div>
                  </div>

                  {/* Image 4: Healthy Protein Food */}
                  <div className="relative rounded-xl overflow-hidden aspect-4/5 group">
                    <img
                      src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=700&q=80"
                      alt="Fresh trout fish & fitness protein"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider">Fitness Lifestyle</span>
                        <p className="text-xs font-bold text-white">Trout, Chicken &amp; Eggs</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Badge in Center */}
                <div className="mt-3 py-2 px-3 rounded-lg bg-[#140e09] border border-[#3b2a1c] flex items-center justify-between text-xs">
                  <span className="text-[#decbb7] flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
                    <span>Serving Bonadialgam &amp; All Anantnag</span>
                  </span>
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="text-[#e5c479] font-bold hover:underline"
                  >
                    7006738337
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
