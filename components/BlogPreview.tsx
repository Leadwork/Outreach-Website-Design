import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import { getAllPosts } from '@/lib/blog';
import Reveal from './Reveal';

export default function BlogPreview() {
  const posts = getAllPosts().slice(0, 3);
  if (posts.length === 0) return null;

  return (
    <section className="section">
      <div className="container-px">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="eyebrow">From the blog</span>
            <h2 className="h-section mt-4">
              Outbound <span className="text-gradient">Insights & Playbooks</span>
            </h2>
            <p className="mt-3 text-lg text-neutral-600">
              Tactics, templates and tear-downs from the campaigns we run every day.
            </p>
          </div>
          <Link href="/blog" className="btn-secondary">
            View all posts
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <article className="card flex h-full flex-col">
                <div
                  aria-hidden
                  className="aspect-[16/9] w-full rounded-xl bg-brand-gradient-soft"
                  style={{
                    backgroundImage:
                      'linear-gradient(135deg, rgba(233,30,140,0.15) 0%, rgba(192,38,211,0.15) 50%, rgba(124,58,237,0.15) 100%)',
                  }}
                />
                <div className="mt-5 flex items-center gap-3 text-xs text-neutral-500">
                  <span className="rounded-full bg-brand-purple/10 px-2.5 py-1 font-semibold text-brand-purple">
                    {p.category}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Calendar aria-hidden size={12} />
                    {new Date(p.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-bold text-neutral-900">
                  <Link href={`/blog/${p.slug}`} className="hover:text-brand-purple">
                    {p.title}
                  </Link>
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-600">
                  {p.excerpt}
                </p>
                <Link
                  href={`/blog/${p.slug}`}
                  className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-brand-purple"
                >
                  Read more <ArrowRight aria-hidden size={14} />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
