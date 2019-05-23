class WorkBreakEndpoints {
  /**
   * Work Break endpoints for the 3cplus api.
   * @param {object} client - HTTP client instance.
   */
  constructor (client) {
    this.client = client
  }

  /**
   * Get work break groups
   * @param {object} data
   * @returns {Promise}
   */
  workBreakGroups (data) {
    return this.client.get('/work_break_group', data)
  }

  /**
   * Create a work break groups
   * @param {object} data
   * @returns {Promise}
   */
  createWorkBreakGroup (data) {
    return this.client.post('/work_break_group', data)
  }

  /**
   * Delete work break groups
   * @param {string} id
   * @returns {Promise}
   */
  deleteWorkBreakGroup (id) {
    return this.client.delete(`/work_break_group/${id}`)
  }

  /**
   * Update a work break groups
   * @param {string} id
   * @param {object} data
   * @returns {Promise}
   */
  updateWorkBreakGroup (id, data) {
    return this.client.put(`/work_break_group/${id}`, data)
  }

  /**
   * Get the work break intervals
   * @param {string} workBreakId
   * @param {object} data
   * @returns {Promise}
   */
  workBreakGroupIntervals (workBreakId, data) {
    return this.client.get(`/work_break_group/${workBreakId}/intervals`, data)
  }

  /**
   * Create an interval in a work break group
   * @param {string} workBreakId
   * @param {object} data
   * @returns {Promise}
   */
  createWorkBreakGroupInterval (workBreakId, data) {
    return this.client.post(`/work_break_group/${workBreakId}/intervals`, data)
  }

  /**
   * Update a interval in a work break group
   * @param {string} workBreakId
   * @param {string} intervalId
   * @param {object} data
   * @returns {Promise}
   */
  updateWorkBreakGroupInterval (workBreakId, intervalId, data) {
    return this.client.put(`/work_break_group/${workBreakId}/intervals/${intervalId}`, data)
  }
  /**
   * Delete a interval in a work break group
   * @param {string} workBreakId
   * @param {string} intervalId
   * @returns {Promise}
   */
  deleteWorkBreakGroupInterval (workBreakId, intervalId) {
    return this.client.delete(`/work_break_group/${workBreakId}/intervals/${intervalId}`)
  }
}

module.exports = WorkBreakEndpoints
