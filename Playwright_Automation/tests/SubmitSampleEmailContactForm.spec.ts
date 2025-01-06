import {test,expect} from '@playwright/test'
import { SampleEmailContactFormsPage } from '../pages/SampleEmailContactFormsPage';
import { RegistrationPage } from '../pages/RegistrationPage';

let sampleEmailContactFormsPage: SampleEmailContactFormsPage;
let registrationPage: RegistrationPage;

test('Sample Email and Contact Forms', async ({page}) => {
    sampleEmailContactFormsPage = new SampleEmailContactFormsPage(page); 
    await sampleEmailContactFormsPage.navigateToSampleEmailContactFormsPage('https://www.mycontactform.com/samples.php')
    await sampleEmailContactFormsPage.selectSendTo("Customer");
    await sampleEmailContactFormsPage.enterSubject("Test Subject");
    await page.waitForTimeout(5000);


    registrationPage = new RegistrationPage(page);
    await registrationPage.navigateToCreateAccountPage('https://www.mycontactform.com/signup.php');
    await registrationPage.enterName('Peterson');
    await registrationPage.enterEmailAddress('peter@gmail.com');
    await page.waitForTimeout(5000);


});