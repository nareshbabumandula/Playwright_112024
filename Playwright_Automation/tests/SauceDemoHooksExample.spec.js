import {test, expect} from '@playwright/test'

test.describe('Sauce Demo Automation', async (params) => {

    test.beforeEach('Access Site', async ({page}) => {
        await page.goto("https://www.saucedemo.com/");
        console.log("Accessed Sauce Demo portal");
    });

    test('Login into SauceDemo', async ({page}) => {
        await page.locator('#user-name').fill('standard_user');
        await page.waitForTimeout(1000);
        await page.locator('#password').fill('secret_sauce');
        await page.waitForTimeout(1000);
        await page.locator('#login-button').click();
        await page.waitForTimeout(1000);
        console.log("Logged into SauceDemo");
    });

    test('Product Search', async ({page}) => {
        console.log("Successfully searched a product..!");
    });

    
    test.afterEach('Logout', async ({page}) => {
        page.locator('#react-burger-menu-btn').click();
        await page.waitForTimeout(1000);
        await page.getByRole('link', { name: 'Logout' }).click();
        await page.waitForTimeout(1000);
        console.log("Logged out from the application");
    });

});