import { describe, expect, it } from 'vitest'
import { signIn, createUser } from '../../src/auth/auth'

/**
 * Welcome to Phase 1 Tests. Within phase 1, we will be tackling basic concepts including: 
 * 1. functions
 * 2. variables
 * 3. objects
 */

/**
 * Users should be able to sign in on the app. To sign in, they can use a simple email & password passed in as parameters.
 */
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
        expect(valid).toBe(false)
    })
})


/**
 * The signUp function should create a new account for the users which they can then use to sign in.
 * The function takes in an object as the parameter as the new user which should be created.
 */
describe('signUp', () => {
    it('creates a new account', () => {
        // arrange
        const newUser = {
            name: 'John Doe',
            email: 'john.doe@example.com',
            password: 'pinkfluffykittens'
        }

        // act
        const createdUser = createUser(newUser)

        // assert
        expect(createdUser).toBeDefined()
    })

    it('does not include the password in the created user', () => {
        // arrange
        const newUser = {
            name: 'John Doe',
            email: 'john.doe@example.com',
            password: 'pinkfluffykittens'
        }

        // act
        const createdUser = createUser(newUser)

        // assert
        expect(createdUser['password']).toBeUndefined()
    })
})