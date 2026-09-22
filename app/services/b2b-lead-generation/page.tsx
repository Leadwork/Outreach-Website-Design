import { withSocialMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import { Users } from 'lucide-react';
import { siteConfig } from '@/lib/site';
import ServiceLandingPage from '@/components/ServiceLandingPage';

export const metadata: Metadata = withSocialMetadata({
  title: 'B2B Lead Generation Services — Verified, Enriched, Ready',
  description:
    'Done-for-you B2B lead generation. Verified, enriched contacts via multi-source waterfall. $0.20 per ICP-aligned contact, with bounce replacement.',
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
      'Verified, ICP-aligned B2B contact lists. $0.20 per contact, with fields and coverage agreed before ordering.',
    url: `${siteConfig.url}/services/b2b-lead-generation`,
    images: [
      { url: siteConfig.ogImage, width: 1200, height: 630, alt: 'B2B Lead Generation Services' },
    ],
  },
});

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
        lead: 'Done-for-you prospect lists for B2B founders, SaaS, and SDRs. We define your ICP, source verified contacts from multiple data providers, enrich agreed fields, and deliver sales-ready lists on an agreed schedule at $0.20 per contact.',
      }}
      stats={[
        { value: '$0.20', label: 'Per verified contact' },
        { value: 'Verified', label: 'Emails checked; bounces replaced' },
        { value: 'Agreed', label: 'Fields and coverage before order' },
        { value: '5', label: 'Data sources in our waterfall' },
      ]}
      features={[
        {
          title: 'ICP workshop',
          body: 'A 45-minute working session to define your ideal customer profile — title, company size, industry, geography, tech stack, funding stage, hiring signals.',
        },
        {
          title: 'Multi-source waterfall',
          body: 'Apollo, ZoomInfo, Cognism, Clay, Hunter — queried in sequence to improve coverage and compare available information. Coverage varies by market and requested field.',
        },
        {
          title: 'Intent-based prospecting',
          body: 'Where included in your agreed scope, intent sources help prioritize accounts showing relevant research activity. These signals indicate possible interest, not a confirmed purchase decision.',
        },
        {
          title: 'Signal-based prospecting',
          body: 'Funding rounds, leadership changes, tech adoption, hiring spikes — we identify relevant public signals where available, without assuming that every contact is ready to buy.',
        },
        {
          title: 'Verification and risk review',
          body: 'We check emails using verification providers and flag catch-all or uncertain results separately. Verification reduces risk but cannot guarantee delivery. Bounced contacts are replaced free under the agreed order conditions.',
        },
        {
          title: 'CRM-ready delivery',
          body: 'Choose your output format: CSV, Google Sheets, or direct push to HubSpot, Salesforce, Pipedrive, Close, Apollo, or Smartlead. Refresh frequency is agreed before the order.',
        },
      ]}
      whatsIncluded={[
        'ICP definition workshop (45 min)',
        'Choose your quantity at $0.20 per verified contact',
        'Multi-source waterfall enrichment',
        'Agreed fields: title, LinkedIn, company details; phone, tech stack and funding where available',
        'Intent-based targeting where licensed data is available and agreed',
        'Relevant business signals where available',
        'Email verification (under 2% bounce)',
        'Catch-all risk flags; uncertain addresses reviewed separately',
        'Lookalike & competitor-customer expansion',
        'CSV / Google Sheets / direct CRM push',
        'Delivery schedule agreed before your order',
        'Replace bounces free of charge',
      ]}
      competitorComparison={[
        { scope: 'List building (2,000 verified contacts)', us: '$500 – $1,500', ours: '$400 ($0.20/contact)' },
        { scope: 'Single-source data (Apollo only, ZoomInfo only)', us: 'Typical agency offering', ours: 'Waterfall across 5 sources' },
        { scope: 'Enrichment fields', us: '5–8 fields', ours: 'Fields and coverage agreed first' },
        { scope: 'Bounce replacement', us: 'Add-on cost', ours: 'Included' },
        { scope: 'Refresh frequency', us: 'Monthly', ours: 'Schedule agreed per order' },
      ]}
      faqs={[
        {
          q: 'How is this different from buying Apollo or ZoomInfo myself?',
          a: 'Apollo and ZoomInfo are single sources — Apollo skews startup-heavy, ZoomInfo skews US-enterprise. Coverage differs by market and field. We run all major sources in a waterfall, so every contact comes from the best-available source. Plus your team is focused on closing, not running enrichment workflows.',
        },
        {
          q: 'Can I use the leads with my own tools?',
          a: 'Absolutely. We deliver via CSV, Google Sheets, or direct push to your CRM (HubSpot, Salesforce, Pipedrive, Close), sales engagement platform (Apollo, Outreach, Salesloft), or sending tool (Instantly, Smartlead, Lemlist). You own the data — use it anywhere.',
        },
        {
          q: 'How do you verify catch-all emails?',
          a: 'Catch-all servers can accept mail for addresses that do not exist. We combine available provider signals and flag uncertain results separately. No verification result guarantees a specific mailbox exists or that a message will reach the inbox.',
        },
        {
          q: 'What if a contact bounces?',
          a: "We replace it free of charge — that's the bounce-replacement guarantee. Report bounced contacts with the delivery error. We agree the reporting window and replacement delivery conditions before your order. We aim for under 2% bounce rate overall, but individual bounces happen and we own the replacement.",
        },
        {
          q: 'Can you build lists for non-US/UK markets?',
          a: 'Yes. We have strong coverage across Canada, Australia, the Nordics, MENA, and parts of APAC. Coverage in Latin America and Africa is patchier but workable. On the discovery call we will tell you honestly what coverage looks like for your specific market.',
        },
        {
          q: 'How fresh is the data?',
          a: 'Every contact is re-verified within 30 days of delivery. Our waterfall sources refresh weekly to monthly depending on the provider, so a contact in this week\'s batch is verified against current data. We check verification results before delivery and separate invalid or uncertain records; later delivery failures can still occur.',
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
