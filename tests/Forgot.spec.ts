import { test, expect } from '@playwright/test';

test('Forgot password - success message', async ({ page }) => {

  await page.goto('https://practice.expandtesting.com/forgot-password', {
    waitUntil: 'domcontentloaded'
  });

  // Fill email
  await page.getByLabel('E-mail').fill('test@example.com');

  // Click button (best locator)
  await page.getByRole('button', { name: /retrieve password/i }).click();

  // Validate success message (FIXED)
  await expect(page.locator('#confirmation-alert'))
    .toContainText(/reset your password/i);
});