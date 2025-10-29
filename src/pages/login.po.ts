import { Page } from '@playwright/test';
import { TCredentials } from '../types/TCredentials';

export class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToLogin(): Promise<void> {
    await this.page.goto('/');
  }

  async logIn(creds: TCredentials): Promise<void> {
    await this.page.fill('[data-test="username"]', creds.username);
    await this.page.fill('[data-test="password"]', creds.password);
    await this.page.click('[data-test="login-button"]');
  }

  async isLoginPageVisible(): Promise<boolean> {
    return await this.page.isVisible('[data-test="login-button"]');
  }

  async isErrorMessageVisible(): Promise<boolean> {
    return await this.page.isVisible('[data-test="error"]');
  }
}