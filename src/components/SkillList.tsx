import { useTranslation } from 'react-i18next'
import { Check } from 'lucide-react'

type Props = {
  titleKey: string
  itemsKey: string
  count: number
}

export default function SkillList({ titleKey, itemsKey, count }: Props) {
  const { t } = useTranslation()
  const items = Array.from({ length: count }, (_, i) => t(`${itemsKey}${i + 1}`, '')).filter(Boolean)
  return (
    <div className="rounded-surface border border-line dark:border-line-dark bg-surface dark:bg-surface-dark p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-ink dark:hover:border-ink-dark">
      <h4 className="font-display font-semibold text-sm tracking-tight mb-4">{t(titleKey)}</h4>
      <ul className="space-y-1.5">
        {items.map((it, i) => (
          <li key={i} className="flex items-start gap-2 font-sans text-xs">
            <Check size={12} className="mt-1 text-lemon dark:text-lemon-dark flex-shrink-0" strokeWidth={2.5} />
            <span className="text-ink-muted dark:text-ink-muted-dark">{it}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
