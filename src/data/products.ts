export interface Product {
  id: string;
  name: string;
  category: 'bakery' | 'disposables' | 'wedding' | 'cafe' | 'fitness';
  subCategory?: string;
  description: string;
  image: string;
  highlight?: string;
  isSpecial?: boolean;
  unitHint?: string;
  isSupplement?: boolean; // For creatine
}

export const PRODUCTS: Product[] = [
  // --- BAKERY SECTION ---
  {
    id: 'bakery-custom-cakes',
    name: 'Celebration & Birthday Designer Cakes',
    category: 'bakery',
    subCategory: 'Cakes',
    description: 'Freshly baked bespoke designer cakes crafted for birthdays, anniversaries, and grand weddings. Available in rich Chocolate Truffle, Red Velvet, Fresh Fruit, Black Forest, and customized fondant art.',
    image: '/src/assets/images/birthday_cake_1791816755660.jpg',
    highlight: 'Custom Tiers & Designs',
    unitHint: 'Custom weight (1kg, 2kg, multi-tier)'
  },
  {
    id: 'bakery-wedding-cakes',
    name: 'Royal Wedding & Nikkah Cakes',
    category: 'bakery',
    subCategory: 'Cakes',
    description: 'Elegant multi-tier wedding cakes finished with delicate floral accents, edible pearls, and premium royal icing for your grand wedding celebrations in Kashmir.',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=80',
    highlight: 'Grand Multi-Tier',
    unitHint: 'Custom event orders'
  },
  {
    id: 'bakery-pastries',
    name: 'Fresh Cream Pastries & Gourmet Brownies',
    category: 'bakery',
    subCategory: 'Pastries',
    description: 'Soft, melt-in-your-mouth chocolate truffle pastries, seasonal strawberry slices, pineapple cream cuts, and fudgy walnut brownies baked fresh every morning.',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=80',
    highlight: 'Baked Fresh Daily',
    unitHint: 'By piece or box of 6/12'
  },
  {
    id: 'bakery-artisan-breads',
    name: 'Artisan Breads, Milk Loaves & Burger Buns',
    category: 'bakery',
    subCategory: 'Breads & Buns',
    description: 'Fluffy daily milk bread, wholesome sandwich loaves, soft sesame burger buns, and bakery hotdog rolls made with fine ingredients.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80',
    highlight: 'Soft & Daily Fresh',
    unitHint: 'Packets'
  },
  {
    id: 'bakery-kashmiri-traditional',
    name: 'Traditional Kashmiri Bakery & Kulchas',
    category: 'bakery',
    subCategory: 'Traditional',
    description: 'Authentic local valley bakery favorites including crispy sesame kulcha, sweet roath, tender sheermal, and golden puff patties for your morning and evening noon-chai.',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=80',
    highlight: 'Valley Specialty',
    unitHint: 'By dozen or bulk'
  },
  {
    id: 'bakery-cookies',
    name: 'Handcrafted Cookies & Dry Fruit Biscuits',
    category: 'bakery',
    subCategory: 'Cookies',
    description: 'Crunchy butter pista biscuits, almond crunch cookies, cashew delights, and tea-time dry fruit cookies packaged for family enjoyment and festive gifting.',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=80',
    highlight: 'Gift-Ready Jars',
    unitHint: 'Packs of 250g / 500g / 1kg'
  },

  // --- DISPOSABLES SECTION ---
  {
    id: 'disp-water-bottles',
    name: 'Water Bottles',
    category: 'disposables',
    subCategory: 'Beverage Essentials',
    description: 'Hygienically packaged pure mineral water bottles in 250ml, 500ml, and 1L sizes. Ideal for wedding feasts, corporate seminars, parties, and sports gatherings.',
    image: '/src/assets/images/water_bottles_1791817002153.jpg',
    highlight: 'Bulk Crates Available',
    unitHint: 'Boxes of 24 / 48 / 100 bottles'
  },
  {
    id: 'disp-straws-stirrers',
    name: 'Straws and Stirrers',
    category: 'disposables',
    subCategory: 'Drinkware Accessories',
    description: 'Eco-friendly biodegradable paper straws, individually wrapped hygienic straws, jumbo shake straws, and wooden coffee stirrers for cafes and event bars.',
    image: 'https://images.unsplash.com/photo-1577937927133-66ef06acdf18?auto=format&fit=crop&w=900&q=80',
    highlight: 'Hygienically Wrapped',
    unitHint: 'Packs of 100 / 500 / 1000'
  },
  {
    id: 'disp-garbage-bags',
    name: 'Garbage Bags',
    category: 'disposables',
    subCategory: 'Cleanliness & Waste Management',
    description: 'Heavy-duty tear-resistant black and green waste disposal garbage bags. Available in medium, large, and extra-large sizes for post-event cleanups and commercial kitchens.',
    image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&w=900&q=80',
    highlight: 'Leakproof & Tough',
    unitHint: 'Rolls of 30 / 50 bags'
  },
  {
    id: 'disp-disposable-gloves',
    name: 'Disposable Gloves',
    category: 'disposables',
    subCategory: 'Hygiene Supplies',
    description: 'Food-grade transparent HDPE, vinyl, and powder-free nitrile gloves ensuring superior sanitation for catering staff, chefs, and event servers.',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=900&q=80',
    highlight: 'Food Grade Certified',
    unitHint: 'Boxes of 100 pieces'
  },
  {
    id: 'disp-toothpicks',
    name: 'Toothpicks',
    category: 'disposables',
    subCategory: 'Dining Table Essentials',
    description: 'Smooth splinter-free bamboo toothpicks and individually paper-wrapped toothpicks designed for post-meal dining, appetizers, and fruit skewers.',
    image: 'https://images.unsplash.com/photo-1584473457406-6240486418e9?auto=format&fit=crop&w=900&q=80',
    highlight: 'Individually Wrapped',
    unitHint: 'Boxes of 500 / 1000'
  },
  {
    id: 'disp-cling-foil',
    name: 'Cling Film and Aluminium Foil Rolls',
    category: 'disposables',
    subCategory: 'Food Preservation & Wraps',
    description: 'Commercial-grade food wrapping aluminium foil rolls and high-stretch transparent cling film rolls for preserving heat, freshness, and moisture of banquet dishes.',
    image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=900&q=80',
    highlight: 'Heavy Duty 1kg / 72m',
    unitHint: 'By roll or carton'
  },
  {
    id: 'disp-thermocol-plates',
    name: 'Thermocol Plates and Bowls',
    category: 'disposables',
    subCategory: 'Dining Tableware',
    description: 'Sturdy thermal dinner plates, 3-compartment and 4-compartment banquet meal trays, and deep soup/curry bowls for large feasts, Wazwan side-servings, and langars.',
    image: 'https://images.unsplash.com/photo-1627999882200-c97b83f08ca7?auto=format&fit=crop&w=900&q=80',
    highlight: 'Rigid & Leak-Proof',
    unitHint: 'Packs of 50 / 100 / 500'
  },
  {
    id: 'disp-popcorn-boxes',
    name: 'Popcorn and Snack Boxes',
    category: 'disposables',
    subCategory: 'Party & Snack Containers',
    description: 'Vibrant striped popcorn containers, french fry scoops, and fried chicken snack folding cartons manufactured with grease-resistant virgin paper board.',
    image: 'https://images.unsplash.com/photo-1578849278619-e73505e9610f?auto=format&fit=crop&w=900&q=80',
    highlight: 'Grease Resistant',
    unitHint: 'Packs of 100 / 250'
  },
  {
    id: 'disp-sweet-boxes',
    name: 'Sweet Boxes',
    category: 'disposables',
    subCategory: 'Packaging & Gifting',
    description: 'Luxurious gold-embossed and decorated sweet packaging boxes for traditional Kashmiri Mithai, dry fruit gifting, and celebration announcement hampers.',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=900&q=80',
    highlight: 'Golden Embossed Finish',
    unitHint: 'Sizes: 250g, 500g, 1kg'
  },
  {
    id: 'disp-cake-boxes',
    name: 'Cake Boxes',
    category: 'disposables',
    subCategory: 'Bakery Packaging',
    description: 'Heavyweight white corrugated and transparent window cake boxes with sturdy bases. Built to safely carry 1/2kg, 1kg, 2kg, and tall multi-tier celebration cakes.',
    image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=900&q=80',
    highlight: 'Clear Window & Heavy Base',
    unitHint: 'Sizes: 6", 8", 10", 12", Tall Tiers'
  },

  // --- WEDDING & EVENT ESSENTIALS ---
  {
    id: 'event-wedding-banquet',
    name: 'Wazwan & Wedding Feast Dining Supplies',
    category: 'wedding',
    subCategory: 'Feast & Wazwan',
    description: 'Complete dining sets for traditional Kashmiri weddings: heavy printed dastarkhwan rolls, hand-wash towels, premium disposable spoons, forks, and water cups.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80',
    highlight: 'Full Wedding Setups',
    unitHint: 'Bulk event packs'
  },
  {
    id: 'event-engagement-nikkah',
    name: 'Engagement & Nikkah Packaging Hampers',
    category: 'wedding',
    subCategory: 'Ceremony Hampers',
    description: 'Lavish ribboned dry fruit platters, ornate gold & silver celebration sweet trays, and elegant gift wraps for Nikkah and ring ceremony giveaways.',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80',
    highlight: 'Royal Gold Aesthetics',
    unitHint: 'Custom assortments'
  },
  {
    id: 'event-birthday-kits',
    name: 'Birthday Party Kits & Celebration Props',
    category: 'wedding',
    subCategory: 'Birthdays & Anniversaries',
    description: 'Designer birthday candles, sparkling fountain sticks, themed cake toppers, colorful party caps, balloons, and decorative celebration banners.',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=900&q=80',
    highlight: 'All-In-One Party Kit',
    unitHint: 'Complete theme kits'
  },
  {
    id: 'event-corporate-family',
    name: 'Corporate Functions & Kitty Party Tableware',
    category: 'wedding',
    subCategory: 'Corporate & Gatherings',
    description: 'Premium crystal-clear dessert cups, compartmentalized buffet plates, paper napkins, and beverage serving supplies tailored for meetings, family get-togethers, and kitty parties.',
    image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=900&q=80',
    highlight: 'Executive Quality',
    unitHint: 'Tailored quantities'
  },

  // --- COFFEE, COLD DRINKS & SHAKES ---
  {
    id: 'cafe-hot-coffee',
    name: 'Aromatic Espresso, Cappuccino & Latte',
    category: 'cafe',
    subCategory: 'Hot Brews',
    description: 'Freshly ground barista-style espresso with velvety steamed milk foam, rich mocha, and classic hot coffee to warm your valley mornings.',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80',
    highlight: 'Freshly Ground Beans',
    unitHint: 'Single / Regular cup'
  },
  {
    id: 'cafe-iced-coffee',
    name: 'Iced Caramel Macchiato & Cold Coffee',
    category: 'cafe',
    subCategory: 'Cold Brews',
    description: 'Chilled rich coffee blended with creamy milk, vanilla, and drizzled with luscious golden caramel or dark cocoa syrup over ice.',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=80',
    highlight: 'Refreshing Chilled Brew',
    unitHint: 'Glass / Takeaway cup'
  },
  {
    id: 'cafe-shakes-classic',
    name: 'Thick Classic Shakes (Chocolate, Strawberry, Mango, Oreo)',
    category: 'cafe',
    subCategory: 'Regular Shakes',
    description: 'Indulgent thick shakes crafted with real ice cream and rich dairy: Dark Chocolate Fudge, Velvet Strawberry, Alphonso Mango, and Crunchy Oreo Blast.',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=80',
    highlight: 'Rich & Creamy',
    unitHint: 'Medium / Large'
  },
  {
    id: 'cafe-cold-drinks',
    name: 'Chilled Cold Drinks & Fizzy Refreshers',
    category: 'cafe',
    subCategory: 'Cold Drinks',
    description: 'Ice-cold carbonated beverages, refreshing fruit coolers, lemon mint sodas, and energy drinks served chilled for instant replenishment.',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=900&q=80',
    highlight: 'Ice-Cold Service',
    unitHint: 'Cans / Bottles'
  },
  {
    id: 'cafe-protein-shake',
    name: 'Signature Café Protein Shake',
    category: 'cafe',
    subCategory: 'Protein Shakes',
    description: 'Smooth post-workout café shake blended with high quality whey protein, real banana, peanut butter, and low-fat milk for an energizing lift.',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=900&q=80',
    highlight: 'High Protein Blend',
    unitHint: 'Large glass / Shake cup'
  },

  // --- FITNESS & PROTEIN FOOD SECTION ---
  {
    id: 'fit-boiled-eggs',
    name: 'Fresh Boiled Eggs',
    category: 'fitness',
    subCategory: 'Daily Protein',
    description: 'Farm-fresh jumbo eggs, freshly boiled to perfection and served warm with a dash of Himalayan pink salt and cracked black pepper. A classic daily clean protein staple.',
    image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=900&q=80',
    highlight: 'Pure Clean Protein',
    unitHint: 'Plates of 2, 4, 6 or a dozen'
  },
  {
    id: 'fit-boiled-chicken',
    name: 'Lean Boiled Chicken Breast',
    category: 'fitness',
    subCategory: 'Lean Muscle Meals',
    description: 'Tender, skinless and boneless chicken breast gently steamed and boiled with natural herbs. High in protein, low in fat, and ideal for fitness meal preps.',
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=80',
    highlight: 'Zero Added Oil / Lean',
    unitHint: 'Portions: 200g / 300g / 500g'
  },
  {
    id: 'fit-fried-chicken',
    name: 'Crispy Golden Fried Chicken',
    category: 'fitness',
    subCategory: 'Hearty Protein',
    description: 'Freshly prepared crispy spiced chicken cuts cooked golden and crunchy on the outside, juicy and protein-packed on the inside.',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=900&q=80',
    highlight: 'Crispy & Satisfying',
    unitHint: 'Quarter / Half / Full plate'
  },
  {
    id: 'fit-trout-fish',
    name: 'Fresh Kashmiri Fried Trout Fish',
    category: 'fitness',
    subCategory: 'Valley Omega-3 Specialty',
    description: 'Fresh trout sourced straight from pristine Kashmir coldwater streams, delicately seasoned and fried crisp. Rich in lean protein, healthy fats, and Omega-3 fatty acids.',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=900&q=80',
    highlight: 'Authentic Local Fresh Trout',
    unitHint: 'Single fish / Double fish plate'
  },
  {
    id: 'fit-protein-shakes',
    name: 'Power Protein Shakes',
    category: 'fitness',
    subCategory: 'Gym Recovery',
    description: 'Nutritious workout recovery shakes blended on demand with quality whey protein isolate, crushed oats, almond milk or cow milk, and natural cocoa or vanilla.',
    image: 'https://images.unsplash.com/photo-1579722820308-d74e571900a9?auto=format&fit=crop&w=900&q=80',
    highlight: '25g+ Protein Per Serving',
    unitHint: 'Glass / Shaker bottle'
  },
  {
    id: 'fit-creatine',
    name: 'Creatine Supplement (Sealed Packs)',
    category: 'fitness',
    subCategory: 'Fitness Supplement',
    description: 'High-purity micronized Creatine Monohydrate available in factory-sealed containers. Presented strictly as a fitness supplement for strength training athletes and adult gym members.',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=900&q=80',
    highlight: 'Authentic Sealed Product',
    unitHint: 'Sealed tubs (100g, 250g, 300g)',
    isSupplement: true
  }
];

export const BUSINESS_INFO = {
  name: 'Lavish Bakery & Disposables',
  address: 'Bonadialgam, Anantnag, near Sports Stadium',
  fullAddress: 'Bonadialgam, near Sports Stadium, Anantnag, Jammu & Kashmir 192101',
  phone: '7006738337',
  formattedPhone: '+91 7006738337',
  whatsappNumber: '917006738337',
  whatsappUrl: 'https://wa.me/917006738337',
  mainTagline: 'Everything for Your Celebrations, Bakery Needs & Fitness Lifestyle.',
  fitnessTagline: 'Stay Fit. Eat Healthy. Feel Strong.',
  headline: 'Your One-Stop Shop for Bakery, Party Supplies & Healthy Food.',
  description: 'Welcome to Lavish Bakery & Disposables in Bonadialgam, Anantnag. We provide fresh artisan celebration cakes, wholesale & event disposable packaging supplies, wedding tableware essentials, refreshing café beverages, and wholesome protein-rich fitness meals.',
  hours: 'Monday – Sunday: 8:00 AM – 10:00 PM',
  locationDetails: 'Conveniently located in Bonadialgam, right near the Sports Stadium in Anantnag. Easy roadside access for event pickup, bakery takeaways, and daily orders.'
};
