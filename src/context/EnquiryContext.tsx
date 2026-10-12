import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '../data/products';

export interface EnquiryItem {
  product: Product;
  quantity: number;
  note?: string;
}

interface EnquiryContextType {
  items: EnquiryItem[];
  addToEnquiry: (product: Product, quantity?: number) => void;
  removeFromEnquiry: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearEnquiry: () => void;
  totalItemCount: number;
  isDrawerOpen: boolean;
  setIsDrawerOpen: (isOpen: boolean) => void;
}

const EnquiryContext = createContext<EnquiryContextType | undefined>(undefined);

export const EnquiryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<EnquiryItem[]>(() => {
    try {
      const saved = localStorage.getItem('lavish_enquiry_items');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('lavish_enquiry_items', JSON.stringify(items));
    } catch {
      // storage error fallback
    }
  }, [items]);

  const addToEnquiry = (product: Product, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    setIsDrawerOpen(true);
  };

  const removeFromEnquiry = (productId: string) => {
    setItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromEnquiry(productId);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearEnquiry = () => {
    setItems([]);
  };

  const totalItemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <EnquiryContext.Provider
      value={{
        items,
        addToEnquiry,
        removeFromEnquiry,
        updateQuantity,
        clearEnquiry,
        totalItemCount,
        isDrawerOpen,
        setIsDrawerOpen,
      }}
    >
      {children}
    </EnquiryContext.Provider>
  );
};

export const useEnquiry = () => {
  const context = useContext(EnquiryContext);
  if (!context) {
    throw new Error('useEnquiry must be used within an EnquiryProvider');
  }
  return context;
};
