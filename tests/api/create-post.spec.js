const { test, expect } = require('@playwright/test');
const { PostsApi } = require('../../src/api/postsApi');
const apiData = require('../../src/data/apiData');

test('@api create a post', async ({ request }) => {
  const postsApi = new PostsApi(request);

  const response = await postsApi.createPost(apiData.newPost);

  expect(response.status()).toBe(201);

  const body = await response.json();

  expect(body).toHaveProperty('id');
  expect(body.title).toBe(apiData.newPost.title);
  expect(body.body).toBe(apiData.newPost.body);
  expect(body.userId).toBe(apiData.newPost.userId);
});