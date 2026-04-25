import { test, expect } from '@playwright/test';

test('validate locators', async ({ page }) => {

  await page.goto('https://practice.expandtesting.com/locators', {
    waitUntil: 'domcontentloaded'
  });

  // getByRole
  await page.getByRole('button', { name: 'Add Item' }).click();

  // getByText
  await expect(
    page.getByText('Latest news and updates')
  ).toBeVisible();

  // getByLabel
  await page.getByLabel('Email for newsletter')
    .fill('abc123@gmail.com');

  // getByPlaceholder
  await page.getByPlaceholder('Search the site')
    .fill('playwright');

  // getByAltText
  await expect(
    page.getByAltText('User avatar')
  ).toBeVisible();

  // getByTitle
  await page.getByText('Reload').click();

  // getByTestId
await expect(
  page.getByTestId('status-message')
).toContainText('All systems operational');
});