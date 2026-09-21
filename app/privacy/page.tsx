import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Pro Lead Maker handles website enquiries, bookings, analytics, and live chat.',
  alternates: { canonical: `${siteConfig.url}/privacy` },
};

export default function PrivacyPage() {
  return (
    <section className="container-px pb-20 pt-28 lg:pt-32">
      <article className="prose-blog mx-auto max-w-3xl">
        <h1>Privacy Policy</h1>
        <p>Last updated: September 21, 2026.</p>
        <p>This page covers the Pro Lead Maker agency website and information you provide when enquiring about our services. Pro Lead Maker is based in Dhaka, Bangladesh. SheetKit has a separate <Link href="/sheetkit/privacy">privacy policy</Link>.</p>

        <h2>Information you provide</h2>
        <p>Our contact form asks for your name, email address, optional company and service interest, and your message. When you book a call, email us, use live chat, or contact us through WhatsApp, we receive the information you choose to share through that service. Please avoid including sensitive personal information in an initial enquiry.</p>

        <h2>How we use this information</h2>
        <p>We use enquiry and booking information to respond, arrange calls, discuss your requirements, and provide requested services. Technical visit information helps operate, secure, and understand use of the website. Client campaign data and contact-list requirements are addressed in the scope agreed for each engagement.</p>

        <h2>Services used by this website</h2>
        <ul>
          <li><strong>Vercel</strong> hosts the website and may process technical request information such as IP addresses, browser details, and diagnostic logs.</li>
          <li><strong>Formspree</strong> processes the information you submit through the contact form.</li>
          <li><strong>Calendly</strong> provides call scheduling, including the embedded calendar on the contact page, and processes booking information.</li>
          <li><strong>BrandJet</strong> provides website analytics and may process page views, interactions, and technical visit information.</li>
          <li><strong>Tawk.to</strong> provides live chat and may process visit information and messages you submit.</li>
          <li><strong>WhatsApp and linked social platforms</strong> process information when you choose to use them.</li>
        </ul>
        <p>These providers process information under their own terms and privacy policies. Their infrastructure may be located outside your country, including outside Bangladesh. Information may also be disclosed when required to comply with applicable obligations or protect the service.</p>

        <h2>Cookies and browser storage</h2>
        <p>Embedded calendars, chat, and other third-party services may use cookies or similar browser storage. You can manage cookies through your browser and use any privacy controls offered by those providers. Blocking these services may affect booking or chat functionality. You can contact us by email instead.</p>

        <h2>Retention and your requests</h2>
        <p>We retain correspondence as needed to handle your enquiry, provide agreed services, and meet applicable obligations. Provider logs and records are also subject to provider settings and policies. To ask about information you have shared, request a correction or deletion, or stop follow-up about an enquiry, contact us at the address below. Some records may need to be retained to meet applicable obligations.</p>

        <h2>Contact and updates</h2>
        <p>Contact {siteConfig.name} at <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> for privacy questions. We will update this page when the website services or described practices change.</p>
      </article>
    </section>
  );
}
