const { test, expect } = require('@playwright/test');
const { PostsApi } = require('../../src/api/postsApi');
const { expectStatus, expectPostShape } = require('../../src/api/apiAssertions');

test('@api get posts list', async ({ request }) => {
  const postsApi = new PostsApi(request);

  const response = await postsApi.getPosts();
  expectStatus(response, 200);

  const body = await response.json();

  expect(Array.isArray(body)).toBe(true);
  expect(body.length).toBeGreaterThan(0);
  expectPostShape(body[0]);
});