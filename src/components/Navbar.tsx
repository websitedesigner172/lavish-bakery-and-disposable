import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, ShoppingBag, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';
import { createWhatsappUrl } from '../utils/whatsapp';
import { useEnquiry } from '../context/EnquiryContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItemCount, setIsDrawerOpen } = useEnquiry();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Bakery & Cakes', href: '#bakery' },
    { label: 'Disposables', href: '#disposables' },
    { label: 'Weddings & Events', href: '#wedding' },
    { label: 'Café & Shakes', href: '#cafe' },
    { label: 'Fitness & Protein', href: '#fitness' },
    { label: 'Location & Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top micro announcement bar */}
      <div className="bg-[#140e09] text-[#d6c4b2] text-[11px] sm:text-xs py-2 px-4 border-b border-[#2d2015] tracking-wide">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
            <span>Bonadialgam, Anantnag (Near Sports Stadium), Jammu & Kashmir</span>
          </div>
          <div className="flex items-center gap-4 text-[#c4af98]">
            <span>Daily: 8:00 AM – 10:00 PM</span>
            <span aria-hidden="true">·</span>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="text-[#e2c178] hover:underline font-semibold"
            >
              Call: {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#1c140d]/95 backdrop-blur-md shadow-lg py-3 border-b border-[#3b2a1c]'
            : 'bg-[#1c140d] py-4 border-b border-[#2e2015]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Brand Name */}
            <a href="#hero" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#d4af37] via-[#b8860b] to-[#8c651e] flex items-center justify-center text-[#1c140d] font-extrabold text-xl shadow-md group-hover:scale-105 transition-transform">
                L
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-[#e5c479] transition-colors">
                  Lavish Bakery & Disposables
                </span>
                <span className="text-[10px] sm:text-xs text-[#b89b7e] font-medium tracking-wider uppercase">
                  Anantnag · Sports Stadium
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs lg:text-sm font-medium text-[#decbb7] hover:text-[#e8ca84] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#d4af37] hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Action Buttons */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* WhatsApp Enquiry Drawer Trigger */}
              <button
                type="button"
                onClick={() => setIsDrawerOpen(true)}
                className="relative p-2.5 rounded-lg bg-[#2b1f14] hover:bg-[#3d2c1c] text-[#e8ca84] border border-[#4a3523] transition-colors"
                title="View enquiry list"
                aria-label="View compiled enquiry list"
              >
                <ShoppingBag className="w-4 h-4" />
                {totalItemCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-[#d4af37] text-[#1c140d] font-bold text-[10px] w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#1c140d]">
                    {totalItemCount}
                  </span>
                )}
              </button>

              {/* Direct WhatsApp Call-to-action button */}
              <a
                href={createWhatsappUrl('Hello Lavish Bakery & Disposables, I would like to enquire about your products.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-semibold px-3.5 py-2.5 rounded-lg shadow-sm transition-all duration-200 active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                <span className="hidden sm:inline">WhatsApp Order</span>
                <span className="sm:hidden">WhatsApp</span>
              </a>

              {/* Mobile menu toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden p-2 text-[#d1beab] hover:text-white hover:bg-[#2e2015] rounded-lg transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#18110b] border-t border-[#2e2015] px-4 pt-4 pb-6 space-y-3 animate-fade-in">
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-sm font-medium text-[#e0ceb9] hover:bg-[#2b1f14] hover:text-[#e8ca84] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-[#2e2015] flex flex-col sm:flex-row gap-2">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#291d14] text-[#ebdcc8] text-xs font-semibold border border-[#3d2a1b]"
              >
                <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
              <a
                href={createWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#25D366] text-white text-xs font-semibold"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
