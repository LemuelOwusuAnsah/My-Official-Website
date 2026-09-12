import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Mail, ArrowUpRight } from 'lucide-react'
import {
  GithubBrandIcon,
  LinkedInBrandIcon,
  FacebookBrandIcon,
  AppleMusicIcon,
  AppleBooksIcon,
} from './BrandIcons'

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/LemuelOwusuAnsah', Icon: GithubBrandIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/lemuel-owusu-ansah/', Icon: LinkedInBrandIcon },
  { label: 'Lans Multimedia', href: 'https://web.facebook.com/lansmultimedia', Icon: FacebookBrandIcon },
  { label: 'Lemy Newman · Apple Music', href: 'https://music.apple.com/gh/artist/lemy-newman/1587403970', Icon: AppleMusicIcon },
  { label: 'Lemuel · Apple Books', href: 'https://books.apple.com/gb/author/lemuel-owusu-ansah/id1587403972', Icon: AppleBooksIcon },
]

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="mt-24 md:mt-32">
      <div className="bg-[#bef264] dark:bg-[#4d7c0f] text-[#1a2e05] dark:text-[#ecfccb]">
        <div className="container-content py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-12 items-end">
            <div className="md:col-span-8">
              <p className="font-mono text-2xs uppercase tracking-[0.14em] mb-6 text-[#365314] dark:text-[#d9f99d]">
                {t('footer_kicker', 'Say hello')}
              </p>
              <h2 className="font-display text-4xl md:text-6xl font-semibold tracking-tightest leading-[0.95] mb-6">
                {t('footer_cta_title', 'Let us build something worth keeping.')}
              </h2>
              <p className="font-sans text-lg md:text-xl leading-relaxed max-w-2xl text-[#365314] dark:text-[#d9f99d]">
                {t('footer_cta_body', 'Open to full-stack roles, freelance projects, and collaborative work.')}
              </p>
            </div>

            <div className="md:col-span-4 md:justify-self-end">
              <NavLink
                to="/contact"
                className="inline-flex items-center gap-2 rounded-button px-6 py-3.5 font-medium text-sm bg-[#1a2e05] text-[#bef264] transition-all duration-200 ease-out-expo hover:-translate-y-0.5 hover:shadow-lg"
              >
                {t('footer_cta_button', 'Start a conversation')}
                <ArrowUpRight size={16} />
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1a1a1a] dark:bg-[#0a0a0a] text-white">
        <div className="container-content py-16 md:py-20">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="font-script text-4xl md:text-5xl text-[#fbbf24] mb-4 leading-none pt-2">
                Lemy
              </p>
              <p className="font-sans text-sm text-white/60 max-w-sm leading-relaxed">
                {t('footer_tagline', 'Web developer, author, founder, and music producer from Accra, Ghana.')}
              </p>
            </div>

            <div className="md:col-span-3">
              <p className="font-mono text-2xs uppercase tracking-[0.14em] text-[#fb923c] mb-5">
                {t('explore_title', 'Explore')}
              </p>
              <ul className="space-y-3">
                {[
                  { to: '/skills', label: t('footer_skills', 'Skills') },
                  { to: '/engineering', label: t('footer_engineering', 'Engineering') },
                  { to: '/now', label: t('footer_now', 'Now') },
                  { to: '/work', label: t('footer_work', 'Work') },
                  { to: '/blog', label: t('footer_blog', 'Blog') },
                  { to: '/contact', label: t('nav_contact', 'Contact') },
                ].map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      className="group inline-flex items-center gap-2 font-sans text-sm text-white/70 hover:text-[#bef264] transition-colors"
                    >
                      {item.label}
                      <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-4">
              <p className="font-mono text-2xs uppercase tracking-[0.14em] text-[#fb923c] mb-5">
                {t('hire_title', 'Elsewhere')}
              </p>
              <ul className="space-y-3">
                {socialLinks.map((s) => {
                  const { Icon } = s
                  return (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2.5 font-sans text-sm text-white/70 hover:text-[#bef264] transition-colors"
                      >
                        <Icon size={16} />
                        {s.label}
                        <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </li>
                  )
                })}
                <li>
                  <NavLink
                    to="/contact"
                    className="group inline-flex items-center gap-2.5 font-sans text-sm text-white/70 hover:text-[#bef264] transition-colors"
                  >
                    <Mail size={14} />
                    {t('nav_contact', 'Contact')}
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="container-content py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="font-mono text-2xs uppercase tracking-[0.14em] text-white/40">
              © {year} Lemuel Owusu-Ansah
            </p>
            <div className="flex flex-wrap items-center gap-4">
            <NavLink to="/legal/privacy" className="font-mono text-2xs uppercase tracking-[0.14em] text-white/40 hover:text-white/80 transition-colors">Privacy</NavLink>
            <NavLink to="/legal/terms" className="font-mono text-2xs uppercase tracking-[0.14em] text-white/40 hover:text-white/80 transition-colors">Terms</NavLink>
            <NavLink to="/legal/cookies" className="font-mono text-2xs uppercase tracking-[0.14em] text-white/40 hover:text-white/80 transition-colors">Cookies</NavLink>
            <span className="font-mono text-2xs uppercase tracking-[0.14em] text-white/40">Accra · Ghana</span>
          </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
