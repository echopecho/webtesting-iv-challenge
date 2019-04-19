const server = require('./server.js');
const request = require('supertest');

describe('the server', () => {
  it('should set the testing environmnet', () => {
    const env = process.env.DB_ENV;
    expect(env).toBe('testing');
  })
})