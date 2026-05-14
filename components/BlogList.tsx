'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Search, Calendar, ArrowRight } from 'lucide-react';
import type { BlogPost } from '@/lib/blog';

type Props = {
  posts: BlogPost[];
  categories: string[];
};

export default function BlogList({ posts, categories }: Props) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<string>('All');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      const catOk = category === 'All' || p.category === category;
      const qOk =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q);
      return catOk && qOk;
    });
  }, [posts, query, category]);

  return (
    <>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-sm">
          <Search aria-hidden size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles…"
            aria-label="Search articles"
            className="w-full rounded-full border border-neutral-200 bg-white py-2.5 pl-10 pr-4 text-sm outline-none transition-colors focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20"
          />
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setCategory('All')}
            className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
              category === 'All'
                ? 'bg-brand-gradient text-white'
                : 'bg-white text-neutral-700 ring-1 ring-neutral-200 hover:text-brand-purple'
            }`}
          >
            All
          </button>
          {categories.map((c) => (
            <button
              type="button"
              key={c}
              onClick={() => setCategory(c)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                category === c
                  ? 'bg-brand-gradient text-white'
                  : 'bg-white text-neutral-700 ring-1 ring-neutral-200 hover:text-brand-purple'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.length === 0 && (
          <div className="col-span-full rounded-2xl border border-dashed border-neutral-200 bg-white p-10 text-center text-neutral-500">
            No posts match your search.
          </div>
        )}
        {filtered.map((p) => (
          <article key={p.slug} className="card flex h-full flex-col">
            <div
              aria-hidden
              className="aspect-[16/9] w-full rounded-xl"
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
              <span>· {p.readingTime}</span>
            </div>
            <h3 className="mt-3 text-lg font-bold text-neutral-900">
              <Link href={`/blog/${p.slug}`} className="hover:text-brand-purple">
                {p.title}
              </Link>
            </h3>
            <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-600">{p.excerpt}</p>
            <Link
              href={`/blog/${p.slug}`}
              className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-brand-purple"
            >
              Read more <ArrowRight aria-hidden size={14} />
            </Link>
          </article>
        ))}
      </div>
    </>
  );
}
