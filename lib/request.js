const axios = require('axios')

class Request {
  /**
   * Create an API client wrapper object
   * @param {object} options - Options for the axios instance
   */
  constructor (options) {
    this.client = axios.create(options)
  }
}

module.exports = Request
