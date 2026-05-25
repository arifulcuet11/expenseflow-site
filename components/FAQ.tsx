'use client';

import { useState } from 'react';
import { Icons } from './Icons';
import { useLanguage } from '@/lib/language';

export function FAQ() {
  const [open, setOpen] = useState(0);
  const { t } = useLanguage();

  return (
    <section className="sect" id="faq">
      <div className="container">
        <div className="sect-head">
          <div className="eyebrow cyan">{t.faq.eyebrow}</div>
          <h2>{t.faq.h2}</h2>
        </div>
        <div className="faq-list">
          {t.faq.items.map((item, i) => (
            <div key={i} className={`faq-item ${open === i ? 'open' : ''}`}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{item.q}</span>
                <span className="ic"><Icons.Plus /></span>
              </button>
              {open === i && <div className="faq-a">{item.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
