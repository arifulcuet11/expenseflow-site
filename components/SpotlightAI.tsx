'use client';

import { Icons } from './Icons';
import { useLanguage } from '@/lib/language';

export function SpotlightAI() {
  const { t } = useLanguage();

  return (
    <section className="sect" id="how">
      <div className="container">
        <div className="spotlight">
          <div>
            <div className="eyebrow"><Icons.Sparkles /> {t.spotlight.eyebrow}</div>
            <h3>{t.spotlight.h3}</h3>
            <p>{t.spotlight.p}</p>
            <ul className="check-list">
              {t.spotlight.checks.map((c, i) => (
                <li key={i}><Icons.Check size={18} /> {c}</li>
              ))}
            </ul>
          </div>
          <div>
            <div className="chat-preview">
              <div className="chat-msg user">
                <div className="av">R</div>
                <div className="b">How did I do on dining this month?</div>
              </div>
              <div className="chat-msg bot">
                <div className="av">AI</div>
                <div className="b">
                  You spent <b style={{ color: 'var(--k-orange)' }}>$412 on dining</b> — 18% above your average.
                  Most of it (62%) was weekend dinners over $40.
                  <div className="chat-confirm">
                    <div className="r"><span className="k">Budget</span><span className="v">$350</span></div>
                    <div className="r"><span className="k">Actual</span><span className="v">$412</span></div>
                    <div className="r"><span className="k">Top venue</span><span className="v">Kotori (×4)</span></div>
                    <div className="total"><span>Over by</span><span>+$62</span></div>
                  </div>
                </div>
              </div>
              <div className="chat-msg user">
                <div className="av">R</div>
                <div className="b">Set a cap for next month at $320.</div>
              </div>
              <div className="chat-msg bot">
                <div className="av">AI</div>
                <div className="b">Done. I&apos;ll ping you at $260 (80%) and again at $304 (95%). 🎯</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
