import {test, expect} from '@playwright/test'

test('Locators', async ({page}) => {
   await page.goto('https://www.mycontactform.com');
   await expect(page).toHaveTitle('Free Contact and Email Forms - myContactForm.com');

   // Absolute XPath : Starts from root or parent node in the html dom with a preceding single slash
   await page.waitForTimeout(2000);
   await page.locator('xpath=/html/body/div[3]/div[2]/div/form/fieldset/div/input').nth(0).fill('Charitha');
   await page.waitForTimeout(2000);

   // Relative XPath : Starts from the node our choice with a preceding double slash Syntax: //html tag[@attr="value"]
   await page.locator('xpath=//input[@id="user"]').fill('Rahul');
   await page.waitForTimeout(2000);

   const username = page.locator('//input[@id="user"]');
   
   if ((await username.inputValue()).includes("Rahul")) {
      console.log("Value retrieved from the username field is matched with the expected value : " + await username.inputValue());   
   } else {
      console.log("Value retrieved from the username field is not matched with the expected value : " + await username.inputValue());   
   }

   // XPath with AND and OR conditions
   await page.locator('xpath=//input[@id="user" and @name="user"]').fill('Moshin');
   await page.waitForTimeout(2000);
   await page.locator('xpath=//input[@id="user" or @name="userID"]').fill('Srinivas');
   await page.waitForTimeout(2000);


   // CSS Locator
   await page.locator('input[id="user"]').fill('Ramu');
   await page.waitForTimeout(2000);
   await page.locator('input#user').fill('Venkatesh');
   await page.waitForTimeout(2000);

   // CSS with AND and OR conditions
   await page.locator('input[id="user"][name="user"]').fill('Kiran');
   await page.waitForTimeout(2000);
   await page.locator('input[id="user"],[name="user123"]').fill('Teja');
   await page.waitForTimeout(2000);


});



