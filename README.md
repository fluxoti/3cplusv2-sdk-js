# 3Cplus SDK JS

A SDK used internally to contact the api and socket of the 3cplusv2 exposing a consistent and reusable interface.

## Installation

```bash
yarn add 'git+ssh://git@gitlab.fluxoti.com/3cplus/sdk-js#master' --save
```

## Usage

```js
const TcApi = require('./lib')

// The constructor receives the same options as the axios.create
const client = new TcApi({
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