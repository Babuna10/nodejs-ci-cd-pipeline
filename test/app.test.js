const request = require('supertest');
const app = require('../src/index'); // Ensure the path to your app is correct

describe('GET /', () => {
  it('should return 200 status and a welcome message', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Welcome to the Node.js CI/CD Pipeline Example!');
  });
});
