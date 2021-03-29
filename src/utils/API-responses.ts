import { NextApiResponse } from 'next'

export const invalidRoute = (res: NextApiResponse) => {
  return res.status(404).json({
    success: false,
    error: {
      message: 'Invalid Route'
    }
  })
}

export const unprocessableEntity = (res: NextApiResponse, message?: any) => {
  return res.status(422).json({
    success: false,
    error: {
      message: message || 'Unprocessable Entity'
    }
  })
}

export const notAuthorized = (res: NextApiResponse) => {
  return res.status(401).json({
    success: false,
    error: {
      message: 'Not Authorized'
    }
  })
}

export const noUserFound = (res: NextApiResponse) => {
  return res.status(404).json({
    success: false,
    error: {
      message: 'No user found'
    }
  })
}
