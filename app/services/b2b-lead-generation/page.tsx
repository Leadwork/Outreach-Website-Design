import type { Metadata } from 'next';
import { Users } from 'lucide-react';
import { siteConfig } from '@/lib/site';
import ServiceLandingPage from '@/components/ServiceLandingPage';

export const metadata: Metadata = {
  title: 'B2B Lead Generation Services — Verified, Enriched, Ready',
  description:
    'Done-for-you B2B lead generation. Verified, enriched contacts via multi-source waterfall. 2,000 ICP-aligned leads/month, under 2% bounce.',
  keywords: [
    'B2B lead generation',
    'B2B lead generation agency',
    'B2B lead generation services',
    'lead list building',
    'verified B2B contacts',
    'data enrichment service',
    'intent-based prospecting',
    'signal-based prospecting',
  ],
  alternates: { canonical: `${siteConfig.url}/services/b2b-lead-generation` },
  openGraph: {
    type: 'website',
    title: 'B2B Lead Generation — Pro Lead Maker',
    description:
      'Verified, ICP-aligned B2B contact lists. 2,000 fresh leads per month, enriched across 15+ fields.',
    url: `${siteConfig.url}/services/b2b-lead-generation`,
    images: [
      { url: siteConfig.ogImage, width: 1200, height: 630, alt: 'B2B Lead Generation Services' },
    ],
  },
};

export default function B2BLeadGenerationPage() {
  return (
    <ServiceLandingPage
      slug="b2b-lead-generation"
      title="B2B Lead Generation"
      icon={Users}
      hero={{
        eyebrow: 'B2B Lead Generation',
        h1: (
          <>
            B2B Lead Generation That <span className="text-gradient">Actually Converts</span>
          </>
        ),
        lead: 'Done-for-you prospect lists for B2B founders, SaaS, and SDRs. We define your ICP, source verified contacts from multiple data providers, enrich across 15+ fields, and deliver sales-ready lists every week.',
      }}
      stats={[
        { value: '2,000', label: 'Verified contacts / month' },
        { value: '<2%', label: 'Bounce rate (or we replace)' },
        { value: '15+', label: 'Enrichment fields per contact' },
        { value: '5', label: 'Data sources in our waterfall' },
      ]}
      features={[
        {
          title: 'ICP workshop',
          body: 'A 45-minute working session to define your ideal customer profile — title, company size, industry, geography, tech stack, funding stage, hiring signals.',
        },
        {
          title: 'Multi-source waterfall',
          body: 'Apollo, ZoomInfo, Cognism, Clay, Hunter — queried in sequence so we always pick the most accurate data point for each prospect. No single-source coverage gaps.',
        },
        {
          title: 'Intent-based prospecting',
          body: 'We layer Bombora and G2 intent data so your campaigns prioritise accounts actively researching solutions like yours. Pipeline that compounds week over week.',
        },
        {
          title: 'Signal-based prospecting',
          body: 'Funding rounds, leadership changes, tech adoption, hiring spikes — we monitor 30+ buying signals and tag every contact with the trigger that makes them in-market.',
        },
        {
          title: 'Triple-verified emails',
          body: 'Every email passes through 3 verification providers (MillionVerifier, NeverBounce, Bouncer). Catch-all addresses validated to 85% accuracy. Bounces replaced free of charge.',
        },
        {
          title: 'CRM-ready delivery',
          body: 'Choose your output format: CSV, Google Sheets, or direct push to HubSpot, Salesforce, Pipedrive, Close, Apollo, or Smartlead. Refreshed weekly.',
        },
      ]}
      whatsIncluded={[
        'ICP definition workshop (45 min)',
        '2,000 verified B2B contacts/month',
        'Multi-source waterfall enrichment',
        '15+ fields: title, LinkedIn, phone, tech stack, funding, industry',
        'Intent-based prospecting (Bombora, G2)',
        'Signal-based prospecting (30+ triggers)',
        'Email verification (under 2% bounce)',
        'Catch-all verification (up to 85% accuracy)',
        'Lookalike & competitor-customer expansion',
        'CSV / Google Sheets / direct CRM push',
        'Weekly list refreshes',
        'Replace bounces free of charge',
      ]}
      competitorComparison={[
        { scope: 'List building (2K verified contacts/mo)', us: '$500 – $1,500/mo', ours: '$297/mo' },
        { scope: 'Single-source data (Apollo only, ZoomInfo only)', us: 'Typical agency offering', ours: 'Waterfall across 5 sources' },
        { scope: 'Enrichment fields', us: '5–8 fields', ours: '15+ fields' },
        { scope: 'Bounce replacement', us: 'Add-on cost', ours: 'Included' },
        { scope: 'Refresh frequency', us: 'Monthly', ours: 'Weekly' },
      ]}
      testimonialQuote={{
        quote:
          'The list quality is on a different planet. Cleaner data than ZoomInfo, more contacts than Apollo, and they enrich every record with intent signals. Our reply rates jumped 40% on the first batch.',
        name: 'Director of Demand Gen',
        title: 'Fintech Startup, USA',
      }}
      faqs={[
        {
          q: 'How is this different from buying Apollo or ZoomInfo myself?',
          a: 'Apollo and ZoomInfo are single sources — Apollo skews startup-heavy, ZoomInfo skews US-enterprise. Each has 30–40% coverage gaps on the other. We run all major sources in a waterfall, so every contact comes from the best-available source. Plus your team is focused on closing, not running enrichment workflows.',
        },
        {
          q: 'Can I use the leads with my own tools?',
          a: 'Absolutely. We deliver via CSV, Google Sheets, or direct push to your CRM (HubSpot, Salesforce, Pipedrive, Close), sales engagement platform (Apollo, Outreach, Salesloft), or sending tool (Instantly, Smartlead, Lemlist). You own the data — use it anywhere.',
        },
        {
          q: 'How do you verify catch-all emails?',
          a: 'We use a 3-step validation process: SMTP probe to confirm the mailbox accepts mail, IP reputation check on the sending domain, and a pattern-match against known catch-all behaviours. Combined, this gives roughly 85% accuracy on catch-all addresses that competitors mark "unknown" and discard.',
        },
        {
          q: 'What if a contact bounces?',
          a: "We replace it free of charge — that's the bounce-replacement guarantee. Just flag bounces in your weekly batch and we add equivalent new contacts to your next delivery. We aim for under 2% bounce rate overall, but individual bounces happen and we own the replacement.",
        },
        {
          q: 'Can you build lists for non-US/UK markets?',
          a: 'Yes. We have strong coverage across Canada, Australia, the Nordics, MENA, and parts of APAC. Coverage in Latin America and Africa is patchier but workable. On the discovery call we will tell you honestly what coverage looks like for your specific market.',
        },
        {
          q: 'How fresh is the data?',
          a: 'Every contact is re-verified within 30 days of delivery. Our waterfall sources refresh weekly to monthly depending on the provider, so a contact in this week\'s batch is verified against current data. Plus we re-verify on delivery — emails that bounce in real-time get replaced before they reach you.',
        },
        {
          q: 'Do you do account-based lists (named accounts)?',
          a: 'Yes — if you have a target account list (e.g. "these 500 companies"), we enrich every contact at those accounts matching your ICP titles. We can also build lookalike account lists ("companies that look like X, Y, Z customers") using firmographic and technographic similarity scoring.',
        },
        {
          q: 'How does this work with your Cold Email and LinkedIn services?',
          a: 'Seamlessly. If you bundle this with our Cold Email or LinkedIn Outreach packages, the leads we build flow straight into your campaigns — no manual export/import. List Building can also run standalone for in-house SDR teams who already have their outreach engine.',
        },
      ]}
    />
  );
}
