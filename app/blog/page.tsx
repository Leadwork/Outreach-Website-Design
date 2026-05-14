import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { getAllPosts, getCategories } from '@/lib/blog';
import { siteConfig } from '@/lib/site';
import BlogList from '@/components/BlogList';
import FinalCTA from '@/components/FinalCTA';

export const metadata: Metadata = {
  title: 'Cold Email Outreach Blog — Playbooks, Templates & Tactics',
  description:
    'Tactical articles on cold email, B2B lead generation, LinkedIn outreach, deliverability and full outbound systems — written by the operators at Pro Lead Maker.',
  alternates: { canonical: `${siteConfig.url}/blog` },
  openGraph: {
    title: 'Pro Lead Maker Blog',
    description: 'Cold email outreach playbooks for B2B teams.',
    url: `${siteConfig.url}/blog`,
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getCategories();
  const popular = posts.slice(0, 4);

  return (
    <>
      <section className="relative isolate overflow-hidden bg-white pt-28 lg:pt-32">
        <div className="gradient-mesh" aria-hidden />
        <div className="container-px relative z-10 pb-12 text-center">
          <span className="eyebrow">Blog</span>
          <h1 className="h-display mt-4">
            Outbound <span className="text-gradient">Playbooks & Tactics</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600">
            Real-world plays from the campaigns we run every day. No fluff, no theory —
            tactics you can implement this week to lift replies and book more meetings.
          </p>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-px">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-9">
              <BlogList posts={posts} categories={categories} />
            </div>
            <aside className="lg:col-span-3">
              <div className="sticky top-24 space-y-6">
                <div className="rounded-2xl border border-neutral-200 bg-white p-6">
                  <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-neutral-900">
                    <TrendingUp aria-hidden size={16} className="text-brand-purple" />
                    Popular posts
                  </h2>
                  <ul className="mt-4 space-y-3">
                    {popular.map((p) => (
                      <li key={p.slug}>
                        <Link
                          href={`/blog/${p.slug}`}
                          className="block text-sm leading-snug text-neutral-700 hover:text-brand-purple"
                        >
                          {p.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="overflow-hidden rounded-2xl bg-neutral-900 p-6 text-white">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-pink">
                    Ready to scale?
                  </p>
                  <h3 className="mt-2 text-lg font-bold">Get your outbound built for you.</h3>
                  <p className="mt-2 text-sm text-neutral-300">
                    Book a free strategy call with the team.
                  </p>
                  <a
                    href={siteConfig.calendly}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-white underline-offset-4 hover:underline"
                  >
                    Book a call <ArrowRight aria-hidden size={14} />
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
