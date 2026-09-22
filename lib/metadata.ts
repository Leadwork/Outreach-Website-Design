import type { Metadata } from 'next';
import { siteConfig } from './site';

export function withSocialMetadata(metadata: Metadata): Metadata {
  const title = typeof metadata.title === 'string' ? metadata.title : siteConfig.name;
  const description = metadata.description ?? siteConfig.description;
  const images = [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: title }];
  const canonical = metadata.alternates?.canonical;
  const url = typeof canonical === 'string' || canonical instanceof URL ? canonical : canonical?.url ?? siteConfig.url;
  return {
    ...metadata,
    openGraph: { siteName: siteConfig.name, title, description, images,
      ...metadata.openGraph, type: 'website', url },
    twitter: { card: 'summary_large_image', title, description, images: [siteConfig.ogImage], ...metadata.twitter },
  };
}
