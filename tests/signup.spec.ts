//form fill up 
// import { test, expect,Page } from "@playwright/test";
//   test('Handle all input fields', async ({ page }: { page: Page }) => {
//     //Navigate to page
//     await page.goto("https://practice.expandtesting.com/inputs");

//     //fill number input 
//     const Numberinput= page.getByLabel('Input: Number');
//     await Numberinput.fill('123');
//     await expect(Numberinput).toHaveValue('123');
//     //Fill text input
//     const Textinput= page.getByLabel('Input: Text');
//     await Textinput.fill('Aadarsh');
//     await expect(Textinput).toHaveValue('Aadarsh');
//     // Fill password input
//     const passwordinput = page.getByLabel('Input: password');
//     await passwordinput.fill('12345');
//     await expect(passwordinput).toHaveValue('12345');
//     // Fill date input
//     const Dateinput = page.getByLabel('Input: Date');
//     await Dateinput.fill('2026-10-24');
//     await expect(Dateinput).toHaveValue('2026-10-24');

  //login page 
// import { test, expect } from "@playwright/test";

// test('Invalid login test', async ({ page }) => {

//   await page.goto("https://practice.expandtesting.com/login", {
//     waitUntil: "domcontentloaded"
//   });

//   await page.getByLabel("Username").fill("wronguser");
//   await page.getByLabel("Password").fill("SuperSecretPassword!");

//   await page.getByRole("button", { name: 'Login' }).click();

//   // Flexible validation (BEST)
//   await expect(page.locator('#flash'))
//     .toContainText(/invalid/i);
// });
//signup 
// import { test, expect } from "@playwright/test";

// test('Invalid Username Test', async ({ page }) => {

//   await page.goto('https://practice.expandtesting.com/login', {
//     waitUntil: 'domcontentloaded'
//   });

//   await page.getByLabel('Username').fill('wrongUser');
//   await page.getByLabel('Password').fill('SuperSecretPassword!');

//   await page.getByRole('button', { name: 'Login' }).click();

//   // Flexible assertion (BEST)
//   await expect(page.locator('#flash'))
//     .toContainText(/invalid/i);
// });
// const users = [
//   { username: 'standard_user', password: 'secret_sauce' },
//   { username: 'locked_out_user', password: 'secret_sauce' },
//   { username: 'problem_user', password: 'secret_sauce' }
// ];
// for (const user of users) {

  //import { test, expect } from '@playwright/test';

// test('SauceDemo Login - Single User', async ({ page }) => {

//   await page.goto('https://www.saucedemo.com/', {
//     waitUntil: 'domcontentloaded'
//   });

//   // Single username
//   const username = 'standard_user';
//   const password = 'secret_sauce';

//   await page.fill('#user-name', username);
//   await page.fill('#password', password);

//   await page.click('#login-button');

//   // Validate success
//   await expect(page.locator('.inventory_container')).toBeVisible();
// });
  
//import { test, expect } from '@playwright/test';


//import { test, expect } from '@playwright/test';

// test('Complete order and return to home', async ({ page }) => {

//   // Step 1: Open site
//   await page.goto('https://www.saucedemo.com/', {
//     waitUntil: 'domcontentloaded'
//   });

//   // Step 2: Login
//   await page.fill('#user-name', 'standard_user');
//   await page.fill('#password', 'secret_sauce');
//   await page.click('#login-button');

//   // Step 3: Add product
//   await page.locator('#add-to-cart-sauce-labs-bike-light').click();

//   // Step 4: Go to cart
//   await page.locator('.shopping_cart_link').click();

//   // Step 5: Checkout
//   await page.locator('#checkout').click();

//   // Step 6: Fill details
//   await page.fill('#first-name', 'Aadarsh');
//   await page.fill('#last-name', 'Ranjan');
//   await page.fill('#postal-code', '842001');

//   // Step 7: Continue
//   await page.locator('#continue').click();

//   // Step 8: Finish order
//   await page.locator('#finish').click();

//   // Step 9: Validate success message
//   await expect(page.locator('.complete-header'))
//     .toHaveText('Thank you for your order!');

//   // Step 10: Click Back Home
//   await page.locator('#back-to-products').click();

//   // Step 11: Validate redirected to home (inventory page)
//   await expect(page.locator('.inventory_container')).toBeVisible();
//});
// Test Register page
import { test, expect } from '@playwright/test';
test('Register Yourself', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/register', {
  waitUntil: 'domcontentloaded'
    });
    await page.getByLabel('Username').fill('testuser123');
    await page.getByLabel('Password').fill('Test@123');
await page.getByLabel('Confirm Password').fill('Test@123');
    await page.getByRole('button',{name: 'Register'}).click();
    // validate success message
    await expect(page.locator('#flash')).toContainText(/successfully registered/i);

});
