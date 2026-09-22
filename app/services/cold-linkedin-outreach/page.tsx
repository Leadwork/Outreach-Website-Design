import { withSocialMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import { Linkedin } from 'lucide-react';
import { siteConfig } from '@/lib/site';
import ServiceLandingPage from '@/components/ServiceLandingPage';

export const metadata: Metadata = withSocialMetadata({
  title: 'Cold LinkedIn Outreach Services — From Your Profile',
  description:
    'Done-for-you LinkedIn outreach from your profile. Profile optimisation, Sales Nav, multi-touch sequences, voice notes, reply handling. Account risks and workflow reviewed before launch.',
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
});

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
        { value: '$900', label: 'LinkedIn Outreach / month' },
        { value: 'Weekly', label: 'Reporting on replies and activity' },
        { value: 'Agreed', label: 'Profile count and activity scope' },
        { value: 'Reviewed', label: 'Account risks before launch' },
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
          title: 'Workflow and account-risk review',
          body: "We review tools, permissions, and account risks before launch. LinkedIn prohibits unauthorized third-party automation, including activity that mimics human behavior. No tool or daily limit eliminates restriction risk.",
        },
        {
          title: 'Multi-touch sequences',
          body: 'Connection request → personalised message → 3 follow-ups spaced over 14 days. Each step references prior touches and adds new value — no robotic "just following up".',
        },
        {
          title: 'Voice notes on high-value targets',
          body: "For selected prospects, we help script a short, relevant voice note for you to record. We compare responses with text messages rather than assuming a fixed performance lift.",
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
        'Outreach workflow agreed before launch',
        'Activity plan with unique prospects and follow-ups reported separately',
        'Multi-touch sequence (connection + 4 messages)',
        'Voice note option for high-value targets',
        'A/B tested messaging',
        'Reply triage & meeting booking',
        'Positive replies forwarded to your inbox',
        'Weekly performance reporting',
        'Monthly strategy call',
      ]}
      competitorComparison={[
        { scope: 'LinkedIn DFY outreach', us: '$1,500 – $5,000/mo', ours: '$900/mo' },
        { scope: 'Profile rewrite', us: '$500 – $1,500 add-on', ours: 'Included' },
        { scope: 'Sales Navigator seat', us: 'Client pays separately', ours: 'License quoted separately if needed' },
        { scope: 'Voice note option', us: 'Premium add-on', ours: 'Included' },
        { scope: 'Contract length', us: '3–6 months minimum', ours: 'Month-to-month' },
      ]}
      faqs={[
        {
          q: 'Is LinkedIn automation safe? Will my profile get banned?',
          a: "No LinkedIn automation tool can promise freedom from restrictions. LinkedIn prohibits unauthorized third-party tools that automate its website. We explain the proposed workflow and account risks before any activity begins; conservative limits do not make an unauthorized tool compliant.",
        },
        {
          q: "What's the difference between Sales Navigator and Premium?",
          a: "LinkedIn offers several Premium products. Sales Navigator is designed for sales prospecting, with lead and account search features. We review whether you need it; its license is quoted separately if required.",
        },
        {
          q: 'Do you send messages from my profile or a fake one?',
          a: 'Always your profile. The whole point of LinkedIn outreach is that messages come from a real person — yours. We coordinate the tone, get sequences approved by you, and send during your timezone hours so it feels natural.',
        },
        {
          q: 'How long until I see results?',
          a: "We begin with profile review, targeting, and your approval of messages. Activity starts after the workflow and account readiness are reviewed. Replies and meetings depend on the audience and offer, so neither a result count nor a timeline is guaranteed.",
        },
        {
          q: 'Can I do LinkedIn and Email outreach together?',
          a: "Yes. Done For You combines email and LinkedIn within one agreed scope. We coordinate messages and stop follow-ups when someone replies or opts out. Results vary, and adding a channel does not guarantee a reply-rate increase.",
        },
        {
          q: 'What about voice notes — do I record them?',
          a: "You record the voice notes. We help with a script and select relevant prospects, then agree how the notes will be delivered. Personalize the recording where appropriate; a response lift is not guaranteed.",
        },
        {
          q: 'Do you guarantee a number of meetings?',
          a: 'No. Meeting volume depends on your offer, deal size, market timing, and ICP fit — factors we cannot honestly control. What we guarantee: profile optimisation, operations within the agreed scope, transparent reporting, and quality control on every reply we forward.',
        },
        {
          q: 'What if a prospect responds negatively?',
          a: "We handle it for you. Negative replies are politely closed out (no argument, no spam follow-up). Off-ICP replies are logged and excluded from qualified handoffs. Only positive replies and real meeting requests hit your inbox — so you don't waste time on noise.",
        },
      ]}
    />
  );
}
