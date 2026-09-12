import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Mail } from 'lucide-react'
import { usePageMeta } from '../hooks/usePageMeta'
import { useReveal } from '../hooks/useReveal'

const education = [
  { titleKey: 'edu_google_ai', schoolKey: 'edu_google_ai_school', yearKey: 'edu_google_ai_year', bg: 'bg-[#c4b5fd] dark:bg-[#6d28d9]', text: 'text-[#2e1065] dark:text-[#ede9fe]', muted: 'text-[#4c1d95] dark:text-[#ddd6fe]' },
  { titleKey: 'edu_upenn_ai', schoolKey: 'edu_upenn_ai_school', yearKey: 'edu_upenn_ai_year', bg: 'bg-[#c4b5fd] dark:bg-[#6d28d9]', text: 'text-[#2e1065] dark:text-[#ede9fe]', muted: 'text-[#4c1d95] dark:text-[#ddd6fe]' },
  { titleKey: 'edu_google_dm', schoolKey: 'edu_google_dm_school', yearKey: 'edu_google_dm_year', bg: 'bg-[#fb923c] dark:bg-[#c2410c]', text: 'text-[#431407] dark:text-[#ffedd5]', muted: 'text-[#7c2d12] dark:text-[#fed7aa]' },
  { titleKey: 'edu_meta_front', schoolKey: 'edu_meta_front_school', yearKey: 'edu_meta_front_year', bg: 'bg-[#bef264] dark:bg-[#4d7c0f]', text: 'text-[#1a2e05] dark:text-[#ecfccb]', muted: 'text-[#365314] dark:text-[#d9f99d]' },
  { titleKey: 'edu_nvidia_net', schoolKey: 'edu_nvidia_net_school', yearKey: 'edu_nvidia_net_year', bg: 'bg-[#00c4cc] dark:bg-[#0e7490]', text: 'text-[#083344] dark:text-[#cffafe]', muted: 'text-[#155e75] dark:text-[#a5f3fc]' },
  { titleKey: 'edu_ug_degree', schoolKey: 'edu_ug_school', yearKey: 'edu_ug_year', bg: 'bg-[#fbbf24] dark:bg-[#b45309]', text: 'text-[#422006] dark:text-[#fef3c7]', muted: 'text-[#78350f] dark:text-[#fde68a]' },
]

const leadership = [
  { titleKey: 'lead_founder_title', descKey: 'lead_founder_desc', bg: 'bg-[#fbbf24] dark:bg-[#b45309]', text: 'text-[#422006] dark:text-[#fef3c7]', muted: 'text-[#78350f] dark:text-[#fde68a]' },
  { titleKey: 'lead_trainer_title', descKey: 'lead_trainer_desc', bg: 'bg-[#bef264] dark:bg-[#4d7c0f]', text: 'text-[#1a2e05] dark:text-[#ecfccb]', muted: 'text-[#365314] dark:text-[#d9f99d]' },
  { titleKey: 'lead_author_title', descKey: 'lead_author_desc', bg: 'bg-[#fb923c] dark:bg-[#c2410c]', text: 'text-[#431407] dark:text-[#ffedd5]', muted: 'text-[#7c2d12] dark:text-[#fed7aa]' },
  { titleKey: 'lead_music_title', descKey: 'lead_music_desc', bg: 'bg-[#c4b5fd] dark:bg-[#6d28d9]', text: 'text-[#2e1065] dark:text-[#ede9fe]', muted: 'text-[#4c1d95] dark:text-[#ddd6fe]' },
]

const memberKeys = ['member_1', 'member_2', 'member_3', 'member_4']

export default function About() {
  const { t } = useTranslation()
  usePageMeta({ title: 'About', description: 'Full-stack developer, author, founder, and music producer based in Accra, Ghana.' })
  const heroRef = useReveal<HTMLDivElement>()
  const eduRef = useReveal<HTMLDivElement>()
  const leadRef = useReveal<HTMLDivElement>()
  const memberRef = useReveal<HTMLDivElement>()

  return (
    <div className="container-content py-16 md:py-24">
      <div ref={heroRef} className="reveal max-w-4xl mb-24">
        <p className="kicker mb-6"><span className="kicker-dot" />{t('about_script')}</p>
        <h1 className="page-title mb-8">{t('about_page_title')}</h1>
        <p className="font-sans text-lg md:text-xl text-ink-muted dark:text-ink-muted-dark leading-relaxed mb-6">{t('about_bio')}</p>
        <p className="font-sans text-base md:text-lg text-ink-muted dark:text-ink-muted-dark leading-relaxed">{t('about_bio_2')}</p>
        <div className="flex flex-wrap gap-3 mt-10">
          <Link to="/contact" className="btn-accent"><Mail size={16} />{t('about_contact_cta')}</Link>
          <Link to="/work" className="btn-outline">{t('about_view_work')}<ArrowRight size={16} /></Link>
        </div>
      </div>

      <section ref={eduRef} className="reveal mb-28">
        <div className="rule mb-8" />
        <p className="eyebrow mb-4">{t('about_education_title')}</p>
        <p className="font-sans text-ink-muted dark:text-ink-muted-dark mb-10 max-w-2xl">{t('about_education_intro')}</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {education.map((e) => (
            <div key={e.titleKey} className={`relative overflow-hidden rounded-surface ${e.bg} ${e.text} p-6 md:p-7 min-h-[160px] flex flex-col transition-all duration-500 hover:-translate-y-1 hover:shadow-xl will-change-transform`}>
              <p className="font-sans font-semibold text-base leading-snug mb-3">{t(e.titleKey)}</p>
              <p className={`font-mono text-2xs uppercase tracking-[0.1em] mb-1 ${e.muted}`}>{t(e.schoolKey)}</p>
              <p className={`font-mono text-2xs uppercase tracking-[0.1em] mt-auto pt-3 ${e.muted}`}>{t(e.yearKey)}</p>
            </div>
          ))}
        </div>
        <Link to="/skills" className="link-arrow mt-8 text-ink-muted dark:text-ink-muted-dark hover:text-ink dark:hover:text-ink-dark">
          {t('about_see_all_certs')}<ArrowRight size={14} />
        </Link>
      </section>

      <section ref={leadRef} className="reveal mb-28">
        <div className="rule mb-8" />
        <p className="eyebrow mb-4">{t('about_leadership_title')}</p>
        <p className="font-sans text-ink-muted dark:text-ink-muted-dark mb-10 max-w-2xl">{t('about_leadership_intro')}</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {leadership.map((role) => (
            <div key={role.titleKey} className={`relative overflow-hidden rounded-surface ${role.bg} ${role.text} p-8 md:p-10 min-h-[200px] flex flex-col transition-all duration-500 hover:-translate-y-1 hover:shadow-xl will-change-transform`}>
              <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight mb-3">{t(role.titleKey)}</h3>
              <p className={`font-sans text-sm md:text-base leading-relaxed ${role.muted}`}>{t(role.descKey)}</p>
            </div>
          ))}
        </div>
      </section>

      <section ref={memberRef} className="reveal mb-8">
        <div className="rule mb-8" />
        <p className="eyebrow mb-4">{t('about_member_title')}</p>
        <p className="font-sans text-ink-muted dark:text-ink-muted-dark mb-8 max-w-2xl">{t('about_member_intro')}</p>
        <div className="flex flex-wrap gap-3">
          {memberKeys.map((k) => (
            <span key={k} className="inline-flex items-center px-5 py-2.5 rounded-full bg-lemon/10 dark:bg-lemon-dark/10 border border-lemon/30 dark:border-lemon-dark/30 font-sans text-sm text-ink dark:text-ink-dark">{t(k)}</span>
          ))}
        </div>
        <div className="mt-16">
          <a href="https://www.linkedin.com/in/lemuel-owusu-ansah/" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 text-ink-muted dark:text-ink-muted-dark hover:text-ink dark:hover:text-ink-dark transition-colors">
            <span className="font-mono text-2xs uppercase tracking-[0.14em]">{t('about_linkedin', 'Find me on LinkedIn')}</span>
            <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </section>
    </div>
  )
}
