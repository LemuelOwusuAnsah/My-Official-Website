import { useScrollProgress } from '../hooks/useScrollProgress'

export default function ReadingProgress() {
  const progress = useScrollProgress()
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-transparent pointer-events-none">
      <div
        className="h-full bg-lemon dark:bg-lemon-dark transition-[width] duration-75 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
