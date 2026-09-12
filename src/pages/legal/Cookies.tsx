import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { usePageMeta } from '../../hooks/usePageMeta'
import { useReveal } from '../../hooks/useReveal'

const LAST_UPDATED = '2026-09-12'

const cookies = [
  { name: 'lemy-theme', purpose: 'Remembers whether you prefer light or dark mode.', duration: '12 months', type: 'Essential' },
  { name: 'lemy-lang', purpose: 'Remembers the language you selected.', duration: '12 months', type: 'Essential' },
  { name: 'i18nextLng', purpose: 'Fallback language preference from the i18n library.', duration: '12 months', type: 'Essential' },
  { name: '_ga / _gid', purpose: 'Google Analytics — anonymised traffic measurement. Only set if you accept analytics cookies.', duration: '24 months', type: 'Analytics' },
]

export default function Cookies() {
  usePageMeta({ title: 'Cookie Policy', description: 'What cookies this site uses and why.' })
  const ref = useReveal<HTMLDivElement>()

  return (
    <div className="container-content py-16 md:py-24">
      <Link to="/" className="link-arrow mb-12 text-ink-muted dark:text-ink-muted-dark hover:text-ink dark:hover:text-ink-dark">
        <ArrowLeft size={14} /> Back to home
      </Link>

      <div ref={ref} className="reveal max-w-prose mx-auto">
        <p className="kicker mb-6"><span className="kicker-dot" />Legal</p>
        <h1 className="page-title mb-4">Cookie Policy</h1>
        <p className="font-mono text-2xs uppercase tracking-[0.14em] text-ink-faint dark:text-ink-faint-dark mb-12">
          Last updated: {LAST_UPDATED}
        </p>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-semibold mb-4">The short version</h2>
          <p className="font-sans text-base md:text-lg leading-relaxed text-ink-muted dark:text-ink-muted-dark">
            This site uses the minimum cookies needed to work properly. No advertising cookies. No cross-site tracking. Analytics are opt-in only, and anonymous.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-semibold mb-4">Cookies and local storage used</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-line dark:border-line-dark">
                  <th className="py-3 pr-4 font-mono text-2xs uppercase tracking-[0.1em] text-ink-faint dark:text-ink-faint-dark">Name</th>
                  <th className="py-3 pr-4 font-mono text-2xs uppercase tracking-[0.1em] text-ink-faint dark:text-ink-faint-dark">Purpose</th>
                  <th className="py-3 pr-4 font-mono text-2xs uppercase tracking-[0.1em] text-ink-faint dark:text-ink-faint-dark">Duration</th>
                  <th className="py-3 font-mono text-2xs uppercase tracking-[0.1em] text-ink-faint dark:text-ink-faint-dark">Type</th>
                </tr>
              </thead>
              <tbody>
                {cookies.map((c) => (
                  <tr key={c.name} className="border-b border-line dark:border-line-dark align-top">
                    <td className="py-4 pr-4 font-mono text-xs text-ink dark:text-ink-dark whitespace-nowrap">{c.name}</td>
                    <td className="py-4 pr-4 font-sans text-sm text-ink-muted dark:text-ink-muted-dark">{c.purpose}</td>
                    <td className="py-4 pr-4 font-sans text-sm text-ink-muted dark:text-ink-muted-dark whitespace-nowrap">{c.duration}</td>
                    <td className="py-4 font-mono text-2xs uppercase tracking-[0.1em] text-lemon dark:text-lemon-dark">{c.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-semibold mb-4">Managing cookies</h2>
          <p className="font-sans text-base md:text-lg leading-relaxed text-ink-muted dark:text-ink-muted-dark">
            You can clear all cookies and local storage for this site at any time from your browser settings. Clearing them will reset your theme and language preferences. You can also opt out of analytics by rejecting them in the cookie banner, or by using a browser extension such as uBlock Origin.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-semibold mb-4">Third parties</h2>
          <p className="font-sans text-base md:text-lg leading-relaxed text-ink-muted dark:text-ink-muted-dark">
            This site is hosted by Netlify and uses Cloudflare for DNS. Both may set their own technical cookies for security and performance. Fonts are loaded from Google Fonts, and photographs from Unsplash. None of these services receive personally identifying information from this site.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold mb-4">Questions</h2>
          <p className="font-sans text-base md:text-lg leading-relaxed text-ink-muted dark:text-ink-muted-dark">
            Email <a href="mailto:hello@lemuelowusuansah.org" className="link">hello@lemuelowusuansah.org</a>
          </p>
        </section>
      </div>
    </div>
  )
}
