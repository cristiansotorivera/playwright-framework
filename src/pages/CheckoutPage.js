const { expect } = require('@playwright/test');

class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.checkoutButton = page.locator('#checkout');
    this.firstNameInput = page.locator('#first-name');
    this.lastNameInput = page.locator('#last-name');
    this.postalCodeInput = page.locator('#postal-code');
    this.continueButton = page.locator('#continue');
    this.finishButton = page.locator('#finish');
    this.completeHeader = page.locator('.complete-header');
    this.errorMessage = page.locator('[data-test="error"]');
  }

  async startCheckout() {
    await this.checkoutButton.click();
  }

  async fillInformation(firstName, lastName, postalCode) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
    await this.continueButton.click();
  }

  async continueCheckout() {
    await this.continueButton.click();
  }

  async finishCheckout() {
    await this.finishButton.click();
  }

  async assertOnCheckoutStepOne() {
    await expect(this.page).toHaveURL(/checkout-step-one/);
  }

  async assertOnCheckoutStepTwo() {
    await expect(this.page).toHaveURL(/checkout-step-two/);
  }

  async assertOrderComplete() {
    await expect(this.completeHeader).toHaveText('Thank you for your order!');
  }

  async assertErrorVisible() {
    await expect(this.errorMessage).toBeVisible();
  }
}

module.exports = { CheckoutPage };