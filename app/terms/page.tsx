'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/lib/language';

export default function TermsPage() {
  const { lang } = useLanguage();
  return (
    <>
      <Nav />
      <main className="legal-page">
        <div className="container">
          {lang === 'bn' ? <TermsBN /> : <TermsEN />}
        </div>
      </main>
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

function TermsEN() {
  return (
    <div className="legal-body">
      <div className="legal-maxw">
        <div className="topbar">
          <div>
            <h1>Terms of Service</h1>
            <div className="topbar-sub">Last updated: May 2026</div>
          </div>
        </div>
        <div className="legal-content">
          <Section title="1. Acceptance of Terms">
            By registering for an account and using ExpenseFlow AI ("the Service", "we", "us", or "our"),
            you agree to be bound by these Terms of Service and our{' '}
            <Link href="/privacy" className="legal-link">Privacy Policy</Link>.
            If you do not agree to these Terms, you must not create an account or use the Service.
            We may update these Terms from time to time. Your continued use of the Service after an update constitutes your acceptance of the new Terms.
          </Section>

          <Section title="2. What the Service Does">
            ExpenseFlow AI is a personal finance tracking application that lets you:
            <ul className="legal-list">
              <li>Record, categorise, and review income and expense transactions.</li>
              <li>Add transactions via the web app or through a connected <strong>Telegram bot</strong> using natural language.</li>
              <li>View spending analytics broken down by category, date range, and transaction type.</li>
              <li>Receive <strong>AI-generated spending summaries</strong> powered by a large language model (LLM) such as Google Gemini, OpenAI, or a self-hosted Ollama instance.</li>
              <li>Set monthly budget limits per category and track progress against them.</li>
              <li>Work with multiple currencies — you choose a base currency and a separate display currency for conversions.</li>
            </ul>
            The Service is intended for personal, non-commercial use only.
          </Section>

          <Section title="3. Account Registration">
            <ul className="legal-list">
              <li>You must register with a valid email address. A one-time password (OTP) is sent to verify your address before the account is activated.</li>
              <li>You must provide accurate, current, and complete information at registration.</li>
              <li>You are responsible for keeping your password confidential. We will never ask for your password via email or Telegram.</li>
              <li>If you connect the Telegram bot, your Telegram user ID is linked to your account.</li>
              <li>You must be at least 16 years old to use the Service.</li>
              <li>One person may not hold more than one active account.</li>
              <li>Notify us immediately at <a href="mailto:support@expenseflowai.com" className="legal-link">support@expenseflowai.com</a> if you suspect unauthorised access.</li>
            </ul>
          </Section>

          <Section title="4. Telegram Bot Integration">
            By connecting your Telegram account:
            <ul className="legal-list">
              <li>Messages you send to the bot are processed by our backend and may be passed to the configured LLM provider to extract transaction details from natural language.</li>
              <li>The bot is access-controlled — only whitelisted Telegram user IDs can interact with it.</li>
              <li>Do not send sensitive credentials, payment card numbers, or personal data beyond what is needed to log a transaction.</li>
              <li>We are not affiliated with or endorsed by Telegram Messenger. Your use of Telegram is subject to Telegram&apos;s own Terms of Service.</li>
            </ul>
          </Section>

          <Section title="5. AI-Powered Features">
            You acknowledge that:
            <ul className="legal-list">
              <li>AI-extracted transaction data (amounts, categories, merchants) may occasionally be inaccurate. Always review and correct entries as needed.</li>
              <li>AI-generated spending summaries and insights are for <strong>informational purposes only</strong>. They do not constitute financial, investment, tax, or legal advice.</li>
              <li>You should consult a qualified financial professional before making any significant financial decisions.</li>
            </ul>
          </Section>

          <Section title="6. Multi-Currency and Exchange Rates">
            Exchange rates are indicative only. We do not guarantee the accuracy or timeliness of any rate displayed, and converted amounts should not be used for official financial or tax reporting purposes.
          </Section>

          <Section title="7. User Responsibilities">
            You agree not to:
            <ul className="legal-list">
              <li>Use the Service for any unlawful purpose or in violation of applicable regulations.</li>
              <li>Attempt to gain unauthorised access to any part of the Service or another user&apos;s data.</li>
              <li>Reverse engineer, decompile, or otherwise attempt to extract the source code of the Service.</li>
              <li>Use automated scripts, bots (other than the official Telegram bot), or crawlers to interact with the Service.</li>
              <li>Submit false or misleading information or impersonate another person.</li>
              <li>Interfere with or disrupt the integrity or availability of the Service.</li>
            </ul>
          </Section>

          <Section title="8. Data Accuracy and Your Responsibility">
            The accuracy of your financial records depends entirely on the data you enter. We are not responsible for errors in your transaction records, budget calculations, or spending summaries that result from incorrect or incomplete data input.
          </Section>

          <Section title="9. Intellectual Property">
            All content, features, and functionality of the Service are the property of ExpenseFlow AI and are protected by applicable intellectual property laws. You are granted a limited, non-exclusive, non-transferable licence to use the Service for personal purposes only.
          </Section>

          <Section title="10. Suspension and Termination">
            We reserve the right to suspend or terminate your account if you violate any of these Terms, if your account has been inactive for an extended period, or if we have reason to believe your account is being used fraudulently.
            You may delete your own account at any time from account settings. Upon deletion, all associated data will be permanently removed within 30 days.
          </Section>

          <Section title="11. Limitation of Liability">
            To the fullest extent permitted by applicable law, ExpenseFlow AI and its operators shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of — or inability to use — the Service. We provide the Service &quot;as is&quot; without warranties of any kind.
          </Section>

          <Section title="12. Governing Law">
            These Terms are governed by and construed in accordance with applicable laws. Any disputes shall be subject to the exclusive jurisdiction of the relevant courts of competent authority.
          </Section>

          <Section title="13. Contact">
            If you have questions about these Terms, contact us at{' '}
            <a href="mailto:support@expenseflowai.com" className="legal-link">support@expenseflowai.com</a>.
          </Section>
        </div>
        <div className="legal-footer-links">
          <Link href="/privacy" className="legal-link">Privacy Policy →</Link>
        </div>
      </div>
    </div>
  );
}

function TermsBN() {
  return (
    <div className="legal-body">
      <div className="legal-maxw">
        <div className="topbar">
          <div>
            <h1>সেবার শর্তাবলী</h1>
            <div className="topbar-sub">সর্বশেষ আপডেট: মে ২০২৬</div>
          </div>
        </div>
        <div className="legal-content">
          <Section title="১. শর্তাবলী গ্রহণ">
            ExpenseFlow AI-এ অ্যাকাউন্ট নিবন্ধন করে এবং সেবা ব্যবহার করে আপনি এই সেবার শর্তাবলী এবং আমাদের{' '}
            <Link href="/privacy" className="legal-link">গোপনীয়তা নীতি</Link> মেনে নিতে সম্মত হচ্ছেন।
          </Section>

          <Section title="২. সেবাটি কী করে">
            <ul className="legal-list">
              <li>আয় ও ব্যয়ের লেনদেন রেকর্ড, শ্রেণীবদ্ধ ও পর্যালোচনা।</li>
              <li>ওয়েব অ্যাপ বা <strong>টেলিগ্রাম বটের</strong> মাধ্যমে লেনদেন যোগ।</li>
              <li>বিভাগ ও তারিখ অনুযায়ী ব্যয় বিশ্লেষণ।</li>
              <li><strong>AI-জেনারেটেড ব্যয় সারসংক্ষেপ</strong>।</li>
              <li>মাসিক বাজেট সীমা নির্ধারণ ও ট্র্যাকিং।</li>
              <li>একাধিক মুদ্রায় কাজ।</li>
            </ul>
          </Section>

          <Section title="৩. অ্যাকাউন্ট নিবন্ধন">
            <ul className="legal-list">
              <li>বৈধ ইমেইলে নিবন্ধন করুন। OTP-এর মাধ্যমে যাচাই প্রয়োজন।</li>
              <li>সঠিক তথ্য প্রদান করুন এবং আপ-টু-ডেট রাখুন।</li>
              <li>পাসওয়ার্ড গোপন রাখুন।</li>
              <li>বয়স কমপক্ষে ১৬ বছর হতে হবে।</li>
              <li>একজন একটি সক্রিয় অ্যাকাউন্ট রাখতে পারবেন।</li>
            </ul>
          </Section>

          <Section title="৪. টেলিগ্রাম বট ইন্টিগ্রেশন">
            <ul className="legal-list">
              <li>বট বার্তা আমাদের ব্যাকএন্ড প্রক্রিয়া করে এবং LLM প্রদানকারীতে পাঠানো হতে পারে।</li>
              <li>শুধুমাত্র হোয়াইটলিস্টেড আইডি বট ব্যবহার করতে পারে।</li>
              <li>সংবেদনশীল তথ্য পাঠাবেন না।</li>
            </ul>
          </Section>

          <Section title="৫. AI-চালিত বৈশিষ্ট্য">
            <ul className="legal-list">
              <li>AI-নিষ্কাশিত ডেটা ভুল হতে পারে। সর্বদা যাচাই করুন।</li>
              <li>AI সারসংক্ষেপ <strong>শুধুমাত্র তথ্যমূলক</strong>। আর্থিক পরামর্শ নয়।</li>
            </ul>
          </Section>

          <Section title="৬. মাল্টি-কারেন্সি ও বিনিময় হার">
            বিনিময় হার শুধুমাত্র নির্দেশমূলক। সরকারি রিপোর্টিংয়ে ব্যবহার করবেন না।
          </Section>

          <Section title="৭. ব্যবহারকারীর দায়িত্ব">
            <ul className="legal-list">
              <li>বেআইনি উদ্দেশ্যে সেবা ব্যবহার করবেন না।</li>
              <li>অননুমোদিত অ্যাক্সেস পেতে চেষ্টা করবেন না।</li>
              <li>রিভার্স ইঞ্জিনিয়ারিং করবেন না।</li>
              <li>অটোমেটেড স্ক্রিপ্ট ব্যবহার করবেন না।</li>
            </ul>
          </Section>

          <Section title="৮. ডেটার নির্ভুলতা">
            আপনার আর্থিক রেকর্ডের নির্ভুলতা সম্পূর্ণরূপে আপনার দেওয়া ডেটার উপর নির্ভর করে।
          </Section>

          <Section title="৯. মেধাস্বত্ব">
            সেবার সব বিষয়বস্তু ExpenseFlow AI-এর সম্পত্তি। ব্যক্তিগত ব্যবহারের জন্য সীমিত লাইসেন্স দেওয়া হয়।
          </Section>

          <Section title="১০. স্থগিতাদেশ ও সমাপ্তি">
            শর্তাবলী লঙ্ঘন করলে অ্যাকাউন্ট স্থগিত হতে পারে। মুছলে ৩০ দিনের মধ্যে সব ডেটা মুছে ফেলা হয়।
          </Section>

          <Section title="১১. দায় সীমাবদ্ধতা">
            সেবা &quot;যেমন আছে&quot; প্রদান করা হয়। কোনো ক্ষতির জন্য আমরা দায়ী নই।
          </Section>

          <Section title="১২. প্রযোজ্য আইন">
            এই শর্তাবলী প্রযোজ্য আইন অনুযায়ী নিয়ন্ত্রিত।
          </Section>

          <Section title="১৩. যোগাযোগ">
            <a href="mailto:support@expenseflowai.com" className="legal-link">support@expenseflowai.com</a>
          </Section>
        </div>
        <div className="legal-footer-links">
          <Link href="/privacy" className="legal-link">গোপনীয়তা নীতি →</Link>
        </div>
      </div>
    </div>
  );
}
