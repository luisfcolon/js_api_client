# Javascript Api Client

[![Build Status](https://travis-ci.org/luisfcolon/js_api_client.svg)](https://travis-ci.org/luisfcolon/js_api_client)
[![Coverage Status](https://coveralls.io/repos/github/luisfcolon/js_api_client/badge.svg?branch=master)](https://coveralls.io/github/luisfcolon/js_api_client?branch=master)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/luisfcolon/js_api_client/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/luisfcolon/js_api_client.svg)](https://github.com/luisfcolon/js_api_client/issues)

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

const response = client.get('/users/1')
    .then(successHandler)
    .catch(errorHandler);
```
