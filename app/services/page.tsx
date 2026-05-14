import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, X, ArrowRight } from 'lucide-react';
import { services, siteConfig } from '@/lib/site';
import CTAButton from '@/components/CTAButton';
import FinalCTA from '@/components/FinalCTA';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Cold Email Outreach & B2B Lead Generation Services',
  description:
    'Done-for-you cold email outreach, appointment setting, LinkedIn lead generation, email infrastructure, warmup, data enrichment, verification and email finding services for B2B teams.',
  alternates: { canonical: `${siteConfig.url}/services` },
  openGraph: {
    title: 'Services — Pro Lead Maker',
    description:
      'Done-for-you cold email outreach, appointment setting, LinkedIn lead generation and full outbound systems.',
    url: `${siteConfig.url}/services`,
  },
};

const faqs = [
  {
    q: 'How long until we start seeing meetings booked?',
    a: 'For most clients, first qualified meetings hit the calendar between week 3 and week 5. Weeks 1-2 are spent on infrastructure, warmup, list-building and copy. Once we launch, expect a steady ramp as we test and optimise.',
  },
  {
    q: 'Do you work with companies outside the US, UK and Europe?',
    a: 'Our core focus is US, UK and EU markets, but we run successful campaigns into Canada, Australia, the Nordics and parts of APAC. Reach out and we will tell you honestly whether your target market is a good fit.',
  },
  {
    q: 'What is the difference between Cold Email Setup and Full Outreach System?',
    a: 'Cold Email Setup is the infrastructure layer — domains, mailboxes, DNS, warmup. Full Outreach System is the entire engine including strategy, lists, copy, sending and reply management. Setup is a project, Full System is an ongoing service.',
  },
  {
    q: 'Will my primary domain get burned?',
    a: 'No. We always send from secondary domains — typically variations on your brand name with proper redirects. Your primary domain stays protected for transactional and existing-client communication.',
  },
  {
    q: 'Can you guarantee a specific number of meetings?',
    a: "Anyone guaranteeing a fixed number on day one is overselling. What we guarantee is process: a fully-built system, weekly testing, transparent reporting and ongoing optimisation. In practice, our clients average 20+ qualified meetings per month.",
  },
  {
    q: 'How are you priced?',
    a: 'We offer two pricing models: a monthly retainer for ongoing services, or a pay-per-meeting option for select clients. Setup-only projects are quoted as a one-time fee. Book a call and we will scope something that fits.',
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
            Full-Stack <span className="text-gradient">Cold Email Outreach</span> Services
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600">
            Thirteen tightly-integrated services that cover every part of the modern outbound stack —
            built and run by senior outbound operators who do this every single day.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <CTAButton>Book a Free Strategy Call</CTAButton>
            <CTAButton href="#service-list" variant="secondary" external={false} withArrow={false}>
              Explore Services
            </CTAButton>
          </div>
        </div>
      </section>

      <section id="service-list" className="section">
        <div className="container-px space-y-16">
          {services.map((s, i) => (
            <Reveal key={s.slug}>
              <article
                id={s.slug}
                className="grid scroll-mt-24 gap-10 lg:grid-cols-12 lg:items-center"
              >
                <div className={`lg:col-span-7 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-purple">
                    Service {String(i + 1).padStart(2, '0')}
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
                  <div className="mt-7">
                    <CTAButton>Discuss This Service</CTAButton>
                  </div>
                </div>
                <div className={`lg:col-span-5 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="relative overflow-hidden rounded-2xl border border-brand-purple/20 bg-brand-gradient-soft p-1">
                    <div className="rounded-2xl bg-white p-8">
                      <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                        Quick summary
                      </p>
                      <p className="mt-3 text-lg font-semibold text-neutral-900">{s.short}</p>
                      <ul className="mt-5 space-y-3 text-sm text-neutral-600">
                        {s.benefits.map((b) => (
                          <li key={b} className="flex gap-2">
                            <ArrowRight
                              aria-hidden
                              size={14}
                              className="mt-1 flex-shrink-0 text-brand-purple"
                            />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
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
              The honest difference between running outbound in-house and handing it to a team
              that does this every day for dozens of B2B companies.
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
                  ['Infrastructure setup', '4-6 weeks of trial and error', 'Done in 5-7 days, deliverability tested'],
                  ['Copywriting', 'Generic templates, low replies', 'Signal-based, written by senior copywriters'],
                  ['List building', 'Manual scraping, high bounce rates', 'Multi-source, enriched, verified'],
                  ['Reply handling', 'Inbox chaos, missed leads', 'Trained reply handlers, fast turnarounds'],
                  ['Deliverability', '40-60% inbox placement', '90%+ inbox placement, monitored daily'],
                  ['Reporting', 'Spreadsheet guesswork', 'Weekly dashboards with clear KPIs'],
                  ['Time to first meeting', '8-12 weeks', '3-5 weeks'],
                  ['Cost', 'Tools + payroll + opportunity cost', 'Predictable monthly investment'],
                ].map((row) => (
                  <tr key={row[0]}>
                    <th scope="row" className="px-5 py-4 font-semibold text-neutral-900">
                      {row[0]}
                    </th>
                    <td className="px-5 py-4 text-neutral-600">
                      <span className="inline-flex items-center gap-1">
                        <X aria-hidden size={14} className="text-red-500" />
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
    </>
  );
}
