import type { Metadata } from 'next';
import { Briefcase } from 'lucide-react';
import { siteConfig } from '@/lib/site';
import ServiceLandingPage from '@/components/ServiceLandingPage';

export const metadata: Metadata = {
  title: 'Cold Email Agency for Marketing Agencies — Fill Your Own Pipeline',
  description:
    'Done-for-you cold outreach for marketing and creative agencies. We fill your retainer pipeline while you serve clients. White-label friendly. From $1,000/mo, no setup fee.',
  keywords: [
    'cold email agency for marketing agencies',
    'lead generation for agencies',
    'agency new business outreach',
    'white label cold email',
    'agency retainer pipeline',
    'B2B outreach for agencies',
  ],
  alternates: { canonical: `${siteConfig.url}/cold-email-for-agencies` },
  openGraph: {
    type: 'website',
    title: 'Cold Email Agency for Marketing Agencies — Pro Lead Maker',
    description:
      'We fill your agency\'s retainer pipeline while you serve clients. White-label friendly outbound.',
    url: `${siteConfig.url}/cold-email-for-agencies`,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: 'Cold Email for Agencies' }],
  },
};

export default function ColdEmailForAgenciesPage() {
  return (
    <ServiceLandingPage
      slug="cold-email-for-agencies"
      title="Cold Outreach for Agencies"
      icon={Briefcase}
      hero={{
        eyebrow: 'For Marketing & Creative Agencies',
        h1: (
          <>
            The Cobbler&apos;s Children Finally Get <span className="text-gradient">New Shoes</span>
          </>
        ),
        lead: "You fill your clients' pipelines but yours runs on referrals and luck. We fix that. Done-for-you cold email and LinkedIn outreach that books qualified new-business calls for marketing, creative, and digital agencies.",
      }}
      stats={[
        { value: '100%', label: 'Focus on serving your clients' },
        { value: '2,000', label: 'Verified prospect contacts/mo' },
        { value: '90%+', label: 'Inbox placement rate' },
        { value: 'White', label: 'Label friendly on request' },
      ]}
      features={[
        {
          title: 'Positioning that cuts through',
          body: 'Agencies all sound the same. We help sharpen your niche and offer so your outreach leads with a specific, believable outcome — not "we do branding and growth."',
        },
        {
          title: 'Target the right decision-makers',
          body: 'Founders, CMOs, heads of marketing, and growth leads at companies that match your sweet spot — by industry, size, funding stage, and the signals that mean they need an agency now.',
        },
        {
          title: 'Case-study-driven sequences',
          body: 'Your best sales asset is results. We build sequences around your strongest case studies and client wins, framed for the exact vertical you\'re targeting.',
        },
        {
          title: 'Retainer-focused booking',
          body: 'We qualify for fit and budget before booking, so your new-business calls are with prospects who can actually afford a retainer — not tire-kickers.',
        },
        {
          title: 'White-label option',
          body: 'Want to resell outbound to your own clients? We can run campaigns under your brand, with reporting in your colors. Add a new revenue line without hiring an SDR team.',
        },
        {
          title: 'Run alongside referrals',
          body: 'Outbound becomes your predictable pipeline floor, so a slow referral month never turns into a revenue crisis. Forecast new business instead of hoping for it.',
        },
      ]}
      whatsIncluded={[
        '5 sending domains + 15 inboxes',
        'Full email infrastructure (SPF/DKIM/DMARC)',
        '2,000 verified decision-maker contacts/mo',
        'Niche & offer positioning support',
        'Case-study-driven sequences (A/B tested)',
        'LinkedIn outreach from your profile',
        'Budget & fit qualification before booking',
        'White-label option on request',
        'Weekly new-business pipeline reporting',
        'No setup fee — included',
      ]}
      competitorComparison={[
        { scope: 'Agency new-business DFY outbound', us: '$3,000 – $8,000/mo', ours: '$1,000/mo' },
        { scope: 'Positioning & offer help', us: 'Consulting add-on', ours: 'Included' },
        { scope: 'White-label reselling', us: 'Enterprise tier only', ours: 'Available on request' },
        { scope: 'Setup fee', us: '$1,500 – $5,000', ours: 'Included' },
        { scope: 'Contract', us: '3–6 months minimum', ours: 'Month-to-month' },
      ]}
      testimonialQuote={{
        quote:
          'They rebuilt our entire outbound stack from scratch — domains, copy, lists, sequencing. Deliverability went from 40% to 92% and reply rates tripled within the first month. A game changer for our agency.',
        name: 'Founder',
        title: 'Marketing Agency, United Kingdom',
      }}
      faqs={[
        {
          q: 'Can you run outbound under our agency brand (white-label)?',
          a: "Yes. On request we run campaigns from domains and profiles under your brand, with reporting in your colors. You can present it as your own service to clients, or simply keep your new-business engine consistent with your brand. We stay invisible.",
        },
        {
          q: "Won't cold email make our agency look spammy?",
          a: "Only if it's done badly. We send low-volume, highly-targeted, well-written outreach from lookalike domains — not mass blasts from your main domain. Done right, recipients experience it as a relevant, personal note. Your primary domain and reputation stay protected.",
        },
        {
          q: 'We already get referrals. Why add outbound?',
          a: "Referrals are great but unpredictable — you can't forecast them or turn them up when you need them. Outbound gives you a pipeline floor you control. Most agency clients use us to smooth out the feast-or-famine cycle and make revenue forecastable.",
        },
        {
          q: 'Can you help us pick a niche?',
          a: "Yes. Vague positioning is the #1 reason agency outbound fails. On the strategy call we'll pressure-test your niche and offer, and help you lead with a specific outcome for a specific buyer. Sharper positioning means higher reply rates.",
        },
        {
          q: 'How is this different from hiring an in-house SDR?',
          a: "An in-house SDR costs $4–6K/month in salary plus tools, takes weeks to ramp, and you manage them. We're a full team — copy, data, deliverability, sending, reply handling — for less, with no ramp time and no management overhead. And you can pause month-to-month.",
        },
      ]}
    />
  );
}
