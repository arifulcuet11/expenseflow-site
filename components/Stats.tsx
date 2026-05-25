'use client';

import { useLanguage } from '@/lib/language';

export function Stats() {
  const { t } = useLanguage();

  return (
    <section style={{ padding: '0 0' }}>
      <div className="container">
        <div className="stat-strip">
          <div className="stat">
            <div className="num">{t.stats.s1n}</div>
            <div className="lbl">{t.stats.s1l}</div>
          </div>
          <div className="stat">
            <div className="num">{t.stats.s2n}</div>
            <div className="lbl">{t.stats.s2l}</div>
          </div>
          <div className="stat">
            <div className="num">{t.stats.s3n}</div>
            <div className="lbl">{t.stats.s3l}</div>
          </div>
          <div className="stat">
            <div className="num">{t.stats.s4n}</div>
            <div className="lbl">{t.stats.s4l}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
