const { test } = require('@playwright/test');
const users = require('../../src/data/users');

test('authenticate and save session', async ({ page }) => {
  await page.goto('/');
  await page.locator('#user-name').fill(users.validUser.username);
  await page.locator('#password').fill(users.validUser.password);
  await page.locator('#login-button').click();

  await page.context().storageState({
    path: 'playwright/.auth/user.json',
  });
});