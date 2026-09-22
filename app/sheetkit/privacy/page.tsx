import { withSocialMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
export const metadata: Metadata = withSocialMetadata({
  title: { absolute: "SheetKit Privacy Policy | ProLeadMaker Tools" },
  description: "How SheetKit processes and protects spreadsheet data, permissions, temporary previews and support requests.",
  alternates: { canonical: 'https://www.proleadmaker.com/sheetkit/privacy' },
  openGraph: { title: "SheetKit Privacy Policy | ProLeadMaker Tools", description: "How SheetKit processes and protects spreadsheet data, permissions, temporary previews and support requests.", url: 'https://www.proleadmaker.com/sheetkit/privacy', type: 'website' },
  twitter: { card: 'summary', title: "SheetKit Privacy Policy | ProLeadMaker Tools", description: "How SheetKit processes and protects spreadsheet data, permissions, temporary previews and support requests." }
});

export default function PrivacyPage() {
  return <article className="prose-blog mx-auto max-w-3xl py-14">
    <h1 className="text-4xl font-bold">SheetKit Privacy Policy</h1>
    <p>Last updated: September 13, 2026. Publisher: ProLeadMaker Tools. This policy covers SheetKit - Remove Duplicates, Merge, Change Case and its support pages.</p>
    <h2>Spreadsheet data and purpose</h2>
    <p>SheetKit reads values, formulas, displayed text and range information from your selected cells to preview and carry out the operation you choose. It can change text and background colors, delete matching sheet rows and insert columns for merged results. It does not create automatic backup sheets.</p>
    <p>The add-on runs on Google Apps Script. Its code does not transmit spreadsheet contents to ProLeadMaker Tools, this website, an external API, advertising services or analytics services. We do not sell spreadsheet data or use it for advertising.</p>
    <h2>Data protection and security</h2>
    <p>SheetKit processes spreadsheet data inside Google Apps Script within the user&apos;s Google account. ProLeadMaker Tools does not operate an external application server or database for SheetKit and does not collect, transmit, store or expose spreadsheet contents or Google OAuth credentials or tokens.</p>
    <ul><li><strong>Encryption:</strong> Data processed and temporarily cached by Google Workspace and Apps Script is protected by Google&apos;s security controls, including encryption in transit and at rest. Because SheetKit does not send spreadsheet contents to ProLeadMaker Tools infrastructure, we do not keep a separate copy to encrypt.</li><li><strong>Least-privilege access:</strong> SheetKit requests only access to the current spreadsheet and permission to display its sidebar. It acts only after the user selects data and starts an operation.</li><li><strong>Data minimization:</strong> Temporary preview records contain identifiers, range and operation settings, and a digest; they do not contain a copy of selected cell values. They expire after approximately five minutes or are removed when used.</li><li><strong>Logging and access control:</strong> SheetKit does not intentionally log cell values. Access to the Apps Script project is limited to authorized project administrators for maintenance and diagnostics.</li><li><strong>Retention and deletion:</strong> ProLeadMaker Tools retains no spreadsheet contents. Applied changes remain only in the user&apos;s Google Sheet, where the user controls, edits and deletes them.</li></ul>
    <h2>Permissions</h2>
    <ul><li>Current spreadsheet access lets the add-on read selections and apply requested edits in the spreadsheet where you use it.</li><li>Container UI access lets the add-on display its sidebar.</li></ul>
    <p>SheetKit does not request Gmail, contacts or access to the rest of your Google Drive.</p>
    <h2>Temporary previews and storage</h2>
    <p>A preview record is stored in Google Apps Script user cache with a requested expiration of five minutes. It contains spreadsheet and sheet identifiers, the range, operation settings including any custom separator, and a digest of selected data. It does not contain a copy of the selected cell values. The record is removed when used and Google may evict it earlier. Preview examples appear in the sidebar until replaced or closed.</p>
    <p>Changes you apply remain in your spreadsheet under your control. The publisher does not maintain a separate database of spreadsheet contents.</p>
    <h2>Operational logs</h2>
    <p>Google processes execution metadata and exception logs as part of Apps Script. Project administrators may access diagnostics to investigate errors. The app does not intentionally log cell values. Google controls retention of platform logs according to its service settings and policies.</p>
    <h2>This website and support</h2>
    <p>This website is hosted on Vercel and includes BrandJet analytics and Tawk.to chat. These website services may process technical visit information and information you submit to chat. They are separate from the Sheets add-on and do not receive spreadsheet contents through SheetKit.</p>
    <p>If you email support, we receive your email address and the information you provide. We use that information to respond and troubleshoot, retaining correspondence as needed to handle the request and meet applicable obligations. Ask us to delete support correspondence using the contact below. Do not send sensitive spreadsheet data; use synthetic examples or redact screenshots.</p>
    <h2>Access, deletion and user control</h2>
    <p>You can stop using SheetKit, uninstall it and revoke its Google account access. This does not undo spreadsheet edits already applied. Contact us to request access to or deletion of information you voluntarily sent to support. We may retain information when required by applicable law.</p>
    <h2>Google API Limited Use and AI/ML</h2>
    <p>SheetKit&apos;s use and transfer of information received from Google APIs adheres to the <a href="https://developers.google.com/terms/api-services-user-data-policy">Google API Services User Data Policy</a>, including the Limited Use requirements. Google Workspace API data is not used to develop, improve or train generalized artificial intelligence or machine learning models.</p>
    <h2>Updates and contact</h2>
    <p>We will update this page if our practices change and obtain additional consent when required before using Google data for a new purpose.</p>
    <p>ProLeadMaker Tools · <a href="mailto:davidleadwilson@gmail.com">davidleadwilson@gmail.com</a></p>
  </article>;
}
