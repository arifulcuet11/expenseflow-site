'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/lib/language';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const copy = {
  en: {
    title: 'Contact Us',
    sub: 'Have a question, feedback, or just want to say hello? We read every message.',
    name: 'Your name',
    email: 'Your email',
    subject: 'Subject',
    message: 'Message',
    messagePh: 'Tell us how we can help…',
    send: 'Send message',
    sending: 'Sending…',
    sent: "Message sent! We'll get back to you soon.",
    error: 'Something went wrong. Please try again or email us directly at',
    or: 'Or reach us directly at',
    namePh: 'Jane Smith',
    subjectPh: 'Question about pricing',
  },
  bn: {
    title: 'যোগাযোগ করুন',
    sub: 'কোনো প্রশ্ন, মতামত, বা কিছু জানাতে চান? আমরা প্রতিটি বার্তা পড়ি।',
    name: 'আপনার নাম',
    email: 'আপনার ইমেইল',
    subject: 'বিষয়',
    message: 'বার্তা',
    messagePh: 'আমরা কীভাবে সাহায্য করতে পারি লিখুন…',
    send: 'বার্তা পাঠান',
    sending: 'পাঠানো হচ্ছে…',
    sent: 'বার্তা পাঠানো হয়েছে! আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।',
    error: 'কিছু একটা ভুল হয়েছে। আবার চেষ্টা করুন বা সরাসরি ইমেইল করুন',
    or: 'সরাসরি ইমেইল করুন',
    namePh: 'রাহেলা বেগম',
    subjectPh: 'মূল্য নির্ধারণ সম্পর্কে প্রশ্ন',
  },
};

export default function ContactPage() {
  const { lang } = useLanguage();
  const t = copy[lang as 'en' | 'bn'] ?? copy.en;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://api.expenseflowai.com/api/v1/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message, website: '' }),
      });
      if (!res.ok) throw new Error('failed');
      setStatus('sent');
      setName(''); setEmail(''); setSubject(''); setMessage('');
    } catch {
      setStatus('error');
    }
  }

  return (
    <>
      <Nav />
      <main className="legal-page">
        <div className="container">
          <div className="legal-body">
            <div className="legal-maxw">
              <div className="topbar">
                <div>
                  <h1>{t.title}</h1>
                  <div className="topbar-sub">{t.sub}</div>
                </div>
              </div>

              {status === 'sent' ? (
                <div className="contact-success">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="9 12 11 14 15 10" />
                  </svg>
                  <p>{t.sent}</p>
                  <Link href="/" className="legal-link">← {lang === 'bn' ? 'হোমে ফিরুন' : 'Back to home'}</Link>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="contact-row">
                    <div className="contact-field">
                      <label htmlFor="cf-name">{t.name}</label>
                      <input
                        id="cf-name"
                        type="text"
                        placeholder={t.namePh}
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                        disabled={status === 'sending'}
                      />
                    </div>
                    <div className="contact-field">
                      <label htmlFor="cf-email">{t.email}</label>
                      <input
                        id="cf-email"
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                        disabled={status === 'sending'}
                      />
                    </div>
                  </div>
                  <div className="contact-field">
                    <label htmlFor="cf-subject">{t.subject}</label>
                    <input
                      id="cf-subject"
                      type="text"
                      placeholder={t.subjectPh}
                      value={subject}
                      onChange={e => setSubject(e.target.value)}
                      required
                      disabled={status === 'sending'}
                    />
                  </div>
                  <div className="contact-field">
                    <label htmlFor="cf-message">{t.message}</label>
                    <textarea
                      id="cf-message"
                      placeholder={t.messagePh}
                      rows={6}
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      required
                      disabled={status === 'sending'}
                    />
                  </div>

                  {/* Honeypot — hidden from real users, bots fill it */}
                  <input
                    type="text"
                    name="website"
                    autoComplete="off"
                    tabIndex={-1}
                    aria-hidden="true"
                    style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0 }}
                  />

                  {status === 'error' && (
                    <p className="contact-error">
                      {t.error}{' '}
                      <a href="mailto:support@expenseflowai.com" className="legal-link">support@expenseflowai.com</a>.
                    </p>
                  )}

                  <div className="contact-actions">
                    <button type="submit" className="btn primary" disabled={status === 'sending'}>
                      {status === 'sending' ? t.sending : t.send}
                    </button>
                    <span className="contact-or">
                      {t.or}{' '}
                      <a href="mailto:support@expenseflowai.com" className="legal-link">support@expenseflowai.com</a>
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
