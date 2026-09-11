import Link from 'next/link';
import type { ReactNode } from 'react';

export default function SheetKitLayout({ children }: { children: ReactNode }) {
  return <div className="bg-white pt-28 lg:pt-32">
    <div className="container-px">
      <nav aria-label="SheetKit" className="flex flex-wrap items-center gap-x-6 gap-y-3 border-b border-neutral-200 pb-6 text-sm">
        <Link href="/sheetkit" className="text-xl font-bold text-brand-purple">SheetKit</Link>
        <span className="text-neutral-600">by ProLeadMaker Tools</span>
        <Link href="/sheetkit/support" className="underline underline-offset-4">Help &amp; support</Link>
        <Link href="/sheetkit/privacy" className="underline underline-offset-4">Privacy</Link>
        <Link href="/sheetkit/terms" className="underline underline-offset-4">Terms</Link>
      </nav>
      {children}
    </div>
  </div>;
}
