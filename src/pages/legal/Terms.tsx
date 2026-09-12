import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { usePageMeta } from '../../hooks/usePageMeta'
import { useReveal } from '../../hooks/useReveal'

const LAST_UPDATED = '2026-09-12'

export default function Terms() {
  usePageMeta({ title: 'Terms & Conditions', description: 'Terms governing the use of this site.' })
  const ref = useReveal<HTMLDivElement>()

  return (
    <div className="container-content py-16 md:py-24">
      <Link to="/" className="link-arrow mb-12 text-ink-muted dark:text-ink-muted-dark hover:text-ink dark:hover:text-ink-dark">
        <ArrowLeft size={14} /> Back to home
      </Link>

      <div ref={ref} className="reveal max-w-prose mx-auto">
        <p className="kicker mb-6"><span className="kicker-dot" />Legal</p>
        <h1 className="page-title mb-4">Terms &amp; Conditions</h1>
        <p className="font-mono text-2xs uppercase tracking-[0.14em] text-ink-faint dark:text-ink-faint-dark mb-12">
          Last updated: {LAST_UPDATED}
        </p>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-semibold mb-4">Acceptance</h2>
          <p className="font-sans text-base md:text-lg leading-relaxed text-ink-muted dark:text-ink-muted-dark">
            By using lemuelowusuansah.org, you agree to these terms. If you do not agree, please do not use the site.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-semibold mb-4">Who this site belongs to</h2>
          <p className="font-sans text-base md:text-lg leading-relaxed text-ink-muted dark:text-ink-muted-dark">
            This site is operated by Lemuel Owusu-Ansah, trading as Lans Multimedia, based in Accra, Ghana. Contact: <a href="mailto:hello@lemuelowusuansah.org" className="link">hello@lemuelowusuansah.org</a>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-semibold mb-4">Use of the site</h2>
          <p className="font-sans text-base md:text-lg leading-relaxed text-ink-muted dark:text-ink-muted-dark mb-3">
            You agree not to:
          </p>
          <ul className="space-y-3 font-sans text-base md:text-lg leading-relaxed text-ink-muted dark:text-ink-muted-dark">
            <li className="flex items-start gap-3"><span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-lemon dark:bg-lemon-dark flex-shrink-0" /><span>Attempt to break, overload, or interfere with the site</span></li>
            <li className="flex items-start gap-3"><span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-lemon dark:bg-lemon-dark flex-shrink-0" /><span>Scrape content for reuse in a commercial product without permission</span></li>
            <li className="flex items-start gap-3"><span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-lemon dark:bg-lemon-dark flex-shrink-0" /><span>Impersonate me or the studio</span></li>
            <li className="flex items-start gap-3"><span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-lemon dark:bg-lemon-dark flex-shrink-0" /><span>Use the site in any way that is illegal in Ghana, the EU, the UK, the US, or your own jurisdiction</span></li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-semibold mb-4">Content and intellectual property</h2>
          <p className="font-sans text-base md:text-lg leading-relaxed text-ink-muted dark:text-ink-muted-dark">
            All written content, code, and design on this site are © Lemuel Owusu-Ansah unless otherwise noted. Photographs credited to Unsplash are used under the Unsplash license. You may quote short excerpts with a link back to this site. You may not republish whole pages.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-semibold mb-4">Web3 demos</h2>
          <p className="font-sans text-base md:text-lg leading-relaxed text-ink-muted dark:text-ink-muted-dark">
            The Wallet and Contracts pages are demonstrations only. All smart contract interactions run on the Sepolia testnet and involve no real funds. Nothing on this site is financial advice. If you connect a wallet, you do so at your own risk and on your own device.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-semibold mb-4">Client work</h2>
          <p className="font-sans text-base md:text-lg leading-relaxed text-ink-muted dark:text-ink-muted-dark">
            Freelance and contract engagements are governed by a separate written agreement. Nothing on this site constitutes an offer of work or a quote. Payment terms, delivery timelines, and intellectual property for client work are set out per project.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-semibold mb-4">Availability and changes</h2>
          <p className="font-sans text-base md:text-lg leading-relaxed text-ink-muted dark:text-ink-muted-dark">
            The site is provided as-is, without warranty. I may change, suspend, or remove any part of it at any time. These terms may be updated; the last-updated date will reflect any changes.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-2xl font-semibold mb-4">Limitation of liability</h2>
          <p className="font-sans text-base md:text-lg leading-relaxed text-ink-muted dark:text-ink-muted-dark">
            To the extent permitted by law, I am not liable for any indirect, incidental, or consequential loss arising from use of this site.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold mb-4">Governing law</h2>
          <p className="font-sans text-base md:text-lg leading-relaxed text-ink-muted dark:text-ink-muted-dark">
            These terms are governed by the laws of the Republic of Ghana. Any disputes are subject to the exclusive jurisdiction of the courts of Accra, Ghana.
          </p>
        </section>
      </div>
    </div>
  )
}
