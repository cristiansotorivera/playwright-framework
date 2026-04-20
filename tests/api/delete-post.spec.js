const { test } = require('@playwright/test');
const { PostsApi } = require('../../src/api/postsApi');
const { expectStatus } = require('../../src/api/apiAssertions');

test('@api delete a post', async ({ request }) => {
  const postsApi = new PostsApi(request);

  const response = await postsApi.deletePost(1);
  expectStatus(response, 200);
});