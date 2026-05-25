import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/lib/language';
import { ThemeProvider } from '@/lib/theme';

export const metadata: Metadata = {
  title: 'ExpenseFlow AI — The expense tracker that thinks like a CFO',
  description: 'AI-powered expense tracker with auto-categorisation, plain-English monthly summaries, multi-currency support, and calendar heatmaps. Start with 3 months free.',
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: '/brand/icon-192.png',
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
