import { NextApiRequest, NextApiResponse } from 'next'
import * as redis from 'redis'

import { IResponse } from '@interfaces'
import PokemonAPI from '@utils/PokemonAPI'

// import cache from '@lib/cache'
import { invalidRoute } from '@utils/API-responses'

export default async (req: NextApiRequest, res: NextApiResponse<IResponse>) => {
  if (req.method === 'GET') {
    const cache = redis.createClient(process.env.REDIS_URI)

    try {
      let value: any
      let cachedValue: any

      cache.get('pokemon-sets', (err, val) => {
        if (err) console.error(err)
        cachedValue = JSON.parse(val)
      })

      if (!cachedValue) {
        const { data } = await PokemonAPI.get('/sets')
        cache.set('pokemon-sets', JSON.stringify(data))
        value = data
      } else {
        value = cachedValue
      }

      return res.status(201).json({
        success: true,
        data: value.data
      })
    } catch (err) {
      console.error(err)
      return res.status(400).json({
        success: false,
        data: {
          message: 'Something went wrong.'
        }
      })
    } finally {
      cache.quit(err => {
        if (err) throw err.message
      })
    }
  }

  return invalidRoute(res)
}
