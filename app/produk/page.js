'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ProdukPage() {
  const [favorites, setFavorites] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isFavOpen, setIsFavOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState('Paling Populer');
  const [activeCategory, setActiveCategory] = useState('Semua');

  useEffect(() => {
    const savedFavs = localStorage.getItem('mineplix_favs');
    if (savedFavs) {
      try {
        setFavorites(JSON.parse(savedFavs));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const saveFavorites = (newFavs) => {
    setFavorites(newFavs);
    localStorage.setItem('mineplix_favs', JSON.stringify(newFavs));
  };

  const toggleFavorite = (id, title, price) => {
    const exists = favorites.some((item) => item.id === id);
    let updated;
    if (exists) {
      updated = favorites.filter((item) => item.id !== id);
    } else {
      updated = [...favorites, { id, title, price }];
    }
    saveFavorites(updated);
  };

  const removeFavorite = (id) => {
    const updated = favorites.filter((item) => item.id !== id);
    saveFavorites(updated);
  };

  const clearFavorites = () => {
    saveFavorites([]);
  };

  const products = [
    {
      id: 'p1',
      badge: 'POPULER',
      title: 'CyberStore Pro',
      price: 'Rp 899rb',
      desc: 'Tema toko online gelap modern lengkap dengan integrasi payment gateway dan animasi smooth.',
      tags: ['E-Commerce', 'Dark UI', 'Responsive'],
      icon: (
        <svg style={{ width: '36px', height: '36px', color: 'var(--accent-primary)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
          <line x1="3" x2="21" y1="6" y2="6" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
      ),
      link: '#',
      btnText: 'Detail Tema',
    },
    {
      id: 'p2',
      badge: 'NEW',
      title: 'Apex SaaS UI',
      price: 'Rp 650rb',
      desc: 'Landing page produk digital & SaaS dengan navigasi floating bar dan layout ekspresif.',
      tags: ['SaaS & Tech', 'Clean Style', 'Fast Load'],
      icon: (
        <svg style={{ width: '36px', height: '36px', color: 'var(--accent-primary)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
          <line x1="3" x2="21" y1="9" y2="9" />
          <line x1="9" x2="9" y1="21" y2="9" />
        </svg>
      ),
      link: '#',
      btnText: 'Detail Tema',
    },
    {
      id: 'p3',
      badge: 'HOT',
      title: 'FolioX Dark',
      price: 'Rp 450rb',
      desc: 'Template portofolio interaktif untuk desainer, developer, dan freelancer dengan tata letak minimalis.',
      tags: ['Portofolio', 'Minimalis', 'Interactive'],
      icon: (
        <svg style={{ width: '36px', height: '36px', color: 'var(--accent-primary)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
      link: '#',
      btnText: 'Detail Tema',
    },
    {
      id: 'p4',
      badge: 'RECOMMENDED',
      title: 'Nexus Corporate',
      price: 'Rp 750rb',
      desc: 'Tema profil perusahaan modern dengan modul klaim layanan, tim, dan blog perusahaan terintegrasi.',
      tags: ['Company Profile', 'Glass UI', 'SEO Ready'],
      icon: (
        <svg style={{ width: '36px', height: '36px', color: 'var(--accent-primary)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
          <line x1="4" x2="4" y1="22" y2="15" />
        </svg>
      ),
      link: '#',
      btnText: 'Detail Tema',
    },
    {
      id: 'p5',
      badge: 'BEST VALUE',
      title: 'Vortex Gaming',
      price: 'Rp 800rb',
      desc: 'Website tema game & esports dengan efek neon bercahaya, jadwal turnamen, dan sistem top up.',
      tags: ['Esports', 'Neon Dark', 'High Motion'],
      icon: (
        <svg style={{ width: '36px', height: '36px', color: 'var(--accent-primary)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
      link: '#',
      btnText: 'Detail Tema',
    },
    {
      id: 'p6',
      badge: 'CUSTOM SERVICE',
      title: 'Full Custom Web',
      price: 'Rp 2.5jt+',
      desc: 'Jasa pembuatan website dari nol sesuai kebutuhan Anda dengan pendekatan estetika modern.',
      tags: ['Custom Service', 'Full Support', 'Bespoke UI'],
      icon: (
        <svg style={{ width: '36px', height: '36px', color: 'var(--accent-primary)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
      link: '/komunitas',
      btnText: 'Konsultasi Jasa',
    },
  ];

  return (
    <main className="container">
      <section className="store-header">
        <h1 className="store-title">
          Katalog Tema & <span>Jasa Website</span>
        </h1>
        <p className="store-subtitle">
          Eksplorasi koleksi template UI modern dengan nuansa dark mode premium dan layanan pembuatan website custom sesuai skala bisnis Anda.
        </p>
      </section>

      <div className="search-filter-wrapper">
        <div className="search-bar">
          <svg className="search-icon" style={{ width: '18px', height: '18px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input type="text" className="search-input" placeholder="Cari nama tema atau jasa..." id="searchInput" />
        </div>

        {/* Filter Dropdown */}
        <div className="filter-dropdown-container">
          <button
            className={`filter-btn ${isFilterOpen ? 'active' : ''}`}
            onClick={() => {
              setIsFavOpen(false);
              setIsFilterOpen(!isFilterOpen);
            }}
            title="Filter & Urutkan"
          >
            <svg style={{ width: '20px', height: '20px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
            </svg>
          </button>

          <div className={`filter-dropdown ${isFilterOpen ? 'open' : ''}`}>
            <div className="dropdown-header">
              <span className="dropdown-title">Filter & Urutkan</span>
            </div>

            <div className="filter-section">
              <div className="filter-section-title">Kategori</div>
              <div className="dropdown-chip-group">
                {['Semua', 'E-Commerce', 'SaaS & Tech', 'Portofolio', 'Custom Service'].map((cat) => (
                  <button
                    key={cat}
                    className={`filter-chip ${activeCategory === cat ? 'active' : ''}`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-section">
              <div className="filter-section-title">Urutkan Berdasarkan</div>
              <div className={`custom-select ${isSortOpen ? 'open' : ''}`}>
                <button
                  className="custom-select-trigger"
                  onClick={() => setIsSortOpen(!isSortOpen)}
                >
                  <span className="selected-text">{selectedSort}</span>
                  <svg style={{ width: '16px', height: '16px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                <div className="custom-select-options">
                  {[
                    { label: 'Paling Populer', value: 'popular' },
                    { label: 'Terbaru', value: 'newest' },
                    { label: 'Harga: Rendah ke Tinggi', value: 'price-low' },
                    { label: 'Harga: Tinggi ke Rendah', value: 'price-high' },
                  ].map((opt) => (
                    <div
                      key={opt.value}
                      className={`custom-option ${selectedSort === opt.label ? 'selected' : ''}`}
                      onClick={() => {
                        setSelectedSort(opt.label);
                        setIsSortOpen(false);
                      }}
                    >
                      {opt.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="dropdown-actions">
              <button
                className="btn-dropdown-reset"
                onClick={() => {
                  setActiveCategory('Semua');
                  setSelectedSort('Paling Populer');
                }}
              >
                Reset
              </button>
              <button
                className="btn-dropdown-apply"
                onClick={() => setIsFilterOpen(false)}
              >
                Terapkan
              </button>
            </div>
          </div>
        </div>

        {/* Favorites Dropdown */}
        <div className="favorites-dropdown-container">
          <button
            className={`fav-header-btn ${isFavOpen ? 'active' : ''}`}
            onClick={() => {
              setIsFilterOpen(false);
              setIsFavOpen(!isFavOpen);
            }}
            title="Produk Disimpan / Favorit"
          >
            <svg style={{ width: '20px', height: '20px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
            <span className="fav-badge">{favorites.length}</span>
          </button>

          <div className={`fav-dropdown ${isFavOpen ? 'open' : ''}`}>
            <div className="dropdown-header">
              <span className="dropdown-title">Produk Favorit Tersimpan</span>
            </div>
            <div className="fav-list">
              {favorites.length === 0 ? (
                <div className="fav-empty-state">Belum ada item favorit.</div>
              ) : (
                favorites.map((item) => (
                  <div className="fav-item" key={item.id}>
                    <div className="fav-item-info">
                      <span className="fav-item-title">{item.title}</span>
                      <span className="fav-item-price">{item.price}</span>
                    </div>
                    <button
                      className="fav-item-remove"
                      onClick={() => removeFavorite(item.id)}
                      title="Hapus"
                    >
                      <svg style={{ width: '16px', height: '16px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </button>
                  </div>
                ))
              )}
            </div>
            <button
              className="btn-dropdown-reset"
              onClick={clearFavorites}
              style={{ width: '100%', textAlign: 'center' }}
            >
              Hapus Semua Favorit
            </button>
          </div>
        </div>
      </div>

      <div className="results-meta">
        <span>
          Menampilkan <strong>6 Produk & Layanan</strong>
        </span>
        <span>Siap Pakai & Kustom</span>
      </div>

      {/* Grid Produk */}
      <section className="products-grid">
        {products.map((p) => {
          const isFav = favorites.some((item) => item.id === p.id);
          return (
            <div className="bubble-card" key={p.id}>
              <div className="card-preview">
                <span className="card-badge">{p.badge}</span>
                {p.icon}
              </div>
              <div className="card-body">
                <div className="card-title-row">
                  <h3 className="card-title">{p.title}</h3>
                  <div className="card-price">{p.price}</div>
                </div>
                <p className="card-desc">{p.desc}</p>
                <div className="card-tags">
                  {p.tags.map((tag) => (
                    <span className="tag-pill" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="card-footer">
                  <Link href={p.link} className="btn-card">
                    {p.btnText}
                    <svg style={{ width: '16px', height: '16px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" x2="21" y1="14" y2="3" />
                    </svg>
                  </Link>
                  <button
                    className={`btn-icon-only fav-toggle-btn ${isFav ? 'favorited' : ''}`}
                    onClick={() => toggleFavorite(p.id, p.title, p.price)}
                    title="Simpan Favorit"
                  >
                    <svg style={{ width: '18px', height: '18px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Pagination */}
      <div className="pagination">
        <a href="#" className="page-btn active">1</a>
        <a href="#" className="page-btn">2</a>
        <a href="#" className="page-btn">3</a>
        <a href="#" className="page-btn">
          <svg style={{ width: '16px', height: '16px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </a>
      </div>
    </main>
  );
}
