import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/client'
import { Session } from 'next-auth'

import { v4 as uuidv4 } from 'uuid'

import { IResponse } from '@interfaces'
import { invalidRoute, notAuthorized } from '@utils/API-responses'
import CardCollection from '@models/card_collection'
import dbConnect from '@lib/db'

export default async (req: NextApiRequest, res: NextApiResponse<IResponse>) => {
  const session: Session | null = await getSession({ req })

  if (!session) {
    return notAuthorized(res)
  }

  await dbConnect()

  if (req.method === 'GET') {
    try {
      const result = await CardCollection.find({
        owner_id: session.account.uuid
      })

      return res.status(200).json({
        success: true,
        data: result
      })
    } catch (err) {
      throw err
    }
  } else if (req.method === 'POST') {
    const { collection_name } = req.body
    const collection_id = uuidv4()
    const owner_id = session.account.uuid

    const { _id } = await CardCollection.create({
      collection_id,
      owner_id,
      name: collection_name,
      images: {
        thumbnail: '/some/path',
        header: '/path/header'
      },
      cards: []
    })

    try {
      return res
        .status(200)
        .json({ success: true, data: { message: 'Collection created.', _id } })
    } catch (err) {
      throw err
    }
  }

  return invalidRoute(res)
}
