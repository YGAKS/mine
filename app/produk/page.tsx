'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';

interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  priceFormatted: string;
  desc: string;
  badge: string;
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    title: "CyberStore Pro Template",
    category: "web",
    price: 250000,
    priceFormatted: "Rp 250.000",
    desc: "Template e-commerce modern berbahan dasar dark theme untuk toko digital.",
    badge: "Populer"
  },
  {
    id: 2,
    title: "Fantasy Spawn Map",
    category: "maps",
    price: 150000,
    priceFormatted: "Rp 150.000",
    desc: "Map spawn Minecraft berukuran 300x300 dengan detail arsitektur lanskap tinggi.",
    badge: "Minecraft"
  },
  {
    id: 3,
    title: "Apex SaaS Dashboard",
    category: "web",
    price: 350000,
    priceFormatted: "Rp 350.000",
    desc: "Komponen UI dashboard analitik real-time yang sangat responsif.",
    badge: "Pro UI"
  },
  {
    id: 4,
    title: "Server Logo & Branding Pack",
    category: "design",
    price: 100000,
    priceFormatted: "Rp 100.000",
    desc: "Paket grafis vektor lengkap untuk branding server Minecraft & Discord.",
    badge: "Desain"
  }
];

export default function ProdukPage() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            product.desc.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      return a.id - b.id; // default / popular
    });
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <div data-theme={theme} className={theme === 'dark' ? 'dark' : ''}>
      <style jsx global>{`
        :root[data-theme="dark"], .dark {
          --bg-dark: #090d14;
          --bg-card: #111827;
          --bg-card-hover: #1f293d;
          --card-preview-bg: #182234;
          --element-bg: #1e293b;
          --element-bg-hover: #334155;
          --element-text: #f8fafc;
          --nav-bg: rgba(9, 13, 20, 0.50);
          --nav-mobile-bg: rgba(17, 24, 39, 0.50);
          --accent-primary: #6366f1;
          --accent-hover: #4f46e5;
          --text-main: #f8fafc;
          --text-muted: #94a3b8;
          --text-dim: #64748b;
          --badge-bg: #1e293b;
          --border-color: rgba(255, 255, 255, 0.08);
          --dropdown-shadow: 0 12px 30px -5px rgba(0, 0, 0, 0.5);
        }

        :root[data-theme="light"] {
          --bg-dark: #f1f5f9;
          --bg-card: #ffffff;
          --bg-card-hover: #f8fafc;
          --card-preview-bg: #e2e8f0;
          --element-bg: #e2e8f0;
          --element-bg-hover: #cbd5e1;
          --element-text: #0f172a;
          --nav-bg: rgba(255, 255, 255, 0.50);
          --nav-mobile-bg: rgba(255, 255, 255, 0.50);
          --accent-primary: #4f46e5;
          --accent-hover: #4338ca;
          --text-main: #0f172a;
          --text-muted: #475569;
          --text-dim: #94a3b8;
          --badge-bg: #e2e8f0;
          --border-color: rgba(0, 0, 0, 0.08);
          --dropdown-shadow: 0 12px 30px -5px rgba(0, 0, 0, 0.15);
        }

        :root {
          --font-body: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
          --font-display: 'Space Grotesk', sans-serif;
          --radius-bubble-lg: 20px;
          --radius-bubble-md: 14px;
          --radius-bubble-sm: 10px;
          --radius-pill: 999px;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: var(--font-body);
          -webkit-font-smoothing: antialiased;
        }

        body {
          background-color: var(--bg-dark);
          color: var(--text-main);
          min-height: 100vh;
          line-height: 1.6;
          display: flex;
          flex-direction: column;
          transition: background-color 0.15s ease-out, color 0.15s ease-out;
        }

        .ambient-bg {
          position: fixed;
          top: 0; left: 0;
          width: 100vw; height: 100vh;
          z-index: -1;
          overflow: hidden;
          pointer-events: none;
        }

        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(140px);
          opacity: 0.15;
          animation: floatOrb 18s ease-in-out infinite alternate;
        }

        .orb-1 { width: 500px; height: 500px; background: var(--accent-primary); top: -150px; left: -100px; }
        .orb-2 { width: 400px; height: 400px; background: var(--accent-primary); bottom: -150px; right: -100px; animation-delay: -5s; }

        @keyframes floatOrb {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(-30px, 40px) scale(0.95); }
        }

        .container {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .navbar-wrapper {
          position: fixed;
          top: 20px; left: 0; right: 0;
          z-index: 1000;
          display: flex;
          justify-content: center;
          padding: 0 20px;
        }

        .navbar {
          background: var(--nav-bg);
          border-radius: var(--radius-pill);
          backdrop-filter: blur(5px);
          padding: 10px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          max-width: 850px;
          width: 100%;
        }

        .logo {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1.15rem;
          color: var(--text-main);
          text-decoration: none;
        }

        .desktop-links {
          display: flex;
          align-items: center;
          gap: 6px;
          list-style: none;
        }

        .nav-link {
          text-decoration: none;
          color: var(--text-muted);
          font-size: 0.9rem;
          font-weight: 500;
          padding: 8px 16px;
          border-radius: var(--radius-pill);
          transition: all 0.15s ease-out;
        }

        .nav-link:hover, .nav-link.active {
          color: var(--text-main);
          background: var(--element-bg);
        }

        .theme-toggle-btn {
          background: var(--element-bg);
          border: none;
          color: var(--text-main);
          width: 38px; height: 38px;
          border-radius: var(--radius-pill);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .bottom-nav {
          display: none;
          position: fixed;
          bottom: 15px; left: 20px; right: 20px;
          height: 60px;
          background: var(--nav-mobile-bg);
          border-radius: var(--radius-pill);
          backdrop-filter: blur(5px);
          z-index: 9999;
          justify-content: space-around;
          align-items: center;
        }

        .bottom-nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-decoration: none;
          color: var(--text-muted);
          gap: 2px;
          flex: 1;
        }

        .bottom-nav-item span { font-size: 0.7rem; font-weight: 600; }
        .bottom-nav-item.active { color: var(--accent-primary); }

        @media (max-width: 768px) {
          .desktop-links { display: none; }
          .bottom-nav { display: flex; }
        }

        .store-header {
          padding-top: 140px;
          padding-bottom: 20px;
          text-align: center;
        }

        .store-title {
          font-family: var(--font-display);
          font-size: clamp(1.75rem, 5vw, 3.2rem);
          font-weight: 700;
          margin-bottom: 12px;
        }

        .store-title span { color: var(--accent-primary); }

        .store-subtitle {
          font-size: clamp(0.875rem, 2.5vw, 1rem);
          color: var(--text-muted);
          max-width: 580px;
          margin: 0 auto;
        }

        .search-filter-wrapper {
          display: flex;
          align-items: center;
          gap: 12px;
          max-width: 680px;
          margin: 24px auto 20px;
          width: 100%;
          position: relative;
        }

        .search-bar {
          position: relative;
          flex: 1;
          display: flex;
          align-items: center;
        }

        .search-input {
          width: 100%;
          padding: 12px 16px 12px 44px;
          background: var(--bg-card);
          border: none;
          border-radius: var(--radius-pill);
          color: var(--text-main);
          font-size: 0.9rem;
          outline: none;
        }

        .search-icon {
          position: absolute;
          left: 16px;
          color: var(--text-dim);
        }

        .filter-dropdown-container {
          position: relative;
          flex-shrink: 0;
        }

        .filter-btn {
          width: 46px; height: 46px;
          border-radius: var(--radius-pill);
          background: var(--bg-card);
          border: none;
          color: var(--text-main);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .filter-btn:hover, .filter-btn.active {
          background: var(--accent-primary);
          color: #ffffff;
        }

        .filter-dropdown {
          position: absolute;
          top: calc(100% + 14px);
          right: 0;
          width: 300px;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-bubble-lg);
          padding: 20px;
          box-shadow: var(--dropdown-shadow);
          z-index: 100;
        }

        .filter-section-title {
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--text-dim);
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .dropdown-chip-group {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 16px;
        }

        .filter-chip {
          background: var(--element-bg);
          border: none;
          color: var(--text-muted);
          padding: 6px 14px;
          border-radius: var(--radius-pill);
          font-size: 0.8rem;
          cursor: pointer;
        }

        .filter-chip:hover, .filter-chip.active {
          background: var(--accent-primary);
          color: #ffffff;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 24px;
          padding: 20px 0 80px;
        }

        .product-card {
          background: var(--bg-card);
          border-radius: var(--radius-bubble-lg);
          padding: 20px;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .product-preview {
          width: 100%;
          height: 180px;
          border-radius: var(--radius-bubble-md);
          background: var(--card-preview-bg);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }

        .product-title {
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 6px;
        }

        .product-desc {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 16px;
          flex-grow: 1;
        }

        .product-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .product-price {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--accent-primary);
        }

        .buy-btn {
          background: var(--accent-primary);
          color: #ffffff;
          border: none;
          padding: 8px 16px;
          border-radius: var(--radius-pill);
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
        }

        .buy-btn:hover {
          background: var(--accent-hover);
        }

        .footer {
          margin-top: auto;
          padding: 60px 0 30px;
          background: var(--bg-card);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr repeat(3, 1fr);
          gap: 32px;
          margin-bottom: 48px;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          padding-top: 24px;
          border-top: 1px solid var(--border-color);
          color: var(--text-dim);
          font-size: 0.82rem;
        }

        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr; }
          .footer { padding-bottom: 100px; }
        }
      `}</style>

      {/* Ambient Orbs */}
      <div class="ambient-bg">
        <div class="orb orb-1"></div>
        <div class="orb orb-2"></div>
      </div>

      {/* Navbar Wrapper */}
      <div className="navbar-wrapper">
        <nav className="navbar">
          <Link href="/" className="logo">Mineplix Studio</Link>

          <ul className="desktop-links">
            <li><Link href="/" className="nav-link">Home</Link></li>
            <li><Link href="/produk" className="nav-link active">Produk</Link></li>
            <li><Link href="/portofolio" className="nav-link">Portofolio</Link></li>
            <li><Link href="/komunitas" className="nav-link">Komunitas</Link></li>
            <li>
              <button className="theme-toggle-btn" onClick={toggleTheme} title="Ganti Mode">
                {theme === 'dark' ? (
                  <svg style={{ width: 18, height: 18 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
                ) : (
                  <svg style={{ width: 18, height: 18 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>
                )}
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Bottom Nav */}
      <div className="bottom-nav">
        <Link href="/" className="bottom-nav-item">
          <svg style={{ width: 20, height: 20 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          <span>Home</span>
        </Link>
        <Link href="/produk" className="bottom-nav-item active">
          <svg style={{ width: 20, height: 20 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><line x1="3" x2="21" y1="6" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          <span>Produk</span>
        </Link>
        <Link href="/portofolio" className="bottom-nav-item">
          <svg style={{ width: 20, height: 20 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
          <span>Portofolio</span>
        </Link>
        <Link href="/komunitas" className="bottom-nav-item">
          <svg style={{ width: 20, height: 20 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          <span>Komunitas</span>
        </Link>
      </div>

      <main className="container">
        <header className="store-header">
          <h1 className="store-title">Katalog <span>Produk & Layanan</span></h1>
          <p className="store-subtitle">Temukan berbagai template digital, peta Minecraft, dan komponen UI siap pakai.</p>
        </header>

        {/* Filter & Search Controls */}
        <div className="search-filter-wrapper">
          <div className="search-bar">
            <svg className="search-icon" style={{ width: 18, height: 18 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            <input
              type="text"
              className="search-input"
              placeholder="Cari produk..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="filter-dropdown-container">
            <button
              className={`filter-btn ${isFilterOpen ? 'active' : ''}`}
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              title="Filter Produk"
            >
              <svg style={{ width: 20, height: 20 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
            </button>

            {isFilterOpen && (
              <div className="filter-dropdown">
                <div className="filter-section-title">Kategori</div>
                <div className="dropdown-chip-group">
                  <button className={`filter-chip ${selectedCategory === 'all' ? 'active' : ''}`} onClick={() => setSelectedCategory('all')}>Semua</button>
                  <button className={`filter-chip ${selectedCategory === 'web' ? 'active' : ''}`} onClick={() => setSelectedCategory('web')}>Web UI</button>
                  <button className={`filter-chip ${selectedCategory === 'maps' ? 'active' : ''}`} onClick={() => setSelectedCategory('maps')}>Minecraft Maps</button>
                  <button className={`filter-chip ${selectedCategory === 'design' ? 'active' : ''}`} onClick={() => setSelectedCategory('design')}>Desain</button>
                </div>

                <div className="filter-section-title">Urutkan Harga</div>
                <div className="dropdown-chip-group">
                  <button className={`filter-chip ${sortBy === 'popular' ? 'active' : ''}`} onClick={() => setSortBy('popular')}>Populer</button>
                  <button className={`filter-chip ${sortBy === 'price-low' ? 'active' : ''}`} onClick={() => setSortBy('price-low')}>Termurah</button>
                  <button className={`filter-chip ${sortBy === 'price-high' ? 'active' : ''}`} onClick={() => setSortBy('price-high')}>Termahal</button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Product Cards List */}
        <section className="product-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-preview">
                <svg style={{ width: 42, height: 42, color: 'var(--accent-primary)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
              </div>
              <h3 className="product-title">{product.title}</h3>
              <p className="product-desc">{product.desc}</p>
              <div className="product-footer">
                <span className="product-price">{product.priceFormatted}</span>
                <a href="#order" className="buy-btn">Beli Sekarang</a>
              </div>
            </div>
          ))}
        </section>
      </main>

      {/* Footer Component */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <Link href="/" className="logo">Mineplix Studio</Link>
              <p style={{ color: 'var(--text-muted)', marginTop: 12, fontSize: '0.88rem' }}>Penyedia Layanan Jasa server, desain, map builder, dan setups.</p>
            </div>
          </div>
          <div className="footer-bottom">
            <div>&copy; 2026 Mineplix Studio. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
