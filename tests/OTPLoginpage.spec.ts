import {test,expect} from '@playwright/test';
test('otp login Test',async({page}) => {
    await page.goto('https://practice.expandtesting.com/otp-login',{
        waitUntil:'domcontentloaded'
    });
    //enter email
    await page.getByLabel('Email address').fill('practice@expandtesting.com');
    // click send otp
    await page.getByRole('button',{name: /send otp code/i}).click();
    // Enter otp
    await page.locator('#otp').fill('214365');     
    // Step 4: Submit OTP
   await page.locator('#btn-send-verify').click();
    // step 5 validate success
    await expect(page.getByRole('alert'))
    .toContainText(/success|logged|welcome/i);


});