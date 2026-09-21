'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CheckCircle2, Loader2 } from 'lucide-react';
import { siteConfig, services } from '@/lib/site';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === 'submitting') return;
    setError(null);

    const form = e.currentTarget;
    for (const field of ['name', 'message']) {
      const input = form.elements.namedItem(field) as HTMLInputElement | HTMLTextAreaElement;
      input.setCustomValidity(input.value.trim() ? '' : `Please enter your ${field === 'name' ? 'name' : 'message'}.`);
    }
    if (!form.reportValidity()) return;
    setStatus('submitting');
    const data = new FormData(form);
    for (const field of ['name', 'email', 'company', 'message']) {
      data.set(field, String(data.get(field) ?? '').trim());
    }

    try {
      const res = await fetch(siteConfig.formspree, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        const body = await res.json().catch(() => null);
        setError(body?.errors?.[0]?.message ?? 'Something went wrong. Please try again.');
        setStatus('error');
      }
    } catch {
      setError('Network error. Please try again.');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div role="status" className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <CheckCircle2 aria-hidden size={40} className="mx-auto text-emerald-600" />
        <h3 className="mt-3 text-xl font-bold text-neutral-900">Thanks — message received.</h3>
        <p className="mt-2 text-neutral-700">
          We'll reply within one business day. For anything urgent, ping us on WhatsApp.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" aria-busy={status === 'submitting'}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-neutral-900">
            Full Name <span className="text-red-500" aria-hidden>*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            maxLength={200}
            onInput={(e) => e.currentTarget.setCustomValidity('')}
            autoComplete="name"
            className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-3 text-base outline-none transition-colors focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20"
            placeholder="Jane Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-neutral-900">
            Email <span className="text-red-500" aria-hidden>*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-3 text-base outline-none transition-colors focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20"
            placeholder="jane@company.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-semibold text-neutral-900">
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-3 text-base outline-none transition-colors focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20"
          placeholder="Acme Inc."
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-semibold text-neutral-900">
          Service Interested In
        </label>
        <select
          id="service"
          name="service"
          defaultValue=""
          className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-base outline-none transition-colors focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20"
        >
          <option value="" disabled>
            Select a service…
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Not sure yet">Not sure yet</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-neutral-900">
          Message <span className="text-red-500" aria-hidden>*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          maxLength={5000}
          onInput={(e) => e.currentTarget.setCustomValidity('')}
          rows={5}
          className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-3 text-base outline-none transition-colors focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20"
          placeholder="Tell us a bit about your business, current outbound and goals."
        />
      </div>

      {/* Honeypot */}
      <input type="text" name="_gotcha" className="hidden" aria-hidden tabIndex={-1} />

      {error && (
        <div role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-primary w-full sm:w-auto"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 aria-hidden size={16} className="animate-spin" />
            Sending…
          </>
        ) : (
          'Send Message'
        )}
      </button>
      <p className="text-xs text-neutral-500">
        We reply within one business day. By submitting, you ask Pro Lead Maker to contact you about your enquiry.{' '}
        <Link href="/privacy" className="underline underline-offset-4 hover:text-brand-purple">Read our Privacy Policy</Link>.
      </p>
    </form>
  );
}
