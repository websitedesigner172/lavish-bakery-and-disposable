import React, { useState } from 'react';
import { X, Cake, Calendar, Sparkles, MessageCircle } from 'lucide-react';
import { createCakeOrderWhatsappUrl } from '../utils/whatsapp';

interface CakeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CakeModal: React.FC<CakeModalProps> = ({ isOpen, onClose }) => {
  const [flavor, setFlavor] = useState('Chocolate Truffle');
  const [weight, setWeight] = useState('1 Kg');
  const [occasion, setOccasion] = useState('Birthday Celebration');
  const [date, setDate] = useState('');
  const [customMessage, setCustomMessage] = useState('');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = createCakeOrderWhatsappUrl({
      flavor,
      weight,
      occasion,
      date: date || 'Earliest available date',
      customMessage: customMessage.trim(),
      notes: notes.trim(),
    });
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  const flavors = [
    'Chocolate Truffle',
    'Dutch Chocolate',
    'Red Velvet Cream Cheese',
    'Fresh Seasonal Fruit',
    'Black Forest Special',
    'Butterscotch Crunch',
    'Pineapple Delight',
    'Vanilla White Blossom',
    'Custom Mixed Flavor'
  ];

  const weights = ['0.5 Kg', '1 Kg', '1.5 Kg', '2 Kg', '3 Kg+', 'Multi-Tier Grand'];
  const occasions = ['Birthday Celebration', 'Wedding / Nikkah', 'Engagement', 'Anniversary', 'Family Party', 'Baby Shower', 'Other Special Occasion'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-lg bg-[#fffdfa] rounded-2xl border border-[#ebdcc8] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cake-modal-title"
      >
        {/* Header */}
        <div className="px-6 py-5 bg-[#1c140d] text-white flex items-center justify-between border-b border-[#3b2a1c]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#d4af37]/20 flex items-center justify-center text-[#d4af37]">
              <Cake className="w-5 h-5" />
            </div>
            <div>
              <h3 id="cake-modal-title" className="font-display text-lg font-bold text-[#faf7f2]">
                Custom Cake Enquiry
              </h3>
              <p className="text-xs text-[#d1beab]">Lavish Bakery & Disposables • Anantnag</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#d1beab] hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#735b44] mb-1.5">
              Occasion
            </label>
            <select
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-white border border-[#decbb7] rounded-lg text-sm text-[#291d14] focus:outline-none focus:ring-2 focus:ring-[#cba158]"
            >
              {occasions.map((occ) => (
                <option key={occ} value={occ}>{occ}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#735b44] mb-1.5">
                Flavor
              </label>
              <select
                value={flavor}
                onChange={(e) => setFlavor(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-[#decbb7] rounded-lg text-sm text-[#291d14] focus:outline-none focus:ring-2 focus:ring-[#cba158]"
              >
                {flavors.map((fl) => (
                  <option key={fl} value={fl}>{fl}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#735b44] mb-1.5">
                Size / Weight
              </label>
              <select
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-[#decbb7] rounded-lg text-sm text-[#291d14] focus:outline-none focus:ring-2 focus:ring-[#cba158]"
              >
                {weights.map((w) => (
                  <option key={w} value={w}>{w}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#735b44] mb-1.5">
              Required Delivery / Pickup Date
            </label>
            <div className="relative">
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-[#decbb7] rounded-lg text-sm text-[#291d14] focus:outline-none focus:ring-2 focus:ring-[#cba158]"
              />
              <Calendar className="absolute right-3.5 top-3 w-4 h-4 text-[#8c6d48] pointer-events-none" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#735b44] mb-1.5">
              Message or Name to Write on Cake
            </label>
            <input
              type="text"
              placeholder="e.g., Happy 25th Anniversary Mom & Dad"
              value={customMessage}
              onChange={(e) => setCustomMessage(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-white border border-[#decbb7] rounded-lg text-sm text-[#291d14] focus:outline-none focus:ring-2 focus:ring-[#cba158]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#735b44] mb-1.5">
              Design Notes or Color Preference (Optional)
            </label>
            <textarea
              rows={2}
              placeholder="e.g. Heart shape, golden flowers, eggless preference, cartoon theme, etc."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3.5 py-2 bg-white border border-[#decbb7] rounded-lg text-sm text-[#291d14] focus:outline-none focus:ring-2 focus:ring-[#cba158]"
            />
          </div>

          {/* Action buttons */}
          <div className="pt-2 flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-lg border border-[#d8c3ae] text-sm font-medium text-[#5a483a] hover:bg-[#f5ede0] transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#1c140d] text-[#e4be77] hover:bg-black rounded-lg text-sm font-semibold shadow-md transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Send Request to WhatsApp</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
