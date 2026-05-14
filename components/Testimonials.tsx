import { Star, Quote } from 'lucide-react';
import Reveal from './Reveal';

const testimonials = [
  {
    quote:
      'Pro Lead Maker booked 27 qualified demos in our first 45 days. We had tried three other agencies before — none came close to this kind of output. The team is fast, sharp and obsessed with quality.',
    name: 'VP of Sales',
    title: 'B2B SaaS Company, USA',
  },
  {
    quote:
      'They rebuilt our entire outbound stack from scratch — domains, copy, lists, sequencing. Deliverability went from 40% to 92% and reply rates tripled within the first month. Honestly a game changer for our agency.',
    name: 'Founder',
    title: 'Marketing Agency, United Kingdom',
  },
  {
    quote:
      'I expected a typical agency — they delivered like an in-house team. Strategy calls weekly, reports weekly, and qualified meetings hitting my calendar every single day. Worth every dollar.',
    name: 'Head of Growth',
    title: 'Consulting Firm, Germany',
  },
  {
    quote:
      "What sets them apart is the signal-based approach. They don't just spray and pray — every email feels timed and relevant. Our show-up rate on booked calls is the highest it has ever been.",
    name: 'Director of Demand Gen',
    title: 'Fintech Startup, USA',
  },
];

export default function Testimonials() {
  return (
    <section className="section bg-neutral-50">
      <div className="container-px">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Client love</span>
          <h2 className="h-section mt-4">
            Trusted By <span className="text-gradient">Growth Leaders</span> Worldwide
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            We work with marketing agencies, B2B SaaS, and service businesses across the US,
            UK and Europe. Here's what they say about working with us.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.quote} delay={i * 0.06}>
              <figure className="relative h-full rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
                <Quote aria-hidden size={32} className="text-brand-purple/20" />
                <div className="mt-2 flex items-center gap-0.5" aria-label="Five star rating">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star
                      key={i}
                      size={16}
                      aria-hidden
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <blockquote className="mt-4 text-base leading-relaxed text-neutral-700">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-neutral-100 pt-5">
                  <span
                    aria-hidden
                    className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-brand-gradient text-sm font-bold text-white"
                  >
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <p className="font-semibold text-neutral-900">{t.name}</p>
                    <p className="text-sm text-neutral-500">{t.title}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
