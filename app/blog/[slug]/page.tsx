import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import { Calendar, ArrowLeft, User } from 'lucide-react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkGfm from 'remark-gfm';
import { getAllPosts, getAllSlugs, getPostBySlug } from '@/lib/blog';
import { siteConfig } from '@/lib/site';
import FinalCTA from '@/components/FinalCTA';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  const url = `${siteConfig.url}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      url,
      publishedTime: post.date,
      authors: [post.author],
      tags: [post.category],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  };
}

const mdxOptions = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]],
  },
};

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const all = getAllPosts();
  const idx = all.findIndex((p) => p.slug === post.slug);
  const related = all.filter((_, i) => i !== idx).slice(0, 3);

  const ldJson = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    author: { '@type': 'Person', name: post.author },
    datePublished: post.date,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: { '@type': 'ImageObject', url: `${siteConfig.url}/logo.svg` },
    },
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
  };

  return (
    <>
      <article className="relative pt-28 lg:pt-32">
        <div className="container-px">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm font-semibold text-brand-purple hover:underline"
          >
            <ArrowLeft aria-hidden size={14} />
            Back to blog
          </Link>

          <header className="mt-6">
            <span className="inline-flex items-center rounded-full bg-brand-purple/10 px-3 py-1 text-xs font-semibold text-brand-purple">
              {post.category}
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-neutral-600">{post.excerpt}</p>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-neutral-500">
              <span className="inline-flex items-center gap-1.5">
                <User aria-hidden size={14} /> {post.author}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar aria-hidden size={14} />
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
              <span>· {post.readingTime}</span>
            </div>
          </header>

          <div
            aria-hidden
            className="my-10 aspect-[21/9] w-full rounded-2xl"
            style={{
              backgroundImage:
                'linear-gradient(135deg, rgba(233,30,140,0.18) 0%, rgba(192,38,211,0.18) 50%, rgba(124,58,237,0.18) 100%)',
            }}
          />

          <div className="mx-auto max-w-3xl">
            <div className="prose-blog">
              <MDXRemote source={post.content} options={mdxOptions} />
            </div>

            <div className="mt-12 rounded-2xl border border-brand-purple/20 bg-brand-gradient-soft p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-purple">
                Ready to apply this?
              </p>
              <h3 className="mt-2 text-2xl font-bold text-neutral-900">
                Have us build your outbound machine.
              </h3>
              <p className="mt-2 text-neutral-700">
                We'll audit your current outbound and show you exactly how we'd build a pipeline you
                can forecast. Free 30-minute strategy call.
              </p>
              <a
                href={siteConfig.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-5"
              >
                Book a Free Strategy Call
              </a>
            </div>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="section">
          <div className="container-px">
            <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl">More from the blog</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {related.map((p) => (
                <article key={p.slug} className="card flex h-full flex-col">
                  <span className="inline-flex w-fit items-center rounded-full bg-brand-purple/10 px-2.5 py-1 text-xs font-semibold text-brand-purple">
                    {p.category}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-neutral-900">
                    <Link href={`/blog/${p.slug}`} className="hover:text-brand-purple">
                      {p.title}
                    </Link>
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-600">{p.excerpt}</p>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="mt-auto pt-4 text-sm font-semibold text-brand-purple"
                  >
                    Read post →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <FinalCTA />

      <Script
        id={`ld-blog-${post.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
      />
    </>
  );
}
