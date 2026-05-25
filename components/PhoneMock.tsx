export function PhoneMock() {
  return (
    <div className="phone-wrap">
      <div className="phone-glow" />
      <div className="phone">
        <div className="phone-screen">
          <div className="phone-statusbar">
            <span className="time">9:41</span>
            <span className="icons">
              <svg width="14" height="10" viewBox="0 0 16 12" fill="currentColor"><rect x="0" y="8" width="2.5" height="4" rx=".5"/><rect x="4" y="6" width="2.5" height="6" rx=".5"/><rect x="8" y="3" width="2.5" height="9" rx=".5"/><rect x="12" y="0" width="2.5" height="12" rx=".5"/></svg>
              <svg width="14" height="10" viewBox="0 0 16 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M2 5a10 10 0 0 1 12 0M4.5 7.5a6 6 0 0 1 7 0M7 10a2 2 0 0 1 2 0"/></svg>
              <svg width="22" height="10" viewBox="0 0 26 12" fill="none"><rect x="1" y="1" width="22" height="10" rx="2.5" stroke="currentColor" strokeOpacity=".5"/><rect x="3" y="3" width="16" height="6" rx="1" fill="currentColor"/><rect x="24" y="4" width="1.5" height="4" rx=".5" fill="currentColor" opacity=".5"/></svg>
            </span>
          </div>

          <div className="phone-chat-head">
            <div className="chat-bot-av">
              <svg viewBox="0 0 280 280" fill="none">
                <path d="M55 166A91 91 0 0 1 181 45" stroke="#001633" strokeWidth="28" strokeLinecap="round"/>
                <path d="M70 146l50-50 34 34 61-65" stroke="#001633" strokeWidth="22" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="chat-head-info">
              <div className="chat-head-name">
                ExpenseFlow Bot
                <span className="check">
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4 10-10"/></svg>
                </span>
              </div>
              <div className="chat-head-status">online · responds in seconds</div>
            </div>
            <span style={{ color: 'var(--k-white-40)' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="5" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/></svg>
            </span>
          </div>

          <div className="phone-msgs">
            <div className="p-day">Today</div>
            <div className="p-msg user">
              <div className="p-bubble">/start <span className="time-stamp">9:38</span></div>
            </div>
            <div className="p-msg bot">
              <div className="p-bubble">
                Hi 👋 Welcome to ExpenseFlow. Your Telegram ID:
                <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--k-cyan)', marginTop: 6, fontSize: 12 }}>847 593 102</div>
                <div style={{ marginTop: 6 }}>Your 6-digit code:</div>
                <div className="otp-code">4 7 9 2 3 1</div>
                <span className="time-stamp">9:38</span>
              </div>
            </div>
            <div className="p-msg user">
              <div className="p-bubble">Coffee, 4.20, this morning <span className="time-stamp">9:40</span></div>
            </div>
            <div className="p-msg bot">
              <div className="p-bubble" style={{ minWidth: 180 }}>
                ✓ Logged
                <div className="ok-divider" />
                <div className="ok-row"><span className="k">Amount</span><span className="v">$4.20</span></div>
                <div className="ok-row"><span className="k">Category</span><span className="v">Food & Drink</span></div>
                <div className="ok-row"><span className="k">When</span><span className="v">Today, 8:15 AM</span></div>
                <div className="ok-divider" />
                <div className="ok-total"><span>March total</span><span>$2,422</span></div>
                <span className="time-stamp">9:40</span>
              </div>
            </div>
          </div>

          <div className="phone-input">
            <div className="phone-input-field">Message ExpenseFlow Bot…</div>
            <div className="phone-input-send">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
