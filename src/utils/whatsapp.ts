import { BUSINESS_INFO } from '../data/products';

export function getCleanWhatsappNumber(): string {
  return BUSINESS_INFO.whatsappNumber.replace(/[^0-9]/g, '');
}

/**
 * Creates a WhatsApp click-to-chat URL with a pre-filled message
 */
export function createWhatsappUrl(customMessage?: string): string {
  const number = getCleanWhatsappNumber();
  const defaultText = `Hello ${BUSINESS_INFO.name}, I would like to enquire about your products and services.`;
  const text = encodeURIComponent(customMessage || defaultText);
  return `https://wa.me/${number}?text=${text}`;
}

/**
 * Creates pre-filled message for an individual product enquiry
 */
export function createProductWhatsappUrl(productName: string, categoryName?: string): string {
  const number = getCleanWhatsappNumber();
  const message = `Hello ${BUSINESS_INFO.name}, I would like to enquire about this product:\n\n• *Product:* ${productName}${categoryName ? `\n• *Category:* ${categoryName}` : ''}\n\nPlease share price, availability, and ordering details. Thank you!`;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

/**
 * Creates pre-filled message for custom celebration cake booking
 */
export function createCakeOrderWhatsappUrl(cakeDetails: {
  flavor: string;
  weight: string;
  occasion: string;
  date: string;
  customMessage?: string;
  notes?: string;
}): string {
  const number = getCleanWhatsappNumber();
  let message = `Hello ${BUSINESS_INFO.name}, I would like to order a Custom Celebration Cake:\n\n`;
  message += `🎂 *Occasion:* ${cakeDetails.occasion}\n`;
  message += `🍰 *Flavor:* ${cakeDetails.flavor}\n`;
  message += `⚖️ *Weight / Size:* ${cakeDetails.weight}\n`;
  message += `📅 *Needed By (Date):* ${cakeDetails.date}\n`;
  if (cakeDetails.customMessage) {
    message += `✍️ *Name/Message on Cake:* "${cakeDetails.customMessage}"\n`;
  }
  if (cakeDetails.notes) {
    message += `📝 *Special Requests:* ${cakeDetails.notes}\n`;
  }
  message += `\nPlease let me know the price and confirm my order.`;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

/**
 * Creates pre-filled message for multi-item enquiry list
 */
export function createBulkEnquiryWhatsappUrl(items: { name: string; quantity?: number; note?: string }[]): string {
  const number = getCleanWhatsappNumber();
  let message = `Hello ${BUSINESS_INFO.name}, I would like to enquire about the following items from your store in Bonadialgam, Anantnag:\n\n`;
  items.forEach((item, index) => {
    message += `${index + 1}. *${item.name}* ${item.quantity ? `(Qty: ${item.quantity})` : ''} ${item.note ? `- ${item.note}` : ''}\n`;
  });
  message += `\nPlease let me know availability and pricing for these items. Thank you!`;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
