const request = require('supertest');
const app = require('../app');

describe('POST /search', () => {
  test('should add search query to cache', async () => {
    const res = await request(app)
      .post('/search')
      .send({ search_query: 'The quick brown fox jumps over the lazy dog' });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('status', 'ok');
  });
});

describe('GET /analyse', () => {
  test('should analyze search queries based on analysis token', async () => {
    const res = await request(app).get('/analyse?analysis_token=dGhlIHF1aWNrLHRoZQ==');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('results');
    expect(res.body).toHaveProperty('time');
  });
});
