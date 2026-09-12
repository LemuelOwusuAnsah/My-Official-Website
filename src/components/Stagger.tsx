import { useReveal } from '../hooks/useReveal'
import type { ReactNode } from 'react'

export function StaggerGrid({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  )
}
