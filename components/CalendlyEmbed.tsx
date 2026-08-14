import { siteConfig } from '@/lib/site';

// Calendly serves the booking page with `x-frame-options: ALLOWALL`, so we embed
// it directly instead of loading their widget.js. The script-based embed depends
// on third-party JS running at the right moment and is silently blocked by many
// ad blockers; a plain iframe has no such failure modes.
const EMBED_URL = `${siteConfig.calendly}?embed_domain=proleadmaker.com&embed_type=Inline&hide_gdpr_banner=1&primary_color=7c3aed`;

export default function CalendlyEmbed() {
  return (
    <div>
      <iframe
        src={EMBED_URL}
        title={`Book a strategy call with ${siteConfig.name}`}
        loading="lazy"
        className="h-[700px] w-full rounded-2xl border border-neutral-200 bg-white"
      />
      <p className="mt-4 text-center text-sm text-neutral-600">
        Calendar not loading?{' '}
        <a
          href={siteConfig.calendly}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-brand-purple underline"
        >
          Open the booking page in a new tab
        </a>
        .
      </p>
    </div>
  );
}
