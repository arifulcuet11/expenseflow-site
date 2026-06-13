import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the ExpenseFlow AI team. We read every message — questions, feedback, or just a hello.',
  alternates: { canonical: 'https://expenseflowai.com/contact' },
  openGraph: {
    title: 'Contact ExpenseFlow AI',
    description: 'Get in touch with the ExpenseFlow AI team. We read every message.',
    url: 'https://expenseflowai.com/contact',
  },
  twitter: {
    title: 'Contact ExpenseFlow AI',
    description: 'Get in touch with the ExpenseFlow AI team. We read every message.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
