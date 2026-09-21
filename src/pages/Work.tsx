import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { usePageMeta } from '../hooks/usePageMeta'
import { useReveal } from '../hooks/useReveal'
import { caseStudies } from '../content/caseStudies'

export default function Work() {
  usePageMeta({
    title: 'Work',
    description: 'Deep dives into how specific projects were designed, built, and shipped.',
  })
  const heroRef = useReveal<HTMLDivElement>()
  const listRef = useReveal<HTMLDivElement>()

  return (
    <div className="container-content py-16 md:py-24">
      <div ref={heroRef} className="reveal max-w-4xl mb-20">
        <p className="kicker mb-6"><span className="kicker-dot" />Case studies</p>
        <h1 className="page-title mb-8">How I build.</h1>
        <p className="font-sans text-lg md:text-xl text-ink-muted dark:text-ink-muted-dark leading-relaxed max-w-2xl">
          Deep dives into specific projects — the brief, the constraints, the decisions, and the trade-offs. If you want to know how I think, this is where to start.
        </p>
      </div>

      <div ref={listRef} className="reveal grid gap-6 md:grid-cols-2">
        {caseStudies.map((cs) => (
          <Link
            key={cs.slug}
            to={`/work/${cs.slug}`}
            className={`group relative overflow-hidden rounded-surface ${cs.accent.bg} ${cs.accent.text} p-8 md:p-10 min-h-[280px] flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl will-change-transform`}
          >
            <div className={`absolute -bottom-16 -right-16 w-56 h-56 rounded-full border ${cs.accent.ring} opacity-40 transition-transform duration-700 group-hover:scale-110`} />
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-start justify-between mb-8">
                <span className={`font-mono text-2xs uppercase tracking-[0.14em] ${cs.accent.muted}`}>
                  {cs.tag}
                  {cs.status === 'in-progress' && ' · In progress'}
                </span>
                <ArrowUpRight size={20} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                {cs.title}
              </h2>
              <p className={`font-sans text-sm md:text-base leading-relaxed mb-6 max-w-md ${cs.accent.muted}`}>
                {cs.pitch}
              </p>
              <span className={`mt-auto inline-flex items-center gap-2 font-mono text-2xs uppercase tracking-[0.14em] transition-all duration-300 group-hover:gap-3 ${cs.accent.muted}`}>
                Read case study <ArrowUpRight size={12} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
