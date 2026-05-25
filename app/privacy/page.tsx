'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/lib/language';

export default function PrivacyPage() {
  const { lang } = useLanguage();
  return (
    <>
      <Nav />
      <div className="legal-page">
        <div className="container">
          {lang === 'bn' ? <PrivacyBN /> : <PrivacyEN />}
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

function PrivacyEN() {
  return (
    <div className="legal-body">
      <div className="legal-maxw">
        <div className="topbar">
          <div>
            <h1>Privacy Policy</h1>
            <div className="topbar-sub">Last updated: May 2026</div>
          </div>
        </div>
        <div className="legal-content">
          <Section title="1. Introduction">
            ExpenseFlow AI ("we", "us", or "our") is committed to protecting your personal information.
            This Privacy Policy explains what data we collect when you use our AI-powered personal
            finance tracking service (the "Service"), including the web application and the connected
            Telegram bot, how we use that data, and the choices available to you.
            By using the Service, you agree to the collection and use of information as described here.
          </Section>

          <Section title="2. Information We Collect">
            We collect only what is necessary to provide the Service:
            <ul className="legal-list">
              <li><strong>Account information</strong> — your email address, display name, hashed password, and (if you use the Telegram bot) your Telegram user ID.</li>
              <li><strong>Financial data</strong> — transaction records you create, including amounts, currencies, categories, dates, merchants, and free-text descriptions. This includes transactions logged via the web app and via the Telegram bot.</li>
              <li><strong>Preferences</strong> — your chosen base currency, preferred display currency, budget limits per category, and UI settings such as theme and sidebar state.</li>
              <li><strong>Email verification records</strong> — hashed OTP codes used during account registration and password resets. These expire after 10 minutes and are not stored in plain text.</li>
              <li><strong>Conversation memory</strong> — temporary state stored during multi-turn interactions (e.g., pending transaction confirmations waiting for your yes/no). This is cleared once the interaction completes.</li>
            </ul>
            We do <strong>not</strong> collect payment card numbers, bank account details, government IDs, or any other sensitive financial credentials.
          </Section>

          <Section title="3. How We Collect Your Data">
            <ul className="legal-list">
              <li><strong>Directly from you</strong> — when you register, log transactions, set budgets, or update your preferences in the web app.</li>
              <li><strong>Via the Telegram bot</strong> — when you send messages to the bot. Natural language inputs are processed by our backend to extract transaction details.</li>
              <li><strong>Automatically</strong> — session tokens stored in cookies allow us to authenticate your requests. Basic server-side activity logs are generated for security and debugging.</li>
            </ul>
          </Section>

          <Section title="4. How We Use Your Information">
            Your data is used solely to operate and improve the Service:
            <ul className="legal-list">
              <li>To authenticate you and maintain your session.</li>
              <li>To store, display, and allow you to manage your transaction history.</li>
              <li>To compute spending analytics, category breakdowns, and budget usage.</li>
              <li>To send AI-generated spending summaries via the configured LLM provider.</li>
              <li>To send transactional emails: OTP codes for registration, password reset links, and account notifications. Emails are delivered via <strong>Resend</strong>.</li>
              <li>To enforce account access controls and rate limits.</li>
              <li>To perform currency conversions using your base and display currency preferences.</li>
            </ul>
            We do <strong>not</strong> sell, rent, trade, or share your personal data with third parties for marketing, profiling, or advertising purposes.
          </Section>

          <Section title="5. AI and LLM Processing">
            ExpenseFlow AI uses large language models (LLMs) to:
            <ul className="legal-list">
              <li>Extract structured transaction data (amount, category, merchant, date) from free-text messages you send via the web app or Telegram bot.</li>
              <li>Generate narrative spending summaries and AI-powered insights based on your transaction history.</li>
            </ul>
            To do this, relevant portions of your financial data are sent to the LLM provider configured for your deployment — which may be <strong>Google Gemini</strong>, <strong>OpenAI</strong>, or a <strong>self-hosted Ollama</strong> instance.
            <ul className="legal-list">
              <li>Only the minimum data needed to generate a response is sent. We do not send your full account history unnecessarily.</li>
              <li>If you are using a cloud-based LLM provider (Gemini, OpenAI), your data may be processed on their servers. We recommend reviewing their respective privacy policies.</li>
              <li>If a self-hosted Ollama instance is configured, your data stays within that private deployment.</li>
            </ul>
          </Section>

          <Section title="6. Third-Party Services">
            <ul className="legal-list">
              <li><strong>Resend</strong> — for sending transactional emails (OTPs, password resets). Your email address is shared with Resend solely to deliver these messages.</li>
              <li><strong>Telegram</strong> — for the optional bot integration. Your Telegram user ID is stored in our database to link your account. Telegram&apos;s own privacy policy governs data within the Telegram platform.</li>
              <li><strong>LLM Providers</strong> (Gemini / OpenAI / Ollama) — as described in Section 5 above.</li>
            </ul>
          </Section>

          <Section title="7. Data Storage & Security">
            Your data is stored in a secured relational database. We implement the following security measures:
            <ul className="legal-list">
              <li>Passwords are hashed using <strong>bcrypt</strong> and never stored in plain text.</li>
              <li>OTP codes are also bcrypt-hashed before storage and expire after 10 minutes.</li>
              <li>All authenticated API requests require a signed <strong>JWT token</strong>.</li>
              <li>Every database query includes a user ID check — no user can access or modify another user&apos;s records.</li>
              <li>Telegram bot access is restricted to whitelisted Telegram user IDs.</li>
            </ul>
            Despite these measures, no electronic storage is 100% secure. We cannot guarantee absolute security of your data and are not liable for breaches beyond our reasonable control.
          </Section>

          <Section title="8. Cookies & Local Storage">
            <ul className="legal-list">
              <li><strong>Cookies</strong> — we use a single authentication cookie (<code className="legal-code">spendline_token</code>) to maintain your session. No third-party or advertising cookies are used.</li>
              <li><strong>localStorage</strong> — we store UI preferences locally in your browser: theme choice, sidebar state, and onboarding progress. This data never leaves your device.</li>
            </ul>
          </Section>

          <Section title="9. Data Retention">
            We retain your data for as long as your account is active. If you delete your account, all associated data — transactions, budgets, preferences, conversation memory, and email verification records — will be permanently deleted within 30 days.
          </Section>

          <Section title="10. Your Rights">
            <ul className="legal-list">
              <li><strong>Access</strong> — view all transactions, budgets, and account information stored for you via the app.</li>
              <li><strong>Correction</strong> — update your display name, email, password, currency preferences, and transaction records at any time.</li>
              <li><strong>Deletion</strong> — permanently delete your account and all associated data from account settings.</li>
            </ul>
            To exercise any of these rights, contact us at{' '}
            <a href="mailto:privacy@expenseflowai.com" className="legal-link">privacy@expenseflowai.com</a>.
          </Section>

          <Section title="11. Children's Privacy">
            The Service is not directed to individuals under the age of 16. We do not knowingly collect personal data from children. If you believe a child has registered an account, please contact us immediately.
          </Section>

          <Section title="12. Changes to This Policy">
            We may update this Privacy Policy from time to time. We will notify you of material changes by posting a notice in the app. Your continued use of the Service after changes take effect constitutes your acceptance of the updated policy.
          </Section>

          <Section title="13. Contact">
            If you have any questions or concerns regarding this Privacy Policy, contact us at{' '}
            <a href="mailto:privacy@expenseflowai.com" className="legal-link">privacy@expenseflowai.com</a>.
          </Section>
        </div>
        <div className="legal-footer-links">
          <Link href="/terms" className="legal-link">Terms of Service →</Link>
        </div>
      </div>
    </div>
  );
}

function PrivacyBN() {
  return (
    <div className="legal-body">
      <div className="legal-maxw">
        <div className="topbar">
          <div>
            <h1>গোপনীয়তা নীতি</h1>
            <div className="topbar-sub">সর্বশেষ আপডেট: মে ২০২৬</div>
          </div>
        </div>
        <div className="legal-content">
          <Section title="১. ভূমিকা">
            ExpenseFlow AI ("আমরা", "আমাদের") আপনার ব্যক্তিগত তথ্য সুরক্ষায় প্রতিশ্রুতিবদ্ধ।
            এই গোপনীয়তা নীতিতে ব্যাখ্যা করা হয়েছে যে আমাদের AI-চালিত ব্যক্তিগত আর্থিক ট্র্যাকিং সেবা ব্যবহারের সময় আমরা কোন ডেটা সংগ্রহ করি, কীভাবে ব্যবহার করি এবং আপনার কাছে কী বিকল্প রয়েছে।
          </Section>

          <Section title="২. আমরা যে তথ্য সংগ্রহ করি">
            <ul className="legal-list">
              <li><strong>অ্যাকাউন্ট তথ্য</strong> — ইমেইল, প্রদর্শিত নাম, হ্যাশ করা পাসওয়ার্ড এবং Telegram ব্যবহারকারী আইডি।</li>
              <li><strong>আর্থিক ডেটা</strong> — লেনদেনের রেকর্ড: পরিমাণ, মুদ্রা, বিভাগ, তারিখ, ব্যবসায়ী ও বিবরণ।</li>
              <li><strong>পছন্দসমূহ</strong> — বেস মুদ্রা, প্রদর্শন মুদ্রা, বাজেট সীমা ও UI সেটিংস।</li>
              <li><strong>ইমেইল যাচাই রেকর্ড</strong> — হ্যাশ করা OTP কোড, ১০ মিনিট পরে মেয়াদ শেষ।</li>
              <li><strong>কথোপকথন মেমরি</strong> — বহু-পদক্ষেপের ইন্টারঅ্যাকশনে সাময়িক অবস্থা। ইন্টারঅ্যাকশন শেষে মুছে ফেলা হয়।</li>
            </ul>
            আমরা পেমেন্ট কার্ড নম্বর বা ব্যাংক অ্যাকাউন্টের বিবরণ <strong>সংগ্রহ করি না</strong>।
          </Section>

          <Section title="৩. কীভাবে ডেটা সংগ্রহ করি">
            <ul className="legal-list">
              <li><strong>সরাসরি আপনার কাছ থেকে</strong> — নিবন্ধন, লেনদেন লগ, বাজেট নির্ধারণ বা পছন্দ আপডেটের সময়।</li>
              <li><strong>টেলিগ্রাম বটের মাধ্যমে</strong> — বট বার্তা প্রক্রিয়া করে লেনদেনের বিবরণ বের করে।</li>
              <li><strong>স্বয়ংক্রিয়ভাবে</strong> — সেশন টোকেন ও নিরাপত্তা লগ।</li>
            </ul>
          </Section>

          <Section title="৪. তথ্য ব্যবহারের উদ্দেশ্য">
            <ul className="legal-list">
              <li>প্রমাণীকরণ ও সেশন বজায় রাখা।</li>
              <li>লেনদেন ইতিহাস সংরক্ষণ ও পরিচালনা।</li>
              <li>ব্যয় বিশ্লেষণ ও বাজেট ট্র্যাকিং।</li>
              <li>AI-জেনারেটেড সারসংক্ষেপ প্রদান।</li>
              <li>লেনদেনমূলক ইমেইল পাঠানো (<strong>Resend</strong>-এর মাধ্যমে)।</li>
              <li>মুদ্রা রূপান্তর।</li>
            </ul>
            আমরা তৃতীয় পক্ষের সাথে আপনার ডেটা বিক্রি বা শেয়ার <strong>করি না</strong>।
          </Section>

          <Section title="৫. AI এবং LLM প্রক্রিয়াকরণ">
            LLM ব্যবহার করা হয় ফ্রি-টেক্সট থেকে লেনদেন পার্স করতে এবং মাসিক সারসংক্ষেপ তৈরি করতে।
            প্রাসঙ্গিক ডেটা Google Gemini, OpenAI, বা স্ব-হোস্টেড Ollama-তে পাঠানো হতে পারে।
            ক্লাউড প্রদানকারী ব্যবহার করলে তাদের গোপনীয়তা নীতি পর্যালোচনা করুন।
          </Section>

          <Section title="৬. তৃতীয় পক্ষের সেবা">
            <ul className="legal-list">
              <li><strong>Resend</strong> — লেনদেনমূলক ইমেইল পাঠাতে।</li>
              <li><strong>Telegram</strong> — বট ইন্টিগ্রেশনের জন্য।</li>
              <li><strong>LLM প্রদানকারী</strong> — ৫ নং ধারা অনুযায়ী।</li>
            </ul>
          </Section>

          <Section title="৭. ডেটা সংরক্ষণ ও নিরাপত্তা">
            <ul className="legal-list">
              <li>পাসওয়ার্ড <strong>bcrypt</strong>-হ্যাশ করা।</li>
              <li>OTP কোড bcrypt-হ্যাশ, ১০ মিনিটে মেয়াদ শেষ।</li>
              <li>সব API অনুরোধে <strong>JWT টোকেন</strong> প্রয়োজন।</li>
              <li>প্রতিটি কোয়েরিতে ব্যবহারকারী আইডি যাচাই।</li>
            </ul>
          </Section>

          <Section title="৮. কুকি এবং লোকাল স্টোরেজ">
            <ul className="legal-list">
              <li><strong>কুকি</strong> — একটি প্রমাণীকরণ কুকি (<code className="legal-code">spendline_token</code>)।</li>
              <li><strong>localStorage</strong> — থিম ও UI পছন্দ, আপনার ডিভাইসে থাকে।</li>
            </ul>
          </Section>

          <Section title="৯. ডেটা ধরে রাখা">
            অ্যাকাউন্ট মুছলে ৩০ দিনের মধ্যে সব ডেটা স্থায়ীভাবে মুছে ফেলা হয়।
          </Section>

          <Section title="১০. আপনার অধিকার">
            <ul className="legal-list">
              <li><strong>অ্যাক্সেস</strong> — সংরক্ষিত ডেটা দেখা।</li>
              <li><strong>সংশোধন</strong> — তথ্য আপডেট করা।</li>
              <li><strong>মুছে ফেলা</strong> — অ্যাকাউন্ট ও ডেটা স্থায়ীভাবে মুছুন।</li>
            </ul>
            যোগাযোগ: <a href="mailto:privacy@expenseflowai.com" className="legal-link">privacy@expenseflowai.com</a>
          </Section>

          <Section title="১১. শিশুদের গোপনীয়তা">
            সেবাটি ১৬ বছরের কম বয়সীদের জন্য নয়।
          </Section>

          <Section title="১২. নীতির পরিবর্তন">
            পরিবর্তন হলে অ্যাপে জানানো হবে। ব্যবহার চালিয়ে যাওয়া পরিবর্তন গ্রহণের প্রতীক।
          </Section>

          <Section title="১৩. যোগাযোগ">
            <a href="mailto:privacy@expenseflowai.com" className="legal-link">privacy@expenseflowai.com</a>
          </Section>
        </div>
        <div className="legal-footer-links">
          <Link href="/terms" className="legal-link">সেবার শর্তাবলী →</Link>
        </div>
      </div>
    </div>
  );
}
