/**
 * Fixtures in Playwright are reusable blocks that provide test cata, browser instances, page objects or any other resources
 * Using fixtures we can set up and tear down resources
 * 
 * Key Features of Fixtures:
 *  1. Reusable: Define once and use in multiple tests
 *  2. Scoping: Can be scoped to test, test group or globally
 *  3. Isolation: Each test gets its own instance of the fixture
 *  4. Built-in Fixtures: Playwright provides built-in fixtures like page, browser and context etc
 */

import {expect, test} from '@playwright/test'

test('Browser Fixture', async ({browser}) => {

    //const context = await browser.newContext();
    const context = await browser.newContext({viewport:{width: 1920, height:1080}, userAgent:'custom-agent'});
    const page = await context.newPage();
    await page.goto('https://www.mycontactform.com');
    await expect(page).toHaveTitle(/Free Contact and Email Forms | myContactForm.com/);    
    await page.waitForTimeout(5000);
});

test('Page Fixture', async ({page}) => {
    await page.goto('https://www.mycontactform.com');
    await page.locator('#user').fill('Moshin');
    await page.waitForTimeout(2000);
    await expect(page).toHaveTitle(/Free Contact and Email Forms | myContactForm.com/);    
});