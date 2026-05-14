import type { Metadata } from 'next';
import { Linkedin, User, BadgeCheck, Award, Sparkles } from 'lucide-react';
import { siteConfig } from '@/lib/site';
import CTAButton from '@/components/CTAButton';
import FinalCTA from '@/components/FinalCTA';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'About — The Team Building Outbound Machines',
  description:
    'Meet Pro Lead Maker — founded by MD. Al Amin and powered by an 8-person team obsessed with cold outreach, deliverability and pipeline outcomes for B2B teams.',
  alternates: { canonical: `${siteConfig.url}/about` },
  openGraph: {
    title: 'About Pro Lead Maker',
    description: 'The team behind the outbound machines.',
    url: `${siteConfig.url}/about`,
  },
};

const values = [
  {
    title: 'Results, not vanity',
    body: 'We sell pipeline, not open rates. Every campaign we run is measured against booked meetings and revenue.',
  },
  {
    title: 'Speed of execution',
    body: 'Most agencies take 8 weeks to launch. We do it in 3-5. Speed compounds — pipeline today beats pipeline next quarter.',
  },
  {
    title: 'Total transparency',
    body: 'Weekly reports, open dashboards, full access to inboxes and sending tools. Nothing hidden, no black-box reporting.',
  },
  {
    title: 'Trust over transactions',
    body: 'Most of our clients stay 12+ months. That only happens when you stop selling and start partnering.',
  },
];

const team = [
  { role: 'Founder & Outbound Strategist', bio: 'Sets ICP, runs strategy calls, owns client outcomes.' },
  { role: 'Senior Copywriter', bio: 'Writes signal-based cold email and LinkedIn copy across campaigns.' },
  { role: 'Deliverability Lead', bio: 'Owns infrastructure, warmup and inbox placement above 90%.' },
  { role: 'Data & List Builder', bio: 'Builds and enriches verified ICP lists from multiple sources.' },
  { role: 'Reply Handler #1', bio: 'Qualifies inbound replies and books meetings on client calendars.' },
  { role: 'Reply Handler #2', bio: 'Coverage across US and EU timezones for fast turnaround.' },
  { role: 'LinkedIn Specialist', bio: 'Runs multi-touch LinkedIn campaigns and profile optimisations.' },
  { role: 'Operations & QA', bio: 'Owns reporting, weekly QA and project delivery for every client.' },
];

const milestones = [
  { year: '2020', title: 'Pro Lead Maker founded', body: 'MD. Al Amin starts solo on Fiverr and Upwork.' },
  { year: '2021', title: 'First international clients', body: 'Top Rated on Upwork; first 6-figure agency client lands.' },
  { year: '2022', title: 'Team of 4 + first US retainer', body: 'Move from gigs to full-service retainers across SaaS and agencies.' },
  { year: '2023', title: 'Fiverr Top Rated Plus', body: '500+ five-star outreach orders delivered worldwide.' },
  { year: '2024', title: 'Scaled to 8-person team', body: 'Dedicated deliverability, copy, list and reply roles.' },
  { year: '2025', title: 'Full outbound systems launched', body: 'Productised infrastructure + strategy + sending under one roof.' },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-white pt-28 lg:pt-32">
        <div className="gradient-mesh" aria-hidden />
        <div className="container-px relative z-10 pb-16">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">About us</span>
            <h1 className="h-display mt-4">
              We're An <span className="text-gradient">8-Person Outbound Team</span> Behind The Pipeline
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600">
              Pro Lead Maker exists for one reason: B2B teams need predictable pipeline, and most cold
              outreach agencies don't actually understand outbound. We do. It's all we do.
            </p>
            <div className="mt-8 flex justify-center">
              <CTAButton>Book a Call With The Team</CTAButton>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-px">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-3xl border border-brand-purple/20 bg-brand-gradient-soft p-1">
                <div className="flex h-full w-full flex-col items-center justify-center rounded-3xl bg-white text-center">
                  <span aria-hidden className="flex h-32 w-32 items-center justify-center rounded-full bg-brand-gradient text-white">
                    <User aria-hidden size={64} strokeWidth={1.5} />
                  </span>
                  <p className="mt-4 text-sm font-semibold text-neutral-500">Photo placeholder</p>
                  <p className="text-xs text-neutral-400">Replace with founder image</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <span className="eyebrow">Founder</span>
              <h2 className="h-section mt-4">
                Meet <span className="text-gradient">MD. Al Amin</span>
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-neutral-700">
                MD. Al Amin started Pro Lead Maker in 2020 with one belief: most B2B outbound is broken
                because most agencies treat it as a service to sell — not a system to operate.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-neutral-700">
                Five years and 500+ clients later, he's still hands-on — sitting in on strategy calls,
                reviewing copy, auditing deliverability, and obsessing over the one metric that matters:
                qualified meetings hitting client calendars.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href={siteConfig.social.linkedinPersonal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-2.5 text-sm font-semibold text-neutral-700 transition-colors hover:border-brand-purple hover:text-brand-purple"
                >
                  <Linkedin aria-hidden size={16} />
                  Connect on LinkedIn
                </a>
                <CTAButton>Book a Strategy Call</CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-neutral-50">
        <div className="container-px">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Our values</span>
            <h2 className="h-section mt-4">
              What We <span className="text-gradient">Stand For</span>
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              The four principles every campaign, hire and decision at Pro Lead Maker is filtered through.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-neutral-200 bg-white p-6">
                  <span aria-hidden className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gradient text-white">
                    <Sparkles aria-hidden size={18} />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-neutral-900">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-px">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">The team</span>
            <h2 className="h-section mt-4">
              An <span className="text-gradient">8-Person Team</span> Built For Outbound
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Specialists, not generalists. Every role exists because outbound is too complex to be done
              well by a single person juggling everything.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <Reveal key={`${m.role}-${i}`} delay={i * 0.03}>
                <div className="h-full rounded-2xl border border-neutral-200 bg-white p-6 text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand-gradient text-white">
                    <User aria-hidden size={36} strokeWidth={1.5} />
                  </div>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-brand-purple">
                    Team member {i + 1}
                  </p>
                  <h3 className="mt-1 text-base font-bold text-neutral-900">{m.role}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{m.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-neutral-500">
            Avatar placeholders — replace with team photos when ready.
          </p>
        </div>
      </section>

      <section className="section bg-neutral-50">
        <div className="container-px">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Our story</span>
            <h2 className="h-section mt-4">
              From <span className="text-gradient">Freelancer To Agency</span>
            </h2>
          </div>
          <ol className="relative mx-auto mt-12 max-w-3xl space-y-8 border-l-2 border-brand-purple/20 pl-8">
            {milestones.map((m, i) => (
              <Reveal as="li" key={m.year} delay={i * 0.05}>
                <span
                  aria-hidden
                  className="absolute -left-[11px] flex h-5 w-5 items-center justify-center rounded-full bg-brand-gradient"
                />
                <p className="text-sm font-bold text-brand-purple">{m.year}</p>
                <p className="mt-1 text-lg font-bold text-neutral-900">{m.title}</p>
                <p className="mt-1 text-neutral-600">{m.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container-px">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Recognition</span>
            <h2 className="h-section mt-4">
              Awards & <span className="text-gradient">Badges</span>
            </h2>
          </div>
          <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: 'Fiverr Top Rated Plus', icon: BadgeCheck },
              { label: 'Upwork Top Rated', icon: BadgeCheck },
              { label: '100% Job Success', icon: Award },
              { label: '5.0 / 5.0 Average', icon: Award },
            ].map((b, i) => (
              <div
                key={b.label}
                className="flex flex-col items-center justify-center rounded-2xl border border-neutral-200 bg-white p-6 text-center"
              >
                <b.icon aria-hidden size={28} className="text-brand-purple" />
                <p className="mt-3 text-sm font-semibold text-neutral-900">{b.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
