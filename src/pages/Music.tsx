import { useTranslation } from 'react-i18next'
import { ArrowUpRight } from 'lucide-react'
import { usePageMeta } from '../hooks/usePageMeta'
import { useReveal } from '../hooks/useReveal'
import { AppleMusicIcon } from '../components/BrandIcons'

const APPLE_MUSIC_URL = 'https://music.apple.com/gh/artist/lemy-newman/1587403970'

const singles = [
  { titleKey: 'music_song_1_title', yearKey: 'music_song_1_year', producerKey: 'music_song_1_producer', number: '01', bg: 'bg-[#c4b5fd] dark:bg-[#6d28d9]', text: 'text-[#2e1065] dark:text-[#ede9fe]', muted: 'text-[#4c1d95] dark:text-[#ddd6fe]' },
  { titleKey: 'music_song_2_title', yearKey: 'music_song_2_year', producerKey: 'music_song_2_producer', number: '02', bg: 'bg-[#fbbf24] dark:bg-[#b45309]', text: 'text-[#422006] dark:text-[#fef3c7]', muted: 'text-[#78350f] dark:text-[#fde68a]' },
  { titleKey: 'music_song_3_title', yearKey: 'music_song_3_year', producerKey: 'music_song_3_producer', number: '03', bg: 'bg-[#fb923c] dark:bg-[#c2410c]', text: 'text-[#431407] dark:text-[#ffedd5]', muted: 'text-[#7c2d12] dark:text-[#fed7aa]' },
]

export default function Music() {
  const { t } = useTranslation()
  usePageMeta({
    title: 'Music',
    description: 'Lemy Newman — Ghanaian music producer and recording artist. Three singles, choir director, band leader.',
  })
  const heroRef = useReveal<HTMLDivElement>()
  const singlesRef = useReveal<HTMLDivElement>()
  const storyRef = useReveal<HTMLDivElement>()

  return (
    <div className="container-content py-16 md:py-24">
      <div ref={heroRef} className="reveal max-w-4xl mb-20">
        <p className="kicker mb-6"><span className="kicker-dot" />{t('music_script')}</p>
        <h1 className="page-title mb-8">{t('music_page_title')}</h1>
        <p className="font-display text-4xl md:text-6xl font-semibold tracking-tight text-gold dark:text-gold-dark mb-8 leading-none">
          Lemy Newman
        </p>
        <p className="font-sans text-lg md:text-xl text-ink-muted dark:text-ink-muted-dark leading-relaxed max-w-2xl mb-10">
          {t('music_intro')}
        </p>
        <a href={APPLE_MUSIC_URL} target="_blank" rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 px-6 py-4 rounded-surface bg-gradient-to-br from-[#FA57C1] to-[#FC3C44] text-white font-medium text-sm shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl">
          <AppleMusicIcon size={20} />
          {t('music_follow')}
          <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>

      <section ref={singlesRef} className="reveal mb-24">
        <div className="rule mb-8" />
        <p className="eyebrow mb-10">{t('music_singles_title')}</p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {singles.map((song) => (
            <a key={song.titleKey} href={APPLE_MUSIC_URL} target="_blank" rel="noopener noreferrer"
              className={`group relative overflow-hidden rounded-surface ${song.bg} ${song.text} p-8 md:p-10 min-h-[280px] flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl`}>
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-10">
                  <span className={`font-mono text-2xs uppercase tracking-[0.14em] ${song.muted}`}>{song.number}</span>
                  <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <h3 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-3">
                  {t(song.titleKey)}
                </h3>
                <p className={`font-mono text-xs uppercase tracking-[0.1em] mb-5 ${song.muted}`}>{t(song.yearKey)}</p>
                <p className={`font-sans text-xs md:text-sm leading-relaxed mt-auto pt-5 border-t border-current/15 ${song.muted}`}>
                  {t(song.producerKey)}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section ref={storyRef} className="reveal mb-16">
        <div className="rule mb-8" />
        <p className="eyebrow mb-10">{t('music_story_title')}</p>

        <div className="grid gap-8 md:gap-12 md:grid-cols-12 items-center mb-12">
          <div className="md:col-span-5">
            <div className="relative overflow-hidden rounded-surface aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1200&q=80&auto=format&fit=crop"
                alt="Singer in headphones at a microphone in a recording studio"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-7 max-w-prose">
            <p className="font-sans text-base md:text-lg leading-relaxed text-ink-muted dark:text-ink-muted-dark mb-6">
              {t('music_story_body_1')}
            </p>
            <p className="font-sans text-base md:text-lg leading-relaxed text-ink-muted dark:text-ink-muted-dark mb-6">
              {t('music_story_body_2')}
            </p>
            <p className="font-sans text-base md:text-lg leading-relaxed text-ink-muted dark:text-ink-muted-dark">
              {t('music_story_body_3')}
            </p>
          </div>
        </div>

        <a href={APPLE_MUSIC_URL} target="_blank" rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 link-arrow">
          {t('music_listen')}
          <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </section>
    </div>
  )
}
