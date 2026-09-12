import { useTranslation } from 'react-i18next'

type Props = { titleKey: string; issuerKey: string; year: string; highlight?: boolean }

export default function CertificationCard({ titleKey, issuerKey, year, highlight }: Props) {
  const { t } = useTranslation()
  return (
    <div className={`rounded-surface border p-5 transition-all duration-300 hover:-translate-y-0.5 ${highlight ? 'border-lemon/40 dark:border-lemon-dark/40 bg-lemon/5 dark:bg-lemon-dark/5' : 'border-line dark:border-line-dark bg-surface dark:bg-surface-dark hover:border-ink dark:hover:border-ink-dark'}`}>
      <p className="font-sans font-semibold text-sm leading-snug mb-3">{t(titleKey)}</p>
      <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.1em] pt-3 border-t border-line dark:border-line-dark">
        <span className="text-lemon dark:text-lemon-dark font-semibold">{t(issuerKey)}</span>
        <span className="text-ink-faint dark:text-ink-faint-dark">{year}</span>
      </div>
    </div>
  )
}
