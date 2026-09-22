export const siteConfig = {
  name: 'Pro Lead Maker',
  legalName: 'Pro Lead Maker',
  tagline: 'Cold Email Outreach Built To Fill Your Pipeline',
  description:
    'B2B cold email and LinkedIn outreach agency. We build full outbound systems and fill pipelines for founders, SaaS, and agencies — done for you.',
  url: 'https://www.proleadmaker.com',
  ogImage: '/og-image.png',
  founder: 'MD. Al Amin',
  email: 'alamin@proleadmaker.com',
  phone: '+8801315739311',
  whatsapp: 'https://wa.me/8801315739311',
  calendly: 'https://calendly.com/alamin-proleadmaker/outreach-strategy-call',
  formspree: 'https://formspree.io/f/mlgzlykl',
  address: {
    country: 'Bangladesh',
    locality: 'Dhaka',
  },
  social: {
    google: 'https://share.google/3pGf6JqInZRf27eMX',
    clutch: 'https://clutch.co/profile/pro-lead-maker',
    linkedinPersonal: 'https://www.linkedin.com/in/thedmalamin/',
    linkedinCompany: 'https://www.linkedin.com/company/proleadmaker/',
    facebook: 'https://www.facebook.com/ProLeadMaker',
    twitter: 'https://x.com/proleadmaker/',
    instagram: 'https://www.instagram.com/proleadmaker/',
    tiktok: 'https://www.tiktok.com/@proleadmaker/',
  },
} as const;

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/blog', label: 'Blog' },
  { href: '/tools', label: 'Tools' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const;

export const services = [
  {
    slug: 'cold-email-outreach',
    title: 'Cold Email Outreach',
    short: 'Multichannel cold email — infrastructure, copy, sending and replies.',
    description:
      'End-to-end cold email outreach for B2B teams. We build the sending infrastructure, write signal-based sequences, manage daily operations, and handle every reply — so your team only sees qualified conversations.',
    benefits: [
      'Inbox placement monitored; volume adjusted to results',
      'Senior-written sequences, A/B tested',
      'Reply handling + meeting forwarding',
    ],
    subServices: [
      'Email infrastructure setup (lookalike domains, mailboxes, SPF/DKIM/DMARC, tracking domain)',
      'Sending-readiness checks and gradual volume ramp',
      'Sequence copywriting & A/B testing (4+ variations)',
      'Daily sending across multi-domain rotation',
      'Reply triage & appointment setting',
      'Weekly performance reporting',
    ],
  },
  {
    slug: 'cold-linkedin-outreach',
    title: 'Cold LinkedIn Outreach',
    short: 'A–Z LinkedIn outreach from your profile, integrated with email.',
    description:
      'A predictable LinkedIn pipeline running from your own profile. We optimise the profile, run multi-touch sequences, send voice notes for high-value targets, and forward every positive reply to your inbox.',
    benefits: [
      'Profile that converts visitors to conversations',
      'Multi-touch sequences with voice notes',
      'Workflow and account risks reviewed before launch',
    ],
    subServices: [
      'Profile audit & optimisation (headline, banner, About, featured)',
      'LinkedIn Sales Navigator strategy + saved searches',
      'Multi-touch sequences (connection → message → 3 follow-ups)',
      'Voice notes option for high-value targets',
      'Reply management & meeting booking',
      'Weekly performance reporting',
    ],
  },
  {
    slug: 'b2b-lead-generation',
    title: 'B2B Lead Generation',
    short: 'Verified, ICP-aligned contact lists — enriched and ready to send.',
    description:
      'Done-for-you B2B lead generation. We define your ICP, source verified contacts via multi-source waterfall, enrich agreed fields, and deliver lists on an agreed schedule. Foundation for both email and LinkedIn campaigns.',
    benefits: [
      'Multi-source waterfall (Apollo, ZoomInfo, Cognism, Clay, Hunter)',
      'Work email and agreed enrichment fields, subject to coverage',
      'Email verification and free bounce replacement',
    ],
    subServices: [
      'ICP workshop & target list definition',
      'Intent data where available and agreed in scope',
      'Relevant public business signals',
      'Email finding & SMTP-level verification',
      'Catch-all risk flags and separate review',
      'Agreed firmographic and technographic fields',
    ],
  },
] as const;

export type Service = (typeof services)[number];
