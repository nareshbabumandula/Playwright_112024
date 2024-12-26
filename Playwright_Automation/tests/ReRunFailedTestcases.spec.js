import {test, expect} from '@playwright/test'

test.describe.configure({retries:2});

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
    expect(title).toBe('abc.com'); // Expected to fail
    //expect(title).toBe('Sample Email Forms - myContactForm.com')
    // 5. Refresh a page
    await page.reload();

    // 6. Get the page current URL
    const pageurl = await page.url();
    console.log("Page current URL is : " + pageurl);
 
});