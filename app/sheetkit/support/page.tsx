import { withSocialMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
export const metadata: Metadata = withSocialMetadata({
  title: { absolute: "SheetKit Help and Support | ProLeadMaker Tools" },
  description: "Get help with duplicate rows, merging values, text case and SheetKit installation.",
  alternates: { canonical: 'https://www.proleadmaker.com/sheetkit/support' },
  openGraph: { title: "SheetKit Help and Support | ProLeadMaker Tools", description: "Get help with duplicate rows, merging values, text case and SheetKit installation.", url: 'https://www.proleadmaker.com/sheetkit/support', type: 'website' },
  twitter: { card: 'summary', title: "SheetKit Help and Support | ProLeadMaker Tools", description: "Get help with duplicate rows, merging values, text case and SheetKit installation." }
});

export default function SupportPage() {
  return <article className="prose-blog mx-auto max-w-3xl py-14">
    <h1 className="text-4xl font-bold">SheetKit help &amp; support</h1>
    <p>Contact ProLeadMaker Tools at <a href="mailto:davidleadwilson@gmail.com">davidleadwilson@gmail.com</a>.</p>
    <h2>Installation status</h2><p>Public Marketplace installation is being prepared. There is no public install link yet. Developers can find manual setup and test-deployment instructions in the <a href="https://github.com/Leadwork/sheet-kit">SheetKit repository</a>.</p>
    <h2>Use the tools</h2>
    <ol><li>Open SheetKit from the spreadsheet menu after installation or test setup.</li><li>Select one rectangular range. Check whether its first row is a header.</li><li>Choose duplicate deletion or highlighting, merge direction and output, or a case style.</li><li>Click Preview selection and review the range and proposed changes.</li><li>Click Apply changes. No automatic backup tab is created.</li></ol>
    <h2>Important behavior</h2>
    <ul><li>Duplicates are matched across all selected columns, ignoring text case. Empty records are skipped. Whole-row deletion also removes unselected cells in those rows.</li><li>Highlighting colors later matches yellow; it does not clear old highlights. Conditional formatting may override the visible fill.</li><li>Merge uses displayed text, including formula results. New columns are inserted immediately right of your selection.</li><li>Case changes skip formulas, numbers and dates. Title and sentence case do not recognize proper names or acronyms.</li></ul>
    <h2>Limits and troubleshooting</h2>
    <p>Select up to 20,000 cells. A run supports up to 500 changed text cells, merge outputs or separate duplicate groups. Merged output cannot exceed 50,000 characters per cell. Select a smaller range when a limit is reached.</p>
    <p>Previews expire after five minutes and are tied to the original spreadsheet and range. If source data changes, preview again. Unmerge selected cells and check edit permissions if an operation is rejected.</p>
    <p>When reporting a problem, include the selected operation, approximate range size, error message and a synthetic example. Redact private names, email addresses and spreadsheet contents.</p>
    <p><a href="/sheetkit/privacy">Privacy policy</a> · <a href="/sheetkit/terms">Terms of service</a></p>
  </article>;
}
