const { test, expect } = require('@playwright/test');

test('basic test - open page', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example/);
});