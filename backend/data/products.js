export const products = [
  {
    id: 'pixel-buds-pro', name: 'Pixel Buds Pro 2', category: 'electronics', categoryLabel: 'Audio',
    price: 18999, originalPrice: 22999, badge: 'Popular', accent: 'lavender', image: '🎧',
    description: 'Premium noise cancelling earbuds with a comfortable all-day fit and immersive sound.',
    features: ['Active noise cancellation', '30 hour battery life', 'Wireless charging case'],
    plans: [{ id: 'p1', months: 3, monthly: 6333, interest: '0% interest' }, { id: 'p2', months: 6, monthly: 3167, interest: '0% interest' }, { id: 'p3', months: 9, monthly: 2222, interest: '0% interest' }],
  },
  {
    id: 'kindle-paperwhite', name: 'Kindle Paperwhite', category: 'electronics', categoryLabel: 'Gadgets',
    price: 13999, originalPrice: 15999, badge: 'Best value', accent: 'peach', image: '📖',
    description: 'A glare-free display and weeks of battery life for your next great read.',
    features: ['6.8” warm light display', 'Waterproof design', '16 GB storage'],
    plans: [{ id: 'k1', months: 3, monthly: 4667, interest: '0% interest' }, { id: 'k2', months: 6, monthly: 2333, interest: '0% interest' }],
  },
  {
    id: 'air-purifier', name: 'Air Purifier 4', category: 'home', categoryLabel: 'Home',
    price: 12999, originalPrice: 14999, badge: null, accent: 'mint', image: '🌿',
    description: 'Keep your space feeling fresh with smart, quiet air purification.',
    features: ['HEPA filter', 'Quiet sleep mode', 'Smart app controls'],
    plans: [{ id: 'a1', months: 3, monthly: 4333, interest: '0% interest' }, { id: 'a2', months: 6, monthly: 2167, interest: '0% interest' }, { id: 'a3', months: 9, monthly: 1444, interest: '0% interest' }],
  },
  {
    id: 'smartwatch', name: 'Galaxy Watch 7', category: 'fitness', categoryLabel: 'Fitness',
    price: 29999, originalPrice: 32999, badge: 'New', accent: 'blue', image: '⌚',
    description: 'Track your health, workouts and everyday moments from your wrist.',
    features: ['Sleep coaching', 'Built-in GPS', 'Heart rate monitoring'],
    plans: [{ id: 's1', months: 3, monthly: 10000, interest: '0% interest' }, { id: 's2', months: 6, monthly: 5000, interest: '0% interest' }, { id: 's3', months: 9, monthly: 3333, interest: '0% interest' }],
  },
];
