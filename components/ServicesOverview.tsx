import Link from 'next/link';
import {
  Target,
  Radar,
  Users,
  Linkedin,
  Mail,
  CalendarCheck,
  Cog,
  Server,
  Flame,
  Database,
  ShieldCheck,
  Filter,
  Search,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';
import Reveal from './Reveal';
import { services } from '@/lib/site';

const iconMap: Record<string, LucideIcon> = {
  'intent-based-b2b-lead-generation': Target,
  'signal-based-b2b-lead-generation': Radar,
  'b2b-lead-generation': Users,
  'linkedin-lead-generation': Linkedin,
  'cold-email-setup': Mail,
  'appointment-setting': CalendarCheck,
  'full-outreach-system': Cog,
  'email-infrastructure-setup': Server,
  'email-warmup-setup': Flame,
  'data-enrichment': Database,
  'email-verification': ShieldCheck,
  'catch-all-email-verification': Filter,
  'email-finding': Search,
};

export default function ServicesOverview() {
  return (
    <section id="services-overview" className="section">
      <div className="container-px">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">What we do</span>
          <h2 className="h-section mt-4">
            A Complete <span className="text-gradient">Outbound Stack</span>, Built And Run For You
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Strategy, infrastructure, copy, list-building, sending, reply-handling and reporting —
            every piece of the cold outreach machine, owned by us and delivered as one service.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = iconMap[s.slug] ?? Target;
            return (
              <Reveal key={s.slug} delay={i * 0.04}>
                <Link
                  href={`/services#${s.slug}`}
                  className="card flex h-full flex-col"
                  aria-label={`Learn more about ${s.title}`}
                >
                  <span
                    aria-hidden
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient text-white"
                  >
                    <Icon aria-hidden size={20} />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-neutral-900">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{s.short}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-purple">
                    Learn more <ArrowRight aria-hidden size={14} />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/services" className="btn-primary">
            See All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
