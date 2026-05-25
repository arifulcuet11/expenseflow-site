'use client';

import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/lib/language';

const copy = {
  en: {
    title: 'Careers',
    sub: "We're a small team building something we genuinely use every day.",
    noJobs: 'No open positions right now',
    noJobsSub: "We're not hiring at the moment, but we're always interested in exceptional people. If that's you, send us a note.",
    reach: 'Reach out at',
    values: 'Our values',
    v1title: 'Ship fast, learn faster',
    v1body: "We believe in getting things in front of real users quickly. Perfection is the enemy of progress — we iterate based on what we actually observe, not what we assume.",
    v2title: 'Small team, full ownership',
    v2body: "Everyone owns their work end-to-end. No handoffs, no ticket queues. You build it, you ship it, you support it. That accountability makes better engineers.",
    v3title: 'Build for real people',
    v3body: "Every feature we add has to earn its place by making someone's financial life simpler. We cut features that don't pull their weight.",
    v4title: 'Remote-first, async-friendly',
    v4body: "We don't measure hours. We measure outcomes. Work when you're most effective — we overlap on decisions, not on schedules.",
    backHome: '← Back to home',
  },
  bn: {
    title: 'ক্যারিয়ার',
    sub: 'আমরা একটি ছোট দল যারা প্রতিদিন নিজেরাই ব্যবহার করি এমন কিছু তৈরি করছি।',
    noJobs: 'এই মুহূর্তে কোনো পদ খালি নেই',
    noJobsSub: 'আমরা এখন নিয়োগ দিচ্ছি না, তবে অসাধারণ মানুষদের সাথে সবসময় কথা বলতে আগ্রহী। যদি আপনি সেরকম হন, একটি বার্তা পাঠান।',
    reach: 'যোগাযোগ করুন',
    values: 'আমাদের মূল্যবোধ',
    v1title: 'দ্রুত শিপ করুন, আরও দ্রুত শিখুন',
    v1body: 'আমরা বিশ্বাস করি দ্রুত প্রকৃত ব্যবহারকারীদের সামনে পৌঁছানো উচিত। নিখুঁততা অগ্রগতির শত্রু — আমরা প্রকৃত পর্যবেক্ষণের ভিত্তিতে পুনরাবৃত্তি করি।',
    v2title: 'ছোট দল, সম্পূর্ণ মালিকানা',
    v2body: 'প্রত্যেকে তাদের কাজের সম্পূর্ণ মালিক। আপনি তৈরি করুন, শিপ করুন, সাপোর্ট করুন। এই দায়িত্ববোধ আরও ভালো ইঞ্জিনিয়ার তৈরি করে।',
    v3title: 'প্রকৃত মানুষের জন্য তৈরি করুন',
    v3body: 'আমাদের প্রতিটি ফিচারকে কারো আর্থিক জীবন সহজ করার মাধ্যমে তার জায়গা অর্জন করতে হবে।',
    v4title: 'রিমোট-ফার্স্ট, অ্যাসিঙ্ক-বান্ধব',
    v4body: 'আমরা ঘণ্টা গণনা করি না। ফলাফল পরিমাপ করি। যখন আপনি সবচেয়ে কার্যকর তখন কাজ করুন।',
    backHome: '← হোমে ফিরুন',
  },
};

export default function CareersPage() {
  const { lang } = useLanguage();
  const t = copy[lang as 'en' | 'bn'] ?? copy.en;

  return (
    <>
      <Nav />
      <div className="legal-page">
        <div className="container">
          <div className="legal-body">
            <div className="legal-maxw" style={{ maxWidth: 760 }}>
              <div className="topbar">
                <div>
                  <h1>{t.title}</h1>
                  <div className="topbar-sub">{t.sub}</div>
                </div>
              </div>

              {/* No open roles */}
              <div className="careers-empty">
                <div className="careers-empty-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" />
                    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                    <line x1="12" y1="12" x2="12" y2="16" />
                    <line x1="10" y1="14" x2="14" y2="14" />
                  </svg>
                </div>
                <h2>{t.noJobs}</h2>
                <p>{t.noJobsSub}</p>
                <a href="mailto:support@expenseflowai.com" className="btn outline">
                  {t.reach} support@expenseflowai.com
                </a>
              </div>

              {/* Values */}
              <div className="careers-values">
                <h3 className="careers-values-title">{t.values}</h3>
                <div className="careers-values-grid">
                  {[
                    { title: t.v1title, body: t.v1body, icon: '⚡' },
                    { title: t.v2title, body: t.v2body, icon: '🔑' },
                    { title: t.v3title, body: t.v3body, icon: '🎯' },
                    { title: t.v4title, body: t.v4body, icon: '🌍' },
                  ].map(({ title, body, icon }) => (
                    <div key={title} className="careers-value-card">
                      <span className="careers-value-icon">{icon}</span>
                      <h4>{title}</h4>
                      <p>{body}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="legal-footer-links">
                <Link href="/" className="legal-link">{t.backHome}</Link>
                <Link href="/contact" className="legal-link">{lang === 'bn' ? 'যোগাযোগ →' : 'Contact us →'}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
