import { NextApiRequest, NextApiResponse } from 'next'

import { IResponse, PokemonSetIds } from '@interfaces'
import { getPokemonSetCards } from '@utils/PokemonAPI'

import { getRedisClient } from '@lib/redis-v3'
import { invalidRoute } from '@utils/API-responses'

export default async (req: NextApiRequest, res: NextApiResponse<IResponse>) => {
  if (req.method === 'GET') {
    const cache = getRedisClient()

    try {
      const { setId } = req.query
      let value: any
      let cachedValue: any

      cache.get(`pokemon-cards-setid-${setId}`, (err, val) => {
        if (err) console.error(err)
        cachedValue = JSON.parse(val)
      })

      if (!cachedValue) {
        const { data } = await getPokemonSetCards(setId as PokemonSetIds)
        cache.set(`pokemon-cards-setid-${setId}`, JSON.stringify(data))
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
      // cache.quit()
    }
  }

  return invalidRoute(res)
}
