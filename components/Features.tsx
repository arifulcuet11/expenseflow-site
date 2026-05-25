'use client';

import { Icons } from './Icons';
import { useLanguage } from '@/lib/language';

type IconKey = keyof typeof Icons;

const ICON_KEYS: IconKey[] = [
  'Sparkles', 'Wallet', 'Chat', 'Globe', 'Bolt', 'Cal', 'Repeat', 'Stack', 'Translate',
];
const TONES = ['', 'cyan', 'blue', '', 'cyan', 'blue', '', 'cyan', 'blue'];

export function Features() {
  const { t } = useLanguage();

  return (
    <section className="sect" id="features">
      <div className="container">
        <div className="sect-head">
          <div className="eyebrow cyan">{t.features.eyebrow}</div>
          <h2>{t.features.h2}</h2>
          <p className="lead">{t.features.lead}</p>
        </div>
        <div className="feat-grid">
          {t.features.items.map((f, i) => {
            const Ic = Icons[ICON_KEYS[i]] as React.ComponentType;
            return (
              <div key={i} className={`feat ${TONES[i]}`}>
                <div className="feat-icon"><Ic /></div>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
