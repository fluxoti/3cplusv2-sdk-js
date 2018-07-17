const AgentEndpoints = require('./agent')
const UserEndpoints = require('./user')

class V1 {
  /**
   * Client for the 3cplus V1 api.
   * @param {object} client - The HTTP client instance
   */
  constructor (client) {
    this.client = client
    this.client.defaults.baseURL += '/v1'
  }

  /**
   * Set a default authorization token.
   * @param {string} token Authorization token
   * @returns {V1}
   */
  withAuth (token) {
    this.client.defaults.headers.common['Authorization'] = `Bearer ${token}`
    return this
  }

  /**
   * Check if the token is a JWT one.
   * @param {string} token Authorization token
   * @returns {boolean}
   */
  isJwtToken (token) {
    return token.length !== 60
  }

  /**
   * Agent endpoints.
   * @returns {AgentEndpoints}
   */
  agent () {
    return new AgentEndpoints(this.client)
  }

  /**
   * User endpoints.
   * @returns {UserEndpoints}
   */
  user () {
    return new UserEndpoints(this.client)
  }
}

module.exports = V1
