import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'ExpenseFlow AI cookie policy — what cookies we use and why.',
  alternates: { canonical: 'https://expenseflowai.com/cookies' },
  openGraph: {
    title: 'Cookie Policy | ExpenseFlow AI',
    description: 'ExpenseFlow AI cookie policy — what cookies we use and why.',
    url: 'https://expenseflowai.com/cookies',
  },
  robots: { index: true, follow: false },
};

export default function CookiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
