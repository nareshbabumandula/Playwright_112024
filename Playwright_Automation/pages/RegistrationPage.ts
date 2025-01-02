import {Page} from '@playwright/test'

export class RegistrationPage{

    private page:Page;
 
    constructor(page: Page){
        this.page=page;
    }

    // Selectors
    private name = '#name';
    private email = '#email';
    private username = '#user_signup';
    private password = '#pass_signup';
    private terms = '#useragree';

    // Methods
    async navigateToCreateAccountPage(url: string): Promise<void>{
        await this.page.goto(url);
    }

    async enterName(name:string): Promise<void>{
        await this.page.fill(this.name, name);
    }

    async enterEmailAddress(email:string): Promise<void>{
        await this.page.fill(this.email, email);
    }

}