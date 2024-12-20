import {test, expect} from '@playwright/test'

test('Sauce Demo Login', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.waitForTimeout(3000);
    await page.getByText('Login').click();
    await page.waitForTimeout(3000);
});