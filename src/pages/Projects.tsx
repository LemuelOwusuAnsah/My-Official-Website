import { useTranslation } from 'react-i18next'
import { ArrowUpRight } from 'lucide-react'
import { usePageMeta } from '../hooks/usePageMeta'
import { useReveal } from '../hooks/useReveal'

type Project = {
  number: string
  nameKey: string
  descKey: string
  langKey: string
  href: string
  image: string
  imageAlt: string
  bg: string
  text: string
  muted: string
}

const projects: Project[] = [
  {
    number: '01',
    nameKey: 'proj_awuraba_name',
    descKey: 'proj_awuraba_desc',
    langKey: 'proj_awuraba_lang',
    href: 'https://awuraba-mart.onrender.com/',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&q=80&auto=format&fit=crop',
    imageAlt: 'Produce market with fresh vegetables',
    bg: 'bg-[#fb923c] dark:bg-[#c2410c]',
    text: 'text-[#431407] dark:text-[#ffedd5]',
    muted: 'text-[#7c2d12] dark:text-[#fed7aa]',
  },
  {
    number: '02',
    nameKey: 'proj_aku_name',
    descKey: 'proj_aku_desc',
    langKey: 'proj_aku_lang',
    href: 'https://lemuelowusuansah.github.io/aku-pay',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80&auto=format&fit=crop',
    imageAlt: 'Mobile phone with payment interface',
    bg: 'bg-[#c4b5fd] dark:bg-[#6d28d9]',
    text: 'text-[#2e1065] dark:text-[#ede9fe]',
    muted: 'text-[#4c1d95] dark:text-[#ddd6fe]',
  },
  {
    number: '03',
    nameKey: 'proj_body_name',
    descKey: 'proj_body_full_desc',
    langKey: 'proj_body_lang',
    href: 'https://lemuelowusuansah.github.io/Body-Metrics-01/',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80&auto=format&fit=crop',
    imageAlt: 'Person tracking fitness progress',
    bg: 'bg-[#bef264] dark:bg-[#4d7c0f]',
    text: 'text-[#1a2e05] dark:text-[#ecfccb]',
    muted: 'text-[#365314] dark:text-[#d9f99d]',
  },
  {
    number: '04',
    nameKey: 'proj_wellness_name',
    descKey: 'proj_wellness_full_desc',
    langKey: 'proj_wellness_lang',
    href: 'https://lemuelowusuansah.github.io/Lans-Wellness-Clinic--Frontend-/',
    image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1200&q=80&auto=format&fit=crop',
    imageAlt: 'Clean modern clinic interior',
    bg: 'bg-[#00c4cc] dark:bg-[#0e7490]',
    text: 'text-[#083344] dark:text-[#cffafe]',
    muted: 'text-[#155e75] dark:text-[#a5f3fc]',
  },
  {
    number: '05',
    nameKey: 'proj_marylouis_name',
    descKey: 'proj_marylouis_desc',
    langKey: 'proj_marylouis_lang',
    href: 'https://marylouis-preschool.onrender.com/',
    image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=1200&q=80&auto=format&fit=crop',
    imageAlt: 'Children playing at a daycare',
    bg: 'bg-[#fbbf24] dark:bg-[#b45309]',
    text: 'text-[#422006] dark:text-[#fef3c7]',
    muted: 'text-[#78350f] dark:text-[#fde68a]',
  },
  {
    number: '06',
    nameKey: 'proj_harlin_name',
    descKey: 'proj_harlin_desc',
    langKey: 'proj_harlin_lang',
    href: 'https://harlinfoundation.org',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&q=80&auto=format&fit=crop',
    imageAlt: 'Community foundation outreach',
    bg: 'bg-[#a3e635] dark:bg-[#65a30d]',
    text: 'text-[#1a2e05] dark:text-[#ecfccb]',
    muted: 'text-[#365314] dark:text-[#d9f99d]',
  },
]

export default function Projects() {
  const { t } = useTranslation()
  usePageMeta({
    title: 'Projects',
    description: 'Apps, stores, games, and tools shipped from Accra — from e-commerce to healthcare to AI.',
  })
  const heroRef = useReveal<HTMLDivElement>()
  const listRef = useReveal<HTMLDivElement>()

  return (
    <div className="container-content py-16 md:py-24">
      <div ref={heroRef} className="reveal max-w-4xl mb-16">
        <p className="kicker mb-6"><span className="kicker-dot" />{t('nav_projects', 'Apps & Projects')}</p>
        <h1 className="page-title mb-8">{t('projects_page_title', 'Things I have shipped.')}</h1>
        <p className="font-sans text-lg md:text-xl text-ink-muted dark:text-ink-muted-dark leading-relaxed max-w-2xl">
          {t('projects_page_intro', 'Live products, real users, from Accra to the world. Each one began as a problem worth solving.')}
        </p>
      </div>

      <div ref={listRef} className="reveal space-y-20 md:space-y-28">
        {projects.map((proj, i) => {
          const flip = i % 2 === 1
          return (
            <article key={proj.nameKey} className="grid gap-8 md:gap-12 md:grid-cols-12 items-center">
              <div className={`md:col-span-6 ${flip ? 'md:order-2' : ''}`}>
                <a href={proj.href} target="_blank" rel="noopener noreferrer" className="group block relative overflow-hidden rounded-surface aspect-[4/3]">
                  <img src={proj.image} alt={proj.imageAlt} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 left-4 rounded-full bg-black/50 backdrop-blur-sm px-3 py-1 font-mono text-2xs uppercase tracking-[0.14em] text-white">
                    {proj.number}
                  </div>
                </a>
              </div>
              <div className={`md:col-span-6 ${flip ? 'md:order-1' : ''}`}>
                <p className={`font-mono text-2xs uppercase tracking-[0.14em] mb-4 ${proj.muted}`}>{t(proj.langKey)}</p>
                <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05] mb-5">{t(proj.nameKey)}</h2>
                <p className="font-sans text-base md:text-lg leading-relaxed text-ink-muted dark:text-ink-muted-dark mb-8">{t(proj.descKey)}</p>
                <a href={proj.href} target="_blank" rel="noopener noreferrer"
                  className={`group inline-flex items-center gap-2 rounded-button px-6 py-3 font-medium text-sm ${proj.bg} ${proj.text} transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg`}>
                  {t('projects_visit', 'Visit project')}
                  <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}
