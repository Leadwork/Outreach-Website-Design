import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Check,
  X,
  ArrowRight,
  Shield,
  Sparkles,
  Linkedin,
  Settings,
  Database,
  Crown,
} from 'lucide-react';
import { siteConfig } from '@/lib/site';
import { pricing, formatPrice } from '@/lib/pricing';
import CTAButton from '@/components/CTAButton';
import FinalCTA from '@/components/FinalCTA';
import Reveal from '@/components/Reveal';

// ── Page Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Pricing — Cold Email & LinkedIn Outreach Packages',
  description:
    'Transparent cold outreach pricing for B2B teams. Done-for-you multichannel from $1,700/mo, plus LinkedIn-only, management, and list-building plans.',
  keywords: [
    'cold email agency pricing',
    'LinkedIn outreach pricing',
    'B2B lead generation cost',
    'outreach agency packages',
    'done for you cold email',
    'lead list pricing',
    'pro lead maker pricing',
  ],
  alternates: { canonical: `${siteConfig.url}/pricing` },
  openGraph: {
    type: 'website',
    title: 'Pricing — Pro Lead Maker',
    description:
      'Four outreach packages built for B2B founders, SaaS, and agencies. Monthly outreach from $900; full multichannel at $1,700/month. List building and enrichment at $0.20 per contact.',
    url: `${siteConfig.url}/pricing`,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: 'Pro Lead Maker Pricing' }],
  },
};

// ── Packages ───────────────────────────────────────────────────────────────────
const packages = [
  {
    key: 'done-for-you',
    name: 'Done For You',
    icon: Sparkles,
    audience: 'For founders & teams who want zero hassle',
    price: pricing.doneForYou,
    priceLabel: formatPrice(pricing.doneForYou),
    period: '/month',
    badge: 'MOST POPULAR',
    summary: 'We buy and set everything up. You just take the sales meetings.',
    target: '~2,000 cold sends + LinkedIn touches / month',
    features: [
      '5 separate sending domains to reduce risk to your main domain',
      '15 inboxes, fully set up',
      'Complete email infrastructure: SPF, DKIM, DMARC, custom tracking domain',
      'Inbox warmup (2–3 weeks before real sending)',
      'Cold email sending tool (Lemlist, Instantly, Smartlead or Plusvibe)',
      'Closely.io for LinkedIn connections & messaging from your profile',
      '2,000 fresh, verified contacts every month',
      'Email verification on all contacts',
      '4+ email sequence variations — written with your input & A/B tested',
      'LinkedIn outreach sequence from your profile',
      'Positive replies + booked sales meetings forwarded straight to you',
      'Weekly performance reports',
      'Setup included — no separate setup fee',
    ],
    cta: 'Start Done For You',
  },
  {
    key: 'linkedin-only',
    name: 'LinkedIn Outreach',
    icon: Linkedin,
    audience: 'For founders building authority on LinkedIn',
    price: pricing.linkedin,
    priceLabel: formatPrice(pricing.linkedin),
    period: '/month',
    badge: null,
    summary: 'A–Z LinkedIn outreach from your profile. We provide tools, write copy, send, manage replies.',
    target: '~1,500–2,000 LinkedIn touches / month',
    features: [
      'LinkedIn Sales Navigator strategy + saved searches',
      'Closely.io / HeyReach automation, compliant with LinkedIn ToS',
      'Profile audit & optimisation (headline, banner, About, featured)',
      '1,500–2,000 targeted LinkedIn contacts/month',
      'Multi-touch sequence: connection → message → 3 follow-ups',
      'Voice note option for higher-value targets',
      'A/B tested messaging — written with your tone',
      'Reply handling (positive replies forwarded to you)',
      'Booked meetings synced to your calendar',
      'Weekly reports + monthly strategy call',
    ],
    cta: 'Start LinkedIn Plan',
  },
  {
    key: 'management',
    name: 'Outreach Management',
    icon: Settings,
    audience: 'For teams that already have tools or contacts',
    price: pricing.management,
    priceLabel: formatPrice(pricing.management),
    period: '/month',
    badge: null,
    summary: 'You provide tools and/or contacts. We handle setup, sequences, sending, replies, reports.',
    target: 'Tailored to your existing data & volume',
    features: [
      'Use your existing data, tools, and domains; additions quoted first',
      'Full domain authentication audit & fixes (SPF/DKIM/DMARC/tracking)',
      'Inbox warmup management',
      '4+ email sequences — written with your input, A/B tested',
      'LinkedIn sequences from your profile (your tools or ours)',
      'Daily sending operations & deliverability monitoring',
      'Positive reply triage & meeting forwarding',
      'Bounce & spam-complaint monitoring with auto-pause',
      'Weekly performance dashboard',
      'Bi-weekly campaign review calls',
    ],
    cta: 'Hand It To Us',
  },
  {
    key: 'list-building',
    name: 'List Building & Enrichment',
    icon: Database,
    audience: 'For in-house SDRs who need clean data',
    price: pricing.contact,
    priceLabel: formatPrice(pricing.contact),
    period: '/contact',
    badge: 'BEST VALUE',
    summary: 'Done-for-you prospect lists. Verified contacts, enriched data, ready to send.',
    target: 'Example: 2,000 contacts = $400',
    features: [
      'ICP definition workshop (45 min)',
      'Verified B2B contacts at $0.20 each — choose your quantity',
      'Multi-source waterfall: Apollo, ZoomInfo, Cognism, Clay, Hunter',
      'Email verification, with bounced contacts replaced free',
      '15+ enrichment fields: title, LinkedIn URL, phone, company size, tech stack, funding, industry',
      'Lookalike & competitor-customer expansion',
      'CSV / Google Sheets / direct CRM push (HubSpot, Pipedrive, Salesforce)',
      'Delivery schedule agreed before your order',
      'Replace bounces free of charge',
    ],
    cta: 'Get The List',
  },
] as const;

// ── Foundation: included across all retainer plans ─────────────────────────────
const includedAcrossPlans = [
  'Scope and costs agreed before work starts',
  'You own the data we deliver',
  'Direct support from our team',
  'Founder-led strategy and quality control',
];

// ── Who's it for ────────────────────────────────────────────────────────────────
const idealClients = [
  {
    title: 'B2B Founders',
    body: 'Solo or 2-person teams who can\'t hire an SDR yet but need consistent pipeline to grow.',
    pkg: 'Done For You or LinkedIn Outreach',
  },
  {
    title: 'SaaS Companies',
    body: 'Companies with a working product, average deal size $5K+, and need predictable outbound.',
    pkg: 'Done For You',
  },
  {
    title: 'Marketing Agencies',
    body: 'Agencies that fill clients\' pipelines but struggle with their own. We are your outbound team.',
    pkg: 'Done For You or Outreach Management',
  },
  {
    title: 'In-house Sales Teams',
    body: 'Teams with existing SDRs and tools that just need fresh, clean lists every week.',
    pkg: 'List Building & Enrichment',
  },
];

// ── FAQs ────────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: 'How much does List Building & Enrichment cost?',
    a: 'The price is $0.20 per contact. For example, 2,000 contacts cost $400. We agree your target criteria, quantity, included fields, and delivery schedule before you order. Sending campaigns, outreach tools, and reply handling are not included.',
  },
  {
    q: 'How is your pricing structured?',
    a: "Our team is based in Bangladesh and works directly with clients. Done For You is $1,700/month, LinkedIn Outreach is $900/month, and Outreach Management is $1,200/month. Compare the included channels, tools, contact volume, and support when evaluating proposals.",
  },
  {
    q: 'Are there any hidden costs?',
    a: "Each package includes the items on its card. Done For You includes the listed sending infrastructure, outreach tools, contacts, copy, and reply handling. LinkedIn Outreach covers LinkedIn operations and the listed outreach tools; Sales Navigator, if needed, is quoted separately. Outreach Management uses your existing tools and contacts; missing tools or extra data are quoted before purchase. List Building & Enrichment is $0.20 per contact and does not include campaign management. We confirm any extras before work starts.",
  },
  {
    q: 'Are there long-term contracts?',
    a: "The three monthly outreach plans are month-to-month with 30 days of notice to cancel. List Building & Enrichment is priced per contact, with quantity, delivery schedule, and total agreed before the order.",
  },
  {
    q: 'How long until campaigns are live?',
    a: 'Weeks 1–2 cover infrastructure setup, inbox warmup, list-building, and copy. Live sending typically begins in week 3, with steady optimisation from there. We cannot promise a meeting timeline — that depends on your offer, ICP, market, and deal size.',
  },
  {
    q: 'What quality control do you offer on replies?',
    a: 'If we forward you a "positive reply" or booked call that turns out to be off-ICP, not a decision-maker, or a hard no-show — flag it and we will replace it in the next batch at no extra cost. We are accountable for the quality of what we hand off, not for an arbitrary number we cannot honestly control.',
  },
  {
    q: 'Do I own the domains, mailboxes, and data?',
    a: "You own the domains, mailboxes, and data supplied for your package. After cancellation, ongoing domain renewals and third-party subscriptions remain your responsibility. List Building & Enrichment includes the delivered contact data, not sending infrastructure.",
  },
  {
    q: 'Can I switch packages?',
    a: 'Yes, any time. Upgrade or downgrade with 7 days\' notice — we prorate the difference. Most clients start on Done For You and add List Building as they scale, or graduate to Custom for multi-region campaigns.',
  },
  {
    q: 'What is the difference between Done For You and Outreach Management?',
    a: 'Done For You: we provide everything — domains, mailboxes, tools, contacts, copy, sending, replies. You just take the meetings. Outreach Management: you bring your own contacts and/or tools, we handle setup, sequences, sending, replies, and reports on top. Most teams pick Done For You; Management is for teams with existing data or tools they want to keep using.',
  },
  {
    q: 'Do I need to buy any tools separately?',
    a: "Done For You includes the tools listed in its package. LinkedIn Outreach includes the listed outreach tools; Sales Navigator is separate if required. For Outreach Management, you supply your existing tools and contacts. Any additions are quoted for approval first. List Building & Enrichment delivers contacts for use in your own tools.",
  },
  {
    q: 'Do you guarantee a specific number of meetings?',
    a: 'No. Anyone promising "X meetings per month" upfront is either inflating numbers or carrying hidden caveats. Meeting volume depends on factors outside our control — your offer, deal size, market timing, ICP fit, sales follow-up. What we do guarantee: a fully-built system, daily operations, weekly testing, transparent reporting, and ongoing optimisation. We are accountable for inputs and operations, not arbitrary outcome promises.',
  },
  {
    q: 'Can you work with non-US/UK/EU markets?',
    a: 'Yes — we\'ve run successful campaigns into Canada, Australia, the Nordics, MENA, and parts of APAC. On the discovery call we\'ll tell you honestly whether your target market is a good fit before you commit to a plan.',
  },
  {
    q: 'I need something more custom — multi-region, multi-product, or enterprise volume.',
    a: 'That\'s our Custom tier. Book a call and we\'ll scope a tailored package — multi-region SDRs, multi-language sequences, white-label dashboards, dedicated account team, and custom SLAs are all on the table.',
  },
];

// ── Structured Data ────────────────────────────────────────────────────────────
const pricingUrl = `${siteConfig.url}/pricing`;

// Separate offers keep monthly retainers and per-contact pricing distinct.
const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'OfferCatalog',
  name: 'Pro Lead Maker Outreach Packages',
  url: pricingUrl,
  itemListElement: packages.map((p) => ({
    '@type': 'Offer',
    name: p.name,
    url: `${pricingUrl}#${p.key}`,
    price: p.price,
    priceCurrency: 'USD',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: p.price,
      priceCurrency: 'USD',
      unitText: p.key === 'list-building' ? 'contact' : 'month',
    },
    itemOffered: { '@type': 'Service', name: p.name, description: p.summary },
  })),
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
            Outreach Pricing That <span className="text-gradient">Pays For Itself</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600">
            Four transparent packages built for B2B founders, SaaS, and agencies. No long-term
            contracts: monthly plans have a 30-day cancellation notice. List building is priced per contact.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-neutral-500">
            {[
              'No setup fees',
              'No long contracts',
              'You own all domains & data',
              '1,000+ orders delivered',
            ].map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5">
                <Check aria-hidden size={14} className="text-brand-purple" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Package Pricing Cards */}
      <section className="section">
        <div className="container-px">
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4 xl:items-stretch">
            {packages.map((p, i) => {
              const isPopular = p.badge === 'MOST POPULAR';
              const isValue = p.badge === 'BEST VALUE';
              const Icon = p.icon;
              return (
                <Reveal key={p.key} delay={i * 0.05}>
                  <article
                    id={p.key}
                    className={[
                      'relative flex h-full flex-col rounded-3xl border p-6 shadow-sm transition-shadow hover:shadow-lg',
                      isPopular
                        ? 'border-brand-purple bg-brand-gradient-soft ring-2 ring-brand-purple/40'
                        : 'border-neutral-200 bg-white',
                    ].join(' ')}
                  >
                    {p.badge && (
                      <span
                        className={[
                          'absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider',
                          isPopular
                            ? 'bg-brand-gradient text-white shadow-md'
                            : isValue
                              ? 'bg-emerald-600 text-white shadow-md'
                              : 'bg-neutral-900 text-white',
                        ].join(' ')}
                      >
                        {p.badge}
                      </span>
                    )}

                    <div className="flex items-center gap-3">
                      <span
                        aria-hidden
                        className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white"
                      >
                        <Icon aria-hidden size={20} />
                      </span>
                      <div className="min-w-0">
                        <h2 className="text-lg font-bold text-neutral-900">{p.name}</h2>
                        <p className="text-xs text-neutral-500">{p.audience}</p>
                      </div>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-neutral-600">{p.summary}</p>

                    <div className="mt-5 flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold text-neutral-900">{p.priceLabel}</span>
                      <span className="text-sm font-medium text-neutral-500">{p.period}</span>
                    </div>
                    <p className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-brand-purple">
                      🎯 {p.target}
                    </p>

                    <ul className="mt-5 space-y-2 text-sm">
                      {p.features.map((f) => (
                        <li key={f} className="flex gap-2">
                          <Check
                            aria-hidden
                            size={14}
                            className="mt-1 flex-shrink-0 text-brand-purple"
                          />
                          <span className="text-neutral-700">{f}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 pt-2">
                      <CTAButton
                        variant={isPopular ? 'primary' : 'secondary'}
                        withArrow={false}
                      >
                        {p.cta}
                      </CTAButton>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <p className="mt-8 text-center text-sm text-neutral-500">
            All prices are in USD. Outreach plans are billed monthly with 30 days of notice to cancel. List Building &amp; Enrichment is $0.20 per contact; 2,000 contacts cost $400.{' '}
            <Link href="/contact" className="font-semibold text-brand-purple hover:underline">
              Ask about regional pricing →
            </Link>
          </p>
        </div>
      </section>

      {/* Custom / Enterprise Callout */}
      <section className="section bg-neutral-50">
        <div className="container-px">
          <div className="mx-auto max-w-5xl rounded-3xl border border-brand-purple/20 bg-white p-8 shadow-sm sm:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-12">
              <div className="lg:col-span-2 flex justify-center lg:justify-start">
                <span
                  aria-hidden
                  className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-gradient text-white"
                >
                  <Crown aria-hidden size={28} />
                </span>
              </div>
              <div className="lg:col-span-7">
                <span className="eyebrow">Custom Tier</span>
                <h2 className="mt-3 text-2xl font-bold text-neutral-900 sm:text-3xl">
                  Need Something <span className="text-gradient">Specific?</span>
                </h2>
                <p className="mt-3 text-neutral-700">
                  Multi-region campaigns, multi-language sequences, enterprise volume, white-label
                  dashboards, or a fully dedicated SDR team? We&apos;ll scope a custom package on a discovery
                  call and send you a tailored quote within 24 hours.
                </p>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2 text-sm text-neutral-600">
                  {[
                    'Multi-region outbound',
                    'Multi-language sequences',
                    '10K+ daily sends',
                    'Dedicated SDR team',
                    'White-label reporting',
                    'Custom CRM integrations',
                  ].map((c) => (
                    <li key={c} className="flex gap-2">
                      <Check aria-hidden size={14} className="mt-1 flex-shrink-0 text-brand-purple" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-3 flex justify-center lg:justify-end">
                <CTAButton href="/contact" external={false} withArrow={true}>
                  Discuss Custom
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who is this for */}
      <section className="section">
        <div className="container-px">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Who we work with</span>
            <h2 className="h-section mt-4">
              Built For B2B <span className="text-gradient">Founders, SaaS & Agencies</span>
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Find the package that matches your team size, stack, and stage of growth.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {idealClients.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-neutral-200 bg-white p-6">
                  <h3 className="text-lg font-bold text-neutral-900">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{c.body}</p>
                  <div className="mt-4 rounded-lg bg-brand-purple/5 px-3 py-2">
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-purple">
                      Recommended
                    </p>
                    <p className="mt-1 text-sm font-medium text-neutral-900">{c.pkg}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Foundation: included across all plans */}
      <section className="section bg-neutral-50">
        <div className="container-px">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Included in every engagement</span>
            <h2 className="h-section mt-4">
              The <span className="text-gradient">Foundation</span> Every Package Ships With
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Shared standards across our services. Infrastructure, copywriting, sending, and reply handling are included only where listed in your package.
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

      {/* Comparison: Pro Lead Maker vs Other Agencies */}
      <section className="section">
        <div className="container-px">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Why we are priced this way</span>
            <h2 className="h-section mt-4">
              Compare Scope, <span className="text-gradient">Then Compare Price</span>
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Indicative pricing ranges for context. Providers differ in scope, volume, and terms; confirm current quotes before comparing.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-4xl overflow-x-auto rounded-2xl border border-neutral-200 bg-white shadow-sm">
            <table className="w-full text-left">
              <thead className="bg-neutral-50">
                <tr>
                  <th scope="col" className="px-5 py-4 text-sm font-semibold text-neutral-900">
                    Scope
                  </th>
                  <th scope="col" className="px-5 py-4 text-sm font-semibold text-neutral-900">
                    US / UK Agency
                  </th>
                  <th scope="col" className="px-5 py-4 text-sm font-semibold text-brand-purple">
                    Pro Lead Maker
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100 text-sm">
                {[
                  ['Full multichannel (email + LinkedIn) DFY', '$3,000 – $8,000/mo', '$1,700/mo'],
                  ['LinkedIn-only outreach', '$1,500 – $5,000/mo', '$900/mo'],
                  ['Outreach management (you bring data/tools)', '$2,500 – $4,500/mo', '$1,200/mo'],
                  ['List building & enrichment (2,000 contacts)', '$500 – $1,500', '$400 ($0.20/contact)'],
                  ['Setup fee', '$1,500 – $5,000 one-time', 'Included'],
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
            Benchmarks averaged from public 2026 pricing of Belkins, Cleverly, Cience, Revboss,
            LevelUp Leads, Sopro, HeyReach, and Clay.
          </p>
        </div>
      </section>

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
              Our Quality Commitment
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-neutral-700">
              We do <strong>not</strong> promise a specific number of meetings — anyone who does is
              setting a number they can&apos;t honestly control. What we{' '}
              <strong>do</strong> guarantee: a fully-built outbound system, daily operations,
              weekly testing, transparent reporting, and quality control on replies for managed outreach packages. List-only orders include verification and free replacement of bounced contacts.
            </p>
            <p className="mt-4 text-sm text-neutral-600">
              If a forwarded reply or booked call is off-ICP or a hard no-show, we replace it in
              the next batch at no extra cost. 30-day cancellation on every retainer. You own all
              domains, mailboxes, and data supplied for your package; ongoing renewals and subscriptions remain your responsibility after cancellation.
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
