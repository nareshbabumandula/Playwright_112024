import { test, expect } from '@playwright/test';

// Playwright recognizes files ending with .spec.js, , .test.js, spec.ts or test.ts 
test('Access Website', async ({ page }) => {
    console.log('Website accessed');
});


test('Login', async ({ page }) => {
    console.log('Logged into the application..!');
});

test('Search Product', async ({ page }) => {
    console.log('Product searched successfully..!');
});

test('Logout', async ({ page }) => {
    console.log('Logged out from the application..!');
});

