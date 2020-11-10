const socketio = require('socket.io-client')
const AgentEndpoints = require('./agent')
const UserEndpoints = require('./user')
const WorkBreakEndpoints = require('./work-breaks')
const CallEndpoints = require('./call')
const RealtimeEvents = require('./realtime')
const IntegrationEvents = require('./integration')
const WebSocket = require('isomorphic-ws')

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
    this.socketio = socketio(url, { transports: ['websocket'], query: { token: this.token, extension }, forceNew: true })
    return this
  }

  /**
   * Websocket connection.
   * @param {string} url Event server url.
   * @returns {V1}
   */
  websocket (url) {
    this.ws = new WebSocket(`${url}?token=${this.token}`)

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
   * Work break endpoints.
   * @returns {WorkBreakEndpoints}
   */
  workBreaks () {
    return new WorkBreakEndpoints(this.client)
  }

  /**
   * Realtime events
   * @returns {}
   */
  realtime () {
    return new RealtimeEvents(this.socketio)
  }

  /**
   * Integration events.
   * @returns {}
   */
  events () {
    return new IntegrationEvents(this.ws)
  }
}

module.exports = V1
