import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { usePageMeta } from '../hooks/usePageMeta'
import { useReveal } from '../hooks/useReveal'

const LAST_UPDATED = '2026-09-12'

const blocks = [
  {
    titleKey: 'now_building_title',
    bodyKey: 'now_building_body',
    bg: 'bg-[#bef264] dark:bg-[#4d7c0f]',
    text: 'text-[#1a2e05] dark:text-[#ecfccb]',
    muted: 'text-[#365314] dark:text-[#d9f99d]',
    ring: 'border-[#1a2e05]/20 dark:border-[#ecfccb]/20',
  },
  {
    titleKey: 'now_learning_title',
    bodyKey: 'now_learning_body',
    bg: 'bg-[#c4b5fd] dark:bg-[#6d28d9]',
    text: 'text-[#2e1065] dark:text-[#ede9fe]',
    muted: 'text-[#4c1d95] dark:text-[#ddd6fe]',
    ring: 'border-[#2e1065]/20 dark:border-[#ede9fe]/20',
  },
  {
    titleKey: 'now_reading_title',
    bodyKey: 'now_reading_body',
    bg: 'bg-[#fbbf24] dark:bg-[#b45309]',
    text: 'text-[#422006] dark:text-[#fef3c7]',
    muted: 'text-[#78350f] dark:text-[#fde68a]',
    ring: 'border-[#422006]/20 dark:border-[#fef3c7]/20',
  },
]

export default function Now() {
  const { t } = useTranslation()
  usePageMeta({
    title: 'Now',
    description: 'What I am doing right now — building, learning, reading, and open to.',
  })
  const heroRef = useReveal<HTMLDivElement>()
  const listRef = useReveal<HTMLDivElement>()
  const openRef = useReveal<HTMLDivElement>()

  return (
    <div className="container-content py-16 md:py-24">
      <div ref={heroRef} className="reveal max-w-4xl mb-20">
        <p className="kicker mb-6"><span className="kicker-dot" />{t('now_script')}</p>
        <h1 className="page-title mb-8">{t('now_page_title')}</h1>
        <p className="font-sans text-lg md:text-xl text-ink-muted dark:text-ink-muted-dark leading-relaxed max-w-2xl mb-4">
          {t('now_intro')}
        </p>
        <p className="font-mono text-2xs uppercase tracking-[0.14em] text-ink-faint dark:text-ink-faint-dark">
          {t('now_updated')}: {LAST_UPDATED}
        </p>
      </div>

      <div ref={listRef} className="reveal space-y-6 mb-20">
        {blocks.map((b) => (
          <article
            key={b.titleKey}
            className={`relative overflow-hidden rounded-surface ${b.bg} ${b.text} p-8 md:p-12 transition-all duration-500 hover:shadow-2xl`}
          >
            <div className={`absolute top-0 right-0 w-40 h-40 rounded-full border ${b.ring} opacity-40 -translate-y-12 translate-x-12`} />
            <div className="relative z-10 max-w-3xl">
              <h2 className="font-display text-2xl md:text-4xl font-semibold tracking-tight mb-5">
                {t(b.titleKey)}
              </h2>
              <p className={`font-sans text-base md:text-lg leading-relaxed ${b.muted}`}>
                {t(b.bodyKey)}
              </p>
            </div>
          </article>
        ))}
      </div>

      <section ref={openRef} className="reveal mb-16">
        <div className="rule mb-8" />
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <div className="rounded-surface bg-[#00c4cc] dark:bg-[#0e7490] text-[#083344] dark:text-[#cffafe] p-8">
            <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight mb-4">
              {t('now_open_title')}
            </h3>
            <p className="font-sans text-base leading-relaxed text-[#155e75] dark:text-[#a5f3fc]">
              {t('now_open_body')}
            </p>
          </div>
          <div className="rounded-surface bg-[#fb923c] dark:bg-[#c2410c] text-[#431407] dark:text-[#ffedd5] p-8">
            <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight mb-4">
              {t('now_not_open_title')}
            </h3>
            <p className="font-sans text-base leading-relaxed text-[#7c2d12] dark:text-[#fed7aa]">
              {t('now_not_open_body')}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link to="/hire" className="btn-accent">
            {t('now_cta')} <ArrowRight size={16} />
          </Link>
          <Link to="/contact" className="btn-outline">
            Contact
          </Link>
        </div>
      </section>
    </div>
  )
}
