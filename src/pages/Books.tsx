import { useTranslation } from 'react-i18next'
import { ArrowUpRight } from 'lucide-react'
import { usePageMeta } from '../hooks/usePageMeta'
import { useReveal } from '../hooks/useReveal'
import { AppleBooksIcon } from '../components/BrandIcons'

const APPLE_BOOKS_URL = 'https://books.apple.com/gb/author/lemuel-owusu-ansah/id1587403972'

const books = [
  { titleKey: 'book1_title', yearKey: 'book1_year', descKey: 'book1_desc', tagKey: 'book1_tag', number: '01', bg: 'bg-[#fbbf24] dark:bg-[#b45309]', text: 'text-[#422006] dark:text-[#fef3c7]', muted: 'text-[#78350f] dark:text-[#fde68a]' },
  { titleKey: 'book2_title', yearKey: 'book2_year', descKey: 'book2_desc', tagKey: 'book2_tag', number: '02', bg: 'bg-[#fb923c] dark:bg-[#c2410c]', text: 'text-[#431407] dark:text-[#ffedd5]', muted: 'text-[#7c2d12] dark:text-[#fed7aa]' },
  { titleKey: 'book3_title', yearKey: 'book3_year', descKey: 'book3_desc', tagKey: 'book3_tag', number: '03', bg: 'bg-[#bef264] dark:bg-[#4d7c0f]', text: 'text-[#1a2e05] dark:text-[#ecfccb]', muted: 'text-[#365314] dark:text-[#d9f99d]' },
  { titleKey: 'book4_title', yearKey: 'book4_year', descKey: 'book4_desc', tagKey: 'book4_tag', number: '04', bg: 'bg-[#c4b5fd] dark:bg-[#6d28d9]', text: 'text-[#2e1065] dark:text-[#ede9fe]', muted: 'text-[#4c1d95] dark:text-[#ddd6fe]' },
]

export default function Books() {
  const { t } = useTranslation()
  usePageMeta({ title: 'Books', description: 'Published works — fiction, travel, and reflection, available on Apple Books.' })
  const heroRef = useReveal<HTMLDivElement>()
  const gridRef = useReveal<HTMLDivElement>()

  return (
    <div className="container-content py-16 md:py-24">
      <div ref={heroRef} className="reveal max-w-4xl mb-16">
        <p className="kicker mb-6"><span className="kicker-dot" />{t('work_script')}</p>
        <h1 className="page-title mb-8">{t('work_books_title')}</h1>
        <p className="font-sans text-lg md:text-xl text-ink-muted dark:text-ink-muted-dark leading-relaxed max-w-2xl">
          {t('work_books_intro')}
        </p>
      </div>

      <a href={APPLE_BOOKS_URL} target="_blank" rel="noopener noreferrer"
        className="group inline-flex items-center gap-3 mb-14 px-6 py-4 rounded-surface bg-gradient-to-br from-[#fbbf24] to-[#fb923c] text-[#422006] font-medium text-sm shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl">
        <AppleBooksIcon size={20} />
        {t('work_view_apple_books')}
        <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>

      <div ref={gridRef} className="reveal grid gap-5 sm:grid-cols-2">
        {books.map((book) => (
          <a key={book.titleKey} href={APPLE_BOOKS_URL} target="_blank" rel="noopener noreferrer"
            className={`group relative overflow-hidden rounded-surface ${book.bg} ${book.text} p-8 md:p-10 min-h-[240px] flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl`}>
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-start justify-between mb-8">
                <span className={`font-mono text-2xs uppercase tracking-[0.14em] ${book.muted}`}>{book.number} — {t(book.tagKey)}</span>
                <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-2">{t(book.titleKey)}</h3>
              <p className={`font-mono text-xs uppercase tracking-[0.1em] mb-5 ${book.muted}`}>{t(book.yearKey)}</p>
              <p className={`font-sans text-sm md:text-base leading-relaxed max-w-md ${book.muted}`}>{t(book.descKey)}</p>
              <span className={`mt-auto pt-6 inline-flex items-center gap-2 font-mono text-2xs uppercase tracking-[0.14em] ${book.muted}`}>
                {t('work_read_on_apple')}<ArrowUpRight size={11} />
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
