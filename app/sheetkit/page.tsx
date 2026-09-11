import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: { absolute: "SheetKit - Remove Duplicates, Merge, Change Case" },
  description: "Remove duplicate rows, merge values and change text case in Google Sheets. A free add-on by ProLeadMaker Tools.",
  alternates: { canonical: 'https://www.proleadmaker.com/sheetkit' },
  openGraph: { title: "SheetKit - Remove Duplicates, Merge, Change Case", description: "Remove duplicate rows, merge values and change text case in Google Sheets. A free add-on by ProLeadMaker Tools.", url: 'https://www.proleadmaker.com/sheetkit', type: 'website' },
  twitter: { card: 'summary', title: "SheetKit - Remove Duplicates, Merge, Change Case", description: "Remove duplicate rows, merge values and change text case in Google Sheets. A free add-on by ProLeadMaker Tools." }
};

import Link from 'next/link';
const features = [
  ['01', 'Remove duplicate rows', 'Keep the first matching row. Delete later matches across the whole sheet row, or highlight their selected cells in yellow. Empty records are skipped.'],
  ['02', 'Merge values', 'Join each row, each column, or the full selection with your chosen separator. Insert new output columns to keep source data, or replace the selected contents.'],
  ['03', 'Change case', 'Apply lowercase, title case or sentence case to text. Formula cells, numbers and dates stay unchanged.']
];
export default function SheetKitPage() {
  return <>
    <section className="grid gap-12 py-16 lg:grid-cols-2 lg:py-24">
      <div>
        <span className="eyebrow">Free Google Sheets add-on</span>
        <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">SheetKit <span className="text-gradient">— Remove Duplicates, Merge, Change Case</span></h1>
        <p className="mt-6 text-lg leading-relaxed text-neutral-600">Three everyday tools, one simple sidebar. Clean repeated records, join values and make text consistent without leaving your spreadsheet.</p>
        <p className="mt-5 rounded-xl border border-brand-purple/20 bg-brand-purple/5 p-4 text-sm leading-relaxed">Public Marketplace installation is being prepared. SheetKit has not yet been approved or listed by Google.</p>
        <div className="mt-7 flex flex-wrap gap-3"><Link href="/sheetkit/support" className="btn-primary">Read the getting-started guide</Link><a href="https://github.com/Leadwork/sheet-kit" className="btn-secondary">View source code</a></div>
      </div>
      <div className="space-y-4">
        {features.map(([number,title,body]) => <article key={number} className="card"><span className="text-sm font-semibold text-brand-purple">{number}</span><h2 className="mt-2 text-xl font-bold">{title}</h2><p className="mt-3 leading-relaxed text-neutral-600">{body}</p></article>)}
      </div>
    </section>
    <section className="grid gap-8 border-t border-neutral-200 py-14 md:grid-cols-3">
      <div><h2 className="text-xl font-bold">Preview before applying</h2><p className="mt-3 leading-relaxed text-neutral-600">Select cells, choose an operation and review the range and results. Changes apply directly; automatic backup tabs are not created.</p></div>
      <div><h2 className="text-xl font-bold">Focused permissions</h2><p className="mt-3 leading-relaxed text-neutral-600">The add-on works with the current spreadsheet and displays a sidebar. Its code does not send cell contents to an external API.</p><Link href="/sheetkit/privacy" className="mt-3 inline-block text-brand-purple underline">How your data is handled</Link></div>
      <div><h2 className="text-xl font-bold">No subscription</h2><p className="mt-3 leading-relaxed text-neutral-600">No paid plan, API key or separate SheetKit account. Google account permissions and Apps Script usage limits apply.</p></div>
    </section>
  </>;
}
