import {test,expect} from '@playwright/test'
import { RegistrationPage } from '../pages/RegistrationPage';


let registrationPage: RegistrationPage;

test('Create Account', async ({page}) => {
    registrationPage = new RegistrationPage(page); 
    await registrationPage.navigateToCreateAccountPage('https://www.mycontactform.com/signup.php')
    await registrationPage.enterName('Test User');
    await registrationPage.enterEmailAddress('testuser@gmail.com');
    await page.waitForTimeout(5000);
});