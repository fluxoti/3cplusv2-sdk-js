const JsSIP = require('jssip')

class RealtimeEvents {
  /**
   * Realtime events
   * @param {object} socket - Socket.io client
   */
  constructor (socket) {
    this.socket = socket
  }

  /**
   * Realtime integration socket
   * @returns {object}
   */
  integration () {
    return this.socket
  }

  /**
   * Sip web extension
   * @returns {object}
   */
  extension (options) {
    const url = 'wss://' + options.host + ':' + options.port
    const socket = new JsSIP.WebSocketInterface(url)
    const sipOptions = {
      sockets: [ socket ],
      register: true,
      register_expires: 30,
      session_timers: false,
      uri: 'sip:' + options.user + '@' + options.host,
      password: options.password
    }
    return new JsSIP.UA(sipOptions)
  }
}

module.exports = RealtimeEvents
