import { Star, Quote } from 'lucide-react';
import Reveal from './Reveal';

// Real, verbatim client reviews. Do not add anything here that is not a genuine
// review copied from an actual client — see the fake-testimonial cleanup in git
// history for why.
const testimonials = [
  {
    quote:
      'Great attention to detail and communication. Quickly and effectively setup campaigns with highly targeted data.',
    name: 'goodhumaninc',
    title: 'United States · Cold email campaign',
    source: 'Fiverr',
  },
  {
    quote:
      'Have worked with them several times and will continue to do projects with them. Reliable, concise, and good communication.',
    name: 's_hoefs',
    title: 'United States · Prospect list creation',
    source: 'Fiverr',
  },
];

export default function Testimonials() {
  return (
    <section className="section bg-neutral-50">
      <div className="container-px">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Client reviews</span>
          <h2 className="h-section mt-4">
            What Clients <span className="text-gradient">Actually Say</span>
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Verbatim reviews from clients who hired us for cold email campaigns and B2B
            prospect lists.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.06}>
              <figure className="relative h-full rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
                <Quote aria-hidden size={32} className="text-brand-purple/20" />
                <div className="mt-2 flex items-center gap-0.5" aria-label="Five star rating">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <Star key={s} size={16} aria-hidden className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="mt-4 text-base leading-relaxed text-neutral-700">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-neutral-100 pt-5">
                  <span
                    aria-hidden
                    className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-brand-gradient text-sm font-bold uppercase text-white"
                  >
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <p className="font-semibold text-neutral-900">{t.name}</p>
                    <p className="text-sm text-neutral-500">{t.title}</p>
                  </div>
                  <span className="ml-auto flex-shrink-0 rounded-full border border-neutral-200 px-3 py-1 text-xs font-semibold text-neutral-500">
                    {t.source}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
