import { test, expect } from '@playwright/test';

test('validate file download link', async ({ page }) => {

  await page.goto('https://practice.expandtesting.com/download');

  const fileLink = page.getByRole('link', { name: 'wdio.png' });

  await expect(fileLink).toBeVisible();

  await fileLink.click();

});