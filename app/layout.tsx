import type { Metadata, Viewport } from 'next';
import './globals.css';
import { LanguageProvider } from '@/lib/language';
import { ThemeProvider } from '@/lib/theme';

const SITE_URL = 'https://expenseflowai.com';
const SITE_NAME = 'ExpenseFlow AI';
const DEFAULT_TITLE = 'ExpenseFlow AI — The expense tracker that thinks like a CFO';
const DEFAULT_DESCRIPTION = 'AI-powered expense tracker with auto-categorisation, plain-English monthly summaries, multi-currency support, and calendar heatmaps. Start with 3 months free.';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#001633',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: { email: false, telephone: false },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    url: SITE_URL,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ExpenseFlow AI — The expense tracker that thinks like a CFO',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ['/og-image.png'],
    creator: '@expenseflowai',
    site: '@expenseflowai',
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: '/brand/icon-192.png',
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
