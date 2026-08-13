import type { Metadata } from 'next';
import Image from 'next/image';
import { Linkedin, Sparkles } from 'lucide-react';
import { siteConfig } from '@/lib/site';
import CTAButton from '@/components/CTAButton';
import FinalCTA from '@/components/FinalCTA';
import Reveal from '@/components/Reveal';

// ── Structured Data ────────────────────────────────────────────────────────────
const aboutUrl = `${siteConfig.url}/about`;

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteConfig.founder,
  url: aboutUrl,
  image: `${siteConfig.url}/founder.jpg`,
  jobTitle: 'Founder & Outbound Strategist',
  worksFor: { '@type': 'Organization', name: siteConfig.name, url: siteConfig.url },
  knowsAbout: ['Cold Email Outreach', 'B2B Lead Generation', 'Email Deliverability', 'Appointment Setting'],
  sameAs: [
    siteConfig.social.linkedinPersonal,
    siteConfig.social.twitter,
  ],
};

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
    { '@type': 'ListItem', position: 2, name: 'About', item: aboutUrl },
  ],
};

export const metadata: Metadata = {
  title: 'About — The Outbound Specialist Behind Your Pipeline',
  description:
    'Meet Pro Lead Maker — founded and run by MD. Al Amin, a cold email and LinkedIn outreach specialist focused on deliverability and pipeline outcomes for B2B teams.',
  alternates: { canonical: `${siteConfig.url}/about` },
  openGraph: {
    title: 'About Pro Lead Maker',
    description: 'The specialist behind the outbound machines.',
    url: `${siteConfig.url}/about`,
  },
};

const values = [
  {
    title: 'Results, not vanity',
    body: 'We sell pipeline, not open rates. Every campaign we run is measured against booked meetings and revenue.',
  },
  {
    title: 'Speed of execution',
    body: 'Most agencies take 8 weeks to launch. We do it in 3-5. Speed compounds — pipeline today beats pipeline next quarter.',
  },
  {
    title: 'Total transparency',
    body: 'Weekly reports, open dashboards, full access to inboxes and sending tools. Nothing hidden, no black-box reporting.',
  },
  {
    title: 'Trust over transactions',
    body: 'Most of our clients stay 12+ months. That only happens when you stop selling and start partnering.',
  },
];

const milestones = [
  { year: '2020', title: 'Pro Lead Maker founded', body: 'MD. Al Amin starts solo on Fiverr and Upwork.' },
  { year: '2021', title: 'First international clients', body: 'Regular repeat work from agencies and B2B teams across the US, UK and EU.' },
  { year: '2022', title: 'First US retainers', body: 'Move from one-off gigs to ongoing retainers across SaaS and agencies.' },
  { year: '2023', title: '100K+ verified contacts built', body: 'Deep specialisation in B2B data — sourcing, verification and enrichment at scale.' },
  { year: '2024', title: 'From lists to full outreach', body: 'Expanded beyond list building into cold email and LinkedIn campaign delivery.' },
  { year: '2025', title: 'Full outbound systems launched', body: 'Productised infrastructure + strategy + sending under one roof.' },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-white pt-28 lg:pt-32">
        <div className="gradient-mesh" aria-hidden />
        <div className="container-px relative z-10 pb-16">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">About us</span>
            <h1 className="h-display mt-4">
              The <span className="text-gradient">Outbound Specialist</span> Behind The Pipeline
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600">
              Pro Lead Maker exists for one reason: B2B teams need predictable pipeline, and most cold
              outreach agencies don't actually understand outbound. We do. It's all we do.
            </p>
            <div className="mt-8 flex justify-center">
              <CTAButton>Book a Call</CTAButton>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-px">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-3xl border border-brand-purple/20 bg-brand-gradient-soft p-1">
                <div className="relative h-full w-full overflow-hidden rounded-3xl bg-white">
                  <Image
                    src="/founder.jpg"
                    alt={`${siteConfig.founder}, founder of ${siteConfig.name}`}
                    fill
                    priority
                    sizes="(min-width: 1024px) 384px, 100vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <span className="eyebrow">Founder</span>
              <h2 className="h-section mt-4">
                Meet <span className="text-gradient">MD. Al Amin</span>
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-neutral-700">
                MD. Al Amin started Pro Lead Maker in 2020 with one belief: most B2B outbound is broken
                because most agencies treat it as a service to sell — not a system to operate.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-neutral-700">
                1,000+ delivered orders later, he's still hands-on — running strategy calls,
                reviewing copy, auditing deliverability, and obsessing over the one metric that matters:
                qualified meetings hitting client calendars.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href={siteConfig.social.linkedinPersonal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-2.5 text-sm font-semibold text-neutral-700 transition-colors hover:border-brand-purple hover:text-brand-purple"
                >
                  <Linkedin aria-hidden size={16} />
                  Connect on LinkedIn
                </a>
                <CTAButton>Book a Strategy Call</CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-neutral-50">
        <div className="container-px">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Our values</span>
            <h2 className="h-section mt-4">
              What We <span className="text-gradient">Stand For</span>
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              The four principles every campaign, hire and decision at Pro Lead Maker is filtered through.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-neutral-200 bg-white p-6">
                  <span aria-hidden className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gradient text-white">
                    <Sparkles aria-hidden size={18} />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-neutral-900">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      <section className="section bg-neutral-50">
        <div className="container-px">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Our story</span>
            <h2 className="h-section mt-4">
              From <span className="text-gradient">Freelancer To Agency</span>
            </h2>
          </div>
          <ol className="relative mx-auto mt-12 max-w-3xl space-y-8 border-l-2 border-brand-purple/20 pl-8">
            {milestones.map((m, i) => (
              <Reveal as="li" key={m.year} delay={i * 0.05}>
                <span
                  aria-hidden
                  className="absolute -left-[11px] flex h-5 w-5 items-center justify-center rounded-full bg-brand-gradient"
                />
                <p className="text-sm font-bold text-brand-purple">{m.year}</p>
                <p className="mt-1 text-lg font-bold text-neutral-900">{m.title}</p>
                <p className="mt-1 text-neutral-600">{m.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <FinalCTA />

      <script
        id="ld-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        id="ld-about-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
    </>
  );
}
