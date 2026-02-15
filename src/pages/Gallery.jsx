import { SEO } from '../components/SEO.jsx'
import { siteConfig } from '../site.config.js'
import { getGalleryImages } from '../utils/images.js'
import '../styles/gallery.css'

const GALLERY_COUNT = 6

export function Gallery() {
  const galleryItems = getGalleryImages(siteConfig, GALLERY_COUNT)

  return (
    <>
      <SEO
        title="Gallery"
        description={`Photo gallery of security patrol services and operations by ${siteConfig.companyName}. Patrol officers, vehicles, events, and more.`}
      />
      <section className="page-hero">
        <div className="container">
          <h1>Gallery</h1>
          <p>A selection of our security patrol services and operations.</p>
        </div>
      </section>
      <section className="gallery-section section section--alt">
        <div className="container">
          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <div key={item.id} className="gallery-item">
                <div className="gallery-item-image">
                  <img
                    src={item.url}
                    alt={item.alt}
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                </div>
                <div className="gallery-caption">
                  <strong>{item.title}</strong>
                  <span>{item.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
