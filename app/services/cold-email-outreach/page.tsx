import { withSocialMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import { Mail } from 'lucide-react';
import { siteConfig } from '@/lib/site';
import ServiceLandingPage from '@/components/ServiceLandingPage';

export const metadata: Metadata = withSocialMetadata({
  title: 'Cold Email Outreach Services — Done For You',
  description:
    'Done-for-you cold email outreach for B2B teams. Infrastructure, copy, sending, and reply handling in one. Placement monitoring, with clear monthly terms.',
  keywords: [
    'cold email outreach',
    'cold email service',
    'B2B cold email',
    'done for you cold email',
    'cold email agency',
    'cold email infrastructure',
    'cold email sequences',
  ],
  alternates: { canonical: `${siteConfig.url}/services/cold-email-outreach` },
  openGraph: {
    type: 'website',
    title: 'Cold Email Outreach — Pro Lead Maker',
    description:
      'End-to-end cold email outreach for B2B teams. Infrastructure, copy, sending, replies — done for you.',
    url: `${siteConfig.url}/services/cold-email-outreach`,
    images: [
      { url: siteConfig.ogImage, width: 1200, height: 630, alt: 'Cold Email Outreach Services' },
    ],
  },
});

export default function ColdEmailOutreachPage() {
  return (
    <ServiceLandingPage
      slug="cold-email-outreach"
      title="Cold Email Outreach"
      icon={Mail}
      hero={{
        eyebrow: 'Cold Email Outreach',
        h1: (
          <>
            Cold Email Outreach That <span className="text-gradient">Lands In The Inbox</span>
          </>
        ),
        lead: 'End-to-end cold email for B2B founders, SaaS, and agencies. We buy and set up the infrastructure, write the sequences, manage daily sending, and forward every positive reply to your inbox.',
      }}
      stats={[
        { value: 'Monitored', label: 'Delivery signals and inbox placement' },
        { value: 'Verified', label: 'Emails checked; bounces replaced' },
        { value: '5', label: 'Domains per campaign (lookalikes)' },
        { value: '15', label: 'Inboxes warmed & ready' },
      ]}
      features={[
        {
          title: 'Lookalike sending infrastructure',
          body: '5 secondary domains (variants of your brand), 15 mailboxes, full SPF/DKIM/DMARC, custom tracking domain — to reduce direct exposure of your primary domain but does not eliminate risk.',
        },
        {
          title: 'Structured warmup',
          body: "We review authentication, mailbox readiness, and provider feedback before launch. Volume ramps gradually; preparation can take longer when accounts or delivery signals need attention.",
        },
        {
          title: 'Signal-based copywriting',
          body: 'Senior copywriters write 4+ sequence variations with your input. Every opener is anchored in a real buying trigger — not a generic intro.',
        },
        {
          title: 'Multi-domain rotation',
          body: "Sending is distributed across the supplied accounts within the agreed allowance. We monitor provider feedback and pause or reduce activity when issues appear.",
        },
        {
          title: 'Reply handling that books meetings',
          body: 'Trained reply handlers triage every inbound: positive replies forwarded to you, objections handled, off-ICP politely passed on, no-shows rescheduled.',
        },
        {
          title: 'Weekly performance reporting',
          body: "Weekly reporting separates contacts reached, sends, delivery errors, positive replies, and meetings. Open tracking, where used, is an imperfect diagnostic rather than a measure of human interest.",
        },
      ]}
      whatsIncluded={[
        '5 sending domains (lookalikes)',
        '15 inboxes (Google Workspace or M365)',
        'SPF / DKIM / DMARC configured',
        'Custom tracking domain',
        'Readiness checks and gradual sending ramp',
        'Sending tool (Lemlist / Instantly / Smartlead / Plusvibe)',
        '2,000 fresh verified contacts/month',
        'Email verification (under 2% bounce)',
        '4+ A/B tested sequence variations',
        'Reply triage & meeting forwarding',
        'Weekly performance reports',
        'No setup fee — included',
      ]}
      competitorComparison={[
        { scope: 'Full DFY cold email (infra + copy + sending)', us: '$3,000 – $8,000/mo', ours: '$1,700/mo' },
        { scope: 'One-time setup fee', us: '$1,500 – $5,000', ours: 'Included' },
        { scope: 'Domains & mailboxes provisioned', us: '2–3 domains, 6–10 inboxes', ours: '5 domains, 15 inboxes' },
        { scope: 'Verified contacts per month', us: 'Add-on, $300+', ours: '2,000 included' },
        { scope: 'Long-term contract', us: '3–6 months minimum', ours: 'Month-to-month' },
      ]}
      faqs={[
        {
          q: 'How is this different from buying Instantly or Smartlead myself?',
          a: "Sending tools execute campaigns. We also provide the listed infrastructure, contact data, approved copy, daily operations, reply handling, and reporting. See the package details for scope and allowances.",
        },
        {
          q: 'Will my main domain be safe?',
          a: "Separate sending domains reduce direct exposure of your primary domain. They do not eliminate reputation, deliverability, or brand risk. We monitor delivery signals and pause or adjust sending when problems appear.",
        },
        {
          q: 'How long until campaigns are live?',
          a: "We prepare domains, authentication, targeting, and approved copy first. The initial launch is planned after readiness checks, with a gradual sending ramp. New accounts or delivery problems can extend setup; meeting timing is not guaranteed.",
        },
        {
          q: 'Do you guarantee a number of meetings?',
          a: 'No. Meeting volume depends on factors outside our control (offer, deal size, market, ICP fit). What we guarantee: the system, daily operations, transparent reporting, and quality control on every reply we forward.',
        },
        {
          q: 'What sending tool do you use?',
          a: 'We use whatever is best for your campaign — Lemlist, Instantly, Smartlead, Plusvibe, or another. We have accounts on all of them. If you already use one, we can plug into your existing account; otherwise we cover the tool ourselves.',
        },
        {
          q: 'Can I see the emails before they go out?',
          a: 'Yes. Every sequence variation is approved by you before launch. After launch, you have read access to every inbox so you can audit anything at any time. We are fully transparent.',
        },
        {
          q: 'What happens if deliverability drops?',
          a: 'Deliverability is monitored daily with multiple tools (Glock Apps, MailReach, manual inbox tests). If placement drops below 80% on any domain we automatically pause sends, diagnose the issue (often a copy or list quality flag), fix it, and resume — usually within 48 hours.',
        },
        {
          q: 'Do I own the domains and infrastructure?',
          a: 'Yes — completely. Domains are registered in your company name, mailboxes belong to you, all data lives in your accounts. If we ever part ways, you keep everything operational and we hand over passwords.',
        },
      ]}
    />
  );
}
