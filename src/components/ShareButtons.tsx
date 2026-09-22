import { useState } from 'react'
import { Link2, Check } from 'lucide-react'

function WhatsAppIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.52 3.48A11.94 11.94 0 0 0 12.06 0C5.48 0 .14 5.34.13 11.92c0 2.1.55 4.16 1.6 5.97L0 24l6.24-1.63a11.94 11.94 0 0 0 5.81 1.48h.01c6.58 0 11.92-5.34 11.93-11.92a11.86 11.86 0 0 0-3.47-8.45zM12.06 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.7.97.99-3.61-.24-.37a9.85 9.85 0 0 1-1.52-5.28c0-5.46 4.44-9.9 9.91-9.9a9.83 9.83 0 0 1 7 2.9 9.82 9.82 0 0 1 2.9 7c0 5.47-4.44 9.9-9.94 9.9z" />
    </svg>
  )
}

function FacebookIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94z" />
    </svg>
  )
}

function LinkedInIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}

function TwitterIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

type Props = {
  url: string
  title: string
  cover: string
}

export default function ShareButtons({ url, title, cover }: Props) {
  const [copied, setCopied] = useState(false)

  const shareUrl = url
  const shareTitle = title
  const shareImage = cover.startsWith('http') ? cover : `${typeof window !== 'undefined' ? window.location.origin : ''}${cover}`

  function shareTo(network: 'facebook' | 'whatsapp' | 'linkedin' | 'twitter') {
    const e = encodeURIComponent
    const u = e(shareUrl)
    const t = e(shareTitle)

    const urls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${u}`,
      whatsapp: `https://wa.me/?text=${t}%20${u}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${u}`,
      twitter: `https://twitter.com/intent/tweet?url=${u}&text=${t}`,
    }
    window.open(urls[network], '_blank', 'width=600,height=600,noopener,noreferrer')
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      /* ignore */
    }
  }

  return (
    <div className="mt-16 pt-8 border-t border-line dark:border-line-dark">
      <p className="font-mono text-2xs uppercase tracking-[0.14em] text-ink-faint dark:text-ink-faint-dark mb-4">
        Share this post
      </p>

      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={() => shareTo('whatsapp')}
          aria-label="Share on WhatsApp"
          className="inline-flex items-center justify-center w-10 h-10 rounded-button border border-line dark:border-line-dark text-ink dark:text-ink-dark hover:border-[#25D366] hover:text-[#25D366] transition-colors"
        >
          <WhatsAppIcon />
        </button>

        <button
          onClick={() => shareTo('facebook')}
          aria-label="Share on Facebook"
          className="inline-flex items-center justify-center w-10 h-10 rounded-button border border-line dark:border-line-dark text-ink dark:text-ink-dark hover:border-[#1877F2] hover:text-[#1877F2] transition-colors"
        >
          <FacebookIcon />
        </button>

        <button
          onClick={() => shareTo('linkedin')}
          aria-label="Share on LinkedIn"
          className="inline-flex items-center justify-center w-10 h-10 rounded-button border border-line dark:border-line-dark text-ink dark:text-ink-dark hover:border-[#0A66C2] hover:text-[#0A66C2] transition-colors"
        >
          <LinkedInIcon />
        </button>

        <button
          onClick={() => shareTo('twitter')}
          aria-label="Share on X"
          className="inline-flex items-center justify-center w-10 h-10 rounded-button border border-line dark:border-line-dark text-ink dark:text-ink-dark hover:border-ink dark:hover:border-ink-dark transition-colors"
        >
          <TwitterIcon />
        </button>

        <button
          onClick={copyLink}
          aria-label="Copy link"
          className="inline-flex items-center gap-2 rounded-button px-4 py-2 font-mono text-2xs uppercase tracking-[0.14em] text-ink dark:text-ink-dark border border-line dark:border-line-dark hover:border-ink dark:hover:border-ink-dark transition-colors"
        >
          {copied ? <Check size={13} className="text-lemon dark:text-lemon-dark" /> : <Link2 size={13} />}
          {copied ? 'Copied' : 'Copy link'}
        </button>
      </div>

      <link rel="preload" as="image" href={shareImage} />
    </div>
  )
}
