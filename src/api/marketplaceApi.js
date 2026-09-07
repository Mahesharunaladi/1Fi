import { products } from '../data/marketplace';

// Mock API boundary: replace this implementation with the marketplace endpoint when available.
export function getMarketplaceProducts() {
  return new Promise((resolve) => {
    window.setTimeout(() => resolve(products), 350);
  });
}
