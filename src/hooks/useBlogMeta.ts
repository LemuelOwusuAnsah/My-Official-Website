import { useEffect } from 'react'

const SITE = 'https://lemuelowusuansah.org'

function setMeta(property: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[property="${property}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('property', property)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export function useBlogMeta({
  title,
  description,
  image,
  slug,
}: {
  title: string
  description: string
  image: string
  slug: string
}) {
  useEffect(() => {
    const url = `${SITE}/blog/${slug}`
    const imageUrl = image.startsWith('http') ? image : `${SITE}${image}`

    setMeta('og:type', 'article')
    setMeta('og:url', url)
    setMeta('og:title', title)
    setMeta('og:description', description)
    setMeta('og:image', imageUrl)
    setMeta('og:image:width', '1200')
    setMeta('og:image:height', '630')

    let twitter = document.head.querySelector<HTMLMetaElement>('meta[name="twitter:card"]')
    if (!twitter) {
      twitter = document.createElement('meta')
      twitter.setAttribute('name', 'twitter:card')
      document.head.appendChild(twitter)
    }
    twitter.setAttribute('content', 'summary_large_image')

    let twitterTitle = document.head.querySelector<HTMLMetaElement>('meta[name="twitter:title"]')
    if (!twitterTitle) {
      twitterTitle = document.createElement('meta')
      twitterTitle.setAttribute('name', 'twitter:title')
      document.head.appendChild(twitterTitle)
    }
    twitterTitle.setAttribute('content', title)

    let twitterImage = document.head.querySelector<HTMLMetaElement>('meta[name="twitter:image"]')
    if (!twitterImage) {
      twitterImage = document.createElement('meta')
      twitterImage.setAttribute('name', 'twitter:image')
      document.head.appendChild(twitterImage)
    }
    twitterImage.setAttribute('content', imageUrl)

    // Article published time
    let published = document.head.querySelector<HTMLMetaElement>('meta[property="article:published_time"]')
    if (!published) {
      published = document.createElement('meta')
      published.setAttribute('property', 'article:published_time')
      document.head.appendChild(published)
    }
    published.setAttribute('content', new Date().toISOString())
  }, [title, description, image, slug])
}
