import { renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { useSum } from '../../src/hooks/use-sum'

describe('useSum', () => {
    it('returns 5 when given 2 and 3', () => {
        const { result } = renderHook(() => useSum())
        expect(result.current.sum(2, 3)).toEqual(5)
    })
})