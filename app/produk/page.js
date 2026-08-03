'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const PRODUCTS_DATA = [
  {
    id: 'p1',
    title: 'CyberStore Pro',
    price: 'Rp 899rb',
    desc: 'Tema toko online gelap modern lengkap dengan integrasi payment gateway dan animasi smooth.',
    badge: 'POPULER',
    tags: ['E-Commerce', 'Dark UI', 'Responsive'],
    category: 'E-Commerce',
    icon: (
      <svg style={{ width: '36px', height: '36px', color: 'var(--accent-primary)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><line x1="3" x2="21" y1="6" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
    )
  },
  {
    id: 'p2',
    title: 'Apex SaaS UI',
    price: 'Rp 650rb',
    desc: 'Landing page produk digital & SaaS dengan navigasi floating bar dan layout ekspresif.',
    badge: 'NEW',
    tags: ['SaaS & Tech', 'Clean Style', 'Fast Load'],
    category: 'SaaS & Tech',
    icon: (
      <svg style={{ width: '36px', height: '36px', color: 'var(--accent-primary)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="9" x2="9" y1="21" y2="9"/></svg>
    )
  },
  {
    id: 'p3',
    title: 'FolioX Dark',
    price: 'Rp 450rb',
    desc: 'Template portofolio interaktif untuk desainer, developer, dan freelancer dengan tata letak minimalis.',
    badge: 'HOT',
    tags: ['Portofolio', 'Minimalis', 'Interactive'],
    category: 'Portofolio',
    icon: (
      <svg style={{ width: '36px', height: '36px', color: 'var(--accent-primary)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
    )
  },
  {
    id: 'p4',
    title: 'Nexus Corporate',
    price: 'Rp 750rb',
    desc: 'Tema profil perusahaan modern dengan modul klaim layanan, tim, dan blog perusahaan terintegrasi.',
    badge: 'RECOMMENDED',
    tags: ['Company Profile', 'Glass UI', 'SEO Ready'],
    category: 'SaaS & Tech',
    icon: (
      <svg style={{ width: '36px', height: '36px', color: 'var(--accent-primary)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" x2="4" y1="22" y2="15"/></svg>
    )
  },
  {
    id: 'p5',
    title: 'Vortex Gaming',
    price: 'Rp 800rb',
    desc: 'Website tema game & esports dengan efek neon bercahaya, jadwal turnamen, dan sistem top up.',
    badge: 'BEST VALUE',
    tags: ['Esports', 'Neon Dark', 'High Motion'],
    category: 'E-Commerce',
    icon: (
      <svg style={{ width: '36px', height: '36px', color: 'var(--accent-primary)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
    )
  },
  {
    id: 'p6',
    title: 'Full Custom Web',
    price: 'Rp 2.5jt+',
    desc: 'Jasa pembuatan website dari nol sesuai kebutuhan Anda dengan pendekatan estetika modern.',
    badge: 'CUSTOM SERVICE',
    tags: ['Custom Service', 'Full Support', 'Bespoke UI'],
    category: 'Custom Service',
    isConsultation: true,
    icon: (
      <svg style={{ width: '36px', height: '36px', color: 'var(--accent-primary)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
    )
  }
];

export default function ProdukPage() {
  const [favorites, setFavorites] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [sortBy, setSortBy] = useState('popular');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isFavOpen, setIsFavOpen] = useState(false);
  const [isCustomSelectOpen, setIsCustomSelectOpen] = useState(false);

  const filterRef = useRef(null);
  const favRef = useRef(null);
  const selectRef = useRef(null);

  useEffect(() => {
    const savedFavs = JSON.parse(localStorage.getItem('mineplix_favs')) || [];
    setFavorites(savedFavs);
  }, []);

  const saveFavorites = (newFavs) => {
    setFavorites(newFavs);
    localStorage.setItem('mineplix_favs', JSON.stringify(newFavs));
  };

  const toggleFavorite = (id, title, price) => {
    const exists = favorites.some((item) => item.id === id);
    if (exists) {
      saveFavorites(favorites.filter((item) => item.id !== id));
    } else {
      saveFavorites([...favorites, { id, title, price }]);
    }
  };

  const removeFavorite = (id) => {
    saveFavorites(favorites.filter((item) => item.id !== id));
  };

  const clearFavorites = () => {
    saveFavorites([]);
  };

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (filterRef.current && !filterRef.current.contains(e.target)) {
        setIsFilterOpen(false);
      }
      if (favRef.current && !favRef.current.contains(e.target)) {
        setIsFavOpen(false);
      }
      if (selectRef.current && !selectRef.current.contains(e.target)) {
        setIsCustomSelectOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Filter & Search logic
  const filteredProducts = PRODUCTS_DATA.filter((product) => {
    const matchesSearch =
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.desc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === 'Semua' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getSortText = () => {
    switch (sortBy) {
      case 'newest': return 'Terbaru';
      case 'price-low': return 'Harga: Rendah ke Tinggi';
      case 'price-high': return 'Harga: Tinggi ke Rendah';
      default: return 'Paling Populer';
    }
  };

  return (
    <main class="container">
      <section class="store-header">
        <h1 class="store-title">
          Katalog Tema & <span>Jasa Website</span>
        </h1>
        <p class="store-subtitle">
          Eksplorasi koleksi template UI modern dengan nuansa dark mode premium dan layanan pembuatan website custom sesuai skala bisnis Anda.
        </p>
      </section>

      <div class="search-filter-wrapper">
        <div class="search-bar">
          <svg class="search-icon" style={{ width: '18px', height: '18px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          <input
            type="text"
            class="search-input"
            placeholder="Cari nama tema atau jasa..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Filter Dropdown Button */}
        <div class="filter-dropdown-container" ref={filterRef}>
          <button
            class={`filter-btn ${isFilterOpen ? 'active' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              setIsFavOpen(false);
              setIsFilterOpen(!isFilterOpen);
            }}
            title="Filter & Urutkan"
          >
            <svg style={{ width: '20px', height: '20px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
          </button>

          <div class={`filter-dropdown ${isFilterOpen ? 'open' : ''}`}>
            <div class="dropdown-header">
              <span class="dropdown-title">Filter & Urutkan</span>
            </div>

            <div class="filter-section">
              <div class="filter-section-title">Kategori</div>
              <div class="dropdown-chip-group">
                {['Semua', 'E-Commerce', 'SaaS & Tech', 'Portofolio', 'Custom Service'].map((cat) => (
                  <button
                    key={cat}
                    class={`filter-chip ${selectedCategory === cat ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div class="filter-section">
              <div class="filter-section-title">Urutkan Berdasarkan</div>
              <div class={`custom-select ${isCustomSelectOpen ? 'open' : ''}`} ref={selectRef}>
                <button
                  class="custom-select-trigger"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsCustomSelectOpen(!isCustomSelectOpen);
                  }}
                >
                  <span class="selected-text">{getSortText()}</span>
                  <svg style={{ width: '16px', height: '16px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </button>
                <div class="custom-select-options">
                  {[
                    { label: 'Paling Populer', val: 'popular' },
                    { label: 'Terbaru', val: 'newest' },
                    { label: 'Harga: Rendah ke Tinggi', val: 'price-low' },
                    { label: 'Harga: Tinggi ke Rendah', val: 'price-high' }
                  ].map((opt) => (
                    <div
                      key={opt.val}
                      class={`custom-option ${sortBy === opt.val ? 'selected' : ''}`}
                      onClick={() => {
                        setSortBy(opt.val);
                        setIsCustomSelectOpen(false);
                      }}
                    >
                      {opt.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div class="dropdown-actions">
              <button
                class="btn-dropdown-reset"
                onClick={() => {
                  setSelectedCategory('Semua');
                  setSortBy('popular');
                }}
              >
                Reset
              </button>
              <button class="btn-dropdown-apply" onClick={() => setIsFilterOpen(false)}>
                Terapkan
              </button>
            </div>
          </div>
        </div>

        {/* Favorites Dropdown Button */}
        <div class="favorites-dropdown-container" ref={favRef}>
          <button
            class={`fav-header-btn ${isFavOpen ? 'active' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              setIsFilterOpen(false);
              setIsFavOpen(!isFavOpen);
            }}
            title="Produk Disimpan / Favorit"
          >
            <svg style={{ width: '20px', height: '20px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
            <span class="fav-badge">{favorites.length}</span>
          </button>

          <div class={`fav-dropdown ${isFavOpen ? 'open' : ''}`}>
            <div class="dropdown-header">
              <span class="dropdown-title">Produk Favorit Tersimpan</span>
            </div>
            <div class="fav-list">
              {favorites.length === 0 ? (
                <div class="fav-empty-state">Belum ada item favorit.</div>
              ) : (
                favorites.map((item) => (
                  <div class="fav-item" key={item.id}>
                    <div class="fav-item-info">
                      <span class="fav-item-title">{item.title}</span>
                      <span class="fav-item-price">{item.price}</span>
                    </div>
                    <button class="fav-item-remove" onClick={() => removeFavorite(item.id)} title="Hapus">
                      <svg style={{ width: '16px', height: '16px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    </button>
                  </div>
                ))
              )}
            </div>
            <button class="btn-dropdown-reset" onClick={clearFavorites} style={{ width: '100%', textAlign: 'center' }}>
              Hapus Semua Favorit
            </button>
          </div>
        </div>
      </div>

      <div class="results-meta">
        <span>Menampilkan <strong>{filteredProducts.length} Produk & Layanan</strong></span>
        <span>Siap Pakai & Kustom</span>
      </div>

      {/* Grid Produk */}
      <section class="products-grid">
        {filteredProducts.map((product) => {
          const isFav = favorites.some((f) => f.id === product.id);
          return (
            <div class="bubble-card" key={product.id}>
              <div class="card-preview">
                <span class="card-badge">{product.badge}</span>
                {product.icon}
              </div>
              <div class="card-body">
                <div class="card-title-row">
                  <h3 class="card-title">{product.title}</h3>
                  <div class="card-price">{product.price}</div>
                </div>
                <p class="card-desc">{product.desc}</p>
                <div class="card-tags">
                  {product.tags.map((tag) => (
                    <span class="tag-pill" key={tag}>{tag}</span>
                  ))}
                </div>
                <div class="card-footer">
                  {product.isConsultation ? (
                    <Link href="/komunitas" class="btn-card">
                      Konsultasi Jasa
                      <svg style={{ width: '16px', height: '16px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </Link>
                  ) : (
                    <Link href="#" class="btn-card">
                      Detail Tema
                      <svg style={{ width: '16px', height: '16px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
                    </Link>
                  )}
                  <button
                    class={`btn-icon-only ${isFav ? 'favorited' : ''}`}
                    onClick={() => toggleFavorite(product.id, product.title, product.price)}
                    title="Simpan Favorit"
                  >
                    <svg style={{ width: '18px', height: '18px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Pagination */}
      <div class="pagination">
        <Link href="#" class="page-btn active">1</Link>
        <Link href="#" class="page-btn">2</Link>
        <Link href="#" class="page-btn">3</Link>
        <Link href="#" class="page-btn">
          <svg style={{ width: '16px', height: '16px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </Link>
      </div>
    </main>
  );
}
