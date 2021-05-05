import * as redis from 'redis'

// const client = redis.createClient(process.env.REDIS_URI)
// export default client

// client.on('error', e => console.log(e))

// export function getRedisClient() {
//   if (client) {
//     client.on('error', e => console.log(e))
//     return client
//   }
//   client.quit()
//   return redis.createClient(process.env.REDIS_URI)
// }

const client = redis.createClient(process.env.REDIS_URI)

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
