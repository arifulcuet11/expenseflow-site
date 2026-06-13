'use client';

import { useState } from 'react';
import { Icons } from './Icons';
import { useLanguage } from '@/lib/language';

type Currency = 'usd' | 'bdt';

const PRICES = {
  usd: {
    symbol: '$',
    monthly:  { per: '3',    billed: '$3 billed monthly · starts after free trial', strike: null,  total: null  },
    sixMonth: { per: '2',    billed: '$12 every 6 months',  strike: '$18', total: '$12' },
    annual:   { per: '1.5',  billed: '$18 billed annually', strike: '$36', total: '$18' },
  },
  bdt: {
    symbol: '৳',
    monthly:  { per: '129',  billed: '৳129/mo after discount · regular ৳299', strike: '৳299', total: null   },
    sixMonth: { per: '99',   billed: '৳594 every 6 months',  strike: '৳774',  total: '৳594' },
    annual:   { per: '79',   billed: '৳948 billed annually',  strike: '৳1,548', total: '৳948' },
  },
};

const SHARED_FEATURES: [string | null, string][] = [
  ['Unlimited', 'transactions via Telegram bot + web dashboard'],
  ['Unlimited', 'AI categorisation that learns your edits'],
  ['Unlimited', 'AI monthly + on-demand spending summaries'],
  [null, 'Conversational logging with multi-turn memory'],
  [null, 'Natural language date parsing ("last week", "this month")'],
  [null, 'Large-amount confirmation prompt (≥50,000 BDT)'],
  [null, 'Budgets with soft & hard caps and rollovers'],
  [null, 'Recurring transactions — set once, auto-logged'],
  [null, 'Multi-currency with live FX (120+ supported)'],
  [null, 'Base currency storage + independent display currency'],
  [null, 'Income, transfers, investments & DPS tracking'],
  [null, 'PDF + Excel exports'],
  [null, '15-day deletion grace period'],
  [null, 'PWA — installs on iOS, Android, desktop'],
  [null, 'Offline queue + auto-sync'],
  [null, 'Full English and বাংলা UI'],
];

function CurrencyToggle({ currency, onChange }: { currency: Currency; onChange: (c: Currency) => void }) {
  return (
    <div className="currency-toggle">
      <button className={currency === 'usd' ? 'active' : ''} onClick={() => onChange('usd')}>
        <span className="currency-flag">🇺🇸</span> USD <span className="currency-sym">$</span>
      </button>
      <button className={currency === 'bdt' ? 'active' : ''} onClick={() => onChange('bdt')}>
        <span className="currency-flag">🇧🇩</span> BDT <span className="currency-sym">৳</span>
      </button>
    </div>
  );
}

export function Pricing() {
  const [currency, setCurrency] = useState<Currency>('usd');
  const { t } = useLanguage();
  const pt = t.pricing;
  const p = PRICES[currency];

  return (
    <section className="sect" id="pricing">
      <div className="container">
        <div className="sect-head">
          <div className="eyebrow"><Icons.Tag /> {pt.eyebrow}</div>
          <h2>{pt.h2}</h2>
          <p className="lead">{pt.lead}</p>
        </div>

        <div className="trial-headline">
          <div className="icon-bubble-lg"><Icons.Sparkles /></div>
          <div>
            <div className="ttl">{pt.trialTitle} <span className="h">{pt.trialBold}</span></div>
            <div className="sub">{pt.trialSub}</div>
          </div>
          <div className="right">
            <div className="trial-stat-mini"><div className="n">90</div><div className="l">{pt.days}</div></div>
            <div className="trial-stat-mini"><div className="n">0</div><div className="l">{pt.card}</div></div>
            <div className="trial-stat-mini"><div className="n">∞</div><div className="l">{pt.features}</div></div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 28 }}>
          <CurrencyToggle currency={currency} onChange={setCurrency} />
        </div>

        {currency === 'bdt' && (
          <div className="ppp-note">
            <Icons.Check size={14} />
            {pt.pppNote}
          </div>
        )}

        <div className="cycle-grid">
          <div className="cycle-card">
            <div className="cycle-head">
              <div className="cycle-name">{pt.monthly.name}</div>
              <div className="cycle-desc">{pt.monthly.desc}</div>
            </div>
            <div>
              <div className="cycle-price">
                <span className="ccy">{p.symbol}</span>
                <span className="num">{p.monthly.per}</span>
                <span className="per">/ month</span>
              </div>
              <div className="cycle-billed">
                {p.monthly.strike && <><s>{p.monthly.strike}</s>{' '}</>}
                {p.monthly.billed}
              </div>
            </div>
            <a className="btn outline cycle-cta" href="#get-started">{pt.startTrial}</a>
            <div className="cycle-divider" />
            <div className="cycle-perks-lbl">{pt.monthly.perksLabel}</div>
            <ul className="cycle-perks">
              {pt.monthly.perks.map((pk, i) => (
                <li key={i}><Icons.Check size={16} /> {pk}</li>
              ))}
            </ul>
          </div>

          <div className="cycle-card popular">
            <div className="cycle-tag">{pt.sixMonth.tag}</div>
            <div className="cycle-head">
              <div className="cycle-name">{pt.sixMonth.name}</div>
              <div className="cycle-desc">{pt.sixMonth.desc}</div>
            </div>
            <div>
              <div className="cycle-price">
                <span className="ccy">{p.symbol}</span>
                <span className="num">{p.sixMonth.per}</span>
                <span className="per">/ month</span>
              </div>
              <div className="cycle-billed">
                <s>{p.sixMonth.strike}</s> {p.sixMonth.billed} <span className="save">{currency === 'usd' ? 'Save 25%' : 'Save 23%'}</span>
              </div>
            </div>
            <a className="btn primary cycle-cta" href="#get-started">{pt.startTrial}</a>
            <div className="cycle-divider" />
            <div className="cycle-perks-lbl">{pt.sixMonth.perksLabel}</div>
            <ul className="cycle-perks">
              {pt.sixMonth.perks.map((pk, i) => (
                <li key={i}><Icons.Check size={16} /> {pk}</li>
              ))}
            </ul>
          </div>

          <div className="cycle-card">
            <div className="cycle-tag cyan">{pt.annual.tag}</div>
            <div className="cycle-head">
              <div className="cycle-name">{pt.annual.name}</div>
              <div className="cycle-desc">{pt.annual.desc}</div>
            </div>
            <div>
              <div className="cycle-price">
                <span className="ccy">{p.symbol}</span>
                <span className="num">{p.annual.per}</span>
                <span className="per">/ month</span>
              </div>
              <div className="cycle-billed">
                <s>{p.annual.strike}</s> {p.annual.billed} <span className="save">{currency === 'usd' ? 'Save 50%' : 'Save 39%'}</span>
              </div>
            </div>
            <a className="btn outline cycle-cta" href="#get-started">{pt.startTrial}</a>
            <div className="cycle-divider" />
            <div className="cycle-perks-lbl">{pt.annual.perksLabel}</div>
            <ul className="cycle-perks">
              {pt.annual.perks.map((pk, i) => (
                <li key={i}><Icons.Check size={16} /> {pk}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="cycle-shared">
          <div className="cycle-shared-head">
            <h3>{pt.sharedTitle}</h3>
            <span className="lbl">{pt.sharedSub}</span>
          </div>
          <ul className="shared-features">
            {SHARED_FEATURES.map(([emph, txt], i) => (
              <li key={i}>
                <Icons.Check size={16} />
                <span>{emph && <b>{emph}</b>}{emph ? ' ' : ''}{txt}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="trial-flow">
          <div className="trial-flow-head">
            <h3>{pt.timelineTitle}</h3>
            <span className="sub">{pt.timelineSub}</span>
          </div>
          <div className="timeline">
            {pt.timeline.map((s, i) => (
              <div key={i} className={`tl-step ${i === 4 ? 'muted' : i % 2 === 1 ? 'cyan' : ''}`}>
                <div className="tl-dot">{s.dot}</div>
                <div className="tl-day">{s.day}</div>
                <div className="tl-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="region-note">
          <span>{currency === 'usd' ? pt.showingUsd : pt.showingBdt}</span>
          <span className="region-pill">{pt.payWith}</span>
          <button
            className="region-pill"
            style={{ cursor: 'pointer', background: 'var(--k-white-04)' }}
            onClick={() => setCurrency(currency === 'usd' ? 'bdt' : 'usd')}
          >
            {pt.switchTo} {currency === 'usd' ? '৳ BDT' : '$ USD'}
          </button>
        </div>
      </div>
    </section>
  );
}
