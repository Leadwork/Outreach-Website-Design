'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import CTAButton from './CTAButton';
import { siteConfig } from '@/lib/site';

export default function Hero() {
  const reduced = useReducedMotion();
  return (
    <section className="relative isolate overflow-hidden bg-white pt-28 lg:pt-32">
      <div className="gradient-mesh" aria-hidden />
      <div className="absolute inset-0 -z-10 [background-image:radial-gradient(circle_at_1px_1px,rgba(124,58,237,0.06)_1px,transparent_0)] [background-size:24px_24px]" aria-hidden />

      <div className="container-px relative z-10 pb-20 lg:pb-28">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="eyebrow">
            <Sparkles aria-hidden size={14} />
            Cold email outreach, done for you
          </span>
          <h1 className="h-display mt-6">
            We Build <span className="text-gradient">Outbound Machines</span> That Fill Your Pipeline
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600 sm:text-xl">
            Pro Lead Maker designs, launches and runs full cold email systems for B2B
            agencies, SaaS and service businesses — booking qualified sales meetings
            on autopilot in the US, UK and Europe.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CTAButton href={siteConfig.calendly} external>
              Book a Free Strategy Call
            </CTAButton>
            <CTAButton href="/services" variant="secondary" external={false} withArrow={false}>
              View Our Services
            </CTAButton>
          </div>
          <p className="mt-6 text-sm text-neutral-500">
            No contracts • No setup fee on pilot • Free strategy session worth $500
          </p>
        </motion.div>
      </div>
    </section>
  );
}
