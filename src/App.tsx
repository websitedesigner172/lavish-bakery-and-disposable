/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { EnquiryProvider } from './context/EnquiryContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BakerySection } from './components/BakerySection';
import { DisposablesSection } from './components/DisposablesSection';
import { WeddingEventsSection } from './components/WeddingEventsSection';
import { CafeSection } from './components/CafeSection';
import { FitnessSection } from './components/FitnessSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { EnquiryDrawer } from './components/EnquiryDrawer';

export default function App() {
  return (
    <EnquiryProvider>
      <div className="min-h-screen flex flex-col bg-[#faf7f2] text-[#291d14] selection:bg-[#d4af37]/30 selection:text-[#1c140d]">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Sections */}
        <main className="flex-1">
          {/* Section A: Hero */}
          <Hero />

          {/* Section B: Bakery & Celebration Cakes */}
          <BakerySection />

          {/* Section C: Disposable Items & Packaging Supplies */}
          <DisposablesSection />

          {/* Section D: Wedding & Event Essentials */}
          <WeddingEventsSection />

          {/* Section E: Coffee, Cold Drinks & Shakes */}
          <CafeSection />

          {/* Section F: Fitness & Protein Food */}
          <FitnessSection />

          {/* Section H: Contact & Location */}
          <ContactSection />
        </main>

        {/* Section I: Footer */}
        <Footer />

        {/* Global Floating Elements */}
        <FloatingWhatsApp />
        <EnquiryDrawer />
      </div>
    </EnquiryProvider>
  );
}
