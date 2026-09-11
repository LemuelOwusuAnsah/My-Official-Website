type IconProps = { size?: number; className?: string }

export function AppleMusicIcon({ size = 18, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="applemusic-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FA57C1" />
          <stop offset="100%" stopColor="#FC3C44" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="12" fill="url(#applemusic-grad)" />
      <path
        d="M16.8 7.2c0-.4-.3-.7-.7-.6-.3 0-4.3.9-4.9 1-.5.2-.8.6-.8 1.1v5.7c-.4-.2-.8-.3-1.3-.3-1.6 0-2.9 1.1-2.9 2.5s1.3 2.5 2.9 2.5 2.9-1.1 2.9-2.5V9.4l4.1-.9v4.6c-.4-.2-.8-.3-1.3-.3-1.6 0-2.9 1.1-2.9 2.5s1.3 2.5 2.9 2.5 2.9-1.1 2.9-2.5V7.2z"
        fill="#ffffff"
      />
    </svg>
  )
}

export function AppleBooksIcon({ size = 18, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="applebooks-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF9F0A" />
          <stop offset="100%" stopColor="#FF375F" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="12" fill="url(#applebooks-grad)" />
      <path
        d="M6 5.5v13c1.5-.6 3.5-.9 5.5-.5v-13C9.7 4.6 7.6 4.9 6 5.5zm6.5 0v13c2-.4 4-.1 5.5.5v-13c-1.6-.6-3.6-.9-5.5-.5zM12 5.6c-.2 0-.4 0-.5.1v12.9c.3 0 .5-.1.5-.1s.2 0 .5.1V5.7c-.1 0-.3-.1-.5-.1z"
        fill="#ffffff"
      />
    </svg>
  )
}

export function GithubBrandIcon({ size = 18, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.17c-3.2.69-3.88-1.37-3.88-1.37-.53-1.33-1.29-1.69-1.29-1.69-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.75.81 1.2 1.84 1.2 3.1 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56C20.22 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z"
        fill="currentColor"
      />
    </svg>
  )
}

export function LinkedInBrandIcon({ size = 18, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect width="24" height="24" rx="4" fill="#0A66C2" />
      <path
        d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zm1.78 13.02H3.56V9h3.56v11.45z"
        fill="#ffffff"
      />
    </svg>
  )
}

export function FacebookBrandIcon({ size = 18, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#1877F2" />
      <path
        d="M16.5 8.5h-2c-.3 0-.5.2-.5.5v1.5h2.4l-.4 2.5h-2v6h-2.5v-6H10v-2.5h1.5V8.5c0-1.9 1.1-3 3-3h2v3z"
        fill="#ffffff"
      />
    </svg>
  )
}
