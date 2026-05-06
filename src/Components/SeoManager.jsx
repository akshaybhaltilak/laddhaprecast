import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SITE_URL = 'https://www.laddhaprecast.co.in'
const DEFAULT_IMAGE = 'https://www.laddhaprecast.co.in/yash.png'
const SITE_NAME = 'Laddha Precast Industries'

const routeSeo = {
  '/': {
    title: 'Laddha Precast Industries | Precast Concrete Manufacturer in Akola',
    description:
      'Laddha Precast Industries is a trusted precast concrete manufacturer in Akola, Maharashtra for RCC pipes, U drains, box culverts, manholes, septic tanks and custom precast products.',
    keywords:
      'laddha precast, laddha precast akola, precast in akola, precast concrete manufacturer akola, rcc pipes akola',
  },
  '/about': {
    title: 'About Laddha Precast Industries | Precast Company in Akola',
    description:
      'Know the 40+ year legacy of Laddha Precast Industries in Akola, Maharashtra and our leadership in durable precast concrete manufacturing.',
    keywords: 'about laddha precast, precast company akola, precast concrete industry maharashtra',
  },
  '/products': {
    title: 'Precast Concrete Products | RCC Pipes, U Drains, Box Culverts | Laddha Precast',
    description:
      'Explore Laddha Precast product range in Akola: RCC pipes, precast U drains, box culverts, jacking pipes, manholes, septic tanks and customized precast solutions.',
    keywords: 'rcc pipes akola, precast u drain, box culvert manufacturer, precast products akola',
  },
  '/applications': {
    title: 'Precast Concrete Applications | Infrastructure Solutions | Laddha Precast',
    description:
      'Laddha Precast serves roadways, railways, telecom, water and housing sectors with high-strength precast concrete solutions across Akola and Maharashtra.',
    keywords: 'precast applications, infrastructure precast solutions, precast concrete maharashtra',
  },
  '/clients': {
    title: 'Our Clients | Laddha Precast Industries Akola',
    description:
      'Laddha Precast is trusted by government projects, municipal bodies, developers and infrastructure contractors for reliable precast concrete products.',
    keywords: 'laddha precast clients, precast supplier akola, infrastructure precast partner',
  },
  '/contact': {
    title: 'Contact Laddha Precast Industries | Akola, Maharashtra',
    description:
      'Contact Laddha Precast Industries in Akola for RCC pipes, box culverts and precast concrete products. Call +91 9021133383 or email laddhaprecast@gmail.com.',
    keywords: 'contact laddha precast, precast in akola contact, rcc pipes manufacturer contact',
  },
  '/case-study': {
    title: 'Case Studies | Laddha Precast Industries',
    description:
      'Explore practical case studies of precast concrete solutions delivered by Laddha Precast Industries for infrastructure and construction projects.',
    keywords: 'precast case studies, rcc pipe project case study, infrastructure precast solutions',
  },
}

const setMeta = (name, content, isProperty = false) => {
  const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`
  let tag = document.head.querySelector(selector)

  if (!tag) {
    tag = document.createElement('meta')
    if (isProperty) {
      tag.setAttribute('property', name)
    } else {
      tag.setAttribute('name', name)
    }
    document.head.appendChild(tag)
  }

  tag.setAttribute('content', content)
}

const setJsonLd = (id, data) => {
  let script = document.getElementById(id)
  if (!script) {
    script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = id
    document.head.appendChild(script)
  }
  script.textContent = JSON.stringify(data)
}

const SeoManager = () => {
  const location = useLocation()

  useEffect(() => {
    const seo = routeSeo[location.pathname] || routeSeo['/']
    const canonicalUrl = `${SITE_URL}${location.pathname === '/' ? '' : location.pathname}`
    const pageName =
      location.pathname === '/'
        ? 'Home'
        : location.pathname.replace('/', '').replace('-', ' ').replace(/\b\w/g, (c) => c.toUpperCase())

    document.title = seo.title
    setMeta('description', seo.description)
    setMeta('keywords', seo.keywords)
    setMeta('robots', 'index, follow')
    setMeta('googlebot', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1')

    setMeta('og:title', seo.title, true)
    setMeta('og:description', seo.description, true)
    setMeta('og:type', 'website', true)
    setMeta('og:url', canonicalUrl, true)
    setMeta('og:image', DEFAULT_IMAGE, true)
    setMeta('og:site_name', SITE_NAME, true)
    setMeta('og:locale', 'en_IN', true)

    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', seo.title)
    setMeta('twitter:description', seo.description)
    setMeta('twitter:image', DEFAULT_IMAGE)
    setMeta('twitter:site', '@laddhaprecast')

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', canonicalUrl)

    let hreflang = document.head.querySelector('link[rel="alternate"][hreflang="en-IN"]')
    if (!hreflang) {
      hreflang = document.createElement('link')
      hreflang.setAttribute('rel', 'alternate')
      hreflang.setAttribute('hreflang', 'en-IN')
      document.head.appendChild(hreflang)
    }
    hreflang.setAttribute('href', canonicalUrl)

    setJsonLd('website-schema', {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
      inLanguage: 'en-IN',
    })

    setJsonLd('organization-schema', {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      logo: DEFAULT_IMAGE,
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+91-9021133383',
          contactType: 'customer service',
          areaServed: 'IN',
          availableLanguage: ['en', 'hi', 'mr'],
        },
      ],
    })

    setJsonLd('breadcrumb-schema', {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: SITE_URL,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: pageName,
          item: canonicalUrl,
        },
      ],
    })
  }, [location.pathname])

  return null
}

export default SeoManager
