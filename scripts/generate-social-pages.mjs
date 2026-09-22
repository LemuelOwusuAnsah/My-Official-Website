import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

const site = 'https://lemuelowusuansah.org'
const distDirectory = path.resolve('dist')
const source = await readFile('src/content/posts.ts', 'utf8')
const template = await readFile(path.join(distDirectory, 'index.html'), 'utf8')

const posts = [...source.matchAll(/\{\s*slug:\s*'([^']+)'[\s\S]*?cover:\s*'([^']+)'/g)]

for (const [, slug, cover] of posts) {
  const image = cover.startsWith('http') ? cover : `${site}${cover}`
  const html = template
    .replace('<meta property="og:type" content="website" />', '<meta property="og:type" content="article" />')
    .replace('<meta property="og:url" content="https://lemuelowusuansah.org/" />', `<meta property="og:url" content="${site}/blog/${slug}" />`)
    .replace(/<meta property="og:image" content="[^"]+" \/>/, `<meta property="og:image" content="${image}" />`)
    .replace(/<meta name="twitter:image" content="[^"]+" \/>/, `<meta name="twitter:image" content="${image}" />`)

  const outputDirectory = path.join(distDirectory, 'blog', slug)
  await mkdir(outputDirectory, { recursive: true })
  await writeFile(path.join(outputDirectory, 'index.html'), html)
}

console.log(`Generated social metadata pages for ${posts.length} blog posts.`)