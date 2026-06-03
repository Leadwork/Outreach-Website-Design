'use client';

import { useState } from 'react';

type ToolLogoProps = {
  domain: string;
  name: string;
};

/**
 * Renders a tool's real logo via Clearbit's logo API, with a graceful
 * fallback to a branded letter badge if the logo fails to load.
 */
export default function ToolLogo({ domain, name }: ToolLogoProps) {
  const [failed, setFailed] = useState(false);

  if (failed || !domain) {
    return (
      <span
        aria-hidden
        className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-gradient-soft text-base font-bold text-brand-purple"
      >
        {name.charAt(0)}
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://logo.clearbit.com/${domain}`}
      alt={`${name} logo`}
      width={40}
      height={40}
      loading="lazy"
      onError={() => setFailed(true)}
      className="h-10 w-10 rounded-lg bg-white object-contain p-1 ring-1 ring-neutral-200"
    />
  );
}
