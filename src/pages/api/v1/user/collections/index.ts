import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/client'
import { v4 as uuidv4 } from 'uuid'

import { IResponse } from '@interfaces'
import { invalidRoute, notAuthorized } from '@utils/API-responses'
import SavedCards from '@models/saved_cards'
import dbConnect from '@lib/db'

export default async (req: NextApiRequest, res: NextApiResponse<IResponse>) => {
  const session = await getSession({ req })

  if (!session) {
    return notAuthorized(res)
  }

  await dbConnect()

  if (req.method === 'GET') {
    try {
      const result = await SavedCards.findById(session.account._id)

      return res.status(200).json({
        success: true,
        data: result
      })
    } catch (err) {
      throw err
    }
  } else if (req.method === 'POST') {
    const { userId, card } = req.body

    try {
      const filter = { _id: userId }
      const update = {
        $setOnInsert: {
          collection_id: uuidv4()
        },
        $addToSet: {
          cards: card
        }
      }
      const options = {
        upsert: true,
        setDefaultsOnInsert: true
      }

      const result = await SavedCards.updateOne(filter, update, options)

      if (result.ok) {
        return res.status(200).json({
          success: true,
          data: {
            message: 'Saved card'
          }
        })
      } else {
        return res.status(200).json({
          success: false,
          data: {
            message: 'Error adding card'
          }
        })
      }
    } catch (err) {
      throw err
    }
  } else if (req.method === 'DELETE') {
    try {
      return res.status(200).json({
        success: true,
        data: {
          message: 'Deleted card'
        }
      })
    } catch (err) {
      throw err
    }
  }

  return invalidRoute(res)
}

// import { NextApiRequest, NextApiResponse } from 'next'
// import { getSession } from 'next-auth/client'
// import { v4 as uuidv4 } from 'uuid'

// import { ObjectID } from 'mongodb'

// import { IResponse } from '@interfaces'
// import { invalidRoute, notAuthorized } from '@utils/API-responses'
// import { connectToDatabase } from '@lib/db'

// export default async (req: NextApiRequest, res: NextApiResponse<IResponse>) => {
//   const { db } = await connectToDatabase()
//   const session = await getSession({ req })

//   if (!session) {
//     return notAuthorized(res)
//   }

//   if (req.method === 'GET') {
//     try {
//       const result = await db
//         .collection('saved_cards')
//         .findOne({ _id: new ObjectID(session.account._id) })

//       return res.status(200).json({
//         success: true,
//         data: result
//       })
//     } catch (err) {
//       throw err
//     }
//   } else if (req.method === 'POST') {
//     const { card } = req.body

//     try {
//       const filter = { _id: new ObjectID(session.account._id) }
//       const update = {
//         $setOnInsert: {
//           collection_id: uuidv4()
//         },
//         $addToSet: {
//           cards: card
//         }
//       }
//       const options = { upsert: true }

//       const result = await db
//         .collection('saved_cards')
//         .updateOne(filter, update, options)

//       if (result.result.ok) {
//         return res.status(200).json({
//           success: true,
//           data: {
//             message: 'Saved card'
//           }
//         })
//       } else {
//         return res.status(200).json({
//           success: false,
//           data: {
//             message: 'Error adding card'
//           }
//         })
//       }
//     } catch (err) {
//       throw err
//     }
//   }

//   return invalidRoute(res)
// }
