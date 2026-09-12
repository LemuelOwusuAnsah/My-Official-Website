import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { usePageMeta } from '../hooks/usePageMeta'
import { useReveal } from '../hooks/useReveal'

const principles = [
  {
    number: '01',
    title: 'Ship boring technology that works.',
    body: 'PHP, MySQL, and Apache are not fashionable. They are reliable, cheap to run, and easy to hand off. When I build for a client who will still need the site in five years, boring wins. I save the fashionable tools for problems that actually need them.',
    bg: 'bg-[#bef264] dark:bg-[#4d7c0f]',
    text: 'text-[#1a2e05] dark:text-[#ecfccb]',
    muted: 'text-[#365314] dark:text-[#d9f99d]',
    ring: 'border-[#1a2e05]/20 dark:border-[#ecfccb]/20',
  },
  {
    number: '02',
    title: 'Types are cheaper than bugs.',
    body: 'Every file in this portfolio is TypeScript. Every API response, every function argument, every prop passed through a component. If a change breaks something, it breaks at compile time, not in front of a client. Strict mode by default.',
    bg: 'bg-[#fbbf24] dark:bg-[#b45309]',
    text: 'text-[#422006] dark:text-[#fef3c7]',
    muted: 'text-[#78350f] dark:text-[#fde68a]',
    ring: 'border-[#422006]/20 dark:border-[#fef3c7]/20',
  },
  {
    number: '03',
    title: 'Design for the worst connection.',
    body: 'Every site I build is tested on a five-year-old laptop, on 3G, in a room with the fan on. Images get compressed twice. Fonts get subsetted. JavaScript gets trimmed until it hurts. The result is a site that loads instantly on a good connection and remains usable on a bad one.',
    bg: 'bg-[#fb923c] dark:bg-[#c2410c]',
    text: 'text-[#431407] dark:text-[#ffedd5]',
    muted: 'text-[#7c2d12] dark:text-[#fed7aa]',
    ring: 'border-[#431407]/20 dark:border-[#ffedd5]/20',
  },
  {
    number: '04',
    title: 'The database is the contract.',
    body: 'Screens change. Frameworks come and go. The schema is the thing that stays. I design it first, normalise it until it stops hurting, and document every relationship. If the schema is right, the app is 80% built.',
    bg: 'bg-[#c4b5fd] dark:bg-[#6d28d9]',
    text: 'text-[#2e1065] dark:text-[#ede9fe]',
    muted: 'text-[#4c1d95] dark:text-[#ddd6fe]',
    ring: 'border-[#2e1065]/20 dark:border-[#ede9fe]/20',
  },
  {
    number: '05',
    title: 'Testnet only. Never mainnet.',
    body: 'All Web3 demos on this site run on Sepolia testnet. No real funds are ever touched. Wallet integrations are read-only by default; writes require explicit user confirmation. This is not just a rule — it is how I protect users from themselves.',
    bg: 'bg-[#00c4cc] dark:bg-[#0e7490]',
    text: 'text-[#083344] dark:text-[#cffafe]',
    muted: 'text-[#155e75] dark:text-[#a5f3fc]',
    ring: 'border-[#083344]/20 dark:border-[#cffafe]/20',
  },
  {
    number: '06',
    title: 'Automate the boring parts.',
    body: 'Every push to this repo runs a full type-check, lint, test, and build — via GitHub Actions. If any step fails, the commit gets a red X and I know before it reaches users. Netlify rebuilds the site only after CI passes. This saves me hours every month.',
    bg: 'bg-[#a3e635] dark:bg-[#65a30d]',
    text: 'text-[#1a2e05] dark:text-[#ecfccb]',
    muted: 'text-[#365314] dark:text-[#d9f99d]',
    ring: 'border-[#1a2e05]/20 dark:border-[#ecfccb]/20',
  },
]

const refusals = [
  { text: 'No mainnet deployments without a written security audit.' },
  { text: 'No handing over a client project without a schema document and a README.' },
  { text: 'No shipping a build that skips type-checking because "it works locally".' },
  { text: 'No client project that ships without a live contact route for after-delivery support.' },
  { text: 'No freelance work that runs over 3 months without a milestone review.' },
]

const learning = [
  'Hardhat and Foundry for Solidity contract testing',
  'Real-time systems with WebSockets and Server-Sent Events',
  'Postgres query planning and index strategy',
  'Production-grade observability with OpenTelemetry',
]

export default function Engineering() {
  const { t } = useTranslation()
  usePageMeta({
    title: 'Engineering',
    description: 'How I think about systems — the principles, decisions, and refusals behind everything I ship.',
  })
  const heroRef = useReveal<HTMLDivElement>()
  const listRef = useReveal<HTMLDivElement>()
  const refRef = useReveal<HTMLDivElement>()
  const learningRef = useReveal<HTMLDivElement>()

  return (
    <div className="container-content py-16 md:py-24">
      <div ref={heroRef} className="reveal max-w-4xl mb-20">
        <p className="kicker mb-6"><span className="kicker-dot" />How I build</p>
        <h1 className="page-title mb-8">Engineering</h1>
        <p className="font-sans text-lg md:text-xl text-ink-muted dark:text-ink-muted-dark leading-relaxed max-w-2xl">
          Not a list of tools — a set of decisions. These are the principles I actually apply, and the rules I refuse to break. If you disagree with any of them, that is fine; this is the shape of a practice, not a religion.
        </p>
      </div>

      <div ref={listRef} className="reveal space-y-6 mb-24">
        {principles.map((p) => (
          <article
            key={p.number}
            className={`relative overflow-hidden rounded-surface ${p.bg} ${p.text} p-8 md:p-12 transition-all duration-500 hover:shadow-2xl`}
          >
            <div className={`absolute top-0 right-0 w-40 h-40 rounded-full border ${p.ring} opacity-40 -translate-y-12 translate-x-12`} />
            <div className="relative z-10 grid gap-6 md:grid-cols-12 items-start">
              <div className="md:col-span-2">
                <p className={`font-mono text-2xs uppercase tracking-[0.14em] ${p.muted}`}>{p.number}</p>
              </div>
              <div className="md:col-span-10">
                <h2 className="font-display text-2xl md:text-4xl font-semibold tracking-tight mb-5 max-w-3xl">
                  {p.title}
                </h2>
                <p className={`font-sans text-base md:text-lg leading-relaxed max-w-3xl ${p.muted}`}>
                  {p.body}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <section ref={refRef} className="reveal mb-24">
        <div className="rule mb-8" />
        <p className="eyebrow mb-10">What I refuse to do</p>
        <ul className="space-y-5 max-w-3xl">
          {refusals.map((r) => (
            <li key={r.text} className="flex items-start gap-4 font-sans text-base md:text-lg text-ink-muted dark:text-ink-muted-dark">
              <span className="mt-2.5 w-2 h-2 rounded-full bg-orange dark:bg-orange-dark flex-shrink-0" />
              {r.text}
            </li>
          ))}
        </ul>
      </section>

      <section ref={learningRef} className="reveal mb-16">
        <div className="rule mb-8" />
        <p className="eyebrow mb-10">Currently learning</p>
        <ul className="grid gap-4 md:grid-cols-2 max-w-4xl">
          {learning.map((l) => (
            <li key={l} className="rounded-surface border border-line dark:border-line-dark bg-surface dark:bg-surface-dark p-5 font-sans text-base text-ink dark:text-ink-dark">
              {l}
            </li>
          ))}
        </ul>
      </section>

      <section className="reveal rule pt-12">
        <div className="grid gap-8 md:grid-cols-12 items-end">
          <div className="md:col-span-8">
            <p className="font-display text-2xl md:text-4xl font-semibold tracking-tight leading-tight mb-4">
              If this reads like someone you would work with, we should talk.
            </p>
            <p className="font-sans text-lg text-ink-muted dark:text-ink-muted-dark max-w-2xl">
              I take on freelance work year-round and am open to full-time roles.
            </p>
          </div>
          <div className="md:col-span-4 md:justify-self-end flex flex-wrap gap-3">
            <Link to="/hire" className="btn-accent">
              Hire me <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="btn-outline">
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
