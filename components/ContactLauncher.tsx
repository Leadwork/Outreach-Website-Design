'use client';

import { useEffect, useRef, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { siteConfig } from '@/lib/site';

type ChatAPI = {
  onLoad?: () => void;
  onChatMinimized?: () => void;
  showWidget?: () => void;
  hideWidget?: () => void;
  maximize?: () => void;
};
declare global { interface Window { Tawk_API?: ChatAPI; Tawk_LoadStart?: Date } }

export default function ContactLauncher() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const close = (e: KeyboardEvent) => { if (e.key === 'Escape') { setOpen(false); trigger.current?.focus(); } };
    const outside = (e: PointerEvent) => { if (!root.current?.contains(e.target as Node)) setOpen(false); };
    document.addEventListener('keydown', close);
    document.addEventListener('pointerdown', outside);
    return () => { document.removeEventListener('keydown', close); document.removeEventListener('pointerdown', outside); if (timeout.current) clearTimeout(timeout.current); };
  }, []);

  function startChat() {
    setError(false);
    const show = () => {
      if (timeout.current) clearTimeout(timeout.current);
      setLoading(false); setOpen(false);
      window.Tawk_API?.showWidget?.(); window.Tawk_API?.maximize?.();
    };
    if (window.Tawk_API?.maximize) { show(); return; }
    setLoading(true);
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_API.onLoad = show;
    window.Tawk_API.onChatMinimized = () => { window.Tawk_API?.hideWidget?.(); trigger.current?.focus(); };
    if (timeout.current) clearTimeout(timeout.current);
    timeout.current = setTimeout(() => { setLoading(false); setError(true); }, 15000);
    if (document.getElementById('on-demand-chat')) return;
    window.Tawk_LoadStart = new Date();
    const script = document.createElement('script');
    script.id = 'on-demand-chat'; script.async = true;
    script.src = 'https://embed.tawk.to/6a1edbd370d12c1c2fdf3eca/1jq48lda6';
    script.charset = 'UTF-8'; script.setAttribute('crossorigin', '*');
    script.onerror = () => { if (timeout.current) clearTimeout(timeout.current); script.remove(); setLoading(false); setError(true); };
    document.body.appendChild(script);
  }

  return (
    <div ref={root} className="fixed bottom-4 right-4 z-40 sm:bottom-6 sm:right-6">
      {open && <div id="contact-options" className="mb-3 w-64 max-w-[calc(100vw-2rem)] rounded-2xl border border-neutral-200 bg-white p-4 shadow-xl">
        <p className="mb-3 font-semibold text-neutral-900">How can we help?</p>
        <button type="button" disabled={loading} onClick={startChat} className="w-full rounded-lg bg-brand-purple px-4 py-3 text-left text-sm font-semibold text-white disabled:opacity-60">{loading ? 'Opening chat…' : 'Open live chat'}</button>
        <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="mt-2 block rounded-lg px-4 py-3 text-sm font-semibold text-neutral-800 hover:bg-neutral-100">Chat on WhatsApp</a>
        <a href={`mailto:${siteConfig.email}`} className="block rounded-lg px-4 py-3 text-sm font-semibold text-neutral-800 hover:bg-neutral-100">Email us</a>
        {error && <p role="status" className="mt-2 text-sm text-neutral-600">Chat could not load. Try again or use WhatsApp or email.</p>}
      </div>}
      <button ref={trigger} type="button" aria-label={open ? 'Close contact options' : 'Contact us'} aria-expanded={open} aria-controls="contact-options" onClick={() => setOpen(!open)} className="ml-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-purple text-white shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-purple">
        {open ? <X aria-hidden size={22} /> : <MessageCircle aria-hidden size={22} />}
      </button>
    </div>
  );
}
