const socketio = require('socket.io-client')
const AgentEndpoints = require('./agent')
const UserEndpoints = require('./user')
const CallEndpoints = require('./call')
const RealtimeEvents = require('./realtime')

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
    this.token = token
    this.client.defaults.headers.common['Authorization'] = `Bearer ${token}`
    return this
  }

  /**
   * Set the socket url.
   * @param {string} url Socket server url
   * @returns {V1}
   */
  socket (url, extension = false) {
    this.socketio = socketio(url, { transports: ['websocket'], query: { token: this.token, extension } })
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

  /**
   * Call endpoints.
   * @returns {CallEndpoints}
   */
  call () {
    return new CallEndpoints(this.client)
  }

  /**
   * Realtime events
   * @returns {}
   */
  realtime () {
    return new RealtimeEvents(this.socketio)
  }
}

module.exports = V1
