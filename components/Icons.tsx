export const Icons = {
  Sparkles: () => (
    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/>
      <circle cx="12" cy="12" r="3.5"/>
    </svg>
  ),
  Wallet: () => (
    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 7H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2"/>
      <path d="M21 12V9a2 2 0 0 0-2-2H6.5a2.5 2.5 0 0 1 0-5H17"/>
      <circle cx="17" cy="14" r="1.4"/>
    </svg>
  ),
  Globe: () => (
    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9"/>
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>
    </svg>
  ),
  Chart: () => (
    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-6"/>
    </svg>
  ),
  Cal: () => (
    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="5" width="18" height="16" rx="2"/>
      <path d="M3 10h18M8 3v4M16 3v4"/>
    </svg>
  ),
  Chat: () => (
    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
      <path d="M21 12a8 8 0 1 1-3.6-6.7L21 4l-1 4.3A8 8 0 0 1 21 12z"/>
    </svg>
  ),
  Tag: () => (
    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
      <path d="M20.6 13.4l-7.2 7.2a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8z"/>
      <circle cx="7.5" cy="7.5" r="1"/>
    </svg>
  ),
  Bolt: () => (
    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
      <path d="M13 2L4 14h7l-1 8 9-12h-7z"/>
    </svg>
  ),
  Repeat: () => (
    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 1l4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/>
      <path d="M7 23l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>
    </svg>
  ),
  Stack: () => (
    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
      <path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
    </svg>
  ),
  Translate: () => (
    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 5h12"/><path d="M9 3v2c0 4.4-3.6 8-8 8"/>
      <path d="M5 9c0 4.4 4 8 9 8"/>
      <path d="M13 21l5-11 5 11"/><path d="M15 17h6"/>
    </svg>
  ),
  Check: ({ size = 16 }: { size?: number }) => (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 13l4 4 10-10"/>
    </svg>
  ),
  Arrow: () => (
    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6"/>
    </svg>
  ),
  Plus: () => (
    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
      <path d="M12 5v14M5 12h14"/>
    </svg>
  ),
  Logo: () => (
    <svg aria-hidden="true" width="22" height="22" viewBox="0 0 280 280" fill="none">
      <path d="M55 166A91 91 0 0 1 181 45" stroke="#001633" strokeWidth="28" strokeLinecap="round"/>
      <path d="M55 166A91 91 0 0 0 209 151" stroke="#001633" strokeWidth="28" strokeLinecap="round" opacity=".4"/>
      <path d="M70 146l50-50 34 34 61-65" stroke="#001633" strokeWidth="22" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
};
