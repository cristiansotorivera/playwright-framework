const { test, expect } = require('@playwright/test');
const { PostsApi } = require('../../src/api/postsApi');
const { expectStatus, expectPostShape } = require('../../src/api/apiAssertions');

test('@api get a post by id', async ({ request }) => {
  const postsApi = new PostsApi(request);

  const response = await postsApi.getPostById(1);
  expectStatus(response, 200);

  const body = await response.json();

  expectPostShape(body);
  expect(body.id).toBe(1);
});