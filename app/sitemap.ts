import type { MetadataRoute } from 'next';
import { siteConfig, services } from '@/lib/site';
import { getAllPosts } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const lastModified = new Date();
  const priorityMap: Record<string, number> = {
    '': 1.0,
    '/services': 0.9,
    '/services/cold-email-outreach': 0.95,
    '/services/cold-linkedin-outreach': 0.95,
    '/services/b2b-lead-generation': 0.95,
    '/cold-email-agency': 0.9,
    '/pricing': 0.9,
    '/results': 0.8,
    '/blog': 0.8,
    '/contact': 0.8,
    '/about': 0.7,
    '/tools': 0.6,
  };

  const servicePaths = services.map((s) => `/services/${s.slug}`);

  const staticRoutes = [
    '',
    '/services',
    ...servicePaths,
    '/cold-email-agency',
    '/pricing',
    '/results',
    '/blog',
    '/tools',
    '/about',
    '/contact',
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: priorityMap[path] ?? 0.7,
  }));

  const posts = getAllPosts().map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.updatedAt ?? p.date),
    changeFrequency: 'monthly' as const,
    priority: 0.65,
  }));

  return [...staticRoutes, ...posts];
}
