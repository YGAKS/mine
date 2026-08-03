'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  ShoppingBag, ArrowRight, ExternalLink, ChevronDown, LayoutGrid, Code 
} from 'lucide-react';

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="container">
          <div className="hero-badge">🚀 Solution Studio Minecraft & Design</div>
          <h1 className="hero-title">
            Create Your Design, Builds Your Minecraft Maps And Setups Your Server!
          </h1>
          <p className="hero-subtitle">Buat Komunitas dan Ide mu menjadi kenyataan bersama tim profesional kami!</p>

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
            <p className="section-desc">Pilihan Produk unggulan dan Jasa layanan favorit dari Mineplix Studio.</p>
          </div>

          <div className="products-grid hero-grid-slider">
            {/* Card 1 */}
            <div className="bubble-card">
              <div className="card-preview">
                <span className="card-badge">POPULER</span>
                <ShoppingBag size={38} style={{ color: 'var(--accent-primary)' }} />
              </div>
              <div className="card-body">
                <div className="card-title-row">
                  <h3 className="card-title">Builder Maps</h3>
                  <div className="card-price">Rp 5k - 500k</div>
                </div>
                <p className="card-desc">Buat Maps area lobby dan arena lainya menjadi terbaik dan sesuai tema minecraft server mu!</p>
                <div className="card-tags">
                  <span className="tag-pill">Builders</span>
                  <span className="tag-pill">Maps</span>
                  <span className="tag-pill">Minecraft</span>
                </div>
                <div className="card-footer">
                  <Link href="/produk" className="btn-card">
                    Lihat Katalog <ExternalLink size={16} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bubble-card">
              <div className="card-preview">
                <span className="card-badge">POPULER</span>
                <LayoutGrid size={38} style={{ color: 'var(--accent-primary)' }} />
              </div>
              <div className="card-body">
                <div className="card-title-row">
                  <h3 className="card-title">Design Grafis</h3>
                  <div className="card-price">Rp 5k - 500k</div>
                </div>
                <p className="card-desc">Buat design komunitas atau bisnis mu! logo, e-commerce, resource packs & modeling 3d minecraft/roblox.</p>
                <div className="card-tags">
                  <span className="tag-pill">Design</span>
                  <span className="tag-pill">Modeling 3D</span>
                  <span className="tag-pill">Resource Packs</span>
                </div>
                <div className="card-footer">
                  <Link href="/produk" className="btn-card">
                    Lihat Katalog <ExternalLink size={16} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bubble-card">
              <div className="card-preview">
                <span className="card-badge">BETA / SOON</span>
                <Code size={38} style={{ color: 'var(--accent-primary)' }} />
              </div>
              <div className="card-body">
                <div className="card-title-row">
                  <h3 className="card-title">Setups Server</h3>
                  <div className="card-price">Rp 50k+</div>
                </div>
                <p className="card-desc">Jasa pembuatan Setups server games (Minecraft, Discord) dan website design interaktif.</p>
                <div className="card-tags">
                  <span className="tag-pill">Server Setups</span>
                  <span className="tag-pill">Website</span>
                  <span className="tag-pill">Plugins</span>
                </div>
                <div className="card-footer">
                  <Link href="/produk" className="btn-card">
                    Lihat Katalog <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '20px' }}>
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
            <p className="section-desc">Jawaban cepat seputar pemesanan tema, build minecraft, dan layanan pembuatan server.</p>
          </div>

          <div className="faq-container">
            {[
              {
                q: "Apa itu konsep Material Expressive & Glassmorphism?",
                a: "Desain UI modern yang menggunakan transparansi halus, sudut melengkung tinggi (rounded corners), dan tata letak yang bersih sehingga website Anda terlihat ramah pengguna dan futuristik."
              },
              {
                q: "Berapa lama proses pengerjaan map atau setup server?",
                a: "Untuk template siap pakai, pengerjaan hanya butuh 1x24 jam. Pengerjaan jasa kustom penuh (map custom/plugin custom) biasanya memakan waktu antara 3 hingga 10 hari kerja."
              },
              {
                q: "Apakah tema & website ramah perangkat seluler (Mobile Friendly)?",
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
    </>
  );
}
