class ProductsPage {
  constructor(page) {
    this.page = page;
    this.addBackpackButton = page.locator('#add-to-cart-sauce-labs-backpack');
    this.cartLink = page.locator('.shopping_cart_link');
    this.pageTitle = page.locator('.title');
  }

  async goto() {
    await this.page.goto('/inventory.html');
  }

  async addBackpackToCart() {
    await this.addBackpackButton.click();
  }

  async openCart() {
    await this.cartLink.click();
  }
}

module.exports = { ProductsPage };