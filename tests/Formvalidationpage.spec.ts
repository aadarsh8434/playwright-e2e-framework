import {test,expect} from '@playwright/test';
test('validate form validation', async ({page}) => {
    await page.goto('https://practice.expandtesting.com/form-validation',{
        waitUntil: 'domcontentloaded'
});
//fill name
await page.getByLabel('Contact Name').fill('Hello');
//fill contact number
await page.getByLabel('Contact Name').fill('1234567890');
// fill date
  await page.getByLabel('PickUp Date').fill('2026-05-10');
// select payment
await page.getByLabel('Payment Method').selectOption('card');
// click submit 
await page.getByRole('button', { name: ' Register '}).click();
});