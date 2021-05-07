import * as redis from 'redis'

let client: redis.RedisClient

if (process.env.NODE_ENV === 'production') {
  client = redis.createClient(process.env.REDIS_URI)
} else {
  client = redis.createClient()
}

client.on('connect', () => {
  console.log('> Redis connected.')
})

client.on('ready', () => {
  console.log('> Redis ready.')
})

client.on('error', err => {
  console.log(err.message)
})

client.on('end', () => {
  console.log('> Redis disconnected.')
})

process.on('SIGINT', () => {
  client.quit()
})

export default client
