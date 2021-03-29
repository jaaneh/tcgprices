// import { NextApiRequest, NextApiResponse } from 'next'
// import { getSession } from 'next-auth/client'

// import { ObjectID } from 'mongodb'

// import { IResponse } from '@interfaces'
// import {
//   invalidRoute,
//   notAuthorized,
//   noUserFound,
//   unprocessableEntity
// } from '@utils/API-responses'
// import { connectToDatabase } from '@lib/db'
// import { hashPassword, verifyPassword } from '@lib/auth'
// import { compareStrings } from '@utils/helpers'

// import { forgotPasswordSchema } from '@validation/auth-schamas'

// export default async (req: NextApiRequest, res: NextApiResponse<IResponse>) => {
//   const session = await getSession({ req })

//   if (!session) {
//     return notAuthorized(res)
//   }

//   const { db } = await connectToDatabase()

//   if (req.method === 'PATCH') {
//     try {
//       const { current_password, new_password } = req.body

//       const validate = forgotPasswordSchema.validate(req.body, {
//         abortEarly: false
//       })

//       if (validate.error) {
//         const error = validate.error.details[0]
//         console.log(error.message)
//         return unprocessableEntity(res, error)
//       }

//       if (compareStrings(current_password, new_password)) {
//         return res.status(403).json({
//           success: false,
//           data: {
//             message: "Old and new passwords can't be similar"
//           }
//         })
//       }

//       const user = await db
//         .collection('users')
//         .findOne({ _id: new ObjectID(session.account._id) })

//       if (!user) {
//         return noUserFound(res)
//       }

//       // current user password from db
//       const currentPassword = user.password
//       // verify provided old password with current password
//       const passwordIsValid = await verifyPassword(
//         current_password,
//         currentPassword
//       )

//       if (!passwordIsValid) {
//         return res.status(403).json({
//           success: false,
//           data: {
//             message: 'Invalid old password.'
//           }
//         })
//       }

//       // hash incoming new password
//       const hashedPassword = await hashPassword(new_password)

//       // mongodb filter and query
//       const updateFilter = { _id: new ObjectID(session.account._id) }
//       const updateQuery = { $set: { password: hashedPassword } }

//       // Update user with new hashed password
//       await db.collection('users').updateOne(updateFilter, updateQuery)

//       return res.status(200).json({
//         success: true,
//         data: {
//           message: 'Password changed.'
//         }
//       })
//     } catch (err) {
//       throw err
//     }
//   }

//   return invalidRoute(res)
// }

import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/client'

import { IResponse } from '@interfaces'
import {
  invalidRoute,
  notAuthorized,
  noUserFound,
  unprocessableEntity
} from '@utils/API-responses'
import { hashPassword, verifyPassword } from '@lib/auth'
import { compareStrings } from '@utils/helpers'
import { forgotPasswordSchema } from '@validation/auth-schamas'
import dbConnect from '@lib/db'
import User from '@models/user'

export default async (req: NextApiRequest, res: NextApiResponse<IResponse>) => {
  const session = await getSession({ req })

  if (!session) {
    return notAuthorized(res)
  }

  await dbConnect()

  if (req.method === 'PATCH') {
    try {
      const { current_password, new_password } = req.body

      const validate = forgotPasswordSchema.validate(req.body, {
        abortEarly: false
      })

      if (validate.error) {
        const error = validate.error.details[0]
        console.log(error.message)
        return unprocessableEntity(res, error)
      }

      if (compareStrings(current_password, new_password)) {
        return res.status(403).json({
          success: false,
          data: {
            message: "Old and new passwords can't be similar"
          }
        })
      }

      const user = await User.findById(session.account._id)

      if (!user) {
        return noUserFound(res)
      }

      // current user password from db
      const currentPassword = user.password
      // verify provided old password with current password
      const passwordIsValid = await verifyPassword(
        current_password,
        currentPassword
      )

      if (!passwordIsValid) {
        return res.status(403).json({
          success: false,
          data: {
            message: 'Invalid old password.'
          }
        })
      }

      // hash incoming new password
      const hashedPassword = await hashPassword(new_password)

      // Update user with new hashed password
      await User.updateOne(
        { _id: session.account._id },
        { $set: { password: hashedPassword } }
      )

      return res.status(200).json({
        success: true,
        data: {
          message: 'Password changed.'
        }
      })
    } catch (err) {
      throw err
    }
  }

  return invalidRoute(res)
}
