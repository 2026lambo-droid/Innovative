/**
 * Site configuration – Innovative Security Solutions
 * Change industry + imageKeywords here to rebrand images site-wide.
 */
export const siteConfig = {
  companyName: 'Innovative Security Solutions',
  tagline: 'Professional Security Patrol Services',
  contactName: 'Frank Fielding',
  contactTitle: 'Operations Manager',
  license: 'PPO #121274',
  motto: 'Vigilantia Aeterna',
  phone: '(408) 500-5872',
  phoneHref: 'tel:+14085005872',
  email: 'frank@innovativesecuritysolutions.org',
  address: {
    street: '',
    city: 'San Jose',
    state: 'CA',
    zip: '',
  },
  addressLine: 'San Jose, California',
  primaryLocation: 'San Jose, California',
  serviceArea: 'Bay Area, California',
  social: {
    facebook: 'https://facebook.com/',
    instagram: 'https://instagram.com/',
    tiktok: 'https://tiktok.com/@',
  },
  businessHours: '24/7 availability for security patrol services',
  yearEstablished: 2009,
  ratingDisplay: '4.9',
  insuredLabel: 'PPO #121274',
  serviceAreaDescription: 'Security patrol services including armed and unarmed officers, mobile patrol, construction site security, event security, and residential/HOA patrol across San Jose and the Bay Area.',
  defaultMetaTitle: 'Innovative Security Solutions | Security Patrol Services San Jose',
  defaultMetaDescription: 'Security patrol services: armed & unarmed officers, mobile patrol, construction site, event, and residential/HOA security across San Jose and the Bay Area. PPO #121274.',

  /* Industry-aware images. Local images (in public/images/) take precedence when set. */
  industry: 'security',
  localImages: {
    hero: '/images/hero.png',
    services: {
      'Armed Security': '/images/security-guard.png',
      'Unarmed Security': '/images/access-control.png',
      'Mobile Patrol': '/images/mobile-patrol.png',
      'Construction Site Security': '/images/security-desk.png',
      'Event Security': '/images/security-consultation.png',
      'Residential & HOA Security': '/images/security-desk.png',
    },
    gallery: [
      '/images/hero.png',
      '/images/mobile-patrol.png',
      '/images/security-consultation.png',
      '/images/security-guard.png',
      '/images/access-control.png',
      '/images/security-desk.png',
    ],
  },
  imageKeywords: {
    hero: ['private security', 'security guard', 'night patrol', 'professional uniform'],
    services: {
      'Armed Security': ['armed security', 'security officer', 'professional guard'],
      'Unarmed Security': ['unarmed security', 'access control', 'security officer'],
      'Mobile Patrol': ['security patrol vehicle', 'night patrol', 'security car'],
      'Construction Site Security': ['construction site security', 'site patrol', 'security guard'],
      'Event Security': ['event security', 'crowd control', 'security team'],
      'Residential & HOA Security': ['residential security', 'gated community patrol', 'security officer'],
    },
    about: ['security team', 'operations center', 'security professionals'],
    gallery: ['security guard', 'patrol', 'access control', 'event security'],
    areas: ['San Jose skyline night', 'Bay Area city night', 'downtown skyline'],
  },
}
