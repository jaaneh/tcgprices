import NextAuth from 'next-auth'

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `Provider` React Context
   */
  interface Session {
    expires: string
    account: {
      images: {
        profile_picture: string
      }
      permissions: string
      _id: string
      uuid: string
      username: string
      email: string
      password: string
      signed_up: number
      last_signin: number
    }
  }
}
