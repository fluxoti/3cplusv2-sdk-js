class AgentEndpoints {
  /**
   * Agent endpoints for the 3cplus api.
   * @param {object} client - HTTP client instance.
   */
  constructor (client) {
    this.client = client
  }

  /**
   * The call history of the agent.
   * @param {object} data
   * @returns {Promise}
   */
  calls (data) {
    return this.client.get('/agent/calls', data)
  }

  /**
   * Login an agent.
   * @param {object} data
   * @returns {Promise}
   */
  login (data) {
    return this.client.post('/agent/login', data)
  }
  
  /**
   * Login an agent into manual mode.
   * @param {object} data
   * @returns {Promise}
   */
  loginManual (data) {
    const defaultData = { mode: 'manual' };
    return this.login({ ...data, ...defaultData });
  }

  /**
   * Logout an agent.
   * @returns {Promise}
   */
  logout () {
    return this.client.post('/agent/logout')
  }

  /**
   * Connect an agent.
   * @returns {Promise}
   */
  connect () {
    return this.client.post('/agent/connect')
  }

  /**
   * Retrieve the agent campaigns.
   * @param {object} data Optional request parameters
   * @returns {Promise}
   */
  campaigns (data) {
    return this.client.get('/agent/campaigns', data)
  }

  /**
   * Qualify a call.
   * @param {string} callId
   * @param {object} data
   * @returns {Promise}
   */
  qualifyCall (callId, data) {
    return this.client.post('/agent/call/' + callId + '/qualify', data)
  }

  /**
   * Hangup a call.
   * @param {string} callId
   * @returns {Promise}
   */
  hangupCall (callId) {
    return this.client.post('/agent/call/' + callId + '/hangup')
  }

  /**
   * Enter in manual call mode.
   * @returns {Promise}
   */
  enterManualCallMode () {
    return this.client.post('/agent/manual_call/enter')
  }

  /**
   * Exit manual call mode.
   * @returns {Promise}
   */
  exitManualCallMode () {
    return this.client.post('/agent/manual_call/exit')
  }

  /**
   * Enter manual call Acw mode.
   * @returns {Promise}
   */
  enterManualCallAcwMode () {
    return this.client.post('/agent/manual_call_acw/enter')
  }

  /**
   * Exit manual call Acw mode.
   * @returns {Promise}
   */
  exitManualCallAcwMode () {
    return this.client.post('/agent/manual_call_acw/exit')
  }

  /**
   * Dial a manual call.
   * @param {object} data
   * @returns {Promise}
   */
  dialManualCall (data) {
    return this.client.post('/agent/manual_call/dial', data)
  }

  /**
   * Dial a manual call in acw.
   * @param {object} data
   * @returns {Promise}
   */
  dialManualCallAcw (data) {
    return this.client.post('/agent/manual_call_acw/dial', data)
  }
}

module.exports = AgentEndpoints
