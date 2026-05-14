import type { Metadata } from 'next';
import { Mail, Phone, MessageCircle, Calendar, Linkedin, Facebook, Instagram, Twitter } from 'lucide-react';
import { siteConfig } from '@/lib/site';
import ContactForm from '@/components/ContactForm';
import CalendlyEmbed from '@/components/CalendlyEmbed';

export const metadata: Metadata = {
  title: 'Contact — Talk To The Pro Lead Maker Team',
  description:
    'Get in touch with Pro Lead Maker. Send a message, book a free strategy call on Calendly, or chat instantly via WhatsApp.',
  alternates: { canonical: `${siteConfig.url}/contact` },
  openGraph: {
    title: 'Contact Pro Lead Maker',
    description: 'Book a free strategy call or send us a message.',
    url: `${siteConfig.url}/contact`,
  },
};

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden focusable="false">
    <path fill="currentColor" d="M19.6 6.7a5.6 5.6 0 0 1-3.4-1.4 5.6 5.6 0 0 1-1.7-3.1h-3.2v13.3a2.7 2.7 0 1 1-2.7-2.7c.2 0 .4 0 .6.1V9.6a6 6 0 1 0 5.3 5.9V9.8a8.7 8.7 0 0 0 5.1 1.6V8.2c-.1 0-.1 0 0-1.5Z" />
  </svg>
);

export default function ContactPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-white pt-28 lg:pt-32">
        <div className="gradient-mesh" aria-hidden />
        <div className="container-px relative z-10 pb-16 text-center">
          <span className="eyebrow">Contact</span>
          <h1 className="h-display mt-4">
            Let's Build Your <span className="text-gradient">Outbound Machine</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600">
            Send us a message, book a free strategy call, or chat instantly on WhatsApp.
            We reply within one business day — usually much faster.
          </p>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-px">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="text-2xl font-bold text-neutral-900">Send a message</h2>
                <p className="mt-1 text-sm text-neutral-600">
                  Tell us a bit about your business and goals. We'll get back to you with a tailored
                  reply, not a templated one.
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            </div>

            <aside className="lg:col-span-5">
              <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8">
                <h2 className="text-xl font-bold text-neutral-900">Talk to us directly</h2>
                <ul className="mt-5 space-y-4 text-sm">
                  <li>
                    <a
                      href={`mailto:${siteConfig.emails.company}`}
                      className="flex items-start gap-3 text-neutral-700 hover:text-brand-purple"
                    >
                      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-brand-purple/10 text-brand-purple">
                        <Mail aria-hidden size={16} />
                      </span>
                      <span>
                        <span className="block text-xs font-semibold uppercase tracking-wider text-neutral-500">Email</span>
                        <span className="block font-medium">{siteConfig.emails.company}</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="flex items-start gap-3 text-neutral-700 hover:text-brand-purple"
                    >
                      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-brand-purple/10 text-brand-purple">
                        <Phone aria-hidden size={16} />
                      </span>
                      <span>
                        <span className="block text-xs font-semibold uppercase tracking-wider text-neutral-500">Phone</span>
                        <span className="block font-medium">{siteConfig.phone}</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={siteConfig.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 text-neutral-700 hover:text-brand-purple"
                    >
                      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[#25D366]/10 text-[#25D366]">
                        <MessageCircle aria-hidden size={16} />
                      </span>
                      <span>
                        <span className="block text-xs font-semibold uppercase tracking-wider text-neutral-500">WhatsApp</span>
                        <span className="block font-medium">Chat instantly</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={siteConfig.calendly}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 text-neutral-700 hover:text-brand-purple"
                    >
                      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-brand-purple/10 text-brand-purple">
                        <Calendar aria-hidden size={16} />
                      </span>
                      <span>
                        <span className="block text-xs font-semibold uppercase tracking-wider text-neutral-500">Calendly</span>
                        <span className="block font-medium">Book a free strategy call</span>
                      </span>
                    </a>
                  </li>
                </ul>

                <div className="mt-8 border-t border-neutral-100 pt-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                    Follow Pro Lead Maker
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <a aria-label="LinkedIn" href={siteConfig.social.linkedinCompany} target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-50 text-neutral-600 ring-1 ring-neutral-200 hover:text-brand-purple">
                      <Linkedin aria-hidden size={16} />
                    </a>
                    <a aria-label="Facebook" href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-50 text-neutral-600 ring-1 ring-neutral-200 hover:text-brand-purple">
                      <Facebook aria-hidden size={16} />
                    </a>
                    <a aria-label="X / Twitter" href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-50 text-neutral-600 ring-1 ring-neutral-200 hover:text-brand-purple">
                      <Twitter aria-hidden size={16} />
                    </a>
                    <a aria-label="Instagram" href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-50 text-neutral-600 ring-1 ring-neutral-200 hover:text-brand-purple">
                      <Instagram aria-hidden size={16} />
                    </a>
                    <a aria-label="TikTok" href={siteConfig.social.tiktok} target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-50 text-neutral-600 ring-1 ring-neutral-200 hover:text-brand-purple">
                      <TikTokIcon />
                    </a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-px">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Book directly</span>
            <h2 className="h-section mt-4">
              Pick A Time On <span className="text-gradient">Our Calendar</span>
            </h2>
            <p className="mt-3 text-lg text-neutral-600">
              30-minute strategy call — no pitch, no obligation. We'll audit your outbound and show you
              exactly how we'd build a pipeline you can forecast.
            </p>
          </div>
          <div className="mx-auto mt-8 max-w-4xl">
            <CalendlyEmbed />
          </div>
        </div>
      </section>
    </>
  );
}
