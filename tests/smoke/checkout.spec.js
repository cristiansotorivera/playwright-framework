const { test } = require('@playwright/test');
const { ProductsPage } = require('../../src/pages/ProductsPage');
const { CheckoutPage } = require('../../src/pages/CheckoutPage');
const checkoutData = require('../../src/data/checkoutData');

test('@smoke logged-in user can complete a checkout flow', async ({ page }) => {
  const productsPage = new ProductsPage(page);
  const checkoutPage = new CheckoutPage(page);

  await productsPage.goto();
  await productsPage.addBackpackToCart();
  await productsPage.openCart();

  await checkoutPage.startCheckout();
  await checkoutPage.assertOnCheckoutStepOne();

  await checkoutPage.fillInformation(
    checkoutData.customer.firstName,
    checkoutData.customer.lastName,
    checkoutData.customer.postalCode
  );
  await checkoutPage.assertOnCheckoutStepTwo();

  await checkoutPage.finishCheckout();
  await checkoutPage.assertOrderComplete();
});