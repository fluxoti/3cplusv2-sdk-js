class CallEndpoints {
  /**
   * Call endpoints for the 3cplus api.
   * @param {object} client - HTTP client instance.
   */
  constructor (client) {
    this.client = client
  }

  /**
   * History of calls with filters.
   * @param {object} data
   * @returns {Promise}
   */
  history (data) {
    return this.client.get('/calls', data)
  }

  /**
   * Download a recorded call.
   * @param {integer} year
   * @param {integer} month
   * @param {integer} day
   * @param {string} filename
   * @returns {Promise}
   */
  download (year, month, day, filename) {
    return this.client.get(`/records/${year}/${month}/${day}/${filename}`)
  }
}

module.exports = CallEndpoints
