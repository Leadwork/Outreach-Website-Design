'use client';

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import { siteConfig } from '@/lib/site';

export default function CalendlyEmbed() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setInView(true);
            obs.disconnect();
            break;
          }
        }
      },
      { rootMargin: '200px' }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <div
        className="calendly-inline-widget min-h-[720px] w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white"
        data-url={`${siteConfig.calendly}?hide_gdpr_banner=1&primary_color=7c3aed`}
      />
      {inView && (
        <Script
          id="calendly-widget"
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
      )}
    </div>
  );
}
