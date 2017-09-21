import moxios from 'moxios';
import sinon from 'sinon';

import ApiClient from './index';


describe('ApiClient', () => {
  let client;
  let successSpy;

  beforeEach(() => {
    moxios.install();
    successSpy = sinon.spy();

    client = new ApiClient({
      baseURL: 'https://www.wooticals.com',
    });
  });

  afterEach(() => {
    moxios.uninstall();
    successSpy.reset();
  });

  it('throws an error if a base url is not provided', () => {
    expect(() => {
      const badClient = new ApiClient();
      badClient.get();
    }).toThrow();
  });

  it('properly instantiates an api client if a baseURL is provided', () => {
    expect(new ApiClient({ baseURL: '123' })).toBeInstanceOf(ApiClient);
  });

  it('returns a rejected promise for api calls with error based response status', (done) => {
    moxios.stubRequest('https://www.wooticals.com/say/hello', {
      status: 404,
    });

    const errorSpy = sinon.spy();
    client.get('/say/hello').catch(errorSpy);

    moxios.wait(() => {
      expect(errorSpy.getCall(0).args[0].response.status).toEqual(404);
      done();
    });
  });

  it('throws an exception if a non status based error occurs', () => {
    expect(() => {
      ApiClient.error({});
    }).toThrow();
  });

  it('calls the api client get method', (done) => {
    moxios.stubRequest('https://www.wooticals.com/say/hello', {
      status: 200,
      responseText: 'hello',
    });

    client.get('/say/hello').then(successSpy);

    moxios.wait(() => {
      expect(successSpy.getCall(0).args[0].config.method).toEqual('get');
      expect(successSpy.getCall(0).args[0].data).toEqual('hello');
      done();
    });
  });

  it('calls the api client post method', (done) => {
    moxios.stubRequest('https://www.wooticals.com/say/hello', {
      status: 200,
    });

    client.post('/say/hello').then(successSpy);

    moxios.wait(() => {
      expect(successSpy.getCall(0).args[0].config.method).toEqual('post');
      done();
    });
  });

  it('calls the api client put method', (done) => {
    moxios.stubRequest('https://www.wooticals.com/say/hello', {
      status: 200,
    });

    client.put('/say/hello').then(successSpy);

    moxios.wait(() => {
      expect(successSpy.getCall(0).args[0].config.method).toEqual('put');
      done();
    });
  });

  it('calls the api client patch method', (done) => {
    moxios.stubRequest('https://www.wooticals.com/say/hello', {
      status: 200,
    });

    client.patch('/say/hello').then(successSpy);

    moxios.wait(() => {
      expect(successSpy.getCall(0).args[0].config.method).toEqual('patch');
      done();
    });
  });

  it('calls the api client delete method', (done) => {
    moxios.stubRequest('https://www.wooticals.com/say/hello', {
      status: 200,
    });

    client.delete('/say/hello').then(successSpy);

    moxios.wait(() => {
      expect(successSpy.getCall(0).args[0].config.method).toEqual('delete');
      done();
    });
  });
});
