import { test } from '../fixtures/test.fixture';
import { visualUser } from '../data/credentials.data';
import { expect } from '@playwright/test';

test('Scenario 3: Login as visual_user, print products and verify count', async ({ loginPage, inventoryPage }) => {
  // 1. Navigate to the login page
  await loginPage.navigateToLogin();

  // → Verify login page is visible
  expect(await loginPage.isLoginPageVisible()).toBe(true);

  // 2. Sign in as visual_user
  await loginPage.logIn(visualUser);

  // → Verify home page is visible
  expect(await inventoryPage.isHomePageVisible()).toBe(true);

  // 3. Print all product names to the console
  const products = await inventoryPage.getProductsWithPrices();
  console.log('Products:', products);

  // → Verify that quantity of products is 6
  expect(products.length).toBe(6);
});

test('Scenario 3: Print products with prices', async ({ loginPage, inventoryPage }) => {
  // 1. Navigate to the login page
  await loginPage.navigateToLogin();

  // 2. Sign in as visual_user
  await loginPage.logIn(visualUser);

  // → Verify home page is visible
  expect(await inventoryPage.isHomePageVisible()).toBe(true);

  // 3. Print to the console products in the specified format
  const products = await inventoryPage.getProductsWithPrices();
  for (const p of products) {
    console.log(`${p.name} - $${p.price}`);
  }
  expect(products.length).toBe(6);
});