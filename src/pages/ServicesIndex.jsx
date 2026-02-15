import { Link } from 'react-router-dom'
import { SEO } from '../components/SEO.jsx'
import { services } from '../data/services.js'
import { siteConfig } from '../site.config.js'
import { getServiceImage } from '../utils/images.js'
import '../styles/services-grid.css'

export function ServicesIndex() {
  return (
    <>
      <SEO
        title="Services"
        description="Security patrol services: armed and unarmed officers, mobile patrol, construction site, event, and residential/HOA security. PPO #121274. San Jose and the Bay Area."
      />
      <section className="page-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Professional security patrol services for your business, site, or community.</p>
        </div>
      </section>
      <section className="services-grid-section section section--alt">
        <div className="container">
          <div className="services-grid">
            {services.map((service) => (
              <article key={service.slug} className="service-card">
                <div
                  className="service-card-image"
                  style={{ backgroundImage: `url(${getServiceImage(service.title, siteConfig)})` }}
                role="img"
                aria-label={`${service.title} – ${siteConfig.industry || 'service'} image`}
              ></div>
                <div className="service-card-body">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-desc">{service.shortDesc}</p>
                  <div className="service-card-actions">
                    <Link to={`/services/${service.slug}`} className="service-card-link">
                      Learn more
                    </Link>
                    <Link to="/contact" className="btn btn-ghost-dark service-card-btn">
                      Request quote
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
