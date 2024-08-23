const { BasePage } = require('./basePage')

class LoginPage extends BasePage {

    constructor(page) {
        super(page);

        this.url = "https://accounts.evernote.com/login";
        this.emailInput = page.locator("input[type='email']");
        this.passwordInput = page.locator("input[type='password']");
        this.googleButton = page.getByRole('button', { name: 'Continue with Google' });
        this.nextButton = page.getByRole('button', { name: 'Далее' });
        this.switchLink = page.locator("#switch-link");
        this.errorMessage = page.locator("//input//following-sibling::div[contains(@class,'error-status')]");
    }

    async navigate() {
        console.log("Navigate to login page");
        await this.page.goto(this.url);
    }

    async login(email, password) {
        console.log("Click on button 'Continue with Google'")
        await this.googleButton.click();
        console.log(`Enter email`)
        await this.emailInput.fill(email);
        console.log("Click on button 'Next'")
        await this.nextButton.click();
        console.log(`Enter password`)
        await this.passwordInput.fill(password);
        console.log("Click on button 'Next'")
        await this.nextButton.click();
    }
};

module.exports = { LoginPage };
