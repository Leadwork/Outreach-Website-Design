import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, X, ArrowRight, Star, Shield, Sparkles, Zap, Crown } from 'lucide-react';
import { siteConfig } from '@/lib/site';
import CTAButton from '@/components/CTAButton';
import FinalCTA from '@/components/FinalCTA';
import Reveal from '@/components/Reveal';

// ── Page Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Pricing — Cold Email Outreach Plans Built To Scale',
  description:
    'Transparent cold email outreach pricing for B2B teams. Three retainer plans (Launchpad, Growth, Scale) plus pay-per-meeting and setup-only options. No long-term contracts.',
  keywords: [
    'cold email agency pricing',
    'B2B lead generation pricing',
    'outreach agency cost',
    'appointment setting pricing',
    'cold email retainer',
    'pay per meeting pricing',
    'pro lead maker pricing',
  ],
  alternates: { canonical: `${siteConfig.url}/pricing` },
  openGraph: {
    type: 'website',
    title: 'Pricing — Pro Lead Maker',
    description:
      'Three transparent retainer plans plus pay-per-meeting and setup-only options for B2B cold email outreach.',
    url: `${siteConfig.url}/pricing`,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: 'Pro Lead Maker Pricing' }],
  },
};

// ── Data ───────────────────────────────────────────────────────────────────────
const tiers = [
  {
    key: 'launchpad',
    name: 'Launchpad',
    icon: Zap,
    tagline: 'For startups & solopreneurs',
    price: 1997,
    priceLabel: '$1,997',
    period: '/month',
    badge: null,
    description: 'A lean outbound system to validate your offer and start booking meetings.',
    target: '5–8 qualified meetings / month',
    features: [
      '2 secondary domains',
      '6 mailboxes (Google Workspace or M365)',
      'Full SPF / DKIM / DMARC setup',
      '4-week structured email warmup',
      '~500 emails/day capacity',
      'ICP definition & 2,000 verified contacts/mo',
      'Senior-written email sequences',
      'Reply handling (1 inbox)',
      'Weekly performance report',
      'Slack + email support',
    ],
    notIncluded: [
      'LinkedIn outreach',
      'Dedicated SDR',
      'Retargeting layer',
    ],
    cta: 'Start with Launchpad',
  },
  {
    key: 'growth',
    name: 'Growth',
    icon: Sparkles,
    tagline: 'For B2B teams ready to scale',
    price: 3997,
    priceLabel: '$3,997',
    period: '/month',
    badge: 'MOST POPULAR',
    description:
      'Our flagship plan — multi-channel outbound built around signal-based prospecting.',
    target: '15–20 qualified meetings / month',
    features: [
      'Everything in Launchpad, plus:',
      '4 secondary domains',
      '12 mailboxes',
      '~2,000 emails/day capacity',
      'Signal-based prospecting (30+ buying signals)',
      'LinkedIn outreach (multi-touch sequences)',
      '5,000 verified contacts/mo',
      'A/B testing on every sequence',
      'Reply handling across all inboxes',
      'Bi-weekly strategy calls',
      'Live performance dashboard',
    ],
    notIncluded: [
      'Retargeting ads layer',
      'Dedicated SDR',
    ],
    cta: 'Get Growth',
  },
  {
    key: 'scale',
    name: 'Scale',
    icon: Crown,
    tagline: 'For agencies, SaaS & enterprise',
    price: 6997,
    priceLabel: '$6,997',
    period: '/month',
    badge: 'BEST FOR PIPELINE',
    description:
      'A full outbound machine — multi-channel, multi-segment, with a dedicated SDR layer.',
    target: '30+ qualified meetings / month',
    features: [
      'Everything in Growth, plus:',
      '8+ secondary domains',
      '24+ mailboxes',
      '~5,000+ emails/day capacity',
      'Intent-based prospecting (Bombora, G2, etc.)',
      'Dedicated SDR & reply handlers',
      'LinkedIn + Email + Retargeting orchestration',
      'Custom CRM integrations (HubSpot, Salesforce, Pipedrive)',
      'Weekly strategy + reporting calls',
      'Priority Slack channel (4-hr response)',
      'Quarterly business reviews',
    ],
    notIncluded: [],
    cta: 'Book a Scale Demo',
  },
] as const;

const altModels = [
  {
    name: 'Pay-Per-Meeting',
    price: 'From $497 / qualified meeting',
    body: 'Pay only for meetings that match your ICP and show up. Best for teams who want pure performance pricing. $1,500 setup fee applies.',
    icon: Star,
  },
  {
    name: 'Setup-Only (One-Time)',
    price: 'From $2,497 one-time',
    body: 'We build your entire cold email infrastructure — domains, DNS, mailboxes, warmup, sending tool — and hand it back. Perfect for in-house teams.',
    icon: Shield,
  },
  {
    name: 'Custom Enterprise',
    price: "Let's talk",
    body: 'Multi-region, multi-language, multi-product outbound for companies running 10K+ sends per day. Includes dedicated team, weekly QBRs, and custom SLAs.',
    icon: Crown,
  },
];

const includedAcrossPlans = [
  'Custom-built ICP & list',
  'Senior copywriting',
  'Verified contact data',
  'Domain authentication (SPF/DKIM/DMARC)',
  '90%+ inbox placement, monitored daily',
  'Weekly performance reporting',
  'No long-term contracts (cancel any time)',
  'Owned domains & data (yours forever)',
];

const faqs = [
  {
    q: 'How are you priced compared to other cold email agencies?',
    a: 'Most US-based cold email agencies charge $4,000–$10,000/month for a Growth-equivalent plan. We price at $3,997/month because our team is based in Bangladesh — same senior operators, same results, lower overhead. Our 5.0/5.0 rating across 500+ Fiverr and Upwork orders backs this up.',
  },
  {
    q: 'Are there any hidden costs?',
    a: 'No. Every plan includes domains, mailboxes, warmup tools, sending platform, list-building, and reply handling. The number on the card is the number you pay. The only extra is if you want a sending tool you already use (e.g. you bring your own Instantly seat) — we can credit you back.',
  },
  {
    q: 'Are there long-term contracts?',
    a: 'No. All plans are month-to-month and you can cancel any time with 30 days notice. We earn your renewal every month — most of our clients stay 12+ months because the pipeline keeps growing.',
  },
  {
    q: 'What is your meeting-quality guarantee?',
    a: 'If a booked meeting doesn\'t match your ICP, isn\'t a real decision-maker, or no-shows twice in a row — it doesn\'t count toward your monthly target. We replace it free of charge.',
  },
  {
    q: 'How long until I see meetings booked?',
    a: 'First qualified meetings typically hit your calendar in weeks 3–5. Weeks 1–2 are spent on infrastructure setup, warmup, list-building, and copy. By month 2 you should be at full target volume.',
  },
  {
    q: 'Do I own the domains and infrastructure?',
    a: 'Yes — completely. Domains are registered in your company name, mailboxes belong to you, all data is yours. If we ever part ways, you keep everything operational.',
  },
  {
    q: 'Can I switch plans?',
    a: 'Yes, any time. Upgrade or downgrade with 7 days notice — we\'ll prorate the difference. Most clients start on Growth and graduate to Scale within 4–6 months.',
  },
  {
    q: 'Do you guarantee a specific number of meetings?',
    a: "We guarantee the inputs — fully-built system, weekly testing, transparent reporting, ongoing optimization. The targets on this page (5–8, 15–20, 30+ meetings) are averages across the last 50+ clients. Your industry, offer, and ICP will move the number up or down.",
  },
  {
    q: 'What\'s the difference between retainer and pay-per-meeting?',
    a: 'Retainer (most clients): predictable monthly fee, you get all the meetings the system books — usually more cost-effective above ~10 meetings/month. Pay-per-meeting: pure performance, you only pay for delivered meetings — better if you want zero fixed cost and your sales cycle is high-margin (e.g., $20K+ deal sizes).',
  },
  {
    q: 'Can you work with non-US/UK/EU markets?',
    a: 'Yes — we\'ve run successful campaigns into Canada, Australia, the Nordics, and parts of APAC. Reach out and we\'ll tell you honestly whether your target market is a good fit before you commit to a plan.',
  },
];

// ── Structured Data ────────────────────────────────────────────────────────────
const pricingUrl = `${siteConfig.url}/pricing`;

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Pro Lead Maker Cold Email Outreach Plans',
  description:
    'Three monthly retainer plans (Launchpad, Growth, Scale) plus pay-per-meeting and setup-only options for B2B cold email outreach.',
  brand: { '@type': 'Brand', name: siteConfig.name },
  image: `${siteConfig.url}/og-image.png`,
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'USD',
    lowPrice: '1997',
    highPrice: '6997',
    offerCount: '3',
    availability: 'https://schema.org/InStock',
    url: pricingUrl,
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    bestRating: '5',
    ratingCount: '500',
    reviewCount: '500',
  },
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

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
    { '@type': 'ListItem', position: 2, name: 'Pricing', item: pricingUrl },
  ],
};

// ── Component ──────────────────────────────────────────────────────────────────
export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-white pt-28 lg:pt-32">
        <div className="gradient-mesh" aria-hidden />
        <div className="container-px relative z-10 pb-16 text-center">
          <span className="eyebrow">Pricing</span>
          <h1 className="h-display mt-4">
            Outbound Pricing That <span className="text-gradient">Pays For Itself</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600">
            Transparent monthly retainers, pay-per-meeting, or one-time setup. No long contracts.
            Cancel any time. Most US agencies charge 2–3× more for the same outcome.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-neutral-500">
            {[
              'No long-term contracts',
              'Cancel any time',
              'You own all domains & data',
              '5.0 ★ from 500+ clients',
            ].map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5">
                <Check aria-hidden size={14} className="text-brand-purple" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3-Tier Pricing Cards */}
      <section className="section">
        <div className="container-px">
          <div className="grid gap-6 lg:grid-cols-3 lg:items-stretch">
            {tiers.map((t, i) => {
              const isPopular = t.badge === 'MOST POPULAR';
              const Icon = t.icon;
              return (
                <Reveal key={t.key} delay={i * 0.06}>
                  <article
                    className={[
                      'relative flex h-full flex-col rounded-3xl border p-7 shadow-sm transition-shadow hover:shadow-lg',
                      isPopular
                        ? 'border-brand-purple bg-brand-gradient-soft ring-2 ring-brand-purple/40'
                        : 'border-neutral-200 bg-white',
                    ].join(' ')}
                  >
                    {t.badge && (
                      <span
                        className={[
                          'absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider',
                          isPopular
                            ? 'bg-brand-gradient text-white shadow-md'
                            : 'bg-neutral-900 text-white',
                        ].join(' ')}
                      >
                        {t.badge}
                      </span>
                    )}

                    <div className="flex items-center gap-3">
                      <span
                        aria-hidden
                        className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gradient text-white"
                      >
                        <Icon aria-hidden size={20} />
                      </span>
                      <div>
                        <h2 className="text-xl font-bold text-neutral-900">{t.name}</h2>
                        <p className="text-xs text-neutral-500">{t.tagline}</p>
                      </div>
                    </div>

                    <p className="mt-5 text-sm leading-relaxed text-neutral-600">{t.description}</p>

                    <div className="mt-6 flex items-baseline gap-1">
                      <span className="text-5xl font-extrabold text-neutral-900">{t.priceLabel}</span>
                      <span className="text-sm font-medium text-neutral-500">{t.period}</span>
                    </div>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-brand-purple">
                      🎯 {t.target}
                    </p>

                    <ul className="mt-6 space-y-2.5 text-sm">
                      {t.features.map((f) => (
                        <li key={f} className="flex gap-2.5">
                          <Check
                            aria-hidden
                            size={16}
                            className="mt-0.5 flex-shrink-0 text-brand-purple"
                          />
                          <span className="text-neutral-700">{f}</span>
                        </li>
                      ))}
                      {t.notIncluded.map((f) => (
                        <li key={f} className="flex gap-2.5 opacity-50">
                          <X
                            aria-hidden
                            size={16}
                            className="mt-0.5 flex-shrink-0 text-neutral-400"
                          />
                          <span className="text-neutral-500 line-through">{f}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-7 pt-2">
                      <CTAButton
                        variant={isPopular ? 'primary' : 'secondary'}
                        withArrow={false}
                      >
                        {t.cta}
                      </CTAButton>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <p className="mt-8 text-center text-sm text-neutral-500">
            All plans billed monthly in USD. Pricing for US, UK & EU markets.{' '}
            <Link href="/contact" className="font-semibold text-brand-purple hover:underline">
              Contact us for regional pricing →
            </Link>
          </p>
        </div>
      </section>

      {/* What's Included Across All Plans */}
      <section className="section bg-neutral-50">
        <div className="container-px">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Included in every plan</span>
            <h2 className="h-section mt-4">
              Every Plan Comes With <span className="text-gradient">The Foundation</span>
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Eight non-negotiables that make outbound actually work — bundled into every tier.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-2">
            {includedAcrossPlans.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white px-4 py-3"
              >
                <span
                  aria-hidden
                  className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-brand-purple/10 text-brand-purple"
                >
                  <Check aria-hidden size={14} />
                </span>
                <span className="text-sm font-medium text-neutral-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alternative Pricing Models */}
      <section className="section">
        <div className="container-px">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Alternative pricing</span>
            <h2 className="h-section mt-4">
              Not Ready For A Retainer? <span className="text-gradient">We Have Options</span>
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Three additional models for teams that want pure performance, one-time setup, or a custom build.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {altModels.map((m, i) => {
              const Icon = m.icon;
              return (
                <Reveal key={m.name} delay={i * 0.05}>
                  <div className="flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-6">
                    <span
                      aria-hidden
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gradient text-white"
                    >
                      <Icon aria-hidden size={20} />
                    </span>
                    <h3 className="mt-4 text-lg font-bold text-neutral-900">{m.name}</h3>
                    <p className="mt-1 text-sm font-semibold text-brand-purple">{m.price}</p>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-600">{m.body}</p>
                    <div className="mt-auto pt-5">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1 text-sm font-semibold text-brand-purple hover:underline"
                      >
                        Discuss this option <ArrowRight aria-hidden size={14} />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison: Pro Lead Maker vs Other Agencies */}
      <section className="section bg-neutral-50">
        <div className="container-px">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Why we're priced this way</span>
            <h2 className="h-section mt-4">
              Same Output, <span className="text-gradient">Half The Cost</span>
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Honest comparison of what a typical US-based cold email agency charges for the same scope.
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
                    US Boutique Agency
                  </th>
                  <th scope="col" className="px-5 py-4 text-sm font-semibold text-brand-purple">
                    Pro Lead Maker
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100 text-sm">
                {[
                  ['Starter / Launchpad-equivalent', '$3,000 – $4,000/mo', '$1,997/mo'],
                  ['Mid-tier / Growth-equivalent', '$5,000 – $8,000/mo', '$3,997/mo'],
                  ['Scale / Enterprise-equivalent', '$10,000 – $18,000/mo', '$6,997/mo'],
                  ['Per-meeting pricing', '$800 – $1,200/meeting', 'From $497/meeting'],
                  ['One-time setup', '$3,500 – $7,500', 'From $2,497'],
                ].map((row) => (
                  <tr key={row[0]}>
                    <th scope="row" className="px-5 py-4 font-semibold text-neutral-900">
                      {row[0]}
                    </th>
                    <td className="px-5 py-4 text-neutral-600">
                      <span className="inline-flex items-center gap-1.5">
                        <X aria-hidden size={14} className="text-red-500" />
                        {row[1]}
                      </span>
                    </td>
                    <td className="px-5 py-4 font-medium text-neutral-900">
                      <span className="inline-flex items-center gap-1.5">
                        <Check aria-hidden size={14} className="text-brand-purple" />
                        {row[2]}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-neutral-500">
            Sources: averaged from public pricing of Belkins, Cleverly, Cience, Revboss, LevelUp Leads and Sopro (2026).
          </p>
        </div>
      </section>

      {/* Guarantee Section */}
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
              The Pro Lead Maker Guarantee
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-neutral-700">
              If a booked meeting isn't a real decision-maker, doesn't match your ICP, or no-shows twice —
              it doesn't count toward your monthly target. <strong>We replace it free of charge.</strong>
            </p>
            <p className="mt-4 text-sm text-neutral-600">
              Plus: 30-day no-strings cancellation on every retainer. You own all domains, mailboxes,
              and data forever.
            </p>
            <div className="mt-7">
              <CTAButton>Book a Free Strategy Call</CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-neutral-50">
        <div className="container-px">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Pricing FAQ</span>
            <h2 className="h-section mt-4">
              Everything You Need <span className="text-gradient">Before You Commit</span>
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
                <p className="mt-3 leading-relaxed text-neutral-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />

      <script
        id="ld-pricing-product"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        id="ld-pricing-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        id="ld-pricing-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
    </>
  );
}
