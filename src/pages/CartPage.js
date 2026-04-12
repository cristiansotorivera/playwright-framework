const { expect } = require('@playwright/test');

class CartPage {
  constructor(page) {
    this.page = page;
    this.cartItem = page.locator('.cart_item');
    this.itemName = page.locator('.inventory_item_name');
  }

  async assertItemVisible(itemName) {
    await expect(this.itemName).toContainText(itemName);
  }
}

module.exports = { CartPage };