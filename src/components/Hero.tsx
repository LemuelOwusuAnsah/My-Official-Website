import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin } from 'lucide-react'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute -top-48 -right-40 h-[40rem] w-[40rem] rounded-full blur-3xl bg-[#a3e635]/40 dark:bg-[#65a30d]/30"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-32 -left-48 h-[32rem] w-[32rem] rounded-full blur-3xl bg-[#00c4cc]/40 dark:bg-[#00c4cc]/25"
        aria-hidden="true"
      />

      <div className="container-content relative pt-16 md:pt-24 pb-20 md:pb-28">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="kicker mb-8">
              <MapPin size={12} />
              {t('hero_kicker', 'Accra, Ghana · Available for work')}
            </div>

            <h1 className="page-title mb-8">
              {t('hero_greeting', 'Hello, I am')}{' '}
              <span className="font-script font-normal text-gold dark:text-gold-dark text-[1.1em] leading-none">
                Lemuel
              </span>{' '}
              Owusu-Ansah.
            </h1>

            <p className="font-sans text-lg md:text-xl text-ink-muted dark:text-ink-muted-dark max-w-2xl leading-relaxed mb-10">
              {t(
                'hero_intro',
                'Full-stack developer, founder of Lans Multimedia, published author, and music producer — building digital products and telling stories from Accra to the world.'
              )}
            </p>

            <div className="flex flex-wrap gap-3">
              <Link to="/work" className="btn-accent">
                {t('hero_cta_work', 'See my work')}
                <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn-outline">
                {t('hero_cta_contact', 'Get in touch')}
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative w-full">
              <img
                src="/images/lemy-banner-desktop-light.webp"
                alt="Lemuel Owusu-Ansah"
                className="w-full h-auto block dark:hidden"
                loading="eager"
              />
              <img
                src="/images/lemy-banner-desktop-dark.webp"
                alt="Lemuel Owusu-Ansah"
                className="w-full h-auto hidden dark:block"
                loading="eager"
              />
            </div>

            <div
              className="hidden md:block absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-[#00c4cc] border-4 border-canvas dark:border-canvas-dark"
              aria-hidden="true"
            />
            <div
              className="hidden md:block absolute -top-6 -left-6 h-16 w-16 rounded-full bg-[#bef264] border-4 border-canvas dark:border-canvas-dark"
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
