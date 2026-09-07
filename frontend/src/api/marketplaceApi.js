export async function getMarketplaceProducts() {
  const response = await fetch('/api/products');

  if (!response.ok) {
    throw new Error('Marketplace products could not be loaded.');
  }

  const payload = await response.json();
  return payload.data;
}
