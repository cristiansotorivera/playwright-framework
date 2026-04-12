const { test, expect } = require('../../src/fixtures/test-fixtures');
const users = require('../../src/data/users');

test('@auth @smoke invalid login example', async ({ loginPage }) => {
  await loginPage.goto();
  await loginPage.login(users.invalidUser.username, users.invalidUser.password);

  await loginPage.assertErrorVisible();
});

test('@auth @smoke valid login example', async ({ loginPage, page }) => {
  await loginPage.goto();
  await loginPage.login(users.validUser.username, users.validUser.password);

  await expect(page).toHaveURL(/inventory/);
});