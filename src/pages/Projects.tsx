import { useTranslation } from 'react-i18next'
import { ArrowUpRight } from 'lucide-react'
import { usePageMeta } from '../hooks/usePageMeta'
import { useReveal } from '../hooks/useReveal'

type Project = {
  number: string
  name: string
  desc: string
  lang: string
  href: string
  image: string
  imageAlt: string
  bg: string
  text: string
  muted: string
  ring: string
}

const projects: Project[] = [
  {
    number: '01',
    name: 'Awuraba Mart',
    desc: 'A live e-commerce storefront for a Ghanaian grocery brand — product catalogue, cart, and checkout flow.',
    lang: 'Full-stack · React · Node',
    href: 'https://awuraba-mart.onrender.com/',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&q=80&auto=format&fit=crop',
    imageAlt: 'Produce market with fresh vegetables',
    bg: 'bg-[#fb923c] dark:bg-[#c2410c]',
    text: 'text-[#431407] dark:text-[#ffedd5]',
    muted: 'text-[#7c2d12] dark:text-[#fed7aa]',
    ring: 'border-[#431407]/15 dark:border-[#ffedd5]/15',
  },
  {
    number: '02',
    name: 'Aku Pay',
    desc: 'A modern digital payments interface — send, receive, and track transactions with a clean, mobile-first UI.',
    lang: 'Frontend · JavaScript',
    href: 'https://lemuelowusuansah.github.io/aku-pay',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80&auto=format&fit=crop',
    imageAlt: 'Mobile phone with payment interface',
    bg: 'bg-[#c4b5fd] dark:bg-[#6d28d9]',
    text: 'text-[#2e1065] dark:text-[#ede9fe]',
    muted: 'text-[#4c1d95] dark:text-[#ddd6fe]',
    ring: 'border-[#2e1065]/15 dark:border-[#ede9fe]/15',
  },
  {
    number: '03',
    name: 'Body Metrics',
    desc: 'A BMI tracker with history, progress charts, goal setting, and weekly reminders. Built without a framework.',
    lang: 'Vanilla JavaScript · SVG Charts',
    href: 'https://lemuelowusuansah.github.io/Body-Metrics-01/',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80&auto=format&fit=crop',
    imageAlt: 'Person tracking fitness progress',
    bg: 'bg-[#bef264] dark:bg-[#4d7c0f]',
    text: 'text-[#1a2e05] dark:text-[#ecfccb]',
    muted: 'text-[#365314] dark:text-[#d9f99d]',
    ring: 'border-[#1a2e05]/15 dark:border-[#ecfccb]/15',
  },
  {
    number: '04',
    name: 'Lans Wellness Clinic',
    desc: 'The frontend foundation for an integrative health clinic — built to grow into a full patient portal.',
    lang: 'HTML · CSS · JavaScript',
    href: 'https://lemuelowusuansah.github.io/Lans-Wellness-Clinic--Frontend-/',
    image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1200&q=80&auto=format&fit=crop',
    imageAlt: 'Clean modern clinic interior',
    bg: 'bg-[#00c4cc] dark:bg-[#0e7490]',
    text: 'text-[#083344] dark:text-[#cffafe]',
    muted: 'text-[#155e75] dark:text-[#a5f3fc]',
    ring: 'border-[#083344]/15 dark:border-[#cffafe]/15',
  },
  {
    number: '05',
    name: 'Marylouis Daycare',
    desc: 'A warm, welcoming website for Marylouis Daycare and Preschool in Heathrow — with Lemy, an AI chat assistant that answers parent questions.',
    lang: 'Full-stack · React · AI',
    href: 'https://marylouis-preschool.onrender.com/',
    image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=1200&q=80&auto=format&fit=crop',
    imageAlt: 'Children playing at a daycare',
    bg: 'bg-[#fbbf24] dark:bg-[#b45309]',
    text: 'text-[#422006] dark:text-[#fef3c7]',
    muted: 'text-[#78350f] dark:text-[#fde68a]',
    ring: 'border-[#422006]/15 dark:border-[#fef3c7]/15',
  },
  {
    number: '06',
    name: 'The Harlin Foundation LBG',
    desc: 'A public foundation website — mission, programmes, donation flow, and a clean editorial voice.',
    lang: 'Full-stack · React',
    href: 'https://harlinfoundation.org',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&q=80&auto=format&fit=crop',
    imageAlt: 'Community foundation outreach',
    bg: 'bg-[#a3e635] dark:bg-[#65a30d]',
    text: 'text-[#1a2e05] dark:text-[#ecfccb]',
    muted: 'text-[#365314] dark:text-[#d9f99d]',
    ring: 'border-[#1a2e05]/15 dark:border-[#ecfccb]/15',
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
        <p className="kicker mb-6"><span className="kicker-dot" />Apps & Projects</p>
        <h1 className="page-title mb-8">Things I have shipped.</h1>
        <p className="font-sans text-lg md:text-xl text-ink-muted dark:text-ink-muted-dark leading-relaxed max-w-2xl">
          Live products, real users, from Accra to the world. Each one began as a problem worth solving.
        </p>
      </div>

      <div ref={listRef} className="reveal space-y-20 md:space-y-28">
        {projects.map((proj, i) => {
          const flip = i % 2 === 1
          return (
            <article key={proj.name} className="grid gap-8 md:gap-12 md:grid-cols-12 items-center">
              <div className={`md:col-span-6 ${flip ? 'md:order-2' : ''}`}>
                <a
                  href={proj.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block relative overflow-hidden rounded-surface aspect-[4/3]"
                >
                  <img
                    src={proj.image}
                    alt={proj.imageAlt}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 rounded-full bg-black/50 backdrop-blur-sm px-3 py-1 font-mono text-2xs uppercase tracking-[0.14em] text-white">
                    {proj.number}
                  </div>
                </a>
              </div>

              <div className={`md:col-span-6 ${flip ? 'md:order-1' : ''}`}>
                <p className={`font-mono text-2xs uppercase tracking-[0.14em] mb-4 ${proj.muted}`}>
                  {proj.lang}
                </p>
                <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05] mb-5">
                  {proj.name}
                </h2>
                <p className="font-sans text-base md:text-lg leading-relaxed text-ink-muted dark:text-ink-muted-dark mb-8">
                  {proj.desc}
                </p>
                <a
                  href={proj.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group inline-flex items-center gap-2 rounded-button px-6 py-3 font-medium text-sm ${proj.bg} ${proj.text} transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg`}
                >
                  Visit project
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
