import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Work with ExpenseFlow AI. We\'re a small team building an AI-powered expense tracker. See open positions and our values.',
  alternates: { canonical: 'https://expenseflowai.com/careers' },
  openGraph: {
    title: 'Careers at ExpenseFlow AI',
    description: 'Work with ExpenseFlow AI. We\'re a small team building an AI-powered expense tracker. See open positions and our values.',
    url: 'https://expenseflowai.com/careers',
  },
  twitter: {
    title: 'Careers at ExpenseFlow AI',
    description: 'Work with ExpenseFlow AI. Small team, big ambitions.',
  },
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
