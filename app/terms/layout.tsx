import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'ExpenseFlow AI terms of service — the rules that govern use of our app and platform.',
  alternates: { canonical: 'https://expenseflowai.com/terms' },
  openGraph: {
    title: 'Terms of Service | ExpenseFlow AI',
    description: 'ExpenseFlow AI terms of service — the rules that govern use of our app and platform.',
    url: 'https://expenseflowai.com/terms',
  },
  robots: { index: true, follow: false },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
