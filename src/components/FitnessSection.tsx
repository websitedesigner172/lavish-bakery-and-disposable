import React from 'react';
import { Dumbbell, ShieldAlert, Zap, MessageCircle, HeartPulse, CheckCircle2 } from 'lucide-react';
import { PRODUCTS, BUSINESS_INFO } from '../data/products';
import { ProductCard } from './ProductCard';
import { createWhatsappUrl } from '../utils/whatsapp';

export const FitnessSection: React.FC = () => {
  const fitnessItems = PRODUCTS.filter((p) => p.category === 'fitness');

  const foodItems = fitnessItems.filter((p) => !p.isSupplement);
  const supplementItems = fitnessItems.filter((p) => p.isSupplement);

  const fitnessOrderUrl = createWhatsappUrl(
    `Hello ${BUSINESS_INFO.name}, I would like to order fitness / protein foods (boiled eggs, chicken, trout, protein shake) from your Sports Stadium store.`
  );

  return (
    <section id="fitness" className="py-20 bg-[#0d1a12] text-white relative overflow-hidden">
      {/* Energetic Green Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.15),transparent_60%)] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tag & Sports Stadium Badge */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-700/60 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Dumbbell className="w-3.5 h-3.5 text-emerald-400" />
            <span>Right Near Sports Stadium, Bonadialgam</span>
          </div>

          {/* Fitness Slogan Prominently Displayed */}
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#faf7f2] tracking-tight mb-4">
            “Stay Fit. Eat Healthy. Feel Strong.”
          </h2>

          <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
            Fuel your active lifestyle with fresh, hygienically prepared protein meals. Whether you’re finishing a workout at the stadium or following a disciplined clean-eating regime, we prepare daily boiled eggs, lean boiled chicken breast, golden fried chicken, fresh Kashmiri fried trout fish, and post-workout protein shakes.
          </p>
        </div>

        {/* Nutritional Quality Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 text-left">
          <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/40">
            <span className="text-emerald-400 font-bold text-xs uppercase tracking-wide">Clean Sourcing</span>
            <h4 className="font-bold text-sm text-white mt-1">Farm Fresh Eggs</h4>
            <p className="text-xs text-emerald-200/70 mt-1">Boiled fresh to order, served with pink salt &amp; pepper.</p>
          </div>
          <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/40">
            <span className="text-emerald-400 font-bold text-xs uppercase tracking-wide">Lean Protein</span>
            <h4 className="font-bold text-sm text-white mt-1">Boiled Chicken</h4>
            <p className="text-xs text-emerald-200/70 mt-1">Tender skinless cuts prepared without heavy oils or fillers.</p>
          </div>
          <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/40">
            <span className="text-emerald-400 font-bold text-xs uppercase tracking-wide">Kashmir Fresh</span>
            <h4 className="font-bold text-sm text-white mt-1">Fried Trout Fish</h4>
            <p className="text-xs text-emerald-200/70 mt-1">High protein &amp; natural Omega-3 from cold mountain waters.</p>
          </div>
          <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/40">
            <span className="text-emerald-400 font-bold text-xs uppercase tracking-wide">Speed &amp; Convenience</span>
            <h4 className="font-bold text-sm text-white mt-1">Daily Pre-Order</h4>
            <p className="text-xs text-emerald-200/70 mt-1">WhatsApp your training schedule for fresh pickup on time.</p>
          </div>
        </div>

        {/* Food Section Grid */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <Zap className="w-5 h-5 text-emerald-400" />
              <span>Protein Foods &amp; Recovery Meals</span>
            </h3>
            <span className="text-xs text-emerald-300 font-medium hidden sm:inline">
              Hygienically Prepared On Order
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {foodItems.map((product) => (
              <ProductCard key={product.id} product={product} theme="fitness" />
            ))}
          </div>
        </div>

        {/* Creatine Supplement - Cleanly Separated as a Fitness Product, Not Food */}
        <div className="mt-12 pt-10 border-t border-emerald-900/60">
          <div className="max-w-4xl mx-auto bg-emerald-950/70 rounded-2xl p-6 sm:p-8 border border-emerald-700/50 shadow-xl">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-full md:w-1/3 aspect-4/3 rounded-xl overflow-hidden bg-black/40 shrink-0">
                <img
                  src={supplementItems[0]?.image || 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80'}
                  alt="Creatine Supplement at Lavish Bakery & Disposables"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 space-y-3 text-left">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-emerald-900/80 border border-emerald-700 text-emerald-300 text-xs font-semibold">
                  <span>Fitness Supplement Product</span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                  Creatine Monohydrate (Factory Sealed Packs)
                </h3>

                <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed">
                  Available in authentic manufacturer-sealed tubs for sports training and gym athletes. Stored under controlled dry conditions in our store.
                </p>

                {/* Responsible Disclaimer */}
                <div className="p-3 bg-emerald-900/30 rounded-lg border border-emerald-800/40 text-xs text-emerald-200/90 flex items-start gap-2">
                  <ShieldAlert className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <p>
                    <strong>Responsible Notice:</strong> Creatine is stocked strictly as a sealed fitness supplement product for adult sports enthusiasts and is not a food item. We do not provide medical or health guarantees. Consult your sports nutritionist or healthcare professional before taking supplements.
                  </p>
                </div>

                <div className="pt-2 flex items-center gap-3">
                  <a
                    href={createWhatsappUrl('Hello Lavish Bakery & Disposables, I would like to enquire about Creatine stock and pricing at your store in Anantnag.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm rounded-lg transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Enquire Creatine Availability</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Daily Meal Schedule Callout */}
        <div className="mt-12 text-center p-6 bg-emerald-950/40 rounded-xl border border-emerald-800/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-bold text-sm text-white">
              Daily Post-Workout Protein Pickups
            </h4>
            <p className="text-xs text-emerald-200/70 mt-0.5">
              Message us ahead of your gym or stadium session at <strong>{BUSINESS_INFO.formattedPhone}</strong> and have your hot boiled eggs, chicken, or trout ready without waiting.
            </p>
          </div>
          <a
            href={fitnessOrderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#25D366] text-white text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Pre-Order on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
