import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, ArrowRight, Star } from 'lucide-react';
import { siteConfig } from '@/lib/site';
import CTAButton from '@/components/CTAButton';
import FinalCTA from '@/components/FinalCTA';
import Reveal from '@/components/Reveal';

// ── Page Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Cold Email Agency — B2B Outbound Done For You',
  description:
    'Pro Lead Maker is a specialist cold email agency that builds full outbound systems for B2B companies. Infrastructure, copy, list building, sending, and reply handling — we do it all.',
  keywords: [
    'cold email agency',
    'B2B cold email agency',
    'done-for-you cold email',
    'outbound email agency',
    'cold email outsourcing',
    'B2B outreach agency',
  ],
  alternates: { canonical: `${siteConfig.url}/cold-email-agency` },
  openGraph: {
    type: 'website',
    title: 'Cold Email Agency — Pro Lead Maker',
    description:
      'Specialist cold email agency for B2B companies. We build the infrastructure, write the copy, build the lists, and manage replies — you take the meetings.',
    url: `${siteConfig.url}/cold-email-agency`,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: 'Pro Lead Maker Cold Email Agency' }],
  },
};

// ── Structured Data ────────────────────────────────────────────────────────────
const pageUrl = `${siteConfig.url}/cold-email-agency`;

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Cold Email Agency Services',
  description:
    'Done-for-you cold email outreach for B2B companies. Includes infrastructure setup, email warmup, list building, copywriting, sending, and reply management.',
  provider: {
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
  },
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Germany' },
    { '@type': 'Country', name: 'Canada' },
    { '@type': 'Country', name: 'Australia' },
  ],
  serviceType: 'B2B Cold Email Outreach',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    url: `${siteConfig.url}/contact`,
  },
};

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
    { '@type': 'ListItem', position: 2, name: 'Cold Email Agency', item: pageUrl },
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does a cold email agency do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A cold email agency builds and operates your entire outbound email program. This includes setting up sending infrastructure (domains, mailboxes, DNS), warming up email accounts, building targeted prospect lists, writing email copy, managing sending sequences, and handling replies — so your team only deals with qualified meetings.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is Pro Lead Maker different from other cold email agencies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We specialise exclusively in cold email and outbound — it\'s all we do. We use signal-based and intent-based prospecting, which means every email is timed to a real buying trigger. Our clients average 20+ qualified meetings per month, and our inbox placement rate stays above 90%.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to start getting meetings?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most clients book their first qualified meetings in weeks 3-5. The first two weeks cover infrastructure setup, warmup, list building, and copy. From week 3 onward we\'re live and optimising.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to provide a prospect list?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. We define your ICP together, then source and verify prospect lists ourselves using multiple data providers. You can share an existing list if you have one, but it\'s not required.',
      },
    },
  ],
};

// ── Data ───────────────────────────────────────────────────────────────────────
const deliverables = [
  { title: 'Cold Email Infrastructure', body: 'Secondary domains, mailboxes, SPF/DKIM/DMARC, and warmup — all configured correctly from day one.' },
  { title: 'ICP & List Building', body: 'We define your ideal customer profile, source contacts, and verify every email before it touches a domain.' },
  { title: 'Signal-Based Copywriting', body: 'Every sequence is written around a real buying trigger — not a generic template.' },
  { title: 'Sending & Deliverability', body: '1,000+ daily sends with 90%+ inbox placement, monitored and maintained continuously.' },
  { title: 'Reply Management', body: 'Trained reply handlers qualify inbound responses and book meetings directly to your calendar.' },
  { title: 'Weekly Reporting', body: 'Open dashboards, weekly calls, and full transparency — no black-box agency behaviour.' },
];

const stats = [
  { value: '20+', label: 'Qualified meetings/month (average)' },
  { value: '90%+', label: 'Inbox placement rate' },
  { value: '500+', label: 'B2B clients served since 2020' },
  { value: '5.0', label: 'Average client rating (Fiverr & Upwork)' },
];

const industries = [
  'B2B SaaS', 'Marketing Agencies', 'Consulting Firms',
  'IT Services', 'Fintech', 'HR Tech', 'Logistics Tech', 'Professional Services',
];

// ── Component ──────────────────────────────────────────────────────────────────
export default function ColdEmailAgencyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-white pt-28 lg:pt-32">
        <div className="gradient-mesh" aria-hidden />
        <div className="container-px relative z-10 pb-16 text-center">
          <span className="eyebrow">Cold Email Agency</span>
          <h1 className="h-display mt-4">
            The B2B <span className="text-gradient">Cold Email Agency</span> That Fills Your Pipeline
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600">
            Pro Lead Maker is a specialist cold email agency. We build the infrastructure, write
            signal-based copy, source verified lists, and manage every reply — so you take meetings,
            not tasks.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <CTAButton>Book a Free Strategy Call</CTAButton>
            <CTAButton href="/services" variant="secondary" external={false} withArrow={false}>
              See All Services
            </CTAButton>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-neutral-500">
            {['No long-term contracts', '20+ meetings/month average', '90%+ inbox placement'].map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5">
                <Check aria-hidden size={14} className="text-brand-purple" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section bg-neutral-50">
        <div className="container-px">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.map((s) => (
              <Reveal key={s.label}>
                <div className="rounded-2xl border border-neutral-200 bg-white p-6 text-center">
                  <p className="text-4xl font-extrabold text-brand-purple">{s.value}</p>
                  <p className="mt-2 text-sm text-neutral-600">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What we deliver */}
      <section className="section">
        <div className="container-px">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">What you get</span>
            <h2 className="h-section mt-4">
              A <span className="text-gradient">Complete Cold Email System</span> — Not Just Sends
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Most cold email agencies hand you templates and wish you luck. We build and operate
              the entire system — from domain setup to booked meetings.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((d, i) => (
              <Reveal key={d.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-neutral-200 bg-white p-6">
                  <span
                    aria-hidden
                    className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-gradient text-white text-sm font-bold"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-neutral-900">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{d.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section bg-neutral-50">
        <div className="container-px">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Industries we serve</span>
            <h2 className="h-section mt-4">
              Cold Email That Works Across <span className="text-gradient">Every B2B Vertical</span>
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Our outbound systems are adapted to your niche — not copy-pasted from a playbook.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {industries.map((ind) => (
              <span
                key={ind}
                className="rounded-full border border-brand-purple/20 bg-white px-4 py-2 text-sm font-semibold text-neutral-700"
              >
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="section">
        <div className="container-px">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Client results</span>
            <h2 className="h-section mt-4">
              What Clients Say About Our <span className="text-gradient">Cold Email Agency</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              {
                quote: 'Pro Lead Maker booked 27 qualified demos in our first 45 days. We had tried three other agencies before — none came close to this kind of output.',
                name: 'VP of Sales', title: 'B2B SaaS Company, USA',
              },
              {
                quote: 'They rebuilt our entire outbound stack from scratch. Deliverability went from 40% to 92% and reply rates tripled within the first month.',
                name: 'Founder', title: 'Marketing Agency, United Kingdom',
              },
            ].map((t, i) => (
              <Reveal key={t.name} delay={i * 0.06}>
                <figure className="h-full rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
                  <div className="flex items-center gap-0.5" aria-label="Five star rating">
                    {[0, 1, 2, 3, 4].map((s) => (
                      <Star key={s} size={16} aria-hidden className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-base leading-relaxed text-neutral-700">"{t.quote}"</blockquote>
                  <figcaption className="mt-5 border-t border-neutral-100 pt-4">
                    <p className="font-semibold text-neutral-900">{t.name}</p>
                    <p className="text-sm text-neutral-500">{t.title}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/results" className="text-sm font-semibold text-brand-purple hover:underline">
              See all client results →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-neutral-50">
        <div className="container-px">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">FAQ</span>
            <h2 className="h-section mt-4">
              Cold Email Agency <span className="text-gradient">FAQs</span>
            </h2>
          </div>
          <div className="mx-auto mt-10 max-w-3xl divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-white">
            {faqJsonLd.mainEntity.map((f) => (
              <details key={f.name} className="group p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-neutral-900">
                  <span>{f.name}</span>
                  <span
                    aria-hidden
                    className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-brand-purple/10 text-brand-purple transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-neutral-600">{f.acceptedAnswer.text}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Internal linking */}
      <section className="section">
        <div className="container-px">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Explore further</span>
            <h2 className="h-section mt-4">
              Learn More About <span className="text-gradient">Cold Email Outreach</span>
            </h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { href: '/blog/complete-b2b-cold-email-mastery-guide-2026', label: 'B2B Cold Email Mastery Guide (2026)' },
              { href: '/blog/cold-email-templates-that-book-meetings-2026', label: 'Cold Email Templates That Book Meetings' },
              { href: '/blog/build-cold-email-infrastructure-from-scratch', label: 'Build Cold Email Infrastructure From Scratch' },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group flex items-center justify-between rounded-xl border border-neutral-200 bg-white p-5 transition-shadow hover:shadow-md"
              >
                <span className="font-semibold text-neutral-900 group-hover:text-brand-purple">{l.label}</span>
                <ArrowRight aria-hidden size={16} className="flex-shrink-0 text-brand-purple" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />

      <script
        id="ld-cold-email-agency-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        id="ld-cold-email-agency-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        id="ld-cold-email-agency-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
