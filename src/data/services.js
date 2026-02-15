export const services = [
  {
    slug: 'armed-security',
    title: 'Armed Security',
    shortDesc: 'Highly trained armed officers for high-risk environments and sensitive sites.',
    description: 'Our armed security personnel are highly trained and licensed for high-risk environments and sensitive sites. We provide professional armed protection when the situation demands an elevated level of security.',
    icon: '🛡️',
  },
  {
    slug: 'unarmed-security',
    title: 'Unarmed Security',
    shortDesc: 'Professional visible deterrence, access control, and on-site presence.',
    description: 'Professional unarmed security officers provide visible deterrence, access control, and on-site presence. Ideal for retail, corporate, and residential settings where a calm, authoritative presence is needed.',
    icon: '👤',
  },
  {
    slug: 'mobile-patrol',
    title: 'Mobile Patrol',
    shortDesc: 'Marked patrols, scheduled checks, and rapid response coverage.',
    description: 'Marked patrol vehicles conduct scheduled checks and provide rapid response coverage across your properties. Our mobile patrol services maximize visibility and deterrence while keeping costs efficient.',
    icon: '🚔',
  },
  {
    slug: 'construction-site-security',
    title: 'Construction Site Security',
    shortDesc: 'Prevent theft, trespassing, and vandalism on active job sites.',
    description: 'Protect your construction sites from theft, trespassing, and vandalism. Our officers secure equipment, materials, and premises so your projects stay on schedule and on budget.',
    icon: '🏗️',
  },
  {
    slug: 'event-security',
    title: 'Event Security',
    shortDesc: 'Crowd control, entry screening, and safety coordination for events.',
    description: 'Crowd control, entry screening, and safety coordination for concerts, corporate events, festivals, and private functions. We ensure a safe environment so your event runs smoothly.',
    icon: '🎫',
  },
  {
    slug: 'residential-hoa-security',
    title: 'Residential & HOA Security',
    shortDesc: 'Community patrols, gate monitoring, and resident safety support.',
    description: 'Community patrols, gate monitoring, and resident safety support for neighborhoods and HOAs. We help maintain a secure, welcoming environment for residents and visitors.',
    icon: '🏘️',
  },
]

export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug) ?? null
}
