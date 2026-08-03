'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ExternalLink, Layers, CheckCircle2, Star, Trophy, Sparkles } from 'lucide-react';

const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: 'Hypixel Style Lobby Spawn',
    category: 'Minecraft Build',
    date: 'Januari 2026',
    desc: 'Desain lobby bertema medieval fantasy dengan kapasitas 500+ player online tanpa rag/lag.',
    stats: '500+ Players',
    badge: 'FEATURED'
  },
  {
    id: 2,
    title: 'Cyberpunk Store UI Theme',
    category: 'Web Design',
    date: 'Desember 2025',
    desc: 'Website e-commerce game server dengan efek glassmorphism dan animasi neon interaktif.',
    stats: '99% Satisfied',
    badge: 'POPULAR'
  },
  {
    id: 3,
    title: 'Survival Custom Server Setup',
    category: 'Server Setup',
    date: 'November 2025',
    desc: 'Konfigurasi server lengkap dengan 40+ plugin kustom, rank system, dan auto economy.',
    stats: '100% Secure',
    badge: 'VERIFIED'
  },
  {
    id: 4,
    title: '3D Weapon & Armor Resource Pack',
    category: 'Design & 3D',
    date: 'Oktober 2025',
    desc: 'Resource pack 3d item Minecraft kustom untuk MMORPG server dengan efek particle.',
    stats: 'Custom Models',
    badge: 'NEW'
  }
];

export default function PortofolioPage() {
  const [filter, setFilter] = useState('Semua');

  const filteredItems = filter === 'Semua' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === filter);

  return (
    <div className="container" style={{ paddingBottom: '60px' }}>
      <section className="page-header">
        <div className="page-badge"><Trophy size={16} /> Track Record & Karya Kami</div>
        <h1 className="page-title">Portofolio & <span>Hasil Pengerjaan</span></h1>
        <p className="page-subtitle">Lihat berbagai karya terbaik yang telah kami selesaikan untuk para kustomer, mulai dari map builder Minecraft hingga website kustom.</p>
      </section>

      {/* Stats Grid */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-number">150+</div>
          <div className="stat-label">Proyek Selesai</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">98%</div>
          <div className="stat-label">Kepuasan Kustomer</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">50+</div>
          <div className="stat-label">Active Game Servers</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">24/7</div>
          <div className="stat-label">Dukungan Tim</div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '32px' }}>
        {['Semua', 'Minecraft Build', 'Web Design', 'Server Setup', 'Design & 3D'].map((cat) => (
          <button
            key={cat}
            className={`filter-chip ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
            style={{ padding: '8px 18px' }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="products-grid">
        {filteredItems.map((item) => (
          <div key={item.id} className="bubble-card">
            <div className="card-preview">
              <span className="card-badge">{item.badge}</span>
              <Sparkles size={38} style={{ color: 'var(--accent-primary)' }} />
            </div>
            <div className="card-body">
              <div className="card-title-row">
                <h3 className="card-title">{item.title}</h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--accent-primary)', fontWeight: '700' }}>{item.stats}</span>
              </div>
              <p className="card-desc">{item.desc}</p>
              <div className="card-tags">
                <span className="tag-pill">{item.category}</span>
                <span className="tag-pill">{item.date}</span>
              </div>
              <div className="card-footer">
                <Link href="/komunitas" className="btn-card">
                  Request Karya Serupa <ExternalLink size={16} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Milestones Timeline */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Perjalanan Mineplix Studio</h2>
          <p className="section-desc">Pencapaian utama dalam perkembangan layanan dan komunitas kami.</p>
        </div>

        <div className="timeline-container">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2026</div>
            <h3 className="timeline-title">Ekspansi Jasa Web & Setup Full Automation</h3>
            <p className="timeline-desc">Peluncuran layanan full-stack web integration untuk toko server Minecraft dan otomatisasi pembayaran instant.</p>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2025</div>
            <h3 className="timeline-title">Mencapai 100+ Project Build Selesai</h3>
            <p className="timeline-desc">Melayani puluhan server Minecraft Indonesia dan Internasional dengan builder berpengalaman.</p>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2024</div>
            <h3 className="timeline-title">Pendirian Mineplix Studio</h3>
            <p className="timeline-desc">Dimulai dari tim desainer & builder independen yang berkolaborasi membangun ekosistem digital gaming.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
