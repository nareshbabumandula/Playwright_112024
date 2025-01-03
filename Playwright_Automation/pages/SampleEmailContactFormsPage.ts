import {Page} from '@playwright/test'

export class SampleEmailContactFormsPage{

    private page:Page;
 
    constructor(page: Page){
        this.page=page;
    }

    // Selectors
    private marketingDepartment = 'input[name="email_to[]"][value="0"]';
    private sales = 'input[name="email_to[]"][value="1"]';
    private customerService = 'input[name="email_to[]"][value="2"]';
    
    private subject = '#subject';

    // Methods
    async navigateToSampleEmailContactFormsPage(url: string): Promise<void>{
        await this.page.goto(url);
    }

    async selectSendTo(department:string): Promise<void>{
        if (department.includes("Marketing")) {
            await this.page.click(this.marketingDepartment);
        } else if(department.includes("Sales")){
            await this.page.click(this.sales);
        }else{
            await this.page.click(this.customerService);
        }
    }

    async enterSubject(subject:string): Promise<void>{
        await this.page.fill(this.subject, subject);
    }

}