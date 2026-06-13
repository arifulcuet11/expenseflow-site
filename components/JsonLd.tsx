const SITE_URL = 'https://expenseflowai.com';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ExpenseFlow AI',
  url: SITE_URL,
  logo: `${SITE_URL}/brand/expenseflow-logo-dark.svg`,
  sameAs: [],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    url: `${SITE_URL}/contact`,
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'ExpenseFlow AI',
  url: SITE_URL,
  description:
    'AI-powered expense tracker with auto-categorisation, plain-English monthly summaries, multi-currency support, and calendar heatmaps.',
};

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'ExpenseFlow AI',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Web, iOS, Android',
  url: SITE_URL,
  description:
    'AI-powered expense tracker. Log expenses via Telegram in plain English, get monthly AI summaries, multi-currency support, and calendar heatmaps.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    description: '3-month free trial — no card required',
  },
};

const faqItems = [
  {
    q: 'How does the 3-month free trial work?',
    a: 'Start by messaging our Telegram bot — no card, no email needed. Send /start and your account is active immediately. Every feature is unlocked for 90 days.',
  },
  {
    q: 'Can I use it without creating a web account?',
    a: 'Yes — the Telegram bot works entirely on its own throughout your trial and subscription. Log expenses, query summaries, set budgets, and schedule daily digests without ever visiting the website.',
  },
  {
    q: 'What happens after my 3-month free trial?',
    a: "You'll be charged on the cycle you picked at signup — Monthly, 6 months, or Annual. We send Telegram and email reminders 15 days before. If you don't add a card, your account switches to read-only mode. Nothing is ever deleted.",
  },
  {
    q: 'Is there an iOS or Android app?',
    a: 'ExpenseFlow is a Progressive Web App (PWA) — install it from Safari on iOS or Chrome on Android. It opens full-screen with its own icon, works offline, and auto-syncs when you reconnect.',
  },
  {
    q: 'How does multi-currency work?',
    a: 'You set a base currency for storage (e.g. BDT) and a separate display currency (e.g. USD). All transactions are stored in your base currency using live FX rates at the time of logging.',
  },
  {
    q: 'What does "AI" actually do here?',
    a: 'Three concrete things: (1) parsing your free-text messages into structured transactions, (2) writing your monthly spending summary in plain English, and (3) answering questions like "how much did I spend on food last week?" in the chat.',
  },
  {
    q: 'Is my data safe?',
    a: 'All data is transmitted over HTTPS. Your Telegram account is verified via a one-time code — we never see your Telegram credentials. You can permanently delete your account and all associated data at any time.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

export function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
