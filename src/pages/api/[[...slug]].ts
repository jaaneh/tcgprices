import { NextApiRequest, NextApiResponse } from 'next'

type SessionType = {
  success: boolean
  data?: object
  error?: object
}

export default async (
  _req: NextApiRequest,
  res: NextApiResponse<SessionType>
) => {
  res.status(404).json({
    success: false,
    error: {
      message: 'Invalid route.'
    }
  })
}
