import axios from 'axios';
import has from 'ohas';


const defaultConfig = {
  headers: {
    Accept: 'application/x.kidfund.v2+json, application/json',
    'Content-Type': 'application/json',
  },
  timeout: 8000,
};

class ApiClient {
  constructor(config = {}) {
    if (!has(config, 'baseURL')) {
      throw new Error('baseURL is required for the api client to work');
    }

    this.client = axios.create(Object.assign({}, defaultConfig, config));
  }

  get(path, params = {}) {
    return this.client.get(path, params);
  }

  post(path, data = {}) {
    return this.client.post(path, data);
  }

  put(path, data = {}) {
    return this.client.put(path, data);
  }

  patch(path, data = {}) {
    return this.client.patch(path, data);
  }

  delete(path, data = {}) {
    return this.client.delete(path);
  }
}

export default ApiClient;
