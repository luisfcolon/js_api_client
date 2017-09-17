# Javascript Api Client

[![Build Status](https://travis-ci.org/luisfcolon/js-api-client.svg?branch=master)](https://travis-ci.org/luisfcolon/js-api-client)
[![Coverage Status](https://coveralls.io/repos/github/luisfcolon/js-api-client/badge.svg?branch=master)](https://coveralls.io/github/luisfcolon/js-api-client?branch=master)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/luisfcolon/js-api-client/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/luisfcolon/js-api-client.svg)](https://github.com/luisfcolon/js-api-client/issues)

Javascript api client wrapper around Axios.

## Installation

With yarn

```
yarn add js_api_client
```

With npm

```
npm install js_api_client --save
```

## Usage

```js
import ApiClient from 'js_api_client';

const client = new ApiClient({
  baseURL: 'https://www.some-api-base-url',
});

// get

const getResponse = client.get('/users/1')
    .then(successHandler)
    .catch(errorHandler);

// post
    
const userData = {
    firstName: 'Luis',
    lastName: 'Colon',
};

const postResponse = client.post('/users', userData)
    .then(successHandler)
    .catch(errorHandler);

// etc

```
