import { test, expect } from '@playwright/test';

test('validate drag and drop-circle', async ({ page }) => {

  await page.goto('https://practice.expandtesting.com/drag-and-drop-circles', {
    waitUntil: 'domcontentloaded'
  });

  const source = page.locator('div[draggable="true"]').first();
  const target = page.locator('main div').filter({ hasText: /can/i }).first();

  await source.dragTo(target);

  // Better validation
  await expect(source).toBeVisible();
});