import { test, expect } from '@playwright/test';

test('validate cpu frame for dynamic table', async ({ page }) => {

  await page.goto('https://practice.expandtesting.com/dynamic-table', {
    waitUntil: 'domcontentloaded'
  });

  // Step 1: Find CPU column index dynamically
  const headers = page.locator('thead th');
  const headerCount = await headers.count();

  let cpuIndex = -1;

  for (let i = 0; i < headerCount; i++) {
    const text = await headers.nth(i).innerText();
    if (text.includes('CPU')) {
      cpuIndex = i;
      break;
    }
  }

  expect(cpuIndex).not.toBe(-1);

  // Step 2: Find Chrome row and get CPU value
  const rows = page.locator('tbody tr');
  const rowCount = await rows.count();

  let chromeCPU = '';

  for (let i = 0; i < rowCount; i++) {
    const rowText = await rows.nth(i).innerText();

    if (rowText.includes('Chrome')) {
      chromeCPU = await rows.nth(i)
        .locator('td')
        .nth(cpuIndex)
        .innerText();
      break;
    }
  }

  // Step 3: Get value from yellow label
  const labelText = await page.locator('#chrome-cpu').innerText();
  const labelCPU = labelText.split(':')[1].trim();

  // Step 4: Assertion
  expect(chromeCPU.trim()).toBe(labelCPU);
});