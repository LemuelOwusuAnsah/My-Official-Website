import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Clock } from 'lucide-react'
import { usePageMeta } from '../hooks/usePageMeta'
import { useReveal } from '../hooks/useReveal'
import { posts } from '../content/posts'

const accents = [
  { bg: 'bg-[#bef264] dark:bg-[#4d7c0f]', text: 'text-[#1a2e05] dark:text-[#ecfccb]' },
  { bg: 'bg-[#c4b5fd] dark:bg-[#6d28d9]', text: 'text-[#2e1065] dark:text-[#ede9fe]' },
  { bg: 'bg-[#fb923c] dark:bg-[#c2410c]', text: 'text-[#431407] dark:text-[#ffedd5]' },
  { bg: 'bg-[#fbbf24] dark:bg-[#b45309]', text: 'text-[#422006] dark:text-[#fef3c7]' },
]

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function Blog() {
  const { t } = useTranslation()
  usePageMeta({
    title: 'Blog',
    description: 'Thoughts on building software, running a studio, writing books, and doing all of it from Accra.',
  })

  const heroRef = useReveal<HTMLDivElement>()
  const listRef = useReveal<HTMLDivElement>()

  const [lead, ...rest] = posts

  return (
    <div className="container-content py-16 md:py-24">
      <div ref={heroRef} className="reveal max-w-4xl mb-16">
        <p className="kicker mb-6">
          <span className="kicker-dot" />
          {t('blog_script')}
        </p>
        <h1 className="page-title mb-8">{t('blog_page_title')}</h1>
        <p className="font-sans text-lg md:text-xl text-ink-muted dark:text-ink-muted-dark leading-relaxed max-w-2xl">
          {t('blog_intro')}
        </p>
      </div>

      <div ref={listRef} className="reveal">
        <div className="rule mb-8" />

        {lead && (
          <Link
            to={`/blog/${lead.slug}`}
            className="group grid gap-8 md:grid-cols-12 mb-16 items-center"
          >
            <div className="md:col-span-7 aspect-[16/10] overflow-hidden rounded-surface relative">
              <img
                src={lead.cover}
                alt=""
                loading="eager"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className={`absolute top-4 left-4 inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-2xs uppercase tracking-[0.1em] ${accents[0].bg} ${accents[0].text}`}
              >
                {t(lead.tagKey)}
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="flex items-center gap-3 mb-4 font-mono text-2xs uppercase tracking-[0.14em] text-ink-faint dark:text-ink-faint-dark">
                <span>{formatDate(t(lead.dateKey))}</span>
                <span className="w-1 h-1 rounded-full bg-ink-faint dark:bg-ink-faint-dark" />
                <span className="inline-flex items-center gap-1">
                  <Clock size={11} />
                  {t(lead.readTimeKey)} {t('blog_reading_time')}
                </span>
              </div>

              <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05] mb-5">
                {t(lead.titleKey)}
              </h2>
              <p className="font-sans text-base md:text-lg text-ink-muted dark:text-ink-muted-dark leading-relaxed mb-6">
                {t(lead.excerptKey)}
              </p>

              <span className="inline-flex items-center gap-2 font-mono text-2xs uppercase tracking-[0.14em] transition-all duration-300 group-hover:gap-3">
                {t('blog_read_more')}
                <ArrowUpRight size={13} />
              </span>
            </div>
          </Link>
        )}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post, i) => {
            const a = accents[(i + 1) % accents.length]
            return (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="group flex flex-col">
                <div className="aspect-[16/10] overflow-hidden rounded-surface relative mb-6">
                  <img
                    src={post.cover}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className={`absolute top-3 left-3 inline-flex items-center gap-2 rounded-full px-2.5 py-1 font-mono text-2xs uppercase tracking-[0.1em] ${a.bg} ${a.text}`}
                  >
                    {t(post.tagKey)}
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-3 font-mono text-2xs uppercase tracking-[0.14em] text-ink-faint dark:text-ink-faint-dark">
                  <span>{formatDate(t(post.dateKey))}</span>
                  <span className="w-1 h-1 rounded-full bg-ink-faint dark:bg-ink-faint-dark" />
                  <span className="inline-flex items-center gap-1">
                    <Clock size={11} />
                    {t(post.readTimeKey)} {t('blog_reading_time')}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-semibold tracking-tight leading-tight mb-3 group-hover:underline underline-offset-4 decoration-1">
                  {t(post.titleKey)}
                </h3>
                <p className="font-sans text-sm text-ink-muted dark:text-ink-muted-dark leading-relaxed mb-4 flex-1">
                  {t(post.excerptKey)}
                </p>

                <span className="inline-flex items-center gap-2 font-mono text-2xs uppercase tracking-[0.14em] transition-all duration-300 group-hover:gap-3">
                  {t('blog_read_more')}
                  <ArrowUpRight size={11} />
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
