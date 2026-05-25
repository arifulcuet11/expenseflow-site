'use client';

import { useState } from 'react';
import { Icons } from './Icons';
import { PhoneMock } from './PhoneMock';
import { useLanguage } from '@/lib/language';

const PORTAL_URL = 'portal.expenseflowai.com/register';

function StepBody({ text }: { text: string }) {
  const parts = text.split(PORTAL_URL);
  if (parts.length === 1) return <p>{text}</p>;
  return (
    <p>
      {parts[0]}
      <a
        href={`https://${PORTAL_URL}`}
        target="_blank"
        rel="noopener noreferrer"
        className="step-url-link"
      >
        {PORTAL_URL}
      </a>
      {parts[1]}
    </p>
  );
}

type PathKey = 'telegram' | 'web';

const STEP_TONES = ['', 'cyan', 'blue', ''];

export function GetStarted() {
  const [path, setPath] = useState<PathKey>('telegram');
  const { t } = useLanguage();

  const gs = t.getStarted;
  const p = gs.paths[path];

  return (
    <section className="sect" id="get-started">
      <div className="container">
        <div className="sect-head">
          <div className="eyebrow"><Icons.Bolt /> {gs.eyebrow}</div>
          <h2>{gs.h2a} <span style={{ color: 'var(--k-orange)' }}>{gs.h2b}</span></h2>
          <p className="lead">{gs.lead}</p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="path-tabs" role="tablist">
            <button className={path === 'telegram' ? 'active' : ''} onClick={() => setPath('telegram')}>
              {gs.tabTelegram} <span className="badge-tiny">{gs.tabTelegramBadge}</span>
            </button>
            <button className={path === 'web' ? 'active' : ''} onClick={() => setPath('web')}>
              {gs.tabWeb}
            </button>
          </div>
        </div>

        <div className="start-grid">
          <div><PhoneMock /></div>
          <div>
            <div className={`path-summary ${path === 'telegram' ? 'orange' : 'cyan'}`}>
              <div className="icon-bubble">
                {path === 'telegram'
                  ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
                  : <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="14" rx="2"/><path d="M8 20h8M12 18v2M7 9l3 3-3 3M13 15h4"/></svg>}
              </div>
              <div className="txt">
                {p.summary} <b>{p.summaryBold}</b>
              </div>
            </div>

            <div className="start-steps" style={{ marginTop: 0 }}>
              {p.steps.map((s, i) => (
                <div className="start-step" key={i}>
                  <div className={`num ${STEP_TONES[i]}`}>{i + 1}</div>
                  <div>
                    <h4>
                      {s.title}
                      {'badge' in s && s.badge && (
                        <span className="platform-pill" style={{ marginLeft: 8 }}>{s.badge}</span>
                      )}
                    </h4>
                    <StepBody text={s.body} />
                  </div>
                </div>
              ))}
            </div>

            <div className="hero-cta-row" style={{ marginTop: 28 }}>
              <a className="btn primary lg" href={path === 'telegram' ? '#' : '#pricing'}>
                {path === 'telegram' && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
                )}
                {p.cta1}
              </a>
              <a className="btn outline lg" href={path === 'telegram' ? '#' : '#platforms'}>
                {path === 'telegram' ? gs.cta2 : gs.cta2Web} <Icons.Arrow />
              </a>
            </div>

            <div className="platform-pills">
              {p.pills.map((label, i) => (
                <div className="platform-pill-stat" key={i}><Icons.Check size={14} /> {label}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
