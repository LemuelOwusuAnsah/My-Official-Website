import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, ExternalLink } from 'lucide-react'
import { usePageMeta } from '../hooks/usePageMeta'
import { useReveal } from '../hooks/useReveal'
import { getCaseStudy, caseStudies } from '../content/caseStudies'

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>()
  const cs = slug ? getCaseStudy(slug) : undefined
  const heroRef = useReveal<HTMLDivElement>()
  const bodyRef = useReveal<HTMLDivElement>()
  const relatedRef = useReveal<HTMLDivElement>()

  usePageMeta({
    title: cs ? cs.title : 'Case study',
    description: cs?.pitch,
  })

  if (!cs) {
    return (
      <div className="container-content py-24 text-center">
        <h1 className="page-title mb-8">Case study not found</h1>
        <Link to="/work" className="link-arrow">
          <ArrowLeft size={14} /> Back to work
        </Link>
      </div>
    )
  }

  const others = caseStudies.filter((c) => c.slug !== cs.slug)

  return (
    <article className="container-content py-16 md:py-24">
      <Link
        to="/work"
        className="link-arrow mb-12 text-ink-muted dark:text-ink-muted-dark hover:text-ink dark:hover:text-ink-dark"
      >
        <ArrowLeft size={14} /> Back to work
      </Link>

      <div ref={heroRef} className="reveal max-w-4xl mb-20">
        <div className="flex items-center gap-3 mb-6">
          <span className={`font-mono text-2xs uppercase tracking-[0.14em] ${cs.accent.text}`}>
            {cs.tag}
          </span>
          {cs.status === 'in-progress' && (
            <span className="font-mono text-2xs uppercase tracking-[0.14em] text-orange dark:text-orange-dark">
              · In progress
            </span>
          )}
        </div>

        <h1 className="page-title mb-6">{cs.title}</h1>
        <p className="font-sans text-lg md:text-xl text-ink-muted dark:text-ink-muted-dark leading-relaxed max-w-2xl mb-10">
          {cs.pitch}
        </p>

        <div className="flex flex-wrap gap-3 mb-12">
          <a
            href={cs.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-button px-6 py-3 font-medium text-sm bg-ink text-canvas dark:bg-ink-dark dark:text-canvas-dark transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
          >
            <ExternalLink size={15} />
            {cs.status === 'shipped' ? 'Open live app' : 'View progress'}
          </a>
          {cs.repoUrl && (
            <a
              href={cs.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-button px-6 py-3 font-medium text-sm border border-line dark:border-line-dark text-ink dark:text-ink-dark transition-all duration-200 hover:-translate-y-0.5 hover:border-ink dark:hover:border-ink-dark"
            >
              View source
              <ArrowUpRight size={15} />
            </a>
          )}
        </div>

        <div className="rule mb-8" />
        <p className="eyebrow mb-4">Stack</p>
        <ul className="flex flex-wrap gap-2">
          {cs.stack.map((s) => (
            <li key={s} className="tag">{s}</li>
          ))}
        </ul>
      </div>

      <div ref={bodyRef} className="reveal max-w-prose mx-auto mb-24">
        {cs.sections.map((section) => (
          <section key={section.heading} className="mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight mb-5">
              {section.heading}
            </h2>
            <p className="font-sans text-base md:text-lg leading-relaxed text-ink-muted dark:text-ink-muted-dark">
              {section.body}
            </p>
          </section>
        ))}

        {cs.roadmap && (
          <section className={`relative overflow-hidden rounded-surface ${cs.accent.bg} ${cs.accent.text} p-8 md:p-12 mt-16`}>
            <div className={`absolute top-0 right-0 w-48 h-48 rounded-full border ${cs.accent.ring} opacity-40 -translate-y-16 translate-x-16`} />
            <div className="relative z-10">
              <p className={`font-mono text-2xs uppercase tracking-[0.14em] mb-4 ${cs.accent.muted}`}>
                What's coming next
              </p>
              <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight mb-6">
                {cs.roadmap.heading}
              </h2>
              <ul className="space-y-3">
                {cs.roadmap.items.map((item) => (
                  <li key={item} className={`flex items-start gap-3 font-sans text-sm md:text-base leading-relaxed ${cs.accent.muted}`}>
                    <span className={`mt-2 w-1.5 h-1.5 rounded-full bg-current flex-shrink-0`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </div>

      {others.length > 0 && (
        <section ref={relatedRef} className="reveal max-w-6xl mx-auto">
          <div className="rule mb-8" />
          <p className="eyebrow mb-10">Other case studies</p>
          <div className="grid gap-5 md:grid-cols-2">
            {others.map((o) => (
              <Link
                key={o.slug}
                to={`/work/${o.slug}`}
                className={`group relative overflow-hidden rounded-surface ${o.accent.bg} ${o.accent.text} p-8 md:p-10 min-h-[200px] flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl will-change-transform`}
              >
                <div className={`absolute -bottom-16 -right-16 w-56 h-56 rounded-full border ${o.accent.ring} opacity-40 transition-transform duration-700 group-hover:scale-110`} />
                <div className="relative z-10 flex flex-col h-full">
                  <span className={`font-mono text-2xs uppercase tracking-[0.14em] mb-6 ${o.accent.muted}`}>
                    {o.tag}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight mb-3">
                    {o.title}
                  </h3>
                  <p className={`font-sans text-sm md:text-base leading-relaxed mb-6 ${o.accent.muted}`}>
                    {o.pitch}
                  </p>
                  <span className={`mt-auto inline-flex items-center gap-2 font-mono text-2xs uppercase tracking-[0.14em] transition-all duration-300 group-hover:gap-3 ${o.accent.muted}`}>
                    Read case study <ArrowUpRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  )
}
