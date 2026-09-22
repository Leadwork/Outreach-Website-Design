import { Compass, Wrench, Send, TrendingUp } from 'lucide-react';
import Reveal from './Reveal';

const steps = [
  {
    icon: Compass,
    title: 'Strategy & ICP',
    body:
      'We map your ideal customer profile, positioning and offer, then build a target list with verified, intent-rich data.',
  },
  {
    icon: Wrench,
    title: 'Infrastructure & Setup',
    body:
      'New domains, mailboxes, DNS, warmup and sending tools — configured and monitored to improve inbox placement.',
  },
  {
    icon: Send,
    title: 'Launch & Iterate',
    body:
      'Multi-step, personalised sequences across email and LinkedIn. We test copy weekly and double down on winners.',
  },
  {
    icon: TrendingUp,
    title: 'Book & Scale',
    body:
      'Our reply handlers qualify and book meetings on your calendar. We review delivery and reply quality before increasing volume.',
  },
];

export default function HowItWorks() {
  return (
    <section className="section bg-neutral-50">
      <div className="container-px">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">How it works</span>
          <h2 className="h-section mt-4">
            From Strategy To <span className="text-gradient">Live Outreach</span>
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            A four-step rollout with targeting and copy approved by you. We plan setup and a gradual
            launch around account readiness, then review replies and results together.
          </p>
        </div>

        <div className="relative mt-14 grid gap-6 lg:grid-cols-4">
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-brand-purple/30 to-transparent lg:block"
          />
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="relative h-full rounded-2xl border border-neutral-200 bg-white p-6 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-gradient text-white shadow-lg shadow-brand-purple/20">
                  <s.icon aria-hidden size={26} />
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-brand-purple">
                  Step {i + 1}
                </p>
                <h3 className="mt-1 text-lg font-bold text-neutral-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
