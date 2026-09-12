import { useTranslation } from 'react-i18next'
import { useReveal } from '../hooks/useReveal'
import { useCountUp } from '../hooks/useCountUp'
import { ArrowUpRight } from 'lucide-react'

const stats = [
  { target: 4, labelKey: 'stat_years', labelDefault: 'Years building' },
  { target: 9, labelKey: 'stat_ai_certs', labelDefault: 'AI certificates' },
  { target: 6, labelKey: 'stat_projects', labelDefault: 'Shipped projects' },
  { target: 5, labelKey: 'stat_langs', labelDefault: 'Site languages' },
]

function Stat({ target, labelKey, labelDefault }: { target: number; labelKey: string; labelDefault: string }) {
  const { t } = useTranslation()
  const { value, ref } = useCountUp(target)
  return (
    <div ref={ref} className="bg-canvas dark:bg-canvas-dark px-6 md:px-8 py-10">
      <p className="display text-5xl md:text-6xl text-ink dark:text-ink-dark mb-3 tabular-nums">
        {String(value).padStart(2, '0')}
      </p>
      <p className="eyebrow">{t(labelKey, labelDefault)}</p>
    </div>
  )
}

export default function EditorialRow() {
  const { t } = useTranslation()
  const ref = useReveal<HTMLDivElement>()
  return (
    <section ref={ref} className="reveal border-t border-line dark:border-line-dark">
      <div className="container-content py-16 md:py-20">
        <div className="grid gap-px bg-line dark:bg-line-dark border-y border-line dark:border-line-dark md:grid-cols-4">
          {stats.map((s) => (
            <Stat key={s.labelKey} target={s.target} labelKey={s.labelKey} labelDefault={s.labelDefault} />
          ))}
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-6">
          <p className="font-sans text-sm text-ink-muted dark:text-ink-muted-dark max-w-xl">
            {t('editorial_note', 'A practice spanning development, publishing, music, and education — built from Accra.')}
          </p>
          <a href="https://github.com/LemuelOwusuAnsah" target="_blank" rel="noopener noreferrer" className="link-arrow">
            {t('editorial_github', 'github.com/LemuelOwusuAnsah')}
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}
