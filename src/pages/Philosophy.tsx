import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
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

export default function Philosophy() {
  const { t } = useTranslation()
  usePageMeta({ title: 'Philosophy', description: 'A short note on how I think, work, and move through the world.' })
  const heroRef = useReveal<HTMLDivElement>()
  const closeRef = useReveal<HTMLDivElement>()

  return (
    <div className="container-content py-16 md:py-24">
      <div ref={heroRef} className="reveal max-w-4xl mb-20">
        <p className="kicker mb-6"><span className="kicker-dot" />{t('philosophy_script')}</p>
        <h1 className="page-title mb-8">{t('philosophy_page_title')}</h1>
        <p className="font-sans text-lg md:text-xl text-ink-muted dark:text-ink-muted-dark leading-relaxed max-w-2xl">{t('philosophy_intro')}</p>
      </div>

      <div className="space-y-8 mb-24">
        {principles.map((p) => <PrincipleCard key={p.number} p={p} />)}
      </div>

      <div ref={closeRef} className="reveal rule pt-12">
        <div className="grid gap-8 md:grid-cols-12 items-end">
          <div className="md:col-span-8">
            <p className="font-display text-2xl md:text-4xl font-semibold tracking-tight leading-tight">{t('philosophy_closing')}</p>
          </div>
          <div className="md:col-span-4 md:justify-self-end">
            <Link to="/work" className="btn-accent">{t('philosophy_cta')}<ArrowRight size={16} /></Link>
          </div>
        </div>
      </div>
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
          <div className="absolute bottom-3 right-3 rounded-full px-3 py-1 font-mono text-2xs uppercase tracking-[0.1em] bg-black/50 text-white backdrop-blur-sm">{t('phil_img_credit')}</div>
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
