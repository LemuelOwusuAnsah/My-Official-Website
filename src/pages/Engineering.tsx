import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { usePageMeta } from '../hooks/usePageMeta'
import { useReveal } from '../hooks/useReveal'

const principles = [
  {
    number: '01',
    title: 'Proven technology. Engineered with intent.',
    body: 'I reach for the stack that has earned its place — PHP, MySQL, React, TypeScript — and I use it deliberately. Proven tools ship faster, run cheaper, and hand off cleanly to the next developer. I add modern layers only when the problem genuinely calls for them. That is why my projects stay maintainable for years, not months.',
    bg: 'bg-[#bef264] dark:bg-[#4d7c0f]',
    text: 'text-[#1a2e05] dark:text-[#ecfccb]',
    muted: 'text-[#365314] dark:text-[#d9f99d]',
    ring: 'border-[#1a2e05]/20 dark:border-[#ecfccb]/20',
  },
  {
    number: '02',
    title: 'Type-safe from the first commit.',
    body: 'This entire portfolio — every API response, every function argument, every prop — is fully typed. When a change breaks something, it is caught at compile time, not in front of a client. TypeScript strict mode by default. The result: fewer bugs in production, faster reviews, and code that other engineers can trust on sight.',
    bg: 'bg-[#fbbf24] dark:bg-[#b45309]',
    text: 'text-[#422006] dark:text-[#fef3c7]',
    muted: 'text-[#78350f] dark:text-[#fde68a]',
    ring: 'border-[#422006]/20 dark:border-[#fef3c7]/20',
  },
  {
    number: '03',
    title: 'Fast everywhere. Not just where it is easy.',
    body: 'Every site I build loads in under two seconds — on fibre, on LTE, on a five-year-old laptop in Accra. Images get compressed, fonts get subsetted, JavaScript gets trimmed to what actually renders. Speed is not a feature added at the end; it is a decision made at the start of every line. High performance for high-end users, same performance for everyone else.',
    bg: 'bg-[#fb923c] dark:bg-[#c2410c]',
    text: 'text-[#431407] dark:text-[#ffedd5]',
    muted: 'text-[#7c2d12] dark:text-[#fed7aa]',
    ring: 'border-[#431407]/20 dark:border-[#ffedd5]/20',
  },
  {
    number: '04',
    title: 'The schema is the contract.',
    body: 'Interfaces change. Frameworks come and go. The database is the one thing that stays — so I design it first, normalise it carefully, and document every relationship before a line of UI is written. When the schema is right, the application is eighty percent built. That is how I ship software that a new team can pick up in an afternoon, years after I have moved on.',
    bg: 'bg-[#c4b5fd] dark:bg-[#6d28d9]',
    text: 'text-[#2e1065] dark:text-[#ede9fe]',
    muted: 'text-[#4c1d95] dark:text-[#ddd6fe]',
    ring: 'border-[#2e1065]/20 dark:border-[#ede9fe]/20',
  },
  {
    number: '05',
    title: 'Web3, engineered responsibly.',
    body: 'Every Web3 demo on this site runs on Sepolia testnet — zero real funds at risk. Wallet connections are read-only by default; writes require the user to sign deliberately. Smart contracts ship only after a security review is signed off. Web3 done right is not a novelty; it is infrastructure that protects the people using it.',
    bg: 'bg-[#00c4cc] dark:bg-[#0e7490]',
    text: 'text-[#083344] dark:text-[#cffafe]',
    muted: 'text-[#155e75] dark:text-[#a5f3fc]',
    ring: 'border-[#083344]/20 dark:border-[#cffafe]/20',
  },
  {
    number: '06',
    title: 'Automated end to end.',
    body: 'Every commit runs a full type-check, lint, unit test, and production build through GitHub Actions. Netlify deploys only when the pipeline is green. A red X on a commit means the problem never reached users. This discipline is not overhead — it is what lets me move fast without breaking things, and lets a team sleep at night.',
    bg: 'bg-[#a3e635] dark:bg-[#65a30d]',
    text: 'text-[#1a2e05] dark:text-[#ecfccb]',
    muted: 'text-[#365314] dark:text-[#d9f99d]',
    ring: 'border-[#1a2e05]/20 dark:border-[#ecfccb]/20',
  },
]

const standards = [
  { title: 'Complete handover.', text: 'Every client project ships with a written schema document, a README, and a live handover session — because software outlives the developer who wrote it.' },
  { title: 'Rollback-ready.', text: 'Every deployment has a rollback plan. If a change cannot be undone safely, it does not go out.' },
  { title: 'Milestone reviews.', text: 'Long engagements include a milestone review every eight weeks. Clarity is cheaper than rework — always.' },
  { title: 'Security first.', text: 'Web3 stays on testnet until a security review is signed off. Real funds deserve real scrutiny.' },
  { title: 'Tested on the right devices.', text: 'Every site is tested on a high-end setup, an average laptop, and a slow connection before launch. Speed and polish are non-negotiable.' },
  { title: 'Green builds only.', text: 'Every release passes type-check, tests, and a production build. No exceptions — this is how confidence is built.' },
]

const learning = [
  'Hardhat and Foundry for Solidity contract testing',
  'Real-time systems with WebSockets and Server-Sent Events',
  'Postgres query planning and index strategy',
  'Production-grade observability with OpenTelemetry',
]

export default function Engineering() {
  usePageMeta({
    title: 'Engineering',
    description: 'How I think about systems — the principles, standards, and craft behind everything I ship.',
  })
  const heroRef = useReveal<HTMLDivElement>()
  const listRef = useReveal<HTMLDivElement>()
  const stdRef = useReveal<HTMLDivElement>()
  const learningRef = useReveal<HTMLDivElement>()

  return (
    <div className="container-content py-16 md:py-24">
      <div ref={heroRef} className="reveal max-w-4xl mb-20">
        <p className="kicker mb-6"><span className="kicker-dot" />How I build</p>
        <h1 className="page-title mb-8">Engineering</h1>
        <p className="font-sans text-lg md:text-xl text-ink-muted dark:text-ink-muted-dark leading-relaxed max-w-2xl">
          Not a list of tools — a set of decisions. These are the principles I apply on every project, and the standards I hold myself to. If they match the way you build, we will work well together.
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

      <section ref={stdRef} className="reveal mb-24">
        <div className="rule mb-8" />
        <p className="eyebrow mb-4">Standards</p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-10 max-w-2xl">
          What every project gets, every time.
        </h2>
        <div className="grid gap-5 md:grid-cols-2">
          {standards.map((s) => (
            <div key={s.title} className="rounded-surface border border-line dark:border-line-dark bg-surface dark:bg-surface-dark p-6 md:p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">
              <h3 className="font-display text-lg md:text-xl font-semibold tracking-tight mb-3">{s.title}</h3>
              <p className="font-sans text-sm md:text-base leading-relaxed text-ink-muted dark:text-ink-muted-dark">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section ref={learningRef} className="reveal mb-16">
        <div className="rule mb-8" />
        <p className="eyebrow mb-10">Currently deepening</p>
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
