import { Calendar, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/lib/site';

export default function FinalCTA() {
  return (
    <section className="section">
      <div className="container-px">
        <div className="relative overflow-hidden rounded-3xl bg-neutral-900 px-8 py-16 text-center text-white shadow-2xl shadow-brand-purple/20 sm:px-12 lg:py-20">
          <div
            aria-hidden
            className="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_20%_20%,#e91e8c_0%,transparent_40%),radial-gradient(circle_at_80%_80%,#7c3aed_0%,transparent_40%)]"
          />
          <div className="relative mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Ready To Scale Your Outreach?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-neutral-300">
              Book a free 30-minute strategy call. We'll audit your current outbound, identify
              the biggest revenue leak, and show you exactly how we'd build a pipeline you can
              forecast — no pitch, no obligation.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={siteConfig.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-neutral-900 transition-transform hover:-translate-y-0.5"
              >
                <Calendar aria-hidden size={16} />
                Book a Free Strategy Call
              </a>
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <MessageCircle aria-hidden size={16} />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
