'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/lib/language';

export default function CookiesPage() {
  const { lang } = useLanguage();
  return (
    <>
      <Nav />
      <div className="legal-page">
        <div className="container">
          {lang === 'bn' ? <CookiesBN /> : <CookiesEN />}
        </div>
      </div>
      <Footer />
    </>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h2 className="legal-section-title">{title}</h2>
      <div>{children}</div>
    </div>
  );
}

function CookiesEN() {
  return (
    <div className="legal-body">
      <div className="legal-maxw">
        <div className="topbar">
          <div>
            <h1>Cookie Policy</h1>
            <div className="topbar-sub">Last updated: May 2026</div>
          </div>
        </div>
        <div className="legal-content">
          <Section title="1. What Are Cookies">
            Cookies are small text files placed on your device when you visit a website. They help the site remember your preferences and improve your experience. Some cookies are essential for the site to function; others are optional and used for analytics or personalisation.
          </Section>

          <Section title="2. How We Use Cookies">
            ExpenseFlow AI uses cookies and similar browser storage (such as <code className="legal-code">localStorage</code>) for the following purposes:
            <ul className="legal-list">
              <li><strong>Authentication</strong> — We store a JSON Web Token (JWT) in <code className="legal-code">localStorage</code> and mirror it to a session cookie so our middleware can protect authenticated routes. Without this, you cannot stay logged in.</li>
              <li><strong>Preferences</strong> — Your chosen language (<code className="legal-code">site_lang</code>) and colour theme (<code className="legal-code">site_theme</code>) are saved in <code className="legal-code">localStorage</code> so they persist between visits.</li>
              <li><strong>Session state</strong> — Temporary values needed to complete multi-step flows (e.g. transaction confirmation) are held in memory and are not persisted after your session ends.</li>
            </ul>
          </Section>

          <Section title="3. Types of Storage We Use">
            <ul className="legal-list">
              <li><strong>Strictly necessary cookies</strong> — The authentication session cookie that keeps you signed in. Deleting it will log you out.</li>
              <li><strong>Functional localStorage keys</strong> — <code className="legal-code">site_lang</code> and <code className="legal-code">site_theme</code> store your UI preferences. These are not transmitted to our servers and contain no personal data.</li>
            </ul>
            We do <strong>not</strong> currently use advertising cookies, third-party tracking cookies, or analytics cookies that identify individual users.
          </Section>

          <Section title="4. Third-Party Services">
            The Service integrates with the following third parties that may set their own cookies or use similar technologies:
            <ul className="legal-list">
              <li><strong>Telegram</strong> — If you use the Telegram bot integration, Telegram's own privacy policy and cookie practices apply to your use of the Telegram platform.</li>
              <li><strong>LLM Providers</strong> — Transaction text sent to Google Gemini, OpenAI, or a self-hosted Ollama instance is processed server-side and does not involve browser cookies.</li>
            </ul>
          </Section>

          <Section title="5. Managing Cookies">
            You can control cookies and localStorage through your browser settings:
            <ul className="legal-list">
              <li>Most browsers allow you to view, block, or delete cookies via their privacy or settings menu.</li>
              <li>You can clear <code className="legal-code">localStorage</code> for this site via your browser's developer tools (Application → Local Storage).</li>
              <li>Blocking strictly necessary cookies will prevent you from logging in and using the Service.</li>
              <li>Clearing preference keys (<code className="legal-code">site_lang</code>, <code className="legal-code">site_theme</code>) will reset the site to its default language and dark theme on your next visit.</li>
            </ul>
          </Section>

          <Section title="6. Changes to This Policy">
            We may update this Cookie Policy from time to time to reflect changes in the Service or applicable regulations. The "Last updated" date at the top of this page indicates when it was last revised. Continued use of the Service after an update constitutes acceptance of the revised policy.
          </Section>

          <Section title="7. Contact">
            If you have questions about our use of cookies, contact us at{' '}
            <a href="mailto:support@expenseflowai.com" className="legal-link">support@expenseflowai.com</a>.
          </Section>
        </div>
        <div className="legal-footer-links">
          <Link href="/privacy" className="legal-link">Privacy Policy →</Link>
          <Link href="/terms" className="legal-link">Terms of Service →</Link>
        </div>
      </div>
    </div>
  );
}

function CookiesBN() {
  return (
    <div className="legal-body">
      <div className="legal-maxw">
        <div className="topbar">
          <div>
            <h1>কুকি নীতি</h1>
            <div className="topbar-sub">সর্বশেষ আপডেট: মে ২০২৬</div>
          </div>
        </div>
        <div className="legal-content">
          <Section title="১. কুকি কী">
            কুকি হলো ছোট টেক্সট ফাইল যা আপনি কোনো ওয়েবসাইট পরিদর্শন করলে আপনার ডিভাইসে রাখা হয়। এগুলো সাইটকে আপনার পছন্দ মনে রাখতে এবং আপনার অভিজ্ঞতা উন্নত করতে সাহায্য করে।
          </Section>

          <Section title="২. আমরা কীভাবে কুকি ব্যবহার করি">
            ExpenseFlow AI নিম্নলিখিত উদ্দেশ্যে কুকি এবং ব্রাউজার স্টোরেজ ব্যবহার করে:
            <ul className="legal-list">
              <li><strong>প্রমাণীকরণ</strong> — আপনাকে লগইন অবস্থায় রাখতে JWT টোকেন <code className="legal-code">localStorage</code>-এ সংরক্ষণ করা হয়।</li>
              <li><strong>পছন্দসমূহ</strong> — আপনার ভাষা (<code className="legal-code">site_lang</code>) এবং রঙের থিম (<code className="legal-code">site_theme</code>) পরবর্তী পরিদর্শনের জন্য সংরক্ষণ করা হয়।</li>
              <li><strong>সেশন অবস্থা</strong> — বহু-ধাপের ফ্লোর জন্য অস্থায়ী মান মেমোরিতে রাখা হয়।</li>
            </ul>
          </Section>

          <Section title="৩. আমরা যে ধরনের স্টোরেজ ব্যবহার করি">
            <ul className="legal-list">
              <li><strong>অপরিহার্য কুকি</strong> — লগইন সেশন কুকি। এটি মুছলে আপনি লগ আউট হয়ে যাবেন।</li>
              <li><strong>ফাংশনাল localStorage কী</strong> — <code className="legal-code">site_lang</code> এবং <code className="legal-code">site_theme</code> আপনার UI পছন্দ সংরক্ষণ করে। এতে কোনো ব্যক্তিগত ডেটা নেই।</li>
            </ul>
            আমরা বর্তমানে বিজ্ঞাপন বা তৃতীয়-পক্ষের ট্র্যাকিং কুকি ব্যবহার করি না।
          </Section>

          <Section title="৪. তৃতীয়-পক্ষের সেবা">
            <ul className="legal-list">
              <li><strong>Telegram</strong> — টেলিগ্রাম বট ব্যবহার করলে Telegram-এর নিজস্ব গোপনীয়তা নীতি প্রযোজ্য।</li>
              <li><strong>LLM প্রদানকারী</strong> — লেনদেনের টেক্সট সার্ভার-সাইডে প্রক্রিয়া করা হয়, ব্রাউজার কুকির সাথে কোনো সম্পর্ক নেই।</li>
            </ul>
          </Section>

          <Section title="৫. কুকি পরিচালনা">
            <ul className="legal-list">
              <li>বেশিরভাগ ব্রাউজার তাদের গোপনীয়তা সেটিংসের মাধ্যমে কুকি দেখা, ব্লক বা মুছে ফেলার সুবিধা দেয়।</li>
              <li>ব্রাউজারের ডেভেলপার টুলস থেকে এই সাইটের <code className="legal-code">localStorage</code> পরিষ্কার করা যায়।</li>
              <li>অপরিহার্য কুকি ব্লক করলে লগইন করা সম্ভব হবে না।</li>
              <li>পছন্দ কী মুছলে পরবর্তী পরিদর্শনে ডিফল্ট ভাষা ও ডার্ক থিমে ফিরে যাবে।</li>
            </ul>
          </Section>

          <Section title="৬. এই নীতির পরিবর্তন">
            আমরা সময়ে সময়ে এই কুকি নীতি আপডেট করতে পারি। পৃষ্ঠার শীর্ষে "সর্বশেষ আপডেট" তারিখটি সর্বশেষ সংশোধনের তারিখ নির্দেশ করে।
          </Section>

          <Section title="৭. যোগাযোগ">
            কুকি সম্পর্কে প্রশ্ন থাকলে:{' '}
            <a href="mailto:support@expenseflowai.com" className="legal-link">support@expenseflowai.com</a>
          </Section>
        </div>
        <div className="legal-footer-links">
          <Link href="/privacy" className="legal-link">গোপনীয়তা নীতি →</Link>
          <Link href="/terms" className="legal-link">শর্তাবলী →</Link>
        </div>
      </div>
    </div>
  );
}
