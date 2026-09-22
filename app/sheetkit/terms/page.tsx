import { withSocialMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
export const metadata: Metadata = withSocialMetadata({
  title: { absolute: "SheetKit Terms of Service | ProLeadMaker Tools" },
  description: "Terms for using SheetKit spreadsheet tools provided by ProLeadMaker Tools.",
  alternates: { canonical: 'https://www.proleadmaker.com/sheetkit/terms' },
  openGraph: { title: "SheetKit Terms of Service | ProLeadMaker Tools", description: "Terms for using SheetKit spreadsheet tools provided by ProLeadMaker Tools.", url: 'https://www.proleadmaker.com/sheetkit/terms', type: 'website' },
  twitter: { card: 'summary', title: "SheetKit Terms of Service | ProLeadMaker Tools", description: "Terms for using SheetKit spreadsheet tools provided by ProLeadMaker Tools." }
});

export default function TermsPage() {
  return <article className="prose-blog mx-auto max-w-3xl py-14">
    <h1 className="text-4xl font-bold">SheetKit Terms of Service</h1>
    <p>Last updated: September 11, 2026. These terms apply to SheetKit - Remove Duplicates, Merge, Change Case, provided by ProLeadMaker Tools.</p>
    <h2>Using SheetKit</h2>
    <p>Use SheetKit only with spreadsheets you are authorized to access and modify. You remain responsible for your data, your selected range and the operation you apply. Do not use the service unlawfully or attempt to interfere with Google services or other users.</p>
    <h2>Changes to your spreadsheet</h2>
    <p>Review each preview before applying it. Duplicate deletion removes whole sheet rows, including cells outside selected columns. Merging into selected cells replaces source contents; merging into new columns preserves them. Text transformations may change names, acronyms and character formatting.</p>
    <p>SheetKit does not create automatic backups or provide automatic rollback. Normal Undo may not reverse script edits, and an interrupted operation may partially apply. Keep your own copies of important data.</p>
    <h2>Cost and availability</h2>
    <p>The current tools are free to use, with no SheetKit subscription. Google account permissions, organization policies and platform quotas apply. Public Marketplace installation is not available until the app is listed. Availability, features and limits may change, and uninterrupted service is not guaranteed.</p>
    <h2>Your data and privacy</h2>
    <p>You retain ownership of your data. The <a href="/sheetkit/privacy">SheetKit Privacy Policy</a> describes the data processed for operations, temporary previews and support. Using SheetKit does not grant us ownership of spreadsheet contents.</p>
    <h2>Service limitations</h2>
    <p>The tools are provided as available without a promise that every result will fit your particular purpose. Check outputs before relying on them. Nothing in these terms excludes rights or responsibilities that applicable law does not allow to be excluded.</p>
    <h2>Stopping use and changes to these terms</h2>
    <p>You may stop using and uninstall SheetKit at any time. Uninstalling does not reverse prior edits. Updated terms will be posted on this page with a new date; where required, material changes will be communicated before they take effect.</p>
    <h2>Contact</h2>
    <p>ProLeadMaker Tools · <a href="mailto:davidleadwilson@gmail.com">davidleadwilson@gmail.com</a></p>
    <p>SheetKit is an independent product and is not affiliated with or endorsed by Google.</p>
  </article>;
}
