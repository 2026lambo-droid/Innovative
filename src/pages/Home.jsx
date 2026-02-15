import { SEO } from '../components/SEO.jsx'
import { Hero } from '../components/Hero.jsx'
import { ServicesGrid } from '../components/ServicesGrid.jsx'
import { siteConfig } from '../site.config.js'

export function Home() {
  return (
    <>
      <SEO
        title="Home"
        description={`${siteConfig.companyName} – ${siteConfig.tagline}. ${siteConfig.serviceAreaDescription} ${siteConfig.license}. Call ${siteConfig.phone}.`}
      />
      <Hero
        title="Innovative Security Solutions"
        subtitle="Professional Security Patrol Services in San Jose & the Bay Area"
        supportLine={`${siteConfig.license} • ${siteConfig.motto} • 15+ Years Experience`}
        primaryCtaText="Request a Security Consultation"
      />
      <ServicesGrid />
    </>
  )
}
