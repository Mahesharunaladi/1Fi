export const products = [
  {
    id: 'pixel-buds-pro', name: 'Pixel Buds Pro 2', category: 'electronics', categoryLabel: 'Audio',
    price: 18999, originalPrice: 22999, badge: 'Popular', accent: 'lavender', image: '🎧',
    description: 'Premium noise cancelling earbuds with a comfortable all-day fit and immersive sound.',
    features: ['Active noise cancellation', '30 hour battery life', 'Wireless charging case'],
    plans: [{ id: 'p1', months: 3, monthly: 6333, interest: '0% interest' }, { id: 'p2', months: 6, monthly: 3167, interest: '0% interest' }, { id: 'p3', months: 9, monthly: 2222, interest: '0% interest' }],
  },
  {
    id: 'samsung-galaxy-m53', name: 'Samsung Galaxy M53 5G', category: 'electronics', categoryLabel: 'Phones',
    price: 28999, originalPrice: 32999, badge: 'Best value', accent: 'blue', image: '/assets/samsung-galaxy-m53.webp',
    description: 'A smooth, powerful 5G phone with a vivid Super AMOLED display and all-day battery life.',
    features: ['6.7” Super AMOLED Plus display', '108 MP quad camera', '5000 mAh battery'],
    plans: [{ id: 'm53-3', months: 3, monthly: 9667, interest: '0% interest' }, { id: 'm53-6', months: 6, monthly: 4833, interest: '0% interest' }, { id: 'm53-9', months: 9, monthly: 3222, interest: '0% interest' }],
  },
  {
    id: 'eureka-forbes-air-purifier', name: 'Eureka Forbes Air Purifier', category: 'home', categoryLabel: 'Home',
    price: 13999, originalPrice: 16999, badge: 'Smart pick', accent: 'mint', image: '/assets/eureka-forbes-air-purifier.webp',
    description: 'Breathe cleaner air with three-stage filtration, quiet night operation and app control.',
    features: ['True HEPA filtration', '516 sq. ft. coverage', 'Mi Home app controls'],
    plans: [{ id: 'xiaomi-air-3', months: 3, monthly: 4667, interest: '0% interest' }, { id: 'xiaomi-air-6', months: 6, monthly: 2333, interest: '0% interest' }, { id: 'xiaomi-air-9', months: 9, monthly: 1556, interest: '0% interest' }],
  },
  {
    id: 'samsung-galaxy-watch-ultra2', name: 'Samsung Galaxy Watch Ultra 2', category: 'fitness', categoryLabel: 'Wearables',
    price: 24999, originalPrice: 29999, badge: 'New', accent: 'peach', image: '/assets/samsung-galaxy-watch-ultra2.webp',
    description: 'A rugged smart watch built for training, with GPS tracking and a tough G-Shock design.',
    features: ['Built-in GPS and six sensors', 'Heart rate and workout tracking', 'Shock-resistant water-resistant design'],
    plans: [{ id: 'gshock-3', months: 3, monthly: 8333, interest: '0% interest' }, { id: 'gshock-6', months: 6, monthly: 4167, interest: '0% interest' }, { id: 'gshock-9', months: 9, monthly: 2778, interest: '0% interest' }],
  },
];
