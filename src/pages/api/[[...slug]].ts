import { NextApiRequest, NextApiResponse } from 'next'

import { IResponse } from '@interfaces'
import { invalidRoute } from '@utils/API-responses'

export default async (
  _req: NextApiRequest,
  res: NextApiResponse<IResponse>
) => {
  return invalidRoute(res)
}
