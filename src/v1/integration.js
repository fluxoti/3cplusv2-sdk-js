const EventEmitter = require('events')

class IntegrationEvents {
  /**
   * Integration events
   * @param {object} ws - Websocket conn
   */
  constructor (ws) {
    this.ws = ws
    this.eventemitter = new EventEmitter()

    this.connect()

    var _self = this
    this.ws.onopen = () => {
      _self.eventemitter.emit('open')
    }

    this.ws.onmessage = (evt) => {
      const data = JSON.parse(evt.data)
      const { type } = data
      _self.eventemitter.emit('message', data)
      _self.eventemitter.emit(type, data)
    }
  }

  connect () {
    var _self = this
    this.ws.onclose = () => {
      _self.eventemitter.emit('close')
      setTimeout(() => {
        _self.connect()
      }, 1000)
    }

    this.ws.onerror = (err) => {
      _self.eventemitter.emit('error', err)
      _self.ws.close()
    }
  }

  on (name, cb) {
    this.eventemitter.on(name, cb)
  }

  close () {
    this.ws.close()
  }
}

module.exports = IntegrationEvents
