import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { X } from 'lucide-react'

const STORAGE_KEY = 'lemy-cookie-consent'

type Choice = 'accepted' | 'rejected' | null

export default function CookieBanner() {
  const { t } = useTranslation()
  const [choice, setChoice] = useState<Choice>(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const stored = (localStorage.getItem(STORAGE_KEY) as Choice) ?? null
    setChoice(stored)
    if (!stored) {
      const id = setTimeout(() => setOpen(true), 1200)
      return () => clearTimeout(id)
    }
  }, [])

  function decide(value: 'accepted' | 'rejected') {
    localStorage.setItem(STORAGE_KEY, value)
    setChoice(value)
    setOpen(false)
  }

  if (choice || !open) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md z-[70] animate-fade-up">
      <div className="rounded-surface border border-line dark:border-line-dark bg-surface dark:bg-surface-dark shadow-2xl p-5 md:p-6">
        <div className="flex items-start justify-between gap-3 mb-4">
          <p className="font-sans text-sm leading-relaxed text-ink dark:text-ink-dark">
            {t('cookie_banner_text', 'We use cookies to improve your experience and analyse traffic. Read our Cookie Policy for details.')}{' '}
            <Link
              to="/legal/cookies"
              className="link font-medium"
            >
              {t('cookie_privacy_link', 'Cookie Policy')}
            </Link>
          </p>
          <button
            onClick={() => decide('rejected')}
            aria-label="Dismiss"
            className="p-1 rounded-button text-ink-faint dark:text-ink-faint-dark hover:bg-surface-muted dark:hover:bg-surface-muted-dark transition-colors flex-shrink-0"
          >
            <X size={16} />
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => decide('accepted')}
            className="inline-flex items-center justify-center rounded-button px-4 py-2 font-medium text-sm bg-ink text-canvas dark:bg-ink-dark dark:text-canvas-dark hover:-translate-y-0.5 transition-all"
          >
            {t('cookie_accept', 'Accept')}
          </button>
          <button
            onClick={() => decide('rejected')}
            className="inline-flex items-center justify-center rounded-button px-4 py-2 font-medium text-sm border border-line dark:border-line-dark text-ink dark:text-ink-dark hover:-translate-y-0.5 transition-all"
          >
            {t('cookie_reject', 'Reject')}
          </button>
        </div>
      </div>
    </div>
  )
}
