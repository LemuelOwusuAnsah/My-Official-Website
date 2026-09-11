import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Code2, Music, Building2 } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const roles = [
  {
    key: 'author',
    titleKey: 'author_title',
    subKey: 'author_sub',
    href: '/work',
    Icon: BookOpen,
    bg: 'bg-[#fbbf24] dark:bg-[#b45309]',
    text: 'text-[#422006] dark:text-[#fef3c7]',
    muted: 'text-[#78350f] dark:text-[#fde68a]',
    ring: 'border-[#422006]/15 dark:border-[#fef3c7]/15',
  },
  {
    key: 'founder',
    titleKey: 'founder_title',
    subKey: 'founder_sub',
    href: '/career',
    Icon: Building2,
    bg: 'bg-[#fb923c] dark:bg-[#c2410c]',
    text: 'text-[#431407] dark:text-[#ffedd5]',
    muted: 'text-[#7c2d12] dark:text-[#fed7aa]',
    ring: 'border-[#431407]/15 dark:border-[#ffedd5]/15',
  },
  {
    key: 'developer',
    titleKey: 'developer_title',
    subKey: 'developer_sub',
    href: '/skills',
    Icon: Code2,
    bg: 'bg-[#bef264] dark:bg-[#4d7c0f]',
    text: 'text-[#1a2e05] dark:text-[#ecfccb]',
    muted: 'text-[#365314] dark:text-[#d9f99d]',
    ring: 'border-[#1a2e05]/15 dark:border-[#ecfccb]/15',
  },
  {
    key: 'music',
    titleKey: 'music_title',
    subKey: 'music_sub',
    href: '/work',
    Icon: Music,
    bg: 'bg-[#c4b5fd] dark:bg-[#6d28d9]',
    text: 'text-[#2e1065] dark:text-[#ede9fe]',
    muted: 'text-[#4c1d95] dark:text-[#ddd6fe]',
    ring: 'border-[#2e1065]/15 dark:border-[#ede9fe]/15',
  },
]

export default function RolesRow() {
  const { t } = useTranslation()
  const ref = useReveal<HTMLDivElement>()

  return (
    <section ref={ref} className="reveal container-content pb-24 md:pb-32">
      <div className="rule mb-8" />
      <p className="eyebrow mb-10">{t('hero_what_i_do', 'What I do')}</p>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {roles.map((role) => {
          const { Icon } = role
          return (
            <Link
              key={role.key}
              to={role.href}
              className={`group relative overflow-hidden rounded-surface ${role.bg} ${role.text}
                          p-7 md:p-8 min-h-[280px] flex flex-col
                          transition-all duration-500 ease-out-expo
                          hover:-translate-y-2 hover:shadow-2xl`}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 rounded-full border ${role.ring} opacity-40 -translate-y-8 translate-x-8 transition-transform duration-700 group-hover:scale-110`} />

              <div className="relative z-10 flex flex-col h-full">
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-button bg-white/30 dark:bg-black/20 backdrop-blur-sm mb-6">
                  <Icon size={20} strokeWidth={1.75} />
                </div>

                <p className={`font-mono text-2xs uppercase tracking-[0.14em] mb-3 ${role.muted}`}>
                  {t(role.titleKey, role.key)}
                </p>

                <p className="font-display text-2xl md:text-3xl font-semibold tracking-tight leading-tight mb-6 flex-1">
                  {t(role.subKey, '')}
                </p>

                <span className="inline-flex items-center gap-2 font-mono text-2xs uppercase tracking-[0.14em] transition-all duration-300 group-hover:gap-3">
                  {t('learn_more', 'Learn more')}
                  <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
