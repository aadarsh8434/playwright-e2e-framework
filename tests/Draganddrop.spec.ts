import { test, expect } from '@playwright/test';

test('Validate drag and drop', async ({ page }) => {

  await page.goto('https://practice.expandtesting.com/drag-and-drop', {
    waitUntil: 'domcontentloaded'
  });

  const source = page.locator('#column-a');
  const target = page.locator('#column-b');

  await source.dragTo(target);

  await expect(page.locator('#column-a')).toContainText('B');
  await expect(page.locator('#column-b')).toContainText('A');

});