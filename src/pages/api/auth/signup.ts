// import { NextApiRequest, NextApiResponse } from 'next'
// import { v4 as uuidv4 } from 'uuid'

// import { IResponse } from '@interfaces'

// import { connectToDatabase } from '@lib/db'
// import { hashPassword } from '@lib/auth'
// import { invalidRoute, unprocessableEntity } from '@utils/API-responses'

// import { signUpSchema } from '@validation/auth-schamas'
// import { AccountRoles } from '@constants/constants'

// export default async (req: NextApiRequest, res: NextApiResponse<IResponse>) => {
//   if (req.method === 'POST') {
//     const { db } = await connectToDatabase()

//     const { username, email, password, signed_up, last_signin } = req.body

//     const validate = signUpSchema.validate(req.body, { abortEarly: false })

//     if (validate.error) {
//       const error = validate.error.details
//       return unprocessableEntity(res, error)
//     }

//     const existingUser = await db
//       .collection('users')
//       .findOne({ $or: [{ email }, { username }] })

//     if (existingUser) {
//       return res.status(422).json({
//         success: false,
//         error: {
//           message: `Email or username already already exists.`
//         }
//       })
//     }

//     const hashedPassword = await hashPassword(password)

//     const result = await db.collection('users').insertOne({
//       uuid: uuidv4(),
//       username,
//       email,
//       password: hashedPassword,
//       signed_up,
//       permissions: AccountRoles.USER,
//       last_signin,
//       images: {
//         profile_picture: '/images/blank-person.jpg'
//       }
//     })

//     return res.status(201).json({
//       success: true,
//       data: result
//     })
//   }

//   return invalidRoute(res)
// }

import { NextApiRequest, NextApiResponse } from 'next'
import { v4 as uuidv4 } from 'uuid'

import { IResponse } from '@interfaces'
import { invalidRoute, unprocessableEntity } from '@utils/API-responses'
import { signUpSchema } from '@validation/auth-schamas'
import { AccountRoles } from '@constants/constants'
import { hashPassword } from '@lib/auth'
import dbConnect from '@lib/db'
import User from '@models/user'

export default async (req: NextApiRequest, res: NextApiResponse<IResponse>) => {
  if (req.method === 'POST') {
    await dbConnect()

    const { username, email, password, signed_up, last_signin } = req.body

    const validate = signUpSchema.validate(req.body, { abortEarly: false })

    if (validate.error) {
      const error = validate.error.details
      return unprocessableEntity(res, error)
    }

    const existingUser = await User.find({ $or: [{ email }, { username }] })

    // if (!existingEmail || !existingUsername) {
    if (existingUser.length) {
      return res.status(422).json({
        success: false,
        error: {
          message: `Email or username already already exists.`
        }
      })
    }

    const hashedPassword = await hashPassword(password)

    const result = await User.create({
      uuid: uuidv4(),
      username,
      email,
      password: hashedPassword,
      signed_up,
      permissions: AccountRoles.USER,
      last_signin,
      images: {
        profile_picture: '/images/blank-person.jpg'
      }
    })

    return res.status(201).json({
      success: true,
      data: result
    })
  }

  return invalidRoute(res)
}
