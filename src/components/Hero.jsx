import { Link } from 'react-router-dom'
import { siteConfig } from '../site.config.js'
import { getHeroImage } from '../utils/images.js'
import '../styles/hero.css'

export function Hero({ title, subtitle, supportLine, primaryCtaText, showCta = true }) {
  const bgImage = getHeroImage(siteConfig)

  return (
    <section
      className="hero"
      style={{ '--hero-bg': `url(${bgImage})` }}
    >
      <div className="hero-overlay" aria-hidden />
      <div className="hero-inner">
        <h1 className="hero-title">{title ?? siteConfig.companyName}</h1>
        <p className="hero-subtitle">{subtitle ?? siteConfig.tagline}</p>
        {showCta && (
          <>
            {(supportLine || siteConfig.ratingDisplay || siteConfig.yearEstablished || siteConfig.insuredLabel) && (
              <div className="hero-trust">
                {supportLine && <span className="hero-chip">{supportLine}</span>}
                {!supportLine && siteConfig.ratingDisplay && (
                  <span className="hero-chip">
                    <span className="hero-chip-star" aria-hidden>★</span> {siteConfig.ratingDisplay}
                  </span>
                )}
                {!supportLine && siteConfig.yearEstablished && (
                  <span className="hero-chip">Since {siteConfig.yearEstablished}</span>
                )}
                {!supportLine && siteConfig.insuredLabel && (
                  <span className="hero-chip">{siteConfig.insuredLabel}</span>
                )}
              </div>
            )}
            <div className="hero-cta">
              <Link to="/contact" className="btn btn-primary">
                {primaryCtaText || 'Request a Security Consultation'}
              </Link>
              <a href={siteConfig.phoneHref} className="btn btn-ghost">
                Call {siteConfig.phone}
              </a>
            </div>
          </>
        )}
      </div>
      {showCta && (siteConfig.phone || siteConfig.businessHours) && (
        <aside className="hero-quick-info" aria-label="Quick contact info">
          <div className="hero-quick-info-inner">
            {siteConfig.phone && (
              <a href={siteConfig.phoneHref} className="hero-quick-info-item">
                <span className="hero-quick-info-label">Call</span>
                <span className="hero-quick-info-value">{siteConfig.phone}</span>
              </a>
            )}
            {siteConfig.businessHours && (
              <div className="hero-quick-info-item">
                <span className="hero-quick-info-label">Hours</span>
                <span className="hero-quick-info-value">{siteConfig.businessHours}</span>
              </div>
            )}
            <Link to="/contact" className="hero-quick-info-cta">Request a consultation</Link>
          </div>
        </aside>
      )}
    </section>
  )
}
