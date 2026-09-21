import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Mail } from 'lucide-react'
import { usePageMeta } from '../hooks/usePageMeta'
import { useReveal } from '../hooks/useReveal'

type Principle = {
  number: string
  titleKey: string
  bodyKey: string
  quoteKey?: string
  imgKey: string
  img: string
  imgAlt: string
  bg: string
  text: string
  muted: string
  ring: string
  flip: boolean
}

const principles: Principle[] = [
  { number: '01', titleKey: 'phil_belief_title', bodyKey: 'phil_belief_body', quoteKey: 'phil_belief_quote', imgKey: 'phil_img_belief', img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80&auto=format&fit=crop', imgAlt: 'Quiet desk with open notebook', bg: 'bg-[#bef264] dark:bg-[#4d7c0f]', text: 'text-[#1a2e05] dark:text-[#ecfccb]', muted: 'text-[#365314] dark:text-[#d9f99d]', ring: 'border-[#1a2e05]/20 dark:border-[#ecfccb]/20', flip: false },
  { number: '02', titleKey: 'phil_faith_title', bodyKey: 'phil_faith_body', quoteKey: 'phil_faith_quote', imgKey: 'phil_img_faith', img: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?w=1200&q=80&auto=format&fit=crop', imgAlt: 'Sunrise through a window', bg: 'bg-[#fbbf24] dark:bg-[#b45309]', text: 'text-[#422006] dark:text-[#fef3c7]', muted: 'text-[#78350f] dark:text-[#fde68a]', ring: 'border-[#422006]/20 dark:border-[#fef3c7]/20', flip: true },
  { number: '03', titleKey: 'phil_craft_title', bodyKey: 'phil_craft_body', imgKey: 'phil_img_craft', img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80&auto=format&fit=crop', imgAlt: 'Hands at a laptop with code', bg: 'bg-[#fb923c] dark:bg-[#c2410c]', text: 'text-[#431407] dark:text-[#ffedd5]', muted: 'text-[#7c2d12] dark:text-[#fed7aa]', ring: 'border-[#431407]/20 dark:border-[#ffedd5]/20', flip: false },
  { number: '04', titleKey: 'phil_people_title', bodyKey: 'phil_people_body', imgKey: 'phil_img_people', img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80&auto=format&fit=crop', imgAlt: 'Group collaborating around a table', bg: 'bg-[#00c4cc] dark:bg-[#0e7490]', text: 'text-[#083344] dark:text-[#cffafe]', muted: 'text-[#155e75] dark:text-[#a5f3fc]', ring: 'border-[#083344]/20 dark:border-[#cffafe]/20', flip: true },
  { number: '05', titleKey: 'phil_growth_title', bodyKey: 'phil_growth_body', imgKey: 'phil_img_growth', img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80&auto=format&fit=crop', imgAlt: 'Books stacked beside a notebook', bg: 'bg-[#c4b5fd] dark:bg-[#6d28d9]', text: 'text-[#2e1065] dark:text-[#ede9fe]', muted: 'text-[#4c1d95] dark:text-[#ddd6fe]', ring: 'border-[#2e1065]/20 dark:border-[#ede9fe]/20', flip: false },
]

const education = [
  { titleKey: 'edu_google_ai', schoolKey: 'edu_google_ai_school', yearKey: 'edu_google_ai_year' },
  { titleKey: 'edu_upenn_ai', schoolKey: 'edu_upenn_ai_school', yearKey: 'edu_upenn_ai_year' },
  { titleKey: 'edu_google_dm', schoolKey: 'edu_google_dm_school', yearKey: 'edu_google_dm_year' },
  { titleKey: 'edu_meta_front', schoolKey: 'edu_meta_front_school', yearKey: 'edu_meta_front_year' },
  { titleKey: 'edu_nvidia_net', schoolKey: 'edu_nvidia_net_school', yearKey: 'edu_nvidia_net_year' },
  { titleKey: 'edu_ug_degree', schoolKey: 'edu_ug_school', yearKey: 'edu_ug_year' },
]

const leadership = [
  { titleKey: 'lead_founder_title', descKey: 'lead_founder_desc' },
  { titleKey: 'lead_trainer_title', descKey: 'lead_trainer_desc' },
  { titleKey: 'lead_author_title', descKey: 'lead_author_desc' },
  { titleKey: 'lead_music_title', descKey: 'lead_music_desc' },
]

const memberKeys = ['member_1', 'member_2', 'member_3', 'member_4']

export default function About() {
  const { t } = useTranslation()
  usePageMeta({ title: 'About Me', description: 'Philosophy, bio, education, and leadership — from Accra, Ghana.' })
  const philRef = useReveal<HTMLDivElement>()
  const heroRef = useReveal<HTMLDivElement>()
  const eduRef = useReveal<HTMLDivElement>()
  const leadRef = useReveal<HTMLDivElement>()
  const memberRef = useReveal<HTMLDivElement>()

  return (
    <div className="container-content py-16 md:py-24">
      {/* Philosophy */}
      <div ref={philRef} className="reveal max-w-4xl mb-20">
        <p className="kicker mb-6"><span className="kicker-dot" />{t('philosophy_script')}</p>
        <h1 className="page-title mb-8">{t('philosophy_page_title')}</h1>
        <p className="font-sans text-lg md:text-xl text-ink-muted dark:text-ink-muted-dark leading-relaxed max-w-2xl">
          {t('philosophy_intro')}
        </p>
      </div>

      <div className="space-y-8 mb-24">
        {principles.map((p) => <PrincipleCard key={p.number} p={p} />)}
      </div>

      {/* About Me */}
      <div ref={heroRef} className="reveal rule pt-16 mb-20">
        <p className="kicker mb-6"><span className="kicker-dot" />{t('about_script')}</p>
        <h2 className="page-title mb-8">{t('about_page_title')}</h2>
        <p className="font-sans text-lg md:text-xl text-ink-muted dark:text-ink-muted-dark leading-relaxed mb-6">{t('about_bio')}</p>
        <p className="font-sans text-base md:text-lg text-ink-muted dark:text-ink-muted-dark leading-relaxed">{t('about_bio_2')}</p>
        <div className="flex flex-wrap gap-3 mt-10">
          <Link to="/contact" className="btn-accent"><Mail size={16} />{t('about_contact_cta')}</Link>
          <Link to="/projects" className="btn-outline">{t('about_view_work')}<ArrowRight size={16} /></Link>
        </div>
      </div>

      {/* Education */}
      <section ref={eduRef} className="reveal mb-24">
        <div className="rule mb-8" />
        <p className="eyebrow mb-4">{t('about_education_title')}</p>
        <p className="font-sans text-ink-muted dark:text-ink-muted-dark mb-10 max-w-2xl">{t('about_education_intro')}</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {education.map((e) => (
            <div key={e.titleKey} className="rounded-surface border border-line dark:border-line-dark bg-surface dark:bg-surface-dark p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">
              <p className="font-sans font-semibold text-base leading-snug mb-2">{t(e.titleKey)}</p>
              <p className="font-mono text-2xs uppercase tracking-[0.1em] text-lemon dark:text-lemon-dark mb-2">{t(e.schoolKey)}</p>
              <p className="font-mono text-2xs uppercase tracking-[0.1em] text-ink-faint dark:text-ink-faint-dark">{t(e.yearKey)}</p>
            </div>
          ))}
        </div>
        <Link to="/skills" className="link-arrow mt-8 text-ink-muted dark:text-ink-muted-dark hover:text-ink dark:hover:text-ink-dark">
          {t('about_see_all_certs')}<ArrowRight size={14} />
        </Link>
      </section>

      {/* Leadership */}
      <section ref={leadRef} className="reveal mb-24">
        <div className="rule mb-8" />
        <p className="eyebrow mb-4">{t('about_leadership_title')}</p>
        <p className="font-sans text-ink-muted dark:text-ink-muted-dark mb-10 max-w-2xl">{t('about_leadership_intro')}</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {leadership.map((role) => (
            <div key={role.titleKey} className="rounded-surface border border-line dark:border-line-dark bg-surface dark:bg-surface-dark p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">
              <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight mb-3">{t(role.titleKey)}</h3>
              <p className="font-sans text-sm md:text-base leading-relaxed text-ink-muted dark:text-ink-muted-dark">{t(role.descKey)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Memberships */}
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

function PrincipleCard({ p }: { p: Principle }) {
  const { t } = useTranslation()
  const ref = useReveal<HTMLElement>()

  return (
    <article ref={ref} className={`reveal relative overflow-hidden rounded-surface ${p.bg} ${p.text} transition-all duration-500 hover:shadow-2xl`}>
      <div className={`absolute top-0 right-0 w-48 h-48 rounded-full border ${p.ring} opacity-40 -translate-y-16 translate-x-16`} />
      <div className={`relative z-10 grid md:grid-cols-2 ${p.flip ? 'md:[direction:rtl]' : ''}`}>
        <div className={`relative aspect-[16/10] md:aspect-auto md:min-h-[440px] overflow-hidden ${p.flip ? 'md:[direction:ltr]' : ''}`}>
          <img src={p.img} alt={p.imgAlt} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute bottom-3 right-3 rounded-full px-3 py-1 font-mono text-2xs uppercase tracking-[0.1em] bg-black/50 text-white backdrop-blur-sm">
            {t('phil_img_credit')}
          </div>
        </div>
        <div className={`p-8 md:p-12 lg:p-16 flex flex-col justify-center ${p.flip ? 'md:[direction:ltr]' : ''}`}>
          <span className={`font-mono text-2xs uppercase tracking-[0.14em] mb-6 ${p.muted}`}>{p.number} — {t(p.imgKey)}</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.05] mb-6">{t(p.titleKey)}</h2>
          <p className={`font-sans text-base md:text-lg leading-relaxed mb-6 ${p.muted}`}>{t(p.bodyKey)}</p>
          {p.quoteKey && (
            <p className={`font-display italic text-base md:text-lg leading-snug pt-4 border-t ${p.ring}`}>{t(p.quoteKey)}</p>
          )}
        </div>
      </div>
    </article>
  )
}
