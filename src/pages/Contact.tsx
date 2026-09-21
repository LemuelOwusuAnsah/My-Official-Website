import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Mail, MapPin, Phone, Clock, Send, CheckCircle2, AlertCircle, MessageCircle,
  ArrowUpRight, Briefcase,
} from 'lucide-react'
import { usePageMeta } from '../hooks/usePageMeta'
import { useReveal } from '../hooks/useReveal'
import {
  GithubBrandIcon,
  LinkedInBrandIcon,
  FacebookBrandIcon,
  AppleMusicIcon,
  AppleBooksIcon,
} from '../components/BrandIcons'

const API_ENDPOINT = '/api/send-email'

const directRows = [
  { labelKey: 'contact_email_label', value: 'hello@lemuelowusuansah.org', href: 'mailto:hello@lemuelowusuansah.org', Icon: Mail },
  { labelKey: 'contact_email_alt_label', value: 'owusuansahlemuel@gmail.com', href: 'mailto:owusuansahlemuel@gmail.com', Icon: Mail },
  { labelKey: 'contact_phone_1_label', value: '+233 24 579 1297', href: 'tel:+233245791297', Icon: Phone },
  { labelKey: 'contact_phone_2_label', value: '+233 59 817 6689', href: 'tel:+233598176689', Icon: Phone },
  { labelKey: 'contact_whatsapp_label', value: 'WhatsApp', href: 'https://wa.me/233245791297', Icon: MessageCircle },
  { labelKey: 'contact_location_label', valueKey: 'contact_location_value', Icon: MapPin },
  { labelKey: 'contact_availability_label', valueKey: 'contact_availability_value', Icon: Briefcase },
  { labelKey: 'contact_response_label', valueKey: 'contact_response_value', Icon: Clock },
]

const socials = [
  { key: 'contact_social_github', href: 'https://github.com/LemuelOwusuAnsah', Icon: GithubBrandIcon },
  { key: 'contact_social_linkedin', href: 'https://www.linkedin.com/in/lemuel-owusu-ansah/', Icon: LinkedInBrandIcon },
  { key: 'contact_social_facebook', href: 'https://web.facebook.com/lansmultimedia', Icon: FacebookBrandIcon },
  { key: 'contact_social_books', href: 'https://books.apple.com/gb/author/lemuel-owusu-ansah/id1587403972', Icon: AppleBooksIcon },
  { key: 'contact_social_music', href: 'https://music.apple.com/gh/artist/lemy-newman/1587403970', Icon: AppleMusicIcon },
]

export default function Contact() {
  const { t } = useTranslation()
  usePageMeta({
    title: 'Contact',
    description: 'Get in touch — open to full-stack roles, freelance projects, and collaborative work.',
  })

  const heroRef = useReveal<HTMLDivElement>()
  const formRef = useReveal<HTMLDivElement>()
  const asideRef = useReveal<HTMLDivElement>()

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    setStatus('sending')
    try {
      const res = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          subject: data.get('subject'),
          message: data.get('message'),
        }),
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="container-content py-16 md:py-24">
      <div ref={heroRef} className="reveal max-w-4xl mb-20">
        <p className="kicker mb-6">
          <span className="kicker-dot" />
          {t('contact_script')}
        </p>
        <h1 className="page-title mb-8">{t('contact_page_title')}</h1>
        <p className="font-sans text-lg md:text-xl text-ink-muted dark:text-ink-muted-dark leading-relaxed max-w-2xl">
          {t('contact_intro')}
        </p>
      </div>

      <div className="grid gap-12 lg:gap-16 lg:grid-cols-12">
        <section ref={formRef} className="reveal lg:col-span-7">
          <div className="rule mb-8" />
          <p className="eyebrow mb-8">{t('contact_form_title')}</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="font-mono text-2xs uppercase tracking-[0.14em] text-ink-muted dark:text-ink-muted-dark block mb-2">
                  {t('contact_label_name')}
                </span>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder={t('contact_placeholder_name')}
                  className="w-full rounded-button border border-line dark:border-line-dark bg-surface dark:bg-surface-dark px-4 py-3 font-sans text-sm text-ink dark:text-ink-dark placeholder:text-ink-faint dark:placeholder:text-ink-faint-dark focus:border-lemon dark:focus:border-lemon-dark focus:outline-none focus:ring-2 focus:ring-lemon/30 dark:focus:ring-lemon-dark/30 transition-colors"
                />
              </label>

              <label className="block">
                <span className="font-mono text-2xs uppercase tracking-[0.14em] text-ink-muted dark:text-ink-muted-dark block mb-2">
                  {t('contact_label_email')}
                </span>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder={t('contact_placeholder_email')}
                  className="w-full rounded-button border border-line dark:border-line-dark bg-surface dark:bg-surface-dark px-4 py-3 font-sans text-sm text-ink dark:text-ink-dark placeholder:text-ink-faint dark:placeholder:text-ink-faint-dark focus:border-lemon dark:focus:border-lemon-dark focus:outline-none focus:ring-2 focus:ring-lemon/30 dark:focus:ring-lemon-dark/30 transition-colors"
                />
              </label>
            </div>

            <label className="block">
              <span className="font-mono text-2xs uppercase tracking-[0.14em] text-ink-muted dark:text-ink-muted-dark block mb-2">
                {t('contact_label_subject')}
              </span>
              <input
                name="subject"
                type="text"
                placeholder={t('contact_placeholder_subject')}
                className="w-full rounded-button border border-line dark:border-line-dark bg-surface dark:bg-surface-dark px-4 py-3 font-sans text-sm text-ink dark:text-ink-dark placeholder:text-ink-faint dark:placeholder:text-ink-faint-dark focus:border-lemon dark:focus:border-lemon-dark focus:outline-none focus:ring-2 focus:ring-lemon/30 dark:focus:ring-lemon-dark/30 transition-colors"
              />
            </label>

            <label className="block">
              <span className="font-mono text-2xs uppercase tracking-[0.14em] text-ink-muted dark:text-ink-muted-dark block mb-2">
                {t('contact_label_message')}
              </span>
              <textarea
                name="message"
                required
                rows={7}
                placeholder={t('contact_placeholder_message')}
                className="w-full rounded-button border border-line dark:border-line-dark bg-surface dark:bg-surface-dark px-4 py-3 font-sans text-sm text-ink dark:text-ink-dark placeholder:text-ink-faint dark:placeholder:text-ink-faint-dark focus:border-lemon dark:focus:border-lemon-dark focus:outline-none focus:ring-2 focus:ring-lemon/30 dark:focus:ring-lemon-dark/30 transition-colors resize-y"
              />
            </label>

            <div className="flex items-center gap-4 flex-wrap">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-accent disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? t('contact_sending') : t('contact_submit')}
                <Send size={15} />
              </button>

              {status === 'success' && (
                <span className="inline-flex items-center gap-2 font-sans text-sm text-lemon dark:text-lemon-dark">
                  <CheckCircle2 size={16} />
                  {t('contact_success')}
                </span>
              )}
              {status === 'error' && (
                <span className="inline-flex items-center gap-2 font-sans text-sm text-orange dark:text-orange-dark">
                  <AlertCircle size={16} />
                  {t('contact_error')}
                </span>
              )}
            </div>
          </form>
        </section>

        <aside ref={asideRef} className="reveal lg:col-span-5">
          <div className="rule mb-8" />
          <p className="eyebrow mb-8">{t('contact_direct_title')}</p>

          <ul className="space-y-5 mb-12">
            {directRows.map((row) => {
              const { Icon } = row
              const value = 'value' in row && row.value ? row.value : t(row.valueKey as string)
              const inner = (
                <>
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-button bg-lemon/10 dark:bg-lemon-dark/10 text-lemon dark:text-lemon-dark flex-shrink-0">
                    <Icon size={16} strokeWidth={1.75} />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="font-mono text-2xs uppercase tracking-[0.14em] text-ink-faint dark:text-ink-faint-dark block mb-0.5">
                      {t(row.labelKey)}
                    </span>
                    <span className="font-sans text-sm text-ink dark:text-ink-dark break-words">
                      {value}
                    </span>
                  </span>
                </>
              )
              return (
                <li key={row.labelKey}>
                  {'href' in row && row.href ? (
                    <a
                      href={row.href as string}
                      className="group flex items-start gap-3 hover:text-lemon dark:hover:text-lemon-dark transition-colors"
                    >
                      {inner}
                      <ArrowUpRight
                        size={13}
                        className="mt-2 text-ink-faint dark:text-ink-faint-dark opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                      />
                    </a>
                  ) : (
                    <div className="flex items-start gap-3">{inner}</div>
                  )}
                </li>
              )
            })}
          </ul>

          <div className="rule mb-8" />
          <p className="eyebrow mb-6">{t('contact_elsewhere_title')}</p>

          <ul className="space-y-3">
            {socials.map((s) => {
              const { Icon } = s
              return (
                <li key={s.key}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 font-sans text-sm text-ink-muted dark:text-ink-muted-dark hover:text-ink dark:hover:text-ink-dark transition-colors"
                  >
                    <Icon size={18} />
                    {t(s.key)}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </a>
                </li>
              )
            })}
          </ul>
        </aside>
      </div>
    </div>
  )
}
