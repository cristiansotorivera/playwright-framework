const { test } = require('@playwright/test');
const { ProductsPage } = require('../../src/pages/ProductsPage');
const { CheckoutPage } = require('../../src/pages/CheckoutPage');

test('@smoke checkout shows error when required information is missing', async ({ page }) => {
  const productsPage = new ProductsPage(page);
  const checkoutPage = new CheckoutPage(page);

  await productsPage.goto();
  await productsPage.addBackpackToCart();
  await productsPage.openCart();

  await checkoutPage.startCheckout();
  await checkoutPage.assertOnCheckoutStepOne();

  await checkoutPage.continueCheckout();
  await checkoutPage.assertErrorVisible();
});