import { test } from '../fixtures/test.fixture';
import { standardUser } from '../data/credentials.data';
import { expect } from '@playwright/test';

test('Scenario 2: Login, add two products, remove one', async ({ loginPage, inventoryPage }) => {
  // 1. Navigate to the login page
  await loginPage.navigateToLogin();

  // → Verify login page is visible
  expect(await loginPage.isLoginPageVisible()).toBe(true);

  // 2. Sign in as standard_user
  await loginPage.logIn(standardUser);

  // → Verify home page is visible
  expect(await inventoryPage.isHomePageVisible()).toBe(true);

  // 3. Add two products to the cart
  await inventoryPage.addProductToCart('Sauce Labs Backpack');
  await inventoryPage.addProductToCart('Sauce Labs Bike Light');

  // → Verify the counter shows 2
  expect(await inventoryPage.getCartCounter()).toBe(2);

  // 4. Remove one product from the cart
  await inventoryPage.removeProductFromCart('Sauce Labs Backpack');

  // → Verify the counter returns to 1
  expect(await inventoryPage.getCartCounter()).toBe(1);
});