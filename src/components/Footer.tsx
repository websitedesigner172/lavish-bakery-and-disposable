import React from 'react';
import { MapPin, Phone, MessageCircle, Heart, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';
import { createWhatsappUrl } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#120c08] text-[#c9b4a0] border-t border-[#2d1e12]">
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#d4af37] text-[#1c140d] font-bold text-xl flex items-center justify-center">
                L
              </div>
              <span className="font-display text-xl font-bold text-[#faf7f2]">
                {BUSINESS_INFO.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#e2c178] font-medium leading-relaxed font-display">
              {BUSINESS_INFO.mainTagline}
            </p>

            <p className="text-xs text-[#a38c76] leading-relaxed">
              Your premier one-stop store in Bonadialgam, Anantnag for fresh celebration cakes, bulk wedding and event disposables, café beverages, and wholesome fitness protein food.
            </p>

            <div className="pt-2">
              <a
                href={createWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#25D366] text-white text-xs font-bold hover:bg-[#20ba59] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Contact Us on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero" className="hover:text-[#e8ca84] transition-colors">Home</a>
              </li>
              <li>
                <a href="#bakery" className="hover:text-[#e8ca84] transition-colors">Bakery &amp; Cakes</a>
              </li>
              <li>
                <a href="#disposables" className="hover:text-[#e8ca84] transition-colors">Disposable Items</a>
              </li>
              <li>
                <a href="#wedding" className="hover:text-[#e8ca84] transition-colors">Wedding &amp; Events</a>
              </li>
              <li>
                <a href="#cafe" className="hover:text-[#e8ca84] transition-colors">Café &amp; Shakes</a>
              </li>
              <li>
                <a href="#fitness" className="hover:text-[#e8ca84] transition-colors">Fitness Food</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#e8ca84] transition-colors">Store &amp; Location</a>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">
              Product Categories
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#bakery" className="hover:text-[#e8ca84] transition-colors">Celebration Designer Cakes</a>
              </li>
              <li>
                <a href="#disposables" className="hover:text-[#e8ca84] transition-colors">Thermocol Plates &amp; Meal Trays</a>
              </li>
              <li>
                <a href="#disposables" className="hover:text-[#e8ca84] transition-colors">Sweet Boxes &amp; Cake Boxes</a>
              </li>
              <li>
                <a href="#disposables" className="hover:text-[#e8ca84] transition-colors">Aluminium Foils &amp; Cling Wraps</a>
              </li>
              <li>
                <a href="#disposables" className="hover:text-[#e8ca84] transition-colors">Garbage Bags &amp; Hygiene Gloves</a>
              </li>
              <li>
                <a href="#cafe" className="hover:text-[#e8ca84] transition-colors">Coffee &amp; Thick Milkshakes</a>
              </li>
              <li>
                <a href="#fitness" className="hover:text-[#e8ca84] transition-colors">Boiled Eggs, Chicken &amp; Trout</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">
              Store Contact
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#d4af37] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:underline font-bold text-white">
                  {BUSINESS_INFO.formattedPhone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={createWhatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-[#25D366] font-bold"
                >
                  WhatsApp: 7006738337
                </a>
              </div>
              <div className="pt-2 text-[11px] text-[#8f7966]">
                <p>Near Sports Stadium, Bonadialgam</p>
                <p>Anantnag, Jammu &amp; Kashmir</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Copyright */}
        <div className="mt-14 pt-8 border-t border-[#26190f] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8c745f]">
          <p>© 2026 Lavish Bakery &amp; Disposables. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-[#a89078]">{BUSINESS_INFO.fitnessTagline}</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#24170d] hover:bg-[#382415] text-[#decbb7] hover:text-white transition-colors flex items-center gap-1.5"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
