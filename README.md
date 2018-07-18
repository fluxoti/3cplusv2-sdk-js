# 3Cplus SDK JS

A SDK used internally to contact the api and socket of the 3cplusv2 exposing a consistent and reusable interface.

## Installation

```bash
yarn add 'git+ssh://git@github.com/fluxoti/3cplusv2-sdk-js#master' --save
```

## Usage

```js
import TcSDK from '3cplusv2-sdk-js'

// The constructor receives the same options as the axios.create
const client = new TcSDK({
  baseURL: "https://app.3c.fluxoti.com"
})
.v1()
.withAuth('your_api_token_here')

client.user().me().then(function (response) {
  console.log(response.data)
})
.catch(function(err) {
  console.log(err.response.data)
})
```

All available api endpoints are under `.vX()`, separated by sections. Each method return an axios promise.

Please refer to the [Api Documentation](http://api-docs.3c.fluxoti.com) for more info about the conventions of the request parameters, responses and errors.