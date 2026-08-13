'use client';

import { useEffect, useRef, useState } from 'react';
import { siteConfig } from '@/lib/site';

const WIDGET_SRC = 'https://assets.calendly.com/assets/external/widget.js';
const WIDGET_URL = `${siteConfig.calendly}?hide_gdpr_banner=1&primary_color=7c3aed`;

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (opts: { url: string; parentElement: HTMLElement }) => void;
    };
  }
}

function loadWidgetScript(): Promise<void> {
  if (window.Calendly) return Promise.resolve();

  const existing = document.querySelector<HTMLScriptElement>(`script[src="${WIDGET_SRC}"]`);
  if (existing) {
    return new Promise((resolve, reject) => {
      existing.addEventListener('load', () => resolve(), { once: true });
      existing.addEventListener('error', () => reject(new Error('calendly script failed')), { once: true });
    });
  }

  return new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = WIDGET_SRC;
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error('calendly script failed'));
    document.body.appendChild(s);
  });
}

export default function CalendlyEmbed() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const widgetRef = useRef<HTMLDivElement | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    let cancelled = false;

    const start = () => {
      loadWidgetScript()
        .then(() => {
          if (cancelled || !widgetRef.current) return;
          // Initialise explicitly rather than relying on the script's own
          // DOM scan, which only runs once at load and would miss this node.
          window.Calendly?.initInlineWidget({
            url: WIDGET_URL,
            parentElement: widgetRef.current,
          });
        })
        .catch(() => {
          if (!cancelled) setFailed(true);
        });
    };

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            obs.disconnect();
            start();
            break;
          }
        }
      },
      { rootMargin: '200px' }
    );

    obs.observe(wrapper);
    return () => {
      cancelled = true;
      obs.disconnect();
    };
  }, []);

  return (
    <div ref={wrapperRef}>
      <div
        ref={widgetRef}
        className="calendly-inline-widget min-h-[700px] w-full rounded-2xl border border-neutral-200 bg-white"
      />
      {failed && (
        <p className="mt-4 text-center text-sm text-neutral-600">
          The booking calendar could not load.{' '}
          <a
            href={siteConfig.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-brand-purple underline"
          >
            Open it in a new tab instead
          </a>
          .
        </p>
      )}
    </div>
  );
}
