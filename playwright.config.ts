import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './src/spec',
  fullyParallel: true,
  retries: 1,
  use: {
    baseURL: 'https://www.saucedemo.com',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  reporter: 'html',
  expect: {
    timeout: 10000,
  },
  video: 'retain-on-failure',
  screenshot: 'only-on-failure',
});