const { createClient, RedisClient, Multi } = require('redis')
const { promisifyAll } = require('bluebird')

// Promisifying Redis Client
promisifyAll(RedisClient.prototype)
promisifyAll(Multi.prototype)

// We'll get passed a REDIS_URL as an environment url
// Otherwise the default redis url 'redis://localhost:6379' is used
// for connecting to a redis instance
const REDIS_URL = process.env.REDIS_URL || 'redis://localhost:6379'

const client = createClient(REDIS_URL)

client.on('ready', (event) => {
  console.log('Redis client is ready')
})

client.on('error', (error) => {
  console.error('error occured while connecting to client')
  console.error(error)
})

module.exports = client
