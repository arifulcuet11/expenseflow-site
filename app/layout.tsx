import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/lib/language';
import { ThemeProvider } from '@/lib/theme';

export const metadata: Metadata = {
  title: 'ExpenseFlow AI — The expense tracker that thinks like a CFO',
  description: 'AI-powered expense tracker with auto-categorisation, plain-English monthly summaries, multi-currency support, and calendar heatmaps. Start with 3 months free.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/brand/expenseflow-icon.svg', type: 'image/svg+xml' },
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
