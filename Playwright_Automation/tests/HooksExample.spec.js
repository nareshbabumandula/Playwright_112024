import {test, expect} from '@playwright/test'

test.describe('Sauce Demo Automation', async (params) => {

    test.beforeEach('Access Site', async ({page}) => {
        console.log("Accessed Sauce Demo portal");
    });

    test.beforeEach('Login into SauceDemo', async ({page}) => {
        console.log("Logged into SauceDemo");
    });

    test('Product Search', async ({page}) => {
        console.log("Successfully searched the product");
    });

    test('Add To Cart Search', async ({page}) => {
        console.log("Successfully added the product to the cart");
    });

    test('Checkout', async ({page}) => {
        console.log("Successfully checked out product from the cart");
    });

    test.skip('Payment', async ({page}) => {
        console.log("Successfully placed an order");
    });

    test.afterEach('Logout', async ({page}) => {
        console.log("Logged out from the application");
    });

});