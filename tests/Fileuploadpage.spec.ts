import { test, expect } from '@playwright/test';

test('validate file upload', async ({ page }) => {

  await page.goto('https://practice.expandtesting.com/upload');

  const filePath = 'tests/test-data/sample.txt';

  await page.locator('input[type="file"]').setInputFiles(filePath);

  await page.getByRole('button', { name: 'Upload' }).click();

});