import {test,expect} from '@playwright/test';
test('Validate radio buttons', async ({ page }) => {

  await page.goto('https://practice.expandtesting.com/radio-buttons', {
    waitUntil: 'domcontentloaded'
  });
// select red color
await page.getByLabel('Red').check();
// verify red color is selected
await expect(page.getByLabel('Red')).toBeChecked();
// select blue color
await expect(page.getByLabel('Blue')).not.toBeChecked();
});