const Request = require('./request')
const V1 = require('./v1')

class Api extends Request {
  /**
   * Create an API client wrapper object.
   */
  constructor (options) {
    super(options)
    this.client.defaults.baseURL += '/api'
  }

  /**
   * Create an API client wrapper object.
   * @returns {V1}
   */
  v1 () {
    return new V1(this.client)
  }
}

module.exports = Api
