import fs from 'fs'
import path from 'path'
import translate from 'translate'

const LOCALES_DIR = './src/locales'
const SOURCE = 'en'

const targets = {
  fr: 'fr',
  es: 'es',
  de: 'de',
  po: 'pt',
}

const SKIP_PATTERNS = [
  /^cert_/i,
  /^cert_issuer_/i,
  /^cert_group_/i,
  /^fs_lang_/i,
  /^fs_lamp_/i,
  /^fs_front_/i,
  /^fs_back_/i,
  /^fs_deploy_/i,
  /^fs_tools_/i,
  /^skill_tech_/i,
]

function shouldSkip(key, value) {
  if (typeof value !== 'string') return true
  if (value.length < 2) return true
  return SKIP_PATTERNS.some((rx) => rx.test(key))
}

async function run() {
  const source = JSON.parse(fs.readFileSync(path.join(LOCALES_DIR, `${SOURCE}.json`), 'utf8'))

  for (const [file, lang] of Object.entries(targets)) {
    const targetPath = path.join(LOCALES_DIR, `${file}.json`)
    const existing = fs.existsSync(targetPath)
      ? JSON.parse(fs.readFileSync(targetPath, 'utf8'))
      : {}

    const output = { ...existing }
    let translated = 0
    let skipped = 0

    console.log(`\n🌍 Translating → ${file} (${lang})...`)

    for (const [key, value] of Object.entries(source)) {
      if (existing[key] && existing[key] !== value && typeof existing[key] === 'string') {
        output[key] = existing[key]
        continue
      }

      if (shouldSkip(key, value)) {
        output[key] = value
        skipped++
        continue
      }

      try {
        const result = await translate(value, { from: 'en', to: lang })
        output[key] = result
        translated++
        process.stdout.write('.')
      } catch (err) {
        console.warn(`\n⚠ Failed: ${key} — ${err.message}`)
        output[key] = value
      }
    }

    fs.writeFileSync(targetPath, JSON.stringify(output, null, 2))
    console.log(`\n  ✓ ${file}.json — ${translated} translated, ${skipped} skipped`)
  }

  console.log('\n✅ All locales updated.')
}

run().catch((e) => {
  console.error(e)
  process.exit(1)
})
