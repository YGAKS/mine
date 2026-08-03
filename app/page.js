'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Sun, Moon, Home, ShoppingBag, Briefcase, Users, 
  ArrowRight, ExternalLink, ChevronDown, LayoutGrid, Code, Twitter, Instagram, Github 
} from 'lucide-react';

export default function HomePage() {
  const [theme, setTheme] = useState('dark');
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      {/* Ambient Background */}
      <div className="ambient-bg">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
      </div>

      {/* Header / Navbar */}
      <div className="navbar-wrapper">
        <nav className="navbar">
          <Link href="/" className="logo">Mineplix Studio</Link>

          <ul className="desktop-links">
            <li><Link href="/" className="nav-link active">Home</Link></li>
            <li><Link href="/produk" className="nav-link">Produk</Link></li>
            <li><Link href="/portofolio" className="nav-link">Portofolio</Link></li>
            <li><Link href="/komunitas" className="nav-link">Komunitas</Link></li>
            <li>
              <button className="theme-toggle-btn" onClick={toggleTheme} title="Ganti Mode Terang/Gelap">
                {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
              </button>
            </li>
          </ul>

          <button className="theme-toggle-btn mobile-theme-btn" onClick={toggleTheme} title="Ganti Mode Terang/Gelap">
            {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </nav>
      </div>

      {/* Bottom Nav Mobile */}
      <div className="bottom-nav">
        <Link href="/" className="bottom-nav-item active">
          <Home size={20} />
          <span>Home</span>
        </Link>
        <Link href="/produk" className="bottom-nav-item">
          <ShoppingBag size={20} />
          <span>Produk</span>
        </Link>
        <Link href="/portofolio" className="bottom-nav-item">
          <Briefcase size={20} />
          <span>Portofolio</span>
        </Link>
        <Link href="/komunitas" className="bottom-nav-item">
          <Users size={20} />
          <span>Komunitas</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="container">
          <h1 className="hero-title">
            Create Your Design, Builds Your Minecraft Maps And Setups Your Server!
          </h1>
          <p className="hero-subtitle">Buat Komunitas dan Ide mu!</p>

          <div className="hero-cta-group">
            <Link href="/produk" className="btn-bubble btn-bubble-accent">
              Pesan Sekarang <ArrowRight size={18} />
            </Link>
            <Link href="/komunitas" className="btn-bubble">
              Konsultasi Gratis
            </Link>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section" id="products">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Populer Produk</h2>
            <p className="section-desc">Pilihan Produk unggulan dan Jasa layanan favorit.</p>
          </div>

          <div className="products-grid">
            {/* Card 1 */}
            <div className="bubble-card">
              <div className="card-preview">
                <span className="card-badge">POPULER</span>
                <ShoppingBag size={36} style={{ color: 'var(--accent-primary)' }} />
              </div>
              <div className="card-body">
                <div className="card-title-row">
                  <h3 className="card-title">Builder Maps</h3>
                  <div className="card-price">Rp 5k - 500k</div>
                </div>
                <p className="card-desc">Buat Maps area lobby dan arena lainya menjadi terbaik dan sesuai tema minecraft sever mu!</p>
                <div className="card-tags">
                  <span className="tag-pill">Builders</span>
                  <span className="tag-pill">Maps</span>
                  <span className="tag-pill">Minecraft</span>
                </div>
                <div className="card-footer">
                  <Link href="/produk" className="btn-card">
                    Lihat <ExternalLink size={16} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bubble-card">
              <div className="card-preview">
                <span className="card-badge">POPULER</span>
                <LayoutGrid size={36} style={{ color: 'var(--accent-primary)' }} />
              </div>
              <div className="card-body">
                <div className="card-title-row">
                  <h3 className="card-title">Design Grafis</h3>
                  <div className="card-price">Rp 5k - 500k</div>
                </div>
                <p className="card-desc">Buat design komunitas atau bisnis mu! logo, ecomers dsb bahkan Resource packs dan modeling 3d minecraft/roblox sever.</p>
                <div className="card-tags">
                  <span className="tag-pill">Design</span>
                  <span className="tag-pill">Modeling 3d</span>
                  <span className="tag-pill">Resource Packs</span>
                </div>
                <div className="card-footer">
                  <Link href="/produk" className="btn-card">
                    Lihat <ExternalLink size={16} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bubble-card">
              <div className="card-preview">
                <span className="card-badge">Beta Coming soon</span>
                <Code size={36} style={{ color: 'var(--accent-primary)' }} />
              </div>
              <div className="card-body">
                <div className="card-title-row">
                  <h3 className="card-title">Setups sever</h3>
                  <div className="card-price">Rp 50k+</div>
                </div>
                <p className="card-desc">Jasa pembuatan Setups sever games dan website design.</p>
                <div className="card-tags">
                  <span className="tag-pill">Server Setups</span>
                  <span className="tag-pill">Website</span>
                </div>
                <div className="card-footer">
                  <Link href="/produk" className="btn-card">
                    Lihat <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="more-products-container">
            <Link href="/produk" className="btn-bubble">
              More Products <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section" id="faq">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Pertanyaan Sering Diajukan</h2>
            <p className="section-desc">Jawaban cepat seputar pemesanan tema dan layanan pengembangan website.</p>
          </div>

          <div className="faq-container">
            {[
              {
                q: "Apa itu konsep Material Expressive & Glassmorphism?",
                a: "Desain UI modern yang menggunakan transparansi halus, sudut melengkung tinggi (rounded corners), dan tata letak yang bersih sehingga website Anda terlihat ramah pengguna dan futuristik."
              },
              {
                q: "Berapa lama proses pengerjaan website?",
                a: "Untuk tema siap pakai, setup awal hanya butuh 1x24 jam. Pengerjaan jasa kustom penuh biasanya memakan waktu antara 5 hingga 14 hari kerja."
              },
              {
                q: "Apakah tema ramah perangkat seluler (Mobile Friendly)?",
                a: "Ya, seluruh komponen telah dioptimalkan agar responsif sempurna di layar smartphone, tablet, maupun desktop."
              }
            ].map((faq, index) => (
              <div key={index} className={`faq-item ${openFaq === index ? 'active' : ''}`}>
                <div className="faq-header" onClick={() => toggleFaq(index)}>
                  <div className="faq-question">{faq.q}</div>
                  <div className="faq-icon"><ChevronDown size={20} /></div>
                </div>
                <div className="faq-body">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" id="contact">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link href="/" className="logo">Mineplix Studio</Link>
              <p>Penyedia Layanan Jasa sever dan produk, design, maps builder dan setups.</p>
            </div>

            <div>
              <h4 className="footer-col-title">Produk</h4>
              <ul className="footer-links">
                <li><Link href="/produk">Maps Minecraft</Link></li>
                <li><Link href="/produk">Resource Design server mc</Link></li>
                <li><Link href="/produk">Plugin sever - beta</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="footer-col-title">Layanan</h4>
              <ul className="footer-links">
                <li><Link href="/produk">Builder Maps Minecraft</Link></li>
                <li><Link href="/produk">Design Grafis</Link></li>
                <li><Link href="/produk">Custom Web Design - beta</Link></li>
                <li><Link href="/produk">Setups Server - beta</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="footer-col-title">Komunitas</h4>
              <ul className="footer-links">
                <li><Link href="/komunitas">Discord Server</Link></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <div>&copy; 2026 Mineplix Studio. All rights reserved.</div>
            <div className="social-links">
              <a href="#" className="social-icon" aria-label="Twitter"><Twitter size={16} /></a>
              <a href="#" className="social-icon" aria-label="Instagram"><Instagram size={16} /></a>
              <a href="#" className="social-icon" aria-label="Github"><Github size={16} /></a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
