import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/client'
import { Session } from 'next-auth'
import { v4 as uuidv4 } from 'uuid'

import { IResponse } from '@interfaces'
import { invalidRoute, notAuthorized } from '@utils/API-responses'
import CardCollection from '@models/card_collection'
import dbConnect from '@lib/db'

export default async (req: NextApiRequest, res: NextApiResponse<IResponse>) => {
  const session: Session = await getSession({ req })

  if (!session) {
    return notAuthorized(res)
  }

  await dbConnect()

  if (req.method === 'GET') {
    try {
      const result = await CardCollection.findById(session.account._id)

      return res.status(200).json({
        success: true,
        data: result
      })
    } catch (err) {
      throw err
    }
  } else if (req.method === 'POST') {
    const { card } = req.body

    try {
      const filter = { _id: session.account._id }
      const update = {
        $setOnInsert: {
          collection_id: uuidv4(),
          owner_id: session.account.uuid
        },
        $addToSet: {
          cards: card
        }
      }
      const options = {
        upsert: true,
        setDefaultsOnInsert: true
      }

      const result = await CardCollection.updateOne(filter, update, options)

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
