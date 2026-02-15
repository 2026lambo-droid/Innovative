import { Link } from 'react-router-dom'
import { SEO } from '../components/SEO.jsx'
import { siteConfig } from '../site.config.js'
import '../styles/about.css'

export function About() {
  return (
    <>
      <SEO
        title="About Us"
        description={`${siteConfig.companyName} is a San Jose-based security patrol company led by Operations Manager Frank Fielding. Professional security patrol and protection services across the Bay Area. ${siteConfig.license}.`}
      />
      <section className="page-hero">
        <div className="container">
          <h1>About Us</h1>
          <p>Your trusted partner for professional security patrol services in the Bay Area.</p>
        </div>
      </section>
      <section className="about-content section section--alt">
        <div className="container about-grid">
          <div>
            <h2>Who We Are</h2>
            <p>
              Innovative Security Solutions is a San Jose-based security patrol company led by Operations Manager Frank Fielding.
              We provide professional security patrol and protection services across the Bay Area.
            </p>
            <p>
              Our mission is vigilance, professionalism, and consistent client communication. We are licensed under {siteConfig.license} and live by our motto: &ldquo;{siteConfig.motto}.&rdquo;
            </p>
          </div>
          <div>
            <h2>Why Choose Us</h2>
            <ul className="about-list">
              <li>Licensed – {siteConfig.license}</li>
              <li>Experienced leadership – Frank Fielding, Operations Manager</li>
              <li>Vigilant, professional, and responsive</li>
              <li>Serving San Jose and the greater Bay Area</li>
            </ul>
            <Link to="/contact" className="btn btn-primary">Get in touch</Link>
          </div>
        </div>
      </section>
    </>
  )
}
