import { describe, it, expect, beforeEach, vi } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useTheme } from '../useTheme'

describe('useTheme', () => {
  beforeEach(() => {
    localStorage.clear()
    document.documentElement.classList.remove('dark')
    vi.restoreAllMocks()
  })

  it('defaults to light when no stored preference and no system preference', () => {
    vi.spyOn(window, 'matchMedia').mockImplementation(
      (query: string) =>
        ({
          matches: false,
          media: query,
          onchange: null,
          addListener: () => {},
          removeListener: () => {},
          addEventListener: () => {},
          removeEventListener: () => {},
          dispatchEvent: () => false,
        }) as MediaQueryList
    )
    const { result } = renderHook(() => useTheme())
    expect(result.current.theme).toBe('light')
  })

  it('toggles theme', () => {
    const { result } = renderHook(() => useTheme())
    const initial = result.current.theme
    act(() => result.current.toggleTheme())
    expect(result.current.theme).not.toBe(initial)
  })

  it('adds the dark class to html when theme is dark', () => {
    const { result } = renderHook(() => useTheme())
    act(() => {
      if (result.current.theme !== 'dark') result.current.toggleTheme()
    })
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })
})
