import { withSocialMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, X, ArrowRight } from 'lucide-react';
import { services, siteConfig } from '@/lib/site';
import CTAButton from '@/components/CTAButton';
import FinalCTA from '@/components/FinalCTA';
import Reveal from '@/components/Reveal';

// ── Structured Data ────────────────────────────────────────────────────────────
const servicesUrl = `${siteConfig.url}/services`;

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long until we start seeing meetings booked?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We first prepare infrastructure, targeting, and approved copy. We agree the launch date after readiness checks and ramp gradually. Reply and meeting timing vary with your audience and offer; no meeting timeline is guaranteed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you work with companies outside the US, UK and Europe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our core focus is US, UK and EU markets, but we run successful campaigns into Canada, Australia, the Nordics and parts of APAC. Reach out and we will tell you honestly whether your target market is a good fit.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between Done For You and Outreach Management?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Done For You supplies the listed infrastructure, tools, data, and campaign operations for $1,700/month. Outreach Management is $1,200/month and uses your existing tools or data, with additions quoted first. List-only work is $0.20/contact and excludes managed outreach.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will my primary domain get burned?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Risk cannot be eliminated. We send from secondary domains — typically variations on your brand name with proper redirects. This reduces direct exposure of your primary domain, but does not eliminate sending or reputation risk.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you guarantee a specific number of meetings?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "No. Meeting volume depends on your offer, deal size, market timing, and ICP fit — factors outside our control. Our commitment is to your agreed package deliverables and transparent reporting. Managed outreach includes campaign operations and reply handling; list-only orders include data verification and replacement conditions, not campaign management.",
      },
    },
    {
      '@type': 'Question',
      name: 'How are you priced?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Done For You is $1,700/month, LinkedIn Outreach $900/month, and Outreach Management $1,200/month. List Building & Enrichment is $0.20/contact. Other requirements are scoped separately before work starts.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do we own the domains and infrastructure you set up?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Domains are registered under your name, mailboxes belong to you, and all data is yours. If we ever part ways, you keep everything.',
      },
    },
  ],
};

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: servicesUrl },
  ],
};

export const metadata: Metadata = withSocialMetadata({
  title: "Cold Email, LinkedIn & Lead Generation",
  description:
    'Three core services for B2B teams: cold email outreach, cold LinkedIn outreach, and B2B lead generation. Done for you, end to end.',
  alternates: { canonical: `${siteConfig.url}/services` },
  openGraph: {
    title: 'Services — Pro Lead Maker',
    description:
      'Done-for-you cold email outreach, appointment setting, LinkedIn lead generation and full outbound systems.',
    url: `${siteConfig.url}/services`,
  },
});

const faqs = [
  {
    q: 'How long until we start seeing meetings booked?',
    a: 'We first prepare infrastructure, targeting, and approved copy. We agree the launch date after readiness checks and ramp gradually. Reply and meeting timing vary with your audience and offer; no meeting timeline is guaranteed.',
  },
  {
    q: 'Do you work with companies outside the US, UK and Europe?',
    a: 'Our core focus is US, UK and EU markets, but we run successful campaigns into Canada, Australia, the Nordics and parts of APAC. Reach out and we will tell you honestly whether your target market is a good fit.',
  },
  {
    q: 'What is the difference between Done For You and Outreach Management?',
    a: 'Done For You supplies the listed infrastructure, tools, data, and campaign operations for $1,700/month. Outreach Management is $1,200/month and uses your existing tools or data, with additions quoted first. List-only work is $0.20/contact and excludes managed outreach.',
  },
  {
    q: 'Will my primary domain get burned?',
    a: 'Risk cannot be eliminated. We send from secondary domains — typically variations on your brand name with proper redirects. This reduces direct exposure of your primary domain, but does not eliminate sending or reputation risk.',
  },
  {
    q: 'Can you guarantee a specific number of meetings?',
    a: "No. Meeting volume depends on your offer, deal size, market timing, and ICP fit — factors outside our control. Our commitment is to your agreed package deliverables and transparent reporting. Managed outreach includes campaign operations and reply handling; list-only orders include data verification and replacement conditions, not campaign management.",
  },
  {
    q: 'How are you priced?',
    a: 'Done For You is $1,700/month, LinkedIn Outreach $900/month, and Outreach Management $1,200/month. List Building & Enrichment is $0.20/contact. Other requirements are scoped separately before work starts.',
  },
  {
    q: 'Do we own the domains and infrastructure you set up?',
    a: 'Yes. Domains are registered under your name, mailboxes belong to you, and all data is yours. If we ever part ways, you keep everything.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-white pt-28 lg:pt-32">
        <div className="gradient-mesh" aria-hidden />
        <div className="container-px relative z-10 pb-16 text-center">
          <span className="eyebrow">Services</span>
          <h1 className="h-display mt-4">
            Three Services That <span className="text-gradient">Fill B2B Pipelines</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600">
            We specialise in three things — cold email outreach, cold LinkedIn outreach, and B2B
            lead generation — and we run them together for B2B founders, SaaS, and agencies.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <CTAButton>Book a Free Strategy Call</CTAButton>
            <CTAButton href="/pricing" variant="secondary" external={false} withArrow={false}>
              See Pricing
            </CTAButton>
          </div>
        </div>
      </section>

      <section id="service-list" className="section">
        <div className="container-px space-y-20">
          {services.map((s, i) => (
            <Reveal key={s.slug}>
              <article
                id={s.slug}
                className="scroll-mt-24 rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm sm:p-12"
              >
                <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
                  <div className="lg:col-span-7">
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-purple">
                      Service {String(i + 1).padStart(2, '0')} of {services.length}
                    </p>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
                      {s.title}
                    </h2>
                    <p className="mt-4 text-lg text-neutral-600">{s.description}</p>
                    <ul className="mt-6 space-y-3">
                      {s.benefits.map((b) => (
                        <li key={b} className="flex gap-3 text-neutral-700">
                          <Check
                            aria-hidden
                            size={20}
                            className="mt-0.5 flex-shrink-0 text-brand-purple"
                          />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-7 flex flex-wrap items-center gap-3">
                      <CTAButton href={`/services/${s.slug}`} external={false} withArrow={true}>
                        Explore {s.title}
                      </CTAButton>
                      <CTAButton variant="secondary" withArrow={false}>
                        Book a Strategy Call
                      </CTAButton>
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="rounded-2xl border border-brand-purple/20 bg-brand-gradient-soft p-6">
                      <p className="text-xs font-semibold uppercase tracking-wider text-brand-purple">
                        What&apos;s included
                      </p>
                      <ul className="mt-4 space-y-2.5 text-sm text-neutral-700">
                        {s.subServices.map((sub) => (
                          <li key={sub} className="flex gap-2.5">
                            <ArrowRight
                              aria-hidden
                              size={14}
                              className="mt-1 flex-shrink-0 text-brand-purple"
                            />
                            <span>{sub}</span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={`/services/${s.slug}`}
                        className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-purple hover:underline"
                      >
                        See full breakdown <ArrowRight aria-hidden size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section bg-neutral-50">
        <div className="container-px">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Comparison</span>
            <h2 className="h-section mt-4">
              DIY Outreach <span className="text-gradient">vs. Pro Lead Maker</span>
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Compare the responsibilities your team would own with the work included in
              your managed outreach package.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
            <table className="w-full text-left">
              <thead className="bg-neutral-50">
                <tr>
                  <th scope="col" className="px-5 py-4 text-sm font-semibold text-neutral-900">
                    What you get
                  </th>
                  <th scope="col" className="px-5 py-4 text-sm font-semibold text-neutral-900">
                    DIY in-house
                  </th>
                  <th scope="col" className="px-5 py-4 text-sm font-semibold text-brand-purple">
                    Pro Lead Maker
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100 text-sm">
                {[
                  ['Infrastructure setup', 'Your team plans and configures accounts', 'Setup and readiness checks in agreed scope'],
                  ['Copywriting', 'Your team writes and reviews copy', 'Signal-based, written by senior copywriters'],
                  ['List building', 'Your team sources and verifies data', 'Multi-source, enriched, verified'],
                  ['Reply handling', 'Your team owns response coverage', 'Trained reply handlers, fast turnarounds'],
                  ['Deliverability', 'Your team monitors delivery signals', 'Inbox placement monitoring and gradual volume adjustments'],
                  ['Reporting', 'Your team defines and maintains reporting', 'Weekly dashboards with clear KPIs'],
                  ['Launch timing', 'Depends on readiness and approvals', 'Agreed after readiness checks'],
                  ['Cost', 'Tools + payroll + opportunity cost', 'Predictable monthly investment'],
                ].map((row) => (
                  <tr key={row[0]}>
                    <th scope="row" className="px-5 py-4 font-semibold text-neutral-900">
                      {row[0]}
                    </th>
                    <td className="px-5 py-4 text-neutral-600">
                      <span className="inline-flex items-center gap-1">

                        {row[1]}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-neutral-700">
                      <span className="inline-flex items-center gap-1">
                        <Check aria-hidden size={14} className="text-brand-purple" />
                        {row[2]}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-10 text-center">
            <CTAButton>See How We'd Build Yours</CTAButton>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-px">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">FAQ</span>
            <h2 className="h-section mt-4">
              Answers To The <span className="text-gradient">Common Questions</span>
            </h2>
          </div>
          <div className="mx-auto mt-12 max-w-3xl divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-white">
            {faqs.map((f) => (
              <details key={f.q} className="group p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-neutral-900">
                  <span>{f.q}</span>
                  <span
                    aria-hidden
                    className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-brand-purple/10 text-brand-purple transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-neutral-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />

      <script
        id="ld-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        id="ld-services-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
    </>
  );
}
