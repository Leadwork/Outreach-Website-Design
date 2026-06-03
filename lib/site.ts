export const siteConfig = {
  name: 'Pro Lead Maker',
  legalName: 'Pro Lead Maker',
  tagline: 'Cold Email Outreach Built To Fill Your Pipeline',
  description:
    'Pro Lead Maker is a B2B cold email outreach agency that builds full outbound systems, books qualified meetings, and scales pipeline for agencies, SaaS, and service businesses.',
  url: 'https://proleadmaker.com',
  ogImage: '/og-image.png',
  founder: 'MD. Al Amin',
  email: 'alamin@proleadmaker.com',
  phone: '+8801315739311',
  whatsapp: 'https://wa.me/8801315739311',
  calendly: 'https://calendly.com/proleadmaker/lead-generation',
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
  { href: '/results', label: 'Results' },
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
      '90%+ inbox placement, monitored daily',
      'Senior-written sequences, A/B tested',
      'Reply handling + meeting forwarding',
    ],
    subServices: [
      'Email infrastructure setup (lookalike domains, mailboxes, SPF/DKIM/DMARC, tracking domain)',
      'Inbox warmup management (2–3 weeks structured ramp)',
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
      'LinkedIn ToS-compliant (Closely.io / HeyReach)',
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
      'Done-for-you B2B lead generation. We define your ICP, source verified contacts via multi-source waterfall, enrich across 15+ fields, and hand you sales-ready lists every week. Foundation for both email and LinkedIn campaigns.',
    benefits: [
      'Multi-source waterfall (Apollo, ZoomInfo, Cognism, Clay, Hunter)',
      'Email + LinkedIn + phone + tech-stack fields',
      'Under 2% bounce rate, replaced free of charge',
    ],
    subServices: [
      'ICP workshop & target list definition',
      'Intent-based prospecting (Bombora, G2)',
      'Signal-based prospecting (30+ buying triggers)',
      'Email finding & SMTP-level verification',
      'Catch-all email verification (up to 85% accuracy)',
      'Data enrichment (15+ firmographic & technographic fields)',
    ],
  },
] as const;

export type Service = (typeof services)[number];
