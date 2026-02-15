import { siteConfig } from '../site.config.js'

/**
 * Injects LocalBusiness JSON-LD schema into the document.
 */
export function JsonLd() {
  const address = siteConfig.address || {}
  const sameAs = []
  if (siteConfig.social?.facebook) sameAs.push(siteConfig.social.facebook)
  if (siteConfig.social?.instagram) sameAs.push(siteConfig.social.instagram)
  if (siteConfig.social?.tiktok) sameAs.push(siteConfig.social.tiktok)

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.companyName || '',
    description: siteConfig.tagline || '',
    ...(siteConfig.phone && { telephone: siteConfig.phone }),
    ...(siteConfig.email && { email: siteConfig.email }),
    ...(siteConfig.serviceArea && { areaServed: siteConfig.serviceArea }),
    ...(sameAs.length > 0 && { sameAs }),
    ...(address.street || address.city ? {
      address: {
        '@type': 'PostalAddress',
        ...(address.street && { streetAddress: address.street }),
        ...(address.city && { addressLocality: address.city }),
        ...(address.state && { addressRegion: address.state }),
        ...(address.zip && { postalCode: address.zip }),
      },
    } : (siteConfig.addressLine && {
      address: {
        '@type': 'PostalAddress',
        addressLocality: siteConfig.addressLine,
      },
    })),
    ...(siteConfig.businessHours && { openingHours: siteConfig.businessHours }),
    ...(siteConfig.yearEstablished != null && { foundingDate: String(siteConfig.yearEstablished) }),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
