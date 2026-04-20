const { test, expect } = require('@playwright/test');
const { PostsApi } = require('../../src/api/postsApi');
const { expectStatus } = require('../../src/api/apiAssertions');
const apiData = require('../../src/data/apiData');

test('@api update a post', async ({ request }) => {
  const postsApi = new PostsApi(request);

  const response = await postsApi.updatePost(1, apiData.updatedPost);
  expectStatus(response, 200);

  const body = await response.json();

  expect(body.title).toBe(apiData.updatedPost.title);
  expect(body.body).toBe(apiData.updatedPost.body);
});