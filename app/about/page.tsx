'use client';

import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/lib/language';

const copy = {
  en: {
    title: 'About ExpenseFlow AI',
    sub: 'We got tired of spreadsheets. So we built something better.',
    origin: 'Origin',
    originBody: `ExpenseFlow AI started as a personal tool. We were tracking expenses in spreadsheets — copying bank statements, manually categorising rows, trying to make sense of where the money actually went. Every month was the same tedious ritual.

We wanted something that understood plain English. Something you could message like a friend — "spent 1200 on groceries yesterday" — and it would just handle the rest. Something that could look at a month of transactions and tell you something useful, not just show you a bar chart.

So we built it. First for ourselves, then for a handful of people who had the same problem. That's ExpenseFlow AI.`,
    what: 'What we build',
    whatBody: 'A personal finance tracker that uses AI to remove the friction from recording, categorising, and understanding your spending. You add transactions through a web app or a Telegram bot in plain language. The AI extracts the details, categorises them, and at the end of the month gives you a plain-English summary of where your money went and why it matters.',
    who: 'Who it\'s for',
    whoItems: [
      'Freelancers and consultants tracking income and expenses across projects',
      'Founders who need to keep personal and business finances mentally separate',
      'Households that want one place to see where the money goes each month',
      'Anyone who has ever opened a spreadsheet, stared at it, and closed it again',
    ],
    mission: 'Our mission',
    missionBody: 'Make personal financial clarity effortless for anyone, anywhere — regardless of how good they are with spreadsheets.',
    team: 'The team',
    teamBody: 'We\'re a small, remote team. We use ExpenseFlow AI ourselves every day — which means every bug annoys us personally and every improvement makes our own lives a little easier. We think that\'s the right way to build software.',
    built: 'Built with',
    builtItems: ['FastAPI + PostgreSQL on the backend', 'Next.js on the frontend', 'Telegram Bot API for conversational input', 'Google Gemini / OpenAI / Ollama for AI features'],
    cta: 'Try it free for 3 months',
    contact: 'Get in touch →',
  },
  bn: {
    title: 'ExpenseFlow AI সম্পর্কে',
    sub: 'আমরা স্প্রেডশিটে ক্লান্ত হয়ে গিয়েছিলাম। তাই আরও ভালো কিছু তৈরি করলাম।',
    origin: 'শুরুর গল্প',
    originBody: `ExpenseFlow AI একটি ব্যক্তিগত টুল হিসেবে শুরু হয়েছিল। আমরা স্প্রেডশিটে খরচ ট্র্যাক করতাম — ব্যাংক স্টেটমেন্ট কপি করা, ম্যানুয়ালি সারি শ্রেণীবদ্ধ করা, বোঝার চেষ্টা করা টাকা আসলে কোথায় গেল। প্রতি মাস একই একঘেয়ে কাজ।

আমরা এমন কিছু চেয়েছিলাম যা সাধারণ ভাষা বুঝতে পারে। এমন কিছু যাকে বন্ধুর মতো মেসেজ করা যায় — "গতকাল মুদিতে ১২০০ খরচ হয়েছে" — আর বাকিটা সে নিজেই সামলে নেবে।

তাই আমরা তৈরি করলাম। প্রথমে নিজেদের জন্য, তারপর একই সমস্যায় থাকা কিছু মানুষের জন্য। এটাই ExpenseFlow AI।`,
    what: 'আমরা কী তৈরি করি',
    whatBody: 'একটি ব্যক্তিগত অর্থ ট্র্যাকার যা AI ব্যবহার করে খরচ রেকর্ড, শ্রেণীবদ্ধ এবং বিশ্লেষণের ঝামেলা দূর করে। আপনি ওয়েব অ্যাপ বা Telegram বটের মাধ্যমে সাধারণ ভাষায় লেনদেন যোগ করুন। AI বিস্তারিত তথ্য বের করে, শ্রেণীবদ্ধ করে এবং মাস শেষে একটি সহজ সারসংক্ষেপ দেয়।',
    who: 'এটি কার জন্য',
    whoItems: [
      'ফ্রিল্যান্সার এবং পরামর্শদাতা যারা প্রকল্প জুড়ে আয় ও ব্যয় ট্র্যাক করেন',
      'ফাউন্ডার যারা ব্যক্তিগত ও ব্যবসায়িক অর্থ আলাদা রাখতে চান',
      'পরিবার যারা প্রতি মাসে টাকা কোথায় যাচ্ছে তা এক জায়গায় দেখতে চান',
      'যে কেউ কখনো স্প্রেডশিট খুলে তাকিয়ে থেকে বন্ধ করে দিয়েছেন',
    ],
    mission: 'আমাদের লক্ষ্য',
    missionBody: 'যেকোনো মানুষের জন্য, যেকোনো জায়গায় — স্প্রেডশিটে দক্ষতা নির্বিশেষে — ব্যক্তিগত আর্থিক স্বচ্ছতা সহজলভ্য করা।',
    team: 'আমাদের দল',
    teamBody: 'আমরা একটি ছোট, রিমোট দল। আমরা নিজেরাই প্রতিদিন ExpenseFlow AI ব্যবহার করি — যার মানে প্রতিটি বাগ আমাদের ব্যক্তিগতভাবে বিরক্ত করে এবং প্রতিটি উন্নতি আমাদের জীবন একটু সহজ করে।',
    built: 'যা দিয়ে তৈরি',
    builtItems: ['ব্যাকএন্ডে FastAPI + PostgreSQL', 'ফ্রন্টএন্ডে Next.js', 'কথোপকথন ইনপুটের জন্য Telegram Bot API', 'AI ফিচারের জন্য Google Gemini / OpenAI / Ollama'],
    cta: '৩ মাস বিনামূল্যে ব্যবহার করুন',
    contact: 'যোগাযোগ করুন →',
  },
};

export default function AboutPage() {
  const { lang } = useLanguage();
  const t = copy[lang as 'en' | 'bn'] ?? copy.en;

  return (
    <>
      <Nav />
      <main className="legal-page">
        <div className="container">
          <div className="legal-body">
            <div className="legal-maxw" style={{ maxWidth: 760 }}>
              <div className="topbar">
                <div>
                  <h1>{t.title}</h1>
                  <div className="topbar-sub">{t.sub}</div>
                </div>
              </div>

              <div className="legal-content">

                {/* Origin */}
                <div className="about-section">
                  <h2 className="legal-section-title">{t.origin}</h2>
                  {t.originBody.split('\n\n').map((para, i) => (
                    <p key={i} className="about-para">{para}</p>
                  ))}
                </div>

                {/* Mission callout */}
                <div className="about-callout">
                  <span className="about-callout-label">{t.mission}</span>
                  <p>{t.missionBody}</p>
                </div>

                {/* What we build */}
                <div className="about-section">
                  <h2 className="legal-section-title">{t.what}</h2>
                  <p className="about-para">{t.whatBody}</p>
                </div>

                {/* Who it's for */}
                <div className="about-section">
                  <h2 className="legal-section-title">{t.who}</h2>
                  <ul className="legal-list">
                    {t.whoItems.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                </div>

                {/* Team */}
                <div className="about-section">
                  <h2 className="legal-section-title">{t.team}</h2>
                  <p className="about-para">{t.teamBody}</p>
                </div>

                {/* Built with */}
                <div className="about-section">
                  <h2 className="legal-section-title">{t.built}</h2>
                  <ul className="legal-list">
                    {t.builtItems.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                </div>

                {/* CTA */}
                <div className="about-cta">
                  <a href="/#pricing" className="btn primary">{t.cta}</a>
                  <Link href="/contact" className="legal-link">{t.contact}</Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
