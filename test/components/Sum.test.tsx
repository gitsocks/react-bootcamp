import React from 'react'
import { describe, expect, it, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Sum } from '../../src/components/Sum'

describe('Sum', () => {
    it('renders without crashing', () => {
        render(<Sum />)
        expect(screen.getByText('Hello World')).toBeDefined()
    })
})