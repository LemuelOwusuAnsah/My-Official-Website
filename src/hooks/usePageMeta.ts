import { useEffect } from 'react'

type Meta = {
  title: string
  description?: string
  image?: string
}

const SITE = 'https://lemuelowusuansah.org'
const DEFAULT_IMAGE = `${SITE}/images/lemy-banner-desktop-light.svg`

function setMetaTag(selector: string, attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export function usePageMeta({ title, description, image }: Meta) {
  useEffect(() => {
    const fullTitle = title.includes('Lemuel') ? title : `${title} · Lemuel Owusu-Ansah`
    document.title = fullTitle

    if (description) {
      setMetaTag('meta[name="description"]', 'name', 'description', description)
      setMetaTag('meta[property="og:description"]', 'property', 'og:description', description)
      setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description)
    }

    const img = image ?? DEFAULT_IMAGE
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', fullTitle)
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', fullTitle)
    setMetaTag('meta[property="og:image"]', 'property', 'og:image', img)
    setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', img)

    const url = window.location.href
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = url

    setMetaTag('meta[property="og:url"]', 'property', 'og:url', url)
  }, [title, description, image])
}
