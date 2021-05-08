import { NextApiRequest, NextApiResponse } from 'next'
import * as redis from 'redis'

import { IResponse, PokemonSetIds } from '@interfaces'
import { getPokemonCard } from '@utils/PokemonAPI'

// import cache from '@lib/cache'
import { invalidRoute } from '@utils/API-responses'

export default async (req: NextApiRequest, res: NextApiResponse<IResponse>) => {
  if (req.method === 'GET') {
    const cache = redis.createClient(process.env.REDIS_URI)

    try {
      const { setId, cardNumber } = req.query
      let value: any = null
      let cachedValue: any = null

      cache.get(
        `pokemon-card-setid-cardnumber-${setId}-${cardNumber}`,
        (err, val) => {
          if (err) console.error(err)
          cachedValue = JSON.parse(val)
        }
      )

      if (!cachedValue) {
        const { data } = await getPokemonCard(
          setId as PokemonSetIds,
          cardNumber as string
        )
        if (data.data) {
          cache.set(
            `pokemon-card-setid-cardnumber-${setId}-${cardNumber}`,
            JSON.stringify(data)
          )
          value = data
        }
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
        if (err) throw new Error(err.message)
      })
    }
  }

  return invalidRoute(res)
}
