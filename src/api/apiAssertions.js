const { expect } = require('@playwright/test');

function expectStatus(response, expectedStatus) {
  expect(response.status()).toBe(expectedStatus);
}

function expectPostShape(post) {
  expect(post).toHaveProperty('id');
  expect(post).toHaveProperty('title');
  expect(post).toHaveProperty('body');
}

module.exports = {
  expectStatus,
  expectPostShape,
};