import Link from 'next/link';
import { Mail, Linkedin, Users, ArrowRight, Check, type LucideIcon } from 'lucide-react';
import Reveal from './Reveal';
import { services } from '@/lib/site';

const iconMap: Record<string, LucideIcon> = {
  'cold-email-outreach': Mail,
  'cold-linkedin-outreach': Linkedin,
  'b2b-lead-generation': Users,
};

export default function ServicesOverview() {
  return (
    <section id="services-overview" className="section">
      <div className="container-px">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">What we do</span>
          <h2 className="h-section mt-4">
            Three Focused Services. <span className="text-gradient">One Outbound Engine.</span>
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Cold email, cold LinkedIn, and B2B lead generation — run together by an 8-person
            specialist team for B2B founders, SaaS, and agencies.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = iconMap[s.slug] ?? Mail;
            return (
              <Reveal key={s.slug} delay={i * 0.06}>
                <Link
                  href={`/services/${s.slug}`}
                  className="card group flex h-full flex-col"
                  aria-label={`Learn more about ${s.title}`}
                >
                  <span
                    aria-hidden
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient text-white"
                  >
                    <Icon aria-hidden size={22} />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-neutral-900 group-hover:text-brand-purple">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{s.short}</p>
                  <ul className="mt-5 space-y-2 text-sm text-neutral-700">
                    {s.benefits.slice(0, 3).map((b) => (
                      <li key={b} className="flex gap-2">
                        <Check
                          aria-hidden
                          size={14}
                          className="mt-1 flex-shrink-0 text-brand-purple"
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <span className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-semibold text-brand-purple">
                    Explore service <ArrowRight aria-hidden size={14} className="transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <Link href="/services" className="btn-primary">
            See All Services
          </Link>
          <Link href="/pricing" className="btn-secondary">
            See Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
