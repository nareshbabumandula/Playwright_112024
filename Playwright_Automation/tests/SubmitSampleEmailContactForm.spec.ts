import {test,expect} from '@playwright/test'
import { SampleEmailContactFormsPage } from '../pages/SampleEmailContactFormsPage';


let sampleEmailContactFormsPage: SampleEmailContactFormsPage;

test('Sample Email and Contact Forms', async ({page}) => {
    sampleEmailContactFormsPage = new SampleEmailContactFormsPage(page); 
    await sampleEmailContactFormsPage.navigateToSampleEmailContactFormsPage('https://www.mycontactform.com/samples.php')
    await sampleEmailContactFormsPage.selectSendTo("Customer");
    await sampleEmailContactFormsPage.enterSubject("Test Subject");
    await page.waitForTimeout(5000);
});