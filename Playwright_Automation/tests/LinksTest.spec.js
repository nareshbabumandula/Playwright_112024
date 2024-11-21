import {test, expect} from '@playwright/test'

test('Different ways to located a link', async ({page}) => {
    await page.goto("https://www.mycontactform.com");
    await page.waitForTimeout(2000);

    // Locating a link by its text
    await page.locator('text=">> More Testimonials"').click();
    await page.waitForTimeout(2000);

    // Locating a link by its partial text
    await page.goto("https://www.mycontactform.com");
    await page.locator('text=Sample F').click();
    await page.waitForTimeout(2000);

    // Locating a link by its href attribute
    await page.locator('[href="https://www.mycontactform.com/testimonials.php"]').nth(0).click();
    await page.waitForTimeout(2000);

    // Locating a link by its role
    await page.locator('role=link[name="Resources"]').click();
    await page.waitForTimeout(2000);

});