Swag Labs Playwright Framework
A minimal UI test automation framework using Playwright and TypeScript for testing Swag Labs (https://www.saucedemo.com). Supports multiple user roles with Page Object Model and fixtures.

Prerequisites
Node.js 16+
npm

Installation:
Clone the repo: git clone https://github.com/your-username/swag-labs-playwright-framework.git
Install dependencies: npm install
Install Playwright browsers: npx playwright install

Running Tests
Run all tests: npm test
View reports: Open playwright-report/index.html

Project Structure:
src/spec/: Test files
src/pages/: Page Objects
src/data/: Credentials
src/types/: Type definitions
src/fixtures/: Test fixtures

Troubleshooting
Ensure files are in correct paths.
Run npx tsc --noEmit for TypeScript errors.
Use npx playwright test --headed for debugging.
For issues, check Playwright docs or open a GitHub issue.




