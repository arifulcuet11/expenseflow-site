import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'ExpenseFlow AI privacy policy — how we collect, use, and protect your data.',
  alternates: { canonical: 'https://expenseflowai.com/privacy' },
  openGraph: {
    title: 'Privacy Policy | ExpenseFlow AI',
    description: 'ExpenseFlow AI privacy policy — how we collect, use, and protect your data.',
    url: 'https://expenseflowai.com/privacy',
  },
  robots: { index: true, follow: false },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
