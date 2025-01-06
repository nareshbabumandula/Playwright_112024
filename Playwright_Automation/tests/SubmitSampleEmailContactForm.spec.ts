import {test,expect} from '@playwright/test'
import { SampleEmailContactFormsPage } from '../pages/SampleEmailContactFormsPage';
import { RegistrationPage } from '../pages/RegistrationPage';

let sampleEmailContactFormsPage: SampleEmailContactFormsPage;
let registrationPage: RegistrationPage;

test('Sample Email and Contact Forms', async ({page}) => {
    sampleEmailContactFormsPage = new SampleEmailContactFormsPage(page); 
    await sampleEmailContactFormsPage.navigateToSampleEmailContactFormsPage('https://www.mycontactform.com')
    await sampleEmailContactFormsPage.selectSendTo("Customer");
    await sampleEmailContactFormsPage.enterSubject("Test Subject");

    await page.waitForTimeout(5000);



});