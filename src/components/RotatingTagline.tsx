import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const KEYS = ['tagline_role_1', 'tagline_role_2', 'tagline_role_3', 'tagline_role_4']
const DEFAULTS = ['Full-stack developer', 'Founder of Lans Multimedia', 'Published author', 'Music producer — Lemy Newman']

export default function RotatingTagline() {
  const { t } = useTranslation()
  const [i, setI] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const id = setInterval(() => {
      setFade(false)
      setTimeout(() => { setI((p) => (p + 1) % KEYS.length); setFade(true) }, 300)
    }, 3200)
    return () => clearInterval(id)
  }, [])

  return (
    <span
      className={`inline-block transition-all duration-300 ${fade ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'}`}
    >
      {t(KEYS[i], DEFAULTS[i])}
    </span>
  )
}
