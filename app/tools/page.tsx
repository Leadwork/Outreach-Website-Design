import type { Metadata } from 'next';
import { ExternalLink } from 'lucide-react';
import { siteConfig } from '@/lib/site';
import CTAButton from '@/components/CTAButton';
import FinalCTA from '@/components/FinalCTA';
import Reveal from '@/components/Reveal';
import SubjectLineTester from '@/components/SubjectLineTester';
import ToolLogo from '@/components/ToolLogo';

/** Resolve the logo domain: explicit override, else derived from the URL host. */
function getLogoDomain(t: Tool): string {
  if (t.logoDomain) return t.logoDomain;
  try {
    return new URL(t.url).hostname.replace(/^www\./, '');
  } catch {
    return '';
  }
}

export const metadata: Metadata = {
  title: 'The Best Cold Outreach Tools — Curated By Pro Lead Maker',
  description:
    'A hand-picked stack of the email finders, verifiers, warmup tools, sending platforms, CRMs and enrichment services we actually use to run outbound campaigns.',
  alternates: { canonical: `${siteConfig.url}/tools` },
  openGraph: {
    title: 'Tools — Pro Lead Maker',
    description: 'Curated cold outreach stack with categories, use cases and links.',
    url: `${siteConfig.url}/tools`,
  },
};

type Tool = {
  name: string;
  description: string;
  useCase: string;
  url: string;
  affiliate?: boolean;
  /** Override the domain used for logo lookup (e.g. when url is a referral link). */
  logoDomain?: string;
};

const groups: { category: string; tools: Tool[] }[] = [
  {
    category: 'Sending Platforms',
    tools: [
      { name: 'Instantly', description: 'High-volume cold email sender with built-in warmup and unibox.', useCase: 'Best for agencies running multi-domain sends.', url: 'https://refer.instantly.ai/pro-lead-maker', affiliate: true, logoDomain: 'instantly.ai' },
      { name: 'Smartlead', description: 'AI-powered cold email and reply handling at scale.', useCase: 'Great when you need flexible API and multi-channel.', url: 'https://smartlead.ai' },
      { name: 'Apollo', description: 'Database + sending + sequencing in one stack.', useCase: 'Ideal for early-stage teams building lists fast.', url: 'https://apollo.io' },
      { name: 'Lemlist', description: 'Personalised cold email with images and videos.', useCase: 'Best when hyper-personalisation matters most.', url: 'https://lemlist.com' },
    ],
  },
  {
    category: 'Email Finders',
    tools: [
      { name: 'Apollo', description: 'B2B contact database with verified emails and direct dials.', useCase: 'Strong default for US/EU B2B sourcing.', url: 'https://apollo.io' },
      { name: 'Hunter', description: 'Domain-based email lookup with confidence scoring.', useCase: 'Great for finding emails by company domain.', url: 'https://hunter.io' },
      { name: 'Snov.io', description: 'Email finder, verifier and drip sender combo.', useCase: 'Useful for budget-conscious lean teams.', url: 'https://snov.io' },
      { name: 'RocketReach', description: 'Multi-source professional contact database.', useCase: 'When you need direct dials and personal emails.', url: 'https://rocketreach.co' },
    ],
  },
  {
    category: 'Email Verification',
    tools: [
      { name: 'MillionVerifier', description: 'Bulk email verification with 99% accuracy.', useCase: 'Go-to for cleaning large list dumps.', url: 'https://millionverifier.com' },
      { name: 'NeverBounce', description: 'Real-time and bulk email verification.', useCase: 'Best for API-integrated verification workflows.', url: 'https://neverbounce.com' },
      { name: 'ZeroBounce', description: 'Verification + scoring + catch-all detection.', useCase: 'Solid all-rounder with strong catch-all logic.', url: 'https://zerobounce.net' },
      { name: 'Bouncer', description: 'GDPR-friendly email verification with team workflows.', useCase: 'Great for EU clients who care about compliance.', url: 'https://usebouncer.com' },
    ],
  },
  {
    category: 'Email Warmup',
    tools: [
      { name: 'Mailreach', description: 'Reputation warmup with peer-to-peer network.', useCase: 'Stable warmup for new domains.', url: 'https://mailreach.co' },
      { name: 'Warmup Inbox', description: 'Automated inbox warming with reporting.', useCase: 'Great for monitoring sender reputation.', url: 'https://warmupinbox.com' },
      { name: 'Smartlead Warmup', description: 'Built-in warmup tied to sending campaigns.', useCase: 'Useful if Smartlead is your sender.', url: 'https://smartlead.ai' },
      { name: 'Instantly Warmup', description: 'Free warmup included with Instantly accounts.', useCase: 'Default warmup for Instantly users.', url: 'https://refer.instantly.ai/pro-lead-maker', affiliate: true, logoDomain: 'instantly.ai' },
    ],
  },
  {
    category: 'CRMs',
    tools: [
      { name: 'HubSpot', description: 'Free tier CRM with full sales pipeline.', useCase: 'Best free CRM for early-stage teams.', url: 'https://hubspot.com' },
      { name: 'Pipedrive', description: 'Sales-focused CRM with strong pipeline view.', useCase: 'Great for outbound sales teams.', url: 'https://pipedrive.com' },
      { name: 'Close', description: 'Inside-sales CRM with built-in calling.', useCase: 'Ideal for SDR-driven sales motions.', url: 'https://close.com' },
      { name: 'Salesforce', description: 'Enterprise-grade CRM with deep customisation.', useCase: 'For larger orgs with complex pipelines.', url: 'https://salesforce.com' },
    ],
  },
  {
    category: 'Intent & Signals',
    tools: [
      { name: 'Clay', description: 'Programmable data enrichment and outbound automation.', useCase: 'Powerful for building custom signal workflows.', url: 'https://clay.com' },
      { name: 'Common Room', description: 'Signal-based selling across community and product data.', useCase: 'Strong for PLG and community-led teams.', url: 'https://commonroom.io' },
      { name: 'Trigify', description: 'Buying signal aggregator for B2B sellers.', useCase: 'Surfaces signals like job changes and tech adoption.', url: 'https://trigify.io' },
      { name: 'LinkedIn Sales Navigator', description: 'Advanced LinkedIn search and filtering.', useCase: 'Foundation for LinkedIn-based prospecting.', url: 'https://business.linkedin.com/sales-solutions/sales-navigator', logoDomain: 'linkedin.com' },
    ],
  },
];

export default function ToolsPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-white pt-28 lg:pt-32">
        <div className="gradient-mesh" aria-hidden />
        <div className="container-px relative z-10 pb-16 text-center">
          <span className="eyebrow">Tools</span>
          <h1 className="h-display mt-4">
            The <span className="text-gradient">Cold Outreach Stack</span> We Actually Use
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600">
            A curated, opinionated list of the tools we plug into client outbound systems every week —
            sending platforms, finders, verifiers, warmup, CRMs and signal layers.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <CTAButton>Have Us Build Your Stack</CTAButton>
            <CTAButton href="#subject-line-tester" variant="secondary" external={false} withArrow={false}>
              Try Our Free Mini-Tool
            </CTAButton>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-xs text-neutral-400">
            Some links on this page are referral links — if you sign up through them we may earn a
            commission at no extra cost to you. We only recommend tools we actually use with clients.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-px space-y-16">
          {groups.map((g) => (
            <div key={g.category}>
              <div className="flex items-end justify-between">
                <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
                  {g.category}
                </h2>
                <p className="text-sm text-neutral-500">{g.tools.length} picks</p>
              </div>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {g.tools.map((t, i) => (
                  <Reveal key={t.name} delay={i * 0.04}>
                    <a
                      href={t.url}
                      target="_blank"
                      rel={
                        t.affiliate
                          ? 'sponsored noopener noreferrer'
                          : 'nofollow noopener noreferrer'
                      }
                      className="card flex h-full flex-col"
                    >
                      <div className="flex items-center justify-between">
                        <ToolLogo domain={getLogoDomain(t)} name={t.name} />
                        <ExternalLink aria-hidden size={14} className="text-neutral-400" />
                      </div>
                      <div className="mt-4 flex items-center gap-2">
                        <h3 className="text-lg font-bold text-neutral-900">{t.name}</h3>
                        {t.affiliate && (
                          <span className="rounded-full bg-brand-purple/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand-purple">
                            Referral
                          </span>
                        )}
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-neutral-600">{t.description}</p>
                      <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-brand-purple">
                        {t.useCase}
                      </p>
                    </a>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="subject-line-tester" className="section scroll-mt-24 bg-neutral-50">
        <div className="container-px">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Free mini-tool</span>
            <h2 className="h-section mt-4">
              Cold Email <span className="text-gradient">Subject Line Tester</span>
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Paste your subject line below — we'll score it instantly on length, spam triggers,
              personalisation and urgency. Pure client-side, no signup, no email gate.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl">
            <SubjectLineTester />
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
