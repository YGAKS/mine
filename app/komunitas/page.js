'use client';

import Link from 'next/link';
import { Users, MessageSquare, ShieldCheck, HeartHandshake, ArrowRight, Zap, Gift } from 'lucide-react';

export default function KomunitasPage() {
  return (
    <div className="container" style={{ paddingBottom: '60px' }}>
      <section className="page-header">
        <div className="page-badge"><Users size={16} /> Gabung Komunitas Mineplix</div>
        <h1 className="page-title">Komunitas & <span>Dukungan Tim</span></h1>
        <p className="page-subtitle">Tempat berdiskusi, bertanya seputar produk, mendapatkan update diskon, dan konsultasi proyek bersama tim Mineplix Studio.</p>
      </section>

      {/* Discord Hero Card */}
      <div className="discord-card">
        <MessageSquare size={48} style={{ color: 'var(--accent-primary)', marginBottom: '16px' }} />
        <h3>Bergabung di Discord Resmi</h3>
        <p>Dapatkan tiket dukungan cepat 24/7, ikuti giveaway bulanan, serta berinteraksi dengan ribuan member server owner lainnya.</p>
        <a 
          href="https://discord.gg" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-bubble btn-bubble-accent"
          style={{ padding: '14px 32px', fontSize: '1rem' }}
        >
          Join Discord Server <ArrowRight size={18} />
        </a>
      </div>

      {/* Community Features */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Keuntungan Bergabung</h2>
          <p className="section-desc">Nikmati fasilitas eksklusif untuk setiap member komunitas kami.</p>
        </div>

        <div className="products-grid">
          <div className="bubble-card">
            <div className="card-preview" style={{ height: '120px' }}>
              <Zap size={36} style={{ color: 'var(--accent-primary)' }} />
            </div>
            <div className="card-body">
              <h3 className="card-title" style={{ marginBottom: '8px' }}>Fast Support</h3>
              <p className="card-desc">Sistem tiket terstruktur untuk menangani pertanyaan teknis dan pesanan kustom Anda dengan respon kilat.</p>
            </div>
          </div>

          <div className="bubble-card">
            <div className="card-preview" style={{ height: '120px' }}>
              <Gift size={36} style={{ color: 'var(--accent-primary)' }} />
            </div>
            <div className="card-body">
              <h3 className="card-title" style={{ marginBottom: '8px' }}>Promo & Giveaway</h3>
              <p className="card-desc">Dapatkan voucher diskon khusus member Discord dan event giveaway map kustom berkala.</p>
            </div>
          </div>

          <div className="bubble-card">
            <div className="card-preview" style={{ height: '120px' }}>
              <ShieldCheck size={36} style={{ color: 'var(--accent-primary)' }} />
            </div>
            <div className="card-body">
              <h3 className="card-title" style={{ marginBottom: '8px' }}>Garansi & Keamanan</h3>
              <p className="card-desc">Transaksi aman dengan garansi perbaikan bug atau penyesuaian build pasca penyelesaian proyek.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Banner */}
      <div className="stat-card" style={{ maxWidth: '800px', margin: '20px auto', padding: '40px 24px' }}>
        <HeartHandshake size={40} style={{ color: 'var(--accent-primary)', marginBottom: '12px' }} />
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', marginBottom: '8px' }}>Punya Proyek Custom Khusus?</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: '20px', maxWidth: '500px', margin: '0 auto 20px' }}>
          Diskusikan konsep map, tema website, atau setup server sesuai budget dan preferensi Anda.
        </p>
        <a href="https://discord.gg" target="_blank" rel="noopener noreferrer" className="btn-bubble btn-bubble-accent">
          Konsultasi Gratis Sekarang
        </a>
      </div>
    </div>
  );
}
