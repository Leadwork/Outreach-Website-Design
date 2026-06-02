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
import CTAButton from '@/components/CTAButton';
import FinalCTA from '@/components/FinalCTA';
import Reveal from '@/components/Reveal';

// ── Page Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Pricing — Cold Email & LinkedIn Outreach Packages',
  description:
    'Transparent outreach pricing for B2B founders, SaaS, and agencies. Done-for-you multichannel from $1,000/month, LinkedIn-only, outreach management, and list-building packages.',
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
      'Four outreach packages built for B2B founders, SaaS, and agencies. From $297/month for list-building to $1,000/month for full multichannel.',
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
    price: 1000,
    priceLabel: '$1,000',
    period: '/month',
    badge: 'MOST POPULAR',
    summary: 'We buy and set everything up. You just show up for the interviews.',
    target: '~2,000 cold sends + LinkedIn touches / month',
    features: [
      '5 sending domains (lookalikes — your main domain stays protected)',
      '15 inboxes, fully set up',
      'Complete email infrastructure: SPF, DKIM, DMARC, custom tracking domain',
      'Inbox warmup (2–3 weeks before real sending)',
      'Cold email sending tool (Lemlist, Instantly, Smartlead or Plusvibe)',
      'Closely.io for LinkedIn connections & messaging from your profile',
      '2,000 fresh, verified contacts every month',
      'Email verification on all contacts',
      '4+ email sequence variations — written with your input & A/B tested',
      'LinkedIn outreach sequence from your profile',
      'Positive replies + booked interviews forwarded straight to you',
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
    price: 497,
    priceLabel: '$497',
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
    price: 797,
    priceLabel: '$797',
    period: '/month',
    badge: null,
    summary: 'You provide tools and/or contacts. We handle setup, sequences, sending, replies, reports.',
    target: 'Tailored to your existing data & volume',
    features: [
      'Use your existing data, tools, or domains (or we add what\'s missing)',
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
    price: 297,
    priceLabel: '$297',
    period: '/month',
    badge: 'BEST VALUE',
    summary: 'Done-for-you prospect lists. Verified contacts, enriched data, ready to send.',
    target: '2,000 verified contacts / month',
    features: [
      'ICP definition workshop (45 min)',
      '2,000 verified B2B contacts per month',
      'Multi-source waterfall: Apollo, ZoomInfo, Cognism, Clay, Hunter',
      'Email verification (<2% bounce rate guaranteed)',
      '15+ enrichment fields: title, LinkedIn URL, phone, company size, tech stack, funding, industry',
      'Lookalike & competitor-customer expansion',
      'CSV / Google Sheets / direct CRM push (HubSpot, Pipedrive, Salesforce)',
      'Weekly list refreshes',
      'Replace bounces free of charge',
    ],
    cta: 'Get The List',
  },
] as const;

// ── Foundation: included across all retainer plans ─────────────────────────────
const includedAcrossPlans = [
  'No long-term contracts (cancel any time)',
  'You own all domains, mailboxes & data forever',
  'Slack channel for fast support',
  '90%+ inbox placement, monitored daily',
  'Senior copywriting (no AI templates)',
  'Weekly performance reporting',
  'Meeting-quality guarantee (we replace no-shows & non-ICP)',
  'Founder-led strategy (MD. Al Amin on every account)',
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
    q: 'Why are you cheaper than other agencies?',
    a: 'Most US-based cold email agencies charge $3,000–$15,000/month for a Done-For-You-equivalent plan. We deliver the same scope at $1,000/month because our 8-person team is based in Bangladesh — same senior operators, same tools, lower overhead. Our 5.0/5.0 rating across 500+ Fiverr and Upwork orders backs this up.',
  },
  {
    q: 'Are there any hidden costs?',
    a: 'No. Every retainer includes domains, mailboxes, sending tools, warmup tools, list building, and reply handling. The number on the card is the number you pay. The only extras would be premium add-ons you explicitly request (e.g. paid LinkedIn Sales Navigator if you don\'t have one — we\'ll quote it transparently first).',
  },
  {
    q: 'Are there long-term contracts?',
    a: 'No. All retainers are month-to-month with 30 days\' notice to cancel. We earn your renewal every month — most of our clients stay 12+ months because the pipeline keeps growing.',
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
    a: 'Yes — completely. Domains are registered in your company name, mailboxes belong to you, all data lives in your accounts. If we ever part ways, you keep everything operational.',
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
    a: 'For Done For You: no — we include domains, sending tools (Lemlist/Instantly/Smartlead/Plusvibe), warmup, LinkedIn (Closely.io), and verification. For LinkedIn-only and Management: depends on what you already have. We\'ll audit on the discovery call and only add what\'s missing.',
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

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Pro Lead Maker Outreach Packages',
  description:
    'Four outreach packages for B2B founders, SaaS, and agencies: Done For You ($1,000), LinkedIn Outreach ($497), Outreach Management ($797), List Building & Enrichment ($297), plus Custom.',
  brand: { '@type': 'Brand', name: siteConfig.name },
  image: `${siteConfig.url}/og-image.png`,
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'USD',
    lowPrice: '297',
    highPrice: '1000',
    offerCount: '4',
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
            Outreach Pricing That <span className="text-gradient">Pays For Itself</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600">
            Four transparent packages built for B2B founders, SaaS, and agencies. No long-term
            contracts. Cancel any time. Most US agencies charge 3–5× more for the same scope.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-neutral-500">
            {[
              'No setup fees',
              'No long contracts',
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
                        <h2 className="truncate text-lg font-bold text-neutral-900">{p.name}</h2>
                        <p className="truncate text-xs text-neutral-500">{p.audience}</p>
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
            All retainers billed monthly in USD. Pricing for US, UK & EU markets.{' '}
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
            <span className="eyebrow">Included in every retainer</span>
            <h2 className="h-section mt-4">
              The <span className="text-gradient">Foundation</span> Every Package Ships With
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Eight non-negotiables that make outbound actually work — bundled into every retainer plan.
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
              Same Output, <span className="text-gradient">3–5× Cheaper</span>
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Honest comparison of what typical US and UK agencies charge for equivalent scope in 2026.
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
                    US / UK Agency
                  </th>
                  <th scope="col" className="px-5 py-4 text-sm font-semibold text-brand-purple">
                    Pro Lead Maker
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100 text-sm">
                {[
                  ['Full multichannel (email + LinkedIn) DFY', '$3,000 – $8,000/mo', '$1,000/mo'],
                  ['LinkedIn-only outreach', '$1,500 – $5,000/mo', '$497/mo'],
                  ['Outreach management (you bring data/tools)', '$2,500 – $4,500/mo', '$797/mo'],
                  ['List building & enrichment (2K contacts/mo)', '$500 – $1,500/mo', '$297/mo'],
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
              What We Actually Guarantee
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-neutral-700">
              We do <strong>not</strong> promise a specific number of meetings — anyone who does is
              setting a number they can&apos;t honestly control. What we{' '}
              <strong>do</strong> guarantee: a fully-built outbound system, daily operations,
              weekly testing, transparent reporting, and quality control on every reply we forward.
            </p>
            <p className="mt-4 text-sm text-neutral-600">
              If a forwarded reply or booked call is off-ICP or a hard no-show, we replace it in
              the next batch at no extra cost. 30-day cancellation on every retainer. You own all
              domains, mailboxes, and data forever.
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
