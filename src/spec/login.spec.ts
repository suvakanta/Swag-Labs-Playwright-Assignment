import { test } from '../fixtures/test.fixture';
import { standardUser } from '../data/credentials.data';
import { expect } from '@playwright/test';

test('Scenario 1: Login and add one product', async ({ loginPage, inventoryPage }) => {
  // 1. Navigate to the login page
  await loginPage.navigateToLogin();

  // 2. Sign in as standard_user
  await loginPage.logIn(standardUser);

  // → Verify home page is visible
  expect(await inventoryPage.isHomePageVisible()).toBe(true);

  // 3. Add one product to the cart
  await inventoryPage.addProductToCart('Sauce Labs Backpack');

  // → Verify the cart counter shows 1
  expect(await inventoryPage.getCartCounter()).toBe(1);
});