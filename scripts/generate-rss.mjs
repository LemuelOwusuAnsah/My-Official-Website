import fs from 'fs'
import path from 'path'

const SITE = 'https://lemuelowusuansah.org'
const OUT = 'public/rss.xml'

// Read locale file for post titles/excerpts
const en = JSON.parse(fs.readFileSync('src/locales/en.json', 'utf8'))

// Parse posts.ts to extract slugs + keys
const postsSrc = fs.readFileSync('src/content/posts.ts', 'utf8')
const postMatches = [...postsSrc.matchAll(/slug:\s*'([^']+)'[\s\S]*?titleKey:\s*'([^']+)'[\s\S]*?excerptKey:\s*'([^']+)'[\s\S]*?dateKey:\s*'([^']+)'[\s\S]*?cover:\s*'([^']+)'/g)]

function esc(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

const items = postMatches.map(([, slug, titleKey, excerptKey, dateKey, cover]) => {
  const title = en[titleKey] ?? slug
  const desc = en[excerptKey] ?? ''
  const date = en[dateKey] ?? new Date().toISOString().slice(0, 10)
  const url = `${SITE}/blog/${slug}`
  return `    <item>
      <title>${esc(title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(date).toUTCString()}</pubDate>
      <description>${esc(desc)}</description>
      <enclosure url="${cover}" type="image/jpeg" />
    </item>`
}).join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Lemuel Owusu-Ansah — Blog</title>
    <link>${SITE}/blog</link>
    <description>Thoughts on building software, running a studio, writing books, and doing all of it from Accra.</description>
    <language>en</language>
    <atom:link href="${SITE}/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`

fs.writeFileSync(OUT, xml)
console.log(`✓ rss.xml written with ${postMatches.length} items`)
