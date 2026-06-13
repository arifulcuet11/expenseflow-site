import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About ExpenseFlow AI',
  description: 'Learn how ExpenseFlow AI started, what we build, and who it\'s for. A personal finance tracker built by people who got tired of spreadsheets.',
  alternates: { canonical: 'https://expenseflowai.com/about' },
  openGraph: {
    title: 'About ExpenseFlow AI',
    description: 'Learn how ExpenseFlow AI started, what we build, and who it\'s for. A personal finance tracker built by people who got tired of spreadsheets.',
    url: 'https://expenseflowai.com/about',
  },
  twitter: {
    title: 'About ExpenseFlow AI',
    description: 'Learn how ExpenseFlow AI started, what we build, and who it\'s for.',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
