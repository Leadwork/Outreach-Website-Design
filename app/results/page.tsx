import type { Metadata } from 'next';
import { PlayCircle, Star, Quote, Image as ImageIcon } from 'lucide-react';
import { siteConfig } from '@/lib/site';
import CTAButton from '@/components/CTAButton';
import FinalCTA from '@/components/FinalCTA';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Client Results — Real Pipelines, Real Reviews',
  description:
    'Video testimonials, Upwork and Fiverr reviews, and screenshots from real Pro Lead Maker clients. See the kind of pipeline our cold email outreach drives.',
  alternates: { canonical: `${siteConfig.url}/results` },
  openGraph: {
    title: 'Client Results — Pro Lead Maker',
    description: 'Real reviews and outcomes from B2B clients who scaled with us.',
    url: `${siteConfig.url}/results`,
  },
};

const videoTestimonials = [
  { name: 'B2B SaaS Founder', title: '27 meetings booked in 45 days', placeholder: true },
  { name: 'Agency Owner, UK', title: 'From 40% to 92% inbox placement', placeholder: true },
  { name: 'Head of Growth, USA', title: '3x reply rate after sequence rewrite', placeholder: true },
  { name: 'Consulting Firm, EU', title: 'First enterprise deal in 60 days', placeholder: true },
  { name: 'IT Services CEO', title: '$240k pipeline in Q2 alone', placeholder: true },
  { name: 'Fintech Director', title: 'Show-up rate above industry average', placeholder: true },
];

const reviewScreens = [
  { source: 'Upwork', heading: 'Top Rated', body: 'Top Rated with 100% Job Success score, long-term clients and rehires.' },
  { source: 'Fiverr', heading: '5-star reviews', body: '500+ five-star outreach orders delivered across platforms.' },
  { source: 'LinkedIn', heading: 'Recommendation', body: 'Public endorsements from CEOs and Heads of Sales.' },
  { source: 'Email', heading: 'Direct feedback', body: 'Screenshots of replies from clients after first month.' },
  { source: 'Google', heading: 'Business profile', body: 'Verified Google Business reviews from international clients.' },
  { source: 'Slack', heading: 'Internal kudos', body: 'Real reactions from sales teams when meetings get booked.' },
];

export default function ResultsPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-white pt-28 lg:pt-32">
        <div className="gradient-mesh" aria-hidden />
        <div className="container-px relative z-10 pb-16 text-center">
          <span className="eyebrow">Results</span>
          <h1 className="h-display mt-4">
            Real Results From <span className="text-gradient">Real Clients</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600">
            Below: video testimonials and verified review screenshots from clients we've helped
            build outbound pipelines. Numbers tell part of the story — these people tell the rest.
          </p>
          <div className="mt-8 flex justify-center">
            <CTAButton>Get Results Like These</CTAButton>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-px">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Video testimonials</span>
            <h2 className="h-section mt-4">
              Hear It From <span className="text-gradient">Our Clients</span>
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Real founders, sales leaders and growth heads talking about the pipeline we've built
              for their B2B companies.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {videoTestimonials.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.05}>
                <figure className="card group flex h-full flex-col">
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-neutral-900">
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-br from-brand-pink/30 via-brand-magenta/20 to-brand-purple/30"
                    />
                    <button
                      type="button"
                      aria-label={`Play testimonial from ${v.name}`}
                      className="absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-brand-purple shadow-xl transition-transform group-hover:scale-105"
                    >
                      <PlayCircle aria-hidden size={40} strokeWidth={1.5} />
                    </button>
                    <span className="absolute bottom-3 left-3 rounded-full bg-black/60 px-2.5 py-1 text-xs font-medium text-white">
                      Video • Placeholder
                    </span>
                  </div>
                  <figcaption className="mt-4">
                    <p className="text-sm font-bold text-neutral-900">{v.title}</p>
                    <p className="mt-1 text-xs text-neutral-500">— {v.name}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-neutral-500">
            Video cards are placeholders — replace with YouTube embed URLs once recordings are ready.
          </p>
        </div>
      </section>

      <section className="section bg-neutral-50">
        <div className="container-px">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Review screenshots</span>
            <h2 className="h-section mt-4">
              Verified Reviews From <span className="text-gradient">Upwork, Fiverr & More</span>
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              We're Upwork Top Rated with a 100% Job Success score and a 4.9 average across 500+
              orders. Real review screenshots go below to replace the placeholders.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {reviewScreens.map((r, i) => (
              <Reveal key={r.source} delay={i * 0.04}>
                <figure className="card">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-purple">
                    <ImageIcon aria-hidden size={14} />
                    {r.source}
                  </div>
                  <div className="mt-3 aspect-[4/3] w-full rounded-xl border border-dashed border-neutral-300 bg-neutral-50">
                    <div className="flex h-full flex-col items-center justify-center text-center text-xs text-neutral-500">
                      <ImageIcon aria-hidden size={28} className="mb-2" />
                      Upload review screenshot
                      <span className="mt-1 text-[10px] uppercase tracking-wider">replace placeholder</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center gap-0.5" aria-label="Five star rating">
                      {[0, 1, 2, 3, 4].map((s) => (
                        <Star key={s} size={14} aria-hidden className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="mt-2 font-semibold text-neutral-900">{r.heading}</p>
                    <p className="mt-1 text-sm text-neutral-600">{r.body}</p>
                  </div>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-px">
          <div className="mx-auto max-w-4xl rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm sm:p-12">
            <Quote aria-hidden size={36} className="text-brand-purple/30" />
            <p className="mt-3 text-2xl font-medium leading-relaxed text-neutral-800 sm:text-3xl">
              "Working with Pro Lead Maker is the closest thing to having an outbound team on
              autopilot. They handle infrastructure, copy, list-building, sending, and replies —
              and we just take the meetings."
            </p>
            <p className="mt-6 text-sm font-semibold text-neutral-600">— A long-term client</p>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
