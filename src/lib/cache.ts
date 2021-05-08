import * as redis from 'redis'

const client: redis.RedisClient = redis.createClient(process.env.REDIS_URI)

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
