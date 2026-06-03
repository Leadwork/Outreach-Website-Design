import type { Metadata } from 'next';
import { Rocket } from 'lucide-react';
import { siteConfig } from '@/lib/site';
import ServiceLandingPage from '@/components/ServiceLandingPage';

export const metadata: Metadata = {
  title: 'Cold Email Agency for B2B Founders & Startups — Pipeline Before You Hire',
  description:
    'Done-for-you cold email + LinkedIn outreach for B2B founders. Consistent pipeline before you can afford an SDR. From $1,000/mo, cancel any time.',
  keywords: [
    'cold email agency for startups',
    'cold email for B2B founders',
    'startup lead generation',
    'founder-led outbound',
    'outsourced SDR for startups',
    'B2B startup pipeline',
  ],
  alternates: { canonical: `${siteConfig.url}/cold-email-for-startups` },
  openGraph: {
    type: 'website',
    title: 'Cold Email Agency for Founders & Startups — Pro Lead Maker',
    description:
      'Consistent B2B pipeline before you can afford an SDR. Done-for-you outbound for founders.',
    url: `${siteConfig.url}/cold-email-for-startups`,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: 'Cold Email for Startups' }],
  },
};

export default function ColdEmailForStartupsPage() {
  return (
    <ServiceLandingPage
      slug="cold-email-for-startups"
      title="Cold Outreach for Founders"
      icon={Rocket}
      hero={{
        eyebrow: 'For B2B Founders & Startups',
        h1: (
          <>
            Pipeline Before You Can <span className="text-gradient">Afford An SDR</span>
          </>
        ),
        lead: "You're the founder, the closer, and the product team. You don't have time to build outbound from scratch — and it's too early to hire a sales team. We become your outbound engine so you can take calls, not build campaigns.",
      }}
      stats={[
        { value: '$1K', label: 'Per month — less than half an SDR' },
        { value: '0', label: 'Hours of your time after setup' },
        { value: '3 wks', label: 'From kickoff to live sending' },
        { value: '30-day', label: 'Cancellation — no lock-in' },
      ]}
      features={[
        {
          title: 'Founder-led, founder-friendly',
          body: 'We work directly with founders every day. We get that you context-switch constantly — so we keep your involvement to a 45-min ICP call, copy approval, and a weekly report you can skim in 2 minutes.',
        },
        {
          title: 'Cheaper than a single hire',
          body: 'An in-house SDR is $4–6K/month plus tools, plus ramp time, plus management. We are a full team — copy, data, sending, replies — for $1,000/month, live in 3 weeks, no management.',
        },
        {
          title: 'Outreach from your profile',
          body: 'Early-stage buyers buy from founders. We run LinkedIn outreach from your personal profile and email from your brand, so prospects feel like they\'re talking to the person who built the thing.',
        },
        {
          title: 'Validate your messaging fast',
          body: 'Not sure which positioning lands? Outbound is the fastest market feedback loop. We A/B test angles and report what actually gets replies — useful data for your whole go-to-market.',
        },
        {
          title: 'Only qualified replies reach you',
          body: 'We triage every response. You only see prospects who match your ICP and want to talk. No inbox noise, no chasing tire-kickers — just calls worth your limited time.',
        },
        {
          title: 'Scale when you raise',
          body: 'Start lean to prove the channel. When you raise or grow, we scale volume and add channels — and eventually hand a working playbook to your first in-house hire.',
        },
      ]}
      whatsIncluded={[
        '5 sending domains + 15 inboxes',
        'Full email infrastructure (SPF/DKIM/DMARC)',
        '2,000 verified ICP contacts/mo',
        'Founder-voice email + LinkedIn sequences',
        'Messaging A/B testing & market feedback',
        'Reply triage — only qualified leads reach you',
        'Weekly 2-minute pipeline report',
        'Direct founder access (MD. Al Amin)',
        '30-day cancellation, no lock-in',
        'No setup fee — included',
      ]}
      competitorComparison={[
        { scope: 'Founder-friendly DFY outbound', us: '$3,000 – $8,000/mo', ours: '$1,000/mo' },
        { scope: 'In-house SDR (salary + tools + ramp)', us: '$5,000 – $7,000/mo', ours: '$1,000/mo' },
        { scope: 'Time to live', us: '8–12 weeks (hiring)', ours: '3 weeks' },
        { scope: 'Setup fee', us: '$1,500 – $5,000', ours: 'Included' },
        { scope: 'Commitment', us: 'Salaried hire / 3–6mo contract', ours: 'Month-to-month' },
      ]}
      testimonialQuote={{
        quote:
          "I expected a typical agency — they delivered like an in-house team. Strategy calls weekly, reports weekly, and qualified meetings hitting my calendar every single day. Worth every dollar.",
        name: 'Head of Growth',
        title: 'Consulting Firm, Germany',
      }}
      faqs={[
        {
          q: "It's just me right now. Is it too early for outbound?",
          a: "Not if you have a product people pay for and an average deal size of $5K+ annually. Outbound is often the fastest way for a solo founder to get consistent pipeline without hiring. If your deal size is very low or you're pre-product, we'll tell you honestly that other channels come first.",
        },
        {
          q: 'How much of my time will this take?',
          a: 'A 45-minute ICP call to start, ~30 minutes to approve copy, and a 2-minute weekly report. After setup, your only real job is taking the qualified calls we book. We handle everything else.',
        },
        {
          q: 'Why not just hire an SDR?',
          a: "An SDR costs $4–6K/month, takes 8–12 weeks to hire and ramp, needs tools, and needs managing — a lot for an early-stage founder. We're a full team for $1,000/month, live in 3 weeks, with no management overhead. When you're ready to hire, we hand over a proven playbook.",
        },
        {
          q: 'Can outreach come from my personal profile?',
          a: 'Yes — and for early-stage we recommend it. Buyers respond to founders. We run LinkedIn from your personal profile and email from your brand, coordinated as one sequence, so it feels personal and credible.',
        },
        {
          q: 'What if it doesn\'t work for us?',
          a: "Every plan is month-to-month with 30 days' notice — no lock-in. If outbound isn't producing, you cancel. But we'll also be honest before you start: on the strategy call we tell founders when outbound isn't the right channel yet, rather than taking money we can't turn into pipeline.",
        },
      ]}
    />
  );
}
