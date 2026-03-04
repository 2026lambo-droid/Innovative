/**
 * Industry-aware placeholder images.
 * Prefers config.localImages (your own images in public/images/); falls back to Unsplash CDN.
 */

const UNSPLASH_BASE = 'https://images.unsplash.com/photo-'

function unsplashUrl(photoId, width = 800) {
  if (!photoId) return ''
  const w = Number(width) || 800
  return `${UNSPLASH_BASE}${photoId}?w=${w}&q=80`
}

const DEFAULT_IMAGE_IDS = {
  security: {
    hero: '1557597774-9d273605dfa9',
    services: {
      'Armed Security': '1557597774-9d273605dfa9',
      'Unarmed Security': '1589829545856-d10d557cf95f',
      'Mobile Patrol': '1544620347-c4fd4a3d5957',
      'Construction Site Security': '1504307651254-35680f356dfd',
      'Event Security': '1540575467063-178a50c2df87',
      'Residential & HOA Security': '1560518883-ce09059eeffa',
    },
    gallery: [
      '1589829545856-d10d557cf95f',
      '1544620347-c4fd4a3d5957',
      '1540575467063-178a50c2df87',
      '1504307651254-35680f356dfd',
      '1557597774-9d273605dfa9',
      '1560518883-ce09059eeffa',
    ],
  },
}

function getIndustryIds(config) {
  const industry = config?.industry || 'security'
  return config?.imageIds ?? DEFAULT_IMAGE_IDS[industry] ?? DEFAULT_IMAGE_IDS.security
}

export function buildImageUrl(query, w = 800) {
  const ids = DEFAULT_IMAGE_IDS.security
  const id = ids.gallery[0] || ids.hero
  return unsplashUrl(id, w)
}

/**
 * Hero background image. Uses config.localImages.hero when set, else Unsplash.
 */
export function getHeroImage(config) {
  const local = config?.localImages?.hero
  if (local) return local
  const ids = getIndustryIds(config)
  const id = config?.imageIds?.hero ?? ids.hero
  return unsplashUrl(id, 1920)
}

/**
 * Service card image by service title. Uses config.localImages.services[title] when set, else Unsplash.
 */
export function getServiceImage(serviceTitle, config) {
  const local = config?.localImages?.services?.[serviceTitle]
  if (local) return local
  const ids = getIndustryIds(config)
  const serviceIds = config?.imageIds?.services ?? ids.services
  const id = serviceIds[serviceTitle] ?? serviceIds['Armed Security'] ?? ids.hero
  return unsplashUrl(id, 800)
}

const GALLERY_TITLES = ['Security Team', 'Patrol Vehicle', 'Client Consultation', 'Security Officer', 'Access Control', 'Security Operations']
const GALLERY_CATEGORIES = ['Staff', 'Mobile Patrol', 'Events', 'Corporate', 'Access', 'Operations']

/**
 * Gallery items. Uses config.localImages.gallery when set (array of paths), else Unsplash.
 */
export function getGalleryImages(config, count = 6) {
  const localGallery = config?.localImages?.gallery
  const industry = config?.industry || 'security'
  const location = config?.primaryLocation || config?.addressLine || ''

  if (localGallery && Array.isArray(localGallery) && localGallery.length > 0) {
    return Array.from({ length: Math.min(count, localGallery.length) }, (_, i) => {
      const url = localGallery[i % localGallery.length]
      const title = GALLERY_TITLES[i % GALLERY_TITLES.length]
      const category = GALLERY_CATEGORIES[i % GALLERY_CATEGORIES.length]
      const alt = location ? `${title}, ${industry} in ${location}` : `${title}, ${industry}`
      return { id: i + 1, url, alt, title, category }
    })
  }

  const ids = getIndustryIds(config)
  const galleryIds = config?.imageIds?.gallery ?? ids.gallery
  return Array.from({ length: Math.min(count, galleryIds.length) }, (_, i) => {
    const id = galleryIds[i % galleryIds.length]
    const title = GALLERY_TITLES[i % GALLERY_TITLES.length]
    const category = GALLERY_CATEGORIES[i % GALLERY_CATEGORIES.length]
    const alt = location ? `${title}, ${industry} in ${location}` : `${title}, ${industry}`
    return {
      id: i + 1,
      url: unsplashUrl(id, 800),
      alt,
      title,
      category,
    }
  })
}

export function getAboutImage(config) {
  const local = config?.localImages?.hero
  if (local) return local
  const ids = getIndustryIds(config)
  const id = config?.imageIds?.about ?? ids.hero
  return unsplashUrl(id, 800)
}

export function getAreaImage(config, index = 0) {
  const localGallery = config?.localImages?.gallery
  if (localGallery && localGallery[index]) return localGallery[index]
  const ids = getIndustryIds(config)
  const galleryIds = ids.gallery || []
  const id = galleryIds[index % galleryIds.length] || ids.hero
  return unsplashUrl(id, 1200)
}
