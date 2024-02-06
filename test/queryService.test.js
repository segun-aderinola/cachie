const { addQueryString, searchString } = require('../services/query');

describe('addSearchQuery', () => {
  test('should add search query to cache', async () => {
    await addQueryString('The quick brown fox jumps over the lazy dog');
  });
});

describe('analyseSearchQueries', () => {
  test('should analyze search queries based on analysis token', async () => {
    await searchString('dGhlIHF1aWNrLHRoZQ==');
  });
});
