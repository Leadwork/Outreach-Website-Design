import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';
import { navLinks, services, siteConfig } from '@/lib/site';

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden focusable="false">
    <path
      fill="currentColor"
      d="M19.6 6.7a5.6 5.6 0 0 1-3.4-1.4 5.6 5.6 0 0 1-1.7-3.1h-3.2v13.3a2.7 2.7 0 1 1-2.7-2.7c.2 0 .4 0 .6.1V9.6a6 6 0 1 0 5.3 5.9V9.8a8.7 8.7 0 0 0 5.1 1.6V8.2c-.1 0-.1 0 0-1.5Z"
    />
  </svg>
);

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="container-px py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt={siteConfig.name}
                width={160}
                height={38}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-neutral-600">
              We build outbound machines that fill your pipeline. Cold email outreach,
              appointment setting, and full-funnel B2B lead generation for agencies,
              SaaS, and service businesses.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={siteConfig.social.linkedinCompany}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-neutral-600 ring-1 ring-neutral-200 transition-colors hover:text-brand-purple"
              >
                <Linkedin aria-hidden size={18} />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-neutral-600 ring-1 ring-neutral-200 transition-colors hover:text-brand-purple"
              >
                <Facebook aria-hidden size={18} />
              </a>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-neutral-600 ring-1 ring-neutral-200 transition-colors hover:text-brand-purple"
              >
                <Twitter aria-hidden size={18} />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-neutral-600 ring-1 ring-neutral-200 transition-colors hover:text-brand-purple"
              >
                <Instagram aria-hidden size={18} />
              </a>
              <a
                href={siteConfig.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-neutral-600 ring-1 ring-neutral-200 transition-colors hover:text-brand-purple"
              >
                <TikTokIcon />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-900">
              Company
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-neutral-600 hover:text-brand-purple">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-900">
              Services
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {services.slice(0, 7).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="text-neutral-600 hover:text-brand-purple"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-900">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.emails.company}`}
                  className="flex items-center gap-2 text-neutral-600 hover:text-brand-purple"
                >
                  <Mail aria-hidden size={16} />
                  {siteConfig.emails.company}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-2 text-neutral-600 hover:text-brand-purple"
                >
                  <Phone aria-hidden size={16} />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-2"
                >
                  Book a Free Call
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-neutral-200 pt-6 text-xs text-neutral-500 sm:flex-row">
          <p>© {year} {siteConfig.legalName}. All rights reserved.</p>
          <p>Founded by {siteConfig.founder}</p>
        </div>
      </div>
    </footer>
  );
}
