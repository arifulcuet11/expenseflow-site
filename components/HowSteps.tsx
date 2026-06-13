'use client';

import { Icons } from './Icons';
import { useLanguage } from '@/lib/language';

const STEP_ICONS = [Icons.Chat, Icons.Bolt, Icons.Chart];

export function HowSteps() {
  const { t } = useLanguage();

  return (
    <section className="sect" style={{ paddingTop: 32 }}>
      <div className="container">
        <div className="sect-head">
          <div className="eyebrow cyan">{t.howSteps.eyebrow}</div>
          <h2>{t.howSteps.h2}</h2>
        </div>
        <div className="steps">
          {t.howSteps.steps.map((s, i) => {
            const Ic = STEP_ICONS[i];
            return (
              <div key={i} className="step">
                <div className="step-icon"><Ic /></div>
                <div className="step-num">{String(i + 1).padStart(2, '0')}</div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
