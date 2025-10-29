import { test } from '../fixtures/test.fixture';
import { expect } from '@playwright/test';

test('Scenario 4: Unauthenticated access to inventory', async ({ loginPage, page }) => {
  // 1. Navigate as unauthenticated user directly to /inventory.html
  await page.goto('/inventory.html');

  // → Verify redirection to login page
  expect(await loginPage.isLoginPageVisible()).toBe(true);

  // → Verify an error message is shown
  expect(await loginPage.isErrorMessageVisible()).toBe(true);
});