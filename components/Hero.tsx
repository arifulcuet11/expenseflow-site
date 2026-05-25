'use client';

import { Icons } from './Icons';
import { MockDashboard } from './MockDashboard';
import { useLanguage } from '@/lib/language';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <div className="eyebrow"><span className="pulse" /> {t.hero.eyebrow}</div>
          <h1>
            {t.hero.h1a}{' '}
            <span className="emph">{t.hero.h1b}</span>{t.hero.h1c}
          </h1>
          <p className="hero-sub">{t.hero.sub}</p>
          <div className="hero-cta-row">
            <a className="btn primary xl" href="#get-started">
              {t.hero.cta1} <Icons.Arrow />
            </a>
            <a className="btn outline xl" href="#get-started">{t.hero.cta2}</a>
          </div>
          <div className="hero-meta">
            <span><span className="dot">●</span> {t.hero.meta1}</span>
            <span>{t.hero.meta2}</span>
            <span>{t.hero.meta3}</span>
          </div>
        </div>
        <div className="hero-right">
          <MockDashboard />
        </div>
      </div>
    </section>
  );
}
