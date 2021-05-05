import { NextApiRequest, NextApiResponse } from 'next'

import { IResponse } from '@interfaces'
import { invalidRoute } from '@utils/API-responses'
import CardCollection from '@models/card_collection'
import dbConnect from '@lib/db'

export default async (req: NextApiRequest, res: NextApiResponse<IResponse>) => {
  await dbConnect()

  if (req.method === 'GET') {
    const { collectionId } = req.query

    try {
      const result = await CardCollection.findOne({
        //@ts-ignore
        collection_id: collectionId
      })

      return res.status(200).json({
        success: true,
        data: result
      })
    } catch (err) {
      throw err
    }
  }

  return invalidRoute(res)
}
