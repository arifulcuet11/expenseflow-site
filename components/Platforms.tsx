'use client';

import { Icons } from './Icons';
import { useLanguage } from '@/lib/language';

export function Platforms() {
  const { t } = useLanguage();
  const pl = t.platforms;

  return (
    <section className="sect" id="platforms" style={{ paddingTop: 32 }}>
      <div className="container">
        <div className="sect-head">
          <div className="eyebrow cyan">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="5" y="2" width="14" height="20" rx="2.5"/><path d="M12 18h.01"/>
            </svg>
            {pl.eyebrow}
          </div>
          <h2>{pl.h2}</h2>
          <p className="lead">{pl.lead}</p>
        </div>

        <div className="platforms-grid">
          <div className="platform ios">
            <div className="platform-head">
              <div className="platform-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.4 12.6c0-2.5 2-3.7 2.1-3.8-1.2-1.7-3-1.9-3.6-2-1.5-.2-3 .9-3.8.9-.8 0-2-.9-3.3-.9-1.7 0-3.3 1-4.2 2.5-1.8 3.1-.5 7.7 1.3 10.2.9 1.2 1.9 2.6 3.2 2.5 1.3-.1 1.8-.8 3.3-.8s2 .8 3.3.8c1.4 0 2.3-1.2 3.1-2.5.7-1 1.1-2.1 1.3-3.2-2.3-.9-2.7-3.4-2.7-3.7zM14 5.4c.7-.8 1.2-2 1-3.2-1.1.1-2.3.7-3 1.6-.7.7-1.2 1.9-1.1 3.1 1.2.1 2.4-.6 3.1-1.5z"/>
                </svg>
              </div>
              <div>
                <div className="platform-name">{pl.ios.name}</div>
                <div className="platform-sub">{pl.ios.sub}</div>
              </div>
            </div>
            <div className="platform-body">
              {pl.ios.steps.map((step, i) => (
                <div className="platform-step" key={i}>
                  <div className="stp">{i + 1}</div>
                  <div>{step}</div>
                </div>
              ))}
            </div>
            <div className="platform-foot">
              <span>{pl.ios.foot}</span>
              <span className="badge">PWA</span>
            </div>
          </div>

          <div className="platform android">
            <div className="platform-head">
              <div className="platform-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.6 9.5l1.8-3.1c.1-.2 0-.4-.2-.5-.2-.1-.4 0-.5.2L17 9.2A8.5 8.5 0 0 0 12 8a8.5 8.5 0 0 0-5 1.2L5.3 6.1c-.1-.2-.3-.3-.5-.2-.2.1-.3.3-.2.5L6.4 9.5A7.7 7.7 0 0 0 3 16h18a7.7 7.7 0 0 0-3.4-6.5zM8 14a.9.9 0 1 1 .9-.9.9.9 0 0 1-.9.9zm8 0a.9.9 0 1 1 .9-.9.9.9 0 0 1-.9.9z"/>
                </svg>
              </div>
              <div>
                <div className="platform-name">{pl.android.name}</div>
                <div className="platform-sub">{pl.android.sub}</div>
              </div>
            </div>
            <div className="platform-body">
              {pl.android.steps.map((step, i) => (
                <div className="platform-step" key={i}>
                  <div className="stp">{i + 1}</div>
                  <div>{step}</div>
                </div>
              ))}
            </div>
            <div className="platform-foot">
              <span>{pl.android.foot}</span>
              <span className="badge">PWA</span>
            </div>
          </div>

          <div className="platform">
            <div className="platform-head">
              <div className="platform-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="14" rx="2"/><path d="M8 20h8M12 18v2"/></svg>
              </div>
              <div>
                <div className="platform-name">{pl.desktop.name}</div>
                <div className="platform-sub">{pl.desktop.sub}</div>
              </div>
            </div>
            <div className="platform-body">
              {pl.desktop.steps.map((step, i) => (
                <div className="platform-step" key={i}>
                  <div className="stp">{i + 1}</div>
                  <div>{step}</div>
                </div>
              ))}
            </div>
            <div className="platform-foot">
              <span>{pl.desktop.foot}</span>
              <span className="badge orange">{pl.desktop.footBadge}</span>
            </div>
          </div>
        </div>

        <div className="platform-pills">
          {pl.pills.map((label, i) => (
            <div className="platform-pill-stat" key={i}><Icons.Check size={14} /> {label}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
