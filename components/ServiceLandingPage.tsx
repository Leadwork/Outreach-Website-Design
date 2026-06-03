import Link from 'next/link';
import { Check, ArrowRight, Star, Shield, type LucideIcon } from 'lucide-react';
import { siteConfig } from '@/lib/site';
import CTAButton from './CTAButton';
import FinalCTA from './FinalCTA';
import Reveal from './Reveal';

type FAQ = { q: string; a: string };

type Stat = { value: string; label: string };

export type ServiceLandingProps = {
  slug: string;
  title: string;
  hero: { eyebrow: string; h1: React.ReactNode; lead: string };
  icon: LucideIcon;
  features: { title: string; body: string }[];
  whatsIncluded: string[];
  stats: Stat[];
  faqs: FAQ[];
  competitorComparison: { scope: string; us: string; us_label?: string; ours: string }[];
  testimonialQuote?: { quote: string; name: string; title: string };
};

export default function ServiceLandingPage({
  slug,
  title,
  hero,
  icon: Icon,
  features,
  whatsIncluded,
  stats,
  faqs,
  competitorComparison,
  testimonialQuote,
}: ServiceLandingProps) {
  const pageUrl = `${siteConfig.url}/services/${slug}`;

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: title,
    description: hero.lead,
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
    url: pageUrl,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: `${siteConfig.url}/pricing`,
    },
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteConfig.url}/services` },
      { '@type': 'ListItem', position: 3, name: title, item: pageUrl },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-white pt-28 lg:pt-32">
        <div className="gradient-mesh" aria-hidden />
        <div className="container-px relative z-10 pb-16">
          {/* Breadcrumb nav */}
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-neutral-500">
              <li>
                <Link href="/" className="hover:text-brand-purple">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/services" className="hover:text-brand-purple">
                  Services
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-neutral-700 font-medium" aria-current="page">
                {title}
              </li>
            </ol>
          </nav>

          <div className="text-center">
            <span className="eyebrow">{hero.eyebrow}</span>
            <h1 className="h-display mt-4">{hero.h1}</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600">{hero.lead}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <CTAButton>Book a Free Strategy Call</CTAButton>
              <CTAButton
                href="/pricing"
                variant="secondary"
                external={false}
                withArrow={false}
              >
                See Pricing
              </CTAButton>
            </div>
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

      {/* Feature blocks */}
      <section className="section">
        <div className="container-px">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">How we run it</span>
            <h2 className="h-section mt-4">
              The Operating System Behind <span className="text-gradient">{title}</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-neutral-200 bg-white p-6">
                  <span
                    aria-hidden
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gradient text-white text-sm font-bold"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-neutral-900">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="section bg-neutral-50">
        <div className="container-px">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">What&apos;s included</span>
            <h2 className="h-section mt-4">
              Every <span className="text-gradient">{title}</span> Engagement Includes
            </h2>
          </div>
          <div className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-2">
            {whatsIncluded.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-neutral-200 bg-white px-4 py-3"
              >
                <span
                  aria-hidden
                  className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-purple/10 text-brand-purple"
                >
                  <Check aria-hidden size={12} />
                </span>
                <span className="text-sm font-medium text-neutral-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="section">
        <div className="container-px">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Why we&apos;re different</span>
            <h2 className="h-section mt-4">
              Same Outcome, <span className="text-gradient">Honest Pricing</span>
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              How typical US and UK agencies price equivalent work in 2026.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
            <table className="w-full text-left">
              <thead className="bg-neutral-50">
                <tr>
                  <th scope="col" className="px-5 py-4 text-sm font-semibold text-neutral-900">
                    Scope
                  </th>
                  <th scope="col" className="px-5 py-4 text-sm font-semibold text-neutral-900">
                    Typical US / UK Agency
                  </th>
                  <th scope="col" className="px-5 py-4 text-sm font-semibold text-brand-purple">
                    Pro Lead Maker
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100 text-sm">
                {competitorComparison.map((row) => (
                  <tr key={row.scope}>
                    <th scope="row" className="px-5 py-4 font-semibold text-neutral-900">
                      {row.scope}
                    </th>
                    <td className="px-5 py-4 text-neutral-600">{row.us}</td>
                    <td className="px-5 py-4 font-medium text-neutral-900">
                      <span className="inline-flex items-center gap-1.5">
                        <Check aria-hidden size={14} className="text-brand-purple" />
                        {row.ours}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {testimonialQuote && (
        <section className="section bg-neutral-50">
          <div className="container-px">
            <div className="mx-auto max-w-3xl rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm sm:p-12">
              <div className="flex items-center gap-0.5" aria-label="Five star rating">
                {[0, 1, 2, 3, 4].map((s) => (
                  <Star key={s} size={18} aria-hidden className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="mt-4 text-xl leading-relaxed text-neutral-800">
                &ldquo;{testimonialQuote.quote}&rdquo;
              </blockquote>
              <p className="mt-6 text-sm font-semibold text-neutral-700">
                — {testimonialQuote.name}, <span className="text-neutral-500">{testimonialQuote.title}</span>
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Guarantee */}
      <section className="section">
        <div className="container-px">
          <div className="mx-auto max-w-3xl rounded-3xl border border-brand-purple/20 bg-brand-gradient-soft p-8 text-center sm:p-12">
            <span
              aria-hidden
              className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-gradient text-white"
            >
              <Shield aria-hidden size={26} />
            </span>
            <h2 className="mt-5 text-3xl font-bold text-neutral-900 sm:text-4xl">
              What We Actually Guarantee
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-neutral-700">
              We do <strong>not</strong> promise a specific number of meetings — anyone who does is
              setting a number they cannot honestly control. What we{' '}
              <strong>do</strong> guarantee: a fully-built system, daily operations, weekly
              testing, transparent reporting, and quality control on every reply we forward.
            </p>
            <div className="mt-6">
              <CTAButton>Book a Free Strategy Call</CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-neutral-50">
        <div className="container-px">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">FAQ</span>
            <h2 className="h-section mt-4">
              Common Questions About <span className="text-gradient">{title}</span>
            </h2>
          </div>
          <div className="mx-auto mt-10 max-w-3xl divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-white">
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
                <p className="mt-3 leading-relaxed text-neutral-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Internal cross-link to other services */}
      <section className="section">
        <div className="container-px">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Explore further</span>
            <h2 className="h-section mt-4">
              Pair This With Our <span className="text-gradient">Other Core Services</span>
            </h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { href: '/services/cold-email-outreach', label: 'Cold Email Outreach' },
              { href: '/services/cold-linkedin-outreach', label: 'Cold LinkedIn Outreach' },
              { href: '/services/b2b-lead-generation', label: 'B2B Lead Generation' },
            ]
              .filter((l) => l.href !== `/services/${slug}`)
              .concat([{ href: '/pricing', label: 'See Pricing' }])
              .map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="group flex items-center justify-between rounded-xl border border-neutral-200 bg-white p-5 transition-shadow hover:shadow-md"
                >
                  <span className="font-semibold text-neutral-900 group-hover:text-brand-purple">
                    {l.label}
                  </span>
                  <ArrowRight aria-hidden size={16} className="flex-shrink-0 text-brand-purple" />
                </Link>
              ))}
          </div>
        </div>
      </section>

      <FinalCTA />

      <script
        id={`ld-svc-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        id={`ld-svc-${slug}-breadcrumb`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        id={`ld-svc-${slug}-faq`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
