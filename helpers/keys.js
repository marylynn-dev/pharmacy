//generate secret keys
const crypto = require('crypto')

const key1 = crypto.randomBytes(32).toString('hex') //access token

console.log(key1)