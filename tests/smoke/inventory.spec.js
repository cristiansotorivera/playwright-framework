const { test, expect } = require('@playwright/test');

test('@smoke logged-in user can open inventory page', async ({ page }) => {
  await page.goto('/inventory.html');
  await expect(page).toHaveURL(/inventory/);
  await expect(page.locator('.title')).toHaveText('Products');
});