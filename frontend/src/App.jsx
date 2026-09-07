import { useEffect, useMemo, useState } from 'react';
import { categories, formatPrice } from './data/marketplace';
import { getMarketplaceProducts } from './api/marketplaceApi';

const Icon = ({ name, size = 20 }) => {
  const paths = {
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    back: <><path d="m15 18-6-6 6-6" /></>,
    bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" /><path d="M10 21h4" /></>,
    search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
    heart: <path d="M20.8 8.7c0 5.3-8.8 10.3-8.8 10.3S3.2 14 3.2 8.7a4.7 4.7 0 0 1 8.8-2.3 4.7 4.7 0 0 1 8.8 2.3Z" />,
    home: <><path d="m3 10 9-7 9 7v10H3z" /><path d="M9 20v-6h6v6" /></>,
    shop: <><path d="M4 9h16l-1 11H5L4 9Z" /><path d="M3 9 5 4h14l2 5" /><path d="M8 9a4 4 0 0 0 8 0" /></>,
    profile: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
    plus: <><path d="M12 5v14" /><path d="M5 12h14" /></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
};

function App() {
  const [view, setView] = useState('shop');
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [query, setQuery] = useState('');
  const [notice, setNotice] = useState('');
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState('');

  useEffect(() => {
    getMarketplaceProducts()
      .then(setProducts)
      .catch(() => setLoadError('We couldn’t load the marketplace right now.'))
      .finally(() => setIsLoading(false));
  }, []);

  const filteredProducts = useMemo(() => products.filter((product) => {
    const categoryMatch = activeCategory === 'all' || product.category === activeCategory;
    const queryMatch = product.name.toLowerCase().includes(query.toLowerCase());
    return categoryMatch && queryMatch;
  }), [activeCategory, products, query]);

  const openProduct = (product) => {
    setSelectedProduct(product);
    setSelectedPlan(product.plans[1] || product.plans[0]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const checkout = () => {
    setNotice(`Your ${selectedProduct.name} plan is ready to continue.`);
    window.setTimeout(() => setNotice(''), 3500);
  };

  if (selectedProduct) {
    return <ProductDetail product={selectedProduct} selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} onBack={() => setSelectedProduct(null)} onCheckout={checkout} notice={notice} />;
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand-mark">1<span>Fi</span></div>
        <div className="topbar-actions">
          <button className="icon-button" aria-label="Notifications"><Icon name="bell" /></button>
          <div className="avatar" aria-label="Default profile"><Icon name="profile" size={18} /></div>
        </div>
      </header>

      <main className="page-content">
        {view === 'shop' ? (
          <>
            <div className="eyebrow">Discover more with 1Fi</div>
            <div className="heading-row">
              <div><h1>Shop</h1><p className="muted">Get what you love, pay over time.</p></div>
              <button className="round-button" aria-label="Search"><Icon name="search" /></button>
            </div>
            <div className="shop-tabs" role="tablist">
              <button className="shop-tab" onClick={() => setNotice('Top Brands are coming soon.')}>Top brands</button>
              <button className="shop-tab" onClick={() => setNotice('Nearby Stores are coming soon.')}>Nearby stores</button>
              <button className="shop-tab active" aria-selected="true">1Fi Marketplace</button>
            </div>
            <section className="marketplace-intro">
              <div><span className="intro-kicker">Curated for you</span><h2>Pay better.<br /><em>Live better.</em></h2><p>Shop trusted products with flexible, zero-interest EMIs.</p></div>
              <div className="intro-art"><span>✦</span><span>⌁</span><strong>1Fi</strong></div>
            </section>
            <div className="section-heading"><div><span className="eyebrow">1Fi Marketplace</span><h2>What are you looking for?</h2></div><span className="product-count">{filteredProducts.length} items</span></div>
            <div className="search-field"><Icon name="search" size={18} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search products" /></div>
            <div className="category-scroller">{categories.map((category) => <button key={category.id} className={activeCategory === category.id ? 'category active' : 'category'} onClick={() => setActiveCategory(category.id)}>{category.label}</button>)}</div>
            {isLoading && <div className="product-grid loading-grid">{[1, 2, 3, 4].map((item) => <div className="skeleton-card" key={item}><div className="skeleton-image" /><div className="skeleton-line" /><div className="skeleton-short" /></div>)}</div>}
            {!isLoading && loadError && <div className="empty-state"><span>!</span><h3>Something went wrong</h3><p>{loadError}</p></div>}
            {!isLoading && !loadError && <div className="product-grid">{filteredProducts.map((product) => <ProductCard key={product.id} product={product} onClick={() => openProduct(product)} />)}</div>}
            {!isLoading && !loadError && !filteredProducts.length && <div className="empty-state"><span>⌕</span><h3>No products found</h3><p>Try a different search or category.</p></div>}
          </>
        ) : <div className="empty-page"><div className="empty-icon"><Icon name="profile" size={28} /></div><h1>{view === 'home' ? 'Welcome home' : 'Your profile'}</h1><p>This part of the app is ready for your 1Fi journey.</p></div>}
      </main>
      {notice && <div className="toast">{notice}</div>}
      <nav className="bottom-nav">
        <NavItem label="Home" icon="home" active={view === 'home'} onClick={() => setView('home')} />
        <NavItem label="Shop" icon="shop" active={view === 'shop'} onClick={() => setView('shop')} />
        <NavItem label="Profile" icon="profile" active={view === 'profile'} onClick={() => setView('profile')} />
      </nav>
    </div>
  );
}

function ProductCard({ product, onClick }) {
  const image = product.image.startsWith('/') ? <img className="product-photo" src={product.image} alt={product.name} /> : product.image;
  return <article className="product-card" onClick={onClick} tabIndex="0" onKeyDown={(event) => event.key === 'Enter' && onClick()}>
    <div className={`product-image ${product.accent}`}>{product.badge && <span className="badge">{product.badge}</span>}<button className="heart-button" onClick={(event) => event.stopPropagation()} aria-label={`Save ${product.name}`}><Icon name="heart" size={18} /></button><span className="product-emoji">{image}</span></div>
    <div className="product-info"><span className="product-category">{product.categoryLabel}</span><h3>{product.name}</h3><div className="price-row"><strong>{formatPrice(product.price)}</strong><del>{formatPrice(product.originalPrice)}</del></div><p>from <b>{formatPrice(product.plans[product.plans.length > 1 ? 1 : 0].monthly)}</b>/mo <span>· 0% EMI</span></p></div>
  </article>;
}

function ProductDetail({ product, selectedPlan, setSelectedPlan, onBack, onCheckout, notice }) {
  const image = product.image.startsWith('/') ? <img className="product-photo" src={product.image} alt={product.name} /> : product.image;
  return <div className="app-shell detail-shell">
    <header className="detail-header"><button className="back-button" onClick={onBack} aria-label="Back"><Icon name="back" /></button><span>Product details</span><button className="icon-button" aria-label="Save product"><Icon name="heart" /></button></header>
    <main className="detail-content">
      <div className={`detail-image ${product.accent}`}><span className="product-emoji">{image}</span></div>
      <div className="detail-title"><div><span className="product-category">{product.categoryLabel}</span><h1>{product.name}</h1></div><button className="round-button"><Icon name="heart" /></button></div>
      <div className="detail-price"><strong>{formatPrice(product.price)}</strong><del>{formatPrice(product.originalPrice)}</del><span>Save {formatPrice(product.originalPrice - product.price)}</span></div>
      <div className="emi-highlight"><div className="emi-symbol">₹</div><div><strong>0% interest EMIs</strong><p>Flexible plans starting from {formatPrice(product.plans[product.plans.length > 1 ? 1 : 0].monthly)}/month</p></div><Icon name="arrow" size={18} /></div>
      <section className="detail-section"><h2>Choose your plan</h2><p className="muted">Select a tenure that works for you.</p><div className="plan-list">{product.plans.map((plan) => <button key={plan.id} className={selectedPlan?.id === plan.id ? 'plan-card selected' : 'plan-card'} onClick={() => setSelectedPlan(plan)}><span className="radio">{selectedPlan?.id === plan.id && <span />}</span><span><b>{plan.months} months</b><small>{plan.interest}</small></span><strong>{formatPrice(plan.monthly)}<small>/month</small></strong></button>)}</div></section>
      <section className="detail-section"><h2>About this product</h2><p className="description">{product.description}</p><div className="feature-list">{product.features.map((feature) => <span key={feature}>✓ {feature}</span>)}</div></section>
    </main>
    <div className="sticky-cta"><div><small>Total payable</small><strong>{formatPrice(product.price)}</strong></div><button className="primary-button" onClick={onCheckout}>Continue <Icon name="arrow" size={18} /></button></div>
    {notice && <div className="toast">{notice}</div>}
  </div>;
}

function NavItem({ label, icon, active, onClick }) { return <button className={active ? 'nav-item active' : 'nav-item'} onClick={onClick}><Icon name={icon} size={21} /><span>{label}</span></button>; }

export default App;
