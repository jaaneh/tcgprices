import * as redis from 'redis'

const client = redis.createClient(process.env.REDIS_URI)
export default client

client.on('error', e => console.log(e))

export function getRedisClient() {
  if (client) {
    client.on('error', e => console.log(e))
    return client
  }
  client.quit()
  return redis.createClient(process.env.REDIS_URI)
}
