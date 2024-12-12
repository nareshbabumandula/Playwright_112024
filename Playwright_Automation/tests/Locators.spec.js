import {test, expect} from '@playwright/test'

test('Playwright Locators', async ({page}) => {
   await page.goto('https://www.mycontactform.com');
   await expect(page).toHaveTitle('Free Contact and Email Forms - myContactForm.com');

   // Login
   // Identify the username and password fields based on its label name and fill the data
   await page.getByLabel('User Name:').fill('Shavali');
   await page.waitForTimeout(1000);
   await page.getByLabel('Password:').fill('Secure*1234');
   await page.waitForTimeout(1000);
   
   // Identify the login button based on its role and click on it
   await page.getByRole('button', {name:'Login'}).click();
   await page.waitForTimeout(1000);

   // Click on Free Account Sign Up! link
   await page.getByRole('Link', {name:'Free Account Sign Up!'}).click();
   await page.waitForTimeout(1000);
   
   // Locators
   await page.getByRole('link', {name:'Sample Forms'}).click();
   await page.waitForTimeout(2000);

   await page.locator('//input[@name="email_to[]" and @value=0]').click();
   await page.waitForTimeout(1000);
   await page.locator('//input[@name="email_to[]" and @value=1]').click();
   await page.waitForTimeout(1000);
   await page.locator('//input[@name="email_to[]" and @value=2]').click();
   
   await page.waitForTimeout(2000);
});
