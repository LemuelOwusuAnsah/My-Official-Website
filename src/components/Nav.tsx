import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'
import { supportedLanguages } from '../i18n/config'
import ConnectWallet from './ConnectWallet'

const navItems = [
  { to: '/', key: 'nav_home', label: 'Home' },
  { to: '/philosophy', key: 'nav_philosophy', label: 'Philosophy' },
  { to: '/career', key: 'nav_career', label: 'Career' },
  { to: '/skills', key: 'nav_skills', label: 'Skills' },
  { to: '/about', key: 'nav_about', label: 'About' },
  { to: '/work', key: 'nav_work', label: 'Work' },
  { to: '/blog', key: 'nav_blog', label: 'Blog' },
  { to: '/contact', key: 'nav_contact', label: 'Contact' },
  { to: '/wallet', key: 'nav_wallet', label: 'Wallet' },
  { to: '/contracts', key: 'nav_contracts', label: 'Contracts' },
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

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-canvas/85 dark:bg-canvas-dark/85 backdrop-blur-xl border-b border-line dark:border-line-dark'
          : 'bg-canvas/0 dark:bg-canvas-dark/0 border-b border-transparent'
      }`}
    >
      <div className="container-content flex items-center justify-between h-16 md:h-20">
        <NavLink
          to="/"
          className="font-script text-3xl md:text-4xl text-ink dark:text-ink-dark leading-none pt-1"
        >
          Lemy
        </NavLink>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `relative font-sans text-sm transition-colors duration-200 ${
                  isActive
                    ? 'text-ink dark:text-ink-dark'
                    : 'text-ink-muted dark:text-ink-muted-dark hover:text-ink dark:hover:text-ink-dark'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {t(item.key, item.label)}
                  {isActive && (
                    <span className="absolute -bottom-1.5 left-0 right-0 h-px bg-ink dark:bg-ink-dark" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <ConnectWallet />
          <select
            value={i18n.language}
            onChange={(e) => i18n.changeLanguage(e.target.value)}
            className="hidden sm:block bg-transparent text-ink dark:text-ink-dark
                       font-mono text-2xs uppercase tracking-[0.1em]
                       border-0 pr-1 cursor-pointer
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-lemon rounded-button"
            aria-label="Language"
          >
            {supportedLanguages.map((lang) => (
              <option key={lang.code} value={lang.code} className="bg-canvas dark:bg-surface-dark text-ink dark:text-ink-dark">
                {lang.code.toUpperCase()}
              </option>
            ))}
          </select>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-button text-ink dark:text-ink-dark hover:bg-surface-muted dark:hover:bg-surface-muted-dark transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-button text-ink dark:text-ink-dark hover:bg-surface-muted dark:hover:bg-surface-muted-dark transition-colors"
            aria-label="Menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-line dark:border-line-dark bg-canvas dark:bg-canvas-dark">
          <nav className="container-content py-6 flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `py-2.5 font-sans text-base ${
                    isActive
                      ? 'text-ink dark:text-ink-dark'
                      : 'text-ink-muted dark:text-ink-muted-dark'
                  }`
                }
              >
                {t(item.key, item.label)}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
