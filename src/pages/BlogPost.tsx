import { useTranslation } from 'react-i18next'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Clock, ArrowUpRight } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useReveal } from '../hooks/useReveal'
import { usePageMeta } from '../hooks/usePageMeta'
import { useBlogMeta } from '../hooks/useBlogMeta'
import { getPost, getRelated } from '../content/posts'
import HireForm from '../components/HireForm'
import ShareButtons from '../components/ShareButtons'

function formatDate(iso: string, locale: string) {
  return new Date(iso).toLocaleDateString(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function BlogPost() {
  const { t, i18n } = useTranslation()
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getPost(slug) : undefined
  const related = slug ? getRelated(slug, 3) : []
  const bodyRef = useReveal<HTMLDivElement>()

  usePageMeta({
    title: post ? t(post.titleKey) : 'Post',
    description: post ? t(post.excerptKey) : undefined,
  })

  useBlogMeta({
    title: post ? t(post.titleKey) : 'Post',
    description: post ? t(post.excerptKey) : '',
    image: post?.cover ?? '',
    slug: slug ?? '',
  })

  if (!post) {
    return (
      <div className="container-content py-24 text-center">
        <h1 className="page-title mb-8">{t('blog_not_found')}</h1>
        <Link to="/blog" className="link-arrow">
          <ArrowLeft size={14} />
          {t('blog_back')}
        </Link>
      </div>
    )
  }

  return (
    <article className="container-content py-16 md:py-24">
      <Link
        to="/blog"
        className="link-arrow mb-12 text-ink-muted dark:text-ink-muted-dark hover:text-ink dark:hover:text-ink-dark"
      >
        <ArrowLeft size={14} />
        {t('blog_back')}
      </Link>

      <header className="max-w-4xl mb-12">
        <div className="flex items-center gap-3 mb-6 font-mono text-2xs uppercase tracking-[0.14em] text-ink-faint dark:text-ink-faint-dark">
          <span>{formatDate(t(post.dateKey), i18n.language)}</span>
          <span className="w-1 h-1 rounded-full bg-ink-faint dark:bg-ink-faint-dark" />
          <span className="inline-flex items-center gap-1">
            <Clock size={11} />
            {t(post.readTimeKey)} {t('blog_reading_time')}
          </span>
        </div>

        <h1 className="page-title mb-6">{t(post.titleKey)}</h1>
        <p className="font-sans text-lg md:text-xl text-ink-muted dark:text-ink-muted-dark leading-relaxed mb-8">
          {t(post.excerptKey)}
        </p>

        <div className="pb-8 border-b border-line dark:border-line-dark">
          <p className="font-mono text-2xs uppercase tracking-[0.14em] text-ink-faint dark:text-ink-faint-dark">
            {t('blog_author_note')}
          </p>
        </div>
      </header>

      <figure className="mb-16">
        <div className="aspect-[21/9] overflow-hidden rounded-surface">
          <img src={post.cover} alt="" className="w-full h-full object-cover" />
        </div>
        <figcaption className="mt-3 font-mono text-2xs uppercase tracking-[0.14em] text-ink-faint dark:text-ink-faint-dark text-right">
          {post.coverCredit}
        </figcaption>
      </figure>

      <div ref={bodyRef} className="max-w-prose mx-auto">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h2: ({ children }) => (
              <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-ink dark:text-ink-dark mt-14 mb-5">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight text-ink dark:text-ink-dark mt-10 mb-4">
                {children}
              </h3>
            ),
            h4: ({ children }) => (
              <h4 className="font-display text-lg font-semibold tracking-tight text-ink dark:text-ink-dark mt-8 mb-3">
                {children}
              </h4>
            ),
            p: ({ children }) => (
              <p className="font-sans text-base md:text-lg leading-relaxed text-ink dark:text-ink-dark mb-6">
                {children}
              </p>
            ),
            strong: ({ children }) => (
              <strong className="font-semibold text-ink dark:text-ink-dark">{children}</strong>
            ),
            em: ({ children }) => (
              <em className="italic text-ink-muted dark:text-ink-muted-dark">{children}</em>
            ),
            ul: ({ children }) => (
              <ul className="list-none space-y-3 my-6 pl-0">{children}</ul>
            ),
            ol: ({ children }) => (
              <ol className="list-decimal space-y-3 my-6 pl-6 text-ink dark:text-ink-dark">{children}</ol>
            ),
            li: ({ children }) => (
              <li className="font-sans text-base md:text-lg leading-relaxed text-ink dark:text-ink-dark pl-6 relative before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:rounded-full before:bg-lemon dark:before:bg-lemon-dark">
                {children}
              </li>
            ),
            blockquote: ({ children }) => (
              <blockquote className="border-l-4 border-lemon dark:border-lemon-dark pl-6 my-8 italic text-ink-muted dark:text-ink-muted-dark">
                {children}
              </blockquote>
            ),
            a: ({ children, href }) => (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="link inline-flex items-center gap-1"
              >
                {children}
                <ArrowUpRight size={12} />
              </a>
            ),
            code: ({ children }) => (
              <code className="font-mono text-sm bg-surface-muted dark:bg-surface-muted-dark px-1.5 py-0.5 rounded text-ink dark:text-ink-dark">
                {children}
              </code>
            ),
            hr: () => (
              <hr className="border-line dark:border-line-dark my-12" />
            ),
          }}
        >
          {post.body}
        </ReactMarkdown>
      </div>

      <div className="max-w-prose mx-auto">
        <ShareButtons
          url={typeof window !== 'undefined' ? window.location.href : ''}
          title={t(post.titleKey)}
          cover={post.cover}
        />
      </div>

      {post.slug === 'management-systems' && (
        <div className="max-w-prose mx-auto mt-16">
          <HireForm />
        </div>
      )}

      {related.length > 0 && (
        <section className="max-w-6xl mx-auto mt-24">
          <div className="rule mb-8" />
          <p className="eyebrow mb-12">{t('blog_related')}</p>

          <div className="grid gap-8 md:grid-cols-3">
            {related.map((rp) => (
              <Link key={rp.slug} to={`/blog/${rp.slug}`} className="group flex flex-col">
                <div className="aspect-[16/10] overflow-hidden rounded-surface mb-5">
                  <img
                    src={rp.cover}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="font-mono text-2xs uppercase tracking-[0.14em] text-ink-faint dark:text-ink-faint-dark mb-3">
                  {formatDate(t(rp.dateKey), i18n.language)}
                </div>
                <h3 className="font-display text-xl font-semibold tracking-tight leading-snug mb-2 group-hover:underline underline-offset-4 decoration-1">
                  {t(rp.titleKey)}
                </h3>
                <p className="font-sans text-sm text-ink-muted dark:text-ink-muted-dark leading-relaxed">
                  {t(rp.excerptKey)}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  )
}
