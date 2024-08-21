import { describe, expect, it } from 'vitest'
import { signIn } from '../../src/auth/sign-in'

describe('signIn', () => {
    it('returns true given correct username & password', () => {
        // arrange
        const USERNAME = 'joe@example.com'
        const PASSWORD = 'pinkfluffykittens'

        // act
        const valid = signIn(USERNAME, PASSWORD)

        // assert
        expect(valid).toBeTruthy()
    })

    it('returns false given incorrect username & password', () => {
        // arrange
        const USERNAME = 'jane@example.com'
        const PASSWORD = 'pinkfluffykittens'

        // act
        const valid = signIn(USERNAME, PASSWORD)

        // assert
        expect(valid).toBeFalsy()
    })
})