export const siteConfig = {
  name: 'Pro Lead Maker',
  legalName: 'Pro Lead Maker',
  tagline: 'Cold Email Outreach Built To Fill Your Pipeline',
  description:
    'Pro Lead Maker is a B2B cold email outreach agency that builds full outbound systems, books qualified meetings, and scales pipeline for agencies, SaaS, and service businesses.',
  url: 'https://proleadmaker.com',
  ogImage: '/og-image.png',
  founder: 'MD. Al Amin',
  emails: {
    personal: 'alamin@proleadmaker.com',
    company: 'hello@proleadmaker.com',
  },
  phone: '+8801315739311',
  whatsapp: 'https://wa.me/8801315739311',
  calendly: 'https://calendly.com/proleadmaker/lead-generation',
  formspree: 'https://formspree.io/f/mlgzlykl',
  address: {
    country: 'Bangladesh',
    locality: 'Dhaka',
  },
  social: {
    google: 'https://share.google/zUhXxcWrs8jf1XhUJ',
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
  { href: '/results', label: 'Results' },
  { href: '/blog', label: 'Blog' },
  { href: '/tools', label: 'Tools' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const;

export const services = [
  {
    slug: 'intent-based-b2b-lead-generation',
    title: 'Intent-Based B2B Lead Generation',
    short: 'Target buyers actively researching solutions like yours.',
    description:
      'We surface accounts showing real-time buying intent across the web — review sites, content downloads, competitor searches, hiring signals — and route them straight into a personalised outreach sequence so you only talk to prospects already in-market.',
    benefits: [
      'Higher reply rates from in-market accounts',
      'Shorter sales cycles vs. cold lists',
      'Pipeline that compounds week over week',
    ],
  },
  {
    slug: 'signal-based-b2b-lead-generation',
    title: 'Signal-Based B2B Lead Generation',
    short: 'Outreach triggered by real events that signal readiness to buy.',
    description:
      'Funding rounds, leadership changes, tech-stack adoption, job openings, expansion announcements — we monitor 30+ buying signals and time our outreach to the exact moment a prospect is most likely to respond.',
    benefits: [
      'Hyper-relevant first lines that get replies',
      '3-5x higher meeting-booked rates',
      'No more spraying generic emails into the void',
    ],
  },
  {
    slug: 'b2b-lead-generation',
    title: 'B2B Lead Generation',
    short: 'Build, validate and outreach to your ideal customer list.',
    description:
      'End-to-end B2B lead generation: we define your ICP, source verified contacts, write copy, run multi-step sequences, and hand qualified replies directly to your sales team. You focus on closing, we feed the funnel.',
    benefits: [
      'Custom-built ICP and target lists',
      'Verified, deliverable contact data',
      'Done-for-you sequences and replies',
    ],
  },
  {
    slug: 'linkedin-lead-generation',
    title: 'LinkedIn Lead Generation',
    short: 'A predictable LinkedIn pipeline running on autopilot.',
    description:
      'We optimise your LinkedIn profile, run targeted connection and follow-up campaigns, and combine LinkedIn touches with email for a full multi-channel motion that books calls from your highest-value prospects.',
    benefits: [
      'Profile rewrites that convert visitors',
      'Daily targeted outreach without bans',
      'Multi-channel sequences (LinkedIn + email)',
    ],
  },
  {
    slug: 'cold-email-setup',
    title: 'Cold Email Setup',
    short: 'Fully configured cold email systems built to send and deliver.',
    description:
      'New domains, DNS records, mailbox provisioning, warmup, sending tool configuration — we set up the entire technical foundation so your emails land in the inbox instead of spam from day one.',
    benefits: [
      'SPF, DKIM, DMARC, MX configured correctly',
      'Inbox-ready domains and mailboxes',
      'Ready to scale without deliverability hits',
    ],
  },
  {
    slug: 'appointment-setting',
    title: 'Appointment Setting',
    short: 'We book qualified sales meetings straight onto your calendar.',
    description:
      'Our SDR-grade reply handlers manage every conversation — answering questions, handling objections, and booking meetings only when the prospect matches your qualification criteria.',
    benefits: [
      '20+ qualified meetings per month',
      'Human reply handling, not bots',
      'Show-up rates above industry average',
    ],
  },
  {
    slug: 'full-outreach-system',
    title: 'Full Outreach System',
    short: 'A complete outbound engine — strategy, infra, copy, list, send.',
    description:
      'We build your entire outbound machine from scratch: positioning, ICP, infrastructure, sequences, list-building, sending, reply management and reporting — all owned by us, all results delivered to you.',
    benefits: [
      'Done-for-you outbound from day 1',
      'Single team, single point of accountability',
      'Pipeline you can forecast and scale',
    ],
  },
  {
    slug: 'email-infrastructure-setup',
    title: 'Email Infrastructure Setup',
    short: 'The technical backbone that keeps your sends out of spam.',
    description:
      'We architect multi-domain, multi-mailbox sending infrastructure capable of 1,000+ daily sends per campaign without burning your primary domain — built on Google Workspace, Microsoft 365 or dedicated SMTPs.',
    benefits: [
      'Protect your primary domain reputation',
      'Scale volume without spam folder hits',
      'Resilient setup that survives bounces',
    ],
  },
  {
    slug: 'email-warmup-setup',
    title: 'Email Warmup Setup',
    short: 'Reputation building so your inbox placement stays above 90%.',
    description:
      'We warm new domains and mailboxes with intelligent ramp-up schedules using premium warmup tools, then maintain ongoing reputation monitoring so deliverability stays strong long after launch.',
    benefits: [
      '4-6 week structured warmup plans',
      'Continuous deliverability monitoring',
      'Inbox placement >90% on launch',
    ],
  },
  {
    slug: 'data-enrichment',
    title: 'Data Enrichment',
    short: 'Turn thin lists into rich, sales-ready intelligence.',
    description:
      'We enrich your existing lists or freshly built ones with verified email, direct dial, LinkedIn URL, tech stack, headcount, funding, and 30+ other firmographic and technographic data points.',
    benefits: [
      'Multi-source waterfall enrichment',
      'Up to 95% match rates',
      'Sales-ready data, no manual cleaning',
    ],
  },
  {
    slug: 'email-verification',
    title: 'Email Verification',
    short: 'Bounce rates under 2% — protecting your sending reputation.',
    description:
      'Every email in your list is validated through SMTP-level verification before sending, so invalid and risky addresses never touch your domain. We use a stack of 3 providers for maximum accuracy.',
    benefits: [
      'Bounce rates kept under 2%',
      'Reputation protected at scale',
      'Cleaner lists, better deliverability',
    ],
  },
  {
    slug: 'catch-all-email-verification',
    title: 'Catch-All Email Verification',
    short: 'Confidently send to catch-all domains without burning your sender score.',
    description:
      'Catch-all addresses normally come back as "unknown" — risky to send. Our advanced multi-step catch-all verification process validates them with up to 85% accuracy so you can safely include them in your campaigns.',
    benefits: [
      'Unlock previously unusable lists',
      'Up to 85% catch-all accuracy',
      'Volume protection on every send',
    ],
  },
  {
    slug: 'email-finding',
    title: 'Email Finding',
    short: 'Find verified business emails for any decision-maker.',
    description:
      'Bulk or one-by-one — we source verified, deliverable B2B email addresses for the exact decision-makers you want to reach, with confidence scores and source citations on every record.',
    benefits: [
      'Verified contacts only, no guessing',
      'Bulk and on-demand workflows',
      '95%+ deliverability on every record',
    ],
  },
] as const;

export type Service = (typeof services)[number];
