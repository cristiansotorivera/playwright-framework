const { test, expect } = require('@playwright/test');
const { PostsApi } = require('../../src/api/postsApi');
const { expectStatus } = require('../../src/api/apiAssertions');

test('@api update a post', async ({ request }) => {
  const postsApi = new PostsApi(request);

  const updatedPayload = {
    id: 1,
    title: 'Updated Title',
    body: 'Updated body content',
    userId: 1,
  };

  const response = await request.put('/posts/1', {
    data: updatedPayload,
  });

  expectStatus(response, 200);

  const body = await response.json();

  expect(body.title).toBe(updatedPayload.title);
  expect(body.body).toBe(updatedPayload.body);
});