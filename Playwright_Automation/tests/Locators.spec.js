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
   
   await page.waitForTimeout(1000);
   // Select option from the dropdown box
   await page.getByLabel('Drop Down Box:').selectOption('Third Option');
   await page.waitForTimeout(4000);
});


test('Playwright built-in locators', async ({page}) => {
   await page.goto('https://www.mycontactform.com/samples.php');
  
   // 1. page.getByLabel() --> To locate an object by its associated text
   // Select option from the dropdown box
   await page.getByLabel('Drop Down Box:').selectOption('Third Option');
   await page.waitForTimeout(3000);

   // 2. page.getByRole()) --> To locate by explicit and implicit accessibility attributes.
   await page.getByRole('Link', {name:'Features'}).click(); 
   await page.waitForTimeout(3000);

   // 3. page.getByText() --> To locate by text content
   await page.getByText('Pricing').click();
   await page.waitForTimeout(3000);
   await page.goBack();
   await page.waitForTimeout(3000);
   await page.getByText('Pric').click();
   await page.waitForTimeout(3000);
   const sampleForms = await page.getByText('Sample Forms', {exact:true});
   console.log("Tab name is : " + await sampleForms.innerText());
   sampleForms.click();
   await page.goBack();
   await page.waitForTimeout(3000);
   //await page.getByText('/Sample|Forms/').click();

   // 4. page.getByPlaceHolder() --> To locate a textbox by placeholder
   await page.getByPlaceholder('First Name').fill('John');
   await page.waitForTimeout(3000);

   // 5. page.getByAltText() to locate an element, usually image, by its text alternative.
   await page.goto('https://www.flipkart.com');
   await page.getByAltText('Login').nth(0).click();
   await page.waitForTimeout(3000);
});

test.only('Test ID', async ({page}) => {
   // 7. page.getByTestId() to locate an element based on test id
   await page.goto('https://www.amazon.in');
   await page.getByTestId('data-testid').nth(0).click();
   await page.waitForTimeout(3000);
});



