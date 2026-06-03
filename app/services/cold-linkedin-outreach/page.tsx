import type { Metadata } from 'next';
import { Linkedin } from 'lucide-react';
import { siteConfig } from '@/lib/site';
import ServiceLandingPage from '@/components/ServiceLandingPage';

export const metadata: Metadata = {
  title: 'Cold LinkedIn Outreach Services — From Your Profile',
  description:
    'Done-for-you LinkedIn outreach from your profile. Profile optimisation, Sales Nav strategy, multi-touch sequences with voice notes, full reply handling. ToS-compliant.',
  keywords: [
    'cold LinkedIn outreach',
    'LinkedIn lead generation',
    'LinkedIn outreach agency',
    'done for you LinkedIn',
    'LinkedIn Sales Navigator service',
    'LinkedIn automation agency',
    'B2B LinkedIn outreach',
  ],
  alternates: { canonical: `${siteConfig.url}/services/cold-linkedin-outreach` },
  openGraph: {
    type: 'website',
    title: 'Cold LinkedIn Outreach — Pro Lead Maker',
    description:
      'A-Z LinkedIn outreach run from your profile. Profile + Sales Nav + multi-touch sequences + reply management.',
    url: `${siteConfig.url}/services/cold-linkedin-outreach`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Cold LinkedIn Outreach Services',
      },
    ],
  },
};

export default function ColdLinkedInOutreachPage() {
  return (
    <ServiceLandingPage
      slug="cold-linkedin-outreach"
      title="Cold LinkedIn Outreach"
      icon={Linkedin}
      hero={{
        eyebrow: 'Cold LinkedIn Outreach',
        h1: (
          <>
            LinkedIn Outreach That <span className="text-gradient">Books Conversations</span>
          </>
        ),
        lead: 'A predictable LinkedIn pipeline run from your own profile. We optimise your profile, build the target lists, write the sequences, send the messages, and forward every positive reply to your inbox.',
      }}
      stats={[
        { value: '~1,800', label: 'LinkedIn touches/month' },
        { value: '20–35%', label: 'Connection acceptance rate' },
        { value: '5–12%', label: 'Reply rate on connected prospects' },
        { value: '100%', label: 'LinkedIn ToS-compliant' },
      ]}
      features={[
        {
          title: 'Profile audit & rewrite',
          body: 'Headline, banner, About section, featured posts — optimised so every prospect who clicks your profile sees credibility and a clear value proposition.',
        },
        {
          title: 'Sales Navigator strategy',
          body: 'Saved searches built around your exact ICP — title, company size, region, hiring signals, tech stack, funding events. Refreshed every week as the market shifts.',
        },
        {
          title: 'ToS-compliant automation',
          body: 'We run via Closely.io / HeyReach with conservative daily limits (under LinkedIn safety thresholds) — zero account ban risk, residential IPs, smooth ramp.',
        },
        {
          title: 'Multi-touch sequences',
          body: 'Connection request → personalised message → 3 follow-ups spaced over 14 days. Each step references prior touches and adds new value — no robotic "just following up".',
        },
        {
          title: 'Voice notes on high-value targets',
          body: 'For top-tier prospects, we record short voice notes from your profile — engagement is 3–5× higher than text alone. We share a script and tone guide so it feels like you.',
        },
        {
          title: 'Email integration',
          body: 'Run LinkedIn solo, or layer it with email outreach for orchestrated multi-channel sequences. Pair with our Cold Email Outreach service for full multichannel.',
        },
      ]}
      whatsIncluded={[
        'LinkedIn profile audit & optimisation',
        'Headline + banner + About + featured rewrite',
        'Sales Navigator setup + saved searches',
        'Closely.io / HeyReach automation',
        '1,500–2,000 targeted LinkedIn contacts/month',
        'Multi-touch sequence (connection + 4 messages)',
        'Voice note option for high-value targets',
        'A/B tested messaging',
        'Reply triage & meeting booking',
        'Positive replies forwarded to your inbox',
        'Weekly performance reporting',
        'Monthly strategy call',
      ]}
      competitorComparison={[
        { scope: 'LinkedIn DFY outreach', us: '$1,500 – $5,000/mo', ours: '$497/mo' },
        { scope: 'Profile rewrite', us: '$500 – $1,500 add-on', ours: 'Included' },
        { scope: 'Sales Navigator seat', us: 'Client pays separately', ours: 'Configured for you' },
        { scope: 'Voice note option', us: 'Premium add-on', ours: 'Included' },
        { scope: 'Contract length', us: '3–6 months minimum', ours: 'Month-to-month' },
      ]}
      testimonialQuote={{
        quote:
          'I expected a typical agency — they delivered like an in-house team. Strategy calls weekly, reports weekly, and qualified meetings hitting my calendar every single day.',
        name: 'Head of Growth',
        title: 'Consulting Firm, Germany',
      }}
      faqs={[
        {
          q: 'Is LinkedIn automation safe? Will my profile get banned?',
          a: "Yes — when done right. We use Closely.io and HeyReach (both run via residential IPs, mimic human behaviour, and stay under LinkedIn's daily limits). We never use scrape tools, gray-zone APIs, or bot extensions. In 5+ years of running LinkedIn outreach for clients, we have not had a single permanent ban.",
        },
        {
          q: "What's the difference between Sales Navigator and Premium?",
          a: 'Premium is for individual job seekers and recruiters — it has limited search filters. Sales Navigator has advanced filters (job title, seniority, company size, technology, hiring signals, account lists) that are essential for B2B prospecting. We strongly recommend Sales Navigator for any serious LinkedIn outreach.',
        },
        {
          q: 'Do you send messages from my profile or a fake one?',
          a: 'Always your profile. The whole point of LinkedIn outreach is that messages come from a real person — yours. We coordinate the tone, get sequences approved by you, and send during your timezone hours so it feels natural.',
        },
        {
          q: 'How long until I see results?',
          a: "Week 1: profile optimised, Sales Nav configured. Week 2: warmup sends (low daily volume), sequence approval. Week 3+: full sending volume. Replies typically start within the first 2 weeks of full sending — but we don't promise a specific number, that depends on your offer and ICP.",
        },
        {
          q: 'Can I do LinkedIn and Email outreach together?',
          a: "Absolutely — and we recommend it. Pair this with our Cold Email Outreach service for orchestrated multichannel sequences. A prospect who sees your message on LinkedIn and your email the next day responds 2–3× more often than from a single channel. Combined cost is still less than most agencies' single-channel pricing.",
        },
        {
          q: 'What about voice notes — do I record them?',
          a: 'You record them once per template (usually 10–15 second snippets). We script the message, you record on your phone, send us the audio file. We then send those voice notes via LinkedIn to your highest-value targets. Reply rates on voice notes are typically 3–5× text messages.',
        },
        {
          q: 'Do you guarantee a number of meetings?',
          a: 'No. Meeting volume depends on your offer, deal size, market timing, and ICP fit — factors we cannot honestly control. What we guarantee: profile optimisation, daily operations within LinkedIn ToS, transparent reporting, and quality control on every reply we forward.',
        },
        {
          q: 'What if a prospect responds negatively?',
          a: "We handle it for you. Negative replies are politely closed out (no argument, no spam follow-up). Off-ICP replies are passed back to LinkedIn. Only positive replies and real meeting requests hit your inbox — so you don't waste time on noise.",
        },
      ]}
    />
  );
}
