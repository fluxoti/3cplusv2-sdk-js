# 3Cplus SDK JS

A SDK used internally to contact the api and socket of the 3cplusv2 exposing a consistent and reusable interface.

## Installation

```bash
yarn add 3cplusv2-sdk-js --save
```

## Usage

```js
import TcSDK from '3cplusv2-sdk-js'

// The constructor receives the same options as axios.create
const sdk = new TcSDK({
  baseURL: "https://app.3c.fluxoti.com"
})
.v1()
.withAuth('your_api_token_here')

// Http Api
sdk.user().me()
.then((response) => console.log(response.data))
.catch((err) => console.log(err.response.data))

// Realtime integration events
sdk = sdk.websocket('wss://events.3c.fluxoti.com/ws/me')
const events = sdk.events()

events.on('open', () => console.log('Connected'))
events.on('close', () => console.log('Connection closed'))
events.on('error', err => console.log(err))
events.on('message', evt => console.log(evt))
events.on('event-name-here', evt => console.log(evt))

// Realtime events (legacy)
sdk = sdk.socket('https://socket.3c.fluxoti.com')
const socket = sdk.realtime().integration()

socket.on('connect', (event) => console.log('Listening for events'))
socket.on('integration', (event) => console.log(event))
socket.on('error', (err) => console.log(err))
```

All available api endpoints are under `.vX()`, separated by sections. Each method return an axios promise.

Please refer to the [Api Documentation](http://api-docs.3c.fluxoti.com) for more info about the conventions of the request parameters, responses and errors.
