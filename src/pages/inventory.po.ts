import { Page } from '@playwright/test';
import { getProductSelectorByName } from '../utils/selectors.utils';

export class InventoryPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async isHomePageVisible(): Promise<boolean> {
    return await this.page.locator('.inventory_list').isVisible();
  }

  async addProductToCart(productName: string) {
    const item = this.page.locator(getProductSelectorByName(productName));
    await item.locator('button').click();
  }

  async removeProductFromCart(productName: string) {
    const item = this.page.locator(getProductSelectorByName(productName));
    await item.locator('button').click();
  }

  async getCartCounter(): Promise<number> {
    const badge = this.page.locator('.shopping_cart_badge');
    if ((await badge.count()) === 0) return 0;
    const txt = (await badge.textContent()) ?? '0';
    return Number(txt.trim()) || 0;
  }

  async getProductsWithPrices(): Promise<{ name: string; price: number }[]> {
    const items = this.page.locator('.inventory_item');
    const count = await items.count();
    const results: { name: string; price: number }[] = [];
    for (let i = 0; i < count; i++) {
      const item = items.nth(i);
      const name = (await item.locator('.inventory_item_name').textContent())?.trim() ?? '';
      const priceText = (await item.locator('.inventory_item_price').textContent())?.trim() ?? '$0';
      const price = Number(priceText.replace(/[^0-9.]/g, '')) || 0;
      results.push({ name, price });
    }
    return results;
  }
}