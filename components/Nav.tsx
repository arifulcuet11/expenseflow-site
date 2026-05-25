'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BrandMark } from './BrandMark';
import { useLanguage } from '@/lib/language';
import { useTheme } from '@/lib/theme';

function SunIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      {open ? (
        <>
          <line x1="4" y1="4" x2="16" y2="16" />
          <line x1="16" y1="4" x2="4" y2="16" />
        </>
      ) : (
        <>
          <line x1="3" y1="6" x2="17" y2="6" />
          <line x1="3" y1="10" x2="17" y2="10" />
          <line x1="3" y1="14" x2="17" y2="14" />
        </>
      )}
    </svg>
  );
}

export function Nav() {
  const { t, lang, setLang } = useLanguage();
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const home = pathname === '/';
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const href = (anchor: string) => home ? anchor : `/${anchor}`;

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
    <header className="nav">
      <div className="container nav-inner">
        <Link href="/"><BrandMark /></Link>
        <nav className="nav-links">
          <a className="nav-link" href={href('#features')}>{t.nav.features}</a>
          <a className="nav-link" href={href('#get-started')}>{t.nav.getStarted}</a>
          <a className="nav-link" href={href('#platforms')}>{t.nav.apps}</a>
          <a className="nav-link" href={href('#pricing')}>{t.nav.pricing}</a>
          <a className="nav-link" href={href('#faq')}>{t.nav.faq}</a>
        </nav>
        <div className="nav-spacer" />
        <div className="nav-actions">
          <button
            className="btn ghost"
            style={{ fontSize: 13, padding: '7px 10px' }}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            className="btn ghost"
            style={{ fontSize: 13, padding: '6px 12px' }}
            onClick={() => setLang(lang === 'en' ? 'bn' : 'en')}
            title="Switch language"
          >
            {lang === 'en' ? 'বাংলা' : 'EN'}
          </button>
          <a className="btn ghost nav-signin" href="https://portal.expenseflowai.com" target="_blank" rel="noopener noreferrer">{t.nav.signIn}</a>
          <a className="btn primary nav-trial" href={href('#pricing')}>{t.nav.startTrial}</a>
        </div>
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <HamburgerIcon open={menuOpen} />
        </button>
      </div>

    </header>
    {mounted && createPortal(
      <>
        {menuOpen && <div className="nav-mobile-overlay" onClick={closeMenu} />}
        <div className={`nav-mobile-drawer${menuOpen ? ' open' : ''}`}>
          <nav className="nav-mobile-links">
            <a className="nav-mobile-link" href={href('#features')} onClick={closeMenu}>{t.nav.features}</a>
            <a className="nav-mobile-link" href={href('#get-started')} onClick={closeMenu}>{t.nav.getStarted}</a>
            <a className="nav-mobile-link" href={href('#platforms')} onClick={closeMenu}>{t.nav.apps}</a>
            <a className="nav-mobile-link" href={href('#pricing')} onClick={closeMenu}>{t.nav.pricing}</a>
            <a className="nav-mobile-link" href={href('#faq')} onClick={closeMenu}>{t.nav.faq}</a>
          </nav>
          <div className="nav-mobile-actions">
            <a className="btn ghost" style={{ width: '100%', justifyContent: 'center' }} href="https://portal.expenseflowai.com" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>{t.nav.signIn}</a>
            <a className="btn primary" style={{ width: '100%', justifyContent: 'center' }} href={href('#pricing')} onClick={closeMenu}>{t.nav.startTrial}</a>
          </div>
        </div>
      </>,
      document.body
    )}
    </>
  );
}
