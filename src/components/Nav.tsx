import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Menu, X, Moon, Sun, Globe } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'
import { supportedLanguages } from '../i18n/config'

const navItems = [
  { to: '/', key: 'nav_home', label: 'Home' },
  { to: '/about', key: 'nav_about', label: 'About Me' },
  { to: '/skills', key: 'nav_skills', label: 'Skills' },
  { to: '/books', key: 'nav_books', label: 'Books' },
  { to: '/projects', key: 'nav_projects', label: 'Projects' },
  { to: '/work', key: 'nav_work', label: 'Work' },
  { to: '/music', key: 'nav_music', label: 'Music' },
  { to: '/blog', key: 'nav_blog', label: 'Blog' },
  { to: '/contact', key: 'nav_contact', label: 'Contact' },
]

export default function Nav() {
  const { t, i18n } = useTranslation()
  const { theme, toggleTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <header className={`sticky top-0 z-50 transition-colors duration-300 ${
      scrolled
        ? 'bg-canvas/85 dark:bg-canvas-dark/85 backdrop-blur-xl border-b border-line dark:border-line-dark'
        : 'bg-canvas/0 dark:bg-canvas-dark/0 border-b border-transparent'
    }`}>
      <div className="container-content flex items-center justify-between h-16 md:h-20">
        <NavLink to="/" className="font-script text-3xl md:text-4xl text-ink dark:text-ink-dark leading-none pt-1">
          Lemy
        </NavLink>

        <nav className="hidden lg:flex items-center gap-6" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'}
              className={({ isActive }) =>
                `relative font-sans text-sm transition-colors duration-200 ${
                  isActive
                    ? 'text-ink dark:text-ink-dark'
                    : 'text-ink-muted dark:text-ink-muted-dark hover:text-ink dark:hover:text-ink-dark'
                }`
              }>
              {({ isActive }) => (
                <>
                  {t(item.key, item.label)}
                  {isActive && <span className="absolute -bottom-1.5 left-0 right-0 h-px bg-ink dark:bg-ink-dark" />}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <select value={i18n.language} onChange={(e) => i18n.changeLanguage(e.target.value)}
            className="hidden lg:block bg-transparent text-ink dark:text-ink-dark font-mono text-2xs uppercase tracking-[0.1em] border-0 pr-1 cursor-pointer focus:outline-none"
            aria-label="Language">
            {supportedLanguages.map((lang) => (
              <option key={lang.code} value={lang.code} className="bg-canvas dark:bg-surface-dark text-ink dark:text-ink-dark">
                {lang.code.toUpperCase()}
              </option>
            ))}
          </select>

          <span className="lg:hidden inline-flex items-center gap-1 px-2 py-1 rounded-button border border-line dark:border-line-dark font-mono text-2xs uppercase tracking-[0.1em] text-ink-muted dark:text-ink-muted-dark">
            <Globe size={11} />
            {i18n.language.toUpperCase()}
          </span>

          <button onClick={toggleTheme}
            className="p-2 rounded-button text-ink dark:text-ink-dark hover:bg-surface-muted dark:hover:bg-surface-muted-dark transition-colors"
            aria-label="Toggle theme">
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
          </button>

          <button onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-button text-ink dark:text-ink-dark hover:bg-surface-muted dark:hover:bg-surface-muted-dark transition-colors"
            aria-label="Menu">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-line dark:border-line-dark bg-canvas dark:bg-canvas-dark">
          <nav className="container-content py-6 flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === '/'}
                className={({ isActive }) =>
                  `py-2.5 font-sans text-base ${
                    isActive
                      ? 'text-ink dark:text-ink-dark'
                      : 'text-ink-muted dark:text-ink-muted-dark'
                  }`
                }>
                {t(item.key, item.label)}
              </NavLink>
            ))}

            <div className="mt-4 pt-4 border-t border-line dark:border-line-dark">
              <p className="eyebrow mb-3">Language</p>
              <div className="flex flex-wrap gap-2">
                {supportedLanguages.map((lang) => (
                  <button key={lang.code}
                    onClick={() => { i18n.changeLanguage(lang.code); setOpen(false) }}
                    className={`px-3 py-1.5 rounded-button font-mono text-2xs uppercase tracking-[0.1em] transition-colors ${
                      i18n.language === lang.code
                        ? 'bg-ink text-ink-dark dark:bg-ink-dark dark:text-ink'
                        : 'bg-surface-muted dark:bg-surface-muted-dark text-ink-muted dark:text-ink-muted-dark'
                    }`}>
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
