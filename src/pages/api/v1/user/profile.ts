import { NextApiRequest, NextApiResponse } from 'next'

import { IResponse } from '@interfaces'
import { invalidRoute } from '@utils/API-responses'

export default async (req: NextApiRequest, res: NextApiResponse<IResponse>) => {
  if (req.method === 'GET') {
    return res.status(200).json({
      success: true,
      data: {
        message: 'Hello!'
      }
    })
  }

  return invalidRoute(res)
}
