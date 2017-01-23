const url = require('url')
const { send, createError } = require('micro')
const redis = require('./redis')
const shortid = require('shortid')

/**
 * src/index.js
 * 
 * Micro Kudos index file for the main function
 * Micro kudos let's you add kudos points
 */
module.exports = async function (req, res) {
    const { query, pathname } = url.parse(req.url, true)
    const { method } = req
    const urlKey = pathname && pathname.slice(1)

    if (!(method === 'GET' || method === 'POST')) {
      send(res, 400, 'The only supported methods are `GET` and `POST`')
    }

    // getAll query parameter allows us to get all the related queries
    if (query.getAll) {
      const urls = await getUrls()
      return {
        urls: urls,
        length: urls.length
      }
    }

    if (urlKey && query.increment) {
      return await incrementCount(urlKey)
    } else if (urlKey && query.decrement) {
      const id = query.id
      if (!id) {
        return send(res, 400, 'You need to pass an id in order to decrement the count')
      }
      return await decrementCount(urlKey, id)
    } else if (urlKey) {
      return {
        count: await showCount(urlKey)
      }
    }

    send(res, 200, 'This is a default response')
}

async function getUrls () {
  return redis.zrangeAsync(['urlCounters', 0, -1])
}

/**
 * incrmentCount
 * increments the count for the given url
 *
 * @param {String} url url to be used for incrementing
 * @return {Object} returns the count after performing the count operation
 */
async function incrementCount (url) {
    // shortid to return back to the user
    const uid = shortid.generate()
    const op = await redis.hsetnxAsync(url, uid, Date.now())
    
    // Call to increase the score in the set
    redis.zincrby(['urlCounters', 1, url])

    return {
      increment: op === 1,
      count: await showCount(url),
      key: uid
    }
}

/**
 * decrementCount
 * decrements the count for the given url
 * 
 * @param {String} url url we want the count to be decremented for
 * @param {String} uid 
 */
async function decrementCount (url, uid) {
    console.log(url)
    const op = await redis.hdelAsync(url, uid)
    return {
      decrement: op === 1,
      count: await showCount(url),
      id: uid
    }
}

/**
 * showCount
 * usess hlenAsync in order to get the count for the user
 * 
 * @param {String} key key to be used for the redis database
 * @returns {Number} Number count for the key calculated using the length of the hashmap
 */
async function showCount (key) {
    return await redis.hlenAsync(key)
}