import { useTranslation } from 'react-i18next'
import {
  BookOpen, Music, ArrowUpRight,
  Calculator, Calendar, Timer, MapPin, Activity, Repeat,
} from 'lucide-react'
import { usePageMeta } from '../hooks/usePageMeta'
import { useReveal } from '../hooks/useReveal'
import GithubIcon from '../components/GithubIcon'
import { AppleMusicIcon, AppleBooksIcon } from '../components/BrandIcons'

const APPLE_BOOKS_URL = 'https://books.apple.com/gb/author/lemuel-owusu-ansah/id1587403972'
const APPLE_MUSIC_URL = 'https://music.apple.com/gh/artist/lemy-newman/1587403970'
const GITHUB_URL = 'https://github.com/LemuelOwusuAnsah'

const books = [
  {
    titleKey: 'book1_title',
    yearKey: 'book1_year',
    descKey: 'book1_desc',
    tagKey: 'book1_tag',
    number: '01',
    bg: 'bg-[#fbbf24] dark:bg-[#b45309]',
    text: 'text-[#422006] dark:text-[#fef3c7]',
    muted: 'text-[#78350f] dark:text-[#fde68a]',
  },
  {
    titleKey: 'book2_title',
    yearKey: 'book2_year',
    descKey: 'book2_desc',
    tagKey: 'book2_tag',
    number: '02',
    bg: 'bg-[#fb923c] dark:bg-[#c2410c]',
    text: 'text-[#431407] dark:text-[#ffedd5]',
    muted: 'text-[#7c2d12] dark:text-[#fed7aa]',
  },
  {
    titleKey: 'book3_title',
    yearKey: 'book3_year',
    descKey: 'book3_desc',
    tagKey: 'book3_tag',
    number: '03',
    bg: 'bg-[#bef264] dark:bg-[#4d7c0f]',
    text: 'text-[#1a2e05] dark:text-[#ecfccb]',
    muted: 'text-[#365314] dark:text-[#d9f99d]',
  },
  {
    titleKey: 'book4_title',
    yearKey: 'book4_year',
    descKey: 'book4_desc',
    tagKey: 'book4_tag',
    number: '04',
    bg: 'bg-[#c4b5fd] dark:bg-[#6d28d9]',
    text: 'text-[#2e1065] dark:text-[#ede9fe]',
    muted: 'text-[#4c1d95] dark:text-[#ddd6fe]',
  },
]

const projects = [
  {
    nameKey: 'proj_calculoria_name',
    descKey: 'proj_calculoria_desc',
    langKey: 'proj_calculoria_lang',
    href: 'https://github.com/LemuelOwusuAnsah/Calculoria',
    Icon: Calculator,
    number: '01',
    bg: 'bg-[#c4b5fd] dark:bg-[#6d28d9]',
    text: 'text-[#2e1065] dark:text-[#ede9fe]',
    muted: 'text-[#4c1d95] dark:text-[#ddd6fe]',
  },
  {
    nameKey: 'proj_calendria_name',
    descKey: 'proj_calendria_desc',
    langKey: 'proj_calendria_lang',
    href: 'https://github.com/LemuelOwusuAnsah/Calendria',
    Icon: Calendar,
    number: '02',
    bg: 'bg-[#00c4cc] dark:bg-[#0e7490]',
    text: 'text-[#083344] dark:text-[#cffafe]',
    muted: 'text-[#155e75] dark:text-[#a5f3fc]',
  },
  {
    nameKey: 'proj_athletica_name',
    descKey: 'proj_athletica_desc',
    langKey: 'proj_athletica_lang',
    href: 'https://github.com/LemuelOwusuAnsah/Athletica',
    Icon: Timer,
    number: '03',
    bg: 'bg-[#bef264] dark:bg-[#4d7c0f]',
    text: 'text-[#1a2e05] dark:text-[#ecfccb]',
    muted: 'text-[#365314] dark:text-[#d9f99d]',
  },
  {
    nameKey: 'proj_capital_name',
    descKey: 'proj_capital_desc',
    langKey: 'proj_capital_lang',
    href: 'https://github.com/LemuelOwusuAnsah/Capital-Quest',
    Icon: MapPin,
    number: '04',
    bg: 'bg-[#fb923c] dark:bg-[#c2410c]',
    text: 'text-[#431407] dark:text-[#ffedd5]',
    muted: 'text-[#7c2d12] dark:text-[#fed7aa]',
  },
  {
    nameKey: 'proj_body_name',
    descKey: 'proj_body_desc',
    langKey: 'proj_body_lang',
    href: 'https://github.com/LemuelOwusuAnsah/Body-Metrics-01',
    Icon: Activity,
    number: '05',
    bg: 'bg-[#fbbf24] dark:bg-[#b45309]',
    text: 'text-[#422006] dark:text-[#fef3c7]',
    muted: 'text-[#78350f] dark:text-[#fde68a]',
  },
  {
    nameKey: 'proj_convertoria_name',
    descKey: 'proj_convertoria_desc',
    langKey: 'proj_convertoria_lang',
    href: 'https://github.com/LemuelOwusuAnsah/Convertoria',
    Icon: Repeat,
    number: '06',
    bg: 'bg-[#a3e635] dark:bg-[#65a30d]',
    text: 'text-[#1a2e05] dark:text-[#ecfccb]',
    muted: 'text-[#365314] dark:text-[#d9f99d]',
  },
]

export default function Work() {
  const { t } = useTranslation()
  usePageMeta({
    title: 'Work',
    description: 'Published books, shipped software, and original music — from Accra, Ghana.',
  })

  const heroRef = useReveal<HTMLDivElement>()
  const booksRef = useReveal<HTMLDivElement>()
  const projectsRef = useReveal<HTMLDivElement>()
  const musicRef = useReveal<HTMLDivElement>()

  return (
    <div className="container-content py-16 md:py-24">
      <div ref={heroRef} className="reveal max-w-4xl mb-24">
        <p className="kicker mb-6">
          <span className="kicker-dot" />
          {t('work_script')}
        </p>
        <h1 className="page-title mb-8">{t('work_title')}</h1>
        <p className="font-sans text-lg md:text-xl text-ink-muted dark:text-ink-muted-dark leading-relaxed max-w-2xl">
          {t('work_intro')}
        </p>
      </div>

      <section ref={booksRef} className="reveal mb-28">
        <div className="rule mb-8" />
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="text-gold dark:text-gold-dark" size={20} />
          <p className="eyebrow">{t('work_books_title')}</p>
        </div>
        <p className="font-sans text-ink-muted dark:text-ink-muted-dark mb-10 max-w-2xl">
          {t('work_books_intro')}
        </p>

        <a
          href={APPLE_BOOKS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 mb-12 px-6 py-4 rounded-surface
                     bg-gradient-to-br from-[#fbbf24] to-[#fb923c] text-[#422006]
                     font-medium text-sm shadow-lg
                     transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
        >
          <AppleBooksIcon size={20} />
          {t('work_view_apple_books')}
          <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

        <div className="grid gap-5 sm:grid-cols-2">
          {books.map((book) => (
            <a
              key={book.titleKey}
              href={APPLE_BOOKS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden rounded-surface ${book.bg} ${book.text}
                          p-8 md:p-10 min-h-[260px] flex flex-col
                          transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl`}
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-8">
                  <span className={`font-mono text-2xs uppercase tracking-[0.14em] ${book.muted}`}>
                    {book.number} — {t(book.tagKey)}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>

                <h3 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-2">
                  {t(book.titleKey)}
                </h3>
                <p className={`font-mono text-xs uppercase tracking-[0.1em] mb-5 ${book.muted}`}>
                  {t(book.yearKey)}
                </p>
                <p className={`font-sans text-sm md:text-base leading-relaxed max-w-md ${book.muted}`}>
                  {t(book.descKey)}
                </p>

                <span className={`mt-auto pt-6 inline-flex items-center gap-2 font-mono text-2xs uppercase tracking-[0.14em] ${book.muted}`}>
                  {t('work_read_on_apple')}
                  <ArrowUpRight size={11} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section ref={projectsRef} className="reveal mb-28">
        <div className="rule mb-8" />
        <div className="flex items-center gap-3 mb-4">
          <GithubIcon size={18} />
          <p className="eyebrow">{t('work_projects_title')}</p>
        </div>
        <p className="font-sans text-ink-muted dark:text-ink-muted-dark mb-10 max-w-2xl">
          {t('work_projects_intro')}
        </p>

        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 mb-12 px-6 py-4 rounded-surface
                     border-2 border-ink dark:border-ink-dark
                     text-ink dark:text-ink-dark font-medium text-sm
                     transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink hover:text-canvas dark:hover:bg-ink-dark dark:hover:text-canvas-dark"
        >
          <GithubIcon size={18} />
          {t('work_view_all_github')}
          <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj) => {
            const { Icon } = proj
            return (
              <a
                key={proj.nameKey}
                href={proj.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative overflow-hidden rounded-surface ${proj.bg} ${proj.text}
                            p-7 min-h-[240px] flex flex-col
                            transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl`}
              >
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className="inline-flex items-center justify-center w-11 h-11 rounded-button bg-white/30 dark:bg-black/20">
                      <Icon size={20} strokeWidth={1.75} />
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>

                  <span className={`font-mono text-2xs uppercase tracking-[0.14em] mb-3 ${proj.muted}`}>
                    {proj.number}
                  </span>

                  <h3 className="font-display text-2xl font-semibold tracking-tight mb-3">
                    {t(proj.nameKey)}
                  </h3>
                  <p className={`font-sans text-sm leading-relaxed mb-6 ${proj.muted}`}>
                    {t(proj.descKey)}
                  </p>

                  <span className={`mt-auto pt-4 border-t border-current/15 inline-flex items-center gap-2 font-mono text-2xs uppercase tracking-[0.14em] ${proj.muted}`}>
                    {t(proj.langKey)}
                  </span>
                </div>
              </a>
            )
          })}
        </div>
      </section>

      <section ref={musicRef} className="reveal mb-8">
        <div className="rule mb-8" />
        <div className="rounded-surface bg-[#c4b5fd] dark:bg-[#6d28d9] text-[#2e1065] dark:text-[#ede9fe] p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-12 items-end">
            <div className="md:col-span-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-button bg-white/30 dark:bg-black/20">
                  <Music size={22} strokeWidth={1.75} />
                </div>
                <p className="font-mono text-2xs uppercase tracking-[0.14em] text-[#4c1d95] dark:text-[#ddd6fe]">
                  {t('work_music_title')}
                </p>
              </div>

              <p className="font-script text-5xl md:text-6xl mb-6 text-[#2e1065] dark:text-[#ede9fe] leading-none">
                Lemy Newman
              </p>

              <p className="font-sans text-lg md:text-xl leading-relaxed max-w-2xl text-[#4c1d95] dark:text-[#ddd6fe]">
                {t('work_music_intro')}
              </p>
            </div>

            <div className="md:col-span-4 md:justify-self-end">
              <a
                href={APPLE_MUSIC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-button px-6 py-3.5 font-medium text-sm
                           bg-[#2e1065] text-[#ede9fe]
                           transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <AppleMusicIcon size={18} />
                {t('work_music_cta')}
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
