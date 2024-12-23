/**
 * Playwright can interact with HTML elements such as textboxes, checkboxes, radio buttons, dropdownlist boxes, mouse clicks, type characters, keys and shortcuts as well as upload
 * files and focus elements
 */

import {test, expect} from '@playwright/test'

test('Playwright Actions', async ({page}) => {
    await page.goto('https://www.mycontactform.com');
    await page.getByRole('link', {name:'Sample Forms'}).click();

    // Text input
    await page.getByRole('textbox', {name:'subject'}).fill('Test Subject');

    // Date input
    await page.getByLabel('Date Selector: ').fill('10-30-2024');
   
    // Checkboxes
    await page.locator('//input[@name="email_to[]" and @value="0"]').check();
    await page.waitForTimeout(2000);

    // Dropdown listbox
    await page.getByLabel('Pre-Defined Field - Canadian Provinces:').selectOption("Ontario");
    await page.waitForTimeout(2000);
    await page.getByLabel('Pre-Defined Field - Canadian Provinces:').selectOption({label:'Yukon'});
    await page.waitForTimeout(2000);

    // Generic cick
    await page.getByRole('button').nth(0).click();

    // Double click
    await page.getByText('User Login:').dblclick();
    await page.waitForTimeout(2000);

    // Hover on element
    await page.getByText('Features').hover();
    await page.waitForTimeout(2000);

    // Keys and shortcuts
    // Hit Enter
    //await page.locator('input[name="submit"][value="Submit"]').nth(2).waitFor({state:'visible'});
    //await page.locator('input[name="submit"][value="Submit"]').nth(2).focus();
    await page.getByRole('button', { name: 'Submit' }).click();
    //await page.keyboard('Enter');

    await page.waitForTimeout(3000);
  
});
