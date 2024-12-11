import {test, expect} from '@playwright/test'

test('Access Site', async ({page}) => {
    console.log("Accessed website..!");
});

test('Login', async ({page}) => {
    console.log("Logged into the application..!");
});

test('Search Product', async ({page}) => {
    test.fail();
    console.log("Searched the product..!");
});

test.skip('Add To Cart', async ({page}) => {
    console.log("Added the product to the cart..!");
});

test('Logout', async ({page}) => {
    console.log("Logged out from the application..!");
});