import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '@/lib/site';

type CTAVariant = 'primary' | 'secondary' | 'ghost';

type CTAProps = {
  href?: string;
  external?: boolean;
  variant?: CTAVariant;
  children: React.ReactNode;
  withArrow?: boolean;
  className?: string;
  ariaLabel?: string;
};

export default function CTAButton({
  href = siteConfig.calendly,
  external = href === siteConfig.calendly,
  variant = 'primary',
  children,
  withArrow = true,
  className = '',
  ariaLabel,
}: CTAProps) {
  const cls =
    variant === 'primary'
      ? 'btn-primary'
      : variant === 'secondary'
        ? 'btn-secondary'
        : 'btn-ghost';
  const content = (
    <>
      <span>{children}</span>
      {withArrow && <ArrowRight aria-hidden size={16} className="transition-transform group-hover:translate-x-0.5" />}
    </>
  );
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`group ${cls} ${className}`}
        aria-label={ariaLabel}
      >
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={`group ${cls} ${className}`} aria-label={ariaLabel}>
      {content}
    </Link>
  );
}
