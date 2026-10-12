import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Clock, Send, CheckCircle2, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';
import { createWhatsappUrl } from '../utils/whatsapp';

export const ContactSection: React.FC = () => {
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [inquiryType, setInquiryType] = useState('Celebration Cake');
  const [userMessage, setUserMessage] = useState('');

  const handleQuickEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let text = `Hello ${BUSINESS_INFO.name},\n`;
    if (userName.trim()) text += `• Name: ${userName.trim()}\n`;
    if (userPhone.trim()) text += `• Phone: ${userPhone.trim()}\n`;
    text += `• Enquiry Category: ${inquiryType}\n`;
    if (userMessage.trim()) {
      text += `• Message / Requirements: ${userMessage.trim()}\n`;
    } else {
      text += `• I would like to know rates and availability.\n`;
    }
    const url = createWhatsappUrl(text);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Google Maps search query link pointing to Bonadialgam, Sports Stadium, Anantnag, Jammu & Kashmir
  const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Sports Stadium, Bonadialgam, Anantnag, Jammu and Kashmir')}`;

  return (
    <section id="contact" className="py-20 bg-[#faf7f2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#8c6d48] uppercase tracking-widest mb-2">
            <MapPin className="w-4 h-4 text-[#d4af37]" />
            <span>Store Location &amp; Direct Ordering</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1c140d] tracking-tight">
            Visit Us or Contact on WhatsApp
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#695442] leading-relaxed">
            Conveniently situated right near the Sports Stadium in Bonadialgam, Anantnag. Stop by for fresh daily bakery and fitness foods, or contact us anytime for celebration cakes and bulk event packaging.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Business Details Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#ebdcc8] shadow-sm space-y-6">
              
              <div>
                <h3 className="font-display text-xl font-bold text-[#1c140d]">
                  {BUSINESS_INFO.name}
                </h3>
                <p className="text-xs text-[#8c6d48] mt-0.5">
                  Bakery · Event Disposables · Café · Fitness Food
                </p>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3.5 pt-2 border-t border-[#f2e7d8]">
                <div className="w-10 h-10 rounded-xl bg-[#f5ede0] flex items-center justify-center text-[#9d752c] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#735b44]">
                    Store Address
                  </h4>
                  <p className="text-sm font-bold text-[#1c140d] mt-0.5">
                    {BUSINESS_INFO.address}
                  </p>
                  <p className="text-xs text-[#695442] mt-0.5">
                    Anantnag, Jammu &amp; Kashmir 192101
                  </p>
                  <a
                    href={mapsSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#9d752c] hover:underline font-semibold mt-2"
                  >
                    <span>View area on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-[#f2e7d8]">
                <div className="w-10 h-10 rounded-xl bg-[#f5ede0] flex items-center justify-center text-[#9d752c] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#735b44]">
                    Phone &amp; WhatsApp
                  </h4>
                  <p className="text-sm font-bold text-[#1c140d] mt-0.5">
                    {BUSINESS_INFO.phone}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 mt-2">
                    <a
                      href={`tel:${BUSINESS_INFO.phone}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#291d14] text-white text-xs font-medium hover:bg-black transition-colors"
                    >
                      <Phone className="w-3 h-3 text-[#d4af37]" />
                      <span>Call Now</span>
                    </a>
                    <a
                      href={createWhatsappUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25D366] text-white text-xs font-bold hover:bg-[#20ba59] transition-colors"
                    >
                      <MessageCircle className="w-3 h-3" />
                      <span>WhatsApp Chat</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-[#f2e7d8]">
                <div className="w-10 h-10 rounded-xl bg-[#f5ede0] flex items-center justify-center text-[#9d752c] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#735b44]">
                    Store Timings
                  </h4>
                  <p className="text-sm font-bold text-[#1c140d] mt-0.5">
                    {BUSINESS_INFO.hours}
                  </p>
                  <p className="text-xs text-[#695442] mt-0.5">
                    Open 7 days a week for daily fresh bakes, event supply pick-ups, and post-workout gym meals.
                  </p>
                </div>
              </div>

            </div>

            {/* Location Landmark Guide */}
            <div className="bg-[#261b11] text-white rounded-2xl p-5 border border-[#45311f] space-y-2">
              <span className="text-[11px] font-semibold text-[#d4af37] tracking-wider uppercase">
                Landmark &amp; Directions
              </span>
              <p className="text-xs sm:text-sm text-[#decbb7] leading-relaxed">
                Located in <strong>Bonadialgam</strong>, right by the prominent <strong>Sports Stadium</strong> in Anantnag. Convenient roadside location with easy vehicle access for loading bulk wedding supplies, sweet boxes, and bakery crates.
              </p>
            </div>
          </div>

          {/* Right Column: Quick WhatsApp Inquiry Form + Map View */}
          <div className="lg:col-span-7 space-y-6">
            {/* Quick Inquiry Form */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#ebdcc8] shadow-sm">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-[#1c140d]">
                    Send a Direct WhatsApp Enquiry
                  </h3>
                  <p className="text-xs text-[#735b44] mt-0.5">
                    Fill below to compose your message directly to <strong>{BUSINESS_INFO.formattedPhone}</strong>
                  </p>
                </div>
                <div className="w-9 h-9 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366]">
                  <MessageCircle className="w-5 h-5" />
                </div>
              </div>

              <form onSubmit={handleQuickEnquirySubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#735b44] mb-1.5">
                      Your Name (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Adil Ahmad"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#decbb7] rounded-lg text-sm text-[#291d14] focus:outline-none focus:ring-2 focus:ring-[#cba158]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#735b44] mb-1.5">
                      Contact Number (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 7006XXXXXX"
                      value={userPhone}
                      onChange={(e) => setUserPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#decbb7] rounded-lg text-sm text-[#291d14] focus:outline-none focus:ring-2 focus:ring-[#cba158]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#735b44] mb-1.5">
                    What would you like to enquire about?
                  </label>
                  <select
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#decbb7] rounded-lg text-sm text-[#291d14] focus:outline-none focus:ring-2 focus:ring-[#cba158]"
                  >
                    <option value="Celebration Cake">Artisan Celebration Cake (Birthday / Anniversary / Wedding)</option>
                    <option value="Disposable & Packaging Items">Disposable Items (Plates, Foils, Gloves, Bags, Boxes)</option>
                    <option value="Wedding / Event Bulk Order">Wedding / Feast (Wazwan) Tableware Essentials</option>
                    <option value="Café Drinks & Shakes">Café Drinks, Hot/Cold Coffee, Thick Shakes</option>
                    <option value="Fitness Protein Meals">Fitness Meals (Boiled Eggs, Boiled Chicken, Trout, Whey Shake)</option>
                    <option value="Creatine Supplement">Creatine Supplement Stock &amp; Details</option>
                    <option value="General Store Enquiry">General Store Query / Wholesale Pricing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#735b44] mb-1.5">
                    Your Requirements / Message
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe your event date, item quantities, preferred cake flavor, or pickup time..."
                    value={userMessage}
                    onChange={(e) => setUserMessage(e.target.value)}
                    className="w-full px-3.5 py-2 bg-white border border-[#decbb7] rounded-lg text-sm text-[#291d14] focus:outline-none focus:ring-2 focus:ring-[#cba158]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 px-5 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm rounded-xl shadow-md transition-all active:scale-98"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Send WhatsApp Message to 7006738337</span>
                </button>
              </form>
            </div>

            {/* Embedded Location Map - Centered on Bonadialgam, Sports Stadium, Anantnag area */}
            <div className="bg-white rounded-2xl overflow-hidden border border-[#ebdcc8] shadow-sm">
              <div className="p-4 bg-[#f8f2e9] border-b border-[#ebdcc8] flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#1c140d]">
                  <MapPin className="w-4 h-4 text-[#d4af37]" />
                  <span>Area Map: Bonadialgam, Near Sports Stadium, Anantnag</span>
                </div>
                <a
                  href={mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#9d752c] font-bold hover:underline flex items-center gap-1"
                >
                  <span>Open Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Map embed centered on Anantnag Sports Stadium area */}
              <div className="aspect-16/9 w-full bg-[#f0e6d8]">
                <iframe
                  title="Lavish Bakery & Disposables Location Map - Bonadialgam Anantnag"
                  src="https://maps.google.com/maps?q=Sports+Stadium,+Bonadialgam,+Anantnag,+Jammu+and+Kashmir&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
