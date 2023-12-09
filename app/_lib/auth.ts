import type { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma } from 'globals/prismadb'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET || '',
  session: {
    strategy: 'database',
  },
  callbacks: {
    session: async ({ session, user }) => {
      void prisma.$connect()
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      const userAccount = await prisma.account.findFirst({
        where: {
          userId: user.id,
        },
      })
      void prisma.$disconnect()

      if (!userAccount) {
        return session
      }
      return {
        ...session,
        user: {
          ...session.user,
          userId: userAccount.id,
          accessToken: userAccount.access_token,
        },
      }
    },
  },
}
