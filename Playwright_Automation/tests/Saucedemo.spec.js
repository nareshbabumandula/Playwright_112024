import { test, expect } from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto("https://www.saucedemo.com/");
});


// Playwright recognizes files ending with .spec.js, , .test.js, spec.ts or test.ts 
test('Access Website', async ({page}) => {
    // Assertion on page URL
    await expect(page).toHaveURL("https://www.saucedemo.com/");
    // Assertion on page title
    await expect(page).toHaveTitle("Swag Labs");
    console.log('Website accessed');
});

test('Login', async ({page}) => {
    // Locating the username text field with ID based on CSS selector 
    await page.locator('#user-name').fill('standard_user');
    await page.waitForTimeout(2000);
    await page.locator('#password').fill('secret_sauce');
    await page.waitForTimeout(2000);
    await page.locator('#login-button').click();
    await page.waitForTimeout(2000);
    // Assertion on Products
    await expect(page.locator('span[class=title]')).toBeVisible();
    await page.locator('#react-burger-menu-btn').click();
    await page.waitForTimeout(2000);
    await page.locator('text=Logout').click();
    await page.waitForTimeout(2000);
});



