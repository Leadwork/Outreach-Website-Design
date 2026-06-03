import type { Metadata } from 'next';
import { Server } from 'lucide-react';
import { siteConfig } from '@/lib/site';
import ServiceLandingPage from '@/components/ServiceLandingPage';

export const metadata: Metadata = {
  title: 'Cold Email Agency for SaaS Companies — Pipeline On Demand',
  description:
    'Done-for-you cold email and LinkedIn outreach built for B2B SaaS. We fill your pipeline with ICP-matched demos while your team ships product. From $1,000/mo, no setup fee.',
  keywords: [
    'cold email agency for SaaS',
    'cold email for SaaS startups',
    'B2B SaaS lead generation',
    'SaaS outbound agency',
    'SaaS demo booking',
    'SaaS pipeline generation',
  ],
  alternates: { canonical: `${siteConfig.url}/cold-email-for-saas` },
  openGraph: {
    type: 'website',
    title: 'Cold Email Agency for SaaS — Pro Lead Maker',
    description:
      'Outbound built for B2B SaaS. Fill your pipeline with ICP-matched demos while your team ships.',
    url: `${siteConfig.url}/cold-email-for-saas`,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: 'Cold Email for SaaS' }],
  },
};

export default function ColdEmailForSaaSPage() {
  return (
    <ServiceLandingPage
      slug="cold-email-for-saas"
      title="Cold Outreach for SaaS"
      icon={Server}
      hero={{
        eyebrow: 'For B2B SaaS',
        h1: (
          <>
            Cold Outreach Built For <span className="text-gradient">B2B SaaS Pipelines</span>
          </>
        ),
        lead: 'You built the product. We fill the pipeline. Done-for-you cold email and LinkedIn outreach that books ICP-matched demos for B2B SaaS — so your founders and AEs can focus on closing and shipping.',
      }}
      stats={[
        { value: '$5K+', label: 'Ideal deal size for outbound ROI' },
        { value: '2,000', label: 'Verified SaaS-buyer contacts/mo' },
        { value: '90%+', label: 'Inbox placement rate' },
        { value: '0', label: 'Engineering hours required' },
      ]}
      features={[
        {
          title: 'ICP built around your product',
          body: 'We define your ideal customer by use case, company size, tech stack, and trigger events — then target accounts already using complementary or competing tools.',
        },
        {
          title: 'Technographic targeting',
          body: 'Reach companies running specific software (Salesforce, HubSpot, AWS, Stripe, etc.) where your product plugs a known gap. We layer tech-stack data into every list.',
        },
        {
          title: 'Trigger-based timing',
          body: 'Funding rounds, new VP hires, expansion into new markets, competitor churn signals — we time outreach to the moment a SaaS buyer is most likely to switch or buy.',
        },
        {
          title: 'Demo-focused sequences',
          body: 'Every sequence is engineered to book a product demo, not a vague "chat." We frame the value around the specific job your software does better.',
        },
        {
          title: 'AE-ready handoff',
          body: 'Positive replies are qualified against your ICP and forwarded with full context, so your AEs walk into demos already knowing the prospect\'s pain and stack.',
        },
        {
          title: 'Scales with your funnel',
          body: 'Start lean to validate messaging, then scale sending volume as your close rate and capacity grow. No re-platforming, no rebuild.',
        },
      ]}
      whatsIncluded={[
        '5 sending domains + 15 inboxes',
        'Full email infrastructure (SPF/DKIM/DMARC)',
        '2,000 verified SaaS-buyer contacts/mo',
        'Technographic & trigger-based targeting',
        'Demo-focused email sequences (A/B tested)',
        'LinkedIn outreach from founder/AE profiles',
        'Reply qualification & AE handoff',
        'Weekly pipeline reporting',
        'CRM integration (HubSpot, Salesforce, Pipedrive)',
        'No setup fee — included',
      ]}
      competitorComparison={[
        { scope: 'SaaS-focused DFY outbound', us: '$3,000 – $8,000/mo', ours: '$1,000/mo' },
        { scope: 'Technographic data targeting', us: 'Premium add-on', ours: 'Included' },
        { scope: 'Setup fee', us: '$1,500 – $5,000', ours: 'Included' },
        { scope: 'Engineering hours needed', us: 'Varies', ours: 'Zero' },
        { scope: 'Contract', us: '3–6 months minimum', ours: 'Month-to-month' },
      ]}
      testimonialQuote={{
        quote:
          'Pro Lead Maker booked 27 qualified demos in our first 45 days. We had tried three other agencies before — none came close to this kind of output.',
        name: 'VP of Sales',
        title: 'B2B SaaS Company, USA',
      }}
      faqs={[
        {
          q: 'Do you work with early-stage SaaS or only funded companies?',
          a: "Both, but outbound math works best when your average contract value is $5K+ annually. Below that, the cost-per-meeting can outpace the deal value. If you're pre-revenue or very low ACV, we'll tell you honestly on the call whether outbound is the right channel yet.",
        },
        {
          q: 'Can you target users of specific competing software?',
          a: "Yes. Technographic targeting is core to SaaS outbound. We can build lists of companies using a specific competitor, a complementary tool, or a tech stack that signals they're a fit — then frame your outreach around the switch or the gap.",
        },
        {
          q: 'How does this integrate with our existing sales team?',
          a: 'We sit at the top of your funnel — prospecting, sending, and qualifying replies. Once a prospect is qualified and books, we hand off to your AEs with full context (their pain, stack, and what they responded to). You can also push everything to your CRM automatically.',
        },
        {
          q: 'Will outbound hurt our domain reputation?',
          a: 'No — we never send from your primary domain. We use lookalike sending domains so your main domain (used for product emails, support, and existing customers) stays completely protected.',
        },
        {
          q: 'How fast can we launch?',
          a: 'Infrastructure and warmup take the first 2 weeks. Live sending typically starts in week 3. We do not promise a specific demo count — that depends on your ICP, offer, and ACV — but the system is built and operating from day one.',
        },
      ]}
    />
  );
}
