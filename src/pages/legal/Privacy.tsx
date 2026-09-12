import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { usePageMeta } from '../../hooks/usePageMeta'
import { useReveal } from '../../hooks/useReveal'

const LAST_UPDATED = '2026-09-12'

export default function Privacy() {
  const { t } = useTranslation()
  usePageMeta({ title: 'Privacy Policy', description: 'How this site handles your data.' })
  const ref = useReveal<HTMLDivElement>()

  return (
    <div className="container-content py-16 md:py-24">
      <Link to="/" className="link-arrow mb-12 text-ink-muted dark:text-ink-muted-dark hover:text-ink dark:hover:text-ink-dark">
        <ArrowLeft size={14} /> {t('legal_back_home', 'Back to home')}
      </Link>

      <div ref={ref} className="reveal max-w-prose mx-auto">
        <p className="kicker mb-6"><span className="kicker-dot" />Legal</p>
        <h1 className="page-title mb-4">{t('legal_privacy_title')}</h1>
        <p className="font-mono text-2xs uppercase tracking-[0.14em] text-ink-faint dark:text-ink-faint-dark mb-12">
          {t('legal_updated')}: {LAST_UPDATED}
        </p>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-semibold mb-4">What this covers</h2>
          <p className="font-sans text-base md:text-lg leading-relaxed text-ink-muted dark:text-ink-muted-dark">
            This is the personal website of Lemuel Owusu-Ansah, operated from Accra, Ghana. It exists to show my work, host my writing, and let people get in touch. This page explains what data is collected when you visit, why, and what your rights are.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-semibold mb-4">What is collected</h2>
          <ul className="space-y-3 font-sans text-base md:text-lg leading-relaxed text-ink-muted dark:text-ink-muted-dark">
            <li className="flex items-start gap-3"><span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-lemon dark:bg-lemon-dark flex-shrink-0" /><span><strong className="font-semibold text-ink dark:text-ink-dark">Contact form:</strong> your name, email, subject, and message — sent to me via email so I can reply.</span></li>
            <li className="flex items-start gap-3"><span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-lemon dark:bg-lemon-dark flex-shrink-0" /><span><strong className="font-semibold text-ink dark:text-ink-dark">Analytics:</strong> anonymised page views and referrers, if you accept analytics cookies. No personally identifying information.</span></li>
            <li className="flex items-start gap-3"><span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-lemon dark:bg-lemon-dark flex-shrink-0" /><span><strong className="font-semibold text-ink dark:text-ink-dark">Local storage:</strong> your theme preference (light/dark) and language choice. Stored on your device only.</span></li>
            <li className="flex items-start gap-3"><span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-lemon dark:bg-lemon-dark flex-shrink-0" /><span><strong className="font-semibold text-ink dark:text-ink-dark">Web3 demo:</strong> if you connect a wallet on the Wallet page, your wallet address is read directly from your browser to that page. It is never sent to any server run by this site.</span></li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-semibold mb-4">What is not collected</h2>
          <p className="font-sans text-base md:text-lg leading-relaxed text-ink-muted dark:text-ink-muted-dark">
            No password, no seed phrase, no private key, no banking information, and no payment data is ever requested or stored by this site. If anyone claiming to be this site ever asks you for any of those, it is not me.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-semibold mb-4">Who sees your data</h2>
          <p className="font-sans text-base md:text-lg leading-relaxed text-ink-muted dark:text-ink-muted-dark mb-3">
            Only the infrastructure needed to run the site:
          </p>
          <ul className="space-y-3 font-sans text-base md:text-lg leading-relaxed text-ink-muted dark:text-ink-muted-dark">
            <li className="flex items-start gap-3"><span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-lemon dark:bg-lemon-dark flex-shrink-0" /><span><strong className="font-semibold text-ink dark:text-ink-dark">Netlify</strong> — hosts the site (US/EU infrastructure)</span></li>
            <li className="flex items-start gap-3"><span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-lemon dark:bg-lemon-dark flex-shrink-0" /><span><strong className="font-semibold text-ink dark:text-ink-dark">Cloudflare</strong> — DNS and edge caching</span></li>
            <li className="flex items-start gap-3"><span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-lemon dark:bg-lemon-dark flex-shrink-0" /><span><strong className="font-semibold text-ink dark:text-ink-dark">GitHub</strong> — source code and CI</span></li>
            <li className="flex items-start gap-3"><span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-lemon dark:bg-lemon-dark flex-shrink-0" /><span><strong className="font-semibold text-ink dark:text-ink-dark">Email providers</strong> — for delivering contact form messages to my inbox</span></li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-semibold mb-4">Your rights</h2>
          <p className="font-sans text-base md:text-lg leading-relaxed text-ink-muted dark:text-ink-muted-dark">
            You can ask me to delete any email you have sent, request a copy of anything I hold about you, or ask me not to keep it at all. Email <a href="mailto:hello@lemuelowusuansah.org" className="link">hello@lemuelowusuansah.org</a> and I will respond within 7 days.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-semibold mb-4">Children</h2>
          <p className="font-sans text-base md:text-lg leading-relaxed text-ink-muted dark:text-ink-muted-dark">
            This site is not directed at children under 13, and no data from children is knowingly collected.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold mb-4">Contact</h2>
          <p className="font-sans text-base md:text-lg leading-relaxed text-ink-muted dark:text-ink-muted-dark">
            Questions about this policy: <a href="mailto:hello@lemuelowusuansah.org" className="link">hello@lemuelowusuansah.org</a>
          </p>
        </section>
      </div>
    </div>
  )
}
