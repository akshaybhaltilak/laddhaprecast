import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SITE_URL = 'https://www.laddhaprecast.co.in'
const DEFAULT_IMAGE = 'https://www.laddhaprecast.co.in/vite.svg'

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

const SeoManager = () => {
  const location = useLocation()

  useEffect(() => {
    const seo = routeSeo[location.pathname] || routeSeo['/']
    const canonicalUrl = `${SITE_URL}${location.pathname === '/' ? '' : location.pathname}`

    document.title = seo.title
    setMeta('description', seo.description)
    setMeta('keywords', seo.keywords)
    setMeta('robots', 'index, follow')

    setMeta('og:title', seo.title, true)
    setMeta('og:description', seo.description, true)
    setMeta('og:type', 'website', true)
    setMeta('og:url', canonicalUrl, true)
    setMeta('og:image', DEFAULT_IMAGE, true)

    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', seo.title)
    setMeta('twitter:description', seo.description)
    setMeta('twitter:image', DEFAULT_IMAGE)

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', canonicalUrl)
  }, [location.pathname])

  return null
}

export default SeoManager
