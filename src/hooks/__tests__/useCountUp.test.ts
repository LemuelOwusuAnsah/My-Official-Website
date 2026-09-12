import { describe, it, expect } from 'vitest'
import { renderHook } from '@testing-library/react'
import { useCountUp } from '../useCountUp'

describe('useCountUp', () => {
  it('starts at 0', () => {
    const { result } = renderHook(() => useCountUp(100))
    expect(result.current.value).toBe(0)
  })

  it('returns a ref', () => {
    const { result } = renderHook(() => useCountUp(50))
    expect(result.current.ref).toBeDefined()
  })
})
