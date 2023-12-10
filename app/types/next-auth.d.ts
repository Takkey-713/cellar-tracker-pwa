import NextAuth from 'next-auth' // eslint-disable-line

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `Provider` React Context
   */
  interface Session {
    user: {
      id: string
    }
  }
}
