import React from 'react';
import { X, Trash2, Plus, Minus, MessageCircle, ShoppingBag, ArrowRight } from 'lucide-react';
import { useEnquiry } from '../context/EnquiryContext';
import { createBulkEnquiryWhatsappUrl } from '../utils/whatsapp';
import { BUSINESS_INFO } from '../data/products';

export const EnquiryDrawer: React.FC = () => {
  const {
    items,
    isDrawerOpen,
    setIsDrawerOpen,
    updateQuantity,
    removeFromEnquiry,
    clearEnquiry,
    totalItemCount,
  } = useEnquiry();

  if (!isDrawerOpen) return null;

  const handleSendToWhatsApp = () => {
    if (items.length === 0) return;
    const url = createBulkEnquiryWhatsappUrl(
      items.map((i) => ({
        name: i.product.name,
        quantity: i.quantity,
        note: i.product.subCategory,
      }))
    );
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs animate-fade-in">
      <div 
        className="w-full max-w-md bg-[#fffdfa] h-full flex flex-col shadow-2xl border-l border-[#ebdcc8]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-drawer-title"
      >
        {/* Drawer Header */}
        <div className="p-5 bg-[#1c140d] text-white flex items-center justify-between border-b border-[#3d2a1b]">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-[#d4af37]" />
            <div>
              <h3 id="enquiry-drawer-title" className="font-display font-bold text-base text-[#faf7f2]">
                WhatsApp Enquiry List
              </h3>
              <p className="text-xs text-[#c9b4a0]">
                {totalItemCount} {totalItemCount === 1 ? 'item' : 'items'} ready to enquire
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsDrawerOpen(false)}
            className="p-1.5 text-[#c9b4a0] hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Close enquiry list"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Info Banner */}
        <div className="px-5 py-2.5 bg-[#f5ede0] border-b border-[#ebdcc8] text-xs text-[#5a483a] flex items-center justify-between">
          <span>Direct enquiry to <strong>{BUSINESS_INFO.formattedPhone}</strong></span>
          {items.length > 0 && (
            <button
              onClick={clearEnquiry}
              className="text-xs text-rose-800 hover:underline flex items-center gap-1 font-medium"
            >
              Clear all
            </button>
          )}
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-3.5">
          {items.length === 0 ? (
            <div className="py-16 text-center text-[#735b44]">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#f5ede0] flex items-center justify-center text-[#cba158] mb-3">
                <ShoppingBag className="w-7 h-7" />
              </div>
              <h4 className="font-display font-semibold text-base text-[#291d14]">
                Your list is empty
              </h4>
              <p className="text-xs text-[#735b44] mt-1 max-w-xs mx-auto">
                Browse our fresh bakery items, disposable party supplies, café drinks, or fitness foods and click "+" to add them here.
              </p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.product.id}
                className="flex items-center gap-3 p-3 bg-white rounded-xl border border-[#ebdcc8] shadow-xs"
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-16 h-16 rounded-lg object-cover shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h5 className="text-sm font-semibold text-[#1c140d] truncate">
                    {item.product.name}
                  </h5>
                  <p className="text-xs text-[#8c6d48] truncate">
                    {item.product.subCategory}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="inline-flex items-center border border-[#decbb7] rounded-md bg-[#faf7f2]">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="p-1 text-[#5a483a] hover:bg-[#ede1d1] transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-2.5 text-xs font-bold text-[#291d14]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="p-1 text-[#5a483a] hover:bg-[#ede1d1] transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => removeFromEnquiry(item.product.id)}
                  className="p-1.5 text-[#b09680] hover:text-rose-600 transition-colors"
                  aria-label="Remove item"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer with WhatsApp Action */}
        {items.length > 0 && (
          <div className="p-5 bg-white border-t border-[#ebdcc8] space-y-3">
            <div className="text-xs text-[#6e5845] leading-relaxed">
              Clicking below will launch WhatsApp with your compiled enquiry list. You can chat directly with our store team for final rates and confirmation.
            </div>

            <button
              onClick={handleSendToWhatsApp}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl font-bold text-sm shadow-md transition-all duration-200 active:scale-98"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Send Enquiry on WhatsApp</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
