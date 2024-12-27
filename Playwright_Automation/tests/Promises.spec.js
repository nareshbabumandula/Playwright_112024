/**
 * Promises: Promises represent the eventual result of an asynchronous operation. In Playwright, many actions like navigation, clicking, or waiting for an element are asynchronous
 * and return promises.
 * 
 * Promises ensure tat the operation is completed before the test proceeds
 * 
 * Use Case of Promises:
 *   1. Waiting for a page to load before performing actions.
 *   2. Handling multiple asynchronous actions in parallel(e.g. navigation + clicking a button)
 *   3. Ensuring test actions are performed in the correct sequence
 */
import {expect, test} from '@playwright/test'

test('Promises Example', async ({page}) => {
    await page.goto('https://www.mycontactform.com'); // Navigating to the URL
    await locator('#user').fill('Moshin');
    await waitForTimeout(2000);
    expect(page).toHaveTitle(/Free Contact and Email Forms | myContactForm.com/);    
});