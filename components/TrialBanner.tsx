'use client';

import { Icons } from './Icons';
import { useLanguage } from '@/lib/language';

export function TrialBanner() {
  const { t } = useLanguage();

  return (
    <section className="sect" style={{ paddingBottom: 32 }}>
      <div className="container">
        <div className="trial-banner">
          <div>
            <div className="eyebrow"><span className="pulse" /> {t.trialBanner.eyebrow}</div>
            <h3>{t.trialBanner.h3}</h3>
            <p>{t.trialBanner.p}</p>
          </div>
          <div className="actions">
            <a className="btn primary xl" href="#">{t.trialBanner.cta1} <Icons.Arrow /></a>
            <a className="btn outline xl" href="#features">{t.trialBanner.cta2}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
