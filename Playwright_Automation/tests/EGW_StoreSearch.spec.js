import {test, expect} from '@playwright/test'

test.beforeEach(async ({page}) => {
    await page.goto("https://www.eyeglassworld.com");
});

test('Access EGW site', async ({page}) => {
   // Assertion on page title
   await expect(page).toHaveTitle("Eyeglass World - Save on Contacts, Glasses & Eye Exams");
   await page.waitForTimeout(2000);
});

test('Store Search', async ({page}) => {
    await page.locator('#inputStoreValue').fill("Tampa");
    await page.waitForTimeout(2000);    
    await page.locator('//button[contains(text(),"Find a Store")]').click();
});