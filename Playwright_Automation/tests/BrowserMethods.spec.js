import {test, expect} from '@playwright/test'

test('Browser Actions', async ({page}) => {
    // 1. Navigate to URL
    await page.goto("https://www.mycontactform.com");
    await page.locator('text="Sample Forms"').click();
    await page.waitForTimeout(2000);

    // 2. Navigate backward
    await page.goBack();
    await page.waitForTimeout(2000);

    // 3. Navigate forward
    await page.goForward();
    await page.waitForTimeout(2000);

    // 4. Get page URL
    const title = await page.title();
    console.log("Page title is : " + title);

    // 5. Refresh a page
    await page.reload();

    // 6. Get the page current URL
    const pageurl = await page.url();
    console.log("Page current URL is : " + pageurl);
 
});


test('Login', async ({page}) => {
    await page.goto("https://www.mycontactform.com");
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/myContactForm.com/);
    await page.getByLabel("User Name:").fill("Shavali");
    await page.waitForTimeout(2000);
    await page.getByLabel("Password:").fill("Secure*1234");
    await page.waitForTimeout(2000);
    await page.locator("xpath=//input[@name='btnSubmit']").click();
    await page.waitForTimeout(2000);
});


test('Submit Sample Forms', async ({page}) => {
    await page.goto("https://www.mycontactform.com");
    await page.getByRole('link', { name: 'Sample Forms' }).click();
    await page.waitForTimeout(2000);
    page.locator('input[name="email_to[]"]').nth(0).click();
    await page.waitForTimeout(2000);
    page.locator('input[name="email_to[]"]').nth(1).click();
    await page.waitForTimeout(2000);
    page.locator('input[name="email_to[]"]').nth(2).click();
    await page.waitForTimeout(2000);
});


