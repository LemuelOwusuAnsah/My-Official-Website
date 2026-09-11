import { useTranslation } from 'react-i18next'
import { useReveal } from '../hooks/useReveal'
import { ArrowUpRight } from 'lucide-react'

const stats = [
  { num: '04', labelKey: 'stat_years', labelDefault: 'Years building' },
  { num: '09', labelKey: 'stat_ai_certs', labelDefault: 'AI certificates' },
  { num: '06', labelKey: 'stat_projects', labelDefault: 'Shipped projects' },
  { num: '05', labelKey: 'stat_langs', labelDefault: 'Site languages' },
]

export default function EditorialRow() {
  const { t } = useTranslation()
  const ref = useReveal<HTMLDivElement>()

  return (
    <section ref={ref} className="reveal border-t border-line dark:border-line-dark">
      <div className="container-content py-16 md:py-20">
        <div className="grid gap-px bg-line dark:bg-line-dark border-y border-line dark:border-line-dark md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.num} className="bg-canvas dark:bg-canvas-dark px-6 md:px-8 py-10">
              <p className="display text-5xl md:text-6xl text-ink dark:text-ink-dark mb-3">
                {s.num}
              </p>
              <p className="eyebrow">{t(s.labelKey, s.labelDefault)}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-6">
          <p className="font-sans text-sm text-ink-muted dark:text-ink-muted-dark max-w-xl">
            {t('editorial_note', 'A practice spanning development, publishing, music, and education — built from Accra.')}
          </p>
          <a
            href="https://github.com/LemuelOwusuAnsah"
            target="_blank"
            rel="noopener noreferrer"
            className="link-arrow"
          >
            {t('editorial_github', 'github.com/LemuelOwusuAnsah')}
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}
