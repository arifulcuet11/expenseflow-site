'use client';

import { useLanguage } from '@/lib/language';

const TONES = ['', 'cyan', 'blue', ''];

export function UseCases() {
  const { t } = useLanguage();

  return (
    <section className="sect" id="usecases" style={{ paddingTop: 32 }}>
      <div className="container">
        <div className="sect-head">
          <div className="eyebrow cyan">{t.useCases.eyebrow}</div>
          <h2>{t.useCases.h2}</h2>
          <p className="lead">{t.useCases.lead}</p>
        </div>
        <div className="usecase-grid">
          {t.useCases.items.map((u, i) => (
            <div key={i} className={`usecase ${TONES[i]}`}>
              <div className="usecase-icon">{u.icon}</div>
              <h4>{u.title}</h4>
              <p>{u.desc}</p>
              <ul>
                {u.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
