import { useTranslation } from 'react-i18next'
import { Check } from 'lucide-react'

type Props = {
  titleKey: string
  defaultTitle: string
  itemsKeyPrefix: string
  count: number
  tone: 'lemon' | 'cyan' | 'violet'
}

const tones = {
  lemon: {
    bg: 'bg-[#bef264] dark:bg-[#4d7c0f]',
    text: 'text-[#1a2e05] dark:text-[#ecfccb]',
    muted: 'text-[#365314] dark:text-[#d9f99d]',
  },
  cyan: {
    bg: 'bg-[#00c4cc] dark:bg-[#0e7490]',
    text: 'text-[#083344] dark:text-[#cffafe]',
    muted: 'text-[#155e75] dark:text-[#a5f3fc]',
  },
  violet: {
    bg: 'bg-[#c4b5fd] dark:bg-[#6d28d9]',
    text: 'text-[#2e1065] dark:text-[#ede9fe]',
    muted: 'text-[#4c1d95] dark:text-[#ddd6fe]',
  },
}

export default function SkillCategory({ titleKey, defaultTitle, itemsKeyPrefix, count, tone }: Props) {
  const { t } = useTranslation()
  const c = tones[tone]

  const items = Array.from({ length: count }, (_, i) => t(`${itemsKeyPrefix}${i + 1}`, '')).filter(
    Boolean
  )

  return (
    <div className={`rounded-surface ${c.bg} ${c.text} p-8 md:p-10 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl`}>
      <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight mb-6">
        {t(titleKey, defaultTitle)}
      </h3>
      <ul className="space-y-3">
        {items.map((it, i) => (
          <li key={i} className="flex items-start gap-2.5 font-sans text-sm">
            <Check size={15} className="mt-0.5 flex-shrink-0" strokeWidth={2.5} />
            <span className={c.muted}>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
