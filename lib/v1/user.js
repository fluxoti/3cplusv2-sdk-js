class UserEndpoints {
  /**
   * User endpoints for the 3cplus api.
   * @param {object} client - HTTP client instance.
   */
  constructor (client) {
    this.client = client
  }

  /**
   * User profile information.
   * @returns {Promise}
   */
  me () {
    return this.client.get('/me')
  }
}

module.exports = UserEndpoints
