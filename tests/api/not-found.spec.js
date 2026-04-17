const { test } = require('@playwright/test');
const { PostsApi } = require('../../src/api/postsApi');
const { expectStatus } = require('../../src/api/apiAssertions');

test('@api get a non-existent post returns 404', async ({ request }) => {
  const postsApi = new PostsApi(request);

  const response = await postsApi.getPostById(999999);
  expectStatus(response, 404);
});