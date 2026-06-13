'use client';

export function MockDashboard() {
  const sparkData = [42, 38, 56, 61, 48, 67, 75, 62, 78, 84, 71, 92];
  const spark = (() => {
    const w = 280, h = 100;
    const max = Math.max(...sparkData);
    const min = Math.min(...sparkData);
    const span = max - min || 1;
    const pts = sparkData.map((v, i) => {
      const x = (i / (sparkData.length - 1)) * w;
      const y = h - ((v - min) / span) * (h - 10) - 5;
      return [x, y];
    });
    const path = pts.map((p, i) => (i === 0 ? `M${p[0]},${p[1]}` : `L${p[0]},${p[1]}`)).join(' ');
    const area = `${path} L${w},${h} L0,${h} Z`;
    return { path, area, pts };
  })();

  return (
    <div className="mock-frame">
      <div className="orb orb-1">
        <div className="orb-icon">
          <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M9 11l3 3L22 4" /><path d="M21 12a9 9 0 1 1-6.219-8.56" />
          </svg>
        </div>
        <div>
          <div className="orb-lbl">Budget on track</div>
          <div className="orb-sub">3 categories under target</div>
        </div>
      </div>
      <div className="orb orb-2">
        <span className="orb-dot cyan" />
        <div>
          <div className="orb-lbl">+$240 saved</div>
          <div className="orb-sub">vs. last month</div>
        </div>
      </div>

      <div className="mock-inner">
        <div className="mock-topbar">
          <div className="mock-dots">
            <span className="mock-dot" /><span className="mock-dot" /><span className="mock-dot" />
          </div>
          <div style={{ fontSize: 11, color: 'var(--k-white-40)', fontFamily: 'var(--font-mono)' }}>
            portal.expenseflowai.com · dashboard
          </div>
        </div>

        <div className="mock-title-row">
          <div>
            <div className="mock-title">Good afternoon, Riley</div>
            <div style={{ fontSize: 11, color: 'var(--k-white-40)', marginTop: 4 }}>March 1 → March 28</div>
          </div>
          <div className="mock-sub">This month</div>
        </div>

        <div className="mock-kpis">
          <div className="mock-kpi">
            <div className="accent" />
            <div className="lbl">Spent</div>
            <div className="num"><span className="ccy">$</span>2,418</div>
          </div>
          <div className="mock-kpi cyan">
            <div className="accent" />
            <div className="lbl">Daily avg</div>
            <div className="num"><span className="ccy">$</span>86</div>
          </div>
          <div className="mock-kpi blue">
            <div className="accent" />
            <div className="lbl">Invested</div>
            <div className="num"><span className="ccy">$</span>620</div>
          </div>
        </div>

        <div className="mock-chart-wrap">
          <div className="mock-chart-head">
            <div className="ttl">Daily breakdown</div>
            <div className="leg"><span className="sw" /> Spending</div>
          </div>
          <svg role="img" aria-label="Daily spending sparkline chart showing an upward trend over 12 data points" viewBox="0 0 280 100" width="100%" height="100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="mockFill" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#FFAB40" stopOpacity=".4" />
                <stop offset="100%" stopColor="#FFAB40" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[0, 25, 50, 75].map((y) => (
              <line key={y} x1="0" x2="280" y1={y + 5} y2={y + 5} stroke="rgba(255,255,255,.05)" strokeWidth="1" />
            ))}
            <path d={spark.area} fill="url(#mockFill)" />
            <path d={spark.path} stroke="#FFAB40" strokeWidth="2" fill="none" strokeLinejoin="round" strokeLinecap="round" />
            {spark.pts.map((p, i) => (
              <circle key={i} cx={p[0]} cy={p[1]} r={i === spark.pts.length - 1 ? 3.5 : 0} fill="#FFAB40" />
            ))}
          </svg>
        </div>

        <div className="mock-ai">
          <div className="mock-ai-icon">
            <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/>
              <circle cx="12" cy="12" r="3.5" />
            </svg>
          </div>
          <div className="mock-ai-text">
            You&apos;re spending <b>34% more on groceries</b> this week. Set a $180 weekly cap to stay on track for March.
          </div>
        </div>
      </div>
    </div>
  );
}
