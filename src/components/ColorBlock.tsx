import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

type MetaItem = { num: string; key: string; fallback: string }

type Props = {
  tone: 'lemon' | 'orange' | 'gold' | 'violet'
  kickerKey: string
  kickerDefault: string
  titleKey: string
  titleDefault: string
  bodyKey: string
  bodyDefault: string
  meta: MetaItem[]
  ctaTo?: string
  ctaHref?: string
  ctaKey: string
  ctaDefault: string
  ctaIcon?: React.ReactNode
}

const tones = {
  lemon: {
    bg: 'bg-[#bef264] dark:bg-[#4d7c0f]',
    text: 'text-[#1a2e05] dark:text-[#ecfccb]',
    muted: 'text-[#365314] dark:text-[#d9f99d]',
    rule: 'border-[#1a2e05]/20 dark:border-[#ecfccb]/20',
  },
  orange: {
    bg: 'bg-[#fb923c] dark:bg-[#c2410c]',
    text: 'text-[#431407] dark:text-[#ffedd5]',
    muted: 'text-[#7c2d12] dark:text-[#fed7aa]',
    rule: 'border-[#431407]/20 dark:border-[#ffedd5]/20',
  },
  gold: {
    bg: 'bg-[#fbbf24] dark:bg-[#b45309]',
    text: 'text-[#422006] dark:text-[#fef3c7]',
    muted: 'text-[#78350f] dark:text-[#fde68a]',
    rule: 'border-[#422006]/20 dark:border-[#fef3c7]/20',
  },
  violet: {
    bg: 'bg-[#c4b5fd] dark:bg-[#6d28d9]',
    text: 'text-[#2e1065] dark:text-[#ede9fe]',
    muted: 'text-[#4c1d95] dark:text-[#ddd6fe]',
    rule: 'border-[#2e1065]/20 dark:border-[#ede9fe]/20',
  },
}

export default function ColorBlock({
  tone,
  kickerKey, kickerDefault,
  titleKey, titleDefault,
  bodyKey, bodyDefault,
  meta,
  ctaTo, ctaHref,
  ctaKey, ctaDefault,
  ctaIcon,
}: Props) {
  const { t } = useTranslation()
  const ref = useReveal<HTMLDivElement>()
  const c = tones[tone]

  const ctaClasses = 'inline-flex items-center gap-2 rounded-button px-6 py-3 font-medium text-sm bg-[#0a0a0a] text-white transition-all duration-200 ease-out-expo hover:-translate-y-0.5 hover:shadow-lg'

  const inner = (
    <>
      {ctaIcon}
      {t(ctaKey, ctaDefault)}
      <ArrowRight size={16} />
    </>
  )

  return (
    <section ref={ref} className={`reveal ${c.bg} ${c.text}`}>
      <div className="container-content py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-12 items-end">
          <div className="md:col-span-7">
            <p className={`font-mono text-2xs uppercase tracking-[0.14em] mb-6 ${c.muted}`}>
              {t(kickerKey, kickerDefault)}
            </p>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[0.95] mb-8">
              {t(titleKey, titleDefault)}
            </h2>
            <p className={`font-sans text-lg md:text-xl leading-relaxed max-w-2xl ${c.muted}`}>
              {t(bodyKey, bodyDefault)}
            </p>
          </div>

          <div className="md:col-span-5 md:justify-self-end">
            {ctaTo ? (
              <Link to={ctaTo} className={ctaClasses}>{inner}</Link>
            ) : (
              <a href={ctaHref} target="_blank" rel="noopener noreferrer" className={ctaClasses}>
                {inner}
              </a>
            )}
          </div>
        </div>

        <div className={`mt-16 pt-8 border-t ${c.rule} grid gap-8 md:grid-cols-3 font-mono text-2xs uppercase tracking-[0.14em] ${c.muted}`}>
          {meta.map((m) => (
            <span key={m.num}>{m.num} — {t(m.key, m.fallback)}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
