import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

// import { connectToDatabase } from '@lib/db'
import { verifyPassword } from '@lib/auth'
import dbConnect from '@lib/db'
import User from '@models/user'
import { ICredentials } from '@interfaces'

export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, {
    providers: [
      Providers.Credentials({
        name: 'Sign In',
        credentials: {
          username: {
            label: 'Username',
            type: 'text',
            placeholder: 'Username'
          },
          password: { label: 'Password', type: 'password' },
          repeatPassword: { label: 'Repeat Password', type: 'password' }
        },
        async authorize(credentials: ICredentials) {
          await dbConnect()

          const user = await User.findOneAndUpdate(
            { username: credentials.username },
            { $set: { last_signin: Date.now() } },
            { new: true }
          )

          if (!user) {
            throw new Error('No user found.')
          }

          const isValid = await verifyPassword(
            credentials.password,
            user.password
          )

          if (!isValid) {
            throw new Error('Could not log you in.')
          }

          return { user }
        }
      })
    ],
    database: process.env.MONGODB_URI,
    secret: process.env.AUTH_SECRET,
    session: {
      jwt: true
    },
    jwt: {
      // signingKey: process.env.JWT_SIGNING_KEY,
      secret: process.env.JWT_SECRET
    },
    pages: {
      signIn: '/auth/signin',
      signOut: '/',
      error: '/',
      verifyRequest: '/',
      newUser: null
    },
    callbacks: {
      jwt: async (token, user, _account, _profile, _isNewUser) => {
        user && (token = user)
        return token
      },
      session: async (session: any, user: any) => {
        delete session.user
        delete user.user.password
        session.account = user.user
        return session
      }
    }
  })
