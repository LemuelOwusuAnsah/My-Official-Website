import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { usePageMeta } from '../hooks/usePageMeta'
import { useReveal } from '../hooks/useReveal'

const timeline = [
  { number: '01', titleKey: 'career_now_title', placeKey: 'career_now_place', yearKey: 'career_now_year', descKey: 'career_now_desc', current: true },
  { number: '02', titleKey: 'career_design_title', placeKey: 'career_design_place', yearKey: 'career_design_year', descKey: 'career_design_desc' },
  { number: '03', titleKey: 'career_web_design_title', placeKey: 'career_web_design_place', yearKey: 'career_web_design_year', descKey: 'career_web_design_desc' },
  { number: '04', titleKey: 'career_data_title', placeKey: 'career_data_place', yearKey: 'career_data_year', descKey: 'career_data_desc' },
  { number: '05', titleKey: 'career_student_title', placeKey: 'career_student_place', yearKey: 'career_student_year', descKey: 'career_student_desc' },
]

export default function Career() {
  const { t } = useTranslation()
  usePageMeta({ title: 'Career', description: 'From design to full-stack engineering — from Accra, Ghana.' })
  const heroRef = useReveal<HTMLDivElement>()
  const timelineRef = useReveal<HTMLDivElement>()
  const focusRef = useReveal<HTMLDivElement>()

  return (
    <div className="container-content py-16 md:py-24">
      <div ref={heroRef} className="reveal max-w-4xl mb-20">
        <p className="kicker mb-6"><span className="kicker-dot" />{t('career_script')}</p>
        <h1 className="page-title mb-8">{t('career_page_title')}</h1>
        <p className="font-sans text-lg md:text-xl text-ink-muted dark:text-ink-muted-dark leading-relaxed max-w-2xl">{t('career_intro')}</p>
      </div>

      <section ref={timelineRef} className="reveal mb-24">
        <div className="rule mb-8" />
        <p className="eyebrow mb-14">{t('career_timeline_title')}</p>
        <div className="space-y-4">
          {timeline.map((entry) => (
            <article key={entry.number} className="grid gap-6 md:grid-cols-12 items-start">
              <div className="md:col-span-3">
                <p className="font-mono text-2xs uppercase tracking-[0.14em] text-ink-faint dark:text-ink-faint-dark">{entry.number}</p>
                <p className="font-mono text-xs md:text-sm uppercase tracking-[0.08em] text-ink dark:text-ink-dark mt-1">{t(entry.yearKey)}</p>
              </div>
              <div className="md:col-span-9 rounded-surface border border-line dark:border-line-dark bg-surface dark:bg-surface-dark p-6 md:p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:ring-1 hover:ring-ink/10 dark:hover:ring-ink-dark/20">
                <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight mb-1">{t(entry.titleKey)}</h3>
                    <p className="font-sans text-sm text-ink-muted dark:text-ink-muted-dark">{t(entry.placeKey)}</p>
                  </div>
                  {entry.current && (
                    <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-2xs uppercase tracking-[0.1em] bg-lemon/10 dark:bg-lemon-dark/10 text-lemon dark:text-lemon-dark border border-lemon/30 dark:border-lemon-dark/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-lemon dark:bg-lemon-dark" />Current
                    </span>
                  )}
                </div>
                <p className="font-sans text-sm md:text-base leading-relaxed text-ink-muted dark:text-ink-muted-dark">{t(entry.descKey)}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section ref={focusRef} className="reveal">
        <div className="rule mb-8" />
        <div className="rounded-surface bg-[#bef264] dark:bg-[#4d7c0f] text-[#1a2e05] dark:text-[#ecfccb] p-10 md:p-16">
          <div className="grid gap-10 md:grid-cols-12 items-end">
            <div className="md:col-span-8">
              <p className="font-mono text-2xs uppercase tracking-[0.14em] mb-6 text-[#365314] dark:text-[#d9f99d]">Direction</p>
              <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">{t('career_focus_title')}</h2>
              <p className="font-sans text-lg md:text-xl leading-relaxed max-w-2xl text-[#365314] dark:text-[#d9f99d]">{t('career_focus_body')}</p>
            </div>
            <div className="md:col-span-4 flex flex-wrap gap-3 md:justify-self-end">
              <Link to="/work" className="inline-flex items-center gap-2 rounded-button px-6 py-3 font-medium text-sm bg-[#1a2e05] text-[#bef264] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
                {t('career_cta_work')}<ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-button px-6 py-3 font-medium text-sm border border-[#1a2e05]/30 text-[#1a2e05] dark:border-[#ecfccb]/30 dark:text-[#ecfccb] transition-all duration-200 hover:-translate-y-0.5">
                {t('career_cta_contact')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
