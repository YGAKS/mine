'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './globals.css';

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState('dark');
  const pathname = usePathname();

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

  return (
    <html lang="id" data-theme={theme}>
      <head>
        <title>Mineplix Studio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        {/* Background Ambient Orbs */}
        <div class="ambient-bg">
          <div class="orb orb-1"></div>
          <div class="orb orb-2"></div>
        </div>

        {/* Top Navbar */}
        <div class="navbar-wrapper">
          <nav class="navbar">
            <Link href="/" class="logo">
              Mineplix Studio
            </Link>

            <ul class="desktop-links">
              <li>
                <Link href="/" class={`nav-link ${pathname === '/' ? 'active' : ''}`}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/produk" class={`nav-link ${pathname === '/produk' ? 'active' : ''}`}>
                  Produk
                </Link>
              </li>
              <li>
                <Link href="/portofolio" class={`nav-link ${pathname === '/portofolio' ? 'active' : ''}`}>
                  Portofolio
                </Link>
              </li>
              <li>
                <Link href="/komunitas" class={`nav-link ${pathname === '/komunitas' ? 'active' : ''}`}>
                  Komunitas
                </Link>
              </li>
              <li>
                <button class="theme-toggle-btn" onClick={toggleTheme} title="Ganti Mode Terang/Gelap">
                  {theme === 'light' ? (
                    <svg style={{ width: '18px', height: '18px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
                  ) : (
                    <svg style={{ width: '18px', height: '18px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
                  )}
                </button>
              </li>
            </ul>

            <button class="theme-toggle-btn mobile-theme-btn" onClick={toggleTheme} title="Ganti Mode Terang/Gelap">
              {theme === 'light' ? (
                <svg style={{ width: '18px', height: '18px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
              ) : (
                <svg style={{ width: '18px', height: '18px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
              )}
            </button>
          </nav>
        </div>

        {/* Main Content */}
        {children}

        {/* Mobile Bottom Navigation */}
        <div class="bottom-nav">
          <Link href="/" class={`bottom-nav-item ${pathname === '/' ? 'active' : ''}`}>
            <svg style={{ width: '20px', height: '20px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            <span>Home</span>
          </Link>
          <Link href="/produk" class={`bottom-nav-item ${pathname === '/produk' ? 'active' : ''}`}>
            <svg style={{ width: '20px', height: '20px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><line x1="3" x2="21" y1="6" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            <span>Produk</span>
          </Link>
          <Link href="/portofolio" class={`bottom-nav-item ${pathname === '/portofolio' ? 'active' : ''}`}>
            <svg style={{ width: '20px', height: '20px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
            <span>Portofolio</span>
          </Link>
          <Link href="/komunitas" class={`bottom-nav-item ${pathname === '/komunitas' ? 'active' : ''}`}>
            <svg style={{ width: '20px', height: '20px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            <span>Komunitas</span>
          </Link>
        </div>

        {/* Footer */}
        <footer class="footer" id="contact">
          <div class="container">
            <div class="footer-grid">
              <div class="footer-brand">
                <Link href="/" class="logo">Mineplix Studio</Link>
                <p>Penyedia Layanan Jasa sever dan produk, design, maps builder dan setups.</p>
              </div>

              <div>
                <h4 class="footer-col-title">Produk</h4>
                <ul class="footer-links">
                  <li><Link href="/produk">Maps Minecraft</Link></li>
                  <li><Link href="/produk">Resource Design server mc</Link></li>
                  <li><Link href="/produk">Plugin sever - beta</Link></li>
                </ul>
              </div>

              <div>
                <h4 class="footer-col-title">Layanan</h4>
                <ul class="footer-links">
                  <li><Link href="/produk">Builder Maps Minecraft</Link></li>
                  <li><Link href="/produk">Design Grafis</Link></li>
                  <li><Link href="/produk">Custom Web Design - beta</Link></li>
                  <li><Link href="/produk">Setups Server - beta</Link></li>
                </ul>
              </div>

              <div>
                <h4 class="footer-col-title">Komunitas</h4>
                <ul class="footer-links">
                  <li><Link href="/komunitas">Discord Server</Link></li>
                </ul>
              </div>
            </div>

            <div class="footer-bottom">
              <div>&copy; 2026 Mineplix Studio. All rights reserved.</div>
              <div class="social-links">
                <a href="#" class="social-icon" aria-label="Twitter">
                  <svg style={{ width: '16px', height: '16px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                </a>
                <a href="#" class="social-icon" aria-label="Instagram">
                  <svg style={{ width: '16px', height: '16px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a href="#" class="social-icon" aria-label="Github">
                  <svg style={{ width: '16px', height: '16px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
