const { test } = require('@playwright/test');
const { ProductsPage } = require('../../src/pages/ProductsPage');
const { CartPage } = require('../../src/pages/CartPage');

test('@smoke logged-in user can add an item to the cart', async ({ page }) => {
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);

  await productsPage.goto();
  await productsPage.addBackpackToCart();
  await productsPage.openCart();
  await cartPage.assertItemVisible('Sauce Labs Backpack');
});