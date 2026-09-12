import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

type Item = {
  key: string
  desc: string
  caseStudy?: string
  liveHref: string
  number: string
  bg: string
  text: string
  muted: string
  ring: string
}

const featured: Item[] = [
  { key: 'proj_body_name', desc: 'proj_body_desc', caseStudy: '/work/body-metrics', liveHref: 'https://lemuelowusuansah.github.io/Body-Metrics-01/', number: '01',
    bg: 'bg-[#c4b5fd] dark:bg-[#6d28d9]', text: 'text-[#2e1065] dark:text-[#ede9fe]', muted: 'text-[#4c1d95] dark:text-[#ddd6fe]', ring: 'border-[#2e1065]/15 dark:border-[#ede9fe]/15' },
  { key: 'proj_capital_name', desc: 'proj_capital_desc', caseStudy: '/work/capital-quest', liveHref: 'https://lemuelowusuansah.github.io/Capital-Quest/', number: '02',
    bg: 'bg-[#fb923c] dark:bg-[#c2410c]', text: 'text-[#431407] dark:text-[#ffedd5]', muted: 'text-[#7c2d12] dark:text-[#fed7aa]', ring: 'border-[#431407]/15 dark:border-[#ffedd5]/15' },
  { key: 'proj_wellness_name', desc: 'proj_wellness_desc', caseStudy: '/work/lans-wellness', liveHref: 'https://lemuelowusuansah.github.io/Lans-Wellness-Clinic--Frontend-/', number: '03',
    bg: 'bg-[#bef264] dark:bg-[#4d7c0f]', text: 'text-[#1a2e05] dark:text-[#ecfccb]', muted: 'text-[#365314] dark:text-[#d9f99d]', ring: 'border-[#1a2e05]/15 dark:border-[#ecfccb]/15' },
  { key: 'proj_convertoria_name', desc: 'proj_convertoria_desc', liveHref: 'https://lemuelowusuansah.github.io/Convertoria/', number: '04',
    bg: 'bg-[#fbbf24] dark:bg-[#b45309]', text: 'text-[#422006] dark:text-[#fef3c7]', muted: 'text-[#78350f] dark:text-[#fde68a]', ring: 'border-[#422006]/15 dark:border-[#fef3c7]/15' },
]

export default function FeaturedStrip() {
  const { t } = useTranslation()
  const ref = useReveal<HTMLDivElement>()

  return (
    <section ref={ref} className="reveal container-content pb-24 md:pb-32">
      <div className="rule mb-8" />
      <div className="flex items-end justify-between mb-10 gap-6 flex-wrap">
        <div>
          <p className="eyebrow mb-3">{t('featured_kicker', 'Selected work')}</p>
          <h2 className="section-title max-w-xl">{t('featured_title', 'Things I have shipped.')}</h2>
        </div>
        <Link to="/work" className="link-arrow text-ink-muted dark:text-ink-muted-dark hover:text-ink dark:hover:text-ink-dark">
          {t('featured_all', 'See all work')}
          <ArrowUpRight size={14} />
        </Link>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {featured.map((item) => {
          const classes = `group relative overflow-hidden rounded-surface ${item.bg} ${item.text} p-8 md:p-10 min-h-[240px] flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl will-change-transform`
          const inner = (
            <>
              <div className={`absolute -bottom-16 -right-16 w-56 h-56 rounded-full border ${item.ring} opacity-40 transition-transform duration-700 group-hover:scale-110`} />
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-10">
                  <span className={`font-mono text-2xs uppercase tracking-[0.14em] ${item.muted}`}>
                    {item.number} — {t('featured_project_label', 'Project')}
                  </span>
                  <ArrowUpRight size={20} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <h3 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-4">{t(item.key)}</h3>
                <p className={`font-sans text-sm md:text-base leading-relaxed max-w-md ${item.muted}`}>{t(item.desc)}</p>
                <span className={`mt-auto pt-6 inline-flex items-center gap-2 font-mono text-2xs uppercase tracking-[0.14em] transition-all duration-300 group-hover:gap-3 ${item.muted}`}>
                  {item.caseStudy ? t('featured_read_case_study', 'Read case study') : t('featured_try_app', 'Try the app')}
                  <ArrowUpRight size={12} />
                </span>
              </div>
            </>
          )

          if (item.caseStudy) {
            return (
              <Link key={item.key} to={item.caseStudy} className={classes}>
                {inner}
              </Link>
            )
          }
          return (
            <a key={item.key} href={item.liveHref} target="_blank" rel="noopener noreferrer" className={classes}>
              {inner}
            </a>
          )
        })}
      </div>
    </section>
  )
}
