import fs from 'fs'
import path from 'path'

const SITE = 'https://lemuelowusuansah.org'
const POSTS_FILE = 'src/content/posts.ts'
const OUT_DIR = 'public/blog'
const EN = JSON.parse(fs.readFileSync('src/locales/en.json', 'utf8'))

const src = fs.readFileSync(POSTS_FILE, 'utf8')
const matches = [...src.matchAll(/slug:\s*'([^']+)'[\s\S]*?titleKey:\s*'([^']+)'[\s\S]*?excerptKey:\s*'([^']+)'[\s\S]*?cover:\s*'([^']+)'/g)]

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

function absoluteUrl(u) {
  return u.startsWith('http') ? u : `${SITE}${u}`
}

let count = 0
for (const [, slug, titleKey, excerptKey, cover] of matches) {
  const title = EN[titleKey] ?? slug
  const description = EN[excerptKey] ?? ''
  const image = absoluteUrl(cover)
  const url = `${SITE}/blog/${slug}`
  const appPath = `/blog/${slug}`

  const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${esc(title)} · Lemuel Owusu-Ansah</title>
  <meta name="description" content="${esc(description)}" />
  <link rel="canonical" href="${url}" />

  <meta property="og:type" content="article" />
  <meta property="og:url" content="${url}" />
  <meta property="og:site_name" content="Lemuel Owusu-Ansah" />
  <meta property="og:title" content="${esc(title)}" />
  <meta property="og:description" content="${esc(description)}" />
  <meta property="og:image" content="${image}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${esc(title)}" />
  <meta name="twitter:description" content="${esc(description)}" />
  <meta name="twitter:image" content="${image}" />
</head>
<body>
  <p>Loading <a href="${appPath}">${esc(title)}</a>…</p>
  <script>
    // Only redirect humans, not social crawlers
    var ua = navigator.userAgent || '';
    if (!/bot|crawler|spider|facebook|whatsapp|twitter|linkedin|slack|discord|telegram/i.test(ua)) {
      window.location.replace('${appPath}');
    }
  </script>
</body>
</html>`

  const dir = path.join(OUT_DIR, slug)
  fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(path.join(dir, 'index.html'), html)
  count++
}

console.log(`✓ Generated ${count} blog post HTML files`)
