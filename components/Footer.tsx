'use client';

import Link from 'next/link';
import { BrandMark } from './BrandMark';
import { useLanguage } from '@/lib/language';

export function Footer() {
  const { t } = useLanguage();
  const f = t.footer;

  return (
    <footer className="footer">
      <div className="container">
        <div className="foot-grid">
          <div className="foot-brand">
            <Link href="/"><BrandMark /></Link>
            <p>{f.tagline}</p>
            <div style={{ display: 'flex', gap: 10 }}>
              <a className="btn outline" href="/#pricing">{f.startFree}</a>
            </div>
          </div>
          <div className="foot-col">
            <h5>{f.product}</h5>
            <ul>
              <li><a href="/#features">{f.features}</a></li>
              <li><a href="/#how">{f.howItWorks}</a></li>
              <li><a href="/#pricing">{f.pricing}</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>{f.company}</h5>
            <ul>
              <li><Link href="/about">{f.about}</Link></li>
              <li><Link href="/careers">{f.careers}</Link></li>
              <li><Link href="/contact">{f.contact}</Link></li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>{f.support}</h5>
            <ul>
              <li><a href="/#faq">{f.faq}</a></li>
              <li><Link href="/contact">{f.contact}</Link></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>{f.copyright}</span>
          <div className="legal">
            <Link href="/privacy">{f.privacy}</Link>
            <Link href="/terms">{f.terms}</Link>
            <Link href="/cookies">{f.cookies}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
