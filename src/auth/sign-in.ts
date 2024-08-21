export const signIn = (username: string, password: string) => {
    const VALID_USERNAME = 'joe@example.com'
    const VALID_PASSWORD = 'pinkfluffykittens'

    return username === VALID_USERNAME && password === VALID_PASSWORD
}