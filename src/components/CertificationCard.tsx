import { useTranslation } from 'react-i18next'
import { Award } from 'lucide-react'

type Props = {
  titleKey: string
  issuerKey: string
  year: string
  highlight?: boolean
}

export default function CertificationCard({ titleKey, issuerKey, year, highlight }: Props) {
  const { t } = useTranslation()
  return (
    <div
      className={`rounded-surface border p-6 transition-all duration-300 hover:-translate-y-0.5
                  ${
                    highlight
                      ? 'border-lemon/40 dark:border-lemon-dark/40 bg-lemon/5 dark:bg-lemon-dark/5'
                      : 'border-line dark:border-line-dark bg-surface dark:bg-surface-dark hover:border-ink dark:hover:border-ink-dark'
                  }`}
    >
      <div className="flex items-start gap-3 mb-4">
        <div className="inline-flex items-center justify-center w-8 h-8 rounded-button bg-lemon/15 dark:bg-lemon-dark/15 text-lemon dark:text-lemon-dark flex-shrink-0">
          <Award size={15} strokeWidth={1.75} />
        </div>
        <p className="font-sans font-semibold text-sm leading-snug pt-1">{t(titleKey)}</p>
      </div>
      <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.1em] pt-3 border-t border-line dark:border-line-dark">
        <span className="text-lemon dark:text-lemon-dark font-semibold">{t(issuerKey)}</span>
        <span className="text-ink-faint dark:text-ink-faint-dark">{year}</span>
      </div>
    </div>
  )
}
