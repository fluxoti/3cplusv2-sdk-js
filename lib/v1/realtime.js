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
}

module.exports = RealtimeEvents
